import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { createArticulated3DFighter, animateArticulated3DFighter } from './ThreeFighter3DModels';

export const Character3DPreview = ({ character, isVillain = false }) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const characterGroupRef = useRef(null);
  const rigRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 450;

    // 1. Scene & Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera Setup for Full-Body View
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 1.15, 3.8);
    camera.lookAt(0, 0.95, 0);

    // 3. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // 4. Studio Lighting Rig
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.8);
    keyLight.position.set(1.5, 3.5, 3.5);
    scene.add(keyLight);

    const rimLightColor = isVillain ? 0xa855f7 : 0x00f3ff;
    const rimLight = new THREE.PointLight(rimLightColor, 3.2, 8);
    rimLight.position.set(-2.0, 2.2, -1.5);
    scene.add(rimLight);

    const fillLight = new THREE.PointLight(0xffffff, 1.2, 6);
    fillLight.position.set(2.0, 1.0, 2.0);
    scene.add(fillLight);

    // 5. Holographic Pedestal / Ground Contact Ring
    const pedestalGeo = new THREE.CylinderGeometry(1.2, 1.3, 0.08, 32);
    const pedestalMat = new THREE.MeshStandardMaterial({
      color: 0x080e1e,
      metalness: 0.9,
      roughness: 0.2
    });
    const pedestal = new THREE.Mesh(pedestalGeo, pedestalMat);
    pedestal.position.y = -0.04;
    scene.add(pedestal);

    const ringGeo = new THREE.RingGeometry(1.15, 1.22, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: rimLightColor,
      side: THREE.DoubleSide
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.01;
    scene.add(ring);

    // 6. Spawn Full-Body 3D Fighter
    const fighterResult = createArticulated3DFighter(character, isVillain);
    const fighterGroup = fighterResult.group;
    fighterGroup.position.set(0, 0, 0);
    scene.add(fighterGroup);
    characterGroupRef.current = fighterGroup;
    rigRef.current = fighterResult;

    // 7. Interactive Drag to Rotate
    let isDragging = false;
    let previousMouseX = 0;

    const onMouseDown = (e) => {
      isDragging = true;
      previousMouseX = e.clientX;
    };

    const onMouseMove = (e) => {
      if (!isDragging || !fighterGroup) return;
      const deltaX = e.clientX - previousMouseX;
      fighterGroup.rotation.y += deltaX * 0.012;
      previousMouseX = e.clientX;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth || 320;
      const h = container.clientHeight || 450;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 8. Render Loop with Smooth Auto-Turntable Rotation
    let clock = new THREE.Clock();
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.1);
      const elapsed = clock.getElapsedTime();

      // Subtle turntable rotation when not dragging
      if (!isDragging && fighterGroup) {
        fighterGroup.rotation.y += delta * 0.45;
      }

      // Idle breathing kinematics
      if (rigRef.current) {
        animateArticulated3DFighter(rigRef.current, 'idle', 0, delta, elapsed, !isVillain, '');
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [character, isVillain]);

  return (
    <div className="rs-3d-character-preview-container" ref={mountRef}>
      <div className="rs-preview-drag-hint">DRAG TO ROTATE 360°</div>
    </div>
  );
};
