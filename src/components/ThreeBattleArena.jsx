import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { createArticulated3DFighter, animateArticulated3DFighter } from './ThreeFighter3DModels';
import { sound } from '../utils/audio';

export const ThreeBattleArena = ({
  selectedHero,
  selectedVillain,
  introPhase = 'active',
  heroHp = 1000,
  bossHp = 250000,
  isBossStaggered = false,
  bossPhase = 1,
  heroSuperEnergy = 0,
  activeGesture = '',
  onHeroDamaged,
  incomingAttackWarning,
  setIncomingAttackWarning,
  heroActionTrigger,
  isVictory = false,
  isDefeated = false,
  onTelemetryUpdate
}) => {
  const mountRef = useRef(null);

  // References to 3D entities
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const heroGroupRef = useRef(null);
  const villainGroupRef = useRef(null);
  const heroRigRef = useRef(null);
  const villainRigRef = useRef(null);
  const shieldMeshRef = useRef(null);
  const shieldWireRef = useRef(null);
  const dangerZoneMeshRef = useRef(null);
  const particlesRef = useRef(null);

  // FUTURISTIC CITY & PORTAL REFERENCES
  const cityGroupRef = useRef(null);
  const speedersRef = useRef([]);
  const portalVortexRef = useRef(null);
  const portalRingsRef = useRef([]);

  // HERO UNIQUE POWERS 3D VFX REFERENCES
  const heroVfxGroupRef = useRef(null);
  const ironmanBeamRef = useRef(null);
  const ironmanRingsRef = useRef([]);
  const thorLightningRef = useRef(null);
  const thorSkyBoltsRef = useRef(null);
  const thorHammerMeshRef = useRef(null);
  const spideyWebLineRef = useRef(null);
  const spideyWebBurstRef = useRef(null);
  const spideyWebTrapRef = useRef(null);
  const capFlyingShieldRef = useRef(null);
  const capStarSlamRef = useRef(null);
  const strangeMandalasRef = useRef(null);
  const mirrorShardsRef = useRef(null);

  // VOID TITAN & VILLAIN 3D VFX REFERENCES
  const villainVfxGroupRef = useRef(null);
  const voidBeamRef = useRef(null);
  const voidShockwaveRef = useRef(null);
  const voidOrbsRef = useRef([]);
  const goblinBombRef = useRef(null);
  const goblinExplosionRef = useRef(null);
  const thanosBeamRef = useRef(null);
  const thanosShockwaveRef = useRef(null);
  const magnetoSpikesRef = useRef(null);
  const magnetoAuraRef = useRef(null);
  const doomOrbitalBeamRef = useRef(null);
  const doomGroundRingRef = useRef(null);
  const lokiScepterBeamRef = useRef(null);
  const lokiIllusionsRef = useRef(null);

  // Active VFX State Tracker
  const activeVfxRef = useRef({
    heroAttackType: null,
    heroVfxTime: 0,
    villainAttackActive: false,
    villainVfxTime: 0
  });

  // Combat Animation States & FSM State
  const heroAnimRef = useRef({ state: 'idle', time: 0, recoiling: false, recoilTime: 0 });
  const villainAnimRef = useRef({ state: 'idle', time: 0, recoiling: false, recoilTime: 0, hasDamaged: false });
  const cameraShakeRef = useRef(0);
  const aiAttackTimerRef = useRef(-2.0); // Grace period on start
  const introAnimRef = useRef({ emergeProgress: 0, heroEntranceProgress: 0 });
  const aiFsmStateRef = useRef('IDLE');

  // Reset timer on defeat/retry
  useEffect(() => {
    if (!isDefeated) {
      aiAttackTimerRef.current = -2.0;
      if (setIncomingAttackWarning) setIncomingAttackWarning(false);
    }
  }, [isDefeated, setIncomingAttackWarning]);

  // Set up Three.js 3D Battle Arena
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene & Setup with Atmospheric Volumetric Fog
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050818, 0.038);
    sceneRef.current = scene;

    // 2. Cinematic Camera
    const camera = new THREE.PerspectiveCamera(46, width / height, 0.1, 1000);
    camera.position.set(0, 2.3, 8.4);
    camera.lookAt(0, 1.5, 0);
    cameraRef.current = camera;

    // 3. WebGL Renderer with High-End Tone Mapping
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // 4. Lighting Rig for Volumetric 3D Bodies & Arena
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.25);
    scene.add(ambientLight);

    const cameraKeyLight = new THREE.DirectionalLight(0xffffff, 3.0);
    cameraKeyLight.position.set(0, 3.2, 8.5);
    scene.add(cameraKeyLight);

    const overheadLight = new THREE.DirectionalLight(0xffffff, 2.0);
    overheadLight.position.set(2, 6, 5);
    scene.add(overheadLight);

    const heroKeyLight = new THREE.PointLight(0x00f3ff, 2.8, 15);
    heroKeyLight.position.set(-3.5, 3.2, 3);
    scene.add(heroKeyLight);

    const villainKeyLight = new THREE.PointLight(0xa855f7, 3.0, 15);
    villainKeyLight.position.set(3.5, 3.2, 3);
    scene.add(villainKeyLight);

    const portalCoreLight = new THREE.PointLight(0x8b5cf6, 5.0, 28);
    portalCoreLight.position.set(0, 2.5, -4.5);
    scene.add(portalCoreLight);

    // ============================================================
    // 5. FUTURISTIC 3D CYBER CITY BACKGROUND & SKYWAYS
    // ============================================================
    const cityGroup = new THREE.Group();
    scene.add(cityGroup);
    cityGroupRef.current = cityGroup;

    // Cyber Skyscrapers with Glowing Neon Trims
    const bldgMat = new THREE.MeshStandardMaterial({
      color: 0x060a17,
      metalness: 0.9,
      roughness: 0.25
    });
    const neonCyanMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff });
    const neonVioletMat = new THREE.MeshBasicMaterial({ color: 0xa855f7 });
    const neonGoldMat = new THREE.MeshBasicMaterial({ color: 0xfbbf24 });

    const buildingCoords = [
      { x: -16, z: -20, w: 4, d: 4, h: 22 },
      { x: -11, z: -17, w: 3.5, d: 3.5, h: 17 },
      { x: -7,  z: -24, w: 4.5, d: 4.5, h: 26 },
      { x: -4,  z: -18, w: 3, d: 3, h: 15 },
      { x: 4,   z: -19, w: 3.2, d: 3.2, h: 16 },
      { x: 8,   z: -23, w: 4.2, d: 4.2, h: 25 },
      { x: 12,  z: -16, w: 3.8, d: 3.8, h: 18 },
      { x: 17,  z: -21, w: 4.5, d: 4.5, h: 24 }
    ];

    buildingCoords.forEach((bc, idx) => {
      const bGeo = new THREE.BoxGeometry(bc.w, bc.h, bc.d);
      const bMesh = new THREE.Mesh(bGeo, bldgMat);
      bMesh.position.set(bc.x, bc.h / 2 - 2, bc.z);
      cityGroup.add(bMesh);

      // Glowing roof antenna / beacon
      const antGeo = new THREE.CylinderGeometry(0.06, 0.08, 3.5, 6);
      const antMesh = new THREE.Mesh(antGeo, idx % 2 === 0 ? neonCyanMat : neonVioletMat);
      antMesh.position.set(bc.x, bc.h - 1, bc.z);
      cityGroup.add(antMesh);

      // Neon horizontal edge ribbon
      const ribGeo = new THREE.BoxGeometry(bc.w + 0.1, 0.25, bc.d + 0.1);
      const ribMesh = new THREE.Mesh(ribGeo, idx % 3 === 0 ? neonGoldMat : idx % 2 === 0 ? neonCyanMat : neonVioletMat);
      ribMesh.position.set(bc.x, bc.h * 0.75, bc.z);
      cityGroup.add(ribMesh);
    });

    // Moving Cyber Speeders (Hover Cars cruising across skyways)
    const speeders = [];
    const speederColors = [0x00f3ff, 0xa855f7, 0xf97316, 0x38bdf8, 0xef4444, 0x10b981];
    for (let s = 0; s < 6; s++) {
      const sGroup = new THREE.Group();
      const sBody = new THREE.Mesh(
        new THREE.BoxGeometry(0.8, 0.18, 0.35),
        new THREE.MeshBasicMaterial({ color: speederColors[s % speederColors.length] })
      );
      sGroup.add(sBody);

      // Rear engine light streak
      const sTrail = new THREE.Mesh(
        new THREE.BoxGeometry(1.4, 0.08, 0.12),
        new THREE.MeshBasicMaterial({ color: speederColors[s % speederColors.length], transparent: true, opacity: 0.7 })
      );
      sTrail.position.x = s % 2 === 0 ? -0.8 : 0.8;
      sGroup.add(sTrail);

      const yPos = 4.5 + (s * 1.4);
      const zPos = -13 - (s * 2.2);
      const speed = (s % 2 === 0 ? 1 : -1) * (5.5 + s * 1.2);
      sGroup.position.set((Math.random() - 0.5) * 30, yPos, zPos);
      cityGroup.add(sGroup);

      speeders.push({ group: sGroup, speed, zPos });
    }
    speedersRef.current = speeders;

    // ============================================================
    // 6. GIANT DIMENSIONAL VOID PORTAL (Center Arena Backdrop)
    // ============================================================
    const portalGroup = new THREE.Group();
    portalGroup.position.set(0, 2.4, -4.2);
    scene.add(portalGroup);

    // Outer Rotating Violet Vortex Ring
    const pRing1 = new THREE.Mesh(
      new THREE.TorusGeometry(3.4, 0.09, 16, 64),
      new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.9 })
    );
    portalGroup.add(pRing1);

    // Inner Counter-Rotating Cyan Vortex Ring
    const pRing2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.6, 0.06, 16, 64),
      new THREE.MeshBasicMaterial({ color: 0x00f3ff, transparent: true, opacity: 0.85 })
    );
    portalGroup.add(pRing2);
    portalRingsRef.current = [pRing1, pRing2];

    // Swirling Dark Matter Vortex Disc
    const vortexGeo = new THREE.RingGeometry(0.2, 3.2, 32);
    const vortexMat = new THREE.MeshBasicMaterial({
      color: 0x2e1065,
      transparent: true,
      opacity: 0.75,
      side: THREE.DoubleSide
    });
    const vortexDisc = new THREE.Mesh(vortexGeo, vortexMat);
    portalGroup.add(vortexDisc);
    portalVortexRef.current = vortexDisc;

    // ============================================================
    // 7. ARENA BATTLE PLATFORM & TACTICAL RINGS
    // ============================================================
    const platformGeo = new THREE.CylinderGeometry(5.6, 6.0, 0.35, 48);
    const platformMat = new THREE.MeshStandardMaterial({
      color: 0x050811,
      metalness: 0.92,
      roughness: 0.18
    });
    const platform = new THREE.Mesh(platformGeo, platformMat);
    platform.position.y = -0.18;
    scene.add(platform);

    const ringGeo = new THREE.TorusGeometry(5.5, 0.06, 16, 64);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x8b5cf6 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.02;
    scene.add(ring);

    const innerRingGeo = new THREE.TorusGeometry(3.6, 0.03, 16, 64);
    const innerRingMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff, transparent: true, opacity: 0.7 });
    const innerRing = new THREE.Mesh(innerRingGeo, innerRingMat);
    innerRing.rotation.x = Math.PI / 2;
    innerRing.position.y = 0.02;
    scene.add(innerRing);

    // Telegraph Danger Ground Zone (Incoming Attack Warning)
    const dangerGeo = new THREE.RingGeometry(0.1, 2.2, 32);
    const dangerMat = new THREE.MeshBasicMaterial({
      color: 0xff0033,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    const dangerZone = new THREE.Mesh(dangerGeo, dangerMat);
    dangerZone.rotation.x = -Math.PI / 2;
    dangerZone.position.set(-1.0, 0.03, 0.5);
    scene.add(dangerZone);
    dangerZoneMeshRef.current = dangerZone;

    // ============================================================
    // 8. BUILD ARTICULATED 3D HUMANOID HERO FIGHTER
    // ============================================================
    const heroResult = createArticulated3DFighter(selectedHero, false);
    const heroGroup = heroResult.group;
    heroGroup.position.set(-2.2, 0, 0.5);
    heroGroup.rotation.y = Math.PI / 3.4;
    scene.add(heroGroup);
    heroGroupRef.current = heroGroup;
    heroRigRef.current = heroResult;

    // ============================================================
    // 9. BUILD ARTICULATED 3D VOID TITAN / VILLAIN FIGHTER
    // ============================================================
    const villainResult = createArticulated3DFighter(selectedVillain, true);
    const villainGroup = villainResult.group;
    if (introPhase === 'opening') {
      villainGroup.position.set(0, 0.5, -4.5);
      villainGroup.scale.set(0.1, 0.1, 0.1);
    } else {
      villainGroup.position.set(2.2, 0, 0.5);
      villainGroup.scale.set(1, 1, 1);
    }
    villainGroup.rotation.y = -Math.PI / 3.4;
    scene.add(villainGroup);
    villainGroupRef.current = villainGroup;
    villainRigRef.current = villainResult;

    // 10. 3D Holographic Hex Energy Shield (Attached in front of Hero)
    const shieldGroup = new THREE.Group();
    const shieldGeo = new THREE.CircleGeometry(1.6, 6);
    const shieldMat = new THREE.MeshBasicMaterial({
      color: 0x00f3ff,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    const shieldMesh = new THREE.Mesh(shieldGeo, shieldMat);
    shieldGroup.add(shieldMesh);

    const shieldWireGeo = new THREE.RingGeometry(1.55, 1.65, 6);
    const shieldWireMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    const shieldWire = new THREE.Mesh(shieldWireGeo, shieldWireMat);
    shieldGroup.add(shieldWire);

    shieldGroup.position.set(0.6, 2.0, 0.5);
    shieldGroup.rotation.y = Math.PI / 4;
    heroGroup.add(shieldGroup);
    shieldMeshRef.current = shieldMesh;
    shieldWireRef.current = shieldWire;

    // ============================================================
    // 11. HERO 3D SIGNATURE POWERS & WEAPONS VFX SYSTEM
    // ============================================================
    const heroVfxGroup = new THREE.Group();
    scene.add(heroVfxGroup);
    heroVfxGroupRef.current = heroVfxGroup;

    // A. Plasma Ranger / Iron Man: Arc Reactor Unibeam & Repulsor Lasers
    const beamGeo = new THREE.CylinderGeometry(0.24, 0.24, 4.8, 16);
    beamGeo.rotateZ(Math.PI / 2);
    beamGeo.translate(2.4, 0, 0);
    const beamMat = new THREE.MeshBasicMaterial({
      color: 0x00f3ff,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const ironmanBeam = new THREE.Mesh(beamGeo, beamMat);
    ironmanBeam.position.set(-1.8, 2.1, 0.5);
    ironmanBeam.visible = false;
    heroVfxGroup.add(ironmanBeam);
    ironmanBeamRef.current = ironmanBeam;

    const rings = [];
    for (let r = 0; r < 3; r++) {
      const rMesh = new THREE.Mesh(
        new THREE.TorusGeometry(0.5, 0.04, 8, 24),
        new THREE.MeshBasicMaterial({ color: 0x00f3ff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending })
      );
      rMesh.rotation.y = Math.PI / 2;
      rMesh.visible = false;
      heroVfxGroup.add(rMesh);
      rings.push(rMesh);
    }
    ironmanRingsRef.current = rings;

    // B. Storm Guardian / Thor: Magnetic Mjolnir Hammer & Sky Lightning Cataclysm
    const thorLightGeo = new THREE.BufferGeometry();
    const thorPos = new Float32Array(30 * 3);
    thorLightGeo.setAttribute('position', new THREE.BufferAttribute(thorPos, 3));
    const thorLightning = new THREE.Line(
      thorLightGeo,
      new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0, linewidth: 3, blending: THREE.AdditiveBlending })
    );
    heroVfxGroup.add(thorLightning);
    thorLightningRef.current = thorLightning;

    const skyLightGeo = new THREE.BufferGeometry();
    const skyPos = new Float32Array(18 * 3);
    skyLightGeo.setAttribute('position', new THREE.BufferAttribute(skyPos, 3));
    const skyLightning = new THREE.Line(
      skyLightGeo,
      new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending })
    );
    heroVfxGroup.add(skyLightning);
    thorSkyBoltsRef.current = skyLightning;

    // Returning Flying Magnetic Hammer
    const hammerMesh = new THREE.Group();
    const hHead = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.35, 0.3), new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.9 }));
    const hHandle = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.65), new THREE.MeshStandardMaterial({ color: 0x475569 }));
    hHandle.position.y = -0.35;
    hammerMesh.add(hHead);
    hammerMesh.add(hHandle);
    hammerMesh.visible = false;
    heroVfxGroup.add(hammerMesh);
    thorHammerMeshRef.current = hammerMesh;

    // C. Web Ninja / Spider-Man: Web Line, Snare Trap & Nano-Web Burst
    const webLineGeo = new THREE.BufferGeometry();
    const webLinePos = new Float32Array(6);
    webLineGeo.setAttribute('position', new THREE.BufferAttribute(webLinePos, 3));
    const spideyWebLine = new THREE.Line(
      webLineGeo,
      new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, linewidth: 2 })
    );
    heroVfxGroup.add(spideyWebLine);
    spideyWebLineRef.current = spideyWebLine;

    const webBurstGroup = new THREE.Group();
    for (let w = 0; w < 10; w++) {
      const strandGeo = new THREE.BufferGeometry();
      strandGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));
      const strand = new THREE.Line(
        strandGeo,
        new THREE.LineBasicMaterial({ color: 0x00f3ff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending })
      );
      webBurstGroup.add(strand);
    }
    heroVfxGroup.add(webBurstGroup);
    spideyWebBurstRef.current = webBurstGroup;

    // Web Snare Trap at Boss Feet
    const webTrapGeo = new THREE.RingGeometry(0.2, 1.4, 16);
    const webTrap = new THREE.Mesh(
      webTrapGeo,
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, side: THREE.DoubleSide })
    );
    webTrap.rotation.x = -Math.PI / 2;
    webTrap.position.set(2.2, 0.04, 0.5);
    heroVfxGroup.add(webTrap);
    spideyWebTrapRef.current = webTrap;

    // D. Shield Sentinel / Captain America: Flying Shield & Star Slam Shockwave
    const capShieldMesh = new THREE.Group();
    const capDisc = new THREE.Mesh(
      new THREE.CylinderGeometry(0.55, 0.55, 0.08, 32),
      new THREE.MeshStandardMaterial({ color: 0x1d4ed8, metalness: 0.95, roughness: 0.15 })
    );
    capShieldMesh.add(capDisc);
    const capRing = new THREE.Mesh(
      new THREE.RingGeometry(0.42, 0.55, 32),
      new THREE.MeshBasicMaterial({ color: 0xb91c1c, side: THREE.DoubleSide })
    );
    capRing.position.y = 0.045;
    capRing.rotation.x = -Math.PI / 2;
    capShieldMesh.add(capRing);
    capShieldMesh.visible = false;
    heroVfxGroup.add(capShieldMesh);
    capFlyingShieldRef.current = capShieldMesh;

    const capSlamMesh = new THREE.Mesh(
      new THREE.RingGeometry(0.2, 0.45, 32),
      new THREE.MeshBasicMaterial({ color: 0xfbbf24, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false })
    );
    capSlamMesh.rotation.x = -Math.PI / 2;
    capSlamMesh.position.set(0, 0.03, 0.5);
    heroVfxGroup.add(capSlamMesh);
    capStarSlamRef.current = capSlamMesh;

    // E. Arcane Sorcerer / Doctor Strange: Eldritch Mandala Rings & Mirror Shards
    const mandalaGroup = new THREE.Group();
    const m1 = new THREE.Mesh(
      new THREE.RingGeometry(0.5, 0.56, 32),
      new THREE.MeshBasicMaterial({ color: 0xf59e0b, side: THREE.DoubleSide, blending: THREE.AdditiveBlending })
    );
    const m2 = new THREE.Mesh(
      new THREE.RingGeometry(0.75, 0.82, 6),
      new THREE.MeshBasicMaterial({ color: 0xf97316, side: THREE.DoubleSide, blending: THREE.AdditiveBlending })
    );
    mandalaGroup.add(m1);
    mandalaGroup.add(m2);
    mandalaGroup.visible = false;
    heroVfxGroup.add(mandalaGroup);
    strangeMandalasRef.current = mandalaGroup;

    const mirrorGroup = new THREE.Group();
    for (let m = 0; m < 8; m++) {
      const shard = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.35 + Math.random() * 0.25),
        new THREE.MeshStandardMaterial({
          color: 0xa855f7,
          metalness: 0.9,
          roughness: 0.1,
          transparent: true,
          opacity: 0,
          blending: THREE.AdditiveBlending
        })
      );
      shard.position.set(1.5 + (Math.random() - 0.5) * 1.5, 2.0 + (Math.random() - 0.5) * 1.2, 0.5 + (Math.random() - 0.5) * 1.0);
      mirrorGroup.add(shard);
    }
    heroVfxGroup.add(mirrorGroup);
    mirrorShardsRef.current = mirrorGroup;

    // ============================================================
    // 12. VOID TITAN & VILLAIN 3D SIGNATURE POWERS VFX SYSTEM
    // ============================================================
    const villainVfxGroup = new THREE.Group();
    scene.add(villainVfxGroup);
    villainVfxGroupRef.current = villainVfxGroup;

    // VOID TITAN: Dark Matter Ray & Core Cataclysm Shockwave
    const voidBeamGeo = new THREE.CylinderGeometry(0.38, 0.38, 5.0, 16);
    voidBeamGeo.rotateZ(Math.PI / 2);
    voidBeamGeo.translate(-2.5, 0, 0);
    const voidBeam = new THREE.Mesh(
      voidBeamGeo,
      new THREE.MeshBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0, blending: THREE.AdditiveBlending })
    );
    voidBeam.position.set(1.8, 2.3, 0.5);
    voidBeam.visible = false;
    villainVfxGroup.add(voidBeam);
    voidBeamRef.current = voidBeam;

    const voidShockwave = new THREE.Mesh(
      new THREE.RingGeometry(0.2, 0.55, 32),
      new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0, side: THREE.DoubleSide })
    );
    voidShockwave.rotation.x = -Math.PI / 2;
    voidShockwave.position.set(-0.5, 0.04, 0.5);
    villainVfxGroup.add(voidShockwave);
    voidShockwaveRef.current = voidShockwave;

    // Swirling Void Orbs (Orbiting during Enraged state)
    const voidOrbs = [];
    for (let o = 0; o < 3; o++) {
      const orb = new THREE.Mesh(
        new THREE.SphereGeometry(0.18, 12, 12),
        new THREE.MeshBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0 })
      );
      villainVfxGroup.add(orb);
      voidOrbs.push(orb);
    }
    voidOrbsRef.current = voidOrbs;

    // Green Goblin Pumpkin Bomb
    const pBomb = new THREE.Mesh(
      new THREE.SphereGeometry(0.24, 16, 14),
      new THREE.MeshStandardMaterial({ color: 0xf97316, emissive: 0xea580c, metalness: 0.7, roughness: 0.2 })
    );
    pBomb.visible = false;
    villainVfxGroup.add(pBomb);
    goblinBombRef.current = pBomb;

    const pExplosion = new THREE.Mesh(
      new THREE.SphereGeometry(1.2, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xf97316, transparent: true, opacity: 0, blending: THREE.AdditiveBlending })
    );
    pExplosion.visible = false;
    villainVfxGroup.add(pExplosion);
    goblinExplosionRef.current = pExplosion;

    // Thanos Infinity Beam & Shockwave
    const tBeamGeo = new THREE.CylinderGeometry(0.32, 0.32, 4.8, 16);
    tBeamGeo.rotateZ(Math.PI / 2);
    tBeamGeo.translate(-2.4, 0, 0);
    const thanosBeam = new THREE.Mesh(
      tBeamGeo,
      new THREE.MeshBasicMaterial({ color: 0xd946ef, transparent: true, opacity: 0, blending: THREE.AdditiveBlending })
    );
    thanosBeam.position.set(1.8, 2.4, 0.5);
    thanosBeam.visible = false;
    villainVfxGroup.add(thanosBeam);
    thanosBeamRef.current = thanosBeam;

    const tShockwave = new THREE.Mesh(
      new THREE.RingGeometry(0.2, 0.45, 32),
      new THREE.MeshBasicMaterial({ color: 0xef4444, transparent: true, opacity: 0, side: THREE.DoubleSide })
    );
    tShockwave.rotation.x = -Math.PI / 2;
    tShockwave.position.set(-0.5, 0.04, 0.5);
    villainVfxGroup.add(tShockwave);
    thanosShockwaveRef.current = tShockwave;

    // Magneto Spikes & Aura
    const magGroup = new THREE.Group();
    for (let s = 0; s < 5; s++) {
      const spikeGeo = new THREE.ConeGeometry(0.12, 0.65, 4);
      spikeGeo.rotateZ(Math.PI / 2);
      const spike = new THREE.Mesh(spikeGeo, new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.95, roughness: 0.15 }));
      magGroup.add(spike);
    }
    magGroup.visible = false;
    villainVfxGroup.add(magGroup);
    magnetoSpikesRef.current = magGroup;

    const magAura = new THREE.Mesh(
      new THREE.TorusGeometry(1.4, 0.05, 12, 32),
      new THREE.MeshBasicMaterial({ color: 0xef4444, transparent: true, opacity: 0, blending: THREE.AdditiveBlending })
    );
    magAura.position.set(2.2, 2.2, 0.5);
    villainVfxGroup.add(magAura);
    magnetoAuraRef.current = magAura;

    // Doctor Doom Orbital Disintegration Ray
    const doomBeamGeo = new THREE.CylinderGeometry(0.42, 0.42, 8.0, 20);
    const doomBeam = new THREE.Mesh(
      doomBeamGeo,
      new THREE.MeshBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0, blending: THREE.AdditiveBlending })
    );
    doomBeam.position.set(-2.0, 4.0, 0.5);
    doomBeam.visible = false;
    villainVfxGroup.add(doomBeam);
    doomOrbitalBeamRef.current = doomBeam;

    const doomRing = new THREE.Mesh(
      new THREE.RingGeometry(0.2, 0.5, 32),
      new THREE.MeshBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0, side: THREE.DoubleSide })
    );
    doomRing.rotation.x = -Math.PI / 2;
    doomRing.position.set(-2.0, 0.04, 0.5);
    villainVfxGroup.add(doomRing);
    doomGroundRingRef.current = doomRing;

    // Loki Scepter Beam & Clones
    const lokiBeam = new THREE.Mesh(
      tBeamGeo,
      new THREE.MeshBasicMaterial({ color: 0x84cc16, transparent: true, opacity: 0, blending: THREE.AdditiveBlending })
    );
    lokiBeam.position.set(1.8, 2.2, 0.5);
    lokiBeam.visible = false;
    villainVfxGroup.add(lokiBeam);
    lokiScepterBeamRef.current = lokiBeam;

    const lokiCloneGroup = new THREE.Group();
    for (let c = 0; c < 2; c++) {
      const clone = new THREE.Mesh(
        new THREE.CylinderGeometry(0.4, 0.35, 3.8, 16),
        new THREE.MeshBasicMaterial({ color: 0x84cc16, transparent: true, opacity: 0, wireframe: true })
      );
      clone.position.set(c === 0 ? 1.0 : 3.4, 1.9, 0.5);
      lokiCloneGroup.add(clone);
    }
    villainVfxGroup.add(lokiCloneGroup);
    lokiIllusionsRef.current = lokiCloneGroup;

    // 13. Atmospheric Ambient Dimensional Sparks
    const particleCount = 90;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      pPos[i] = (Math.random() - 0.5) * 12;
      pPos[i + 1] = Math.random() * 6;
      pPos[i + 2] = (Math.random() - 0.5) * 10;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xa855f7,
      size: 0.09,
      transparent: true,
      opacity: 0.85,
      depthWrite: false
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);
    particlesRef.current = particles;

    // Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // ============================================================
    // 14. 60 FPS COMBAT GAME LOOP & TELEMETRY
    // ============================================================
    let clock = new THREE.Clock();
    let animId;
    let frameCount = 0;
    let lastFpsTime = performance.now();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.1);
      const elapsed = clock.getElapsedTime();

      // FPS Telemetry calculation
      frameCount++;
      const now = performance.now();
      if (now - lastFpsTime >= 500) {
        const currentFps = Math.round((frameCount * 1000) / (now - lastFpsTime));
        frameCount = 0;
        lastFpsTime = now;
        if (onTelemetryUpdate) {
          onTelemetryUpdate({
            fps: currentFps,
            aiState: aiFsmStateRef.current,
            distance: villainGroupRef.current ? Math.abs(villainGroupRef.current.position.x - (-2.2)).toFixed(1) : '3.8'
          });
        }
      }

      // Rotate Swirling Dimensional Void Portal
      if (portalRingsRef.current.length >= 2) {
        portalRingsRef.current[0].rotation.z += delta * 0.85;
        portalRingsRef.current[1].rotation.z -= delta * 1.25;
      }
      if (portalVortexRef.current) {
        portalVortexRef.current.rotation.z += delta * 1.6;
      }

      // Move Flying Skyway Speeders
      if (speedersRef.current) {
        speedersRef.current.forEach((sp) => {
          sp.group.position.x += sp.speed * delta;
          if (sp.group.position.x > 26) sp.group.position.x = -26;
          else if (sp.group.position.x < -26) sp.group.position.x = 26;
        });
      }

      // Dynamic Camera Breathing & Trauma Shake
      if (cameraShakeRef.current > 0.001) {
        camera.position.x = (Math.random() - 0.5) * cameraShakeRef.current;
        camera.position.y = 2.3 + (Math.random() - 0.5) * cameraShakeRef.current;
        cameraShakeRef.current *= 0.86;
      } else {
        camera.position.x = Math.sin(elapsed * 0.8) * 0.05;
        camera.position.y = 2.3 + Math.sin(elapsed * 1.2) * 0.03;
      }

      // Ambient spark animation
      if (particlesRef.current) {
        const positions = particlesRef.current.geometry.attributes.position.array;
        for (let i = 1; i < positions.length; i += 3) {
          positions[i] += delta * 0.9;
          if (positions[i] > 6) positions[i] = 0;
        }
        particlesRef.current.geometry.attributes.position.needsUpdate = true;
      }

      // --- INTRO PORTAL EMERGENCE ---
      if (introPhase === 'emerging' || introPhase === 'boss-title') {
        if (villainGroupRef.current) {
          const v = villainGroupRef.current;
          introAnimRef.current.emergeProgress = Math.min(1, introAnimRef.current.emergeProgress + delta * 0.7);
          const p = introAnimRef.current.emergeProgress;
          v.position.x = THREE.MathUtils.lerp(0, 2.2, p);
          v.position.z = THREE.MathUtils.lerp(-4.5, 0.5, p);
          v.position.y = Math.sin(p * Math.PI) * 0.4;
          const targetScale = THREE.MathUtils.lerp(0.2, 1, p);
          v.scale.set(targetScale, targetScale, targetScale);
        }
        if (villainRigRef.current) {
          animateArticulated3DFighter(villainRigRef.current, 'idle', 0, delta, elapsed, false, '');
        }
      } else if (introPhase === 'active') {
        if (villainGroupRef.current && introAnimRef.current.emergeProgress < 1) {
          introAnimRef.current.emergeProgress = 1;
          villainGroupRef.current.position.set(2.2, 0, 0.5);
          villainGroupRef.current.scale.set(1, 1, 1);
        }
      }

      // --- HERO 3D SKELETAL MOTION & ATTACK KINEMATICS ---
      if (heroGroupRef.current) {
        const hGroup = heroGroupRef.current;
        const hAnim = heroAnimRef.current;

        if (hAnim.state === 'idle') {
          hGroup.position.y = Math.sin(elapsed * 2.2) * 0.025;
          hGroup.rotation.z = Math.sin(elapsed * 1.8) * 0.01;
          hGroup.position.x = -2.2;
          hGroup.position.z = 0.5;
        } else if (hAnim.state === 'punch') {
          hAnim.time += delta;
          const p = hAnim.time / 0.44;

          if (p < 0.38) {
            const f = Math.sin((p / 0.38) * (Math.PI / 2));
            hGroup.position.x = -2.2 + f * 1.5;
            hGroup.position.y = Math.sin((p / 0.38) * Math.PI) * 0.12;
            hGroup.rotation.z = -0.06 * f;
          } else if (p < 0.56) {
            hGroup.position.x = -0.7;
            hGroup.position.y = 0;
            hGroup.rotation.z = -0.06;
          } else if (p < 1.0) {
            const f = (p - 0.56) / 0.44;
            const easeBack = Math.sin(f * (Math.PI / 2));
            hGroup.position.x = -0.7 - easeBack * 1.5;
            hGroup.position.y = 0;
            hGroup.rotation.z = -0.06 * (1.0 - easeBack);
          } else {
            hGroup.position.set(-2.2, 0, 0.5);
            hGroup.rotation.z = 0;
            hAnim.state = 'idle';
          }
        } else if (hAnim.state === 'ultimate') {
          hAnim.time += delta;
          const p = hAnim.time / 0.55;

          if (p < 0.45) {
            const f = Math.sin((p / 0.45) * (Math.PI / 2));
            hGroup.position.y = f * 2.8;
            hGroup.position.x = -2.2 + f * 1.5;
            hGroup.rotation.z = f * Math.PI * 2;
          } else if (p < 0.65) {
            const f = (p - 0.45) / 0.2;
            hGroup.position.y = (1.0 - f) * 2.8;
            hGroup.position.x = -0.7;
            hGroup.rotation.z = 0;
          } else if (p < 1.0) {
            const f = (p - 0.65) / 0.35;
            const easeBack = Math.sin(f * (Math.PI / 2));
            hGroup.position.x = -0.7 - easeBack * 1.5;
            hGroup.position.y = 0;
          } else {
            hGroup.position.set(-2.2, 0, 0.5);
            hGroup.rotation.z = 0;
            hAnim.state = 'idle';
          }
        } else if (hAnim.state === 'dodge') {
          hAnim.time += delta;
          const p = hAnim.time / 0.38;
          if (p < 0.5) {
            const f = Math.sin((p / 0.5) * (Math.PI / 2));
            hGroup.position.x = -2.2 - f * 0.9;
            hGroup.position.z = 0.5 - f * 1.0;
          } else if (p < 1.0) {
            const f = (p - 0.5) / 0.5;
            const easeBack = Math.sin(f * (Math.PI / 2));
            hGroup.position.x = -3.1 + easeBack * 0.9;
            hGroup.position.z = -0.5 + easeBack * 1.0;
          } else {
            hGroup.position.set(-2.2, 0, 0.5);
            hAnim.state = 'idle';
          }
        }

        // Natural Hit Recoil Elastic Spring Curve
        if (hAnim.recoiling) {
          hAnim.recoilTime = (hAnim.recoilTime || 0) + delta;
          const rP = Math.min(1.0, hAnim.recoilTime / 0.28);
          hGroup.position.x = -2.2 - Math.sin(rP * Math.PI) * 0.48;
          hGroup.rotation.z = -Math.sin(rP * Math.PI) * 0.12;
          if (rP >= 1.0) {
            hAnim.recoiling = false;
            hAnim.recoilTime = 0;
            hGroup.position.x = -2.2;
            hGroup.rotation.z = 0;
          }
        }

        // 3D skeletal kinematic articulation for Hero
        if (heroRigRef.current) {
          animateArticulated3DFighter(heroRigRef.current, hAnim.state, hAnim.time, delta, elapsed, true, activeGesture);
        }
      }

      // ============================================================
      // --- HERO SIGNATURE SKILLS 3D VFX UPDATE LOOP ---
      // ============================================================
      const vfx = activeVfxRef.current;
      const heroId = selectedHero?.id;

      if (vfx.heroAttackType) {
        vfx.heroVfxTime += delta;
        const t = vfx.heroVfxTime;
        const isUlt = vfx.heroAttackType === 'vsign';

        // 1. PLASMA RANGER / IRON MAN
        if (heroId === 'ironman' && ironmanBeamRef.current) {
          const beam = ironmanBeamRef.current;
          beam.visible = true;
          const maxDur = isUlt ? 0.65 : 0.35;
          beam.material.opacity = Math.max(0, 1.0 - t / maxDur);
          beam.scale.set(isUlt ? 3.0 : 1.2, 1, isUlt ? 3.0 : 1.2);

          if (ironmanRingsRef.current) {
            ironmanRingsRef.current.forEach((r, idx) => {
              r.visible = isUlt;
              const rProg = (t * 3.5 + idx * 0.3) % 1.0;
              r.position.set(THREE.MathUtils.lerp(-1.8, 2.0, rProg), 2.1, 0.5);
              r.scale.set(1 + rProg * 1.5, 1 + rProg * 1.5, 1);
              r.material.opacity = (1.0 - rProg) * 0.8;
            });
          }

          if (t > maxDur) {
            beam.visible = false;
            if (ironmanRingsRef.current) ironmanRingsRef.current.forEach(r => (r.visible = false));
            vfx.heroAttackType = null;
          }
        }

        // 2. STORM GUARDIAN / THOR: MAGNETIC HAMMER & LIGHTNING
        else if (heroId === 'thor' && thorLightningRef.current) {
          const maxDur = isUlt ? 0.7 : 0.4;
          const op = Math.max(0, 1.0 - t / maxDur);
          thorLightningRef.current.material.opacity = op;

          // Returning Hammer Flight Arc
          if (thorHammerMeshRef.current) {
            const h = thorHammerMeshRef.current;
            h.visible = true;
            h.rotation.x += delta * 25;
            const p = t / maxDur;
            if (p < 0.5) {
              const f = p / 0.5;
              h.position.set(THREE.MathUtils.lerp(-1.8, 2.0, f), 2.1 + Math.sin(f * Math.PI) * 0.8, 0.5);
            } else {
              const f = (p - 0.5) / 0.5;
              h.position.set(THREE.MathUtils.lerp(2.0, -1.8, f), 2.1 + Math.sin(f * Math.PI) * 0.4, 0.5);
            }
          }

          const pos = thorLightningRef.current.geometry.attributes.position.array;
          const pts = pos.length / 3;
          for (let p = 0; p < pts; p++) {
            const frac = p / (pts - 1);
            pos[p * 3] = THREE.MathUtils.lerp(-1.6, 2.0, frac);
            pos[p * 3 + 1] = THREE.MathUtils.lerp(2.2, 2.0, frac) + (Math.random() - 0.5) * (isUlt ? 1.2 : 0.6);
            pos[p * 3 + 2] = 0.5 + (Math.random() - 0.5) * 0.8;
          }
          thorLightningRef.current.geometry.attributes.position.needsUpdate = true;

          if (thorSkyBoltsRef.current) {
            thorSkyBoltsRef.current.material.opacity = isUlt ? op : 0;
            const skyPos = thorSkyBoltsRef.current.geometry.attributes.position.array;
            const sPts = skyPos.length / 3;
            for (let sp = 0; sp < sPts; sp++) {
              const frac = sp / (sPts - 1);
              skyPos[sp * 3] = -1.6 + (Math.random() - 0.5) * 0.4;
              skyPos[sp * 3 + 1] = THREE.MathUtils.lerp(6.0, 2.4, frac);
              skyPos[sp * 3 + 2] = 0.5 + (Math.random() - 0.5) * 0.4;
            }
            thorSkyBoltsRef.current.geometry.attributes.position.needsUpdate = true;
          }

          if (t > maxDur) {
            if (thorHammerMeshRef.current) thorHammerMeshRef.current.visible = false;
            vfx.heroAttackType = null;
          }
        }

        // 3. WEB NINJA / SPIDER-MAN: WEB LINE & WEB TRAP
        else if ((heroId === 'spiderman' || !heroId) && spideyWebLineRef.current) {
          const maxDur = isUlt ? 0.65 : 0.35;
          const op = Math.max(0, 1.0 - t / maxDur);

          if (!isUlt) {
            spideyWebLineRef.current.material.opacity = op;
            const pos = spideyWebLineRef.current.geometry.attributes.position.array;
            pos[0] = -1.5; pos[1] = 2.1; pos[2] = 0.6;
            pos[3] = 1.8;  pos[4] = 2.0; pos[5] = 0.5;
            spideyWebLineRef.current.geometry.attributes.position.needsUpdate = true;

            // Slowing web snare at boss feet
            if (spideyWebTrapRef.current) {
              spideyWebTrapRef.current.material.opacity = Math.max(0, 0.85 - t / 0.5);
              const sc = 1 + t * 2.5;
              spideyWebTrapRef.current.scale.set(sc, sc, 1);
            }
          } else if (spideyWebBurstRef.current) {
            const group = spideyWebBurstRef.current;
            const progress = Math.min(1.0, t / 0.2);
            group.children.forEach((strand, idx) => {
              strand.material.opacity = op;
              const arr = strand.geometry.attributes.position.array;
              arr[0] = -1.5; arr[1] = 2.1; arr[2] = 0.6;
              const angle = (idx / 10) * Math.PI * 2;
              arr[3] = THREE.MathUtils.lerp(-1.5, 1.8, progress);
              arr[4] = THREE.MathUtils.lerp(2.1, 2.0 + Math.sin(angle) * 1.4, progress);
              arr[5] = THREE.MathUtils.lerp(0.6, 0.5 + Math.cos(angle) * 1.4, progress);
              strand.geometry.attributes.position.needsUpdate = true;
            });
          }

          if (t > maxDur) vfx.heroAttackType = null;
        }

        // 4. SHIELD SENTINEL / CAPTAIN AMERICA: SHIELD THROW & STAR SLAM
        else if (heroId === 'captain-america' && capFlyingShieldRef.current) {
          const shield = capFlyingShieldRef.current;
          const maxDur = isUlt ? 0.65 : 0.5;

          if (!isUlt) {
            shield.visible = true;
            shield.rotation.y += delta * 30;
            const p = t / 0.5;
            if (p < 0.5) {
              const f = p / 0.5;
              shield.position.x = THREE.MathUtils.lerp(-2.0, 1.8, f);
              shield.position.y = 1.8 + Math.sin(f * Math.PI) * 0.8;
            } else if (p < 1.0) {
              const f = (p - 0.5) / 0.5;
              shield.position.x = THREE.MathUtils.lerp(1.8, -2.0, f);
              shield.position.y = 1.8 + Math.sin(f * Math.PI) * 0.4;
            } else {
              shield.visible = false;
              vfx.heroAttackType = null;
            }
          } else if (capStarSlamRef.current) {
            const slam = capStarSlamRef.current;
            const sc = 1 + t * 9;
            slam.scale.set(sc, sc, 1);
            slam.material.opacity = Math.max(0, 0.95 - t / 0.65);
            if (t > maxDur) {
              slam.material.opacity = 0;
              vfx.heroAttackType = null;
            }
          }
        }

        // 5. ARCANE SORCERER / DOCTOR STRANGE: MANDALAS & MIRROR SHARDS
        else if ((heroId === 'doctor-strange' || heroId === 'dr-strange') && strangeMandalasRef.current) {
          const maxDur = isUlt ? 0.7 : 0.45;

          if (!isUlt) {
            const m = strangeMandalasRef.current;
            m.visible = true;
            m.rotation.z += delta * 12;
            m.position.x = THREE.MathUtils.lerp(-1.8, 1.8, t / 0.45);
            m.position.y = 2.1;
            if (t > maxDur) {
              m.visible = false;
              vfx.heroAttackType = null;
            }
          } else if (mirrorShardsRef.current) {
            mirrorShardsRef.current.children.forEach(shard => {
              shard.material.opacity = Math.max(0, 0.9 - t / 0.7);
              shard.rotation.x += delta * 6;
              shard.rotation.y += delta * 8;
            });
            if (t > maxDur) {
              mirrorShardsRef.current.children.forEach(s => (s.material.opacity = 0));
              vfx.heroAttackType = null;
            }
          }
        } else {
          vfx.heroAttackType = null;
        }
      }

      // ============================================================
      // --- VOID TITAN & VILLAIN INTELLIGENT AI FINITE STATE MACHINE (FSM) ---
      // ============================================================
      if (villainGroupRef.current && introPhase === 'active' && !isVictory && bossHp > 0) {
        const vGroup = villainGroupRef.current;
        const vAnim = villainAnimRef.current;
        const villainId = selectedVillain?.id || 'void-titan';

        aiAttackTimerRef.current += delta;

        // Dynamic Attack Cycle Timing based on Boss Phase
        const isEnraged = bossPhase >= 2;
        const attackInterval = bossPhase === 3 ? 2.4 : isEnraged ? 3.0 : 4.0;
        const warningWindow = bossPhase === 3 ? 0.95 : isEnraged ? 1.1 : 1.2;
        const warningStart = attackInterval - warningWindow;

        // FSM State transitions
        if (isBossStaggered) {
          aiFsmStateRef.current = 'STUNNED';
          aiAttackTimerRef.current = 0;
          if (setIncomingAttackWarning) setIncomingAttackWarning(false);
          if (dangerZoneMeshRef.current) dangerZoneMeshRef.current.material.opacity = 0;
          vAnim.state = 'staggered';
          vGroup.position.set(2.2, 0, 0.5);
          vGroup.rotation.z = 0;
        } else {
          // If in Warning window -> APPROACH & TELEGRAPH
          if (aiAttackTimerRef.current > warningStart && aiAttackTimerRef.current < attackInterval) {
            aiFsmStateRef.current = 'APPROACH';
            if (setIncomingAttackWarning) setIncomingAttackWarning(true);
            if (dangerZoneMeshRef.current) {
              const warningColor = isEnraged ? 0xa855f7 : 0xff0033;
              dangerZoneMeshRef.current.material.color.setHex(warningColor);
              dangerZoneMeshRef.current.material.opacity = 0.65 + Math.sin(elapsed * 16) * 0.35;
              dangerZoneMeshRef.current.scale.set(1 + Math.sin(elapsed * 12) * 0.14, 1 + Math.sin(elapsed * 12) * 0.14, 1);
            }
            vGroup.position.x = 2.2 + (Math.random() - 0.5) * 0.08;
          } else if (aiAttackTimerRef.current < warningStart) {
            aiFsmStateRef.current = isEnraged ? 'ENRAGED' : 'IDLE';
            if (dangerZoneMeshRef.current) dangerZoneMeshRef.current.material.opacity = 0;
          }

          // Trigger Attack execution!
          if (aiAttackTimerRef.current >= attackInterval && (vAnim.state === 'idle' || vAnim.state === 'staggered')) {
            aiFsmStateRef.current = 'ATTACK';
            vAnim.state = 'attack';
            vAnim.time = 0;
            aiAttackTimerRef.current = 0;
            if (setIncomingAttackWarning) setIncomingAttackWarning(false);
            if (dangerZoneMeshRef.current) dangerZoneMeshRef.current.material.opacity = 0;

            vfx.villainAttackActive = true;
            vfx.villainVfxTime = 0;

            // VOID TITAN Sound & Specific villain triggers
            if (villainId === 'void-titan') {
              sound.playLaserBeam(true);
              sound.playPortalWarp();
            } else if (villainId === 'green-goblin') {
              sound.playExplosion();
            } else if (villainId === 'thanos') {
              sound.playLaserBeam(true);
            } else if (villainId === 'magneto') {
              sound.playShieldBlock();
            } else if (villainId === 'doctor-doom') {
              sound.playLaserBeam(true);
            } else if (villainId === 'loki') {
              sound.playMysticCast();
            } else {
              sound.playPunch();
            }
          }
        }

        // Animated Void Orbs orbiting Titan when Enraged
        if (voidOrbsRef.current.length > 0) {
          voidOrbsRef.current.forEach((orb, oIdx) => {
            orb.material.opacity = isEnraged ? 0.85 : 0;
            const oAng = elapsed * 3.0 + (oIdx * (Math.PI * 2 / 3));
            orb.position.set(vGroup.position.x + Math.cos(oAng) * 1.5, 2.2 + Math.sin(oAng * 1.5) * 0.5, 0.5 + Math.sin(oAng) * 1.0);
          });
        }

        if (vAnim.state === 'idle') {
          vGroup.position.y = Math.sin(elapsed * 2.0 + 1.2) * 0.04;
          vGroup.position.x = 2.2;
          vGroup.position.z = 0.5;
        } else if (vAnim.state === 'attack') {
          vAnim.time += delta;
          const p = vAnim.time / 0.48;

          if (p < 0.38) {
            const f = Math.sin((p / 0.38) * (Math.PI / 2));
            vGroup.position.x = 2.2 - f * 2.0;
            vGroup.position.y = Math.sin((p / 0.38) * Math.PI) * 0.12;
            vGroup.rotation.z = -0.07 * f;
          } else if (p < 0.54) {
            vGroup.position.x = 0.2;
            vGroup.position.y = 0;
            vGroup.rotation.z = -0.07;

            if (!vAnim.hasDamaged) {
              vAnim.hasDamaged = true;
              const isHeroShielding = activeGesture && (activeGesture.toUpperCase().includes('SHIELD') || activeGesture.toUpperCase().includes('PALM'));
              if (onHeroDamaged) onHeroDamaged(isHeroShielding);
              cameraShakeRef.current = isHeroShielding ? 0.08 : 0.26;
              if (isHeroShielding) {
                sound.playShieldBlock();
              } else {
                sound.playPunch();
                if (heroAnimRef.current) heroAnimRef.current.recoiling = true;
              }
            }
          } else if (p < 1.0) {
            const f = (p - 0.54) / 0.46;
            const easeBack = Math.sin(f * (Math.PI / 2));
            vGroup.position.x = 0.2 + easeBack * 2.0;
            vGroup.position.y = 0;
            vGroup.rotation.z = -0.07 * (1.0 - easeBack);
          } else {
            vGroup.position.set(2.2, 0, 0.5);
            vGroup.rotation.z = 0;
            vAnim.state = 'idle';
            vAnim.hasDamaged = false;
          }
        }

        // ============================================================
        // --- VILLAIN SIGNATURE POWERS 3D VFX LOOP ---
        // ============================================================
        if (vfx.villainAttackActive) {
          vfx.villainVfxTime += delta;
          const vt = vfx.villainVfxTime;

          // 1. VOID TITAN: DARK MATTER RAY & SHOCKWAVE
          if (villainId === 'void-titan') {
            if (voidBeamRef.current) {
              voidBeamRef.current.visible = true;
              voidBeamRef.current.material.opacity = Math.max(0, 1.0 - vt / 0.48);
              voidBeamRef.current.scale.set(2.6, 1, 2.6);
            }
            if (voidShockwaveRef.current) {
              const sc = 1 + vt * 10;
              voidShockwaveRef.current.scale.set(sc, sc, 1);
              voidShockwaveRef.current.material.opacity = Math.max(0, 0.9 - vt / 0.48);
            }
          }

          // 2. GREEN GOBLIN
          else if (villainId === 'green-goblin') {
            if (goblinBombRef.current) {
              const bomb = goblinBombRef.current;
              bomb.visible = vt < 0.25;
              const f = vt / 0.25;
              bomb.position.x = THREE.MathUtils.lerp(2.2, -2.0, f);
              bomb.position.y = 2.0 + Math.sin(f * Math.PI) * 1.2;
              bomb.rotation.x += delta * 15;
            }
            if (goblinExplosionRef.current) {
              const exp = goblinExplosionRef.current;
              if (vt >= 0.2 && vt < 0.5) {
                exp.visible = true;
                const sc = (vt - 0.2) * 8;
                exp.position.set(-2.0, 1.8, 0.5);
                exp.scale.set(sc, sc, sc);
                exp.material.opacity = 1.0 - (vt - 0.2) / 0.3;
              } else {
                exp.visible = false;
              }
            }
          }

          // 3. THANOS
          else if (villainId === 'thanos') {
            if (thanosBeamRef.current) {
              thanosBeamRef.current.visible = true;
              thanosBeamRef.current.material.opacity = Math.max(0, 1.0 - vt / 0.45);
              thanosBeamRef.current.scale.set(2.4, 1, 2.4);
            }
            if (thanosShockwaveRef.current) {
              const sc = 1 + vt * 9;
              thanosShockwaveRef.current.scale.set(sc, sc, 1);
              thanosShockwaveRef.current.material.opacity = Math.max(0, 0.9 - vt / 0.45);
            }
          }

          // 4. MAGNETO
          else if (villainId === 'magneto') {
            if (magnetoAuraRef.current) {
              magnetoAuraRef.current.material.opacity = Math.max(0, 0.85 - vt / 0.45);
              magnetoAuraRef.current.rotation.z += delta * 12;
            }
            if (magnetoSpikesRef.current) {
              const spikes = magnetoSpikesRef.current;
              spikes.visible = true;
              const f = Math.min(1.0, vt / 0.3);
              spikes.children.forEach((spike, idx) => {
                const offY = (idx - 2) * 0.35;
                spike.position.set(THREE.MathUtils.lerp(2.2, -2.0, f), 2.2 + offY, 0.5);
              });
            }
          }

          // 5. DOCTOR DOOM
          else if (villainId === 'doctor-doom') {
            if (doomOrbitalBeamRef.current) {
              doomOrbitalBeamRef.current.visible = true;
              doomOrbitalBeamRef.current.material.opacity = Math.max(0, 1.0 - vt / 0.45);
              doomOrbitalBeamRef.current.scale.set(1.6, 1, 1.6);
            }
            if (doomGroundRingRef.current) {
              const sc = 1 + vt * 8;
              doomGroundRingRef.current.scale.set(sc, sc, 1);
              doomGroundRingRef.current.material.opacity = Math.max(0, 0.85 - vt / 0.45);
            }
          }

          // 6. LOKI
          else if (villainId === 'loki') {
            if (lokiScepterBeamRef.current) {
              lokiScepterBeamRef.current.visible = true;
              lokiScepterBeamRef.current.material.opacity = Math.max(0, 1.0 - vt / 0.45);
            }
            if (lokiIllusionsRef.current) {
              const op = Math.sin(vt * 18) > 0 ? 0.75 : 0.2;
              lokiIllusionsRef.current.children.forEach(c => (c.material.opacity = op));
            }
          }

          if (vt > 0.48) {
            vfx.villainAttackActive = false;
            if (voidBeamRef.current) voidBeamRef.current.visible = false;
            if (thanosBeamRef.current) thanosBeamRef.current.visible = false;
            if (doomOrbitalBeamRef.current) doomOrbitalBeamRef.current.visible = false;
            if (lokiScepterBeamRef.current) lokiScepterBeamRef.current.visible = false;
            if (magnetoSpikesRef.current) magnetoSpikesRef.current.visible = false;
            if (goblinBombRef.current) goblinBombRef.current.visible = false;
            if (goblinExplosionRef.current) goblinExplosionRef.current.visible = false;
          }
        }

        // Boss Hit Recoil Elastic Spring Curve
        if (vAnim.recoiling) {
          vAnim.recoilTime = (vAnim.recoilTime || 0) + delta;
          const rP = Math.min(1.0, vAnim.recoilTime / 0.28);
          vGroup.position.x = 2.2 + Math.sin(rP * Math.PI) * 0.48;
          vGroup.rotation.z = Math.sin(rP * Math.PI) * 0.1;
          if (rP >= 1.0) {
            vAnim.recoiling = false;
            vAnim.recoilTime = 0;
            vGroup.position.x = 2.2;
            vGroup.rotation.z = 0;
          }
        }

        // Real 3D skeletal kinematic articulation for Villain
        if (villainRigRef.current) {
          animateArticulated3DFighter(villainRigRef.current, vAnim.state, vAnim.time, delta, elapsed, false, '');
        }
      } else if (isVictory) {
        aiFsmStateRef.current = 'DEFEATED';
      }

      // --- 3D SHIELD OPACITY & ROTATION ---
      if (shieldMeshRef.current) {
        const isShieldActive = activeGesture && (activeGesture.toUpperCase().includes('SHIELD') || activeGesture.toUpperCase().includes('PALM'));
        const targetOpacity = isShieldActive ? 0.85 : 0;
        shieldMeshRef.current.material.opacity += (targetOpacity - shieldMeshRef.current.material.opacity) * 0.25;
        if (shieldWireRef.current) {
          shieldWireRef.current.material.opacity = shieldMeshRef.current.material.opacity;
        }
        if (isShieldActive) {
          shieldMeshRef.current.rotation.z += delta * 2.5;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [selectedHero, selectedVillain, introPhase]);

  // Listen to Hero Action Triggers (Punch, Ultimate, Dodge, Aim, Charge)
  useEffect(() => {
    if (!heroActionTrigger) return;

    const heroId = selectedHero?.id;

    if (heroActionTrigger.type === 'fist' || heroActionTrigger.type === 'forward') {
      heroAnimRef.current = { state: 'punch', time: 0, recoiling: false, recoilTime: 0 };
      activeVfxRef.current.heroAttackType = 'fist';
      activeVfxRef.current.heroVfxTime = 0;
      cameraShakeRef.current = 0.16;
      if (villainAnimRef.current) {
        villainAnimRef.current.recoiling = true;
        villainAnimRef.current.recoilTime = 0;
      }

      // Hero Primary Strike Audio
      if (heroId === 'ironman') {
        sound.playLaserBeam(false);
      } else if (heroId === 'thor') {
        sound.playThunder();
      } else if (heroId === 'spiderman') {
        sound.playWebSling();
      } else if (heroId === 'captain-america') {
        sound.playShieldBlock();
      } else if (heroId === 'doctor-strange' || heroId === 'dr-strange') {
        sound.playMysticCast();
      } else {
        sound.playPunch();
      }
    } else if (heroActionTrigger.type === 'vsign' || heroActionTrigger.type === 'both_hands') {
      heroAnimRef.current = { state: 'ultimate', time: 0, recoiling: false, recoilTime: 0 };
      activeVfxRef.current.heroAttackType = 'vsign';
      activeVfxRef.current.heroVfxTime = 0;
      cameraShakeRef.current = 0.35;
      if (villainAnimRef.current) {
        villainAnimRef.current.recoiling = true;
        villainAnimRef.current.recoilTime = 0;
      }

      // Hero Ultimate Audio
      if (heroId === 'ironman') {
        sound.playLaserBeam(true);
      } else if (heroId === 'thor') {
        sound.playThunder();
      } else if (heroId === 'spiderman') {
        sound.playWebSling();
      } else if (heroId === 'captain-america') {
        sound.playShieldBlock();
      } else if (heroId === 'doctor-strange' || heroId === 'dr-strange') {
        sound.playMysticCast();
      } else {
        sound.playPunch();
      }
    } else if (heroActionTrigger.type === 'swipe') {
      heroAnimRef.current = { state: 'dodge', time: 0, recoiling: false };
      sound.playWebSling();
    }
  }, [heroActionTrigger, selectedHero]);

  return (
    <div className="rs-three-battle-canvas-wrapper" ref={mountRef}>
      {/* Three.js 3D WebGL Canvas mounts dynamically here */}
    </div>
  );
};
