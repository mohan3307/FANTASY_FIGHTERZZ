import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';

// ============================================================
// CHARACTER SPECIFICATIONS, COLOR PALETTES & 3D RIG CONFIGS
// ============================================================
export const HERO_CONFIGS = {
  // 1. IRON MAN (Mark 85 Nanotech Armor / Plasma Ranger)
  'plasma-ranger': {
    id: 'plasma-ranger',
    marvelId: 'ironman',
    name: 'IRON MAN',
    archetype: 'Armored Avenger',
    primaryColor: 0xb91c1c, // Crimson Nanotech Armor
    secondaryColor: 0xf59e0b, // Gold Titanium Plates
    trimColor: 0x1e293b, // Dark Titanium Joints
    glowColor: 0x00f3ff, // Cyan Arc Reactor Glow
    accentColor: '#00f3ff',
    metalness: 0.96,
    roughness: 0.14,
    scale: 1.0,
    hasReactor: true,
    hasRepulsors: true,
    hasIronManHelmet: true,
    weaponType: 'repulsor',
    modelUrl: '/heros/iron_man.glb',
    isAuthenticGlb: true
  },
  ironman: {
    id: 'ironman',
    marvelId: 'ironman',
    name: 'IRON MAN',
    archetype: 'Armored Avenger',
    primaryColor: 0xb91c1c,
    secondaryColor: 0xf59e0b,
    trimColor: 0x1e293b,
    glowColor: 0x00f3ff,
    accentColor: '#00f3ff',
    metalness: 0.96,
    roughness: 0.14,
    scale: 1.0,
    hasReactor: true,
    hasRepulsors: true,
    hasIronManHelmet: true,
    weaponType: 'repulsor',
    modelUrl: '/heros/iron_man.glb',
    isAuthenticGlb: true
  },

  // 2. THOR (God of Thunder / Storm Guardian)
  'storm-guardian': {
    id: 'storm-guardian',
    marvelId: 'thor',
    name: 'THOR',
    archetype: 'Asgardian Thunder God',
    primaryColor: 0x1e293b, // Asgardian Dark Scale Steel
    secondaryColor: 0x94a3b8, // 6 Polished Silver Roundels
    trimColor: 0xd97706, // Gilded Gold Accents
    glowColor: 0x38bdf8, // Lightning Blue
    accentColor: '#00f3ff',
    metalness: 0.9,
    roughness: 0.2,
    scale: 1.08,
    hasCape: true,
    capeColor: 0x991b1b, // Flowing Crimson Cape
    hasMjolnir: true,
    hasWingedHelmet: true,
    weaponType: 'hammer',
    modelUrl: '/heros/thor_odinson.glb',
    isAuthenticGlb: true
  },
  thor: {
    id: 'thor',
    marvelId: 'thor',
    name: 'THOR',
    archetype: 'Asgardian Thunder God',
    primaryColor: 0x1e293b,
    secondaryColor: 0x94a3b8,
    trimColor: 0xd97706,
    glowColor: 0x38bdf8,
    accentColor: '#00f3ff',
    metalness: 0.9,
    roughness: 0.2,
    scale: 1.08,
    hasCape: true,
    capeColor: 0x991b1b,
    hasMjolnir: true,
    hasWingedHelmet: true,
    weaponType: 'hammer',
    modelUrl: '/heros/thor_odinson.glb',
    isAuthenticGlb: true
  },

  // 3. CAPTAIN AMERICA (First Avenger / Shield Sentinel)
  'shield-sentinel': {
    id: 'shield-sentinel',
    marvelId: 'captain-america',
    name: 'CAPTAIN AMERICA',
    archetype: 'Super Soldier',
    primaryColor: 0x1d4ed8, // Tactical Cobalt Blue
    secondaryColor: 0xb91c1c, // Crimson Combat Stripes
    trimColor: 0xe2e8f0, // Silver Star Medallion
    glowColor: 0x38bdf8,
    accentColor: '#fbbf24',
    metalness: 0.78,
    roughness: 0.28,
    scale: 1.04,
    hasCapShield: true,
    hasCapHelmet: true,
    hasStarHarness: true,
    weaponType: 'shield',
    modelUrl: '/heros/captain_america.glb',
    isAuthenticGlb: true
  },
  'captain-america': {
    id: 'captain-america',
    marvelId: 'captain-america',
    name: 'CAPTAIN AMERICA',
    archetype: 'Super Soldier',
    primaryColor: 0x1d4ed8,
    secondaryColor: 0xb91c1c,
    trimColor: 0xe2e8f0,
    glowColor: 0x38bdf8,
    accentColor: '#fbbf24',
    metalness: 0.78,
    roughness: 0.28,
    scale: 1.04,
    hasCapShield: true,
    hasCapHelmet: true,
    hasStarHarness: true,
    weaponType: 'shield',
    modelUrl: '/heros/captain_america.glb',
    isAuthenticGlb: true
  },

  // 4. SPIDER-MAN (Friendly Neighborhood / Web Ninja)
  'web-ninja': {
    id: 'web-ninja',
    marvelId: 'spiderman',
    name: 'SPIDER-MAN',
    archetype: 'Agile Web-Slinger',
    primaryColor: 0xdc2626, // Crimson Nano-Weave
    secondaryColor: 0x1e3a8a, // Tactical Navy Blue
    trimColor: 0x0f172a, // Black Web-Lines
    glowColor: 0x00f3ff,
    accentColor: '#ff2a5f',
    metalness: 0.55,
    roughness: 0.35,
    scale: 1.0,
    hasSpiderMask: true,
    hasWebshooters: true,
    hasSpiderEmblem: true,
    weaponType: 'web',
    modelUrl: '/heros/spider-man.glb',
    isAuthenticGlb: true
  },
  spiderman: {
    id: 'spiderman',
    marvelId: 'spiderman',
    name: 'SPIDER-MAN',
    archetype: 'Agile Web-Slinger',
    primaryColor: 0xdc2626,
    secondaryColor: 0x1e3a8a,
    trimColor: 0x0f172a,
    glowColor: 0x00f3ff,
    accentColor: '#ff2a5f',
    metalness: 0.55,
    roughness: 0.35,
    scale: 1.0,
    hasSpiderMask: true,
    hasWebshooters: true,
    hasSpiderEmblem: true,
    weaponType: 'web',
    modelUrl: '/heros/spider-man.glb',
    isAuthenticGlb: true
  },

  // 5. DOCTOR STRANGE (Master of Mystic Arts / Arcane Sorcerer)
  'arcane-sorcerer': {
    id: 'arcane-sorcerer',
    marvelId: 'doctor-strange',
    name: 'DOCTOR STRANGE',
    archetype: 'Sorcerer Supreme',
    primaryColor: 0x1e1b4b, // Midnight Indigo Robes
    secondaryColor: 0x0f766e, // Emerald Silk Sash
    trimColor: 0xf59e0b, // Eldritch Gold Border
    glowColor: 0xf59e0b, // Eldritch Orange Flame
    accentColor: '#a855f7',
    metalness: 0.45,
    roughness: 0.5,
    scale: 1.02,
    hasLevitationCloak: true,
    capeColor: 0x881337,
    hasEyeOfAgamotto: true,
    hasMandalas: true,
    weaponType: 'mandala',
    modelUrl: '/heros/doctor_strange_illuminati_textured_no_rig.glb',
    isAuthenticGlb: true
  },
  'doctor-strange': {
    id: 'doctor-strange',
    marvelId: 'doctor-strange',
    name: 'DOCTOR STRANGE',
    archetype: 'Sorcerer Supreme',
    primaryColor: 0x1e1b4b,
    secondaryColor: 0x0f766e,
    trimColor: 0xf59e0b,
    glowColor: 0xf59e0b,
    accentColor: '#a855f7',
    metalness: 0.45,
    roughness: 0.5,
    scale: 1.02,
    hasLevitationCloak: true,
    capeColor: 0x881337,
    hasEyeOfAgamotto: true,
    hasMandalas: true,
    weaponType: 'mandala',
    modelUrl: '/heros/doctor_strange_illuminati_textured_no_rig.glb',
    isAuthenticGlb: true
  }
};

export const VILLAIN_CONFIGS = {
  // 1. DOCTOR DOOM / DOOM REGENT — The Monarch of Latveria
  'doom-regent': {
    id: 'doom-regent',
    marvelId: 'doctor-doom',
    name: 'DOOM REGENT',
    archetype: 'Monarch of Techno-Arcane Ruin',
    primaryColor: 0xd1d5db, // Polished High-Specular Metallic Silver Steel
    secondaryColor: 0x064e3b, // Deep Emerald Velvet Cloth Hood & Long Cloak
    trimColor: 0xf59e0b, // Eldritch Gold Inlaid Filigree & Sovereign Clasps
    glowColor: 0x10b981, // Arcane Emerald Technomancy Core Glow
    accentColor: '#10b981',
    metalness: 0.98,
    roughness: 0.12,
    scale: 1.08,
    hasDoomMask: true,
    hasGreenHoodAndCloak: true,
    hasArmoredPauldrons: true,
    hasTechnomancyGauntlets: true,
    hasSovereignBelt: true,
    weaponType: 'technomancy-gauntlets',
    modelUrl: '/villans/doctor_doom_skin__fortnite_chapter_2_-_bp_skin.glb',
    isAuthenticGlb: true
  },
  'doctor-doom': {
    id: 'doctor-doom',
    marvelId: 'doctor-doom',
    name: 'DOCTOR DOOM',
    archetype: 'Monarch of Techno-Arcane Ruin',
    primaryColor: 0xd1d5db,
    secondaryColor: 0x064e3b,
    trimColor: 0xf59e0b,
    glowColor: 0x10b981,
    accentColor: '#10b981',
    metalness: 0.98,
    roughness: 0.12,
    scale: 1.08,
    hasDoomMask: true,
    hasGreenHoodAndCloak: true,
    hasArmoredPauldrons: true,
    hasTechnomancyGauntlets: true,
    hasSovereignBelt: true,
    weaponType: 'technomancy-gauntlets',
    modelUrl: '/villans/doctor_doom_skin__fortnite_chapter_2_-_bp_skin.glb',
    isAuthenticGlb: true
  },

  // 2. THANOS (The Mad Titan with the Infinity Gauntlet)
  thanos: {
    id: 'thanos',
    marvelId: 'thanos',
    name: 'THANOS',
    archetype: 'Cosmic Warlord',
    primaryColor: 0x581c87, // Alien Royal Purple Titan Skin
    secondaryColor: 0xd97706, // Battle-Hardened Golden Warlord Armor
    trimColor: 0x1e1b4b, // Obsidian Inlays
    glowColor: 0xd946ef, // Cosmic Power Glow
    accentColor: '#d946ef',
    metalness: 0.92,
    roughness: 0.22,
    scale: 1.0, // Balanced Titan Scale (2.15m full screen fit)
    hasInfinityGauntlet: true,
    hasThanosArmor: true,
    hasThanosChin: true,
    hasWarlordSword: true,
    weaponType: 'infinity-gauntlet',
    modelUrl: '/villans/thanos_4k_retextured.glb',
    isAuthenticGlb: true
  },
  'mech-destroyer': {
    id: 'mech-destroyer',
    marvelId: 'thanos',
    name: 'THANOS',
    archetype: 'Cosmic Warlord',
    primaryColor: 0x581c87,
    secondaryColor: 0xd97706,
    trimColor: 0x1e1b4b,
    glowColor: 0xd946ef,
    accentColor: '#d946ef',
    metalness: 0.92,
    roughness: 0.22,
    scale: 1.0,
    hasInfinityGauntlet: true,
    hasThanosArmor: true,
    hasThanosChin: true,
    hasWarlordSword: true,
    weaponType: 'infinity-gauntlet',
    modelUrl: '/villans/thanos_4k_retextured.glb',
    isAuthenticGlb: true
  },

  // 3. LOKI (God of Mischief / Shadow Assassin)
  loki: {
    id: 'loki',
    marvelId: 'loki',
    name: 'LOKI',
    archetype: 'God of Mischief',
    primaryColor: 0x064e3b, // Stealth Emerald Green
    secondaryColor: 0xf59e0b, // Towering Golden Curved Horns
    trimColor: 0x0f172a, // Obsidian Leather
    glowColor: 0x84cc16, // Phantom Lime Green
    accentColor: '#84cc16',
    metalness: 0.88,
    roughness: 0.24,
    scale: 1.05,
    hasLokiHorns: true,
    hasDualDaggers: true,
    weaponType: 'daggers',
    modelUrl: '/villans/loki.glb',
    isAuthenticGlb: true
  },
  'shadow-assassin': {
    id: 'shadow-assassin',
    marvelId: 'loki',
    name: 'LOKI',
    archetype: 'God of Mischief',
    primaryColor: 0x064e3b,
    secondaryColor: 0xf59e0b,
    trimColor: 0x0f172a,
    glowColor: 0x84cc16,
    accentColor: '#84cc16',
    metalness: 0.88,
    roughness: 0.24,
    scale: 1.05,
    hasLokiHorns: true,
    hasDualDaggers: true,
    weaponType: 'daggers',
    modelUrl: '/villans/loki.glb',
    isAuthenticGlb: true
  },

  // 4. GREEN GOBLIN (Norman Osborn with Glider & Pumpkin Bomb)
  'green-goblin': {
    id: 'green-goblin',
    marvelId: 'green-goblin',
    name: 'GREEN GOBLIN',
    archetype: 'Chaos Bombardier',
    primaryColor: 0x16a34a, // Toxic Emerald Scale Armor
    secondaryColor: 0x7c3aed, // Purple Velvet Hood & Cowl
    trimColor: 0x0f172a, // Cyber Steel
    glowColor: 0xf97316, // Pumpkin Molten Orange
    accentColor: '#22c55e',
    metalness: 0.85,
    roughness: 0.25,
    scale: 1.05,
    hasGoblinMask: true,
    hasGlider: true,
    hasPumpkinBomb: true,
    weaponType: 'bombs',
    modelUrl: '/villans/green_globin_hd_3d_model_ftu.glb',
    isAuthenticGlb: true
  },

  // 5. MAGNETO (Master of Magnetism)
  magneto: {
    id: 'magneto',
    marvelId: 'magneto',
    name: 'MAGNETO',
    archetype: 'Mutant Sovereign',
    primaryColor: 0xb91c1c, // Crimson Combat Tunic
    secondaryColor: 0x581c87, // Flowing Purple Cape
    trimColor: 0xe2e8f0, // Silver Helmet Inlay
    glowColor: 0xef4444, // Magnetic Red Aura
    accentColor: '#ef4444',
    metalness: 0.9,
    roughness: 0.2,
    scale: 1.05,
    weaponType: 'magnetism',
    modelUrl: '/villans/max_eisenhardt_-_magneto.glb',
    isAuthenticGlb: true
  },

  // 6. VOID OVERLORD (Abyssal AI Titan)
  'void-titan': {
    id: 'void-titan',
    marvelId: 'void-titan',
    name: 'VOID OVERLORD',
    archetype: 'Cosmic Singularity Titan',
    primaryColor: 0x0a0a14, // Dark Obsidian Cyber-Armor
    secondaryColor: 0x312e81, // Deep Dark-Matter Indigo
    trimColor: 0x475569, // Titanium Armor Joints
    glowColor: 0xa855f7, // Volatile Violet Singularity
    accentColor: '#8b5cf6',
    metalness: 0.94,
    roughness: 0.16,
    scale: 1.0,
    hasVoidCore: true,
    hasVoidGauntlets: true,
    hasVoidCrest: true,
    weaponType: 'void-gauntlet',
    modelUrl: '/villans/thanos_4k_retextured.glb',
    isAuthenticGlb: true
  }
};

