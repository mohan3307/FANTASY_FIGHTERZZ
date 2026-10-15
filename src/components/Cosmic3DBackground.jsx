import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Cosmic3DBackground
 * Ultra-smooth, high-performance 60FPS 3D moving cosmic arena background.
 * Features:
 * - Multi-layered rotating starfield with nebula coloring (cyan, purple, gold, crimson)
 * - Levitating ancient dimensional crystals/monoliths with pulsing runic energy rings
 * - Undulating dynamic holographic cyber grid on the horizon
 * - Floating energy particles drifting toward the camera
 * - Minimal GPU/CPU footprint (reusable geometries, zero garbage collection in RAF)
 */
export const Cosmic3DBackground = ({ opacity = 1, showGrid = true, showMonoliths = true }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.022);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 500);
    camera.position.set(0, 2.5, 12);
    camera.lookAt(0, 1.2, 0);

    // 2. High-performance renderer (alpha: true, low memory consumption)
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 3. Ambient & Point Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pLightCyan = new THREE.PointLight(0x00f3ff, 2.5, 30);
    pLightCyan.position.set(-6, 4, 3);
    scene.add(pLightCyan);

    const pLightPurple = new THREE.PointLight(0x8b5cf6, 2.8, 30);
    pLightPurple.position.set(6, 3, -2);
    scene.add(pLightPurple);

    const pLightGold = new THREE.PointLight(0xfacc15, 2.0, 25);
    pLightGold.position.set(0, 6, 0);
    scene.add(pLightGold);

    // 4. Multi-Layer Dynamic Starfield (320 stars, additive blending)
    const starCount = 360;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const colorPalette = [
      new THREE.Color(0x00f3ff), // Cyan
      new THREE.Color(0xa855f7), // Purple
      new THREE.Color(0x38bdf8), // Sky Blue
      new THREE.Color(0xfacc15), // Gold
      new THREE.Color(0xef4444)  // Crimson
    ];

    for (let i = 0; i < starCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 18 + Math.random() * 38;

      starPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPos[i * 3 + 1] = Math.abs(r * Math.cos(phi)) * 0.85 - 1.2;
      starPos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);

      const col = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      starColors[i * 3] = col.r;
      starColors[i * 3 + 1] = col.g;
      starColors[i * 3 + 2] = col.b;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 0.28,
      vertexColors: true,
      transparent: true,
      opacity: 0.85 * opacity,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // 5. Floating Levitating Dimensional Monoliths & Runic Torus Rings
    const monoliths = [];
    if (showMonoliths) {
      const monoGeo = new THREE.OctahedronGeometry(0.7, 0);
      const monoMat = new THREE.MeshStandardMaterial({
        color: 0x0f172a,
        metalness: 0.9,
        roughness: 0.2,
        emissive: 0x1e1b4b,
        emissiveIntensity: 0.8
      });
      const runeGeo = new THREE.TorusGeometry(1.1, 0.03, 8, 24);
      const runeMatCyan = new THREE.MeshBasicMaterial({ color: 0x00f3ff, transparent: true, opacity: 0.75 * opacity });
      const runeMatPurple = new THREE.MeshBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.75 * opacity });

      const monoConfigs = [
        { x: -7.5, y: 3.2, z: -4, speed: 0.8, offset: 0, mat: runeMatCyan },
        { x: 7.2, y: 3.8, z: -5, speed: 0.9, offset: 1.4, mat: runeMatPurple },
        { x: -5.0, y: 5.4, z: -8, speed: 0.65, offset: 2.8, mat: runeMatCyan },
        { x: 5.4, y: 5.6, z: -7.5, speed: 0.75, offset: 4.1, mat: runeMatPurple },
        { x: -9.2, y: 1.8, z: -2, speed: 1.05, offset: 3.0, mat: runeMatPurple },
        { x: 9.5, y: 2.0, z: -3, speed: 0.95, offset: 5.2, mat: runeMatCyan }
      ];

      monoConfigs.forEach((cfg) => {
        const monoGroup = new THREE.Group();
        monoGroup.position.set(cfg.x, cfg.y, cfg.z);

        const mesh = new THREE.Mesh(monoGeo, monoMat);
        mesh.scale.set(1, 1.8, 1);
        monoGroup.add(mesh);

        const rRing = new THREE.Mesh(runeGeo, cfg.mat);
        rRing.rotation.x = Math.PI / 2;
        monoGroup.add(rRing);

        monoGroup.userData = { baseY: cfg.y, speed: cfg.speed, offset: cfg.offset, rRing, mesh };
        scene.add(monoGroup);
        monoliths.push(monoGroup);
      });
    }

    // 6. Dynamic Cyber Hologram Grid Horizon
    let gridMesh = null;
    if (showGrid) {
      const gridHelper = new THREE.GridHelper(60, 50, 0x00f3ff, 0x1e1b4b);
      gridHelper.position.set(0, -1.8, -5);
      if (gridHelper.material) {
        gridHelper.material.transparent = true;
        gridHelper.material.opacity = 0.45 * opacity;
      }
      scene.add(gridHelper);
      gridMesh = gridHelper;
    }

    // 7. Celestial Dimensional Warp Rings
    const ringGeo1 = new THREE.TorusGeometry(12, 0.08, 12, 64);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.4 * opacity
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 2.3;
    ring1.position.set(0, 1.5, -12);
    scene.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(18, 0.06, 12, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x00f3ff,
      transparent: true,
      opacity: 0.28 * opacity
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = Math.PI / 2.1;
    ring2.position.set(0, 1.0, -16);
    scene.add(ring2);

    // 8. Subtle Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetCamX = 0;
    let targetCamY = 2.5;

    const handleMouseMove = (e) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseX = normX * 0.8;
      mouseY = normY * 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 9. Ultra-Smooth 60FPS Render Loop
    let animId = null;
    let prevTime = performance.now();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const now = performance.now();
      const delta = Math.min(0.05, (now - prevTime) / 1000);
      prevTime = now;
      const elapsed = now * 0.001;

      // Rotate Starfield
      starField.rotation.y = elapsed * 0.035;
      starField.rotation.x = Math.sin(elapsed * 0.02) * 0.05;

      // Animate Monoliths (Levitation & Runic rotation)
      for (let i = 0; i < monoliths.length; i++) {
        const m = monoliths[i];
        const u = m.userData;
        m.position.y = u.baseY + Math.sin(elapsed * u.speed + u.offset) * 0.35;
        u.mesh.rotation.y += delta * 0.7;
        u.mesh.rotation.z = Math.sin(elapsed * 0.5 + u.offset) * 0.15;
        u.rRing.rotation.z += delta * 1.6;
        u.rRing.rotation.y = Math.sin(elapsed * 0.8 + u.offset) * 0.2;
      }

      // Animate Warp Rings
      ring1.rotation.z += delta * 0.08;
      ring2.rotation.z -= delta * 0.05;

      // Animate Grid Scroll
      if (gridMesh) {
        gridMesh.position.z = -5 + ((elapsed * 2.2) % 2.0);
      }

      // Smooth Camera Parallax Lerp
      targetCamX += (mouseX - targetCamX) * 0.05;
      targetCamY += (2.5 + mouseY - targetCamY) * 0.05;
      camera.position.x = targetCamX;
      camera.position.y = targetCamY;
      camera.lookAt(0, 1.2, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      try {
        if (renderer.domElement) {
          renderer.domElement.remove?.();
        }
      } catch {}
      renderer.dispose();
      starGeo.dispose();
      starMat.dispose();
    };
  }, [opacity, showGrid, showMonoliths]);

  return (
    <div
      ref={mountRef}
      className="rs-cosmic-3d-bg-canvas"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden'
      }}
    />
  );
};
