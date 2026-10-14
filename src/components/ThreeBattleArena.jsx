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
  const spideyWebCableRef = useRef(null);
  const spideySenseRef = useRef(null);
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

  // 3D Moving Dynamic Background References
  const movingBgGroupRef = useRef(null);
  const bgMonolithsRef = useRef([]);
  const bgVortexRingsRef = useRef([]);
  const horizonRingRef = useRef(null);

  // Active VFX State Tracker
  const activeVfxRef = useRef({
    heroAttackType: null,
    heroVfxTime: 0,
    villainAttackActive: false,
    villainVfxTime: 0
  });

  // Dynamic 3D Mid-Air Clash Burst State
  const clashGroupRef = useRef(null);
  const clashRingRef = useRef(null);
  const clashSparksRef = useRef(null);
  const clashStateRef = useRef({ active: false, time: 0, x: 0, y: 0, z: 0, color: 0xffea00 });

  // 3D Comic Hit Star & Ground Impact Shockwave (Tekken / SF6 / DBFZ style)
  const hitStarRef = useRef(null);
  const hitStarStateRef = useRef({ active: false, time: 0, x: 0, y: 0, z: 0 });
  const groundShockRef = useRef(null);
  const groundShockStateRef = useRef({ active: false, time: 0 });

  // Dynamic Camera Tracking & Hit-Stop Crunch
  const cameraZoomTargetRef = useRef({ x: -0.35, y: 2.15, z: 7.3 });
  const hitStopTimerRef = useRef(0);

  // Combat Animation States & FSM State
  const heroAnimRef = useRef({ state: 'idle', time: 0, recoiling: false, recoilTime: 0, comboIndex: 0, isCounterHit: false });
  const villainAnimRef = useRef({ state: 'idle', time: 0, recoiling: false, recoilTime: 0, hasDamaged: false });
  const comboStepRef = useRef(0);
  const lastComboTimeRef = useRef(0);
  const cameraShakeRef = useRef(0);
  const aiAttackTimerRef = useRef(-2.0); // Grace period on start
  const introAnimRef = useRef({ emergeProgress: 0, heroEntranceProgress: 0 });
  const aiFsmStateRef = useRef('IDLE');

  const introPhaseRef = useRef(introPhase);
  const isVictoryRef = useRef(isVictory);
  const isDefeatedRef = useRef(isDefeated);
  const heroHpRef = useRef(heroHp);
  const bossHpRef = useRef(bossHp);
  const bossPhaseRef = useRef(bossPhase);
  const isBossStaggeredRef = useRef(isBossStaggered);
  const activeGestureRef = useRef(activeGesture);
  const onHeroDamagedRef = useRef(onHeroDamaged);
  const setIncomingAttackWarningRef = useRef(setIncomingAttackWarning);
  const onTelemetryUpdateRef = useRef(onTelemetryUpdate);

  useEffect(() => { introPhaseRef.current = introPhase; }, [introPhase]);
  useEffect(() => { isVictoryRef.current = isVictory; }, [isVictory]);
  useEffect(() => { isDefeatedRef.current = isDefeated; }, [isDefeated]);
  useEffect(() => { heroHpRef.current = heroHp; }, [heroHp]);
  useEffect(() => { bossHpRef.current = bossHp; }, [bossHp]);
  useEffect(() => { bossPhaseRef.current = bossPhase; }, [bossPhase]);
  useEffect(() => { isBossStaggeredRef.current = isBossStaggered; }, [isBossStaggered]);
  useEffect(() => { activeGestureRef.current = activeGesture; }, [activeGesture]);
  useEffect(() => { onHeroDamagedRef.current = onHeroDamaged; }, [onHeroDamaged]);
  useEffect(() => { setIncomingAttackWarningRef.current = setIncomingAttackWarning; }, [setIncomingAttackWarning]);
  useEffect(() => { onTelemetryUpdateRef.current = onTelemetryUpdate; }, [onTelemetryUpdate]);

  // Reset timer on defeat/retry
  useEffect(() => {
    if (!isDefeated) {
      aiAttackTimerRef.current = -2.0;
      if (setIncomingAttackWarningRef.current) setIncomingAttackWarningRef.current(false);
    }
  }, [isDefeated]);

  // Set up Three.js 3D Battle Arena
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene & Setup with Atmospheric Volumetric Fog
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050818);
    scene.fog = new THREE.FogExp2(0x050818, 0.038);
    sceneRef.current = scene;

    // 2. Cinematic Camera (Angled 3D Isometric View with Full Height Clearance)
    const camera = new THREE.PerspectiveCamera(44, width / height, 0.1, 1000);
    camera.position.set(-0.35, 2.15, 7.3);
    camera.lookAt(0, 1.40, 0.3);
    cameraRef.current = camera;

    // 3. WebGL Renderer with High-Performance Tone Mapping (alpha: false eliminates GPU compositor lag)
    const renderer = new THREE.WebGLRenderer({ alpha: false, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // 4. Focused High-Performance Combat Lighting (Rock-Solid 60 FPS on any laptop)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    const cameraKeyLight = new THREE.DirectionalLight(0xffffff, 2.8);
    cameraKeyLight.position.set(1.5, 4.0, 7.0);
    scene.add(cameraKeyLight);

    // Frontal direct fighter duel spotlight (highlights character contours & faces directly)
    const duelFrontalLight = new THREE.DirectionalLight(0xffffff, 2.2);
    duelFrontalLight.position.set(0, 2.2, 5.5);
    scene.add(duelFrontalLight);

    // Subtle dimensional rim light
    const portalCoreLight = new THREE.PointLight(0x8b5cf6, 2.5, 12);
    portalCoreLight.position.set(0, 2.5, -4.5);
    scene.add(portalCoreLight);

    // ============================================================
    // 5. HIGH-OCTANE 3D DYNAMIC MOVING ARENA BACKGROUND (AAA COMBAT STAGE)
    // ============================================================
    const movingBgGroup = new THREE.Group();
    scene.add(movingBgGroup);
    movingBgGroupRef.current = movingBgGroup;

    // 5A. Multi-Depth Dynamic Moving Cosmic Starfield (Deep Space Galaxy)
    const starCount = 600;
    const bgStarGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    const palette = [
      new THREE.Color(0x00f3ff), // Cyan
      new THREE.Color(0x8b5cf6), // Purple
      new THREE.Color(0xef4444), // Crimson (Red Gate)
      new THREE.Color(0xffffff), // White
      new THREE.Color(0xf59e0b)  // Amber
    ];
    for (let i = 0; i < starCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = 20 + Math.random() * 32;
      starPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPos[i * 3 + 1] = Math.abs(r * Math.cos(phi)) * 0.75 - 1.5;
      starPos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
      const col = palette[Math.floor(Math.random() * palette.length)];
      starColors[i * 3] = col.r;
      starColors[i * 3 + 1] = col.g;
      starColors[i * 3 + 2] = col.b;
    }
    bgStarGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    bgStarGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
    const bgStarMat = new THREE.PointsMaterial({
      size: 0.25,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const starField = new THREE.Points(bgStarGeo, bgStarMat);
    movingBgGroup.add(starField);

    // 5B. Floating Ancient Dimensional Runic Monoliths (Levitating in distance)
    const monoliths = [];
    const monolithGeo = new THREE.CylinderGeometry(0.35, 0.55, 3.8, 5);
    const monolithMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.85,
      roughness: 0.25,
      emissive: 0x1e1b4b,
      emissiveIntensity: 0.5
    });
    const runeRingGeo = new THREE.TorusGeometry(0.7, 0.03, 8, 24);
    const runeRingMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff, transparent: true, opacity: 0.75 });

    const monolithData = [
      { x: -7.5, y: 3.5, z: -8.0, rotY: 0.3, speed: 0.9, offset: 0 },
      { x: 7.5, y: 4.2, z: -9.0, rotY: -0.4, speed: 1.1, offset: 1.5 },
      { x: -5.0, y: 5.5, z: -12.0, rotY: 0.7, speed: 0.7, offset: 2.8 },
      { x: 5.2, y: 6.0, z: -11.5, rotY: -0.6, speed: 0.85, offset: 4.2 },
      { x: -9.5, y: 2.8, z: -6.0, rotY: 0.2, speed: 1.2, offset: 3.1 },
      { x: 9.8, y: 3.1, z: -7.0, rotY: -0.5, speed: 1.0, offset: 5.0 }
    ];

    monolithData.forEach((d) => {
      const mono = new THREE.Mesh(monolithGeo, monolithMat);
      mono.position.set(d.x, d.y, d.z);
      mono.rotation.y = d.rotY;
      mono.rotation.z = 0.08;
      const rRing = new THREE.Mesh(runeRingGeo, runeRingMat);
      rRing.rotation.x = Math.PI / 2;
      mono.add(rRing);

      mono.userData = { baseY: d.y, speed: d.speed, offset: d.offset, rRing };
      movingBgGroup.add(mono);
      monoliths.push(mono);
    });
    bgMonolithsRef.current = monoliths;

    // 5C. Deep Celestial Horizon Energy Rings
    const horizonRingGeo = new THREE.TorusGeometry(18, 0.15, 12, 64);
    const horizonRingMat = new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.45 });
    const horizonRing = new THREE.Mesh(horizonRingGeo, horizonRingMat);
    horizonRing.rotation.x = Math.PI / 2;
    horizonRing.position.set(0, -0.6, -6);
    movingBgGroup.add(horizonRing);
    horizonRingRef.current = horizonRing;

    const horizonRing2Geo = new THREE.TorusGeometry(26, 0.1, 12, 64);
    const horizonRing2Mat = new THREE.MeshBasicMaterial({ color: 0x00f3ff, transparent: true, opacity: 0.3 });
    const horizonRing2 = new THREE.Mesh(horizonRing2Geo, horizonRing2Mat);
    horizonRing2.rotation.x = Math.PI / 2;
    horizonRing2.position.set(0, -1.2, -8);
    movingBgGroup.add(horizonRing2);

    // 5D. Dynamic Multi-Ring Dimensional Portal Core Vortex (Red Gate Entrance)
    const portalGroup = new THREE.Group();
    portalGroup.position.set(0, 2.5, -5.2);
    scene.add(portalGroup);

    const gateArchGeo = new THREE.TorusGeometry(4.2, 0.08, 12, 48);
    const gateArchMat = new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.65 });
    const gateArch = new THREE.Mesh(gateArchGeo, gateArchMat);
    portalGroup.add(gateArch);

    const vRing1 = new THREE.Mesh(
      new THREE.TorusGeometry(3.6, 0.06, 12, 48),
      new THREE.MeshBasicMaterial({ color: 0xef4444, transparent: true, opacity: 0.75 })
    );
    portalGroup.add(vRing1);

    const vRing2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.8, 0.05, 12, 48),
      new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.85 })
    );
    portalGroup.add(vRing2);

    const vRing3 = new THREE.Mesh(
      new THREE.TorusGeometry(2.0, 0.04, 12, 48),
      new THREE.MeshBasicMaterial({ color: 0x00f3ff, transparent: true, opacity: 0.9 })
    );
    portalGroup.add(vRing3);

    portalRingsRef.current = [vRing1];
    bgVortexRingsRef.current = [vRing1, vRing2, vRing3];
    portalVortexRef.current = null;
    cityGroupRef.current = portalGroup;
    speedersRef.current = [];

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
    heroGroup.position.set(-1.8, 0, 0.5);
    heroGroup.rotation.y = Math.PI / 3.4;
    scene.add(heroGroup);
    heroGroupRef.current = heroGroup;
    heroRigRef.current = heroResult;

    // ============================================================
    // 9. BUILD ARTICULATED 3D VOID TITAN / VILLAIN FIGHTER
    // ============================================================
    const villainResult = createArticulated3DFighter(selectedVillain, true);
    const villainGroup = villainResult.group;
    if (introPhaseRef.current === 'opening' || introPhaseRef.current === 'city-pan') {
      villainGroup.position.set(0, 0.5, -4.5);
      villainGroup.scale.set(0.1, 0.1, 0.1);
    } else {
      villainGroup.position.set(1.8, 0, 0.5);
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

    // C. Web Ninja / Spider-Man: 3D High-Tensile Web Cable, Spider-Sense Arcs, Snare Trap & Nano-Web Burst
    const webCableGroup = new THREE.Group();
    const webCoreMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 });
    const webAuraMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending });
    const webCoreMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 1, 10), webCoreMat);
    const webAuraMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.095, 0.095, 1, 10), webAuraMat);
    webCableGroup.add(webCoreMesh);
    webCableGroup.add(webAuraMesh);
    webCableGroup.visible = false;
    heroVfxGroup.add(webCableGroup);
    spideyWebCableRef.current = { group: webCableGroup, core: webCoreMesh, aura: webAuraMesh };

    // Spider-Sense Holographic Tingling Comic Arcs (radiating alert arcs above Spider-Man's head)
    const spideySenseGroup = new THREE.Group();
    spideySenseGroup.name = 'spidey-sense';
    spideySenseGroup.visible = false;
    for (let a = 0; a < 4; a++) {
      const arcCurve = new THREE.EllipseCurve(0, 0, 0.35 + a * 0.12, 0.22 + a * 0.08, Math.PI * 0.15, Math.PI * 0.85, false, 0);
      const arcPts = arcCurve.getPoints(20);
      const arcGeo = new THREE.BufferGeometry().setFromPoints(arcPts);
      const arcMat = new THREE.LineBasicMaterial({
        color: a % 2 === 0 ? 0xff0044 : 0xfacc15,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending
      });
      const arcLine = new THREE.Line(arcGeo, arcMat);
      arcLine.position.y = a * 0.10;
      spideySenseGroup.add(arcLine);
    }
    heroVfxGroup.add(spideySenseGroup);
    spideySenseRef.current = spideySenseGroup;

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
    webTrap.position.set(1.8, 0.04, 0.5);
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

    // 2. Green Goblin: Authentic Jack-o'-Lantern Pumpkin Bomb & Fireball Blast
    const pBombGroup = new THREE.Group();
    const pBombCore = new THREE.Mesh(
      new THREE.SphereGeometry(0.24, 16, 14),
      new THREE.MeshStandardMaterial({
        color: 0xf97316,
        emissive: 0xea580c,
        emissiveIntensity: 0.85,
        metalness: 0.6,
        roughness: 0.25
      })
    );
    const pStem = new THREE.Mesh(
      new THREE.CylinderGeometry(0.025, 0.035, 0.12, 8),
      new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.8 })
    );
    pStem.position.y = 0.26;
    pBombGroup.add(pBombCore);
    pBombGroup.add(pStem);
    const pLight = new THREE.PointLight(0xf97316, 2.8, 4.5);
    pBombGroup.add(pLight);
    pBombGroup.visible = false;
    villainVfxGroup.add(pBombGroup);
    goblinBombRef.current = pBombGroup;

    // Multi-layer Fiery Pumpkin Explosion
    const pExpGroup = new THREE.Group();
    const pExpOuter = new THREE.Mesh(
      new THREE.SphereGeometry(1.4, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xf97316, transparent: true, opacity: 0, blending: THREE.AdditiveBlending })
    );
    const pExpInner = new THREE.Mesh(
      new THREE.SphereGeometry(0.8, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xfef08a, transparent: true, opacity: 0, blending: THREE.AdditiveBlending })
    );
    pExpGroup.add(pExpOuter);
    pExpGroup.add(pExpInner);
    pExpGroup.userData = { outer: pExpOuter, inner: pExpInner };
    pExpGroup.visible = false;
    villainVfxGroup.add(pExpGroup);
    goblinExplosionRef.current = pExpGroup;

    // 3. Thanos: Canonical 6-Infinity-Stone Cosmic Destruction Ray & Power Stone Shockwave
    const thanosBeamGroup = new THREE.Group();
    const tBeamGeo = new THREE.CylinderGeometry(0.36, 0.36, 5.2, 16);
    tBeamGeo.rotateZ(Math.PI / 2);
    tBeamGeo.translate(-2.6, 0, 0);
    const tOuterBeam = new THREE.Mesh(
      tBeamGeo,
      new THREE.MeshBasicMaterial({ color: 0xd946ef, transparent: true, opacity: 0, blending: THREE.AdditiveBlending })
    );
    const tInnerGeo = new THREE.CylinderGeometry(0.18, 0.18, 5.2, 16);
    tInnerGeo.rotateZ(Math.PI / 2);
    tInnerGeo.translate(-2.6, 0, 0);
    const tInnerBeam = new THREE.Mesh(
      tInnerGeo,
      new THREE.MeshBasicMaterial({ color: 0xfef08a, transparent: true, opacity: 0, blending: THREE.AdditiveBlending })
    );
    thanosBeamGroup.add(tOuterBeam);
    thanosBeamGroup.add(tInnerBeam);

    // 6 Orbiting Infinity Stone Energy Nodes along the beam:
    // Power (Purple), Space (Blue), Reality (Red), Soul (Orange), Time (Green), Mind (Yellow)
    const stoneColors = [0xa855f7, 0x3b82f6, 0xef4444, 0xf97316, 0x22c55e, 0xfacc15];
    const stones = [];
    stoneColors.forEach((col, idx) => {
      const stoneMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.11, 12, 12),
        new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0, blending: THREE.AdditiveBlending })
      );
      thanosBeamGroup.add(stoneMesh);
      stones.push(stoneMesh);
    });
    thanosBeamGroup.userData = { outer: tOuterBeam, inner: tInnerBeam, stones };
    thanosBeamGroup.position.set(1.8, 2.4, 0.5);
    thanosBeamGroup.visible = false;
    villainVfxGroup.add(thanosBeamGroup);
    thanosBeamRef.current = thanosBeamGroup;

    const tShockwave = new THREE.Mesh(
      new THREE.RingGeometry(0.2, 0.65, 32),
      new THREE.MeshBasicMaterial({ color: 0xd946ef, transparent: true, opacity: 0, side: THREE.DoubleSide })
    );
    tShockwave.rotation.x = -Math.PI / 2;
    tShockwave.position.set(-0.5, 0.04, 0.5);
    villainVfxGroup.add(tShockwave);
    thanosShockwaveRef.current = tShockwave;

    // 4. Magneto: Electromagnetic Railgun Spikes & Torus Aura
    const magGroup = new THREE.Group();
    for (let s = 0; s < 5; s++) {
      const sGroup = new THREE.Group();
      const spikeGeo = new THREE.ConeGeometry(0.14, 0.85, 6);
      spikeGeo.rotateZ(Math.PI / 2);
      const spikeMesh = new THREE.Mesh(
        spikeGeo,
        new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.95, roughness: 0.15 })
      );
      const sTip = new THREE.Mesh(
        new THREE.SphereGeometry(0.06, 8, 8),
        new THREE.MeshBasicMaterial({ color: 0xef4444, transparent: true, opacity: 0.9 })
      );
      sTip.position.x = -0.42;
      sGroup.add(spikeMesh);
      sGroup.add(sTip);
      magGroup.add(sGroup);
    }
    magGroup.visible = false;
    villainVfxGroup.add(magGroup);
    magnetoSpikesRef.current = magGroup;

    const magAura = new THREE.Mesh(
      new THREE.TorusGeometry(1.6, 0.06, 12, 36),
      new THREE.MeshBasicMaterial({ color: 0xef4444, transparent: true, opacity: 0, blending: THREE.AdditiveBlending })
    );
    magAura.position.set(1.8, 2.2, 0.5);
    villainVfxGroup.add(magAura);
    magnetoAuraRef.current = magAura;

    // 5. Doctor Doom: Orbital Latverian Satellite Siphon & Technomancy Ground Rune
    const doomBeamGroup = new THREE.Group();
    const doomBeamGeo = new THREE.CylinderGeometry(0.48, 0.48, 8.5, 20);
    const doomOuterBeam = new THREE.Mesh(
      doomBeamGeo,
      new THREE.MeshBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0, blending: THREE.AdditiveBlending })
    );
    const doomInnerGeo = new THREE.CylinderGeometry(0.22, 0.22, 8.5, 16);
    const doomInnerBeam = new THREE.Mesh(
      doomInnerGeo,
      new THREE.MeshBasicMaterial({ color: 0xa7f3d0, transparent: true, opacity: 0, blending: THREE.AdditiveBlending })
    );
    doomBeamGroup.add(doomOuterBeam);
    doomBeamGroup.add(doomInnerBeam);
    doomBeamGroup.userData = { outer: doomOuterBeam, inner: doomInnerBeam };
    doomBeamGroup.position.set(-1.8, 4.2, 0.5);
    doomBeamGroup.visible = false;
    villainVfxGroup.add(doomBeamGroup);
    doomOrbitalBeamRef.current = doomBeamGroup;

    const doomRing = new THREE.Mesh(
      new THREE.RingGeometry(0.2, 0.65, 32),
      new THREE.MeshBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0, side: THREE.DoubleSide })
    );
    doomRing.rotation.x = -Math.PI / 2;
    doomRing.position.set(-1.8, 0.04, 0.5);
    villainVfxGroup.add(doomRing);
    doomGroundRingRef.current = doomRing;

    // 6. Loki: Asgardian Scepter Beam & Phantom Hologram Decoys
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
      const cloneSub = new THREE.Group();
      const body = new THREE.Mesh(
        new THREE.CylinderGeometry(0.38, 0.32, 2.2, 16),
        new THREE.MeshBasicMaterial({ color: 0x84cc16, transparent: true, opacity: 0, wireframe: true })
      );
      body.position.y = 1.1;
      const head = new THREE.Mesh(
        new THREE.SphereGeometry(0.22, 12, 12),
        new THREE.MeshBasicMaterial({ color: 0x84cc16, transparent: true, opacity: 0, wireframe: true })
      );
      head.position.y = 2.4;
      const hornL = new THREE.Mesh(
        new THREE.ConeGeometry(0.04, 0.35, 6),
        new THREE.MeshBasicMaterial({ color: 0xf59e0b, transparent: true, opacity: 0 })
      );
      hornL.position.set(-0.16, 2.65, 0.05);
      hornL.rotation.z = 0.5;
      const hornR = new THREE.Mesh(
        new THREE.ConeGeometry(0.04, 0.35, 6),
        new THREE.MeshBasicMaterial({ color: 0xf59e0b, transparent: true, opacity: 0 })
      );
      hornR.position.set(0.16, 2.65, 0.05);
      hornR.rotation.z = -0.5;
      cloneSub.add(body);
      cloneSub.add(head);
      cloneSub.add(hornL);
      cloneSub.add(hornR);
      cloneSub.position.set(c === 0 ? 0.3 : 3.1, 0, 0.5);
      lokiCloneGroup.add(cloneSub);
    }
    villainVfxGroup.add(lokiCloneGroup);
    lokiIllusionsRef.current = lokiCloneGroup;

    // 13. Atmospheric Ambient Dimensional Sparks (4K Ultra-Density)
    const particleCount = 220;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      pPos[i] = (Math.random() - 0.5) * 14;
      pPos[i + 1] = Math.random() * 7;
      pPos[i + 2] = (Math.random() - 0.5) * 12;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.11,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);
    particlesRef.current = particles;

    // ============================================================
    // 13B. DYNAMIC 3D CLASH BURST & SHOCKWAVE VFX (4K HIGH-DEF COMBAT IMPACTS)
    // ============================================================
    const clashGroup = new THREE.Group();
    scene.add(clashGroup);
    clashGroupRef.current = clashGroup;

    const cRingGeo = new THREE.RingGeometry(0.18, 0.48, 36);
    const cRingMat = new THREE.MeshBasicMaterial({
      color: 0xffea00,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending
    });
    const cRing = new THREE.Mesh(cRingGeo, cRingMat);
    cRing.visible = false;
    clashGroup.add(cRing);
    clashRingRef.current = cRing;

    const sparkCount = 110;
    const sparkGeo = new THREE.BufferGeometry();
    const sparkPos = new Float32Array(sparkCount * 3);
    const sparkVels = [];
    for (let i = 0; i < sparkCount; i++) {
      sparkPos[i * 3] = 0;
      sparkPos[i * 3 + 1] = 0;
      sparkPos[i * 3 + 2] = 0;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;
      const spd = 3.0 + Math.random() * 5.5;
      sparkVels.push({
        x: Math.cos(theta) * Math.cos(phi) * spd,
        y: Math.sin(phi) * spd,
        z: Math.sin(theta) * Math.cos(phi) * spd
      });
    }
    sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPos, 3));
    const sparkMat = new THREE.PointsMaterial({
      color: 0xffea00,
      size: 0.18,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const cSparks = new THREE.Points(sparkGeo, sparkMat);
    cSparks.userData = { vels: sparkVels };
    cSparks.visible = false;
    clashGroup.add(cSparks);
    // 3D Stylized Comic Impact Star (Street Fighter / Tekken / DBFZ style)
    const starGeo = new THREE.OctahedronGeometry(0.55, 0);
    const starMat = new THREE.MeshBasicMaterial({
      color: 0xffea00,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const hitStar = new THREE.Mesh(starGeo, starMat);
    hitStar.visible = false;
    scene.add(hitStar);
    hitStarRef.current = hitStar;

    // Ground Impact Expanding Shockwave Ring
    const shockRingGeo = new THREE.RingGeometry(0.25, 0.6, 32);
    const shockRingMat = new THREE.MeshBasicMaterial({
      color: 0x00f3ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const groundShock = new THREE.Mesh(shockRingGeo, shockRingMat);
    groundShock.rotation.x = -Math.PI / 2;
    groundShock.position.set(0, 0.02, 0);
    groundShock.visible = false;
    scene.add(groundShock);
    groundShockRef.current = groundShock;

    const triggerClash = (x = 1.0, y = 2.0, z = 0.5, color = 0xffea00, isHeavy = false, isCounter = false) => {
      clashStateRef.current = { active: true, time: 0, x, y, z, color };

      // Fighting Game Hit-Stop (tactile impact freeze)
      hitStopTimerRef.current = isCounter ? 0.13 : isHeavy ? 0.08 : 0.05;

      // Dynamic Camera Punch
      cameraShakeRef.current = isCounter ? 0.45 : isHeavy ? 0.32 : 0.18;
      if (cameraZoomTargetRef.current) {
        cameraZoomTargetRef.current.z = isCounter ? 5.2 : isHeavy ? 5.8 : 6.4;
      }

      // 3D Comic Hit Star Burst
      if (hitStarRef.current) {
        hitStarRef.current.visible = true;
        hitStarRef.current.position.set(x, y, z);
        hitStarRef.current.scale.set(0.3, 0.3, 0.3);
        hitStarRef.current.material.color.setHex(color);
        hitStarRef.current.material.opacity = 1.0;
        hitStarStateRef.current = { active: true, time: 0, x, y, z };
      }

      // Ground Impact Shockwave on Heavy Strikes / Finisher / Counter
      if (isHeavy || isCounter) {
        if (groundShockRef.current) {
          groundShockRef.current.visible = true;
          groundShockRef.current.position.set(x, 0.02, z);
          groundShockRef.current.scale.set(0.3, 0.3, 1);
          groundShockRef.current.material.color.setHex(color);
          groundShockRef.current.material.opacity = 0.95;
          groundShockStateRef.current = { active: true, time: 0 };
        }
      }

      if (clashRingRef.current) {
        clashRingRef.current.visible = true;
        clashRingRef.current.material.color.setHex(color);
        clashRingRef.current.position.set(x, y, z);
        clashRingRef.current.scale.set(0.2, 0.2, 0.2);
      }
      if (clashSparksRef.current) {
        clashSparksRef.current.visible = true;
        clashSparksRef.current.material.color.setHex(color);
        clashSparksRef.current.position.set(x, y, z);
        const arr = clashSparksRef.current.geometry.attributes.position.array;
        for (let i = 0; i < 40; i++) {
          arr[i * 3] = 0;
          arr[i * 3 + 1] = 0;
          arr[i * 3 + 2] = 0;
        }
        clashSparksRef.current.geometry.attributes.position.needsUpdate = true;
      }
    };

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
      try {
        const rawDelta = Math.min(clock.getDelta(), 0.1);
        const elapsed = clock.getElapsedTime();

      // Fighting Game Hit-Stop (Micro-Impact Freeze on collisions)
      let delta = rawDelta;
      if (hitStopTimerRef.current > 0) {
        hitStopTimerRef.current -= rawDelta;
        delta = 0; // Freeze fighters in crunch impact pose!
      } else if (isVictoryRef.current) {
        delta = rawDelta * 0.25; // Dramatic bullet-time slow motion on victory
      }

      // FPS Telemetry calculation
      frameCount++;
      const now = performance.now();
      if (now - lastFpsTime >= 500) {
        const currentFps = Math.round((frameCount * 1000) / (now - lastFpsTime));
        frameCount = 0;
        lastFpsTime = now;
        if (onTelemetryUpdateRef.current) {
          onTelemetryUpdateRef.current({
            fps: currentFps,
            aiState: aiFsmStateRef.current,
            distance: villainGroupRef.current ? Math.abs(villainGroupRef.current.position.x - (-1.8)).toFixed(1) : '3.6'
          });
        }
      }

      // 3D Moving Dynamic Background Animation (Zero CPU overhead, pure GPU matrix transform)
      if (movingBgGroupRef.current) {
        movingBgGroupRef.current.rotation.y = elapsed * 0.025;
      }
      if (bgMonolithsRef.current && bgMonolithsRef.current.length > 0) {
        for (let i = 0; i < bgMonolithsRef.current.length; i++) {
          const m = bgMonolithsRef.current[i];
          m.position.y = m.userData.baseY + Math.sin(elapsed * m.userData.speed + m.userData.offset) * 0.28;
          m.rotation.y += delta * 0.15;
          if (m.userData.rRing) {
            m.userData.rRing.rotation.z += delta * 0.6;
          }
        }
      }
      if (bgVortexRingsRef.current && bgVortexRingsRef.current.length >= 3) {
        const rings = bgVortexRingsRef.current;
        if (rings[0]) rings[0].rotation.z += delta * 0.35;
        if (rings[1]) rings[1].rotation.z -= delta * 0.45;
        if (rings[2]) rings[2].rotation.z += delta * 0.65;
      }
      if (horizonRingRef.current) {
        horizonRingRef.current.rotation.z += delta * 0.03;
      }

      // ============================================================
      // AAA FIGHTING GAME DYNAMIC COMBAT CAMERA CONTROLLER
      // ============================================================
      const cam = cameraRef.current;
      if (cam) {
        if (isVictoryRef.current) {
          // Epic 360-degree slow-motion cinematic orbit around Victor
          const orbAngle = elapsed * 0.45;
          cam.position.x = Math.sin(orbAngle) * 5.2 - 0.5;
          cam.position.z = Math.cos(orbAngle) * 5.2 + 1.8;
          cam.position.y = 1.95 + Math.sin(elapsed * 0.8) * 0.25;
          cam.lookAt(-0.5, 1.55, 0.5);
        } else if (introPhaseRef.current !== 'active') {
          // Cinematic Intro Camera
          cam.position.x = Math.sin(elapsed * 0.6) * 0.2;
          cam.position.y = 2.2 + Math.sin(elapsed * 0.8) * 0.08;
          cam.position.z = 8.2;
          cam.lookAt(0, 1.5, 0);
        } else {
          // ACTIVE COMBAT ISOMETRIC CAMERA
          const cZ = cameraZoomTargetRef.current;
          // Smoothly decay zoom back to base distance (7.1)
          cZ.z += (7.1 - cZ.z) * (rawDelta * 4.5);
          cZ.x += (-0.35 - cZ.x) * (rawDelta * 4.5);
          cZ.y += (2.05 - cZ.y) * (rawDelta * 4.5);

          // Apply breathing sway + dynamic combat shake
          const swayX = Math.sin(elapsed * 1.4) * 0.04;
          const swayY = Math.cos(elapsed * 1.8) * 0.025;
          const shakeX = cameraShakeRef.current > 0.001 ? (Math.random() - 0.5) * cameraShakeRef.current : 0;
          const shakeY = cameraShakeRef.current > 0.001 ? (Math.random() - 0.5) * cameraShakeRef.current : 0;
          if (cameraShakeRef.current > 0.001) cameraShakeRef.current *= 0.85;

          cam.position.x = cZ.x + swayX + shakeX;
          cam.position.y = cZ.y + swayY + shakeY;
          cam.position.z = cZ.z;

          // Dynamically track midpoint between hero and villain
          const hX = heroGroupRef.current ? heroGroupRef.current.position.x : -1.8;
          const vX = villainGroupRef.current ? villainGroupRef.current.position.x : 1.8;
          const midX = (hX + vX) * 0.5;
          cam.lookAt(midX * 0.4, 1.48, 0.3);
        }
      }

      // Ambient spark animation (Optimized for smooth 60fps without CPU array thrashing)
      if (particlesRef.current) {
        particlesRef.current.rotation.y += delta * 0.04;
        particlesRef.current.position.y = Math.sin(elapsed * 0.6) * 0.25;
      }

      // --- INTRO PORTAL EMERGENCE ---
      const curPhase = introPhaseRef.current;
      if (curPhase === 'emerging' || curPhase === 'boss-title' || curPhase === 'boss-entrance') {
        if (villainGroupRef.current) {
          const v = villainGroupRef.current;
          introAnimRef.current.emergeProgress = Math.min(1, introAnimRef.current.emergeProgress + delta * 1.5);
          const p = introAnimRef.current.emergeProgress;
          v.position.x = THREE.MathUtils.lerp(0, 1.8, p);
          v.position.z = THREE.MathUtils.lerp(-4.5, 0.5, p);
          v.position.y = Math.sin(p * Math.PI) * 0.4;
          const targetScale = THREE.MathUtils.lerp(0.2, 1, p);
          v.scale.set(targetScale, targetScale, targetScale);
        }
        if (villainRigRef.current) {
          animateArticulated3DFighter(villainRigRef.current, 'idle', 0, delta, elapsed, false, '');
        }
      } else if (curPhase === 'active' || curPhase === 'countdown' || curPhase === 'cinematic-banner') {
        if (villainGroupRef.current && introAnimRef.current.emergeProgress < 1) {
          introAnimRef.current.emergeProgress = 1;
          villainGroupRef.current.position.set(1.8, 0, 0.5);
          villainGroupRef.current.scale.set(1, 1, 1);
        }
      }

      // --- HERO 3D SKELETAL MOTION & AUTHENTIC MARVEL ATTACK KINEMATICS ---
      if (heroGroupRef.current) {
        const hGroup = heroGroupRef.current;
        const hAnim = heroAnimRef.current;
        const heroId = selectedHero?.id;
        const isIronMan = heroId === 'ironman' || heroId === 'plasma-ranger';
        const isThor = heroId === 'thor' || heroId === 'storm-guardian';
        const isSpidey = heroId === 'spiderman' || heroId === 'web-ninja' || !heroId;
        const isCap = heroId === 'captain-america' || heroId === 'shield-sentinel';
        const isStrange = heroId === 'doctor-strange' || heroId === 'dr-strange' || heroId === 'arcane-sorcerer';

        if (isVictoryRef.current) {
          hAnim.state = 'victory';
          if (isIronMan) {
            hGroup.position.set(-1.8, 0.45 + Math.sin(elapsed * 2.5) * 0.05, 0.5);
          } else if (isStrange) {
            hGroup.position.set(-1.8, 0.38 + Math.sin(elapsed * 1.8) * 0.04, 0.5);
          } else {
            hGroup.position.set(-1.8, 0, 0.5);
          }
          hGroup.rotation.set(0, Math.PI / 3.4, 0);
        } else if (isDefeatedRef.current) {
          hAnim.state = 'defeat';
          hGroup.position.set(-1.8, 0, 0.5);
        } else if (hAnim.state === 'idle') {
          // --- CHARACTER-SPECIFIC IDLE BATTLE STANCES ---
          if (isIronMan) {
            // High-Tech Nanotech Hover Flight (subtle jet thruster stabilization)
            hGroup.position.set(-1.8, 0.22 + Math.sin(elapsed * 3.6) * 0.035, 0.5);
            hGroup.rotation.set(0.04, Math.PI / 3.4, Math.sin(elapsed * 1.8) * 0.02);
          } else if (isStrange) {
            // Sorcerer Supreme Mystical Levitation (graceful floating with Cloak of Levitation)
            hGroup.position.set(-1.8, 0.32 + Math.sin(elapsed * 2.0) * 0.04, 0.5);
            hGroup.rotation.set(0, Math.PI / 3.4, 0);
          } else if (isSpidey) {
            // Agile Web-Slinger Martial Bounce (hyper-reactive athletic stance)
            const spideyBounce = Math.abs(Math.sin(elapsed * 4.4)) * 0.055;
            hGroup.position.set(-1.8, spideyBounce, 0.5);
            hGroup.rotation.set(0, Math.PI / 3.4, Math.sin(elapsed * 2.2) * 0.02);
          } else if (isCap) {
            // Disciplined Super-Soldier High Guard (grounded military stance, shield forward)
            const capBounce = Math.abs(Math.sin(elapsed * 3.2)) * 0.032;
            hGroup.position.set(-1.8, capBounce, 0.5);
            hGroup.rotation.set(0, Math.PI / 3.4, 0);
          } else if (isThor) {
            // God of Thunder Sturdy Battle Stance (heavy, wide Asgardian posture)
            const thorBreath = Math.sin(elapsed * 2.4) * 0.028;
            hGroup.position.set(-1.8, thorBreath, 0.5);
            hGroup.rotation.set(0, Math.PI / 3.4, 0);
          } else {
            const mBounce = Math.abs(Math.sin(elapsed * 4.0)) * 0.05;
            hGroup.position.set(-1.8, mBounce, 0.5);
            hGroup.rotation.set(0, Math.PI / 3.4, 0);
          }
        } else if (hAnim.state === 'punch') {
          // --- CHARACTER-SPECIFIC COMBAT COMBOS & POWERS (Cinematic, weighted pacing) ---
          hAnim.time += delta;
          const cIdx = hAnim.comboIndex || 0;
          const isFinisher = cIdx === 2;
          const punchDur = isFinisher ? 1.20 : (isCap && cIdx === 1) || (isThor && cIdx === 1) ? 1.05 : 0.85;
          const p = hAnim.time / punchDur;

          if (isIronMan) {
            // 1. IRON MAN: JET THRUSTER REPULSOR COMBOS
            if (cIdx === 0) {
              // Combo 0: Forward Rocket Dash + Palm Repulsor Thrust Blast
              const targetX = 1.05;
              if (p < 0.40) {
                const f = Math.sin((p / 0.40) * (Math.PI / 2));
                hGroup.position.set(-1.8 + f * (targetX - (-1.8)), 0.25, 0.5);
                hGroup.rotation.z = -0.06 * f;
                if (p >= 0.35 && !hAnim.hasClashed) {
                  hAnim.hasClashed = true;
                  triggerClash(targetX + 0.15, 2.1, 0.5, 0x00f3ff, false, hAnim.isCounterHit);
                }
              } else if (p < 1.0) {
                const f = (p - 0.40) / 0.60;
                const easeBack = Math.sin(f * (Math.PI / 2));
                hGroup.position.set(targetX - easeBack * (targetX - (-1.8)), 0.22, 0.5);
                hGroup.rotation.z = -0.06 * (1.0 - easeBack);
              }
            } else if (cIdx === 1) {
              // Combo 1: Dual Repulsor High-Velocity Jet Barrage
              const targetX = 1.20;
              if (p < 0.42) {
                const f = Math.sin((p / 0.42) * (Math.PI / 2));
                hGroup.position.set(-1.8 + f * (targetX - (-1.8)), 0.28, 0.5);
                hGroup.rotation.z = -0.10 * f;
                if (p >= 0.36 && !hAnim.hasClashed) {
                  hAnim.hasClashed = true;
                  triggerClash(targetX + 0.15, 2.1, 0.5, 0x00f3ff, true, hAnim.isCounterHit);
                }
              } else if (p < 1.0) {
                const f = (p - 0.42) / 0.58;
                const easeBack = Math.sin(f * (Math.PI / 2));
                hGroup.position.set(targetX - easeBack * (targetX - (-1.8)), 0.22, 0.5);
                hGroup.rotation.z = -0.10 * (1.0 - easeBack);
              }
            } else {
              // Combo 2: Finisher Supersonic Thruster Dive-Bomb Slam
              if (p < 0.42) {
                const f = Math.sin((p / 0.42) * (Math.PI / 2));
                hGroup.position.set(-1.8 + f * (1.35 - (-1.8)), f * 1.35, 0.5);
                hGroup.rotation.x = -f * 0.45;
                if (p >= 0.38 && !hAnim.hasClashed) {
                  hAnim.hasClashed = true;
                  triggerClash(1.35, 1.8, 0.5, 0x00f3ff, true, hAnim.isCounterHit);
                }
              } else if (p < 1.0) {
                const f = (p - 0.42) / 0.58;
                const easeBack = Math.sin(f * (Math.PI / 2));
                hGroup.position.set(1.35 - easeBack * (1.35 - (-1.8)), (1.0 - easeBack) * 1.35, 0.5);
                hGroup.rotation.x = -(1.0 - easeBack) * 0.45;
              }
            }
          } else if (isThor) {
            // 2. THOR: ASGARDIAN MJOLNIR HAMMER COMBOS & LIGHTNING
            if (cIdx === 0) {
              // Combo 0: Mjolnir Heavy Electric Uppercut Swing
              const targetX = 1.0;
              if (p < 0.42) {
                const f = Math.sin((p / 0.42) * (Math.PI / 2));
                hGroup.position.set(-1.8 + f * (targetX - (-1.8)), f * 0.25, 0.5);
                hGroup.rotation.z = -0.12 * f;
                if (p >= 0.38 && !hAnim.hasClashed) {
                  hAnim.hasClashed = true;
                  triggerClash(targetX + 0.15, 2.2, 0.5, 0x38bdf8, false, hAnim.isCounterHit);
                }
              } else if (p < 1.0) {
                const f = (p - 0.42) / 0.58;
                const easeBack = Math.sin(f * (Math.PI / 2));
                hGroup.position.set(targetX - easeBack * (targetX - (-1.8)), (1.0 - easeBack) * 0.25, 0.5);
                hGroup.rotation.z = -0.12 * (1.0 - easeBack);
              }
            } else if (cIdx === 1) {
              // Combo 1: Mjolnir Spinning Boomerang Hammer Toss
              if (p < 0.45) {
                const f = Math.sin((p / 0.45) * (Math.PI / 2));
                hGroup.position.set(-1.8 + f * 0.4, 0, 0.5);
                hGroup.rotation.z = -0.15 * f;
                if (p >= 0.40 && !hAnim.hasClashed) {
                  hAnim.hasClashed = true;
                  triggerClash(1.6, 2.1, 0.5, 0x38bdf8, true, hAnim.isCounterHit);
                }
              } else if (p < 1.0) {
                const f = (p - 0.45) / 0.55;
                const easeBack = Math.sin(f * (Math.PI / 2));
                hGroup.position.set(-1.4 - easeBack * 0.4, 0, 0.5);
                hGroup.rotation.z = -0.15 * (1.0 - easeBack);
              }
            } else {
              // Combo 2: Finisher Sky Lightning Hammer Cataclysm Slam
              if (p < 0.42) {
                const f = Math.sin((p / 0.42) * (Math.PI / 2));
                hGroup.position.set(-1.8 + f * (1.30 - (-1.8)), f * 1.6, 0.5);
                hGroup.rotation.x = -f * 0.5;
                if (p >= 0.38 && !hAnim.hasClashed) {
                  hAnim.hasClashed = true;
                  triggerClash(1.30, 1.8, 0.5, 0x60a5fa, true, hAnim.isCounterHit);
                }
              } else if (p < 1.0) {
                const f = (p - 0.42) / 0.58;
                const easeBack = Math.sin(f * (Math.PI / 2));
                hGroup.position.set(1.30 - easeBack * (1.30 - (-1.8)), (1.0 - easeBack) * 1.6, 0.5);
                hGroup.rotation.x = -(1.0 - easeBack) * 0.5;
              }
            }
          } else if (isSpidey) {
            // 3. SPIDER-MAN: ACROBATIC WEB-ZIP & SOMERSAULT FLIP COMBOS
            if (cIdx === 0) {
              // Combo 0: High-Tensile Web-Zip Slingshot Dropkick
              const targetX = 1.15;
              if (p < 0.38) {
                const f = Math.sin((p / 0.38) * (Math.PI / 2));
                hGroup.position.set(-1.8 + f * (targetX - (-1.8)), f * 0.45, 0.5);
                hGroup.rotation.z = -0.25 * f; // Dropkick body angle
                if (p >= 0.32 && !hAnim.hasClashed) {
                  hAnim.hasClashed = true;
                  triggerClash(targetX + 0.15, 2.0, 0.5, 0xff2a5f, false, hAnim.isCounterHit);
                }
              } else if (p < 1.0) {
                const f = (p - 0.38) / 0.62;
                const easeBack = Math.sin(f * (Math.PI / 2));
                hGroup.position.set(targetX - easeBack * (targetX - (-1.8)), (1.0 - easeBack) * 0.45, 0.5);
                hGroup.rotation.z = -0.25 * (1.0 - easeBack);
              }
            } else if (cIdx === 1) {
              // Combo 1: Acrobatic Windmill Roundhouse Aerial Spin Kick
              const targetX = 1.25;
              if (p < 0.40) {
                const f = Math.sin((p / 0.40) * (Math.PI / 2));
                hGroup.position.set(-1.8 + f * (targetX - (-1.8)), f * 0.6, 0.5);
                hGroup.rotation.y = Math.PI / 3.4 + f * Math.PI * 2;
                if (p >= 0.36 && !hAnim.hasClashed) {
                  hAnim.hasClashed = true;
                  triggerClash(targetX + 0.15, 2.1, 0.5, 0xff2a5f, true, hAnim.isCounterHit);
                }
              } else if (p < 1.0) {
                const f = (p - 0.40) / 0.60;
                const easeBack = Math.sin(f * (Math.PI / 2));
                hGroup.position.set(targetX - easeBack * (targetX - (-1.8)), (1.0 - easeBack) * 0.6, 0.5);
                hGroup.rotation.y = Math.PI / 3.4;
              }
            } else {
              // Combo 2: Finisher Web Blaster into Aerial Axe Somersault Slam
              if (p < 0.42) {
                const f = Math.sin((p / 0.42) * (Math.PI / 2));
                hGroup.position.set(-1.8 + f * (1.30 - (-1.8)), f * 0.85, 0.5);
                hGroup.rotation.x = -f * Math.PI * 2.0; // 360-degree aerial flip slam!
                if (p >= 0.38 && !hAnim.hasClashed) {
                  hAnim.hasClashed = true;
                  triggerClash(1.30, 2.0, 0.5, 0xff2a5f, true, hAnim.isCounterHit);
                }
              } else if (p < 1.0) {
                const f = (p - 0.42) / 0.58;
                const easeBack = Math.sin(f * (Math.PI / 2));
                hGroup.position.set(1.30 - easeBack * (1.30 - (-1.8)), (1.0 - easeBack) * 0.85, 0.5);
                hGroup.rotation.x = -(1.0 - easeBack) * Math.PI * 2.0;
              }
            }
          } else if (isCap) {
            // 4. CAPTAIN AMERICA: VIBRANIUM SHIELD BASH & RICOCHET TOSS COMBOS
            if (cIdx === 0) {
              // Combo 0: Kinetic Shield Charge & Shoulder Ram Bash
              const targetX = 1.05;
              if (p < 0.40) {
                const f = Math.sin((p / 0.40) * (Math.PI / 2));
                hGroup.position.set(-1.8 + f * (targetX - (-1.8)), 0, 0.5);
                hGroup.rotation.y = Math.PI / 3.4 + 0.15 * f;
                if (p >= 0.35 && !hAnim.hasClashed) {
                  hAnim.hasClashed = true;
                  triggerClash(targetX + 0.15, 1.9, 0.5, 0xfbbf24, false, hAnim.isCounterHit);
                }
              } else if (p < 1.0) {
                const f = (p - 0.40) / 0.60;
                const easeBack = Math.sin(f * (Math.PI / 2));
                hGroup.position.set(targetX - easeBack * (targetX - (-1.8)), 0, 0.5);
                hGroup.rotation.y = Math.PI / 3.4 + 0.15 * (1.0 - easeBack);
              }
            } else if (cIdx === 1) {
              // Combo 1: Spinning Ricochet Shield Toss & Deflection Return
              if (p < 0.45) {
                const f = Math.sin((p / 0.45) * (Math.PI / 2));
                hGroup.position.set(-1.8 + f * 0.35, 0, 0.5);
                hGroup.rotation.z = -0.10 * f;
                if (p >= 0.38 && !hAnim.hasClashed) {
                  hAnim.hasClashed = true;
                  triggerClash(1.7, 2.0, 0.5, 0xfbbf24, true, hAnim.isCounterHit);
                }
              } else if (p < 1.0) {
                const f = (p - 0.45) / 0.55;
                const easeBack = Math.sin(f * (Math.PI / 2));
                hGroup.position.set(-1.45 - easeBack * 0.35, 0, 0.5);
                hGroup.rotation.z = -0.10 * (1.0 - easeBack);
              }
            } else {
              // Combo 2: Finisher Leaping Star-Spangled Shield Rim Slam
              if (p < 0.42) {
                const f = Math.sin((p / 0.42) * (Math.PI / 2));
                hGroup.position.set(-1.8 + f * (1.30 - (-1.8)), f * 1.45, 0.5);
                hGroup.rotation.x = -f * 0.45;
                if (p >= 0.38 && !hAnim.hasClashed) {
                  hAnim.hasClashed = true;
                  triggerClash(1.30, 1.8, 0.5, 0xfbbf24, true, hAnim.isCounterHit);
                }
              } else if (p < 1.0) {
                const f = (p - 0.42) / 0.58;
                const easeBack = Math.sin(f * (Math.PI / 2));
                hGroup.position.set(1.30 - easeBack * (1.30 - (-1.8)), (1.0 - easeBack) * 1.45, 0.5);
                hGroup.rotation.x = -(1.0 - easeBack) * 0.45;
              }
            }
          } else if (isStrange) {
            // 5. DOCTOR STRANGE: ELDRITCH TAO MANDALA CASTING
            if (cIdx === 0) {
              // Combo 0: Floating Eldritch Tao Mandala Cast
              if (p < 0.42) {
                const f = Math.sin((p / 0.42) * (Math.PI / 2));
                hGroup.position.set(-1.8 + f * 0.6, 0.35, 0.5);
                hGroup.rotation.z = -0.08 * f;
                if (p >= 0.36 && !hAnim.hasClashed) {
                  hAnim.hasClashed = true;
                  triggerClash(1.6, 2.1, 0.5, 0xf59e0b, false, hAnim.isCounterHit);
                }
              } else if (p < 1.0) {
                const f = (p - 0.42) / 0.58;
                const easeBack = Math.sin(f * (Math.PI / 2));
                hGroup.position.set(-1.2 - easeBack * 0.6, 0.32, 0.5);
                hGroup.rotation.z = -0.08 * (1.0 - easeBack);
              }
            } else if (cIdx === 1) {
              // Combo 1: Dual Mandala Continuous Energy Ray
              if (p < 0.42) {
                const f = Math.sin((p / 0.42) * (Math.PI / 2));
                hGroup.position.set(-1.8 + f * 0.7, 0.38, 0.5);
                if (p >= 0.36 && !hAnim.hasClashed) {
                  hAnim.hasClashed = true;
                  triggerClash(1.7, 2.1, 0.5, 0xf59e0b, true, hAnim.isCounterHit);
                }
              } else if (p < 1.0) {
                const f = (p - 0.42) / 0.58;
                const easeBack = Math.sin(f * (Math.PI / 2));
                hGroup.position.set(-1.1 - easeBack * 0.7, 0.32, 0.5);
              }
            } else {
              // Combo 2: Finisher Tao Glyph Eruption & Mirror Shard Burst
              if (p < 0.44) {
                const f = Math.sin((p / 0.44) * (Math.PI / 2));
                hGroup.position.set(-1.8 - f * 0.4, 0.45 + f * 0.3, 0.5); // Floats majestically backward
                if (p >= 0.38 && !hAnim.hasClashed) {
                  hAnim.hasClashed = true;
                  triggerClash(1.5, 2.0, 0.5, 0xa855f7, true, hAnim.isCounterHit);
                }
              } else if (p < 1.0) {
                const f = (p - 0.44) / 0.56;
                const easeBack = Math.sin(f * (Math.PI / 2));
                hGroup.position.set(-2.2 + easeBack * 0.4, 0.75 - easeBack * 0.43, 0.5);
              }
            }
          }

          if (p >= 1.0) {
            hGroup.position.set(-1.8, isIronMan ? 0.22 : isStrange ? 0.32 : 0, 0.5);
            hGroup.rotation.set(0, Math.PI / 3.4, 0);
            hAnim.state = 'idle';
            hAnim.hasClashed = false;
            hAnim.isCounterHit = false;
          }
        } else if (hAnim.state === 'staggered') {
          hAnim.time += delta;
          const sP = Math.min(1.0, hAnim.time / 0.38);
          hGroup.position.x = -1.8 - Math.sin(sP * Math.PI) * 0.45;
          hGroup.position.y = isIronMan ? 0.22 : isStrange ? 0.32 : 0;
          hGroup.rotation.z = -Math.sin(sP * Math.PI) * 0.12;
          if (hAnim.time >= 0.38) {
            hAnim.state = 'idle';
            hAnim.time = 0;
            hGroup.position.set(-1.8, isIronMan ? 0.22 : isStrange ? 0.32 : 0, 0.5);
            hGroup.rotation.set(0, Math.PI / 3.4, 0);
          }
        } else if (hAnim.state === 'ultimate') {
          // --- CHARACTER-SPECIFIC CATACLYSM ULTIMATE SKILLS (Cinematic Overdrive) ---
          hAnim.time += delta;
          const ultDur = 1.85;
          const p = hAnim.time / ultDur;

          if (isIronMan) {
            // Arc Reactor Unibeam Overdrive (Mid-Air Laser Channel)
            if (p < 0.35) {
              const f = Math.sin((p / 0.35) * (Math.PI / 2));
              hGroup.position.set(-1.8 + f * 0.4, 0.22 + f * 0.9, 0.5);
              hGroup.rotation.set(0.12 * f, Math.PI / 3.4, 0);
              if (cameraZoomTargetRef.current) cameraZoomTargetRef.current.z = 5.8;
            } else if (p < 0.70) {
              // Channels Colossal Unibeam
              hGroup.position.set(-1.4, 1.12, 0.5);
              if (!hAnim.hasClashed) {
                hAnim.hasClashed = true;
                triggerClash(1.8, 2.3, 0.5, 0x00f3ff, true, false);
              }
            } else if (p < 1.0) {
              const f = (p - 0.70) / 0.30;
              const easeBack = Math.sin(f * (Math.PI / 2));
              hGroup.position.set(-1.4 - easeBack * 0.4, 1.12 - easeBack * 0.9, 0.5);
            }
          } else if (isThor) {
            // Mjolnir Sky Lightning Cataclysm
            if (p < 0.35) {
              const f = Math.sin((p / 0.35) * (Math.PI / 2));
              hGroup.position.set(-1.8 + f * 0.5, f * 2.8, 0.5);
              hGroup.rotation.z = f * Math.PI * 0.25;
              if (cameraZoomTargetRef.current) cameraZoomTargetRef.current.z = 5.5;
            } else if (p < 0.65) {
              // Cataclysmic lightning crash
              const f = (p - 0.35) / 0.30;
              hGroup.position.set(THREE.MathUtils.lerp(-1.3, 1.4, f), (1.0 - f) * 2.8, 0.5);
              if (!hAnim.hasClashed) {
                hAnim.hasClashed = true;
                triggerClash(1.4, 1.8, 0.5, 0x60a5fa, true, false);
              }
            } else if (p < 1.0) {
              const f = (p - 0.65) / 0.35;
              const easeBack = Math.sin(f * (Math.PI / 2));
              hGroup.position.set(1.4 - easeBack * 3.2, 0, 0.5);
              hGroup.rotation.z = 0;
            }
          } else if (isSpidey) {
            // Maximum Spider Web Blitz
            if (p < 0.30) {
              const f = Math.sin((p / 0.30) * (Math.PI / 2));
              hGroup.position.set(-1.8 + f * 3.2, f * 2.5, 0.5);
              hGroup.rotation.z = f * Math.PI * 2;
              if (cameraZoomTargetRef.current) cameraZoomTargetRef.current.z = 5.4;
            } else if (p < 0.65) {
              // Multi-angle ricochet blitz strikes
              const subP = (p - 0.30) / 0.35;
              const angle = subP * Math.PI * 4;
              hGroup.position.set(1.4 + Math.cos(angle) * 1.2, 2.0 + Math.sin(angle) * 1.0, 0.5);
              if (!hAnim.hasClashed) {
                hAnim.hasClashed = true;
                triggerClash(1.4, 2.0, 0.5, 0xff2a5f, true, false);
              }
            } else if (p < 1.0) {
              const f = (p - 0.65) / 0.35;
              const easeBack = Math.sin(f * (Math.PI / 2));
              hGroup.position.set(1.4 - easeBack * 3.2, (1.0 - easeBack) * 1.0, 0.5);
            }
          } else if (isCap) {
            // Vibranium Kinetic Bastion & Stratosphere Star Slam
            if (p < 0.35) {
              const f = Math.sin((p / 0.35) * (Math.PI / 2));
              hGroup.position.set(-1.8 + f * 1.5, f * 3.2, 0.5);
              if (cameraZoomTargetRef.current) cameraZoomTargetRef.current.z = 5.5;
            } else if (p < 0.65) {
              const f = (p - 0.35) / 0.30;
              hGroup.position.set(THREE.MathUtils.lerp(-0.3, 1.4, f), (1.0 - f) * 3.2, 0.5);
              if (!hAnim.hasClashed) {
                hAnim.hasClashed = true;
                triggerClash(1.4, 1.8, 0.5, 0xfbbf24, true, false);
              }
            } else if (p < 1.0) {
              const f = (p - 0.65) / 0.35;
              const easeBack = Math.sin(f * (Math.PI / 2));
              hGroup.position.set(1.4 - easeBack * 3.2, 0, 0.5);
            }
          } else if (isStrange) {
            // Astral Mirror Dimension Shift
            if (p < 0.40) {
              const f = Math.sin((p / 0.40) * (Math.PI / 2));
              hGroup.position.set(-1.8 - f * 0.5, 0.32 + f * 1.2, 0.5);
              if (cameraZoomTargetRef.current) cameraZoomTargetRef.current.z = 5.5;
            } else if (p < 0.75) {
              hGroup.position.set(-2.3, 1.52, 0.5);
              if (!hAnim.hasClashed) {
                hAnim.hasClashed = true;
                triggerClash(1.6, 2.2, 0.5, 0xa855f7, true, false);
              }
            } else if (p < 1.0) {
              const f = (p - 0.75) / 0.25;
              const easeBack = Math.sin(f * (Math.PI / 2));
              hGroup.position.set(-2.3 + easeBack * 0.5, 1.52 - easeBack * 1.2, 0.5);
            }
          }

          if (p >= 1.0) {
            hGroup.position.set(-1.8, isIronMan ? 0.22 : isStrange ? 0.32 : 0, 0.5);
            hGroup.rotation.set(0, Math.PI / 3.4, 0);
            hAnim.state = 'idle';
            hAnim.hasClashed = false;
          }
        } else if (hAnim.state === 'dodge') {
          // --- CHARACTER-SPECIFIC COMBAT EVASIONS (Smooth, athletic evasion) ---
          hAnim.time += delta;
          const p = hAnim.time / 0.70;
          if (p < 0.5) {
            const f = Math.sin((p / 0.5) * (Math.PI / 2));
            hGroup.position.x = -1.8 - f * 0.9;
            hGroup.position.z = 0.5 - f * 0.8;
            if (isSpidey) {
              // High Acrobatic Web-Swing Backflip
              hGroup.position.y = Math.sin(f * Math.PI) * 1.1;
              hGroup.rotation.x = -f * Math.PI * 2.0;
            } else if (isIronMan) {
              // High-Speed Jet Booster Reverse Burn
              hGroup.position.y = 0.22 + f * 0.45;
              hGroup.rotation.x = 0.2 * f;
            } else if (isStrange) {
              // Astral Dimension Phase Drift
              hGroup.position.y = 0.32 + f * 0.2;
            } else {
              // Tactical Ground Combat Roll
              hGroup.position.y = Math.sin(f * Math.PI) * 0.25;
              hGroup.rotation.z = -f * 0.35;
            }
          } else if (p < 1.0) {
            const f = (p - 0.5) / 0.5;
            const easeBack = Math.sin(f * (Math.PI / 2));
            hGroup.position.x = -2.7 + easeBack * 0.9;
            hGroup.position.z = -0.3 + easeBack * 0.8;
            if (isSpidey) {
              hGroup.position.y = (1.0 - easeBack) * 1.1;
              hGroup.rotation.x = 0;
            } else if (isIronMan) {
              hGroup.position.y = 0.67 - easeBack * 0.45;
              hGroup.rotation.x = 0;
            } else if (isStrange) {
              hGroup.position.y = 0.52 - easeBack * 0.2;
            } else {
              hGroup.position.y = 0;
              hGroup.rotation.z = 0;
            }
          } else {
            hGroup.position.set(-1.8, isIronMan ? 0.22 : isStrange ? 0.32 : 0, 0.5);
            hGroup.rotation.set(0, Math.PI / 3.4, 0);
            hAnim.state = 'idle';
          }
        }

        // Natural Hit Recoil Elastic Spring Curve (smooth recovery)
        if (hAnim.recoiling) {
          hAnim.recoilTime = (hAnim.recoilTime || 0) + delta;
          const rP = Math.min(1.0, hAnim.recoilTime / 0.52);
          hGroup.position.x = -1.8 - Math.sin(rP * Math.PI) * 0.48;
          hGroup.rotation.z = -Math.sin(rP * Math.PI) * 0.12;
          if (rP >= 1.0) {
            hAnim.recoiling = false;
            hAnim.recoilTime = 0;
            hGroup.position.x = -1.8;
            hGroup.rotation.z = 0;
          }
        }

        // 3D skeletal kinematic articulation for Hero
        if (heroRigRef.current) {
          animateArticulated3DFighter(heroRigRef.current, hAnim.state, hAnim.time, delta, elapsed, true, activeGestureRef.current, hAnim.comboIndex || 0);
        }

        // Spider-Sense Holographic Tingling Comic Arcs (tracks above head when villain telegraphs)
        if (isSpidey && spideySenseRef.current) {
          const isWarning = aiFsmStateRef.current === 'APPROACH';
          spideySenseRef.current.visible = isWarning;
          if (isWarning) {
            const hPos = hGroup.position;
            spideySenseRef.current.position.set(hPos.x, hPos.y + 2.5 + Math.sin(elapsed * 16) * 0.06, hPos.z);
            const alertPulse = 1.0 + Math.sin(elapsed * 22) * 0.22;
            spideySenseRef.current.scale.set(alertPulse, alertPulse, 1.0);
          }
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
        const cIdx = heroAnimRef.current?.comboIndex || 0;
        const isPoint = vfx.heroAttackType === 'point';

        // 1. IRON MAN / PLASMA RANGER: DUAL ARC PLASMA REPULSORS & UNIBEAM
        if (heroId === 'ironman' && ironmanBeamRef.current) {
          const beam = ironmanBeamRef.current;
          beam.visible = true;
          const maxDur = isUlt ? 1.45 : (cIdx === 2 ? 0.95 : 0.75);
          beam.material.opacity = Math.max(0, 1.0 - t / maxDur);
          beam.scale.set(isUlt ? 3.4 : (cIdx === 2 ? 1.8 : 1.2), 1, isUlt ? 3.4 : (cIdx === 2 ? 1.8 : 1.2));

          if (ironmanRingsRef.current) {
            ironmanRingsRef.current.forEach((r, idx) => {
              r.visible = isUlt || cIdx === 2;
              const rProg = (t * 2.2 + idx * 0.3) % 1.0;
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

        // 2. THOR: ASGARDIAN MJOLNIR HAMMER TOSS, LIGHTNING CURRENT & SKY BOLTS
        else if (heroId === 'thor' && thorLightningRef.current) {
          const isHammerThrow = cIdx === 1 || isPoint;
          const maxDur = isUlt ? 1.50 : (isHammerThrow ? 0.95 : 0.75);
          const op = Math.max(0, 1.0 - t / maxDur);
          thorLightningRef.current.material.opacity = op;

          // Returning Hammer Flight Arc (Combo 1 or Point Aim)
          if (thorHammerMeshRef.current) {
            const h = thorHammerMeshRef.current;
            h.visible = isHammerThrow;
            if (h.visible) {
              h.rotation.x += delta * 28;
              const p = t / maxDur;
              if (p < 0.5) {
                const f = p / 0.5;
                h.position.set(THREE.MathUtils.lerp(-1.8, 1.9, f), 2.1 + Math.sin(f * Math.PI) * 0.8, 0.5);
              } else {
                const f = (p - 0.5) / 0.5;
                h.position.set(THREE.MathUtils.lerp(1.9, -1.8, f), 2.1 + Math.sin(f * Math.PI) * 0.4, 0.5);
              }
            }
          }

          // Electric blue lightning bolts
          const pos = thorLightningRef.current.geometry.attributes.position.array;
          const pts = pos.length / 3;
          for (let p = 0; p < pts; p++) {
            const frac = p / (pts - 1);
            pos[p * 3] = THREE.MathUtils.lerp(-1.6, 2.0, frac);
            pos[p * 3 + 1] = THREE.MathUtils.lerp(2.2, 2.0, frac) + (Math.random() - 0.5) * (isUlt ? 1.4 : 0.6);
            pos[p * 3 + 2] = 0.5 + (Math.random() - 0.5) * 0.8;
          }
          thorLightningRef.current.geometry.attributes.position.needsUpdate = true;

          // Sky Bolts on Finisher or Ultimate
          if (thorSkyBoltsRef.current) {
            const isSkyBolts = isUlt || cIdx === 2;
            thorSkyBoltsRef.current.material.opacity = isSkyBolts ? op : 0;
            if (isSkyBolts) {
              const skyPos = thorSkyBoltsRef.current.geometry.attributes.position.array;
              const sPts = skyPos.length / 3;
              for (let sp = 0; sp < sPts; sp++) {
                const frac = sp / (sPts - 1);
                skyPos[sp * 3] = 1.8 + (Math.random() - 0.5) * 0.8;
                skyPos[sp * 3 + 1] = THREE.MathUtils.lerp(7.0, 1.8, frac);
                skyPos[sp * 3 + 2] = 0.5 + (Math.random() - 0.5) * 0.6;
              }
              thorSkyBoltsRef.current.geometry.attributes.position.needsUpdate = true;
            }
          }

          if (t > maxDur) {
            if (thorHammerMeshRef.current) thorHammerMeshRef.current.visible = false;
            vfx.heroAttackType = null;
          }
        }

        // 3. SPIDER-MAN: 3D HIGH-TENSILE WEB CABLE, NET BURST & MAXIMUM SPIDER DOME
        else if ((heroId === 'spiderman' || heroId === 'web-ninja' || !heroId) && spideyWebLineRef.current) {
          const maxDur = isUlt ? 1.55 : (cIdx === 2 ? 0.95 : 0.75);
          const op = Math.max(0, 1.0 - t / maxDur);

          if (!isUlt) {
            // Update 3D High-Tensile Web Cable Mesh (Combo 0 or Aim)
            if (spideyWebCableRef.current) {
              const cable = spideyWebCableRef.current;
              const isWebZip = cIdx === 0 || isPoint;
              cable.group.visible = isWebZip && t < 0.60;
              if (cable.group.visible) {
                cable.core.material.opacity = op;
                cable.aura.material.opacity = op * 0.85;

                const hPos = heroGroupRef.current ? heroGroupRef.current.position : new THREE.Vector3(-1.8, 0, 0.5);
                const vPos = villainGroupRef.current ? villainGroupRef.current.position : new THREE.Vector3(1.8, 0, 0.5);
                const pStart = new THREE.Vector3(hPos.x + 0.35, hPos.y + 1.25, hPos.z + 0.1);
                const pEnd = new THREE.Vector3(vPos.x - 0.2, vPos.y + 1.6, vPos.z);

                const dist = pStart.distanceTo(pEnd);
                const mid = new THREE.Vector3().addVectors(pStart, pEnd).multiplyScalar(0.5);
                cable.group.position.copy(mid);

                const dir = new THREE.Vector3().subVectors(pEnd, pStart).normalize();
                const up = new THREE.Vector3(0, 1, 0);
                cable.group.quaternion.setFromUnitVectors(up, dir);
                cable.core.scale.set(1, dist, 1);
                cable.aura.scale.set(1, dist, 1);
              }
            }

            // Web net burst on Finisher
            if (cIdx === 2 && spideyWebBurstRef.current) {
              const group = spideyWebBurstRef.current;
              const progress = Math.min(1.0, t / 0.55);
              group.children.forEach((strand, idx) => {
                strand.material.opacity = op;
                const arr = strand.geometry.attributes.position.array;
                arr[0] = -1.5; arr[1] = 2.1; arr[2] = 0.6;
                const angle = (idx / 10) * Math.PI * 2;
                arr[3] = THREE.MathUtils.lerp(-1.5, 1.8, progress);
                arr[4] = THREE.MathUtils.lerp(2.1, 2.0 + Math.sin(angle) * 1.6, progress);
                arr[5] = THREE.MathUtils.lerp(0.6, 0.5 + Math.cos(angle) * 1.6, progress);
                strand.geometry.attributes.position.needsUpdate = true;
              });
            }

            // Web snare at villain feet
            if (spideyWebTrapRef.current) {
              spideyWebTrapRef.current.visible = cIdx === 2;
              spideyWebTrapRef.current.material.opacity = Math.max(0, 0.85 - t / 0.85);
              const sc = 1 + t * 2.2;
              spideyWebTrapRef.current.scale.set(sc, sc, 1);
            }
          } else if (spideyWebBurstRef.current) {
            // Maximum Spider 3D Web Dome
            const group = spideyWebBurstRef.current;
            const progress = Math.min(1.0, t / 0.65);
            group.children.forEach((strand, idx) => {
              strand.material.opacity = op;
              const arr = strand.geometry.attributes.position.array;
              arr[0] = -1.8; arr[1] = 2.1; arr[2] = 0.6;
              const angle = (idx / 10) * Math.PI * 2;
              arr[3] = THREE.MathUtils.lerp(-1.8, 1.8 + Math.cos(angle) * 1.5, progress);
              arr[4] = THREE.MathUtils.lerp(2.1, 2.0 + Math.sin(angle) * 2.0, progress);
              arr[5] = THREE.MathUtils.lerp(0.6, 0.5 + Math.sin(angle) * 1.5, progress);
              strand.geometry.attributes.position.needsUpdate = true;
            });
          }

          if (t > maxDur) {
            if (spideyWebCableRef.current) spideyWebCableRef.current.group.visible = false;
            vfx.heroAttackType = null;
          }
        }

        // 4. CAPTAIN AMERICA: VIBRANIUM RICOCHET SHIELD TOSS & STAR SLAM SHOCKWAVE
        else if (heroId === 'captain-america' && capFlyingShieldRef.current) {
          const isShieldThrow = cIdx === 1 || isPoint;
          const shield = capFlyingShieldRef.current;
          const maxDur = isUlt ? 1.45 : (isShieldThrow ? 0.95 : 0.75);

          if (isShieldThrow) {
            shield.visible = true;
            shield.rotation.y += delta * 24;
            const p = t / maxDur;
            if (p < 0.5) {
              const f = p / 0.5;
              shield.position.x = THREE.MathUtils.lerp(-1.8, 1.8, f);
              shield.position.y = 1.9 + Math.sin(f * Math.PI) * 0.75;
            } else if (p < 1.0) {
              const f = (p - 0.5) / 0.5;
              shield.position.x = THREE.MathUtils.lerp(1.8, -1.8, f);
              shield.position.y = 1.9 + Math.sin(f * Math.PI) * 0.4;
            } else {
              shield.visible = false;
            }
          }

          // Golden Star Slam Shockwave (Finisher or Ultimate)
          if ((cIdx === 2 || isUlt) && capStarSlamRef.current) {
            const slam = capStarSlamRef.current;
            slam.visible = true;
            const sc = 1 + t * 6;
            slam.scale.set(sc, sc, 1);
            slam.material.opacity = Math.max(0, 0.95 - t / 0.95);
          }

          if (t > maxDur) {
            shield.visible = false;
            if (capStarSlamRef.current) capStarSlamRef.current.visible = false;
            vfx.heroAttackType = null;
          }
        }

        // 5. DOCTOR STRANGE: ROTATING TAO MANDALA RINGS & MIRROR DIMENSION CRYSTAL SHARDS
        else if ((heroId === 'doctor-strange' || heroId === 'dr-strange') && strangeMandalasRef.current) {
          const isMandalaCast = cIdx === 0 || cIdx === 1 || isPoint;
          const maxDur = isUlt ? 1.50 : (cIdx === 2 ? 0.95 : 0.75);

          if (isMandalaCast) {
            const m = strangeMandalasRef.current;
            m.visible = true;
            m.rotation.z += delta * 12;
            m.position.x = THREE.MathUtils.lerp(-1.8, 1.8, t / 0.75);
            m.position.y = 2.1;
          }

          // Mirror Dimension Shards (Finisher or Ultimate)
          if ((cIdx === 2 || isUlt) && mirrorShardsRef.current) {
            mirrorShardsRef.current.visible = true;
            mirrorShardsRef.current.children.forEach(shard => {
              shard.material.opacity = Math.max(0, 0.9 - t / maxDur);
              shard.rotation.x += delta * 7;
              shard.rotation.y += delta * 9;
            });
          }

          if (t > maxDur) {
            if (strangeMandalasRef.current) strangeMandalasRef.current.visible = false;
            if (mirrorShardsRef.current) {
              mirrorShardsRef.current.visible = false;
              mirrorShardsRef.current.children.forEach(s => (s.material.opacity = 0));
            }
            vfx.heroAttackType = null;
          }
        } else {
          vfx.heroAttackType = null;
        }
      }

      // ============================================================
      // --- VOID TITAN & VILLAIN INTELLIGENT AI FINITE STATE MACHINE (FSM) ---
      // ============================================================
      if (villainGroupRef.current) {
        const vGroup = villainGroupRef.current;
        const vAnim = villainAnimRef.current;
        const villainId = selectedVillain?.id || 'void-titan';

        if (isVictoryRef.current) {
          aiFsmStateRef.current = 'DEFEATED';
          vAnim.state = 'defeat';
          vGroup.position.set(1.8, 0, 0.5);
          if (dangerZoneMeshRef.current) dangerZoneMeshRef.current.material.opacity = 0;
        } else if (isDefeatedRef.current) {
          aiFsmStateRef.current = 'VICTORIOUS';
          vAnim.state = 'victory';
          vGroup.position.set(1.8, 0, 0.5);
          if (dangerZoneMeshRef.current) dangerZoneMeshRef.current.material.opacity = 0;
        } else if (introPhaseRef.current === 'active' && bossHpRef.current > 0) {
          aiAttackTimerRef.current += delta;

          // Deliberate, Strategic Combat Pacing (Paced for smooth reaction & cinematic duels):
          // Phase 1 (Tactical Probe): 7.5s attack interval, 2.60s warning telegraph
          // Phase 2 (Enraged Barrage): 6.2s attack interval, 2.20s warning telegraph
          // Phase 3 (Desperation Overdrive): 5.2s attack interval, 1.80s warning telegraph
          const isEnraged = bossPhaseRef.current >= 2;
          const attackInterval = bossPhaseRef.current === 3 ? 5.2 : isEnraged ? 6.2 : 7.5;
          const warningWindow = bossPhaseRef.current === 3 ? 1.80 : isEnraged ? 2.20 : 2.60;
          const warningStart = attackInterval - warningWindow;

          // FSM State transitions
          if (isBossStaggeredRef.current) {
            aiFsmStateRef.current = 'STUNNED';
            aiAttackTimerRef.current = 0;
            if (setIncomingAttackWarningRef.current) setIncomingAttackWarningRef.current(false);
            if (dangerZoneMeshRef.current) dangerZoneMeshRef.current.material.opacity = 0;
            vAnim.state = 'staggered';
            // Staggered down on one knee
            vGroup.position.set(1.8, -0.25, 0.5);
            vGroup.rotation.set(-0.15, -Math.PI / 3.4, 0.12);
          } else {
            // If in Warning window -> APPROACH & TELEGRAPH
            if (aiAttackTimerRef.current > warningStart && aiAttackTimerRef.current < attackInterval) {
              aiFsmStateRef.current = 'APPROACH';
              if (setIncomingAttackWarningRef.current) setIncomingAttackWarningRef.current(true);
              if (dangerZoneMeshRef.current) {
                const warningColor = isEnraged ? 0xa855f7 : 0xff0033;
                dangerZoneMeshRef.current.material.color.setHex(warningColor);
                dangerZoneMeshRef.current.material.opacity = 0.75 + Math.sin(elapsed * 12) * 0.25;
                dangerZoneMeshRef.current.scale.set(1 + Math.sin(elapsed * 10) * 0.16, 1 + Math.sin(elapsed * 10) * 0.16, 1);
              }
              // Boss enters menacing forward lean telegraph
              vGroup.position.x = 1.8 - 0.15 * Math.sin(((aiAttackTimerRef.current - warningStart) / warningWindow) * (Math.PI / 2));
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
              if (setIncomingAttackWarningRef.current) setIncomingAttackWarningRef.current(false);
              if (dangerZoneMeshRef.current) dangerZoneMeshRef.current.material.opacity = 0;

              vfx.villainAttackActive = true;
              vfx.villainVfxTime = 0;

              // Specific villain attack sounds
              if (villainId === 'void-titan') {
                sound.playLaserBeam(true);
                sound.playPortalWarp();
              } else if (villainId === 'green-goblin') {
                sound.playExplosion();
              } else if (villainId === 'thanos') {
                sound.playLaserBeam(true);
              } else if (villainId === 'magneto') {
                sound.playShieldBlock();
              } else if (villainId === 'doctor-doom' || villainId === 'doom-regent') {
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
              const oAng = elapsed * 2.8 + (oIdx * (Math.PI * 2 / 3));
              orb.position.set(vGroup.position.x + Math.cos(oAng) * 1.5, 2.2 + Math.sin(oAng * 1.5) * 0.5, 0.5 + Math.sin(oAng) * 1.0);
            });
          }

          if (vAnim.state === 'idle') {
            // Predatory stalking breathing bounce and slight rhythmic sway tailored per villain
            const stalkBounce = Math.sin(elapsed * 2.8 + 1.2) * 0.045;
            const stalkSway = Math.cos(elapsed * 1.9) * 0.02;

            if (villainId === 'green-goblin') {
              // Norman Osborn hovering high on his supersonic razor glider
              vGroup.position.set(1.8, 1.85 + Math.sin(elapsed * 3.2) * 0.12, 0.5);
              vGroup.rotation.set(0.08 * Math.sin(elapsed * 2.5), -Math.PI / 3.4, 0.05 * Math.cos(elapsed * 2.0));
            } else if (villainId === 'magneto') {
              // Master of Magnetism levitating gracefully in mid-air
              vGroup.position.set(1.8, 0.65 + Math.sin(elapsed * 2.2) * 0.06, 0.5);
              vGroup.rotation.set(0, -Math.PI / 3.4, 0);
            } else if (villainId === 'thanos') {
              // The Mad Titan heavy, immovable cosmic presence
              vGroup.position.set(1.8, stalkBounce * 0.6, 0.5);
              vGroup.rotation.set(0, -Math.PI / 3.4, 0);
            } else if (villainId === 'doctor-doom' || villainId === 'doom-regent') {
              // Monarch of Latveria regal upright stance
              vGroup.position.set(1.8, stalkBounce * 0.5, 0.5);
              vGroup.rotation.set(0, -Math.PI / 3.4, 0);
            } else if (villainId === 'loki') {
              // God of Mischief agile stealth crouch
              vGroup.position.set(1.8, stalkBounce * 0.8, 0.5);
              vGroup.rotation.set(0, -Math.PI / 3.4, stalkSway);
            } else {
              vGroup.position.y = stalkBounce;
              vGroup.rotation.z = stalkSway;
              vGroup.position.x = 1.8;
              vGroup.position.z = 0.5;
            }
          } else if (vAnim.state === 'staggered') {
            vAnim.time += delta;
            const sP = Math.min(1.0, vAnim.time / 0.42);
            vGroup.position.x = 1.8 + Math.sin(sP * Math.PI) * 0.45;
            vGroup.position.y = isBossStaggeredRef.current ? -0.25 : (villainId === 'green-goblin' ? 1.5 : villainId === 'magneto' ? 0.45 : 0);
            vGroup.rotation.z = Math.sin(sP * Math.PI) * 0.1;
            if (vAnim.time >= 0.42 && !isBossStaggeredRef.current) {
              vAnim.state = 'idle';
              vAnim.time = 0;
              vGroup.position.set(1.8, villainId === 'green-goblin' ? 1.85 : villainId === 'magneto' ? 0.65 : 0, 0.5);
              vGroup.rotation.set(0, -Math.PI / 3.4, 0);
            }
          } else if (vAnim.state === 'attack') {
            // --- CHARACTER-SPECIFIC VILLAIN ATTACK MOTIONS & KINEMATICS ---
            vAnim.time += delta;
            const isGoblin = villainId === 'green-goblin';
            const isThanos = villainId === 'thanos';
            const isDoom = villainId === 'doctor-doom' || villainId === 'doom-regent';
            const isLoki = villainId === 'loki';
            const isMag = villainId === 'magneto';
            const attackDur = isThanos ? 1.45 : isGoblin ? 1.35 : isDoom ? 1.30 : isMag ? 1.30 : 1.25;
            const p = vAnim.time / attackDur;

            const checkDamageToHero = (hitColor = 0xef4444, isHeavy = false) => {
              const isHeroDodging = heroAnimRef.current?.state === 'dodge';
              const isHeroBlocking = (heroAnimRef.current?.state === 'block') || (activeGestureRef.current && (activeGestureRef.current.toUpperCase().includes('SHIELD') || activeGestureRef.current.toUpperCase().includes('PALM')));
              const isHeroCountering = (heroAnimRef.current?.state === 'punch' || heroAnimRef.current?.state === 'ultimate');

              const heroCurrentX = heroGroupRef.current?.position.x ?? -1.8;
              if (isHeroDodging) {
                if (onHeroDamagedRef.current) onHeroDamagedRef.current('dodged');
                triggerClash(heroCurrentX, 1.8, 0.5, 0x00f3ff);
                cameraShakeRef.current = 0.05;
                sound.playWebSling();
              } else if (isHeroBlocking) {
                if (onHeroDamagedRef.current) onHeroDamagedRef.current('blocked');
                triggerClash(-1.2, 1.8, 0.5, 0x38bdf8);
                cameraShakeRef.current = 0.08;
                sound.playShieldBlock();
              } else if (isHeroCountering) {
                if (onHeroDamagedRef.current) onHeroDamagedRef.current('clash');
                triggerClash(0.2, 1.8, 0.5, 0xf59e0b);
                sound.playThunder();
                cameraShakeRef.current = 0.35;
                vAnim.state = 'staggered';
                vAnim.time = 0;
                vAnim.recoiling = true;
                vAnim.recoilTime = 0;
              } else {
                if (onHeroDamagedRef.current) onHeroDamagedRef.current('hit');
                triggerClash(heroCurrentX, 1.8, 0.5, hitColor, isHeavy, false);
                sound.playPunch();
                cameraShakeRef.current = isHeavy ? 0.32 : 0.24;
                if (heroAnimRef.current) {
                  heroAnimRef.current.state = 'staggered';
                  heroAnimRef.current.time = 0;
                  heroAnimRef.current.recoiling = true;
                  heroAnimRef.current.recoilTime = 0;
                }
              }
            };

            if (isThanos) {
              // 1. THANOS: THE MAD TITAN HEAVY MARCH & INFINITY GAUNTLET COSMIC BEAM
              if (p < 0.35) {
                // Heavy march forward, raises left arm with Infinity Gauntlet
                const f = Math.sin((p / 0.35) * (Math.PI / 2));
                vGroup.position.x = 1.8 - f * 0.7; // Advances to X = 1.1
                vGroup.position.y = f * 0.05;
                vGroup.rotation.y = -Math.PI / 3.4 + 0.18 * f;
                vGroup.rotation.z = -0.06 * f;
              } else if (p < 0.68) {
                // Infinity Gauntlet thrust forward channeling 6-stone destruction
                vGroup.position.x = 1.1;
                vGroup.position.y = 0;
                vGroup.rotation.y = -Math.PI / 3.4 + 0.22;
                if (p >= 0.45 && !vAnim.hasDamaged) {
                  vAnim.hasDamaged = true;
                  checkDamageToHero(0xd946ef, true);
                }
              } else if (p < 1.0) {
                // Heavy titan steps back to base position
                const f = (p - 0.68) / 0.32;
                const easeBack = Math.sin(f * (Math.PI / 2));
                vGroup.position.x = 1.1 + easeBack * 0.7;
                vGroup.rotation.y = -Math.PI / 3.4 + 0.22 * (1.0 - easeBack);
                vGroup.rotation.z = 0;
              }
            } else if (isDoom) {
              // 2. DOCTOR DOOM: SOVEREIGN LATVERIAN ORBITAL SIPHON & TECHNOMANCY RAY
              if (p < 0.35) {
                // Stands tall, raises right gauntlet commanding Latverian orbital weapons
                const f = Math.sin((p / 0.35) * (Math.PI / 2));
                vGroup.position.x = 1.8 - f * 0.3; // Stays sovereign at X = 1.5
                vGroup.position.y = f * 0.08;
                vGroup.rotation.y = -Math.PI / 3.4 + 0.12 * f;
              } else if (p < 0.65) {
                vGroup.position.x = 1.5;
                vGroup.position.y = 0.08;
                if (p >= 0.42 && !vAnim.hasDamaged) {
                  vAnim.hasDamaged = true;
                  checkDamageToHero(0x10b981, true);
                }
              } else if (p < 1.0) {
                const f = (p - 0.65) / 0.35;
                const easeBack = Math.sin(f * (Math.PI / 2));
                vGroup.position.x = 1.5 + easeBack * 0.3;
                vGroup.position.y = 0.08 * (1.0 - easeBack);
              }
            } else if (isGoblin) {
              // 3. GREEN GOBLIN: RAZOR GLIDER SWOOPING DIVE & PUMPKIN BOMB BARRAGE
              if (p < 0.32) {
                // Glider swoops downward in a menacing dive
                const f = Math.sin((p / 0.32) * (Math.PI / 2));
                vGroup.position.x = 1.8 - f * 0.6; // X: 1.8 -> 1.2
                vGroup.position.y = 1.85 - f * 0.75; // Y: 1.85 -> 1.10
                vGroup.rotation.x = 0.35 * f; // Glider nose pitches down
              } else if (p < 0.62) {
                // Throws pumpkin bomb and pulls glider back up
                const f = (p - 0.32) / 0.30;
                vGroup.position.x = 1.2;
                vGroup.position.y = 1.10 + f * 0.75;
                vGroup.rotation.x = 0.35 * (1.0 - f);
                if (p >= 0.48 && !vAnim.hasDamaged) {
                  vAnim.hasDamaged = true;
                  checkDamageToHero(0xf97316, true);
                }
              } else if (p < 1.0) {
                const f = (p - 0.62) / 0.38;
                const easeBack = Math.sin(f * (Math.PI / 2));
                vGroup.position.x = 1.2 + easeBack * 0.6;
                vGroup.position.y = 1.85;
                vGroup.rotation.x = 0;
              }
            } else if (isLoki) {
              // 4. LOKI: TEMPORAL PHASE ILLUSION TELEPORT & DUAL DAGGER FLURRY
              if (p < 0.25) {
                // Vanishes into emerald smoke
                const f = (p / 0.25);
                vGroup.position.x = 1.8 + f * 0.3;
                vGroup.scale.set(1.0 - f * 0.9, 1.0 - f * 0.9, 1.0 - f * 0.9);
              } else if (p < 0.58) {
                // Reappears right beside hero at X = -1.1!
                vGroup.scale.set(1, 1, 1);
                vGroup.position.set(-1.1, 0, 0.5);
                vGroup.rotation.y = Math.PI / 3.4;
                if (p >= 0.38 && !vAnim.hasDamaged) {
                  vAnim.hasDamaged = true;
                  checkDamageToHero(0x84cc16, false);
                }
              } else if (p < 0.75) {
                // Fades out from hero
                const f = (p - 0.58) / 0.17;
                vGroup.scale.set(1.0 - f * 0.9, 1.0 - f * 0.9, 1.0 - f * 0.9);
              } else {
                // Reappears back at base stance
                const f = (p - 0.75) / 0.25;
                vGroup.position.set(1.8, 0, 0.5);
                vGroup.rotation.set(0, -Math.PI / 3.4, 0);
                vGroup.scale.set(f, f, f);
              }
            } else if (isMag) {
              // 5. MAGNETO: ELECTROMAGNETIC LEVITATION & RAILGUN SPIKE VOLLEY
              if (p < 0.35) {
                // Raises both hands commanding electromagnetic forces
                const f = Math.sin((p / 0.35) * (Math.PI / 2));
                vGroup.position.y = 0.65 + f * 0.35; // Floats higher to Y = 1.0
                vGroup.position.x = 1.8;
                vGroup.rotation.x = -0.15 * f;
              } else if (p < 0.65) {
                // Thrusts hands forward launching railgun spikes
                vGroup.position.y = 1.0;
                if (p >= 0.45 && !vAnim.hasDamaged) {
                  vAnim.hasDamaged = true;
                  checkDamageToHero(0xef4444, true);
                }
              } else if (p < 1.0) {
                const f = (p - 0.65) / 0.35;
                const easeBack = Math.sin(f * (Math.PI / 2));
                vGroup.position.y = 1.0 - easeBack * 0.35;
                vGroup.rotation.x = -0.15 * (1.0 - easeBack);
              }
            } else {
              // Default Void Titan
              if (p < 0.32) {
                const f = Math.sin((p / 0.32) * (Math.PI / 2));
                vGroup.position.x = 1.8 + f * 0.25;
                vGroup.position.y = f * 0.15;
              } else if (p < 0.58) {
                const f = (p - 0.32) / 0.26;
                const easeLunge = Math.sin(f * (Math.PI / 2));
                vGroup.position.x = (1.8 + 0.25) - easeLunge * (1.8 + 0.25 - (-0.6));
                if (p >= 0.48 && !vAnim.hasDamaged) {
                  vAnim.hasDamaged = true;
                  checkDamageToHero(0xa855f7, true);
                }
              } else if (p < 1.0) {
                const f = (p - 0.58) / 0.42;
                const easeBack = Math.sin(f * (Math.PI / 2));
                vGroup.position.x = -0.6 + easeBack * (1.8 - (-0.6));
              }
            }

            if (p >= 1.0) {
              vGroup.position.set(1.8, isGoblin ? 1.85 : isMag ? 0.65 : 0, 0.5);
              vGroup.rotation.set(0, -Math.PI / 3.4, 0);
              vGroup.scale.set(1, 1, 1);
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

          // 2. GREEN GOBLIN: ROLLING PUMPKIN BOMB & FIERY FIREBALL DETONATION
          else if (villainId === 'green-goblin') {
            if (goblinBombRef.current) {
              const bomb = goblinBombRef.current;
              const bombFlightDur = 0.48;
              bomb.visible = vt < bombFlightDur;
              if (bomb.visible) {
                const f = vt / bombFlightDur;
                bomb.position.x = THREE.MathUtils.lerp(1.2, -1.8, f);
                bomb.position.y = 1.6 + Math.sin(f * Math.PI) * 1.4 - f * 1.3;
                bomb.rotation.x += delta * 24;
                bomb.rotation.y += delta * 18;
              }
            }
            if (goblinExplosionRef.current) {
              const exp = goblinExplosionRef.current;
              if (vt >= 0.42 && vt < 0.85) {
                exp.visible = true;
                const eProg = (vt - 0.42) / 0.43;
                const sc = 0.4 + eProg * 3.4;
                exp.position.set(-1.8, 1.2, 0.5);
                exp.scale.set(sc, sc, sc);
                if (exp.userData?.outer) exp.userData.outer.material.opacity = (1.0 - eProg) * 0.95;
                if (exp.userData?.inner) exp.userData.inner.material.opacity = (1.0 - eProg) * 1.0;
              } else {
                exp.visible = false;
              }
            }
          }

          // 3. THANOS: 6 INFINITY STONES COSMIC RAY & POWER STONE CRATER
          else if (villainId === 'thanos') {
            if (thanosBeamRef.current) {
              const beamGroup = thanosBeamRef.current;
              beamGroup.visible = vt < 0.72;
              const op = Math.max(0, 1.0 - vt / 0.72);
              if (beamGroup.userData?.outer) beamGroup.userData.outer.material.opacity = op;
              if (beamGroup.userData?.inner) beamGroup.userData.inner.material.opacity = op;
              if (beamGroup.userData?.stones) {
                beamGroup.userData.stones.forEach((st, idx) => {
                  const ang = vt * 14 + (idx * Math.PI / 3);
                  const rad = 0.28 + Math.sin(vt * 8) * 0.08;
                  st.position.set(-0.8 - (idx * 0.65), Math.cos(ang) * rad, Math.sin(ang) * rad);
                  st.material.opacity = op;
                });
              }
            }
            if (thanosShockwaveRef.current) {
              const sc = 1 + vt * 12;
              thanosShockwaveRef.current.scale.set(sc, sc, 1);
              thanosShockwaveRef.current.material.opacity = Math.max(0, 0.95 - vt / 0.68);
            }
          }

          // 4. MAGNETO: ELECTROMAGNETIC TORUS AURA & RAILGUN SPIKE VOLLEY
          else if (villainId === 'magneto') {
            if (magnetoAuraRef.current) {
              magnetoAuraRef.current.visible = vt < 0.70;
              magnetoAuraRef.current.material.opacity = Math.max(0, 0.9 - vt / 0.70);
              magnetoAuraRef.current.rotation.z += delta * 14;
            }
            if (magnetoSpikesRef.current) {
              const spikes = magnetoSpikesRef.current;
              spikes.visible = vt < 0.65;
              const f = Math.min(1.0, vt / 0.38);
              spikes.children.forEach((spike, idx) => {
                const offY = (idx - 2) * 0.42;
                spike.position.set(THREE.MathUtils.lerp(1.8, -2.4, f), 2.2 + offY, 0.5);
              });
            }
          }

          // 5. DOCTOR DOOM: ORBITAL SATELLITE SIPHON PILLAR & TECHNOMANCY GROUND RUNE
          else if (villainId === 'doctor-doom' || villainId === 'doom-regent') {
            if (doomOrbitalBeamRef.current) {
              const dBeam = doomOrbitalBeamRef.current;
              dBeam.visible = vt < 0.68;
              const op = Math.max(0, 1.0 - vt / 0.68);
              if (dBeam.userData?.outer) dBeam.userData.outer.material.opacity = op;
              if (dBeam.userData?.inner) dBeam.userData.inner.material.opacity = op;
            }
            if (doomGroundRingRef.current) {
              doomGroundRingRef.current.visible = vt < 0.68;
              const sc = 1 + vt * 10;
              doomGroundRingRef.current.scale.set(sc, sc, 1);
              doomGroundRingRef.current.material.opacity = Math.max(0, 0.9 - vt / 0.68);
            }
          }

          // 6. LOKI: SCEPTER BEAM & FLICKERING PHANTOM CLONE DECOYS
          else if (villainId === 'loki') {
            if (lokiScepterBeamRef.current) {
              lokiScepterBeamRef.current.visible = vt >= 0.25 && vt < 0.62;
              lokiScepterBeamRef.current.material.opacity = Math.max(0, 1.0 - (vt - 0.25) / 0.37);
            }
            if (lokiIllusionsRef.current) {
              lokiIllusionsRef.current.visible = vt < 0.65;
              const op = Math.sin(vt * 18) > 0 ? 0.85 : 0.25;
              lokiIllusionsRef.current.children.forEach(c => {
                c.children.forEach(m => {
                  if (m.material) m.material.opacity = op;
                });
              });
            }
          }

          const maxVfxDur = villainId === 'green-goblin' ? 0.88 : villainId === 'thanos' ? 0.72 : 0.68;
          if (vt > maxVfxDur) {
            vfx.villainAttackActive = false;
            if (voidBeamRef.current) voidBeamRef.current.visible = false;
            if (thanosBeamRef.current) thanosBeamRef.current.visible = false;
            if (doomOrbitalBeamRef.current) doomOrbitalBeamRef.current.visible = false;
            if (doomGroundRingRef.current) doomGroundRingRef.current.visible = false;
            if (lokiScepterBeamRef.current) lokiScepterBeamRef.current.visible = false;
            if (lokiIllusionsRef.current) lokiIllusionsRef.current.visible = false;
            if (magnetoSpikesRef.current) magnetoSpikesRef.current.visible = false;
            if (magnetoAuraRef.current) magnetoAuraRef.current.visible = false;
            if (goblinBombRef.current) goblinBombRef.current.visible = false;
            if (goblinExplosionRef.current) goblinExplosionRef.current.visible = false;
          }
        }

        // Boss Hit Recoil Elastic Spring Curve
        if (vAnim.recoiling) {
          vAnim.recoilTime = (vAnim.recoilTime || 0) + delta;
          const rP = Math.min(1.0, vAnim.recoilTime / 0.20);
          vGroup.position.x = 1.8 + Math.sin(rP * Math.PI) * 0.48;
          vGroup.rotation.z = Math.sin(rP * Math.PI) * 0.1;
          if (rP >= 1.0) {
            vAnim.recoiling = false;
            vAnim.recoilTime = 0;
            vGroup.position.x = 1.8;
            vGroup.rotation.z = 0;
          }
        }
        }

        // Real 3D skeletal kinematic articulation for Villain (always runs!)
        if (villainRigRef.current) {
          animateArticulated3DFighter(villainRigRef.current, vAnim.state, vAnim.time, delta, elapsed, false, '');
        }
      }

      // --- 3D SHIELD OPACITY & ROTATION ---
      if (shieldMeshRef.current) {
        const isShieldActive = activeGestureRef.current && (activeGestureRef.current.toUpperCase().includes('SHIELD') || activeGestureRef.current.toUpperCase().includes('PALM'));
        const targetOpacity = isShieldActive ? 0.85 : 0;
        shieldMeshRef.current.material.opacity += (targetOpacity - shieldMeshRef.current.material.opacity) * 0.25;
        if (shieldWireRef.current) {
          shieldWireRef.current.material.opacity = shieldMeshRef.current.material.opacity;
        }
        if (isShieldActive) {
          shieldMeshRef.current.rotation.z += delta * 2.5;
        }
      }

      // --- 3D CLASH BURST & SHOCKWAVE ANIMATION LOOP ---
      if (clashStateRef.current.active) {
        clashStateRef.current.time += delta;
        const ct = clashStateRef.current.time;
        const maxClashDur = 0.22;
        if (ct < maxClashDur) {
          const cProg = ct / maxClashDur;
          if (clashRingRef.current) {
            const sc = 0.2 + cProg * 3.8;
            clashRingRef.current.scale.set(sc, sc, sc);
            clashRingRef.current.material.opacity = (1.0 - cProg) * 0.95;
          }
          if (clashSparksRef.current) {
            clashSparksRef.current.material.opacity = (1.0 - cProg) * 0.95;
            const pos = clashSparksRef.current.geometry.attributes.position.array;
            const vels = clashSparksRef.current.userData.vels;
            for (let i = 0; i < 40; i++) {
              pos[i * 3] += vels[i].x * delta;
              pos[i * 3 + 1] += vels[i].y * delta;
              pos[i * 3 + 2] += vels[i].z * delta;
            }
            clashSparksRef.current.geometry.attributes.position.needsUpdate = true;
          }
        } else {
          clashStateRef.current.active = false;
          if (clashRingRef.current) clashRingRef.current.visible = false;
          if (clashSparksRef.current) clashSparksRef.current.visible = false;
        }
      }

      // --- 3D COMIC HIT STAR ANIMATION LOOP (Street Fighter / Tekken Impact Star) ---
      if (hitStarStateRef.current.active && hitStarRef.current) {
        hitStarStateRef.current.time += rawDelta;
        const ht = hitStarStateRef.current.time;
        const maxStarDur = 0.22;
        if (ht < maxStarDur) {
          const prog = ht / maxStarDur;
          const sScale = 0.35 + Math.sin(prog * Math.PI) * 1.5;
          hitStarRef.current.scale.set(sScale, sScale, sScale);
          hitStarRef.current.rotation.z += rawDelta * 18;
          hitStarRef.current.rotation.y += rawDelta * 12;
          hitStarRef.current.material.opacity = (1.0 - prog) * 1.0;
        } else {
          hitStarStateRef.current.active = false;
          hitStarRef.current.visible = false;
        }
      }

      // --- 3D GROUND IMPACT EXPANDING SHOCKWAVE LOOP ---
      if (groundShockStateRef.current.active && groundShockRef.current) {
        groundShockStateRef.current.time += rawDelta;
        const gt = groundShockStateRef.current.time;
        const maxShockDur = 0.35;
        if (gt < maxShockDur) {
          const prog = gt / maxShockDur;
          const gScale = 0.4 + prog * 4.6;
          groundShockRef.current.scale.set(gScale, gScale, 1);
          groundShockRef.current.material.opacity = (1.0 - prog) * 0.92;
        } else {
          groundShockStateRef.current.active = false;
          groundShockRef.current.visible = false;
        }
      }

        renderer.render(scene, camera);
      } catch (loopErr) {
        console.warn('Combat arena render glitch recovered:', loopErr);
      }
    };

    const handleContextLost = (e) => {
      e.preventDefault();
      console.warn('WebGL context lost, pausing render to recover...');
    };
    const handleContextRestored = () => {
      console.log('WebGL context restored');
      renderer.render(scene, camera);
    };
    if (renderer.domElement) {
      renderer.domElement.addEventListener('webglcontextlost', handleContextLost, false);
      renderer.domElement.addEventListener('webglcontextrestored', handleContextRestored, false);
    }

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement) {
        renderer.domElement.removeEventListener('webglcontextlost', handleContextLost);
        renderer.domElement.removeEventListener('webglcontextrestored', handleContextRestored);
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }
      renderer.dispose();
    };
  }, [selectedHero, selectedVillain]);

  // Listen to Hero Action Triggers (Punch, Ultimate, Dodge, Aim, Charge)
  useEffect(() => {
    if (!heroActionTrigger) return;

    const heroId = selectedHero?.id;

    if (heroActionTrigger.type === 'fist' || heroActionTrigger.type === 'forward') {
      const now = performance.now();
      let nextCombo = 0;
      if (now - lastComboTimeRef.current < 1100) {
        nextCombo = (comboStepRef.current + 1) % 3;
      }
      comboStepRef.current = nextCombo;
      lastComboTimeRef.current = now;

      const isCounter = Boolean(heroActionTrigger.isCounterHit);
      heroAnimRef.current = {
        state: 'punch',
        time: 0,
        recoiling: false,
        recoilTime: 0,
        comboIndex: nextCombo,
        isCounterHit: isCounter
      };
      activeVfxRef.current.heroAttackType = 'fist';
      activeVfxRef.current.heroVfxTime = 0;
      cameraShakeRef.current = isCounter ? 0.44 : 0.16 + nextCombo * 0.08;

      if (villainAnimRef.current) {
        villainAnimRef.current.state = 'staggered';
        villainAnimRef.current.time = 0;
        villainAnimRef.current.recoiling = true;
        villainAnimRef.current.recoilTime = 0;
      }

      // Hero Strike Audio based on Counter-Hit or Combo step
      if (isCounter) {
        sound.playCounterHit();
      } else if (heroId === 'ironman') {
        sound.playLaserBeam(nextCombo === 2);
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
      cameraShakeRef.current = 0.38;
      if (villainAnimRef.current) {
        villainAnimRef.current.state = 'staggered';
        villainAnimRef.current.time = 0;
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
    } else if (heroActionTrigger.type === 'point') {
      heroAnimRef.current = { state: 'punch', time: 0, recoiling: false, recoilTime: 0, comboIndex: 1 };
      activeVfxRef.current.heroAttackType = 'point';
      activeVfxRef.current.heroVfxTime = 0;
      cameraShakeRef.current = 0.22;
      if (villainAnimRef.current) {
        villainAnimRef.current.state = 'staggered';
        villainAnimRef.current.time = 0;
        villainAnimRef.current.recoiling = true;
        villainAnimRef.current.recoilTime = 0;
      }
      if (heroId === 'thor') {
        sound.playThunder();
      } else if (heroId === 'spiderman') {
        sound.playWebSling();
      } else if (heroId === 'captain-america') {
        sound.playShieldBlock();
      } else if (heroId === 'doctor-strange' || heroId === 'dr-strange') {
        sound.playMysticCast();
      } else {
        sound.playLaserBeam(true);
      }
    } else if (heroActionTrigger.type === 'palm') {
      heroAnimRef.current = { state: 'block', time: 0, recoiling: false, recoilTime: 0 };
      if (shieldMeshRef.current) {
        shieldMeshRef.current.material.opacity = 0.95;
      }
      if (heroId === 'captain-america') {
        sound.playShieldBlock();
      } else if (heroId === 'doctor-strange' || heroId === 'dr-strange') {
        sound.playMysticCast();
      } else if (heroId === 'spiderman') {
        sound.playWebSling();
      } else {
        sound.playHover();
      }
    } else if (heroActionTrigger.type === 'swipe') {
      heroAnimRef.current = { state: 'dodge', time: 0, recoiling: false };
      if (heroId === 'ironman') {
        sound.playLaserBeam(false);
      } else if (heroId === 'thor') {
        sound.playThunder();
      } else if (heroId === 'doctor-strange' || heroId === 'dr-strange') {
        sound.playMysticCast();
      } else {
        sound.playWebSling();
      }
    }
  }, [heroActionTrigger, selectedHero]);

  return (
    <div className="rs-three-battle-canvas-wrapper" ref={mountRef}>
      {/* Three.js 3D WebGL Canvas mounts dynamically here */}
    </div>
  );
};
