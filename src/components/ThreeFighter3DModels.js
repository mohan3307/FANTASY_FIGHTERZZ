import * as THREE from 'three';

// ============================================================
// CHARACTER SPECIFICATIONS, COLOR PALETTES & 3D ARMATURES
// ============================================================
export const HERO_CONFIGS = {
  // 1. ARMORED TECH HERO (Plasma Ranger / Iron Man Archetype)
  'plasma-ranger': {
    id: 'plasma-ranger',
    name: 'PLASMA RANGER',
    archetype: 'Armored Tech Hero',
    primaryColor: 0xb91c1c, // Crimson Red Metallic
    secondaryColor: 0xeab308, // Gold Metallic Armor Plates
    trimColor: 0x1e293b, // Dark Titanium Joints
    glowColor: 0x00f3ff, // Cyan Arc Reactor Glow
    accentColor: '#00f3ff',
    metalness: 0.92,
    roughness: 0.18,
    scale: 1.04,
    hasReactor: true,
    hasRepulsors: true,
    hasHelmet: 'tech-helmet',
    weaponType: 'repulsor'
  },
  ironman: {
    id: 'ironman',
    name: 'PLASMA RANGER',
    archetype: 'Armored Tech Hero',
    primaryColor: 0xb91c1c,
    secondaryColor: 0xeab308,
    trimColor: 0x1e293b,
    glowColor: 0x00f3ff,
    accentColor: '#00f3ff',
    metalness: 0.92,
    roughness: 0.18,
    scale: 1.04,
    hasReactor: true,
    hasRepulsors: true,
    hasHelmet: 'tech-helmet',
    weaponType: 'repulsor'
  },

  // 2. THUNDER WARRIOR (Storm Guardian / Thor Archetype)
  'storm-guardian': {
    id: 'storm-guardian',
    name: 'STORM GUARDIAN',
    archetype: 'Thunder Warrior',
    primaryColor: 0x1e293b, // Asgardian Dark Steel
    secondaryColor: 0x94a3b8, // Silver Armor Discs
    trimColor: 0xd97706, // Gilded Gold Trim
    glowColor: 0x38bdf8, // Electric Lightning Blue
    accentColor: '#00f3ff',
    metalness: 0.88,
    roughness: 0.22,
    scale: 1.08,
    hasCape: true,
    capeColor: 0x991b1b, // Crimson Flowing Cape
    hasHammer: true,
    hasHelmet: 'winged-helmet',
    weaponType: 'hammer'
  },
  thor: {
    id: 'thor',
    name: 'STORM GUARDIAN',
    archetype: 'Thunder Warrior',
    primaryColor: 0x1e293b,
    secondaryColor: 0x94a3b8,
    trimColor: 0xd97706,
    glowColor: 0x38bdf8,
    accentColor: '#00f3ff',
    metalness: 0.88,
    roughness: 0.22,
    scale: 1.08,
    hasCape: true,
    capeColor: 0x991b1b,
    hasHammer: true,
    hasHelmet: 'winged-helmet',
    weaponType: 'hammer'
  },

  // 3. SHIELD DEFENDER (Shield Sentinel / Captain America Archetype)
  'shield-sentinel': {
    id: 'shield-sentinel',
    name: 'SHIELD SENTINEL',
    archetype: 'Shield Defender',
    primaryColor: 0x1d4ed8, // Tactical Cobalt Blue
    secondaryColor: 0xb91c1c, // Crimson Combat Stripes
    trimColor: 0xe2e8f0, // Silver Star Medallion
    glowColor: 0x38bdf8,
    accentColor: '#fbbf24',
    metalness: 0.65,
    roughness: 0.35,
    scale: 1.04,
    hasShield: true,
    hasHelmet: 'combat-helmet',
    weaponType: 'shield'
  },
  'captain-america': {
    id: 'captain-america',
    name: 'SHIELD SENTINEL',
    archetype: 'Shield Defender',
    primaryColor: 0x1d4ed8,
    secondaryColor: 0xb91c1c,
    trimColor: 0xe2e8f0,
    glowColor: 0x38bdf8,
    accentColor: '#fbbf24',
    metalness: 0.65,
    roughness: 0.35,
    scale: 1.04,
    hasShield: true,
    hasHelmet: 'combat-helmet',
    weaponType: 'shield'
  },

  // 4. AGILE WEB HERO (Web Ninja / Spider-Man Archetype)
  'web-ninja': {
    id: 'web-ninja',
    name: 'WEB NINJA',
    archetype: 'Agile Web Hero',
    primaryColor: 0xdc2626, // Crimson Nano-Weave
    secondaryColor: 0x1e3a8a, // Deep Tactical Navy
    trimColor: 0x0f172a, // Obsidian Web Lines
    glowColor: 0x00f3ff,
    accentColor: '#ff2a5f',
    metalness: 0.45,
    roughness: 0.42,
    scale: 1.0,
    hasWebshooters: true,
    hasHelmet: 'web-mask',
    weaponType: 'web'
  },
  spiderman: {
    id: 'spiderman',
    name: 'WEB NINJA',
    archetype: 'Agile Web Hero',
    primaryColor: 0xdc2626,
    secondaryColor: 0x1e3a8a,
    trimColor: 0x0f172a,
    glowColor: 0x00f3ff,
    accentColor: '#ff2a5f',
    metalness: 0.45,
    roughness: 0.42,
    scale: 1.0,
    hasWebshooters: true,
    hasHelmet: 'web-mask',
    weaponType: 'web'
  },

  // 5. MYSTIC PORTAL MAGE (Arcane Sorcerer / Doctor Strange Archetype)
  'arcane-sorcerer': {
    id: 'arcane-sorcerer',
    name: 'ARCANE SORCERER',
    archetype: 'Mystic Portal Mage',
    primaryColor: 0x1e1b4b, // Mystic Midnight Indigo
    secondaryColor: 0x0f766e, // Emerald Silk Sash
    trimColor: 0xf59e0b, // Eldritch Gold Border
    glowColor: 0xf59e0b, // Eldritch Orange Flame
    accentColor: '#a855f7',
    metalness: 0.4,
    roughness: 0.5,
    scale: 1.04,
    hasCloak: true,
    capeColor: 0x881337, // Cloak of Levitation
    hasEyeOfAgamotto: true,
    hasMandalas: true,
    hasHelmet: 'mystic-cowl',
    weaponType: 'mandala'
  },
  'doctor-strange': {
    id: 'doctor-strange',
    name: 'ARCANE SORCERER',
    archetype: 'Mystic Portal Mage',
    primaryColor: 0x1e1b4b,
    secondaryColor: 0x0f766e,
    trimColor: 0xf59e0b,
    glowColor: 0xf59e0b,
    accentColor: '#a855f7',
    metalness: 0.4,
    roughness: 0.5,
    scale: 1.04,
    hasCloak: true,
    capeColor: 0x881337,
    hasEyeOfAgamotto: true,
    hasMandalas: true,
    hasHelmet: 'mystic-cowl',
    weaponType: 'mandala'
  }
};

