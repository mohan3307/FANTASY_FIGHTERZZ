import * as THREE from 'three';

// ============================================================
// CHARACTER SPECIFICATIONS, COLOR PALETTES & TEXTURES
// ============================================================
export const HERO_CONFIGS = {
  ironman: {
    id: 'ironman',
    name: 'IRON MAN',
    imagePath: '/assets/fighter_hero_ironman.png',
    primaryColor: 0xb91c1c, // Crimson Red Metallic
    secondaryColor: 0xeab308, // Gold Metallic
    glowColor: 0x00f3ff, // Cyan Arc Glow
    accentColor: '#00f3ff',
    metalness: 0.88,
    roughness: 0.22,
    scale: 1.04,
    hasReactor: true,
    hasRepulsors: true,
    hasHelmet: 'ironman'
  },
  spiderman: {
    id: 'spiderman',
    name: 'SPIDER-MAN',
    imagePath: '/assets/fighter_hero_spiderman.png',
    primaryColor: 0xdc2626, // Crimson Web Red
    secondaryColor: 0x1e3a8a, // Deep Navy Blue
    glowColor: 0x38bdf8,
    accentColor: '#ff2a5f',
    metalness: 0.35,
    roughness: 0.45,
    scale: 1.0,
    hasWebshooters: true,
    hasHelmet: 'spiderman'
  },
  thor: {
    id: 'thor',
    name: 'THOR',
    imagePath: '/assets/fighter_hero_thor.png',
    primaryColor: 0x334155, // Asgardian Dark Steel
    secondaryColor: 0x94a3b8, // Silver Armor Discs
    glowColor: 0x38bdf8, // Thunder Electric Blue
    accentColor: '#00f3ff',
    metalness: 0.82,
    roughness: 0.25,
    scale: 1.08,
    hasCape: true,
    capeColor: 0x991b1b, // Crimson Cape
    hasHammer: true,
    hasHelmet: 'thor'
  },
  'captain-america': {
    id: 'captain-america',
    name: 'CAPTAIN AMERICA',
    imagePath: '/assets/fighter_hero_captain_america.png',
    primaryColor: 0x1d4ed8, // Tactical Blue
    secondaryColor: 0xb91c1c, // Red Ab Stripes
    accentColor: '#fbbf24',
    glowColor: 0x38bdf8,
    metalness: 0.5,
    roughness: 0.35,
    scale: 1.04,
    hasShield: true,
    hasHelmet: 'captain-america'
  },
  'doctor-strange': {
    id: 'doctor-strange',
    name: 'DOCTOR STRANGE',
    imagePath: '/assets/fighter_hero_dr_strange.png',
    primaryColor: 0x1e293b, // Mystic Midnight Blue
    secondaryColor: 0x0f766e, // Teal Sash
    glowColor: 0xf59e0b, // Eldritch Orange Flame
    accentColor: '#a855f7',
    metalness: 0.3,
    roughness: 0.55,
    scale: 1.04,
    hasCloak: true,
    capeColor: 0x881337, // Crimson Cloak of Levitation
    hasEyeOfAgamotto: true,
    hasMandalas: true,
    hasHelmet: 'doctor-strange'
  }
};

export const VILLAIN_CONFIGS = {
  'void-titan': {
    id: 'void-titan',
    name: 'VOID TITAN',
    imagePath: '/assets/villain_thanos.jpg',
    primaryColor: 0x0f172a, // Obsidian Cyber-Steel
    secondaryColor: 0x334155, // Dark Titanium Armor Plates
    glowColor: 0xa855f7, // Volatile Violet Dark-Matter Core
    accentColor: '#8b5cf6',
    metalness: 0.92,
    roughness: 0.18,
    scale: 1.34, // Massive Colossus Bulk
    hasVoidCore: true,
    hasGauntlet: true,
    hasVoidCracks: true,
    hasHelmet: 'void-titan'
  },
  'green-goblin': {
    id: 'green-goblin',
    name: 'GREEN GOBLIN',
    imagePath: '/assets/fighter_villain_green_goblin.png',
    primaryColor: 0x16a34a, // Emerald Armor
    secondaryColor: 0x7c3aed, // Royal Purple Hood & Tunic
    glowColor: 0xf97316, // Pumpkin Orange Flame
    accentColor: '#22c55e',
    metalness: 0.75,
    roughness: 0.28,
    scale: 1.08,
    hasGlider: true,
    hasPumpkin: true,
    hasHelmet: 'green-goblin'
  },
  thanos: {
    id: 'thanos',
    name: 'THANOS',
    imagePath: '/assets/fighter_villain_thanos.png',
    primaryColor: 0x6b21a8, // Titan Purple Skin
    secondaryColor: 0xd97706, // Golden Titan Armor
    glowColor: 0xd946ef, // Cosmic Power Purple
    accentColor: '#d946ef',
    metalness: 0.85,
    roughness: 0.25,
    scale: 1.28, // Massive Titan Bulk
    hasGauntlet: true,
    hasHelmet: 'thanos'
  },
  magneto: {
    id: 'magneto',
    name: 'MAGNETO',
    imagePath: '/assets/fighter_villain_magneto.png',
    primaryColor: 0x991b1b, // Deep Crimson Armor
    secondaryColor: 0x4c1d95, // Purple Trim
    glowColor: 0xef4444, // Magnetic Red
    accentColor: '#ef4444',
    metalness: 0.72,
    roughness: 0.28,
    scale: 1.06,
    hasCape: true,
    capeColor: 0x3b0764, // Imperial Purple Cape
    hasMagneticOrbs: true,
    hasHelmet: 'magneto'
  },
  'doctor-doom': {
    id: 'doctor-doom',
    name: 'DOCTOR DOOM',
    imagePath: '/assets/fighter_villain_doctor_doom.png',
    primaryColor: 0x94a3b8, // Titanium Silver Armor
    secondaryColor: 0x064e3b, // Dark Emerald Green Tunic
    glowColor: 0x10b981, // Latverian Sorcery Green
    accentColor: '#10b981',
    metalness: 0.92,
    roughness: 0.18,
    scale: 1.06,
    hasCloak: true,
    capeColor: 0x064e3b,
    hasDoomMask: true,
    hasHelmet: 'doctor-doom'
  },
  loki: {
    id: 'loki',
    name: 'LOKI',
    imagePath: '/assets/fighter_villain_loki.png',
    primaryColor: 0x047857, // Asgardian Emerald Green
    secondaryColor: 0xd97706, // Gilded Gold Armor
    glowColor: 0x84cc16, // Mischief Lime Green
    accentColor: '#84cc16',
    metalness: 0.82,
    roughness: 0.24,
    scale: 1.05,
    hasCape: true,
    capeColor: 0x022c22,
    hasScepter: true,
    hasHelmet: 'loki'
  }
};

const textureLoader = new THREE.TextureLoader();

// Helper to create shared PBR materials
function createPbrMat(color, metalness = 0.7, roughness = 0.3, emissive = 0x000000) {
  return new THREE.MeshStandardMaterial({
    color,
    metalness,
    roughness,
    emissive,
    emissiveIntensity: emissive !== 0x000000 ? 0.35 : 0
  });
}