// ============================================================
// PBR MATERIAL FACTORY
// ============================================================
function createPbrMaterial(color, metalness = 0.8, roughness = 0.25, emissive = 0x000000, emissiveIntensity = 0.3) {
  return new THREE.MeshStandardMaterial({
    color,
    metalness,
    roughness,
    emissive,
    emissiveIntensity: emissive !== 0x000000 ? emissiveIntensity : 0
  });
}

// Global GLTF Cache & Loader for instantaneous cloning without network overhead
const gltfCache = {};
const gltfLoader = new GLTFLoader();

function loadGLTFModel(url) {
  if (gltfCache[url]) {
    return Promise.resolve(gltfCache[url]);
  }
  return new Promise((resolve, reject) => {
    gltfLoader.load(
      url,
      (gltf) => {
        gltfCache[url] = gltf;
        resolve(gltf);
      },
      undefined,
      (err) => {
        console.error(`Failed to load 3D GLTF asset from ${url}:`, err);
        reject(err);
      }
    );
  });
}

export function preloadFighterModels() {
  const priorityUrls = [
    '/heros/iron_man.glb',
    '/heros/captain_america.glb',
    '/heros/spider-man.glb',
    '/villans/thanos_4k_retextured.glb',
    '/villans/doctor_doom_skin__fortnite_chapter_2_-_bp_skin.glb'
  ];
  const startPreload = () => {
    priorityUrls.forEach((url, i) => {
      setTimeout(() => {
        loadGLTFModel(url).catch(() => {});
      }, i * 600);
    });
  };

  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    window.requestIdleCallback(startPreload);
  } else {
    setTimeout(startPreload, 500);
  }
}

// Visible 3D Holographic Asset-Loading Error Display
function createAssetLoadingErrorMesh(url, errorMessage) {
  const errGroup = new THREE.Group();

  const diamondGeo = new THREE.OctahedronGeometry(0.65, 0);
  const diamondMat = new THREE.MeshBasicMaterial({ color: 0xef4444, wireframe: true });
  const diamond = new THREE.Mesh(diamondGeo, diamondMat);
  diamond.position.y = 1.3;
  errGroup.add(diamond);

  const coreGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.38, 8);
  const coreMat = new THREE.MeshBasicMaterial({ color: 0xff0033 });
  const core = new THREE.Mesh(coreGeo, coreMat);
  core.position.y = 1.35;
  errGroup.add(core);

  const dotGeo = new THREE.SphereGeometry(0.05, 8, 8);
  const dot = new THREE.Mesh(dotGeo, coreMat);
  dot.position.y = 1.05;
  errGroup.add(dot);

  const ringGeo = new THREE.RingGeometry(0.7, 0.8, 32);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0xef4444, side: THREE.DoubleSide });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.02;
  errGroup.add(ring);

  return errGroup;
}

// Temporary scanning hologram avatar while asset finishes parsing
function createScanningHologram(color, scale = 1.0) {
  const holoGroup = new THREE.Group();
  holoGroup.name = 'loading-hologram';

  const wireMat = new THREE.MeshBasicMaterial({
    color: color || 0x00f3ff,
    wireframe: true,
    transparent: true,
    opacity: 0.45
  });

  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.22 * scale, 0.16 * scale, 0.6 * scale, 10), wireMat);
  torso.position.y = 1.15 * scale;
  holoGroup.add(torso);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.14 * scale, 10, 8), wireMat);
  head.position.y = 1.62 * scale;
  holoGroup.add(head);

  return holoGroup;
}

// ============================================================
// SYNTHESIZE FULL SUITE OF COMBAT ANIMATION CLIPS FOR MIXAMO RIG
// ============================================================
function createQuatTrack(name, times, eulerArrays) {
  const vals = [];
  eulerArrays.forEach(([x, y, z]) => {
    const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(x, y, z));
    vals.push(q.x, q.y, q.z, q.w);
  });
  return new THREE.QuaternionKeyframeTrack(name + '.quaternion', times, vals);
}

function createPosTrack(name, times, posArrays) {
  const vals = [];
  posArrays.forEach(([x, y, z]) => vals.push(x, y, z));
  return new THREE.VectorKeyframeTrack(name + '.position', times, vals);
}

