import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { createArticulated3DFighter, animateArticulated3DFighter } from './ThreeFighter3DModels';

export const Character3DPreview = ({ character, isVillain = false, isPaused = false }) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const characterGroupRef = useRef(null);
  const rigRef = useRef(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  const lightsRef = useRef({});
  const pedestalRingRef = useRef(null);
  const isPausedRef = useRef(isPaused);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  // 1. Initialize WebGL Scene, Camera, Renderer, Lights & Loop ONCE on mount
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const initialWidth = Math.max(container.clientWidth || 360, 240);
    const initialHeight = Math.max(container.clientHeight || 480, 320);

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(38, initialWidth / initialHeight, 0.1, 100);
    camera.position.set(0, 1.10, 4.3);
    camera.lookAt(0, 1.05, 0);

    // 2. High-Performance WebGL Renderer (Capped DPI for 60+ FPS responsiveness)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(initialWidth, initialHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // 3. Studio Lighting Rig
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.6);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 3.0);
    keyLight.position.set(1.5, 3.5, 3.5);
    scene.add(keyLight);

    const frontHeroLight = new THREE.DirectionalLight(0xffffff, 2.2);
    frontHeroLight.position.set(0, 1.8, 3.5);
    scene.add(frontHeroLight);

    const rimLightColor = isVillain ? 0xa855f7 : 0x00f3ff;
    const rimLight = new THREE.PointLight(rimLightColor, 3.2, 10);
    rimLight.position.set(-2.0, 2.2, -1.5);
    scene.add(rimLight);

    const bounceLight = new THREE.PointLight(rimLightColor, 2.2, 6);
    bounceLight.position.set(0, 0.1, 1.2);
    scene.add(bounceLight);

    const fillLight = new THREE.PointLight(0xffffff, 1.2, 8);
    fillLight.position.set(2.0, 1.0, 2.0);
    scene.add(fillLight);

    lightsRef.current = { rimLight, bounceLight };

    // 4. Holographic Pedestal / Ground Contact Ring
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
    pedestalRingRef.current = ring;

    // 5. Interactive Drag to Rotate
    let isDragging = false;
    let previousMouseX = 0;

    const onMouseDown = (e) => {
      isDragging = true;
      previousMouseX = e.clientX;
    };

    const onMouseMove = (e) => {
      if (!isDragging || !characterGroupRef.current) return;
      const deltaX = e.clientX - previousMouseX;
      characterGroupRef.current.rotation.y += deltaX * 0.012;
      previousMouseX = e.clientX;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Responsive framing ResizeObserver
    const updateSize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth || 360;
      const h = container.clientHeight || 480;
      if (w > 20 && h > 20) {
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    };

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(container);

    // 6. Smooth Turntable & Kinematic Render Loop
    let clock = new THREE.Clock();
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (isPausedRef.current) return;

      const delta = Math.min(clock.getDelta(), 0.05);
      const elapsed = clock.getElapsedTime();

      // Subtle turntable rotation when not dragging
      if (!isDragging && characterGroupRef.current) {
        characterGroupRef.current.rotation.y += delta * 0.45;
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
      resizeObserver.disconnect();
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      pedestalGeo.dispose();
      pedestalMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, []);

  // 2. Fast Model Swapping in place when Character or isVillain changes (Zero Context Recreation!)
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    setIsModelLoaded(false);

    // Remove and clean up previous character model
    if (characterGroupRef.current) {
      scene.remove(characterGroupRef.current);
      characterGroupRef.current = null;
      rigRef.current = null;
    }

    // Update pedestal ring and accent lighting
    const accentHex = character?.accentColor
      ? parseInt(character.accentColor.replace('#', '0x'), 16)
      : (isVillain ? 0xa855f7 : 0x00f3ff);

    if (lightsRef.current.rimLight) lightsRef.current.rimLight.color.setHex(accentHex);
    if (lightsRef.current.bounceLight) lightsRef.current.bounceLight.color.setHex(accentHex);
    if (pedestalRingRef.current) pedestalRingRef.current.material.color.setHex(accentHex);

    // Spawn new fighter model into existing scene
    const fighterResult = createArticulated3DFighter(character, isVillain);
    const fighterGroup = fighterResult.group;
    fighterGroup.position.set(0, 0, 0);
    scene.add(fighterGroup);
    characterGroupRef.current = fighterGroup;
    rigRef.current = fighterResult;

    if (fighterResult.isLoaded) {
      setIsModelLoaded(true);
    } else {
      fighterResult.onLoaded = () => {
        setIsModelLoaded(true);
      };
    }
  }, [character, isVillain]);

  return (
    <div className="rs-3d-character-preview-container" ref={mountRef}>
      {!isModelLoaded && (
        <div className="rs-preview-loading-hologram">
          <div
            className="rs-loading-pulse-spinner"
            style={{ borderColor: isVillain ? '#a855f7' : '#00f3ff' }}
          ></div>
          <div className="rs-loading-pulse-label">
            STREAMING 3D HOLOGRAPHIC RIG...
          </div>
        </div>
      )}
      <div className="rs-preview-drag-hint">DRAG TO ROTATE 360°</div>
    </div>
  );
};