// ============================================================
// BUILD TRUE 3D HUMANOID SKELETON FIGHTER
// ============================================================
export function createArticulated3DFighter(character, isVillain = false) {
  const charId = character?.id;
  const config = isVillain
    ? (VILLAIN_CONFIGS[charId] || VILLAIN_CONFIGS['thanos'])
    : (HERO_CONFIGS[charId] || (charId === 'dr-strange' ? HERO_CONFIGS['doctor-strange'] : HERO_CONFIGS['spiderman']));

  const s = config.scale || 1.0;
  const group = new THREE.Group();

  // Load character high-res artwork texture for embossed chest/face detailing
  const charTexture = textureLoader.load(config.imagePath);
  charTexture.colorSpace = THREE.SRGBColorSpace;
  charTexture.minFilter = THREE.LinearFilter;
  charTexture.magFilter = THREE.LinearFilter;

  // Materials
  const primaryMat = createPbrMat(config.primaryColor, config.metalness, config.roughness);
  const secondaryMat = createPbrMat(config.secondaryColor, 0.85, 0.22);
  const darkJointMat = createPbrMat(0x0f172a, 0.4, 0.5);
  const glowMat = new THREE.MeshBasicMaterial({ color: config.glowColor });

  // 1. Soft Ground Contact Shadow
  const shadowGeo = new THREE.CircleGeometry(1.1 * s, 32);
  const shadowMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.8 });
  const shadow = new THREE.Mesh(shadowGeo, shadowMat);
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.02;
  group.add(shadow);

  // 2. Tactical Ground Glow Ring
  const footRingGeo = new THREE.RingGeometry(1.05 * s, 1.18 * s, 32);
  const footRingMat = new THREE.MeshBasicMaterial({
    color: config.glowColor,
    transparent: true,
    opacity: 0.75,
    side: THREE.DoubleSide
  });
  const footRing = new THREE.Mesh(footRingGeo, footRingMat);
  footRing.rotation.x = -Math.PI / 2;
  footRing.position.y = 0.03;
  group.add(footRing);

  // 3. SKELETON ROOT JOINT (Ground y = 0)
  const rootJoint = new THREE.Group();
  group.add(rootJoint);

  // 4. PELVIS / WAIST JOINT (y = 1.85 * s)
  const pelvisJoint = new THREE.Group();
  pelvisJoint.position.y = 1.85 * s;
  rootJoint.add(pelvisJoint);

  // 3D Pelvis Geometry
  const pelvisGeo = new THREE.CylinderGeometry(0.36 * s, 0.3 * s, 0.32 * s, 16);
  const pelvisMesh = new THREE.Mesh(pelvisGeo, secondaryMat);
  pelvisJoint.add(pelvisMesh);

  // Utility Belt with Metallic Buckle
  const beltGeo = new THREE.CylinderGeometry(0.38 * s, 0.38 * s, 0.1 * s, 16);
  const beltMesh = new THREE.Mesh(beltGeo, primaryMat);
  beltMesh.position.y = 0.1 * s;
  pelvisJoint.add(beltMesh);

  const buckleGeo = new THREE.BoxGeometry(0.14 * s, 0.12 * s, 0.08 * s);
  const buckleMesh = new THREE.Mesh(buckleGeo, secondaryMat);
  buckleMesh.position.set(0, 0.1 * s, 0.38 * s);
  pelvisJoint.add(buckleMesh);

  // --- 5. 3D LOWER LIMBS (LEGS, KNEES, SHINS, BOOTS) ---
  const leftLegJoint = new THREE.Group();
  leftLegJoint.position.set(-0.24 * s, -0.15 * s, 0);
  pelvisJoint.add(leftLegJoint);

  const rightLegJoint = new THREE.Group();
  rightLegJoint.position.set(0.24 * s, -0.15 * s, 0);
  pelvisJoint.add(rightLegJoint);

  // Helper to construct a fully articulated 3D muscular leg
  function buildLeg(parentJoint, isLeft) {
    // Upper Thigh
    const thighGeo = new THREE.CylinderGeometry(0.18 * s, 0.14 * s, 0.65 * s, 14);
    const thighMesh = new THREE.Mesh(thighGeo, primaryMat);
    thighMesh.position.y = -0.32 * s;
    parentJoint.add(thighMesh);

    // Thigh side armor plate
    const sidePlateGeo = new THREE.BoxGeometry(0.06 * s, 0.45 * s, 0.16 * s);
    const sidePlate = new THREE.Mesh(sidePlateGeo, secondaryMat);
    sidePlate.position.set(isLeft ? -0.16 * s : 0.16 * s, -0.32 * s, 0);
    parentJoint.add(sidePlate);

    // Knee Joint
    const kneeJoint = new THREE.Group();
    kneeJoint.position.y = -0.65 * s;
    parentJoint.add(kneeJoint);

    const kneeCapGeo = new THREE.BoxGeometry(0.14 * s, 0.16 * s, 0.12 * s);
    const kneeCap = new THREE.Mesh(kneeCapGeo, secondaryMat);
    kneeCap.position.z = 0.1 * s;
    kneeJoint.add(kneeCap);

    // Shin / Calf
    const shinGeo = new THREE.CylinderGeometry(0.13 * s, 0.11 * s, 0.65 * s, 14);
    const shinMesh = new THREE.Mesh(shinGeo, primaryMat);
    shinMesh.position.y = -0.35 * s;
    kneeJoint.add(shinMesh);

    // Armored Combat Boot
    const bootGeo = new THREE.BoxGeometry(0.18 * s, 0.22 * s, 0.38 * s);
    const bootMesh = new THREE.Mesh(bootGeo, secondaryMat);
    bootMesh.position.set(0, -0.72 * s, 0.08 * s);
    kneeJoint.add(bootMesh);

    return { kneeJoint, bootMesh };
  }

  const leftLegParts = buildLeg(leftLegJoint, true);
  const rightLegParts = buildLeg(rightLegJoint, false);

  // Default martial stance: slight hip flare & knee bends
  leftLegJoint.rotation.x = 0.08;
  leftLegJoint.rotation.z = 0.04;
  rightLegJoint.rotation.x = -0.06;
  rightLegJoint.rotation.z = -0.04;

  // --- 6. 3D SPINE & ABDOMINAL CORE (y = 0.25 * s above pelvis) ---
  const spineJoint = new THREE.Group();
  spineJoint.position.y = 0.22 * s;
  pelvisJoint.add(spineJoint);

  // Segmented 6-Pack Abdominal Armor
  const absGeo = new THREE.CylinderGeometry(0.38 * s, 0.34 * s, 0.42 * s, 16);
  const absMesh = new THREE.Mesh(absGeo, primaryMat);
  absMesh.position.y = 0.2 * s;
  spineJoint.add(absMesh);

  // --- 7. 3D CHEST & UPPER TORSO (y = 0.45 * s above spine) ---
  const chestJoint = new THREE.Group();
  chestJoint.position.y = 0.45 * s;
  spineJoint.add(chestJoint);

  // Volumetric 3D Sculpted Pectoral Chest Hull
  const chestGeo = new THREE.BoxGeometry(0.95 * s, 0.62 * s, 0.48 * s);
  const chestMesh = new THREE.Mesh(chestGeo, primaryMat);
  chestMesh.position.y = 0.28 * s;
  chestJoint.add(chestMesh);

  // Left & Right 3D Pectoral Muscle Plates
  const pecGeo = new THREE.BoxGeometry(0.38 * s, 0.28 * s, 0.1 * s);
  const leftPec = new THREE.Mesh(pecGeo, secondaryMat);
  leftPec.position.set(-0.22 * s, 0.34 * s, 0.26 * s);
  chestJoint.add(leftPec);

  const rightPec = new THREE.Mesh(pecGeo, secondaryMat);
  rightPec.position.set(0.22 * s, 0.34 * s, 0.26 * s);
  chestJoint.add(rightPec);

  // High-Resolution Character Artwork Plate (Embossed on chest for 100% Marvel likeness)
  const decalGeo = new THREE.PlaneGeometry(0.72 * s, 0.52 * s);
  const decalMat = new THREE.MeshStandardMaterial({
    map: charTexture,
    transparent: true,
    alphaTest: 0.15,
    metalness: 0.6,
    roughness: 0.3,
    side: THREE.DoubleSide
  });
  const decalMesh = new THREE.Mesh(decalGeo, decalMat);
  decalMesh.position.set(0, 0.28 * s, 0.29 * s);
  chestJoint.add(decalMesh);

  // Iron Man Arc Reactor Protrusion
  if (config.hasReactor) {
    const reactorGroup = new THREE.Group();
    const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.12 * s, 0.12 * s, 0.05 * s, 16), secondaryMat);
    rim.rotation.x = Math.PI / 2;
    reactorGroup.add(rim);

    const core = new THREE.Mesh(new THREE.CircleGeometry(0.09 * s, 16), glowMat);
    core.position.z = 0.03 * s;
    reactorGroup.add(core);

    reactorGroup.position.set(0, 0.32 * s, 0.32 * s);
    chestJoint.add(reactorGroup);
  }

  // Doctor Strange Eye of Agamotto Amulet
  if (config.hasEyeOfAgamotto) {
    const eyeAmulet = new THREE.Mesh(new THREE.CylinderGeometry(0.11 * s, 0.11 * s, 0.04 * s, 16), secondaryMat);
    eyeAmulet.rotation.x = Math.PI / 2;
    eyeAmulet.position.set(0, 0.52 * s, 0.28 * s);
    chestJoint.add(eyeAmulet);

    const eyeGem = new THREE.Mesh(new THREE.SphereGeometry(0.05 * s, 10, 10), new THREE.MeshBasicMaterial({ color: 0x22c55e }));
    eyeGem.position.set(0, 0.52 * s, 0.31 * s);
    chestJoint.add(eyeGem);
  }

  // VOID TITAN Volatile Dark-Matter Core & Energy Cracks
  if (config.hasVoidCore) {
    const voidCoreGroup = new THREE.Group();
    const coreRim = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18 * s, 0.18 * s, 0.06 * s, 18),
      createPbrMat(0x1e1b4b, 0.9, 0.2)
    );
    coreRim.rotation.x = Math.PI / 2;
    voidCoreGroup.add(coreRim);

    const coreSphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.12 * s, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xa855f7 })
    );
    coreSphere.position.z = 0.03 * s;
    voidCoreGroup.add(coreSphere);

    const coreLight = new THREE.PointLight(0xa855f7, 2.8, 4.0 * s);
    coreLight.position.set(0, 0, 0.2 * s);
    voidCoreGroup.add(coreLight);

    voidCoreGroup.position.set(0, 0.32 * s, 0.32 * s);
    chestJoint.add(voidCoreGroup);
  }

  // --- 8. 3D NECK & SCULPTED HEAD / HELMET ---
  const neckJoint = new THREE.Group();
  neckJoint.position.set(0, 0.62 * s, 0);
  chestJoint.add(neckJoint);

  const neckGeo = new THREE.CylinderGeometry(0.14 * s, 0.16 * s, 0.16 * s, 12);
  const neckMesh = new THREE.Mesh(neckGeo, darkJointMat);
  neckMesh.position.y = 0.06 * s;
  neckJoint.add(neckMesh);

  const headJoint = new THREE.Group();
  headJoint.position.y = 0.22 * s;
  neckJoint.add(headJoint);

  // Sculpted 3D Head Base
  const headGeo = new THREE.BoxGeometry(0.38 * s, 0.44 * s, 0.4 * s);
  const headMesh = new THREE.Mesh(headGeo, primaryMat);
  headJoint.add(headMesh);

  // Distinct 3D Helmet / Visor / Eyes
  if (config.hasHelmet === 'ironman') {
    // Gold Faceplate
    const faceplateGeo = new THREE.BoxGeometry(0.32 * s, 0.36 * s, 0.08 * s);
    const faceplate = new THREE.Mesh(faceplateGeo, secondaryMat);
    faceplate.position.set(0, -0.02 * s, 0.21 * s);
    headJoint.add(faceplate);

    // Glowing Cyan Eye Slits
    const eyeGeo = new THREE.BoxGeometry(0.09 * s, 0.03 * s, 0.02 * s);
    const leftEye = new THREE.Mesh(eyeGeo, glowMat);
    leftEye.position.set(-0.08 * s, 0.04 * s, 0.26 * s);
    headJoint.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeo, glowMat);
    rightEye.position.set(0.08 * s, 0.04 * s, 0.26 * s);
    headJoint.add(rightEye);
  } else if (config.hasHelmet === 'spiderman') {
    // Angular White Spider Eyes with Black Rim
    const eyeShape = new THREE.BoxGeometry(0.11 * s, 0.07 * s, 0.02 * s);
    const whiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const leftEye = new THREE.Mesh(eyeShape, whiteMat);
    leftEye.position.set(-0.09 * s, 0.03 * s, 0.21 * s);
    leftEye.rotation.z = -0.22;
    headJoint.add(leftEye);

    const rightEye = new THREE.Mesh(eyeShape, whiteMat);
    rightEye.position.set(0.09 * s, 0.03 * s, 0.21 * s);
    rightEye.rotation.z = 0.22;
    headJoint.add(rightEye);
  } else if (config.hasHelmet === 'thor') {
    // Winged Crests
    const wingGeo = new THREE.ConeGeometry(0.08 * s, 0.35 * s, 4);
    const wingL = new THREE.Mesh(wingGeo, secondaryMat);
    wingL.position.set(-0.24 * s, 0.16 * s, 0);
    wingL.rotation.z = 0.6;
    headJoint.add(wingL);

    const wingR = new THREE.Mesh(wingGeo, secondaryMat);
    wingR.position.set(0.24 * s, 0.16 * s, 0);
    wingR.rotation.z = -0.6;
    headJoint.add(wingR);

    // Glowing Lightning Eyes
    const eyeGeo = new THREE.SphereGeometry(0.03 * s, 8, 8);
    const eyeL = new THREE.Mesh(eyeGeo, glowMat);
    eyeL.position.set(-0.08 * s, 0.03 * s, 0.21 * s);
    headJoint.add(eyeL);
    const eyeR = new THREE.Mesh(eyeGeo, glowMat);
    eyeR.position.set(0.08 * s, 0.03 * s, 0.21 * s);
    headJoint.add(eyeR);
  } else if (config.hasHelmet === 'captain-america') {
    // Tactical 'A' Combat Helmet
    const starGeo = new THREE.CircleGeometry(0.06 * s, 5);
    const starMesh = new THREE.Mesh(starGeo, new THREE.MeshBasicMaterial({ color: 0xffffff }));
    starMesh.position.set(0, 0.12 * s, 0.21 * s);
    headJoint.add(starMesh);

    // Chiseled Jawline
    const jawGeo = new THREE.BoxGeometry(0.26 * s, 0.14 * s, 0.18 * s);
    const jawMesh = new THREE.Mesh(jawGeo, createPbrMat(0xe2b49a, 0.1, 0.6));
    jawMesh.position.set(0, -0.16 * s, 0.14 * s);
    headJoint.add(jawMesh);
  } else if (config.hasHelmet === 'thanos') {
    // Massive Titan Helmet & Ridged Chin
    const helmRim = new THREE.Mesh(new THREE.BoxGeometry(0.46 * s, 0.18 * s, 0.44 * s), secondaryMat);
    helmRim.position.y = 0.18 * s;
    headJoint.add(helmRim);

    // Chiseled Titan Jaw
    const chinGeo = new THREE.BoxGeometry(0.36 * s, 0.18 * s, 0.3 * s);
    const chin = new THREE.Mesh(chinGeo, primaryMat);
    chin.position.set(0, -0.22 * s, 0.14 * s);
    headJoint.add(chin);

    // Glowing Purple Cosmic Eyes
    const eyeGeo = new THREE.SphereGeometry(0.04 * s, 8, 8);
    const eyeL = new THREE.Mesh(eyeGeo, glowMat);
    eyeL.position.set(-0.1 * s, 0.02 * s, 0.22 * s);
    headJoint.add(eyeL);
    const eyeR = new THREE.Mesh(eyeGeo, glowMat);
    eyeR.position.set(0.1 * s, 0.02 * s, 0.22 * s);
    headJoint.add(eyeR);
  } else if (config.hasHelmet === 'green-goblin') {
    // Sinister Pointed Goblin Ears
    const earGeo = new THREE.ConeGeometry(0.08 * s, 0.32 * s, 4);
    const earL = new THREE.Mesh(earGeo, primaryMat);
    earL.position.set(-0.26 * s, 0.05 * s, -0.05 * s);
    earL.rotation.z = 1.2;
    headJoint.add(earL);

    const earR = new THREE.Mesh(earGeo, primaryMat);
    earR.position.set(0.26 * s, 0.05 * s, -0.05 * s);
    earR.rotation.z = -1.2;
    headJoint.add(earR);

    // Glowing Golden Demonic Eyes
    const eyeGeo = new THREE.SphereGeometry(0.04 * s, 8, 8);
    const eyeL = new THREE.Mesh(eyeGeo, glowMat);
    eyeL.position.set(-0.09 * s, 0.03 * s, 0.21 * s);
    headJoint.add(eyeL);
    const eyeR = new THREE.Mesh(eyeGeo, glowMat);
    eyeR.position.set(0.09 * s, 0.03 * s, 0.21 * s);
    headJoint.add(eyeR);
  } else if (config.hasHelmet === 'doctor-doom') {
    // Riveted Titanium Iron Mask
    const maskGeo = new THREE.BoxGeometry(0.34 * s, 0.38 * s, 0.06 * s);
    const maskMesh = new THREE.Mesh(maskGeo, secondaryMat);
    maskMesh.position.set(0, -0.02 * s, 0.21 * s);
    headJoint.add(maskMesh);

    // Dark Menacing Slits
    const slitGeo = new THREE.BoxGeometry(0.08 * s, 0.03 * s, 0.02 * s);
    const slitMat = new THREE.MeshBasicMaterial({ color: 0x050505 });
    const slitL = new THREE.Mesh(slitGeo, slitMat);
    slitL.position.set(-0.08 * s, 0.04 * s, 0.25 * s);
    headJoint.add(slitL);
    const slitR = new THREE.Mesh(slitGeo, slitMat);
    slitR.position.set(0.08 * s, 0.04 * s, 0.25 * s);
    headJoint.add(slitR);
  } else if (config.hasHelmet === 'loki') {
    // Golden Horned Crown
    const hornGeo = new THREE.CylinderGeometry(0.03 * s, 0.07 * s, 0.55 * s, 10);
    const hornL = new THREE.Mesh(hornGeo, secondaryMat);
    hornL.position.set(-0.16 * s, 0.35 * s, 0.08 * s);
    hornL.rotation.set(-0.35, 0, -0.45);
    headJoint.add(hornL);

    const hornR = new THREE.Mesh(hornGeo, secondaryMat);
    hornR.position.set(0.16 * s, 0.35 * s, 0.08 * s);
    hornR.rotation.set(-0.35, 0, 0.45);
    headJoint.add(hornR);
  } else if (config.hasHelmet === 'void-titan') {
    // Angular Obsidian Crest with Glowing Violet Optical Visor
    const crestGeo = new THREE.BoxGeometry(0.48 * s, 0.22 * s, 0.44 * s);
    const crest = new THREE.Mesh(crestGeo, createPbrMat(0x0f172a, 0.95, 0.15));
    crest.position.y = 0.22 * s;
    headJoint.add(crest);

    const visorGeo = new THREE.BoxGeometry(0.32 * s, 0.05 * s, 0.08 * s);
    const visor = new THREE.Mesh(visorGeo, glowMat);
    visor.position.set(0, 0.04 * s, 0.22 * s);
    headJoint.add(visor);

    const jawGeo = new THREE.BoxGeometry(0.40 * s, 0.20 * s, 0.32 * s);
    const jaw = new THREE.Mesh(jawGeo, createPbrMat(0x1e293b, 0.85, 0.25));
    jaw.position.set(0, -0.22 * s, 0.14 * s);
    headJoint.add(jaw);
  }

  // --- 9. 3D UPPER LIMBS (SHOULDERS, BICEPS, FOREARMS, WEAPONS) ---
  const leftShoulder = new THREE.Group();
  leftShoulder.position.set(-0.56 * s, 0.42 * s, 0);
  chestJoint.add(leftShoulder);

  const rightShoulder = new THREE.Group();
  rightShoulder.position.set(0.56 * s, 0.42 * s, 0);
  chestJoint.add(rightShoulder);

  // Helper to build 3D Muscular Arm & Gauntlet
  function buildArm(parentShoulder, isLeft) {
    // Curved Pauldron / Shoulder Bell
    const pauldronGeo = new THREE.SphereGeometry(0.24 * s, 14, 12, 0, Math.PI * 2, 0, Math.PI * 0.6);
    const pauldron = new THREE.Mesh(pauldronGeo, secondaryMat);
    pauldron.position.y = 0.05 * s;
    parentShoulder.add(pauldron);

    // Muscular Bicep / Upper Arm
    const bicepGeo = new THREE.CylinderGeometry(0.14 * s, 0.12 * s, 0.48 * s, 14);
    const bicepMesh = new THREE.Mesh(bicepGeo, primaryMat);
    bicepMesh.position.y = -0.28 * s;
    parentShoulder.add(bicepMesh);

    // Elbow Joint
    const elbowJoint = new THREE.Group();
    elbowJoint.position.y = -0.52 * s;
    parentShoulder.add(elbowJoint);

    // Forearm Gauntlet
    const forearmGeo = new THREE.CylinderGeometry(0.13 * s, 0.11 * s, 0.46 * s, 14);
    const forearmMesh = new THREE.Mesh(forearmGeo, secondaryMat);
    forearmMesh.position.y = -0.24 * s;
    elbowJoint.add(forearmMesh);

    // Armored Fist / Hand
    const handJoint = new THREE.Group();
    handJoint.position.y = -0.48 * s;
    elbowJoint.add(handJoint);

    const fistGeo = new THREE.BoxGeometry(0.15 * s, 0.16 * s, 0.18 * s);
    const fistMesh = new THREE.Mesh(fistGeo, primaryMat);
    handJoint.add(fistMesh);

    return { elbowJoint, handJoint, forearmMesh };
  }

  const leftArm = buildArm(leftShoulder, true);
  const rightArm = buildArm(rightShoulder, false);

  // Default combat ready stance
  leftShoulder.rotation.x = 0.35;
  leftShoulder.rotation.z = -0.15;
  leftArm.elbowJoint.rotation.x = -0.55;

  rightShoulder.rotation.x = 0.15;
  rightShoulder.rotation.z = 0.15;
  rightArm.elbowJoint.rotation.x = -0.45;

  // --- 10. REAL 3D WEAPONS & SIGNATURE GEAR MOUNTED ON LIMBS ---
  let weaponMesh = null;
  let secondaryWeaponMesh = null;

  // Captain America Vibranium Star Shield (Mounted on Left Forearm)
  if (config.hasShield) {
    const shieldGroup = new THREE.Group();
    const r = 0.65 * s;
    const ring1 = new THREE.Mesh(new THREE.RingGeometry(r * 0.75, r, 32), createPbrMat(0xb91c1c, 0.9, 0.15));
    const ring2 = new THREE.Mesh(new THREE.RingGeometry(r * 0.52, r * 0.75, 32), createPbrMat(0xf8fafc, 0.95, 0.12));
    const ring3 = new THREE.Mesh(new THREE.RingGeometry(r * 0.32, r * 0.52, 32), createPbrMat(0xb91c1c, 0.9, 0.15));
    const centerDisc = new THREE.Mesh(new THREE.CircleGeometry(r * 0.32, 32), createPbrMat(0x1d4ed8, 0.85, 0.2));
    const star = new THREE.Mesh(new THREE.CircleGeometry(r * 0.18, 5), createPbrMat(0xf8fafc, 0.95, 0.1));
    star.position.z = 0.02 * s;

    shieldGroup.add(ring1);
    shieldGroup.add(ring2);
    shieldGroup.add(ring3);
    shieldGroup.add(centerDisc);
    shieldGroup.add(star);

    shieldGroup.position.set(-0.12 * s, 0, 0.18 * s);
    shieldGroup.rotation.set(0.1, -Math.PI / 2, 0);
    leftArm.handJoint.add(shieldGroup);
    weaponMesh = shieldGroup;
  }

  // Thor Mjolnir Hammer (Held in Right Hand)
  if (config.hasHammer) {
    const hammerGroup = new THREE.Group();
    const headGeo = new THREE.BoxGeometry(0.42 * s, 0.28 * s, 0.28 * s);
    const head = new THREE.Mesh(headGeo, createPbrMat(0x94a3b8, 0.95, 0.15));
    head.position.y = 0.45 * s;
    hammerGroup.add(head);

    const handleGeo = new THREE.CylinderGeometry(0.035 * s, 0.035 * s, 0.6 * s, 10);
    const handle = new THREE.Mesh(handleGeo, createPbrMat(0x292524, 0.3, 0.7));
    handle.position.y = 0.15 * s;
    hammerGroup.add(handle);

    hammerGroup.rotation.set(Math.PI / 3, 0, 0.2);
    hammerGroup.position.set(0, -0.15 * s, 0.1 * s);
    rightArm.handJoint.add(hammerGroup);
    weaponMesh = hammerGroup;
  }

  // Thanos Golden Infinity Gauntlet with 6 Glowing Stones (Left Arm)
  if (config.hasGauntlet) {
    const gauntletGroup = new THREE.Group();
    const gauntletCuff = new THREE.Mesh(new THREE.CylinderGeometry(0.24 * s, 0.18 * s, 0.55 * s, 14), secondaryMat);
    gauntletGroup.add(gauntletCuff);

    // 6 Distinct Glowing Infinity Stones
    const stoneColors = [
      0x9333ea, // Power (Purple)
      0x2563eb, // Space (Blue)
      0xdc2626, // Reality (Red)
      0xf97316, // Soul (Orange)
      0x16a34a, // Time (Green)
      0xeab308  // Mind (Yellow)
    ];
    stoneColors.forEach((col, idx) => {
      const stone = new THREE.Mesh(
        new THREE.SphereGeometry(0.055 * s, 10, 10),
        new THREE.MeshBasicMaterial({ color: col })
      );
      const angle = (idx / 5) * Math.PI - Math.PI / 2;
      stone.position.set(Math.cos(angle) * 0.18 * s, -0.22 * s, 0.16 * s);
      gauntletGroup.add(stone);
    });

    leftArm.handJoint.add(gauntletGroup);
    weaponMesh = gauntletGroup;
  }

  // Green Goblin Glowing Pumpkin Bomb (Right Hand)
  if (config.hasPumpkin) {
    const bombGeo = new THREE.SphereGeometry(0.18 * s, 14, 12);
    const bombMat = new THREE.MeshStandardMaterial({
      color: 0xf97316,
      emissive: 0xea580c,
      emissiveIntensity: 0.8,
      metalness: 0.6,
      roughness: 0.3
    });
    const bomb = new THREE.Mesh(bombGeo, bombMat);
    bomb.position.set(0, -0.1 * s, 0.15 * s);
    rightArm.handJoint.add(bomb);
    weaponMesh = bomb;
  }

  // Loki Golden Chitauri Scepter (Right Hand)
  if (config.hasScepter) {
    const scepterGroup = new THREE.Group();
    const staffGeo = new THREE.CylinderGeometry(0.025 * s, 0.03 * s, 1.4 * s, 10);
    const staff = new THREE.Mesh(staffGeo, secondaryMat);
    scepterGroup.add(staff);

    const bladeGeo = new THREE.ConeGeometry(0.1 * s, 0.45 * s, 4);
    const blade = new THREE.Mesh(bladeGeo, secondaryMat);
    blade.position.y = 0.8 * s;
    scepterGroup.add(blade);

    // Glowing Mind Gem
    const gem = new THREE.Mesh(new THREE.SphereGeometry(0.06 * s, 10, 10), new THREE.MeshBasicMaterial({ color: 0x38bdf8 }));
    gem.position.y = 0.65 * s;
    scepterGroup.add(gem);

    scepterGroup.rotation.x = Math.PI / 4;
    rightArm.handJoint.add(scepterGroup);
    weaponMesh = scepterGroup;
  }

  // Doctor Strange Eldritch Mandala Disc on Hand
  if (config.hasMandalas) {
    const mandala = new THREE.Mesh(
      new THREE.RingGeometry(0.25 * s, 0.32 * s, 32),
      new THREE.MeshBasicMaterial({ color: 0xf59e0b, side: THREE.DoubleSide })
    );
    mandala.position.set(0, -0.15 * s, 0.12 * s);
    rightArm.handJoint.add(mandala);
    secondaryWeaponMesh = mandala;
  }

  // --- 11. DYNAMIC 3D FLOWING CLOTH CAPE ---
  let capeMesh = null;
  if (config.hasCape || config.hasCloak) {
    const capeGeo = new THREE.PlaneGeometry(0.95 * s, 1.8 * s, 16, 16);
    const capeMat = new THREE.MeshStandardMaterial({
      color: config.capeColor || 0x991b1b,
      roughness: 0.6,
      metalness: 0.1,
      side: THREE.DoubleSide
    });
    capeMesh = new THREE.Mesh(capeGeo, capeMat);
    capeMesh.position.set(0, -0.4 * s, -0.28 * s);
    capeMesh.rotation.x = 0.15;
    chestJoint.add(capeMesh);
  }

  // --- 12. GREEN GOBLIN 3D AERODYNAMIC GLIDER ---
  let gliderGroup = null;
  if (config.hasGlider) {
    gliderGroup = new THREE.Group();
    gliderGroup.position.y = 0.1 * s;

    // Fuselage
    const fuseGeo = new THREE.CylinderGeometry(0.2 * s, 0.25 * s, 1.6 * s, 12);
    fuseGeo.rotateX(Math.PI / 2);
    const fuselage = new THREE.Mesh(fuseGeo, createPbrMat(0x475569, 0.9, 0.2));
    gliderGroup.add(fuselage);

    // Bat Wings
    const wingGeo = new THREE.BoxGeometry(3.2 * s, 0.08 * s, 0.95 * s);
    const wings = new THREE.Mesh(wingGeo, createPbrMat(0x15803d, 0.85, 0.25));
    wings.position.set(0, 0.05 * s, -0.1 * s);
    gliderGroup.add(wings);

    // Twin Jet Thrusters with Animated Flames
    const flameMat = new THREE.MeshBasicMaterial({ color: 0xf97316 });
    const f1 = new THREE.Mesh(new THREE.ConeGeometry(0.12 * s, 0.5 * s, 8), flameMat);
    f1.rotation.x = -Math.PI / 2;
    f1.position.set(-0.35 * s, -0.05 * s, -1.1 * s);
    gliderGroup.add(f1);

    const f2 = new THREE.Mesh(new THREE.ConeGeometry(0.12 * s, 0.5 * s, 8), flameMat);
    f2.rotation.x = -Math.PI / 2;
    f2.position.set(0.35 * s, -0.05 * s, -1.1 * s);
    gliderGroup.add(f2);

    rootJoint.add(gliderGroup);
  }

  return {
    group,
    shadow,
    footRing,
    rootJoint,
    pelvisJoint,
    spineJoint,
    chestJoint,
    neckJoint,
    headJoint,
    leftShoulder,
    rightShoulder,
    leftArm,
    rightArm,
    leftLegJoint,
    rightLegJoint,
    leftLegParts,
    rightLegParts,
    capeMesh,
    gliderGroup,
    weaponMesh,
    secondaryWeaponMesh,
    scaleMultiplier: s,
    config,
    characterId: charId
  };
}