function buildSynthesizedMixamoClips(characterId = '') {
  const isSpidey = characterId === 'spiderman' || characterId === 'web-ninja';

  if (isSpidey) {
    return [
      // 0. Clean, Upright Athletic Martial Stance (2.0s seamless loop)
      new THREE.AnimationClip('idle', 2.0, [
        createQuatTrack('mixamorigSpine2', [0, 1.0, 2.0], [[0.06, 0, 0], [0.03, 0, 0], [0.06, 0, 0]]),
        createQuatTrack('mixamorigHead', [0, 1.0, 2.0], [[-0.04, 0, 0], [-0.02, 0, 0], [-0.04, 0, 0]]),
        createQuatTrack('mixamorigLeftArm', [0, 1.0, 2.0], [[-0.35, 0.15, 0.20], [-0.32, 0.18, 0.22], [-0.35, 0.15, 0.20]]),
        createQuatTrack('mixamorigLeftForeArm', [0, 1.0, 2.0], [[-0.95, 0, 0], [-0.98, 0, 0], [-0.95, 0, 0]]),
        createQuatTrack('mixamorigRightArm', [0, 1.0, 2.0], [[-0.35, -0.15, -0.20], [-0.32, -0.18, -0.22], [-0.35, -0.15, -0.20]]),
        createQuatTrack('mixamorigRightForeArm', [0, 1.0, 2.0], [[-0.95, 0, 0], [-0.98, 0, 0], [-0.95, 0, 0]])
      ]),

      // 1. Acrobatic Web-Zip Strike (0.58s)
      new THREE.AnimationClip('attack', 0.58, [
        createQuatTrack('mixamorigSpine2', [0, 0.25, 0.58], [[0.06, 0, 0], [0.15, 0.35, 0], [0.06, 0, 0]]),
        createQuatTrack('mixamorigRightArm', [0, 0.25, 0.58], [[-0.35, -0.15, -0.20], [-1.45, 0, -0.15], [-0.35, -0.15, -0.20]]),
        createQuatTrack('mixamorigRightForeArm', [0, 0.25, 0.58], [[-0.95, 0, 0], [-0.10, 0, 0], [-0.95, 0, 0]]),
        createQuatTrack('mixamorigLeftArm', [0, 0.25, 0.58], [[-0.35, 0.15, 0.20], [0.35, 0, 0.25], [-0.35, 0.15, 0.20]])
      ]),

      // 2. Maximum Spider Web Blitz (0.95s)
      new THREE.AnimationClip('special_cast', 0.95, [
        createQuatTrack('mixamorigSpine2', [0, 0.45, 0.95], [[0.06, 0, 0], [-0.25, 0, 0], [0.06, 0, 0]]),
        createQuatTrack('mixamorigLeftArm', [0, 0.45, 0.95], [[-0.35, 0.15, 0.20], [-2.15, 0, 0.35], [-0.35, 0.15, 0.20]]),
        createQuatTrack('mixamorigRightArm', [0, 0.45, 0.95], [[-0.35, -0.15, -0.20], [-2.15, 0, -0.35], [-0.35, -0.15, -0.20]])
      ]),

      // 3. Spider Cross-Arm Web Guard (0.60s)
      new THREE.AnimationClip('block', 0.60, [
        createQuatTrack('mixamorigSpine2', [0, 0.20, 0.60], [[0.06, 0, 0], [0.12, 0, 0], [0.06, 0, 0]]),
        createQuatTrack('mixamorigLeftArm', [0, 0.20, 0.60], [[-0.35, 0.15, 0.20], [-0.75, 0, 0.35], [-0.35, 0.15, 0.20]]),
        createQuatTrack('mixamorigLeftForeArm', [0, 0.20, 0.60], [[-0.95, 0, 0], [-1.35, 0, 0], [-0.95, 0, 0]]),
        createQuatTrack('mixamorigRightArm', [0, 0.20, 0.60], [[-0.35, -0.15, -0.20], [-0.75, 0, -0.35], [-0.35, -0.15, -0.20]]),
        createQuatTrack('mixamorigRightForeArm', [0, 0.20, 0.60], [[-0.95, 0, 0], [-1.35, 0, 0], [-0.95, 0, 0]])
      ]),

      // 4. Acrobatic Dodge Left (0.45s)
      new THREE.AnimationClip('dodge_left', 0.45, [
        createQuatTrack('mixamorigSpine2', [0, 0.22, 0.45], [[0.06, 0, 0], [0, 0, -0.35], [0.06, 0, 0]]),
        createQuatTrack('mixamorigLeftArm', [0, 0.22, 0.45], [[-0.35, 0.15, 0.20], [0.45, 0, 0], [-0.35, 0.15, 0.20]]),
        createQuatTrack('mixamorigRightArm', [0, 0.22, 0.45], [[-0.35, -0.15, -0.20], [0.45, 0, 0], [-0.35, -0.15, -0.20]])
      ]),

      // 5. Acrobatic Dodge Right (0.45s)
      new THREE.AnimationClip('dodge_right', 0.45, [
        createQuatTrack('mixamorigSpine2', [0, 0.22, 0.45], [[0.06, 0, 0], [0, 0, 0.35], [0.06, 0, 0]]),
        createQuatTrack('mixamorigLeftArm', [0, 0.22, 0.45], [[-0.35, 0.15, 0.20], [0.45, 0, 0], [-0.35, 0.15, 0.20]]),
        createQuatTrack('mixamorigRightArm', [0, 0.22, 0.45], [[-0.35, -0.15, -0.20], [0.45, 0, 0], [-0.35, -0.15, -0.20]])
      ]),

      // 6. Acrobatic Leap (0.65s)
      new THREE.AnimationClip('jump', 0.65, [
        createQuatTrack('mixamorigSpine2', [0, 0.32, 0.65], [[0.06, 0, 0], [-0.15, 0, 0], [0.06, 0, 0]])
      ]),

      // 7. Hit Reaction (0.42s)
      new THREE.AnimationClip('hit_reaction', 0.42, [
        createQuatTrack('mixamorigSpine2', [0, 0.18, 0.42], [[0.06, 0, 0], [-0.28, 0, 0], [0.06, 0, 0]]),
        createQuatTrack('mixamorigHead', [0, 0.18, 0.42], [[-0.04, 0, 0], [0.35, 0, 0], [-0.04, 0, 0]])
      ]),

      // 8. Combat-Ready Stance
      new THREE.AnimationClip('combat_stance', 1.0, [
        createQuatTrack('mixamorigSpine2', [0, 0.5, 1.0], [[0.06, 0, 0], [0.04, 0, 0], [0.06, 0, 0]]),
        createQuatTrack('mixamorigLeftArm', [0, 0.5, 1.0], [[-0.35, 0.15, 0.20], [-0.35, 0.15, 0.20], [-0.35, 0.15, 0.20]]),
        createQuatTrack('mixamorigRightArm', [0, 0.5, 1.0], [[-0.35, -0.15, -0.20], [-0.35, -0.15, -0.20], [-0.35, -0.15, -0.20]])
      ]),

      // 9. Iconic Web-Slinging Victory Pose (1.2s)
      new THREE.AnimationClip('victory', 1.2, [
        createQuatTrack('mixamorigRightArm', [0, 0.4, 1.2], [[0, 0, 0], [-2.85, 0, -0.25], [-2.85, 0, -0.25]]),
        createQuatTrack('mixamorigRightForeArm', [0, 0.4, 1.2], [[0, 0, 0], [-0.1, 0, 0], [-0.1, 0, 0]]),
        createQuatTrack('mixamorigLeftArm', [0, 0.4, 1.2], [[0, 0, 0], [0.45, 0, 0.45], [0.45, 0, 0.45]]),
        createQuatTrack('mixamorigSpine2', [0, 0.4, 1.2], [[0, 0, 0], [0.25, 0, 0], [0.25, 0, 0]]),
        createQuatTrack('mixamorigHead', [0, 0.4, 1.2], [[0, 0, 0], [0.25, 0, 0], [0.25, 0, 0]])
      ]),

      // 10. Defeat Pose (1.0s)
      new THREE.AnimationClip('defeat', 1.0, [
        createQuatTrack('mixamorigSpine2', [0, 0.5, 1.0], [[0, 0, 0], [-0.65, 0, 0], [-0.65, 0, 0]])
      ])
    ];
  }

  return [
    // 0. Authentic Combat Idle Fighting Stance (2.0s seamless loop)
    new THREE.AnimationClip('idle', 2.0, [
      createQuatTrack('mixamorigSpine2', [0, 1.0, 2.0], [[0.18, 0, 0], [0.14, 0, 0], [0.18, 0, 0]]),
      createQuatTrack('mixamorigHead', [0, 1.0, 2.0], [[-0.12, 0, 0], [-0.08, 0, 0], [-0.12, 0, 0]]),
      createQuatTrack('mixamorigLeftArm', [0, 1.0, 2.0], [[-0.75, 0.25, 0.55], [-0.70, 0.28, 0.58], [-0.75, 0.25, 0.55]]),
      createQuatTrack('mixamorigLeftForeArm', [0, 1.0, 2.0], [[-1.25, 0, 0], [-1.30, 0, 0], [-1.25, 0, 0]]),
      createQuatTrack('mixamorigRightArm', [0, 1.0, 2.0], [[-0.45, -0.22, -0.45], [-0.42, -0.24, -0.48], [-0.45, -0.22, -0.45]]),
      createQuatTrack('mixamorigRightForeArm', [0, 1.0, 2.0], [[-1.15, 0, 0], [-1.20, 0, 0], [-1.15, 0, 0]]),
      createQuatTrack('mixamorigLeftUpLeg', [0, 1.0, 2.0], [[-0.15, 0, -0.05], [-0.18, 0, -0.05], [-0.15, 0, -0.05]]),
      createQuatTrack('mixamorigLeftLeg', [0, 1.0, 2.0], [[0.28, 0, 0], [0.32, 0, 0], [0.28, 0, 0]]),
      createQuatTrack('mixamorigRightUpLeg', [0, 1.0, 2.0], [[-0.05, 0, 0.08], [-0.08, 0, 0.08], [-0.05, 0, 0.08]]),
      createQuatTrack('mixamorigRightLeg', [0, 1.0, 2.0], [[0.22, 0, 0], [0.26, 0, 0], [0.22, 0, 0]])
    ]),

    // 1. Kinetic Attack Strike (0.58s deliberate wind-up, impact & recovery)
    new THREE.AnimationClip('attack', 0.58, [
      createPosTrack('mixamorigHips', [0, 0.24, 0.58], [[0, 0, 0], [0, 0, 0.32], [0, 0, 0]]),
      createQuatTrack('mixamorigSpine2', [0, 0.24, 0.58], [[0, 0, 0], [0, 0.38, 0], [0, 0, 0]]),
      createQuatTrack('mixamorigRightArm', [0, 0.24, 0.58], [[0, 0, 0], [-1.45, 0, -0.2], [0, 0, 0]]),
      createQuatTrack('mixamorigRightForeArm', [0, 0.24, 0.58], [[0, 0, 0], [-0.15, 0, 0], [0, 0, 0]]),
      createQuatTrack('mixamorigLeftArm', [0, 0.24, 0.58], [[0, 0, 0], [0.5, 0, 0.4], [0, 0, 0]]),
      createQuatTrack('mixamorigLeftForeArm', [0, 0.24, 0.58], [[0, 0, 0], [-1.2, 0, 0], [0, 0, 0]])
    ]),

    // 2. Special-Power Cast (0.95s cosmic channeling & forward blast)
    new THREE.AnimationClip('special_cast', 0.95, [
      createPosTrack('mixamorigHips', [0, 0.42, 0.95], [[0, 0, 0], [0, 0.35, 0], [0, 0, 0]]),
      createQuatTrack('mixamorigSpine2', [0, 0.42, 0.95], [[0, 0, 0], [-0.25, 0, 0], [0, 0, 0]]),
      createQuatTrack('mixamorigHead', [0, 0.42, 0.95], [[0, 0, 0], [-0.35, 0, 0], [0, 0, 0]]),
      createQuatTrack('mixamorigLeftArm', [0, 0.42, 0.95], [[0, 0, 0], [-2.2, 0, 0.45], [0, 0, 0]]),
      createQuatTrack('mixamorigRightArm', [0, 0.42, 0.95], [[0, 0, 0], [-2.2, 0, -0.45], [0, 0, 0]])
    ]),

    // 3. Block or Shield (0.60s braced dual-arm defense)
    new THREE.AnimationClip('block', 0.60, [
      createQuatTrack('mixamorigSpine2', [0, 0.18, 0.60], [[0, 0, 0], [-0.15, 0, 0], [-0.15, 0, 0]]),
      createQuatTrack('mixamorigLeftArm', [0, 0.18, 0.60], [[0, 0, 0], [-0.85, 0, 0.45], [-0.85, 0, 0.45]]),
      createQuatTrack('mixamorigLeftForeArm', [0, 0.18, 0.60], [[0, 0, 0], [-1.55, 0, 0], [-1.55, 0, 0]]),
      createQuatTrack('mixamorigRightArm', [0, 0.18, 0.60], [[0, 0, 0], [-0.75, 0, -0.35], [-0.75, 0, -0.35]]),
      createQuatTrack('mixamorigRightForeArm', [0, 0.18, 0.60], [[0, 0, 0], [-1.45, 0, 0], [-1.45, 0, 0]])
    ]),

    // 4. Dodge Left (0.45s lateral evasion)
    new THREE.AnimationClip('dodge_left', 0.45, [
      createPosTrack('mixamorigHips', [0, 0.22, 0.45], [[0, 0, 0], [-0.45, -0.15, -0.2], [0, 0, 0]]),
      createQuatTrack('mixamorigSpine2', [0, 0.22, 0.45], [[0, 0, 0], [0, 0, -0.35], [0, 0, 0]]),
      createQuatTrack('mixamorigLeftArm', [0, 0.22, 0.45], [[0, 0, 0], [0.6, 0, 0], [0, 0, 0]]),
      createQuatTrack('mixamorigRightArm', [0, 0.22, 0.45], [[0, 0, 0], [0.6, 0, 0], [0, 0, 0]])
    ]),

    // 5. Dodge Right (0.45s lateral evasion)
    new THREE.AnimationClip('dodge_right', 0.45, [
      createPosTrack('mixamorigHips', [0, 0.22, 0.45], [[0, 0, 0], [0.45, -0.15, -0.2], [0, 0, 0]]),
      createQuatTrack('mixamorigSpine2', [0, 0.22, 0.45], [[0, 0, 0], [0, 0, 0.35], [0, 0, 0]]),
      createQuatTrack('mixamorigLeftArm', [0, 0.22, 0.45], [[0, 0, 0], [0.6, 0, 0], [0, 0, 0]]),
      createQuatTrack('mixamorigRightArm', [0, 0.22, 0.45], [[0, 0, 0], [0.6, 0, 0], [0, 0, 0]])
    ]),

    // 6. Jump and Land (0.65s)
    new THREE.AnimationClip('jump', 0.65, [
      createPosTrack('mixamorigHips', [0, 0.16, 0.38, 0.52, 0.65], [[0, 0, 0], [0, -0.15, 0], [0, 0.85, 0], [0, -0.1, 0], [0, 0, 0]]),
      createQuatTrack('mixamorigLeftLeg', [0, 0.16, 0.38, 0.52, 0.65], [[0, 0, 0], [0.4, 0, 0], [0.8, 0, 0], [0.3, 0, 0], [0, 0, 0]]),
      createQuatTrack('mixamorigRightLeg', [0, 0.16, 0.38, 0.52, 0.65], [[0, 0, 0], [0.4, 0, 0], [0.8, 0, 0], [0.3, 0, 0], [0, 0, 0]])
    ]),

    // 7. Hit Reaction (0.42s kinetic whiplash)
    new THREE.AnimationClip('hit_reaction', 0.42, [
      createPosTrack('mixamorigHips', [0, 0.18, 0.42], [[0, 0, 0], [0, 0, -0.3], [0, 0, 0]]),
      createQuatTrack('mixamorigSpine2', [0, 0.18, 0.42], [[0, 0, 0], [-0.42, 0, 0], [0, 0, 0]]),
      createQuatTrack('mixamorigHead', [0, 0.18, 0.42], [[0, 0, 0], [0.55, 0, 0], [0, 0, 0]])
    ]),

    // 8. Combat-Ready Stance (1.2s)
    new THREE.AnimationClip('combat_stance', 1.2, [
      createQuatTrack('mixamorigLeftArm', [0, 0.6, 1.2], [[-0.65, 0, 0.35], [-0.6, 0, 0.38], [-0.65, 0, 0.35]]),
      createQuatTrack('mixamorigLeftForeArm', [0, 0.6, 1.2], [[-1.2, 0, 0], [-1.25, 0, 0], [-1.2, 0, 0]]),
      createQuatTrack('mixamorigRightArm', [0, 0.6, 1.2], [[-0.45, 0, -0.25], [-0.5, 0, -0.28], [-0.45, 0, -0.25]]),
      createQuatTrack('mixamorigRightForeArm', [0, 0.6, 1.2], [[-0.95, 0, 0], [-1.0, 0, 0], [-0.95, 0, 0]])
    ]),

    // 9. Victory Pose (1.2s)
    new THREE.AnimationClip('victory', 1.2, [
      createQuatTrack('mixamorigRightArm', [0, 0.4, 1.2], [[0, 0, 0], [-2.7, 0, -0.2], [-2.7, 0, -0.2]]),
      createQuatTrack('mixamorigRightForeArm', [0, 0.4, 1.2], [[0, 0, 0], [0, 0, 0], [0, 0, 0]]),
      createQuatTrack('mixamorigLeftArm', [0, 0.4, 1.2], [[0, 0, 0], [0.35, 0, 0.35], [0.35, 0, 0.35]]),
      createQuatTrack('mixamorigSpine2', [0, 0.4, 1.2], [[0, 0, 0], [-0.15, 0, 0], [-0.15, 0, 0]]),
      createQuatTrack('mixamorigHead', [0, 0.4, 1.2], [[0, 0, 0], [0.15, 0, 0], [0.15, 0, 0]])
    ]),

    // 10. Defeat Pose (1.0s)
    new THREE.AnimationClip('defeat', 1.0, [
      createPosTrack('mixamorigHips', [0, 0.5, 1.0], [[0, 0, 0], [0, -0.45, 0], [0, -0.55, 0]]),
      createQuatTrack('mixamorigSpine2', [0, 0.5, 1.0], [[0, 0, 0], [0.55, 0, 0], [0.65, 0, 0]]),
      createQuatTrack('mixamorigHead', [0, 0.5, 1.0], [[0, 0, 0], [0.6, 0, 0], [0.7, 0, 0]]),
      createQuatTrack('mixamorigLeftArm', [0, 0.5, 1.0], [[0, 0, 0], [-0.2, 0, 0], [-0.2, 0, 0]]),
      createQuatTrack('mixamorigRightArm', [0, 0.5, 1.0], [[0, 0, 0], [0.6, 0, 0], [0.6, 0, 0]])
    ])
  ];
}