export const VILLAIN_CONFIGS = {
  // 1. VOID OVERLORD (Void Titan Archetype)
  'void-titan': {
    id: 'void-titan',
    name: 'VOID OVERLORD',
    archetype: 'Void Overlord',
    primaryColor: 0x0a0a14, // Dark Obsidian Cyber-Armor
    secondaryColor: 0x312e81, // Deep Dark-Matter Indigo
    trimColor: 0x475569, // Titanium Armor Joints
    glowColor: 0xa855f7, // Volatile Violet Singularity
    accentColor: '#8b5cf6',
    metalness: 0.94,
    roughness: 0.16,
    scale: 1.35, // Colossal Boss Scale
    hasVoidCore: true,
    hasVoidGauntlets: true,
    hasVoidCracks: true,
    hasHelmet: 'void-crest',
    weaponType: 'void-gauntlet'
  },

  // 2. SHADOW ASSASSIN (Fast & Evasive Stealth Hunter)
  'shadow-assassin': {
    id: 'shadow-assassin',
    name: 'SHADOW ASSASSIN',
    archetype: 'Shadow Assassin',
    primaryColor: 0x064e3b, // Stealth Emerald
    secondaryColor: 0x0f172a, // Matte Black Carbon
    trimColor: 0xeab308, // Gold Accents
    glowColor: 0x84cc16, // Phantom Lime Green
    accentColor: '#84cc16',
    metalness: 0.8,
    roughness: 0.28,
    scale: 1.05,
    hasDualDaggers: true,
    hasHelmet: 'shadow-horns',
    weaponType: 'daggers'
  },
  loki: {
    id: 'loki',
    name: 'SHADOW ASSASSIN',
    archetype: 'Shadow Assassin',
    primaryColor: 0x064e3b,
    secondaryColor: 0x0f172a,
    trimColor: 0xeab308,
    glowColor: 0x84cc16,
    accentColor: '#84cc16',
    metalness: 0.8,
    roughness: 0.28,
    scale: 1.05,
    hasDualDaggers: true,
    hasHelmet: 'shadow-horns',
    weaponType: 'daggers'
  },

  // 3. MECH DESTROYER (Heavy Armor & Ground Attacks)
  'mech-destroyer': {
    id: 'mech-destroyer',
    name: 'MECH DESTROYER',
    archetype: 'Mech Destroyer',
    primaryColor: 0x451a03, // Heavy Industrial Rust Iron
    secondaryColor: 0xb45309, // Warning Hazard Gold
    trimColor: 0x1f2937, // Hydraulic Pistons
    glowColor: 0xf97316, // Molten Orange Core
    accentColor: '#f97316',
    metalness: 0.9,
    roughness: 0.25,
    scale: 1.28,
    hasHydraulicGauntlets: true,
    hasHelmet: 'siege-visor',
    weaponType: 'mech-gauntlet'
  },
  thanos: {
    id: 'thanos',
    name: 'MECH DESTROYER',
    archetype: 'Mech Destroyer',
    primaryColor: 0x3b0764,
    secondaryColor: 0xb45309,
    trimColor: 0x1f2937,
    glowColor: 0xd946ef,
    accentColor: '#d946ef',
    metalness: 0.88,
    roughness: 0.22,
    scale: 1.28,
    hasHydraulicGauntlets: true,
    hasHelmet: 'siege-visor',
    weaponType: 'mech-gauntlet'
  },

  'green-goblin': {
    id: 'green-goblin',
    name: 'CHAOS BOMBARDIER',
    archetype: 'Chaos Bombardier',
    primaryColor: 0x16a34a,
    secondaryColor: 0x7c3aed,
    trimColor: 0x0f172a,
    glowColor: 0xf97316,
    accentColor: '#22c55e',
    metalness: 0.75,
    roughness: 0.3,
    scale: 1.08,
    hasGlider: true,
    hasHelmet: 'goblin-mask',
    weaponType: 'bombs'
  }
};

// PBR Material Factory
function createPbrMaterial(color, metalness = 0.7, roughness = 0.3, emissive = 0x000000, emissiveIntensity = 0.3) {
  return new THREE.MeshStandardMaterial({
    color,
    metalness,
    roughness,
    emissive,
    emissiveIntensity: emissive !== 0x000000 ? emissiveIntensity : 0
  });
}