// ============================================================
// ANIMATE 3D SKELETON WITH AUTHENTIC MARVEL COMBAT KINEMATICS
// ============================================================
export function animateArticulated3DFighter(rig, animState, animTime, delta, elapsed, isHero = true, activeGesture = '') {
  if (!rig) return;

  const {
    rootJoint,
    pelvisJoint,
    spineJoint,
    chestJoint,
    headJoint,
    leftShoulder,
    rightShoulder,
    leftArm,
    rightArm,
    leftLegJoint,
    rightLegJoint,
    leftLegParts,
    rightLegParts,
    capeMesh,
    gliderGroup,
    weaponMesh,
    secondaryWeaponMesh,
    config,
    characterId
  } = rig;

  const dir = isHero ? 1 : -1;
  const s = rig.scaleMultiplier;
  const charId = characterId || config?.id;

  // 1. AUTHENTIC COMBAT IDLE: NATURAL FIGHTING STANCE & MARTIAL BREATHING
  if (animState === 'idle') {
    // Combat rhythm bounce (Boxer / Martial Artist breathing bounce)
    const bounce = Math.sin(elapsed * 3.2);
    const slowBreath = Math.sin(elapsed * 2.0);

    // Pelvis & Legs: Rhythmic knee flexion & weight shifting
    if (pelvisJoint) {
      if (charId === 'spiderman') {
        // Low, agile athletic spider crouch
        pelvisJoint.position.y = (1.52 + bounce * 0.03) * s;
      } else if (charId === 'ironman' || charId === 'magneto' || charId === 'doctor-strange') {
        // High-tech hover / mystic levitation
        pelvisJoint.position.y = (1.92 + Math.sin(elapsed * 2.4) * 0.06) * s;
      } else {
        // Grounded combat stance bounce
        pelvisJoint.position.y = (1.85 + bounce * 0.035) * s;
      }
      pelvisJoint.rotation.y = slowBreath * 0.04 * dir;
    }

    // Dynamic knee flexion
    if (leftLegParts?.kneeJoint && rightLegParts?.kneeJoint) {
      if (charId === 'spiderman') {
        leftLegParts.kneeJoint.rotation.x = 0.55 + bounce * 0.04;
        rightLegParts.kneeJoint.rotation.x = 0.65 - bounce * 0.04;
        if (leftLegJoint) leftLegJoint.rotation.z = 0.16;
        if (rightLegJoint) rightLegJoint.rotation.z = -0.16;
      } else {
        leftLegParts.kneeJoint.rotation.x = 0.14 + bounce * 0.04;
        rightLegParts.kneeJoint.rotation.x = 0.12 - bounce * 0.04;
        if (leftLegJoint) leftLegJoint.rotation.x = 0.08 + bounce * 0.02;
        if (rightLegJoint) rightLegJoint.rotation.x = -0.06 - bounce * 0.02;
      }
    }

    // Spine & Chest: Organic breathing expansion & natural stance twist
    if (spineJoint) {
      if (charId === 'spiderman') {
        spineJoint.rotation.x = 0.28 + slowBreath * 0.03; // Aggressive forward spider lean
      } else {
        spineJoint.rotation.x = slowBreath * 0.025;
      }
      spineJoint.rotation.y = Math.sin(elapsed * 1.6) * 0.04 * dir;
    }
    if (chestJoint) {
      chestJoint.scale.set(1 + slowBreath * 0.025, 1 + slowBreath * 0.025, 1 + slowBreath * 0.035);
    }

    // Head: Alert tracking with neck breathing compensation
    if (headJoint) {
      headJoint.rotation.y = Math.sin(elapsed * 1.4) * 0.05 * dir;
      headJoint.rotation.x = Math.sin(elapsed * 2.0) * 0.025;
    }

    // Arms & Guard: Character-specific combat stances
    if (leftShoulder && rightShoulder) {
      if (charId === 'captain-america') {
        // Tight soldier guard with shield across chest
        leftShoulder.rotation.x = 0.72 + bounce * 0.03;
        leftShoulder.rotation.z = -0.32;
        if (leftArm?.elbowJoint) leftArm.elbowJoint.rotation.x = -0.9;
        rightShoulder.rotation.x = 0.38 + bounce * 0.03;
        if (rightArm?.elbowJoint) rightArm.elbowJoint.rotation.x = -0.65;
      } else if (charId === 'thor') {
        // Asgardian warrior stance, Mjolnir ready
        leftShoulder.rotation.x = 0.35 + bounce * 0.03;
        rightShoulder.rotation.x = 0.28 + bounce * 0.03;
        if (rightArm?.elbowJoint) rightArm.elbowJoint.rotation.x = -0.45;
        if (weaponMesh) weaponMesh.rotation.z = Math.sin(elapsed * 2.0) * 0.06;
      } else if (charId === 'ironman') {
        // Palm repulsors hovering forward
        leftShoulder.rotation.x = 0.48 + bounce * 0.03;
        rightShoulder.rotation.x = 0.48 + bounce * 0.03;
        if (leftArm?.elbowJoint) leftArm.elbowJoint.rotation.x = -0.35;
        if (rightArm?.elbowJoint) rightArm.elbowJoint.rotation.x = -0.35;
      } else if (charId === 'spiderman') {
        // Low spider hands hovering near ground
        leftShoulder.rotation.x = 0.25 + bounce * 0.04;
        rightShoulder.rotation.x = 0.25 + bounce * 0.04;
        if (leftArm?.elbowJoint) leftArm.elbowJoint.rotation.x = -0.7;
        if (rightArm?.elbowJoint) rightArm.elbowJoint.rotation.x = -0.7;
      } else if (charId === 'thanos') {
        // Heavy titan poise
        leftShoulder.rotation.x = 0.45 + slowBreath * 0.03;
        rightShoulder.rotation.x = 0.25 + slowBreath * 0.03;
        if (leftArm?.elbowJoint) leftArm.elbowJoint.rotation.x = -0.6;
      } else {
        // Standard high martial arts guard
        leftShoulder.rotation.x = 0.45 + bounce * 0.04;
        rightShoulder.rotation.x = 0.32 + Math.cos(elapsed * 3.2) * 0.04;
        if (leftArm?.elbowJoint) leftArm.elbowJoint.rotation.x = -0.65;
        if (rightArm?.elbowJoint) rightArm.elbowJoint.rotation.x = -0.55;
      }
    }

    // Dynamic 3D Flowing Cape Wind Wave Physics
    if (capeMesh) {
      const pos = capeMesh.geometry.attributes.position.array;
      for (let i = 0; i < pos.length; i += 3) {
        const yFrac = pos[i + 1] / (1.8 * s);
        pos[i + 2] = Math.sin(elapsed * 5.5 + yFrac * 4.5) * 0.16 * Math.abs(yFrac);
      }
      capeMesh.geometry.attributes.position.needsUpdate = true;
      capeMesh.rotation.x = 0.15 + Math.sin(elapsed * 3.2) * 0.05;
    }

    // Green Goblin Glider Dynamic Hover, Pitch & Bank
    if (gliderGroup) {
      gliderGroup.position.y = 0.1 * s + Math.sin(elapsed * 2.5) * 0.08 * s;
      gliderGroup.rotation.z = Math.sin(elapsed * 2.0) * 0.09;
      gliderGroup.rotation.x = Math.sin(elapsed * 2.8) * 0.05;
    }

    // Doctor Strange Mandalas slow rotation
    if (secondaryWeaponMesh) {
      secondaryWeaponMesh.rotation.z += delta * 3.5;
    }
  }

  // 2. AUTHENTIC COMBAT STRIKE: KINETIC CHAIN MARVEL SIGNATURE ATTACK
  else if (animState === 'punch' || animState === 'attack') {
    const p = Math.min(1.0, animTime / 0.44);

    // Phase A: WIND-UP / COIL (0% to 32%)
    if (p < 0.32) {
      const f = p / 0.32;
      // Hip & Spine coil back
      if (pelvisJoint) pelvisJoint.rotation.y = -0.35 * f * dir;
      if (spineJoint) {
        spineJoint.rotation.y = -0.52 * f * dir;
        spineJoint.rotation.x = -0.18 * f;
      }
      // Lead leg steps in & rear leg braces
      if (leftLegJoint) leftLegJoint.rotation.x = 0.25 * f;
      if (rightLegParts?.kneeJoint) rightLegParts.kneeJoint.rotation.x = 0.3 * f;

      // Character-specific wind-up poses
      if (charId === 'thor') {
        // Wind Mjolnir in overhead arc
        if (rightShoulder) rightShoulder.rotation.x = -1.2 * f;
        if (rightArm?.elbowJoint) rightArm.elbowJoint.rotation.x = -1.0 * f;
        if (weaponMesh) weaponMesh.rotation.z = -1.5 * f;
      } else if (charId === 'captain-america') {
        // Coil shield arm across chest
        if (leftShoulder) leftShoulder.rotation.x = 0.8 * f;
        if (rightShoulder) rightShoulder.rotation.x = -0.6 * f;
      } else if (charId === 'ironman') {
        // Both arms pull back to charge repulsors
        if (leftShoulder) leftShoulder.rotation.x = -0.4 * f;
        if (rightShoulder) rightShoulder.rotation.x = -0.4 * f;
      } else if (charId === 'spiderman') {
        // Deep crouch spring
        if (pelvisJoint) pelvisJoint.position.y = (1.35 - f * 0.2) * s;
        if (spineJoint) spineJoint.rotation.x = 0.5 * f;
      } else {
        // Right fist pulls back to jaw
        if (rightShoulder) rightShoulder.rotation.x = -0.65 * f;
        if (rightArm?.elbowJoint) rightArm.elbowJoint.rotation.x = -1.1 * f;
        if (leftShoulder) leftShoulder.rotation.x = 0.75 * f; // Left guard covers face
      }
    }
    // Phase B: EXPLOSIVE IMPACT DRIVE & EXTENSION (32% to 68%)
    else if (p < 0.68) {
      const f = (p - 0.32) / 0.36;
      // Full torso torque & forward kinetic thrust
      if (pelvisJoint) pelvisJoint.rotation.y = (-0.35 + f * 0.8) * dir;
      if (spineJoint) {
        spineJoint.rotation.y = (-0.52 + f * 1.25) * dir;
        spineJoint.rotation.x = 0.28 * f;
      }
      // Lead knee bends deep for grounded power
      if (leftLegParts?.kneeJoint) leftLegParts.kneeJoint.rotation.x = 0.35 * f;

      // Character-specific attack extension
      if (charId === 'thor') {
        // Powerful downward diagonal Mjolnir hammer cleave!
        if (rightShoulder) rightShoulder.rotation.x = -1.2 + f * 2.8;
        if (rightArm?.elbowJoint) rightArm.elbowJoint.rotation.x = -1.0 + f * 1.0;
        if (weaponMesh) weaponMesh.rotation.z = -1.5 + f * 3.2;
      } else if (charId === 'captain-america') {
        // Shield whip arc release + right straight cross punch!
        if (leftShoulder) leftShoulder.rotation.x = 0.8 - f * 1.2;
        if (rightShoulder) rightShoulder.rotation.x = -0.6 + f * 2.1;
        if (rightArm?.elbowJoint) rightArm.elbowJoint.rotation.x = -0.1;
      } else if (charId === 'ironman') {
        // Twin Repulsor palm thrust straight out!
        if (leftShoulder) leftShoulder.rotation.x = -0.4 + f * 1.9;
        if (rightShoulder) rightShoulder.rotation.x = -0.4 + f * 1.9;
        if (leftArm?.elbowJoint) leftArm.elbowJoint.rotation.x = 0.05;
        if (rightArm?.elbowJoint) rightArm.elbowJoint.rotation.x = 0.05;
      } else if (charId === 'spiderman') {
        // Acrobatic flying double dropkick thrust!
        if (pelvisJoint) pelvisJoint.position.y = (1.35 + f * 0.6) * s;
        if (leftLegJoint) leftLegJoint.rotation.x = 1.2 * f;
        if (rightLegJoint) rightLegJoint.rotation.x = 1.3 * f;
        if (spineJoint) spineJoint.rotation.x = -0.4 * f;
      } else if (charId === 'green-goblin') {
        // Fast overhand pumpkin bomb pitch
        if (rightShoulder) rightShoulder.rotation.x = -0.6 + f * 2.2;
        if (gliderGroup) gliderGroup.rotation.x = -0.25 * f;
      } else if (charId === 'thanos') {
        // Massive titan gauntlet power slam!
        if (leftShoulder) leftShoulder.rotation.x = -0.5 + f * 2.2;
        if (leftArm?.elbowJoint) leftArm.elbowJoint.rotation.x = 0.05;
        if (weaponMesh) weaponMesh.rotation.z += delta * 15;
      } else {
        // Full straight punch extension & fist twist
        if (rightShoulder) rightShoulder.rotation.x = -0.65 + f * 2.15;
        if (rightArm?.elbowJoint) rightArm.elbowJoint.rotation.x = 0.05;
      }
    }
    // Phase C: FOLLOW-THROUGH & RECOVERY (68% to 100%)
    else {
      const f = (p - 0.68) / 0.32;
      const easeBack = Math.sin(f * (Math.PI / 2));

      if (pelvisJoint) {
        pelvisJoint.rotation.y = 0.45 * (1.0 - easeBack) * dir;
        pelvisJoint.position.y = (1.85) * s;
      }
      if (spineJoint) {
        spineJoint.rotation.y = 0.73 * (1.0 - easeBack) * dir;
        spineJoint.rotation.x = 0.28 * (1.0 - easeBack);
      }
      if (rightShoulder) {
        rightShoulder.rotation.x = 1.5 * (1.0 - easeBack) + 0.32 * easeBack;
      }
      if (leftShoulder) {
        leftShoulder.rotation.x = 0.75 * (1.0 - easeBack) + 0.45 * easeBack;
      }
      if (leftLegJoint && rightLegJoint) {
        leftLegJoint.rotation.x = 0.08;
        rightLegJoint.rotation.x = -0.06;
      }
    }
  }

  // 3. DEFENSIVE SHIELD GUARD / PARRY POSTURE
  else if (isHero && activeGesture && activeGesture.toUpperCase().includes('SHIELD')) {
    if (pelvisJoint) pelvisJoint.position.y = 1.68 * s; // Solid defensive crouch
    if (leftLegParts?.kneeJoint) leftLegParts.kneeJoint.rotation.x = 0.32;
    if (rightLegParts?.kneeJoint) rightLegParts.kneeJoint.rotation.x = 0.35;
    if (spineJoint) {
      spineJoint.rotation.x = 0.22;
      spineJoint.rotation.y = 0.42 * dir;
    }
    if (leftShoulder) {
      leftShoulder.rotation.x = 1.15; // Shield braced directly at chest level
      leftShoulder.rotation.z = -0.45;
    }
    if (leftArm?.elbowJoint) leftArm.elbowJoint.rotation.x = -0.85;
    if (rightShoulder) {
      rightShoulder.rotation.x = 0.55; // Right hand bracing the guard
    }
  }

  // 4. AERIAL ULTIMATE: HIGH LEAP, APEX CHARGE & METEOR GROUND SLAM
  else if (animState === 'ultimate') {
    const p = Math.min(1.0, animTime / 0.55);

    if (p < 0.45) {
      // Ascending into the heavens with arms raised
      const f = Math.sin((p / 0.45) * (Math.PI / 2));
      if (pelvisJoint) pelvisJoint.position.y = (1.85 + f * 2.8) * s;
      if (leftShoulder) leftShoulder.rotation.x = 2.4 * f;
      if (rightShoulder) rightShoulder.rotation.x = 2.4 * f;
      if (spineJoint) spineJoint.rotation.x = -0.35 * f;
      if (weaponMesh) weaponMesh.rotation.z += delta * 25;
    } else {
      // Meteor slam descent!
      const f = (p - 0.45) / 0.55;
      const easeDown = f * f; // Accelerating gravity plunge
      if (pelvisJoint) pelvisJoint.position.y = (1.85 + (1.0 - easeDown) * 2.8) * s;
      if (leftShoulder) leftShoulder.rotation.x = 2.4 * (1.0 - f) + 0.35 * f;
      if (rightShoulder) rightShoulder.rotation.x = 2.4 * (1.0 - f) + 0.15 * f;
      if (spineJoint) spineJoint.rotation.x = 0.5 * (1.0 - f);
      if (weaponMesh) weaponMesh.rotation.z += delta * 30;
    }
  }

  // 5. DODGE: DYNAMIC ACROBATIC WARP ROLL
  else if (animState === 'dodge') {
    const p = Math.min(1.0, animTime / 0.4);
    if (rootJoint) {
      rootJoint.position.y = Math.sin(p * Math.PI) * 0.7 * s;
      rootJoint.rotation.y = p * Math.PI * 2 * dir;
      rootJoint.rotation.z = Math.sin(p * Math.PI) * 0.3 * dir;
    }
  }

  // 6. STAGGERED / STUNNED: DIZZY KNEELING WOBBLE (Guard Break State)
  else if (animState === 'staggered') {
    if (pelvisJoint) pelvisJoint.position.y = 1.45 * s; // Drops low onto knees
    if (leftLegParts?.kneeJoint && rightLegParts?.kneeJoint) {
      leftLegParts.kneeJoint.rotation.x = 0.58;
      rightLegParts.kneeJoint.rotation.x = 0.62;
    }
    if (spineJoint) {
      spineJoint.rotation.x = 0.35;
      spineJoint.rotation.z = Math.sin(elapsed * 5.0) * 0.08; // Dizzy wobble
    }
    if (headJoint) {
      headJoint.rotation.x = 0.45; // Head drooping
      headJoint.rotation.y = Math.sin(elapsed * 4.0) * 0.15;
    }
    if (leftShoulder && rightShoulder) {
      leftShoulder.rotation.x = 0.1;
      rightShoulder.rotation.x = 0.1;
      if (leftArm?.elbowJoint) leftArm.elbowJoint.rotation.x = -0.15;
      if (rightArm?.elbowJoint) rightArm.elbowJoint.rotation.x = -0.15;
    }
  }
}