// ============================================================
// BUILD GENUINE RIGGED 3D MARVEL HERO / VILLAIN FIGHTER
// ============================================================
export function createArticulated3DFighter(character, isVillain = false) {
  const charId = character?.id;
  const config = isVillain
    ? (VILLAIN_CONFIGS[charId] || (charId === 'doctor-doom' ? VILLAIN_CONFIGS['doom-regent'] : VILLAIN_CONFIGS['void-titan']))
    : (HERO_CONFIGS[charId] || (charId === 'dr-strange' ? HERO_CONFIGS['arcane-sorcerer'] : HERO_CONFIGS['plasma-ranger']));

  const s = config.scale || 1.0;
  const group = new THREE.Group();
  group.name = `fighter-${config.id}`;

  // 1. Soft Realistic Contact Shadow on Arena Floor
  const shadowGeo = new THREE.CircleGeometry(0.85 * s, 32);
  const shadowMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.65 });
  const shadow = new THREE.Mesh(shadowGeo, shadowMat);
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.01;
  group.add(shadow);

  // 2. Holographic Ground Tactical Ring
  const footRingGeo = new THREE.RingGeometry(0.82 * s, 0.90 * s, 32);
  const footRingMat = new THREE.MeshBasicMaterial({
    color: config.glowColor,
    transparent: true,
    opacity: 0.75,
    side: THREE.DoubleSide
  });
  const footRing = new THREE.Mesh(footRingGeo, footRingMat);
  footRing.rotation.x = -Math.PI / 2;
  footRing.position.y = 0.02;
  group.add(footRing);

  // Special Arcane Technomancy Ground Rune Ring for DOOM REGENT
  let arcaneRuneRing = null;
  if (config.hasDoomMask || config.id === 'doom-regent' || config.id === 'doctor-doom') {
    const runeGeo = new THREE.RingGeometry(0.95 * s, 1.15 * s, 32);
    const runeMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide
    });
    arcaneRuneRing = new THREE.Mesh(runeGeo, runeMat);
    arcaneRuneRing.rotation.x = -Math.PI / 2;
    arcaneRuneRing.position.y = 0.025;
    group.add(arcaneRuneRing);
  }

  // 3. Fallback / Scanning Placeholder while async GLTF is mounting
  const scanHolo = createScanningHologram(config.glowColor, s);
  group.add(scanHolo);

  // 4. Rig Data Structure for External Render Loop & Kinetic Animation
  const rig = {
    group,
    config,
    mixer: null,
    actions: {},
    currentAction: null,
    currentActionName: 'idle',
    fadeToAction: null,
    model: null,
    isLoaded: false,
    loadFailed: false,
    arcaneRuneRing,
    bones: {},
    pelvisJoint: null,
    spineJoint: null,
    chestJoint: null,
    neckJoint: null,
    headJoint: null,
    leftShoulder: null,
    rightShoulder: null,
    leftElbow: null,
    rightElbow: null,
    leftWrist: null,
    rightWrist: null,
    leftLegJoint: null,
    rightLegJoint: null,
    leftKnee: null,
    rightKnee: null,
    capeMesh: null,
    hammerMesh: null,
    shieldMesh: null,
    infinityGauntlet: null,
    mandalas: []
  };

  // 5. Asynchronous GLTF Model Loading & Mixamo Rig Attachment
  const modelUrl = config.modelUrl || '/assets/models/xbot.glb';
  loadGLTFModel(modelUrl)
    .then((cachedGltf) => {
      group.remove(scanHolo);

      // Clone model with all skin weights & skeleton bones
      const clonedModel = SkeletonUtils.clone(cachedGltf.scene);

      if (config.isAuthenticGlb) {
        if (config.id === 'captain-america' || config.id === 'shield-sentinel') {
          // Remove rogue Thor hammer/weapon node embedded in raw sketchfab GLTF
          const rogueNodes = [];
          clonedModel.traverse((child) => {
            if (child.name && (child.name.toLowerCase().includes('thor') || child.name.toLowerCase().includes('wp02'))) {
              rogueNodes.push(child);
            }
            if (child.isMesh && (child.name.includes('WP001') || child.name.toLowerCase().includes('shield'))) {
              rig.shieldMesh = child;
            }
          });
          rogueNodes.forEach((node) => {
            if (node.parent) node.parent.remove(node);
          });
        }

        // Auto-normalize scale and grounding based on exact 3D geometry bounds
        clonedModel.updateMatrixWorld(true);
        const rawBox = new THREE.Box3().setFromObject(clonedModel);
        const rawSize = new THREE.Vector3();
        rawBox.getSize(rawSize);

        // Realistic heights in meters: Titans (Thanos) 2.15m, Bosses (Doctor Doom) 2.05m, Standard warriors 1.95m
        const isColossal = config.id === 'thanos' || config.id === 'mech-destroyer' || config.id === 'void-titan';
        const isBoss = isColossal || config.id === 'doom-regent' || config.id === 'doctor-doom';
        const targetHeightMeters = (isColossal ? 2.15 : (isBoss ? 2.05 : 1.95)) * (config.scale || 1.0);

        const modelHeight = rawSize.y > 0.001 ? rawSize.y : 1.0;
        const normScale = targetHeightMeters / modelHeight;

        // AUTHENTIC CHARACTER BODY PROPORTIONS
        if (config.id === 'thanos' || config.id === 'mech-destroyer' || config.id === 'void-titan') {
          // Thanos: Broad Titan build - 18% wider shoulder-span, 12% thicker chest, muscular wide stance
          clonedModel.scale.set(normScale * 1.18, normScale, normScale * 1.12);
        } else if (config.id === 'spiderman' || config.id === 'web-ninja') {
          // Spider-Man: Lean, nimble, athletic acrobat build - streamlined waist, lithe limbs
          clonedModel.scale.set(normScale * 0.96, normScale, normScale * 0.96);
        } else if (config.id === 'captain-america' || config.id === 'shield-sentinel') {
          // Captain America: Peak super soldier athletic V-taper build
          clonedModel.scale.set(normScale * 1.06, normScale, normScale * 1.04);
        } else {
          clonedModel.scale.set(normScale, normScale, normScale);
        }
        clonedModel.updateMatrixWorld(true);

        // Ground feet perfectly at arena floor (Y = 0) and center on X and Z
        const scaledBox = new THREE.Box3().setFromObject(clonedModel);
        const scaledCenter = new THREE.Vector3();
        scaledBox.getCenter(scaledCenter);

        clonedModel.position.set(
          -scaledCenter.x,
          -scaledBox.min.y,
          -scaledCenter.z
        );
      } else {
        clonedModel.scale.set(s, s, s);
        clonedModel.position.set(0, 0, 0);
      }

      // Record base positions and rotations for kinematic combat animations
      rig.baseModelPos = clonedModel.position.clone();
      rig.baseModelRot = clonedModel.rotation.clone();

      // Extract all Mixamo bones into rig and sanitize names for AnimationMixer binding
      const bones = {};
      clonedModel.traverse((node) => {
        if (node.isBone) {
          const rawName = node.name;
          const cleanName = rawName.replace(/:/g, '').replace(/_\d+$/, '');
          node.name = cleanName; // Sync node name so AnimationMixer tracks match!
          bones[cleanName] = node;
          bones[cleanName.toLowerCase()] = node;
          bones[cleanName.replace(/^mixamorig/i, '')] = node;
          bones[cleanName.replace(/^mixamorig/i, '').toLowerCase()] = node;
          bones[rawName] = node;
          bones[rawName.toLowerCase()] = node;
        }
      });
      rig.bones = bones;

      const getBone = (name) => {
        const clean = name.replace(/:/g, '').replace(/_\d+$/, '');
        return (
          bones[clean] ||
          bones['mixamorig' + clean] ||
          bones[clean.toLowerCase()] ||
          bones['mixamorig' + clean.toLowerCase()] ||
          bones['mixamorig:' + clean] ||
          null
        );
      };

      // Bone mappings
      rig.pelvisJoint = getBone('Hips') || clonedModel;
      rig.spineJoint = getBone('Spine1') || getBone('Spine') || rig.pelvisJoint;
      rig.chestJoint = getBone('Spine2') || rig.spineJoint;
      rig.neckJoint = getBone('Neck') || rig.chestJoint;
      rig.headJoint = getBone('Head') || rig.neckJoint;
      rig.leftShoulder = getBone('LeftShoulder') || rig.chestJoint;
      rig.rightShoulder = getBone('RightShoulder') || rig.chestJoint;
      rig.leftArm = getBone('LeftArm') || rig.leftShoulder;
      rig.rightArm = getBone('RightArm') || rig.rightShoulder;
      rig.leftElbow = getBone('LeftForeArm') || rig.leftArm;
      rig.rightElbow = getBone('RightForeArm') || rig.rightArm;
      rig.leftWrist = getBone('LeftHand') || rig.leftElbow;
      rig.rightWrist = getBone('RightHand') || rig.rightElbow;
      rig.leftLegJoint = getBone('LeftUpLeg') || rig.pelvisJoint;
      rig.rightLegJoint = getBone('RightUpLeg') || rig.pelvisJoint;
      rig.leftKnee = getBone('LeftLeg') || rig.leftLegJoint;
      rig.rightKnee = getBone('RightLeg') || rig.rightLegJoint;

      // Apply tailored dual-tone character PBR materials & enable dynamic shadows
      clonedModel.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          child.frustumCulled = false; // Disable frustum culling so characters never glitch or vanish
          if (child.material) {
            const mats = Array.isArray(child.material) ? child.material : [child.material];
            if (config.isAuthenticGlb) {
              mats.forEach((mat) => {
                const meshName = (child.name || '').toLowerCase();
                const isCloth = meshName.includes('cape') || meshName.includes('cloak') || meshName.includes('hood') || meshName.includes('cloth');
                mat.side = isCloth ? THREE.DoubleSide : THREE.FrontSide;
                if (mat.map) {
                  mat.map.colorSpace = THREE.SRGBColorSpace;
                  mat.map.anisotropy = 1;
                  mat.map.generateMipmaps = false;
                  mat.map.minFilter = THREE.LinearFilter;
                }
                if (config.id === 'thanos' || config.id === 'mech-destroyer' || config.id === 'void-titan') {
                  mat.metalness = 0.55;
                  mat.roughness = 0.35;
                  if (!mat.map) {
                    if (meshName.includes('head') || meshName.includes('skin') || meshName.includes('face')) {
                      mat.color.setHex(0x581c87); // Deep Titan Purple
                    } else if (meshName.includes('gauntlet') || meshName.includes('arm')) {
                      mat.color.setHex(0xd97706); // Golden Infinity Gauntlet
                    } else {
                      mat.color.setHex(0x3b0764); // Dark Titan Armor
                    }
                  }
                } else if (config.id === 'spiderman' || config.id === 'web-ninja') {
                  if (mat.map) {
                    mat.map.colorSpace = THREE.SRGBColorSpace;
                    mat.map.anisotropy = 1;
                    mat.map.generateMipmaps = false;
                    mat.map.minFilter = THREE.LinearFilter;
                  }
                  mat.metalness = 0.35;
                  mat.roughness = 0.40;
                } else if (mat.roughness !== undefined && mat.roughness > 0.6) {
                  mat.roughness = 0.38;
                }
                mat.needsUpdate = true;
              });
            } else {
              const mat = child.material.clone();
              const isAccentMesh = child.name.includes('.001');
              mat.color.setHex(isAccentMesh ? config.secondaryColor : config.primaryColor);
              mat.metalness = config.metalness !== undefined ? config.metalness : 0.9;
              mat.roughness = config.roughness !== undefined ? config.roughness : 0.2;
              child.material = mat;
            }
          }
        }
      });

      // 6. Setup AnimationMixer with GLTF clips & Synthesized Combat Suite
      const mixer = new THREE.AnimationMixer(clonedModel);
      rig.mixer = mixer;
      const actions = {};

      if (cachedGltf.animations && cachedGltf.animations.length > 0) {
        cachedGltf.animations.forEach((clip) => {
          // Strictly reject empty, 0-duration dummy tracks or camera calibrations
          if (!clip || clip.duration < 0.05 || !clip.tracks || clip.tracks.length < 5) return;
          const action = mixer.clipAction(clip);
          const lowerName = clip.name.toLowerCase();
          actions[lowerName] = action;
          if (lowerName.includes('idle') && !actions['idle']) {
            actions['idle'] = action;
          }
          if ((lowerName.includes('punch') || lowerName.includes('attack')) && !actions['attack']) {
            actions['attack'] = action;
          }
          if ((lowerName.includes('walk') || lowerName.includes('run')) && !actions['walk']) {
            actions['walk'] = action;
          }
        });
      }

      // Add synthesized clips if model possesses Mixamo-compatible bones
      if (bones['hips'] || bones['mixamorighips']) {
        const synthClips = buildSynthesizedMixamoClips(config?.id || '');
        synthClips.forEach((clip) => {
          const action = mixer.clipAction(clip);
          const cName = clip.name.toLowerCase();
          if (!actions[cName] || config?.id === 'spiderman' || config?.id === 'web-ninja') {
            actions[cName] = action;
          }
        });
      }
      if (!actions['idle']) actions['idle'] = actions['combat_stance'] || actions['attack'];
      if (!actions['combat_stance']) actions['combat_stance'] = actions['idle'];
      if (!actions['attack']) actions['attack'] = actions['idle'];
      if (!actions['dodge']) actions['dodge'] = actions['dodge_left'] || actions['idle'];
      if (!actions['special_cast']) actions['special_cast'] = actions['attack'];

      rig.actions = actions;

      rig.fadeToAction = function(actionName, duration = 0.25, loopOnce = false) {
        const targetAction = actions[actionName] || actions['idle'];
        if (!targetAction) return;

        if (rig.currentAction === targetAction && targetAction.isRunning()) return;

        const prevAction = rig.currentAction;
        rig.currentAction = targetAction;
        rig.currentActionName = actionName;

        if (loopOnce) {
          targetAction.reset();
          targetAction.setLoop(THREE.LoopOnce, 1);
          targetAction.clampWhenFinished = true;
        } else {
          targetAction.reset();
          targetAction.setLoop(THREE.LoopRepeat, Infinity);
        }

        targetAction.setEffectiveTimeScale(1);
        targetAction.setEffectiveWeight(1);

        if (prevAction && prevAction !== targetAction) {
          targetAction.crossFadeFrom(prevAction, duration, true);
        }
        targetAction.play();
      };

      mixer.addEventListener('finished', (e) => {
        if (rig.currentActionName !== 'idle' && rig.currentActionName !== 'combat_stance' && rig.currentActionName !== 'victory' && rig.currentActionName !== 'defeat') {
          rig.fadeToAction('idle', 0.28);
        }
      });

      rig.fadeToAction('idle', 0.1);

      // ============================================================
      // 7. ATTACH AUTHENTIC 3D MARVEL ARMOR & GEAR (ONLY FOR PROCEDURAL MANNEQUINS)
      // ============================================================
      if (!config.isAuthenticGlb) {
        const primaryMat = createPbrMaterial(config.primaryColor, config.metalness, config.roughness);
        const secondaryMat = createPbrMaterial(config.secondaryColor, 0.9, 0.18);
        const trimMat = createPbrMaterial(config.trimColor, 0.92, 0.18);
        const glowMat = new THREE.MeshBasicMaterial({ color: config.glowColor });

      // ------------------------------------------------------------
      // 1. IRON MAN (Mark 85 Nanotech Armor)
      // ------------------------------------------------------------
      if (config.hasIronManHelmet && rig.headJoint) {
        const imHelm = new THREE.Group();
        imHelm.name = 'iron-man-helmet';

        // Red Cranial Aerodynamic Shell
        const dome = new THREE.Mesh(new THREE.SphereGeometry(0.145, 14, 12), primaryMat);
        dome.position.set(0, 0.04, -0.01);
        imHelm.add(dome);

        // Golden Sculpted Titanium Faceplate with Cheekbones
        const goldFace = new THREE.Mesh(new THREE.BoxGeometry(0.19, 0.22, 0.08), secondaryMat);
        goldFace.position.set(0, 0.01, 0.10);
        imHelm.add(goldFace);

        // Tapered Jawline
        const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.08, 0.07), primaryMat);
        jaw.position.set(0, -0.07, 0.09);
        imHelm.add(jaw);

        // Glowing Cyan LED Eye Slits with Point Light
        const eyeL = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.015, 0.02), glowMat);
        eyeL.position.set(-0.045, 0.035, 0.142);
        imHelm.add(eyeL);

        const eyeR = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.015, 0.02), glowMat);
        eyeR.position.set(0.045, 0.035, 0.142);
        imHelm.add(eyeR);

        rig.headJoint.add(imHelm);
      }

      if (config.hasReactor && rig.chestJoint) {
        // Glowing Nanotech Arc Reactor (RT)
        const reactorGroup = new THREE.Group();
        const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.03, 16), secondaryMat);
        rim.rotation.x = Math.PI / 2;
        reactorGroup.add(rim);

        const core = new THREE.Mesh(new THREE.CircleGeometry(0.06, 16), glowMat);
        core.position.z = 0.018;
        reactorGroup.add(core);

        // Gold Pectoral Nanotech Armor Plates
        const pecL = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.14, 0.05), secondaryMat);
        pecL.position.set(-0.11, 0.10, 0.12);
        reactorGroup.add(pecL);

        const pecR = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.14, 0.05), secondaryMat);
        pecR.position.set(0.11, 0.10, 0.12);
        reactorGroup.add(pecR);

        // Gold Segmented Abdominal Armor Plates
        const abPlate = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.14, 0.04), secondaryMat);
        abPlate.position.set(0, -0.08, 0.10);
        reactorGroup.add(abPlate);

        reactorGroup.position.set(0, 0.10, 0.06);
        rig.chestJoint.add(reactorGroup);

        // Tiered Crimson Pauldrons on Shoulders
        if (rig.leftShoulder) {
          const pL = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.10, 0.16), primaryMat);
          pL.position.set(-0.08, 0.06, 0);
          rig.leftShoulder.add(pL);
        }
        if (rig.rightShoulder) {
          const pR = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.10, 0.16), primaryMat);
          pR.position.set(0.08, 0.06, 0);
          rig.rightShoulder.add(pR);
        }

        // Gold Thigh Armor Plates on Legs
        if (rig.leftLegJoint) {
          const thighL = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.24, 0.14), secondaryMat);
          thighL.position.set(0, -0.16, 0.02);
          rig.leftLegJoint.add(thighL);
        }
        if (rig.rightLegJoint) {
          const thighR = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.24, 0.14), secondaryMat);
          thighR.position.set(0, -0.16, 0.02);
          rig.rightLegJoint.add(thighR);
        }
      }

      if (config.hasRepulsors) {
        if (rig.leftWrist) {
          const repL = new THREE.Mesh(new THREE.CircleGeometry(0.038, 12), glowMat);
          repL.position.set(0, -0.06, 0.03);
          rig.leftWrist.add(repL);
        }
        if (rig.rightWrist) {
          const repR = new THREE.Mesh(new THREE.CircleGeometry(0.038, 12), glowMat);
          repR.position.set(0, -0.06, 0.03);
          rig.rightWrist.add(repR);
        }
      }

      // ------------------------------------------------------------
      // 2. THANOS (The Mad Titan & The Infinity Gauntlet)
      // ------------------------------------------------------------
      if (config.hasThanosChin && rig.headJoint) {
        const thanosHead = new THREE.Group();

        // Iconic Grooved Titan Chin Ridges
        const chin = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.10, 0.11), primaryMat);
        chin.position.set(0, -0.08, 0.08);
        for (let r = -2; r <= 2; r++) {
          const ridge = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.08, 0.02), trimMat);
          ridge.position.set(r * 0.025, 0, 0.055);
          chin.add(ridge);
        }
        thanosHead.add(chin);

        // Golden Warlord Battle Helmet
        const helm = new THREE.Mesh(new THREE.SphereGeometry(0.165, 14, 12, 0, Math.PI * 2, 0, Math.PI * 0.65), secondaryMat);
        helm.position.set(0, 0.06, 0);
        thanosHead.add(helm);

        // Menacing Glowing Eyes
        const eyeL = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.015, 0.02), glowMat);
        eyeL.position.set(-0.045, 0.03, 0.14);
        thanosHead.add(eyeL);

        const eyeR = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.015, 0.02), glowMat);
        eyeR.position.set(0.045, 0.03, 0.14);
        thanosHead.add(eyeR);

        rig.headJoint.add(thanosHead);
      }

      if (config.hasThanosArmor && rig.chestJoint) {
        const thanosCuirass = new THREE.Group();
        // Massive Golden Titan Chest Cuirass
        const chestPlate = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.28, 0.22), secondaryMat);
        chestPlate.position.set(0, 0.10, 0.05);
        thanosCuirass.add(chestPlate);

        // Dark Obsidian Center Inlay
        const centerInlay = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.24, 0.24), trimMat);
        centerInlay.position.set(0, 0.10, 0.05);
        thanosCuirass.add(centerInlay);

        // Golden Armored Belt / Tassets
        const belt = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.12, 0.20), secondaryMat);
        belt.position.set(0, -0.12, 0.04);
        thanosCuirass.add(belt);

        rig.chestJoint.add(thanosCuirass);

        // Heavy Golden Tiered Pauldrons
        if (rig.leftShoulder) {
          const pauldronL = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.14, 0.22), secondaryMat);
          pauldronL.position.set(-0.10, 0.08, 0);
          rig.leftShoulder.add(pauldronL);
        }
        if (rig.rightShoulder) {
          const pauldronR = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.14, 0.22), secondaryMat);
          pauldronR.position.set(0.10, 0.08, 0);
          rig.rightShoulder.add(pauldronR);
        }
      }

      if (config.hasInfinityGauntlet && rig.leftWrist) {
        const gauntGroup = new THREE.Group();
        gauntGroup.name = 'infinity-gauntlet';

        // Heavy Sculpted Golden Gauntlet
        const gBody = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.30, 0.18), secondaryMat);
        gBody.position.set(0, -0.08, 0.02);
        gauntGroup.add(gBody);

        // ALL 6 ICONIC INFINITY STONES WITH INTENSE EMISSION & LIGHTS
        const stones = [
          { color: 0xa855f7, name: 'Power', pos: [-0.07, 0.05, 0.115] },   // Purple
          { color: 0x38bdf8, name: 'Space', pos: [-0.025, 0.06, 0.115] },  // Blue
          { color: 0xef4444, name: 'Reality', pos: [0.025, 0.06, 0.115] }, // Red
          { color: 0xf97316, name: 'Soul', pos: [0.07, 0.05, 0.115] },     // Orange
          { color: 0x10b981, name: 'Time', pos: [-0.09, -0.02, 0.10] },    // Green (Thumb)
          { color: 0xfacc15, name: 'Mind', pos: [0.0, -0.02, 0.118] }      // Giant Yellow (Center)
        ];

        stones.forEach((st) => {
          const isMind = st.name === 'Mind';
          const gemGeo = new THREE.SphereGeometry(isMind ? 0.036 : 0.025, 12, 12);
          const gemMat = new THREE.MeshBasicMaterial({ color: st.color });
          const gemMesh = new THREE.Mesh(gemGeo, gemMat);
          gemMesh.position.set(...st.pos);
          gauntGroup.add(gemMesh);
        });

        rig.leftWrist.add(gauntGroup);
        rig.infinityGauntlet = gauntGroup;
      }

      if (config.hasWarlordSword && rig.rightWrist) {
        // Double-Bladed Warlord Sword
        const swordGroup = new THREE.Group();
        const bladeGeo = new THREE.BoxGeometry(0.09, 1.5, 0.02);
        const blade = new THREE.Mesh(bladeGeo, trimMat);
        blade.position.set(0, 0, 0.05);
        swordGroup.add(blade);

        const hilt = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.35, 8), secondaryMat);
        swordGroup.add(hilt);

        rig.rightWrist.add(swordGroup);
      }

      // ------------------------------------------------------------
      // 3. DOOM REGENT / DOCTOR DOOM (The Iron Sovereign)
      // ------------------------------------------------------------
      if (config.hasDoomMask && rig.headJoint) {
        const doomGroup = new THREE.Group();
        const silverChromeMat = new THREE.MeshStandardMaterial({
          color: 0xd1d5db,
          metalness: 0.98,
          roughness: 0.12
        });
        const emeraldVelvetMat = new THREE.MeshStandardMaterial({
          color: 0x064e3b,
          roughness: 0.88,
          metalness: 0.08,
          side: THREE.DoubleSide
        });

        // Curved Metallic Silver Face Mask
        const faceGeo = new THREE.CylinderGeometry(0.12, 0.11, 0.22, 16, 1, false, -Math.PI * 0.42, Math.PI * 0.84);
        const faceMesh = new THREE.Mesh(faceGeo, silverChromeMat);
        faceMesh.position.set(0, 0.02, 0.09);
        doomGroup.add(faceMesh);

        // Defined Dark Eye Slits with Glowing Emerald Pupils Behind Mask
        const eyeL = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.016, 0.04), new THREE.MeshBasicMaterial({ color: 0x022c22 }));
        eyeL.position.set(-0.045, 0.045, 0.17);
        const pupilL = new THREE.Mesh(new THREE.SphereGeometry(0.012, 8, 8), new THREE.MeshBasicMaterial({ color: 0x10b981 }));
        pupilL.position.set(-0.045, 0.045, 0.18);
        doomGroup.add(eyeL);
        doomGroup.add(pupilL);

        const eyeR = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.016, 0.04), new THREE.MeshBasicMaterial({ color: 0x022c22 }));
        eyeR.position.set(0.045, 0.045, 0.17);
        const pupilR = new THREE.Mesh(new THREE.SphereGeometry(0.012, 8, 8), new THREE.MeshBasicMaterial({ color: 0x10b981 }));
        pupilR.position.set(0.045, 0.045, 0.18);
        doomGroup.add(eyeR);
        doomGroup.add(pupilR);

        // Deep Green Velvet Hood
        const hoodDome = new THREE.Mesh(
          new THREE.SphereGeometry(0.165, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.65),
          emeraldVelvetMat
        );
        hoodDome.position.set(0, 0.07, -0.01);
        doomGroup.add(hoodDome);

        rig.headJoint.add(doomGroup);
      }

      if (config.hasGreenHoodAndCloak && rig.chestJoint) {
        const cloakGroup = new THREE.Group();
        const goldMedallionMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.92, roughness: 0.18 });
        const emeraldVelvetMat = new THREE.MeshStandardMaterial({ color: 0x064e3b, roughness: 0.88, side: THREE.DoubleSide });

        // Dual Circular Gold Sovereign Clasps with green gems
        const claspL = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.02, 16), goldMedallionMat);
        claspL.rotation.x = Math.PI / 2;
        claspL.position.set(-0.16, 0.18, 0.14);
        cloakGroup.add(claspL);

        const claspR = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.02, 16), goldMedallionMat);
        claspR.rotation.x = Math.PI / 2;
        claspR.position.set(0.16, 0.18, 0.14);
        cloakGroup.add(claspR);

        // Gold Sovereign Connecting Chain
        const chainGeo = new THREE.CylinderGeometry(0.01, 0.01, 0.32, 8);
        const chainMesh = new THREE.Mesh(chainGeo, goldMedallionMat);
        chainMesh.rotation.z = Math.PI / 2;
        chainMesh.position.set(0, 0.18, 0.15);
        cloakGroup.add(chainMesh);

        // Long Flowing Emerald Velvet Cloak
        const cloakGeo = new THREE.PlaneGeometry(0.85, 1.45, 8, 12);
        const cloakMesh = new THREE.Mesh(cloakGeo, emeraldVelvetMat);
        cloakMesh.position.set(0, -0.62, -0.16);
        cloakMesh.rotation.x = 0.07;
        cloakGroup.add(cloakMesh);
        rig.capeMesh = cloakMesh;

        rig.chestJoint.add(cloakGroup);

        // Tiered Silver Pauldrons on Shoulders
        const silverPauldronsMat = new THREE.MeshStandardMaterial({ color: 0xd1d5db, metalness: 0.98, roughness: 0.12 });
        if (rig.leftShoulder) {
          const pL = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.12, 0.18), silverPauldronsMat);
          pL.position.set(-0.09, 0.07, 0);
          rig.leftShoulder.add(pL);
        }
        if (rig.rightShoulder) {
          const pR = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.12, 0.18), silverPauldronsMat);
          pR.position.set(0.09, 0.07, 0);
          rig.rightShoulder.add(pR);
        }
      }

      if (config.hasTechnomancyGauntlets) {
        const technomancyMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
        if (rig.leftWrist) {
          const orbL = new THREE.Mesh(new THREE.SphereGeometry(0.035, 10, 10), technomancyMat);
          orbL.position.set(0, -0.06, 0.03);
          rig.leftWrist.add(orbL);
        }
        if (rig.rightWrist) {
          const orbR = new THREE.Mesh(new THREE.SphereGeometry(0.035, 10, 10), technomancyMat);
          orbR.position.set(0, -0.06, 0.03);
          rig.rightWrist.add(orbR);
        }
      }

      // ------------------------------------------------------------
      // 4. THOR (Winged Helmet & Mjolnir)
      // ------------------------------------------------------------
      if (config.hasWingedHelmet && rig.headJoint) {
        const thorHelm = new THREE.Group();
        const helmBase = new THREE.Mesh(new THREE.SphereGeometry(0.155, 14, 12, 0, Math.PI * 2, 0, Math.PI * 0.6), secondaryMat);
        thorHelm.add(helmBase);

        // Silver Eagle Wings
        const wingGeo = new THREE.ConeGeometry(0.055, 0.32, 4);
        const wingL = new THREE.Mesh(wingGeo, secondaryMat);
        wingL.position.set(-0.18, 0.12, 0); wingL.rotation.z = 0.65;
        const wingR = new THREE.Mesh(wingGeo, secondaryMat);
        wingR.position.set(0.18, 0.12, 0); wingR.rotation.z = -0.65;
        thorHelm.add(wingL);
        thorHelm.add(wingR);

        // Lightning Blue Eyes
        const stormEyes = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
        const eL = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.012, 0.02), stormEyes);
        eL.position.set(-0.04, 0.03, 0.14);
        const eR = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.012, 0.02), stormEyes);
        eR.position.set(0.04, 0.03, 0.14);
        thorHelm.add(eL);
        thorHelm.add(eR);

        rig.headJoint.add(thorHelm);
      }

      if (config.hasCape && rig.chestJoint) {
        const roundelsGroup = new THREE.Group();
        // 6 Circular Polished Silver Chest Roundels with Gold Rims
        const rMat = secondaryMat;
        const roundelGeo = new THREE.CylinderGeometry(0.048, 0.048, 0.02, 16);
        const roundelCoords = [
          [-0.10, 0.16, 0.13], [0.10, 0.16, 0.13],
          [-0.10, 0.06, 0.13], [0.10, 0.06, 0.13],
          [-0.09, -0.04, 0.12], [0.09, -0.04, 0.12]
        ];
        roundelCoords.forEach(([x, y, z]) => {
          const rMesh = new THREE.Mesh(roundelGeo, rMat);
          rMesh.rotation.x = Math.PI / 2;
          rMesh.position.set(x, y, z);
          roundelsGroup.add(rMesh);
        });

        // Crimson Asgardian Cape
        const capeMat = new THREE.MeshStandardMaterial({
          color: config.capeColor || 0x991b1b,
          roughness: 0.85,
          side: THREE.DoubleSide
        });
        const capeGeo = new THREE.PlaneGeometry(0.85, 1.45, 8, 12);
        const capeMesh = new THREE.Mesh(capeGeo, capeMat);
        capeMesh.position.set(0, -0.65, -0.16);
        capeMesh.rotation.x = 0.08;
        roundelsGroup.add(capeMesh);
        rig.capeMesh = capeMesh;

        rig.chestJoint.add(roundelsGroup);
      }

      if (config.hasMjolnir && rig.rightWrist) {
        const hGroup = new THREE.Group();
        const hHead = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.17, 0.15), secondaryMat);
        const hHandle = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.44, 10), trimMat);
        hHandle.position.y = -0.22;
        hGroup.add(hHead);
        hGroup.add(hHandle);

        hGroup.position.set(0, -0.1, 0.05);
        rig.rightWrist.add(hGroup);
        rig.hammerMesh = hGroup;
      }

      // ------------------------------------------------------------
      // 5. CAPTAIN AMERICA (Vibranium Shield & Combat Helmet)
      // ------------------------------------------------------------
      if (config.hasCapShield && rig.leftElbow) {
        const sGroup = new THREE.Group();
        // Outer Crimson Ring
        const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 0.04, 28), createPbrMaterial(0xb91c1c, 0.9, 0.18));
        disc.rotation.x = Math.PI / 2;
        sGroup.add(disc);

        // Silver Ring
        const silverRing = new THREE.Mesh(new THREE.RingGeometry(0.26, 0.35, 28), createPbrMaterial(0xe2e8f0, 0.92, 0.15));
        silverRing.position.z = 0.025;
        sGroup.add(silverRing);

        // Inner Crimson Ring
        const innerCrimson = new THREE.Mesh(new THREE.RingGeometry(0.16, 0.26, 28), createPbrMaterial(0xb91c1c, 0.9, 0.18));
        innerCrimson.position.z = 0.026;
        sGroup.add(innerCrimson);

        // Center Blue Disc
        const blueDisc = new THREE.Mesh(new THREE.CircleGeometry(0.16, 28), createPbrMaterial(0x1d4ed8, 0.88, 0.2));
        blueDisc.position.z = 0.027;
        sGroup.add(blueDisc);

        // Gleaming Silver 5-Pointed Star
        const centerStar = new THREE.Mesh(new THREE.CircleGeometry(0.09, 5), createPbrMaterial(0xffffff, 0.95, 0.1));
        centerStar.position.z = 0.03;
        sGroup.add(centerStar);

        sGroup.position.set(-0.12, -0.16, 0.12);
        rig.leftElbow.add(sGroup);
        rig.shieldMesh = sGroup;
      }

      if (config.hasStarHarness && rig.chestJoint) {
        const harness = new THREE.Group();
        // Silver 5-pointed star on chest
        const starGeo = new THREE.CircleGeometry(0.085, 5);
        const starMesh = new THREE.Mesh(starGeo, createPbrMaterial(0xffffff, 0.92, 0.12));
        starMesh.position.set(0, 0.14, 0.135);
        harness.add(starMesh);

        // Red and white vertical combat stripes across abdomen
        const stripesGroup = new THREE.Group();
        for (let s = -2; s <= 2; s++) {
          const isRed = Math.abs(s) % 2 === 0;
          const stripe = new THREE.Mesh(
            new THREE.BoxGeometry(0.032, 0.18, 0.04),
            createPbrMaterial(isRed ? 0xb91c1c : 0xf8fafc, 0.8, 0.25)
          );
          stripe.position.set(s * 0.038, -0.04, 0.12);
          stripesGroup.add(stripe);
        }
        harness.add(stripesGroup);

        rig.chestJoint.add(harness);
      }

      if (config.hasCapHelmet && rig.headJoint) {
        const cHelm = new THREE.Mesh(new THREE.SphereGeometry(0.155, 14, 12, 0, Math.PI * 2, 0, Math.PI * 0.6), primaryMat);
        const starA = new THREE.Mesh(new THREE.CircleGeometry(0.035, 5), trimMat);
        starA.position.set(0, 0.07, 0.14);
        cHelm.add(starA);
        rig.headJoint.add(cHelm);
      }

      // ------------------------------------------------------------
      // 6. SPIDER-MAN (Web Mask & Wrist Webshooters)
      // ------------------------------------------------------------
      if (config.hasSpiderMask && rig.headJoint) {
        const spideyLenses = new THREE.Group();
        const lensGeo = new THREE.BoxGeometry(0.08, 0.05, 0.02);
        const whiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

        const lensL = new THREE.Mesh(lensGeo, whiteMat);
        lensL.position.set(-0.065, 0.02, 0.145);
        lensL.rotation.z = -0.2;
        spideyLenses.add(lensL);

        const lensR = new THREE.Mesh(lensGeo, whiteMat);
        lensR.position.set(0.065, 0.02, 0.145);
        lensR.rotation.z = 0.2;
        spideyLenses.add(lensR);

        rig.headJoint.add(spideyLenses);
      }

      if (config.hasSpiderEmblem && rig.chestJoint) {
        const spiderEmblem = new THREE.Group();
        // Bold Black Spider Chest Emblem
        const sBody = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.09, 0.02), trimMat);
        sBody.position.set(0, 0.12, 0.135);
        spiderEmblem.add(sBody);

        for (let leg = 0; leg < 4; leg++) {
          const lGeo = new THREE.BoxGeometry(0.08, 0.015, 0.01);
          const lL = new THREE.Mesh(lGeo, trimMat);
          lL.position.set(-0.05, 0.15 - leg * 0.025, 0.135);
          lL.rotation.z = 0.25 - leg * 0.15;
          spiderEmblem.add(lL);

          const lR = new THREE.Mesh(lGeo, trimMat);
          lR.position.set(0.05, 0.15 - leg * 0.025, 0.135);
          lR.rotation.z = -0.25 + leg * 0.15;
          spiderEmblem.add(lR);
        }

        rig.chestJoint.add(spiderEmblem);
      }

      if (config.hasWebshooters) {
        const webMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff });
        if (rig.leftWrist) {
          const wL = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.03, 8), webMat);
          wL.position.set(0, -0.05, 0.04);
          rig.leftWrist.add(wL);
        }
        if (rig.rightWrist) {
          const wR = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.03, 8), webMat);
          wR.position.set(0, -0.05, 0.04);
          rig.rightWrist.add(wR);
        }
      }

      // ------------------------------------------------------------
      // 7. DOCTOR STRANGE (Cloak of Levitation & Eye of Agamotto)
      // ------------------------------------------------------------
      if (config.hasEyeOfAgamotto && rig.chestJoint) {
        const eyeAmulet = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.03, 16), trimMat);
        eyeAmulet.rotation.x = Math.PI / 2;
        eyeAmulet.position.set(0, 0.18, 0.14);
        const eyeGem = new THREE.Mesh(new THREE.SphereGeometry(0.035, 10, 10), new THREE.MeshBasicMaterial({ color: 0x10b981 }));
        eyeGem.position.set(0, 0.18, 0.16);
        rig.chestJoint.add(eyeAmulet);
        rig.chestJoint.add(eyeGem);
      }

      if (config.hasLevitationCloak && rig.chestJoint) {
        const cloakGroup = new THREE.Group();
        const capeMat = new THREE.MeshStandardMaterial({ color: 0x881337, roughness: 0.82, side: THREE.DoubleSide });

        // High Dramatic Standing Collar
        const collarGeo = new THREE.CylinderGeometry(0.18, 0.22, 0.22, 16, 1, true, -Math.PI * 0.7, Math.PI * 1.4);
        const collar = new THREE.Mesh(collarGeo, capeMat);
        collar.position.set(0, 0.22, -0.06);
        cloakGroup.add(collar);

        // Flowing Cape Tails
        const capeGeo = new THREE.PlaneGeometry(0.85, 1.4, 8, 12);
        const capeMesh = new THREE.Mesh(capeGeo, capeMat);
        capeMesh.position.set(0, -0.60, -0.16);
        capeMesh.rotation.x = 0.08;
        cloakGroup.add(capeMesh);
        rig.capeMesh = capeMesh;

        rig.chestJoint.add(cloakGroup);
      }

      if (config.hasMandalas) {
        const mGeo = new THREE.RingGeometry(0.18, 0.24, 16);
        const mMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b, side: THREE.DoubleSide });
        if (rig.leftWrist) {
          const mL = new THREE.Mesh(mGeo, mMat);
          rig.leftWrist.add(mL);
          rig.mandalas.push(mL);
        }
        if (rig.rightWrist) {
          const mR = new THREE.Mesh(mGeo, mMat);
          rig.rightWrist.add(mR);
          rig.mandalas.push(mR);
        }
      }

      // ------------------------------------------------------------
      // 8. LOKI (Iconic Towering Golden Horns)
      // ------------------------------------------------------------
      if (config.hasLokiHorns && rig.headJoint) {
        const hornsGroup = new THREE.Group();
        const hornGeo = new THREE.CylinderGeometry(0.015, 0.045, 0.46, 10);

        const hornL = new THREE.Mesh(hornGeo, secondaryMat);
        hornL.position.set(-0.14, 0.28, 0.08);
        hornL.rotation.set(-0.35, 0, -0.42);
        hornsGroup.add(hornL);

        const hornR = new THREE.Mesh(hornGeo, secondaryMat);
        hornR.position.set(0.14, 0.28, 0.08);
        hornR.rotation.set(-0.35, 0, 0.42);
        hornsGroup.add(hornR);

        rig.headJoint.add(hornsGroup);
      }

      if (config.hasDualDaggers) {
        const daggerMat = new THREE.MeshBasicMaterial({ color: 0x84cc16 });
        if (rig.leftWrist) {
          const dagL = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.38, 0.01), daggerMat);
          dagL.position.set(0, -0.15, 0.06);
          rig.leftWrist.add(dagL);
        }
        if (rig.rightWrist) {
          const dagR = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.38, 0.01), daggerMat);
          dagR.position.set(0, -0.15, 0.06);
          rig.rightWrist.add(dagR);
        }
      }

      // ------------------------------------------------------------
      // 9. GREEN GOBLIN (Demonic Goblin Mask & Glider)
      // ------------------------------------------------------------
      if (config.hasGoblinMask && rig.headJoint) {
        const gobGroup = new THREE.Group();
        const helm = new THREE.Mesh(new THREE.SphereGeometry(0.16, 14, 12), primaryMat);
        gobGroup.add(helm);

        // Pointed Goblin Ears
        const earGeo = new THREE.ConeGeometry(0.04, 0.16, 6);
        const earL = new THREE.Mesh(earGeo, primaryMat);
        earL.position.set(-0.16, 0.06, -0.02);
        earL.rotation.z = 1.1;
        gobGroup.add(earL);

        const earR = new THREE.Mesh(earGeo, primaryMat);
        earR.position.set(0.16, 0.06, -0.02);
        earR.rotation.z = -1.1;
        gobGroup.add(earR);

        // Menacing Yellow/Orange Glowing Eyes
        const eyeMat = new THREE.MeshBasicMaterial({ color: 0xfacc15 });
        const eL = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.02, 0.02), eyeMat);
        eL.position.set(-0.045, 0.035, 0.145);
        gobGroup.add(eL);

        const eR = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.02, 0.02), eyeMat);
        eR.position.set(0.045, 0.035, 0.145);
        gobGroup.add(eR);

        rig.headJoint.add(gobGroup);
      }

      if (config.hasGlider) {
        const glider = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.12, 0.55), trimMat);
        glider.position.set(0, 0.06, 0);
        group.add(glider);
      }

      if (config.hasPumpkinBomb && rig.rightWrist) {
        const bomb = new THREE.Mesh(new THREE.SphereGeometry(0.07, 12, 12), new THREE.MeshBasicMaterial({ color: 0xf97316 }));
        bomb.position.set(0, -0.12, 0.06);
        rig.rightWrist.add(bomb);
      }

      // ------------------------------------------------------------
      // 10. VOID OVERLORD / VOID TITAN
      // ------------------------------------------------------------
        if (config.hasVoidCore && rig.chestJoint) {
          const vCore = new THREE.Mesh(new THREE.SphereGeometry(0.08, 16, 16), new THREE.MeshBasicMaterial({ color: 0xa855f7 }));
          vCore.position.set(0, 0.12, 0.14);
          rig.chestJoint.add(vCore);
        }
      }

      // 8. GUARANTEE AUTHENTIC WEAPONS & GEAR FOR CAPTAIN AMERICA, THANOS & SPIDER-MAN
      // A. CAPTAIN AMERICA: Indestructible Vibranium Kinetic Shield (Only for procedural mannequins - authentic GLB already has authentic Civil War shield!)
      if ((config.hasCapShield || config.id === 'captain-america' || config.id === 'shield-sentinel') && !rig.shieldMesh && !config.isAuthenticGlb) {
        const shieldParent = rig.leftElbow || rig.leftForeArm || rig.leftWrist || clonedModel;
        const sGroup = new THREE.Group();
        sGroup.name = 'vibranium-shield';
        const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 0.04, 28), createPbrMaterial(0xb91c1c, 0.92, 0.16));
        disc.rotation.x = Math.PI / 2;
        sGroup.add(disc);

        const silverRing = new THREE.Mesh(new THREE.RingGeometry(0.26, 0.35, 28), createPbrMaterial(0xe2e8f0, 0.95, 0.12));
        silverRing.position.z = 0.025;
        sGroup.add(silverRing);

        const innerCrimson = new THREE.Mesh(new THREE.RingGeometry(0.16, 0.26, 28), createPbrMaterial(0xb91c1c, 0.92, 0.16));
        innerCrimson.position.z = 0.026;
        sGroup.add(innerCrimson);

        const blueDisc = new THREE.Mesh(new THREE.CircleGeometry(0.16, 28), createPbrMaterial(0x1d4ed8, 0.9, 0.18));
        blueDisc.position.z = 0.027;
        sGroup.add(blueDisc);

        const centerStar = new THREE.Mesh(new THREE.CircleGeometry(0.09, 5), createPbrMaterial(0xffffff, 0.96, 0.08));
        centerStar.position.z = 0.03;
        sGroup.add(centerStar);

        // Position shield facing outwards on Captain America's forearm
        sGroup.position.set(-0.06, -0.12, 0.14);
        sGroup.rotation.set(0.1, 0.3, -0.2);
        shieldParent.add(sGroup);
        rig.shieldMesh = sGroup;
      }

      // B. THANOS: All 6 Cosmic Infinity Stones & Golden Infinity Gauntlet
      if (config.hasInfinityGauntlet || config.id === 'thanos' || config.id === 'mech-destroyer') {
        let stonesFound = 0;
        const stoneColors = {
          orange: 0xf97316, // Soul Stone
          red: 0xef4444,    // Reality Stone
          blue: 0x38bdf8,   // Space Stone
          purple: 0xa855f7, // Power Stone
          green: 0x10b981,  // Time Stone
          yellow: 0xfacc15  // Mind Stone
        };

        clonedModel.traverse((child) => {
          if (child.isMesh && child.name) {
            const lower = child.name.toLowerCase();
            for (const [sKey, sColor] of Object.entries(stoneColors)) {
              if (lower.includes(`stone_${sKey}`) || lower.includes(`stone_${sKey.substring(0, 3)}`)) {
                child.material = new THREE.MeshBasicMaterial({ color: sColor });
                stonesFound++;
              }
            }
          }
        });

        // Fallback: If stone meshes weren't directly embedded in this GLB clone, attach glowing gauntlet on left wrist
        if (stonesFound === 0 && rig.leftWrist && !config.isAuthenticGlb) {
          const gauntGroup = new THREE.Group();
          gauntGroup.name = 'infinity-gauntlet';
          const gauntMat = createPbrMaterial(0xd97706, 0.94, 0.16);
          const gBody = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.32, 0.20), gauntMat);
          gBody.position.set(0, -0.08, 0.02);
          gauntGroup.add(gBody);

          const stones = [
            { color: 0xa855f7, pos: [-0.07, 0.05, 0.12] },  // Power (Purple)
            { color: 0x38bdf8, pos: [-0.025, 0.06, 0.12] }, // Space (Blue)
            { color: 0xef4444, pos: [0.025, 0.06, 0.12] },  // Reality (Red)
            { color: 0xf97316, pos: [0.07, 0.05, 0.12] },   // Soul (Orange)
            { color: 0x10b981, pos: [-0.09, -0.02, 0.11] }, // Time (Green)
            { color: 0xfacc15, pos: [0.0, -0.02, 0.125], isMind: true } // Mind (Yellow)
          ];
          stones.forEach((st) => {
            const gem = new THREE.Mesh(
              new THREE.SphereGeometry(st.isMind ? 0.038 : 0.026, 12, 12),
              new THREE.MeshBasicMaterial({ color: st.color })
            );
            gem.position.set(...st.pos);
            gauntGroup.add(gem);
          });
          rig.leftWrist.add(gauntGroup);
          rig.infinityGauntlet = gauntGroup;
        }
      }

      // C. SPIDER-MAN: High-Tensile Dual Web-Shooters (Only for procedural mannequins - authentic GLB has built-in web-shooters)
      if ((config.hasWebshooters || config.id === 'spiderman' || config.id === 'web-ninja') && !config.isAuthenticGlb && rig.leftWrist && rig.rightWrist) {
        const webShootMat = createPbrMaterial(0x0f172a, 0.85, 0.2);
        const nozzleMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff });

        [rig.leftWrist, rig.rightWrist].forEach((wrist) => {
          const cuff = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.07, 0.06, 12), webShootMat);
          const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.03, 8), nozzleMat);
          nozzle.position.set(0, -0.03, 0.065);
          nozzle.rotation.x = Math.PI / 2;
          cuff.add(nozzle);
          wrist.add(cuff);
        });
      }

      // Mount cloned rigged model to root group
      group.add(clonedModel);
      rig.model = clonedModel;
      rig.isLoaded = true;
      if (typeof rig.onLoaded === 'function') {
        rig.onLoaded();
      }
    })
    .catch((err) => {
      group.remove(scanHolo);
      rig.loadFailed = true;
      const errorMesh = createAssetLoadingErrorMesh(modelUrl, err?.message);
      group.add(errorMesh);
    });

  return rig;
}