// ============================================================
// BUILD GENUINE FULL-BODY 3D HUMANOID FIGHTER (NO FLAT DECALS!)
// ============================================================
export function createArticulated3DFighter(character, isVillain = false) {
  const charId = character?.id;
  const config = isVillain
    ? (VILLAIN_CONFIGS[charId] || VILLAIN_CONFIGS['void-titan'])
    : (HERO_CONFIGS[charId] || (charId === 'dr-strange' ? HERO_CONFIGS['arcane-sorcerer'] : HERO_CONFIGS['web-ninja']));

  const s = config.scale || 1.0;
  const group = new THREE.Group();

  // Premium PBR Materials
  const primaryMat = createPbrMaterial(config.primaryColor, config.metalness, config.roughness);
  const secondaryMat = createPbrMaterial(config.secondaryColor, 0.88, 0.22);
  const trimMat = createPbrMaterial(config.trimColor, 0.7, 0.4);
  const glowMat = new THREE.MeshBasicMaterial({ color: config.glowColor });
  const darkJointMat = createPbrMaterial(0x0a0f1d, 0.5, 0.6);

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
    opacity: 0.65,
    side: THREE.DoubleSide
  });
  const footRing = new THREE.Mesh(footRingGeo, footRingMat);
  footRing.rotation.x = -Math.PI / 2;
  footRing.position.y = 0.02;
  group.add(footRing);

  // 3. SKELETON ROOT JOINT (Ground y = 0)
  const rootJoint = new THREE.Group();
  group.add(rootJoint);

  // 4. PELVIS / WAIST (y = 0.94 * s — Exact Anatomical Height, Feet Planted on Floor!)
  const pelvisJoint = new THREE.Group();
  pelvisJoint.position.y = 0.94 * s;
  rootJoint.add(pelvisJoint);

  // Sculpted Pelvic Hip Armor
  const pelvisGeo = new THREE.CylinderGeometry(0.24 * s, 0.19 * s, 0.22 * s, 14);
  const pelvisMesh = new THREE.Mesh(pelvisGeo, secondaryMat);
  pelvisJoint.add(pelvisMesh);

  // Armored Utility Belt
  const beltGeo = new THREE.CylinderGeometry(0.25 * s, 0.25 * s, 0.08 * s, 16);
  const beltMesh = new THREE.Mesh(beltGeo, primaryMat);
  beltMesh.position.y = 0.08 * s;
  pelvisJoint.add(beltMesh);

  const buckleGeo = new THREE.BoxGeometry(0.12 * s, 0.09 * s, 0.06 * s);
  const buckleMesh = new THREE.Mesh(buckleGeo, secondaryMat);
  buckleMesh.position.set(0, 0.08 * s, 0.25 * s);
  pelvisJoint.add(buckleMesh);

  // --- 5. FULLY ARTICULATED LOWER LIMBS (FEET REST EXACTLY ON FLOOR y = 0) ---
  const leftLegJoint = new THREE.Group();
  leftLegJoint.position.set(-0.16 * s, -0.06 * s, 0);
  pelvisJoint.add(leftLegJoint);

  const rightLegJoint = new THREE.Group();
  rightLegJoint.position.set(0.16 * s, -0.06 * s, 0);
  pelvisJoint.add(rightLegJoint);

  function buildAnatomicalLeg(parentJoint, isLeft) {
    // Muscular Upper Thigh (Quadriceps)
    const thighGeo = new THREE.CylinderGeometry(0.13 * s, 0.10 * s, 0.44 * s, 14);
    const thighMesh = new THREE.Mesh(thighGeo, primaryMat);
    thighMesh.position.y = -0.22 * s;
    parentJoint.add(thighMesh);

    // Lateral Armor Plate
    const tPlateGeo = new THREE.BoxGeometry(0.04 * s, 0.32 * s, 0.12 * s);
    const tPlate = new THREE.Mesh(tPlateGeo, secondaryMat);
    tPlate.position.set(isLeft ? -0.12 * s : 0.12 * s, -0.22 * s, 0);
    parentJoint.add(tPlate);

    // Knee Joint
    const kneeJoint = new THREE.Group();
    kneeJoint.position.y = -0.44 * s;
    parentJoint.add(kneeJoint);

    const kneeCopGeo = new THREE.BoxGeometry(0.11 * s, 0.12 * s, 0.08 * s);
    const kneeCop = new THREE.Mesh(kneeCopGeo, secondaryMat);
    kneeCop.position.z = 0.08 * s;
    kneeJoint.add(kneeCop);

    // Lower Leg / Shin & Calf
    const shinGeo = new THREE.CylinderGeometry(0.095 * s, 0.085 * s, 0.38 * s, 14);
    const shinMesh = new THREE.Mesh(shinGeo, primaryMat);
    shinMesh.position.y = -0.19 * s;
    kneeJoint.add(shinMesh);

    // Shin Greave Armor Plate
    const greaveGeo = new THREE.BoxGeometry(0.09 * s, 0.28 * s, 0.04 * s);
    const greave = new THREE.Mesh(greaveGeo, secondaryMat);
    greave.position.set(0, -0.18 * s, 0.08 * s);
    kneeJoint.add(greave);

    // Ankle Joint
    const ankleJoint = new THREE.Group();
    ankleJoint.position.y = -0.38 * s;
    kneeJoint.add(ankleJoint);

    // Armored Combat Boot (Planted firmly on floor at root y = 0!)
    const bootGeo = new THREE.BoxGeometry(0.14 * s, 0.10 * s, 0.26 * s);
    const bootMesh = new THREE.Mesh(bootGeo, secondaryMat);
    bootMesh.position.set(0, -0.05 * s, 0.05 * s);
    ankleJoint.add(bootMesh);

    return { kneeJoint, ankleJoint, bootMesh };
  }

  const leftLegParts = buildAnatomicalLeg(leftLegJoint, true);
  const rightLegParts = buildAnatomicalLeg(rightLegJoint, false);

  // Martial Stance leg flaring
  leftLegJoint.rotation.z = 0.04;
  rightLegJoint.rotation.z = -0.04;

  // --- 6. 3D SPINE & ABDOMINAL CORE ---
  const spineJoint = new THREE.Group();
  spineJoint.position.y = 0.12 * s;
  pelvisJoint.add(spineJoint);

  // Lumbar Abdomen Core
  const absCoreGeo = new THREE.CylinderGeometry(0.24 * s, 0.22 * s, 0.26 * s, 14);
  const absCoreMesh = new THREE.Mesh(absCoreGeo, darkJointMat);
  absCoreMesh.position.y = 0.13 * s;
  spineJoint.add(absCoreMesh);

  // 4 Sculpted 3D Abdominal Armor Plates
  for (let a = 0; a < 4; a++) {
    const abPlate = new THREE.Mesh(
      new THREE.BoxGeometry(0.18 * s, 0.05 * s, 0.05 * s),
      secondaryMat
    );
    abPlate.position.set(0, 0.05 * s + a * 0.055 * s, 0.20 * s);
    spineJoint.add(abPlate);
  }

  // --- 7. V-TAPER PECTORAL CHEST HULL (y = 0.26 * s above spine) ---
  const chestJoint = new THREE.Group();
  chestJoint.position.y = 0.26 * s;
  spineJoint.add(chestJoint);

  // Anatomical V-Taper Torso Armor
  const chestGeo = new THREE.BoxGeometry(0.68 * s, 0.46 * s, 0.36 * s);
  const chestMesh = new THREE.Mesh(chestGeo, primaryMat);
  chestMesh.position.y = 0.20 * s;
  chestJoint.add(chestMesh);

  // Left & Right Sculpted Pectoral Muscle Plates
  const pecGeo = new THREE.BoxGeometry(0.28 * s, 0.20 * s, 0.07 * s);
  const leftPec = new THREE.Mesh(pecGeo, secondaryMat);
  leftPec.position.set(-0.16 * s, 0.24 * s, 0.19 * s);
  chestJoint.add(leftPec);

  const rightPec = new THREE.Mesh(pecGeo, secondaryMat);
  rightPec.position.set(0.16 * s, 0.24 * s, 0.19 * s);
  chestJoint.add(rightPec);

  // CHARACTER UNIQUE CHEST DETAILS (GENUINE 3D EMISSIVE CORES!)

  // A. Armored Tech Hero: Multi-Ring Arc Reactor
  if (config.hasReactor) {
    const reactorGroup = new THREE.Group();
    const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.10 * s, 0.10 * s, 0.04 * s, 18), secondaryMat);
    rim.rotation.x = Math.PI / 2;
    reactorGroup.add(rim);

    const innerGlow = new THREE.Mesh(new THREE.CircleGeometry(0.075 * s, 16), glowMat);
    innerGlow.position.z = 0.025 * s;
    reactorGroup.add(innerGlow);

    const reactorLight = new THREE.PointLight(0x00f3ff, 2.5, 3.5 * s);
    reactorLight.position.set(0, 0, 0.15 * s);
    reactorGroup.add(reactorLight);

    reactorGroup.position.set(0, 0.24 * s, 0.21 * s);
    chestJoint.add(reactorGroup);
  }

  // B. Thunder Warrior: 4 Asgardian Silver Armor Roundels
  if (config.hasHammer) {
    const discGeo = new THREE.CylinderGeometry(0.07 * s, 0.07 * s, 0.03 * s, 16);
    discGeo.rotateX(Math.PI / 2);
    const d1 = new THREE.Mesh(discGeo, secondaryMat); d1.position.set(-0.16 * s, 0.28 * s, 0.20 * s);
    const d2 = new THREE.Mesh(discGeo, secondaryMat); d2.position.set(0.16 * s, 0.28 * s, 0.20 * s);
    const d3 = new THREE.Mesh(discGeo, secondaryMat); d3.position.set(-0.16 * s, 0.15 * s, 0.20 * s);
    const d4 = new THREE.Mesh(discGeo, secondaryMat); d4.position.set(0.16 * s, 0.15 * s, 0.20 * s);
    chestJoint.add(d1); chestJoint.add(d2); chestJoint.add(d3); chestJoint.add(d4);
  }

  // C. Shield Defender: Tactical Combat Harness & Star Medallion
  if (config.hasShield) {
    const starMedallion = new THREE.Mesh(new THREE.CylinderGeometry(0.09 * s, 0.09 * s, 0.03 * s, 5), secondaryMat);
    starMedallion.rotation.x = Math.PI / 2;
    starMedallion.position.set(0, 0.24 * s, 0.20 * s);
    chestJoint.add(starMedallion);

    const strap1 = new THREE.Mesh(new THREE.BoxGeometry(0.48 * s, 0.04 * s, 0.03 * s), trimMat);
    strap1.rotation.z = 0.45; strap1.position.set(0, 0.24 * s, 0.19 * s);
    const strap2 = new THREE.Mesh(new THREE.BoxGeometry(0.48 * s, 0.04 * s, 0.03 * s), trimMat);
    strap2.rotation.z = -0.45; strap2.position.set(0, 0.24 * s, 0.19 * s);
    chestJoint.add(strap1); chestJoint.add(strap2);
  }

  // D. Mystic Portal Mage: Eye of Agamotto Talisman
  if (config.hasEyeOfAgamotto) {
    const eyeAmulet = new THREE.Mesh(new THREE.CylinderGeometry(0.09 * s, 0.09 * s, 0.04 * s, 16), secondaryMat);
    eyeAmulet.rotation.x = Math.PI / 2;
    eyeAmulet.position.set(0, 0.36 * s, 0.20 * s);
    chestJoint.add(eyeAmulet);

    const eyeGem = new THREE.Mesh(new THREE.SphereGeometry(0.045 * s, 10, 10), new THREE.MeshBasicMaterial({ color: 0x22c55e }));
    eyeGem.position.set(0, 0.36 * s, 0.23 * s);
    chestJoint.add(eyeGem);
  }

  // E. VOID OVERLORD: Volatile Dark-Matter Singularity Core & Fissures
  if (config.hasVoidCore) {
    const voidCoreGroup = new THREE.Group();
    const coreRim = new THREE.Mesh(
      new THREE.CylinderGeometry(0.16 * s, 0.16 * s, 0.06 * s, 18),
      createPbrMaterial(0x1e1b4b, 0.95, 0.15)
    );
    coreRim.rotation.x = Math.PI / 2;
    voidCoreGroup.add(coreRim);

    const coreSphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.11 * s, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xa855f7 })
    );
    coreSphere.position.z = 0.03 * s;
    voidCoreGroup.add(coreSphere);

    const coreLight = new THREE.PointLight(0xa855f7, 3.2, 4.5 * s);
    coreLight.position.set(0, 0, 0.15 * s);
    voidCoreGroup.add(coreLight);

    voidCoreGroup.position.set(0, 0.24 * s, 0.21 * s);
    chestJoint.add(voidCoreGroup);
  }

  // Cloak / Cape Back Mesh
  let capeMesh = null;
  if (config.hasCape || config.hasCloak) {
    const capeGeo = new THREE.PlaneGeometry(0.68 * s, 1.25 * s, 8, 12);
    const capeMat = new THREE.MeshStandardMaterial({
      color: config.capeColor || 0x991b1b,
      roughness: 0.7,
      metalness: 0.1,
      side: THREE.DoubleSide
    });
    capeMesh = new THREE.Mesh(capeGeo, capeMat);
    capeMesh.position.set(0, -0.25 * s, -0.22 * s);
    capeMesh.rotation.x = 0.08;
    chestJoint.add(capeMesh);
  }

  // --- 8. 3D NECK & ANATOMICAL HEAD / HELMET ---
  const neckJoint = new THREE.Group();
  neckJoint.position.set(0, 0.45 * s, 0);
  chestJoint.add(neckJoint);

  const neckGeo = new THREE.CylinderGeometry(0.11 * s, 0.13 * s, 0.12 * s, 12);
  const neckMesh = new THREE.Mesh(neckGeo, darkJointMat);
  neckMesh.position.y = 0.04 * s;
  neckJoint.add(neckMesh);

  const headJoint = new THREE.Group();
  headJoint.position.y = 0.16 * s;
  neckJoint.add(headJoint);

  const headGeo = new THREE.BoxGeometry(0.28 * s, 0.32 * s, 0.30 * s);
  const headMesh = new THREE.Mesh(headGeo, primaryMat);
  headJoint.add(headMesh);

  // Distinct Fitted 3D Helmets & Masks
  if (config.hasHelmet === 'tech-helmet') {
    const faceplate = new THREE.Mesh(new THREE.BoxGeometry(0.24 * s, 0.26 * s, 0.06 * s), secondaryMat);
    faceplate.position.set(0, -0.02 * s, 0.15 * s);
    headJoint.add(faceplate);

    // Glowing Cyan Eyes
    const eyeGeo = new THREE.BoxGeometry(0.07 * s, 0.025 * s, 0.02 * s);
    const eyeL = new THREE.Mesh(eyeGeo, glowMat); eyeL.position.set(-0.06 * s, 0.02 * s, 0.19 * s);
    const eyeR = new THREE.Mesh(eyeGeo, glowMat); eyeR.position.set(0.06 * s, 0.02 * s, 0.19 * s);
    headJoint.add(eyeL); headJoint.add(eyeR);
  } else if (config.hasHelmet === 'winged-helmet') {
    // Silver Wings
    const wingGeo = new THREE.ConeGeometry(0.06 * s, 0.28 * s, 4);
    const wingL = new THREE.Mesh(wingGeo, secondaryMat);
    wingL.position.set(-0.18 * s, 0.12 * s, 0); wingL.rotation.z = 0.65;
    const wingR = new THREE.Mesh(wingGeo, secondaryMat);
    wingR.position.set(0.18 * s, 0.12 * s, 0); wingR.rotation.z = -0.65;
    headJoint.add(wingL); headJoint.add(wingR);

    // Lightning Eyes
    const eyeGeo = new THREE.SphereGeometry(0.025 * s, 8, 8);
    const eyeL = new THREE.Mesh(eyeGeo, glowMat); eyeL.position.set(-0.06 * s, 0.02 * s, 0.16 * s);
    const eyeR = new THREE.Mesh(eyeGeo, glowMat); eyeR.position.set(0.06 * s, 0.02 * s, 0.16 * s);
    headJoint.add(eyeL); headJoint.add(eyeR);
  } else if (config.hasHelmet === 'combat-helmet') {
    const starDecal = new THREE.Mesh(new THREE.CircleGeometry(0.045 * s, 5), secondaryMat);
    starDecal.position.set(0, 0.08 * s, 0.16 * s);
    headJoint.add(starDecal);

    const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.20 * s, 0.10 * s, 0.14 * s), createPbrMaterial(0xdfa084, 0.1, 0.6));
    jaw.position.set(0, -0.12 * s, 0.10 * s);
    headJoint.add(jaw);
  } else if (config.hasHelmet === 'web-mask') {
    // Angular White Eyes with Dark Rim
    const eyeShape = new THREE.BoxGeometry(0.085 * s, 0.055 * s, 0.02 * s);
    const whiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const eyeL = new THREE.Mesh(eyeShape, whiteMat); eyeL.position.set(-0.07 * s, 0.02 * s, 0.16 * s); eyeL.rotation.z = -0.2;
    const eyeR = new THREE.Mesh(eyeShape, whiteMat); eyeR.position.set(0.07 * s, 0.02 * s, 0.16 * s); eyeR.rotation.z = 0.2;
    headJoint.add(eyeL); headJoint.add(eyeR);
  } else if (config.hasHelmet === 'void-crest') {
    // Heavy Horned Obsidian War Crest
    const crest = new THREE.Mesh(new THREE.BoxGeometry(0.38 * s, 0.18 * s, 0.35 * s), createPbrMaterial(0x0a0a14, 0.95, 0.15));
    crest.position.y = 0.18 * s;
    headJoint.add(crest);

    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.24 * s, 0.045 * s, 0.06 * s), glowMat);
    visor.position.set(0, 0.03 * s, 0.17 * s);
    headJoint.add(visor);

    const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.30 * s, 0.14 * s, 0.24 * s), createPbrMaterial(0x1e1b4b, 0.85, 0.25));
    jaw.position.set(0, -0.16 * s, 0.11 * s);
    headJoint.add(jaw);
  } else if (config.hasHelmet === 'shadow-horns') {
    const hornGeo = new THREE.CylinderGeometry(0.02 * s, 0.05 * s, 0.42 * s, 10);
    const hornL = new THREE.Mesh(hornGeo, secondaryMat); hornL.position.set(-0.12 * s, 0.25 * s, 0.06 * s); hornL.rotation.set(-0.3, 0, -0.4);
    const hornR = new THREE.Mesh(hornGeo, secondaryMat); hornR.position.set(0.12 * s, 0.25 * s, 0.06 * s); hornR.rotation.set(-0.3, 0, 0.4);
    headJoint.add(hornL); headJoint.add(hornR);
  }

  // --- 9. 3D UPPER LIMBS & WEAPON SOCKETS ---
  const leftShoulder = new THREE.Group();
  leftShoulder.position.set(-0.42 * s, 0.34 * s, 0);
  chestJoint.add(leftShoulder);

  const rightShoulder = new THREE.Group();
  rightShoulder.position.set(0.42 * s, 0.34 * s, 0);
  chestJoint.add(rightShoulder);

  function buildAnatomicalArm(parentShoulder, isLeft) {
    // Curved Pauldron / Shoulder Armor
    const pauldronGeo = new THREE.SphereGeometry(0.18 * s, 14, 12, 0, Math.PI * 2, 0, Math.PI * 0.6);
    const pauldron = new THREE.Mesh(pauldronGeo, secondaryMat);
    pauldron.position.y = 0.04 * s;
    parentShoulder.add(pauldron);

    // Bicep / Upper Arm
    const bicepGeo = new THREE.CylinderGeometry(0.10 * s, 0.09 * s, 0.34 * s, 14);
    const bicepMesh = new THREE.Mesh(bicepGeo, primaryMat);
    bicepMesh.position.y = -0.19 * s;
    parentShoulder.add(bicepMesh);

    // Elbow Joint
    const elbowJoint = new THREE.Group();
    elbowJoint.position.y = -0.36 * s;
    parentShoulder.add(elbowJoint);

    // Forearm Gauntlet
    const forearmGeo = new THREE.CylinderGeometry(0.095 * s, 0.08 * s, 0.32 * s, 14);
    const forearmMesh = new THREE.Mesh(forearmGeo, primaryMat);
    forearmMesh.position.y = -0.16 * s;
    elbowJoint.add(forearmMesh);

    // Wrist Joint & Hand
    const wristJoint = new THREE.Group();
    wristJoint.position.y = -0.32 * s;
    elbowJoint.add(wristJoint);

    // Hand & Palm with 5 articulated fingers
    const handGeo = new THREE.BoxGeometry(0.08 * s, 0.10 * s, 0.07 * s);
    const handMesh = new THREE.Mesh(handGeo, secondaryMat);
    handMesh.position.y = -0.05 * s;
    wristJoint.add(handMesh);

    // Palm Repulsor Light Node for Tech Hero
    if (config.hasRepulsors) {
      const rep = new THREE.Mesh(new THREE.CircleGeometry(0.025 * s, 12), glowMat);
      rep.position.set(0, -0.05 * s, 0.04 * s);
      wristJoint.add(rep);
    }

    // WEAPON SOCKET (Socket attached to wrist/hand!)
    const weaponSocket = new THREE.Group();
    weaponSocket.position.set(0, -0.06 * s, 0.04 * s);
    wristJoint.add(weaponSocket);

    return { elbowJoint, wristJoint, weaponSocket };
  }

  const leftArmParts = buildAnatomicalArm(leftShoulder, true);
  const rightArmParts = buildAnatomicalArm(rightShoulder, false);

  // WEAPONS ATTACHED DIRECTLY TO SKELETAL SOCKETS!

  // 1. Magnetic Mjolnir Hammer (Attached to Right Hand Socket!)
  let hammerMesh = null;
  if (config.hasHammer) {
    const hGroup = new THREE.Group();
    const hHead = new THREE.Mesh(new THREE.BoxGeometry(0.24 * s, 0.18 * s, 0.15 * s), secondaryMat);
    const hHandle = new THREE.Mesh(new THREE.CylinderGeometry(0.025 * s, 0.025 * s, 0.42 * s), trimMat);
    hHandle.position.y = -0.21 * s;
    hGroup.add(hHead);
    hGroup.add(hHandle);
    rightArmParts.weaponSocket.add(hGroup);
    hammerMesh = hGroup;
  }

  // 2. Vibranium Kinetic Shield (Attached to Left Forearm Socket!)
  let shieldMesh = null;
  if (config.hasShield) {
    const sGroup = new THREE.Group();
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.38 * s, 0.38 * s, 0.04 * s, 28), primaryMat);
    disc.rotation.x = Math.PI / 2;
    sGroup.add(disc);

    const rim = new THREE.Mesh(new THREE.RingGeometry(0.26 * s, 0.38 * s, 28), secondaryMat);
    rim.position.z = 0.025 * s;
    sGroup.add(rim);

    const centerStar = new THREE.Mesh(new THREE.CircleGeometry(0.10 * s, 5), secondaryMat);
    centerStar.position.z = 0.03 * s;
    sGroup.add(centerStar);

    leftArmParts.elbowJoint.add(sGroup);
    sGroup.position.set(-0.12 * s, -0.16 * s, 0.12 * s);
    shieldMesh = sGroup;
  }

  // 3. Eldritch Mandala Rings (Attached to both wrists for Mystic Mage!)
  let mandalas = [];
  if (config.hasMandalas) {
    const mGeo = new THREE.RingGeometry(0.18 * s, 0.22 * s, 16);
    const mMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b, side: THREE.DoubleSide });
    const mL = new THREE.Mesh(mGeo, mMat); leftArmParts.wristJoint.add(mL);
    const mR = new THREE.Mesh(mGeo, mMat); rightArmParts.wristJoint.add(mR);
    mandalas = [mL, mR];
  }

  // 4. Void Overlord Colossal Gauntlets
  if (config.hasVoidGauntlets) {
    const gauntGeo = new THREE.BoxGeometry(0.20 * s, 0.24 * s, 0.18 * s);
    const gMat = createPbrMaterial(0x1e1b4b, 0.9, 0.2);
    const gL = new THREE.Mesh(gauntGeo, gMat); gL.position.y = -0.06 * s; leftArmParts.wristJoint.add(gL);
    const gR = new THREE.Mesh(gauntGeo, gMat); gR.position.y = -0.06 * s; rightArmParts.wristJoint.add(gR);

    // Glowing Violet Knuckle Conduits
    const knuckL = new THREE.Mesh(new THREE.BoxGeometry(0.18 * s, 0.04 * s, 0.04 * s), glowMat); knuckL.position.set(0, -0.14 * s, 0.10 * s); leftArmParts.wristJoint.add(knuckL);
    const knuckR = new THREE.Mesh(new THREE.BoxGeometry(0.18 * s, 0.04 * s, 0.04 * s), glowMat); knuckR.position.set(0, -0.14 * s, 0.10 * s); rightArmParts.wristJoint.add(knuckR);
  }

  // Guard Arm Pose
  leftShoulder.rotation.x = 0.35; leftShoulder.rotation.z = 0.25;
  leftArmParts.elbowJoint.rotation.x = -0.75;
  rightShoulder.rotation.x = 0.25; rightShoulder.rotation.z = -0.25;
  rightArmParts.elbowJoint.rotation.x = -0.65;

  return {
    group,
    config,
    rootJoint,
    pelvisJoint,
    spineJoint,
    chestJoint,
    neckJoint,
    headJoint,
    leftShoulder,
    rightShoulder,
    leftElbow: leftArmParts.elbowJoint,
    rightElbow: rightArmParts.elbowJoint,
    leftWrist: leftArmParts.wristJoint,
    rightWrist: rightArmParts.wristJoint,
    leftLegJoint,
    rightLegJoint,
    leftKnee: leftLegParts.kneeJoint,
    rightKnee: rightLegParts.kneeJoint,
    capeMesh,
    hammerMesh,
    shieldMesh,
    mandalas
  };
}

// ============================================================
// ============================================================
// FULL COMBAT KINEMATIC SKELETAL ANIMATIONS (AUTHENTIC MARTIAL ARTS!)
// ============================================================
export function animateArticulated3DFighter(rig, state, time, delta, elapsed, isHero, activeGesture) {
  if (!rig) return;

  const {
    config = {},
    pelvisJoint,
    spineJoint,
    chestJoint,
    neckJoint,
    headJoint,
    leftShoulder,
    rightShoulder,
    leftElbow,
    rightElbow,
    leftWrist,
    rightWrist,
    leftLegJoint,
    rightLegJoint,
    leftKnee,
    rightKnee,
    capeMesh,
    hammerMesh,
    shieldMesh,
    mandalas
  } = rig;

  const s = config.scale || 1.0;
  const id = config.id || '';
  const weaponType = config.weaponType || '';

  // Determine Fighter Archetype
  const isTech = id === 'ironman' || id === 'plasma-ranger' || weaponType === 'repulsor';
  const isThunder = id === 'thor' || id === 'storm-guardian' || weaponType === 'hammer';
  const isShield = id === 'captain-america' || id === 'shield-sentinel' || weaponType === 'shield';
  const isWeb = id === 'spiderman' || id === 'web-ninja' || weaponType === 'web';
  const isMage = id === 'doctor-strange' || id === 'dr-strange' || id === 'arcane-sorcerer' || weaponType === 'mandala';
  const isVoid = id === 'void-titan' || id === 'void-overlord';
  const isAssassin = id === 'shadow-assassin' || id === 'loki';
  const isMech = id === 'mech-destroyer';

  // --- SECONDARY MESH PHYSICS & AURA EFFECTS ---
  // 1. Cape wind aerodynamic simulation
  if (capeMesh) {
    const isMoving = state === 'punch' || state === 'ultimate' || state === 'dodge';
    const capeSpeed = isMoving ? 9.0 : 3.8;
    const capeAmp = isMoving ? 0.32 : 0.08;
    capeMesh.rotation.x = 0.12 + Math.sin(elapsed * capeSpeed) * capeAmp;
    capeMesh.rotation.y = Math.cos(elapsed * (capeSpeed * 0.7)) * (capeAmp * 0.55);
    capeMesh.rotation.z = Math.sin(elapsed * 2.8) * 0.05;
  }

  // 2. Mystic Mandala Rings: High-velocity counter-rotation
  if (mandalas && mandalas.length > 0) {
    mandalas.forEach((m, idx) => {
      const spinMult = state === 'punch' ? 16 : state === 'ultimate' ? 24 : 4.5;
      m.rotation.z += delta * (idx === 0 ? spinMult : -spinMult);
      const pulse = 1.0 + Math.sin(elapsed * 6 + idx) * (state === 'ultimate' ? 0.3 : 0.08);
      m.scale.set(pulse, pulse, pulse);
    });
  }

  // 3. Hammer Weapon Dynamic Micro-Torque
  if (hammerMesh) {
    if (state === 'idle') {
      hammerMesh.rotation.z = Math.sin(elapsed * 1.8) * 0.04;
    }
  }

  // Baseline Pelvis Floor Alignment
  const basePelvisY = 0.94 * s;

  // ============================================================
  // 1. CHARACTER-SPECIFIC AUTHENTIC IDLE STANCES
  // ============================================================
  if (state === 'idle') {
    const breath = Math.sin(elapsed * 2.2);
    const weightShift = Math.sin(elapsed * 1.4);

    if (isTech) {
      // ARMORED TECH HERO: Micro-levitation thruster hover!
      const hover = Math.sin(elapsed * 3.8);
      pelvisJoint.position.y = basePelvisY + 0.04 + hover * 0.02;
      spineJoint.rotation.x = 0.05 + breath * 0.02;
      chestJoint.rotation.x = 0.03 + breath * 0.02;
      chestJoint.rotation.y = weightShift * 0.02;
      headJoint.rotation.x = -0.04;
      headJoint.rotation.y = Math.sin(elapsed * 1.2) * 0.08;

      leftShoulder.rotation.x = 0.28 + breath * 0.02;
      leftShoulder.rotation.z = 0.25;
      leftElbow.rotation.x = -0.55;
      if (leftWrist) leftWrist.rotation.x = -0.4;

      rightShoulder.rotation.x = 0.28 - breath * 0.02;
      rightShoulder.rotation.z = -0.25;
      rightElbow.rotation.x = -0.55;
      if (rightWrist) rightWrist.rotation.x = -0.4;

      leftLegJoint.rotation.x = 0.12;
      rightLegJoint.rotation.x = 0.08;
      leftKnee.rotation.x = 0.2;
      rightKnee.rotation.x = 0.16;
    } else if (isThunder) {
      // THUNDER WARRIOR: Wide, grounded Asgardian warrior stance!
      pelvisJoint.position.y = basePelvisY + breath * 0.015;
      pelvisJoint.rotation.y = isHero ? 0.15 : -0.15;
      spineJoint.rotation.x = breath * 0.025;
      chestJoint.rotation.x = breath * 0.03;
      chestJoint.rotation.y = isHero ? 0.1 : -0.1;
      headJoint.rotation.y = isHero ? -0.08 : 0.08;

      rightShoulder.rotation.x = 0.22 - breath * 0.02;
      rightShoulder.rotation.z = -0.25;
      rightElbow.rotation.x = -0.5;
      if (rightWrist) rightWrist.rotation.x = 0.25;

      leftShoulder.rotation.x = 0.5 + breath * 0.03;
      leftShoulder.rotation.z = 0.35;
      leftElbow.rotation.x = -1.1;

      leftLegJoint.rotation.z = 0.18;
      rightLegJoint.rotation.z = -0.18;
      leftLegJoint.rotation.x = 0.05;
      rightLegJoint.rotation.x = -0.05;
      leftKnee.rotation.x = 0.08;
      rightKnee.rotation.x = 0.08;
    } else if (isShield) {
      // SHIELD DEFENDER: Tactical military boxing guard!
      const bounce = Math.abs(Math.sin(elapsed * 3.2)) * 0.018;
      pelvisJoint.position.y = basePelvisY - 0.03 + bounce;
      spineJoint.rotation.x = 0.08 + breath * 0.02;
      chestJoint.rotation.x = 0.06;
      chestJoint.rotation.y = isHero ? 0.2 : -0.2;

      leftShoulder.rotation.x = 0.65;
      leftShoulder.rotation.z = 0.38;
      leftElbow.rotation.x = -1.35;

      rightShoulder.rotation.x = 0.35;
      rightShoulder.rotation.z = -0.2;
      rightElbow.rotation.x = -1.2;

      leftLegJoint.rotation.x = -0.15;
      rightLegJoint.rotation.x = 0.2;
      leftKnee.rotation.x = 0.28;
      rightKnee.rotation.x = 0.18;
    } else if (isWeb) {
      // AGILE WEB HERO: Low iconic spider crouch!
      pelvisJoint.position.y = basePelvisY - 0.16 + breath * 0.01;
      spineJoint.rotation.x = 0.35;
      chestJoint.rotation.x = 0.28;
      headJoint.rotation.x = -0.3;
      headJoint.rotation.z = Math.sin(elapsed * 1.5) * 0.06;

      leftShoulder.rotation.x = 0.95;
      leftShoulder.rotation.z = 0.45;
      leftElbow.rotation.x = -0.85;

      rightShoulder.rotation.x = 0.45;
      rightShoulder.rotation.z = -0.35;
      rightElbow.rotation.x = -1.1;
      if (rightWrist) rightWrist.rotation.x = -0.7;

      leftLegJoint.rotation.z = 0.42;
      rightLegJoint.rotation.z = -0.42;
      leftLegJoint.rotation.x = -0.2;
      rightLegJoint.rotation.x = 0.25;
      leftKnee.rotation.x = 0.75;
      rightKnee.rotation.x = 0.85;
    } else if (isMage) {
      // MYSTIC PORTAL MAGE: Meditative floating levitation!
      const floatAnim = Math.sin(elapsed * 2.0);
      pelvisJoint.position.y = basePelvisY + 0.14 + floatAnim * 0.03;
      spineJoint.rotation.x = -0.05 + breath * 0.02;
      chestJoint.rotation.x = -0.03;
      headJoint.rotation.x = 0.02;

      leftShoulder.rotation.x = 0.3 + floatAnim * 0.04;
      leftShoulder.rotation.z = 0.45;
      leftElbow.rotation.x = -0.8;
      if (leftWrist) leftWrist.rotation.z = Math.sin(elapsed * 2.5) * 0.2;

      rightShoulder.rotation.x = 0.3 - floatAnim * 0.04;
      rightShoulder.rotation.z = -0.45;
      rightElbow.rotation.x = -0.8;
      if (rightWrist) rightWrist.rotation.z = -Math.sin(elapsed * 2.5) * 0.2;

      leftLegJoint.rotation.x = 0.35;
      rightLegJoint.rotation.x = 0.35;
      leftLegJoint.rotation.z = 0.2;
      rightLegJoint.rotation.z = -0.2;
      leftKnee.rotation.x = 0.65;
      rightKnee.rotation.x = 0.65;
    } else if (isVoid || !isHero) {
      // VOID OVERLORD (BOSS): Colossal, imposing dark titan stance!
      const bossBreath = Math.sin(elapsed * 1.8);
      pelvisJoint.position.y = basePelvisY + bossBreath * 0.025;
      spineJoint.rotation.x = 0.06;
      chestJoint.rotation.x = 0.08 + bossBreath * 0.04;
      headJoint.rotation.x = -0.05;

      leftShoulder.rotation.x = 0.35 + bossBreath * 0.03;
      leftShoulder.rotation.z = 0.3;
      leftElbow.rotation.x = -0.65;
      if (leftWrist) leftWrist.rotation.x = Math.sin(elapsed * 2) * 0.15;

      rightShoulder.rotation.x = 0.35 - bossBreath * 0.03;
      rightShoulder.rotation.z = -0.3;
      rightElbow.rotation.x = -0.65;
      if (rightWrist) rightWrist.rotation.x = -Math.sin(elapsed * 2) * 0.15;

      leftLegJoint.rotation.z = 0.15;
      rightLegJoint.rotation.z = -0.15;
      leftKnee.rotation.x = 0.06;
      rightKnee.rotation.x = 0.06;
    } else {
      pelvisJoint.position.y = basePelvisY + breath * 0.015;
      spineJoint.rotation.x = breath * 0.02;
      chestJoint.rotation.x = breath * 0.03;
      chestJoint.rotation.y = weightShift * 0.03;
      headJoint.rotation.x = -breath * 0.02;

      leftShoulder.rotation.x = 0.35 + breath * 0.03;
      leftElbow.rotation.x = -0.75 - breath * 0.04;
      rightShoulder.rotation.x = 0.25 - breath * 0.03;
      rightElbow.rotation.x = -0.65 + breath * 0.04;

      leftLegJoint.rotation.x = 0.04 - breath * 0.02;
      rightLegJoint.rotation.x = -0.04 + breath * 0.02;
      leftKnee.rotation.x = breath * 0.03;
      rightKnee.rotation.x = -breath * 0.03;
    }
  }

  // ============================================================
  // 2. CHARACTER-SPECIFIC POWER ATTACKS
  // ============================================================
  else if (state === 'punch') {
    const p = Math.min(1.0, time / 0.44);

    if (isTech) {
      // ARMORED TECH HERO: Dual Repulsor Cannon Shot!
      if (p < 0.35) {
        const f = Math.sin((p / 0.35) * (Math.PI / 2));
        pelvisJoint.position.y = basePelvisY;
        chestJoint.rotation.y = isHero ? f * 0.35 : -f * 0.35;
        rightShoulder.rotation.x = -f * 1.57;
        rightShoulder.rotation.z = -0.1;
        rightElbow.rotation.x = 0;
        if (rightWrist) rightWrist.rotation.x = -f * 1.35;
        leftShoulder.rotation.x = 0.4;
        leftElbow.rotation.x = -1.0;
        headJoint.rotation.y = isHero ? -f * 0.1 : f * 0.1;
      } else if (p < 0.55) {
        const kickback = Math.sin(((p - 0.35) / 0.2) * Math.PI) * 0.2;
        chestJoint.rotation.x = -kickback;
        rightShoulder.rotation.x = -1.57 + kickback * 0.5;
        if (rightWrist) rightWrist.rotation.x = -1.35;
      } else {
        const ease = 1.0 - Math.sin(((p - 0.55) / 0.45) * (Math.PI / 2));
        chestJoint.rotation.y = isHero ? ease * 0.35 : -ease * 0.35;
        rightShoulder.rotation.x = -ease * 1.57 + (1 - ease) * 0.28;
        rightElbow.rotation.x = (1 - ease) * -0.55;
        if (rightWrist) rightWrist.rotation.x = -ease * 1.35;
      }
    } else if (isThunder) {
      // THUNDER WARRIOR: 2-Handed Centrifugal Mjolnir Hammer Swing!
      if (p < 0.32) {
        const f = Math.sin((p / 0.32) * (Math.PI / 2));
        pelvisJoint.rotation.y = isHero ? -f * 0.55 : f * 0.55;
        chestJoint.rotation.y = isHero ? -f * 0.75 : f * 0.75;
        rightShoulder.rotation.x = f * 1.1;
        rightShoulder.rotation.z = -0.5;
        rightElbow.rotation.x = -0.3;
        leftShoulder.rotation.x = -f * 0.4;
        leftElbow.rotation.x = -0.2;
        leftKnee.rotation.x = f * 0.3;
      } else if (p < 0.52) {
        const f = (p - 0.32) / 0.20;
        const swing = Math.sin(f * (Math.PI / 2));
        pelvisJoint.rotation.y = isHero ? (-0.55 + swing * 1.25) : (0.55 - swing * 1.25);
        chestJoint.rotation.y = isHero ? (-0.75 + swing * 1.55) : (0.75 - swing * 1.55);
        rightShoulder.rotation.x = 1.1 - swing * 2.7;
        rightShoulder.rotation.z = 0.3;
        rightElbow.rotation.x = -swing * 0.2;
        leftShoulder.rotation.x = 0.6;
      } else {
        const ease = 1.0 - Math.sin(((p - 0.52) / 0.48) * (Math.PI / 2));
        pelvisJoint.rotation.y = isHero ? ease * 0.7 : -ease * 0.7;
        chestJoint.rotation.y = isHero ? ease * 0.8 : -ease * 0.8;
        rightShoulder.rotation.x = -1.6 * ease + (1 - ease) * 0.22;
        rightElbow.rotation.x = -0.5 * (1 - ease);
      }
    } else if (isShield) {
      // SHIELD DEFENDER: Shield Charge Slam & Jab!
      if (p < 0.38) {
        const f = Math.sin((p / 0.38) * (Math.PI / 2));
        pelvisJoint.rotation.y = isHero ? f * 0.4 : -f * 0.4;
        chestJoint.rotation.y = isHero ? f * 0.5 : -f * 0.5;
        leftShoulder.rotation.x = -f * 1.35;
        leftElbow.rotation.x = -f * 0.4;
        rightShoulder.rotation.x = 0.5;
        rightElbow.rotation.x = -1.2;
      } else if (p < 0.56) {
        leftShoulder.rotation.x = -1.35;
        rightShoulder.rotation.x = -1.2;
        rightElbow.rotation.x = 0.1;
      } else {
        const ease = 1.0 - Math.sin(((p - 0.56) / 0.44) * (Math.PI / 2));
        leftShoulder.rotation.x = -ease * 1.35 + (1 - ease) * 0.65;
        rightShoulder.rotation.x = -ease * 1.2 + (1 - ease) * 0.35;
        chestJoint.rotation.y = isHero ? ease * 0.5 : -ease * 0.5;
      }
    } else if (isWeb) {
      // AGILE WEB HERO: Acrobatic Flying Web-Zip Double Kick!
      if (p < 0.42) {
        const f = Math.sin((p / 0.42) * (Math.PI / 2));
        pelvisJoint.position.y = basePelvisY + f * 0.45;
        chestJoint.rotation.x = -f * 0.45;
        leftLegJoint.rotation.x = -f * 1.6;
        rightLegJoint.rotation.x = -f * 1.5;
        leftKnee.rotation.x = 0.05;
        rightKnee.rotation.x = 0.05;
        leftShoulder.rotation.x = 0.6;
        rightShoulder.rotation.x = 0.6;
      } else if (p < 0.6) {
        pelvisJoint.position.y = basePelvisY + 0.45;
        leftLegJoint.rotation.x = -1.6;
        rightLegJoint.rotation.x = -1.5;
      } else {
        const ease = 1.0 - Math.sin(((p - 0.6) / 0.4) * (Math.PI / 2));
        pelvisJoint.position.y = basePelvisY + ease * 0.45 - (1 - ease) * 0.16;
        leftLegJoint.rotation.x = -ease * 1.6 + (1 - ease) * -0.2;
        rightLegJoint.rotation.x = -ease * 1.5 + (1 - ease) * 0.25;
        leftKnee.rotation.x = (1 - ease) * 0.75;
        rightKnee.rotation.x = (1 - ease) * 0.85;
      }
    } else if (isMage) {
      // MYSTIC MAGE: Dual Concentric Mandala Energy Thrust!
      if (p < 0.35) {
        const f = Math.sin((p / 0.35) * (Math.PI / 2));
        leftShoulder.rotation.x = -f * 1.5;
        rightShoulder.rotation.x = -f * 1.5;
        leftShoulder.rotation.z = -f * 0.2;
        rightShoulder.rotation.z = f * 0.2;
        leftElbow.rotation.x = 0;
        rightElbow.rotation.x = 0;
        if (leftWrist) leftWrist.rotation.x = -f * 1.2;
        if (rightWrist) rightWrist.rotation.x = -f * 1.2;
      } else if (p < 0.55) {
        chestJoint.rotation.x = -0.15;
        leftShoulder.rotation.x = -1.5;
        rightShoulder.rotation.x = -1.5;
      } else {
        const ease = 1.0 - Math.sin(((p - 0.55) / 0.45) * (Math.PI / 2));
        leftShoulder.rotation.x = -ease * 1.5 + (1 - ease) * 0.3;
        rightShoulder.rotation.x = -ease * 1.5 + (1 - ease) * 0.3;
        chestJoint.rotation.x = -ease * 0.15;
      }
    } else if (isVoid || !isHero) {
      // VOID OVERLORD / BOSS: Overhead Cataclysmic Seismic Smash!
      if (p < 0.4) {
        const f = Math.sin((p / 0.4) * (Math.PI / 2));
        spineJoint.rotation.x = -f * 0.35;
        chestJoint.rotation.x = -f * 0.4;
        rightShoulder.rotation.x = -f * 2.5;
        rightElbow.rotation.x = f * 0.3;
        leftShoulder.rotation.x = 0.5;
        headJoint.rotation.x = f * 0.2;
      } else if (p < 0.6) {
        const f = (p - 0.4) / 0.2;
        const smash = Math.sin(f * (Math.PI / 2));
        spineJoint.rotation.x = -0.35 + smash * 0.65;
        chestJoint.rotation.x = -0.4 + smash * 0.75;
        rightShoulder.rotation.x = -2.5 + smash * 3.6;
        rightElbow.rotation.x = 0;
        leftKnee.rotation.x = smash * 0.4;
        rightKnee.rotation.x = smash * 0.4;
      } else {
        const ease = 1.0 - Math.sin(((p - 0.6) / 0.4) * (Math.PI / 2));
        spineJoint.rotation.x = ease * 0.3;
        chestJoint.rotation.x = ease * 0.35;
        rightShoulder.rotation.x = ease * 1.1 + (1 - ease) * 0.35;
        leftKnee.rotation.x = ease * 0.4 + (1 - ease) * 0.06;
        rightKnee.rotation.x = ease * 0.4 + (1 - ease) * 0.06;
      }
    } else {
      const f = Math.sin((p / 0.38) * (Math.PI / 2));
      pelvisJoint.rotation.y = isHero ? f * 0.35 : -f * 0.35;
      chestJoint.rotation.y = isHero ? f * 0.45 : -f * 0.45;
      rightShoulder.rotation.x = -f * 1.5;
      rightElbow.rotation.x = f * 0.6;
    }
  }

  // ============================================================
  // 3. CINEMATIC ULTIMATE CATACLYSM FINISHER
  // ============================================================
  else if (state === 'ultimate') {
    const p = Math.min(1.0, time / 0.55);

    if (isThunder) {
      // THUNDER WARRIOR: Summoning Celestial Lightning with Both Hands on Mjolnir!
      if (p < 0.48) {
        const f = Math.sin((p / 0.48) * (Math.PI / 2));
        pelvisJoint.position.y = basePelvisY + f * 0.6;
        leftShoulder.rotation.x = -f * 2.9;
        rightShoulder.rotation.x = -f * 2.9;
        leftElbow.rotation.x = 0;
        rightElbow.rotation.x = 0;
        spineJoint.rotation.x = -f * 0.3;
        leftLegJoint.rotation.x = f * 0.35;
        rightLegJoint.rotation.x = f * 0.35;
      } else {
        const f = (p - 0.48) / 0.52;
        const ease = Math.sin(f * (Math.PI / 2));
        leftShoulder.rotation.x = -2.9 + ease * 3.4;
        rightShoulder.rotation.x = -2.9 + ease * 3.4;
        spineJoint.rotation.x = -0.3 + ease * 0.7;
        pelvisJoint.position.y = basePelvisY + (1 - ease) * 0.6;
      }
    } else if (isTech) {
      // TECH HERO: Arc Reactor Unibeam Overdrive!
      pelvisJoint.position.y = basePelvisY + 0.35;
      leftShoulder.rotation.x = 0.75;
      leftShoulder.rotation.z = 0.4;
      rightShoulder.rotation.x = 0.75;
      rightShoulder.rotation.z = -0.4;
      leftElbow.rotation.x = -1.4;
      rightElbow.rotation.x = -1.4;
      chestJoint.rotation.x = -0.4;
      headJoint.rotation.x = 0.2;
      leftLegJoint.rotation.x = 0.25;
      rightLegJoint.rotation.x = 0.25;
    } else {
      if (p < 0.45) {
        const f = Math.sin((p / 0.45) * (Math.PI / 2));
        leftShoulder.rotation.x = -f * 2.8;
        rightShoulder.rotation.x = -f * 2.8;
        chestJoint.rotation.x = -f * 0.3;
      } else {
        const f = (p - 0.45) / 0.55;
        const ease = Math.sin(f * (Math.PI / 2));
        leftShoulder.rotation.x = -2.8 + ease * 3.1;
        rightShoulder.rotation.x = -2.8 + ease * 3.0;
        chestJoint.rotation.x = -0.3 + ease * 0.6;
      }
    }
  }

  // ============================================================
  // 4. SHIELD BLOCK / PARRY STANCE
  // ============================================================
  else if (state === 'block' || (activeGesture && activeGesture.includes('SHIELD'))) {
    pelvisJoint.position.y = basePelvisY - 0.08;
    chestJoint.rotation.x = 0.12;
    leftKnee.rotation.x = 0.38;
    rightKnee.rotation.x = 0.38;

    if (isShield) {
      leftShoulder.rotation.x = 0.92;
      leftShoulder.rotation.z = 0.48;
      leftElbow.rotation.x = -1.5;
      rightShoulder.rotation.x = 0.35;
      rightElbow.rotation.x = -1.1;
    } else if (isMage) {
      leftShoulder.rotation.x = 0.75;
      leftShoulder.rotation.z = -0.3;
      rightShoulder.rotation.x = 0.75;
      rightShoulder.rotation.z = 0.3;
      leftElbow.rotation.x = -1.2;
      rightElbow.rotation.x = -1.2;
    } else {
      leftShoulder.rotation.x = 0.95;
      leftShoulder.rotation.z = 0.55;
      leftElbow.rotation.x = -1.45;
      rightShoulder.rotation.x = 0.4;
      rightElbow.rotation.x = -1.2;
    }
  }

  // ============================================================
  // 5. WARP DODGE / ACROBATIC EVASION
  // ============================================================
  else if (state === 'dodge') {
    const p = Math.min(1.0, time / 0.38);
    const f = Math.sin(p * Math.PI);

    if (isWeb) {
      pelvisJoint.position.y = basePelvisY + f * 0.65;
      spineJoint.rotation.x = -f * Math.PI;
      chestJoint.rotation.x = -f * Math.PI;
      leftLegJoint.rotation.x = f * 1.2;
      rightLegJoint.rotation.x = f * 1.2;
      leftKnee.rotation.x = f * 1.4;
      rightKnee.rotation.x = f * 1.4;
    } else if (isTech) {
      pelvisJoint.position.y = basePelvisY + f * 0.35;
      chestJoint.rotation.z = isHero ? -f * 0.55 : f * 0.55;
      leftLegJoint.rotation.z = -f * 0.4;
      rightLegJoint.rotation.z = f * 0.4;
    } else {
      pelvisJoint.rotation.z = isHero ? -f * 0.4 : f * 0.4;
      chestJoint.rotation.z = isHero ? -f * 0.3 : f * 0.3;
      leftLegJoint.rotation.z = -f * 0.5;
      rightLegJoint.rotation.z = f * 0.5;
    }
  }

  // ============================================================
  // 6. REALISTIC MULTI-STAGE HIT REACTION & STAGGER
  // ============================================================
  else if (state === 'staggered') {
    const dizzy = Math.sin(elapsed * 6.0);
    pelvisJoint.position.y = basePelvisY - 0.06;
    spineJoint.rotation.x = -0.32;
    chestJoint.rotation.x = -0.28;
    headJoint.rotation.x = 0.45 + dizzy * 0.25;
    headJoint.rotation.y = dizzy * 0.3;

    leftShoulder.rotation.x = 0.15;
    leftShoulder.rotation.z = 0.35;
    rightShoulder.rotation.x = 0.15;
    rightShoulder.rotation.z = -0.35;

    leftKnee.rotation.x = 0.42;
    rightKnee.rotation.x = 0.42;
  }

  // ============================================================
  // 7. TRIUMPHANT VICTORY POSE
  // ============================================================
  else if (state === 'victory') {
    if (isThunder) {
      pelvisJoint.position.y = basePelvisY;
      rightShoulder.rotation.x = -2.85;
      rightShoulder.rotation.z = -0.2;
      rightElbow.rotation.x = 0;
      leftShoulder.rotation.x = 0.4;
      leftShoulder.rotation.z = 0.4;
      chestJoint.rotation.x = -0.15;
      headJoint.rotation.x = 0.2;
    } else if (isTech) {
      pelvisJoint.position.y = basePelvisY + 0.3;
      rightShoulder.rotation.x = -2.7;
      rightElbow.rotation.x = 0;
      leftShoulder.rotation.x = 0.3;
      chestJoint.rotation.x = -0.1;
      leftLegJoint.rotation.x = 0.2;
      rightLegJoint.rotation.x = 0.15;
    } else if (isWeb) {
      pelvisJoint.position.y = basePelvisY - 0.22;
      spineJoint.rotation.x = 0.45;
      chestJoint.rotation.x = 0.4;
      headJoint.rotation.x = -0.55;
      leftShoulder.rotation.x = 1.1;
      rightShoulder.rotation.x = 0.5;
      leftKnee.rotation.x = 0.95;
      rightKnee.rotation.x = 1.05;
    } else if (isMage) {
      pelvisJoint.position.y = basePelvisY + 0.25;
      leftShoulder.rotation.x = 0.4;
      rightShoulder.rotation.x = 0.4;
      leftLegJoint.rotation.x = 0.5;
      rightLegJoint.rotation.x = 0.5;
      leftKnee.rotation.x = 0.8;
      rightKnee.rotation.x = 0.8;
    } else {
      rightShoulder.rotation.x = -2.5;
      rightElbow.rotation.x = 0;
      chestJoint.rotation.x = -0.15;
    }
  }

  // ============================================================
  // 8. DRAMATIC DEFEAT COLLAPSE
  // ============================================================
  else if (state === 'defeat') {
    pelvisJoint.position.y = 0.38 * s;
    spineJoint.rotation.x = 0.65;
    chestJoint.rotation.x = 0.75;
    headJoint.rotation.x = 0.7;
    leftKnee.rotation.x = 1.65;
    rightKnee.rotation.x = 0.85;
    leftShoulder.rotation.x = -0.3;
    rightShoulder.rotation.x = 0.8;
    rightElbow.rotation.x = -0.3;
  }
}