// ============================================================
// FULL COMBAT KINEMATIC SKELETAL ANIMATIONS (60 FPS FLUIDITY & TRANSITIONS)
// ============================================================
export function animateArticulated3DFighter(rig, state, time, delta, elapsed, isHero, activeGesture, comboIndex = 0) {
  if (!rig) return;

  // 1. Continuous Skeletal AnimationMixer Update
  if (rig.mixer) {
    rig.mixer.update(delta);
  }

  // 2. Dispatch Smooth State Cross-Fading through AnimationMixer ONLY ON STATE TRANSITION
  if (rig.fadeToAction && rig.lastAnimationState !== state) {
    rig.lastAnimationState = state;
    if (state === 'idle') {
      rig.fadeToAction('idle', 0.25);
    } else if (state === 'punch' || state === 'attack') {
      rig.fadeToAction('attack', 0.12, true);
    } else if (state === 'palm' || state === 'block') {
      rig.fadeToAction('block', 0.15);
    } else if (state === 'point') {
      rig.fadeToAction('attack', 0.15);
    } else if (state === 'forward') {
      rig.fadeToAction('attack', 0.12, true);
    } else if (state === 'ultimate' || state === 'special_cast') {
      rig.fadeToAction('special_cast', 0.2, true);
    } else if (state === 'dodge') {
      rig.fadeToAction('dodge_left', 0.12, true);
    } else if (state === 'staggered' || state === 'hit_reaction') {
      rig.fadeToAction('hit_reaction', 0.1, true);
    } else if (state === 'victory') {
      rig.fadeToAction('victory', 0.3);
    } else if (state === 'defeat') {
      rig.fadeToAction('defeat', 0.3, true);
    }
  }

  // 3. Dynamic Procedural Kinematics for realistic respiration, lunges, defensive bracing & flinching
  if (rig.model && rig.baseModelPos) {
    const bPos = rig.baseModelPos;
    const bRot = rig.baseModelRot || new THREE.Euler(0, 0, 0);
    const charId = rig.config?.id || rig.config?.marvelId || (isHero ? 'hero' : 'villain');

    const isIronMan = charId === 'ironman' || charId === 'plasma-ranger';
    const isThor = charId === 'thor' || charId === 'storm-guardian';
    const isSpidey = charId === 'spiderman' || charId === 'web-ninja';
    const isCap = charId === 'captain-america' || charId === 'shield-sentinel';
    const isStrange = charId === 'doctor-strange' || charId === 'arcane-sorcerer' || charId === 'dr-strange';

    const isThanos = charId === 'thanos' || charId === 'mech-destroyer';
    const isDoom = charId === 'doctor-doom' || charId === 'doom-regent';
    const isGoblin = charId === 'green-goblin';
    const isLoki = charId === 'loki' || charId === 'shadow-assassin';
    const isMag = charId === 'magneto';

    if (state === 'idle') {
      // Smooth breathing respiration and weight shift tailored per character
      if (isIronMan) {
        // High-tech hovering respiration
        const hoverRespir = Math.sin(elapsed * 3.6) * 0.018;
        rig.model.position.y = bPos.y + hoverRespir;
        rig.model.rotation.x = bRot.x + 0.03;
      } else if (isStrange) {
        // Mystical floating weightlessness
        const mysticFloat = Math.sin(elapsed * 2.0) * 0.025;
        rig.model.position.y = bPos.y + mysticFloat;
        rig.model.rotation.y = bRot.y + Math.sin(elapsed * 1.5) * 0.02;
      } else if (isGoblin) {
        // Supersonic razor glider engine rumble
        rig.model.position.y = bPos.y + Math.sin(elapsed * 3.2) * 0.02;
        rig.model.rotation.z = bRot.z + Math.sin(elapsed * 2.2) * 0.04;
      } else if (isMag) {
        // Magnetic levitation drift
        rig.model.position.y = bPos.y + Math.sin(elapsed * 2.4) * 0.022;
        rig.model.rotation.y = bRot.y + Math.cos(elapsed * 1.6) * 0.02;
      } else if (isThanos) {
        // Imposing Mad Titan stance (left arm forward with Infinity Gauntlet)
        const titanBreath = Math.sin(elapsed * 2.0) * 0.012;
        rig.model.position.y = bPos.y + titanBreath;
        rig.model.rotation.y = bRot.y - 0.08;
      } else if (isDoom) {
        // Monarch of Latveria regal upright posture
        const doomBreath = Math.sin(elapsed * 2.2) * 0.012;
        rig.model.position.y = bPos.y + doomBreath;
        rig.model.rotation.x = bRot.x - 0.05;
      } else {
        const breath = Math.sin(elapsed * 2.6 + (isHero ? 0 : 1.4)) * 0.016;
        const sway = Math.cos(elapsed * 1.5 + (isHero ? 0 : 0.7)) * 0.012;
        rig.model.position.y = bPos.y + breath;
        rig.model.position.x = bPos.x + sway * 0.4;
        rig.model.rotation.y = bRot.y + sway * 0.7;
      }
    } else if (state === 'punch' || state === 'attack') {
      const cStep = comboIndex || 0;
      // Smooth, deliberate combat animation progress (cinematic, fluid fighting)
      const attackProgress = Math.sin(Math.min(1.0, (time || 0) * 0.78) * Math.PI);

      if (isIronMan) {
        // Iron Man Palm Repulsor Thrust & Dive-Bomb
        rig.model.position.z = bPos.z + attackProgress * 0.24;
        rig.model.rotation.x = bRot.x + attackProgress * 0.22;
        rig.model.rotation.y = bRot.y + 0.28 * attackProgress;
      } else if (isThor) {
        // Thor Heavy Mjolnir Uppercut & Hammer Throw
        rig.model.position.z = bPos.z + attackProgress * 0.26;
        rig.model.position.y = bPos.y + (cStep === 2 ? attackProgress * 0.38 : 0);
        rig.model.rotation.y = bRot.y + (cStep === 1 ? -0.45 : 0.45) * attackProgress;
        rig.model.rotation.x = bRot.x - (cStep === 2 ? 0.35 : 0.15) * attackProgress;
      } else if (isCap) {
        // Captain America Shield Bash & Ricochet Toss
        rig.model.position.z = bPos.z + attackProgress * 0.24;
        rig.model.rotation.y = bRot.y + 0.32 * attackProgress;
        rig.model.rotation.x = bRot.x - (cStep === 2 ? 0.38 : 0.08) * attackProgress;
      } else if (isStrange) {
        // Doctor Strange Tao Mandala Wave
        rig.model.position.y = bPos.y + attackProgress * 0.14;
        rig.model.rotation.y = bRot.y + attackProgress * 0.22;
        rig.model.rotation.z = bRot.z - attackProgress * 0.08;
      } else if (isThanos) {
        // Thanos Infinity Gauntlet Power Slam
        rig.model.position.z = bPos.z + attackProgress * 0.34;
        rig.model.rotation.y = bRot.y - attackProgress * 0.42;
        rig.model.rotation.x = bRot.x + attackProgress * 0.28;
      } else if (isDoom) {
        // Doctor Doom Technomancy Siphon Command
        rig.model.position.z = bPos.z + attackProgress * 0.16;
        rig.model.rotation.y = bRot.y - attackProgress * 0.26;
        rig.model.rotation.x = bRot.x - 0.06;
      } else if (isGoblin) {
        // Green Goblin Pumpkin Bomb Throw
        rig.model.position.z = bPos.z + attackProgress * 0.30;
        rig.model.rotation.x = bRot.x + attackProgress * 0.38;
      } else if (isLoki) {
        // Loki Dual Asgardian Dagger Cross-Slash
        rig.model.position.z = bPos.z + attackProgress * 0.32;
        rig.model.rotation.y = bRot.y - attackProgress * 0.55;
      } else if (isMag) {
        // Magneto Electromagnetic Railgun Command
        rig.model.position.y = bPos.y + attackProgress * 0.20;
        rig.model.rotation.x = bRot.x - attackProgress * 0.15;
      } else {
        if (cStep === 2) {
          rig.model.position.z = bPos.z + attackProgress * 0.28;
          rig.model.position.y = bPos.y + Math.sin(Math.min(1.0, (time || 0) * 0.8) * Math.PI) * 0.45;
          rig.model.rotation.x = bRot.x - attackProgress * 0.45;
          rig.model.rotation.y = bRot.y + (isHero ? 0.35 : -0.35) * attackProgress;
        } else if (cStep === 1) {
          rig.model.position.z = bPos.z + attackProgress * 0.20;
          rig.model.position.y = bPos.y - attackProgress * 0.05;
          rig.model.rotation.y = bRot.y + (isHero ? 0.38 : -0.38) * attackProgress;
          rig.model.rotation.z = bRot.z + (isHero ? 0.12 : -0.12) * attackProgress;
        } else {
          rig.model.position.z = bPos.z + attackProgress * 0.16;
          rig.model.position.y = bPos.y - attackProgress * 0.02;
          rig.model.rotation.y = bRot.y + (isHero ? 0.22 : -0.22) * attackProgress;
        }
      }
    } else if (state === 'palm' || state === 'block') {
      // Defensive guard crouch
      rig.model.position.y = bPos.y - 0.035;
      rig.model.rotation.x = bRot.x + 0.08;
    } else if (state === 'ultimate' || state === 'special_cast') {
      // Floating cataclysm elevation
      const hover = Math.sin(elapsed * 2.8) * 0.06 + 0.10;
      rig.model.position.y = bPos.y + hover;
      rig.model.rotation.y = bRot.y + Math.sin(elapsed * 3.5) * 0.06;
    } else if (state === 'staggered' || state === 'hit_reaction') {
      // Authentic arcade hit recoil with smooth, cinematic impact curve
      const snap = Math.sin(Math.min(1.0, (time || 0) * 1.5) * Math.PI);
      const shake = Math.sin(elapsed * 14) * 0.025 * snap;
      rig.model.position.x = bPos.x + shake;
      rig.model.position.z = bPos.z - snap * 0.16;
      rig.model.position.y = bPos.y - snap * 0.03;
      rig.model.rotation.z = bRot.z + (isHero ? -0.12 : 0.12) * snap;
      rig.model.rotation.x = bRot.x - 0.11 * snap;
    }
  }

  // 4. Continuous Flowing Cloth Simulation on Cloaks/Capes
  if (rig.capeMesh) {
    rig.capeMesh.rotation.x = 0.07 + Math.sin(elapsed * 2.8 + (isHero ? 0 : 1.2)) * 0.06;
    rig.capeMesh.rotation.y = Math.cos(elapsed * 2.2) * 0.03;
  }

  // 5. Rotating Technomancy Ground Rune for DOOM REGENT
  if (rig.arcaneRuneRing) {
    rig.arcaneRuneRing.rotation.z += delta * 0.85;
  }

  // 6. Rotating Mystic Mandalas for Arcane Sorcerer
  if (rig.mandalas && rig.mandalas.length > 0) {
    rig.mandalas.forEach((m) => {
      m.rotation.z += delta * 4.5;
    });
  }
}
