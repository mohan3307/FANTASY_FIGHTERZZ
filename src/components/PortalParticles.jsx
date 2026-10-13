import React, { useEffect, useRef } from 'react';

/**
 * 4K Ultra-Fidelity Cinematic Particle System:
 * - High-DPI canvas scaling (Retina / 4K Ultra HD)
 * - Multi-tiered cosmic energy embers, stardust, and plasma motes
 * - Procedural branching electric lightning bolts
 * - Cursor physics & interactive kinetic energy ripple
 */
export const PortalParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.25);
      const parent = canvas.parentElement;
      width = parent?.clientWidth || window.innerWidth;
      height = parent?.clientHeight || window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Mouse Tracking for Kinetic Interactive Micro-Physics
    const mouse = { x: -1000, y: -1000, active: false };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Multi-tier Cinematic Ember Palette
    const palette = [
      { r: 0, g: 243, b: 255 },   // Neon Cyan
      { r: 56, g: 189, b: 248 },  // Electric Ice Blue
      { r: 251, g: 191, b: 36 },  // Golden Arc Plasma
      { r: 244, g: 63, b: 94 },   // Crimson Reactor Flare
      { r: 168, g: 85, b: 247 },  // Cosmic Void Violet
      { r: 255, g: 255, b: 255 }   // Pure White Photon
    ];

    // 1. Generate 65 High-Res Glowing Embers & Cosmic Stardust (Optimized count for 60fps)
    const numParticles = 65;
    const particles = [];
    for (let i = 0; i < numParticles; i++) {
      const pColor = palette[Math.floor(Math.random() * palette.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseVx: (Math.random() - 0.5) * 0.9,
        baseVy: -0.4 - Math.random() * 1.1,
        vx: 0,
        vy: 0,
        size: 0.8 + Math.random() * 2.8,
        color: pColor,
        baseAlpha: 0.25 + Math.random() * 0.65,
        pulseSpeed: 0.015 + Math.random() * 0.035,
        pulseOffset: Math.random() * Math.PI * 2,
        twinkle: Math.random() > 0.4
      });
    }

    // 2. Procedural Electric Lightning Generator
    let lightningBranches = null;
    let nextLightningTime = 80;
    let lightningCooldown = 0;

    const spawnLightningBolt = () => {
      const startX = width * (0.2 + Math.random() * 0.6);
      const startY = -10;
      const bolt = [];
      let curX = startX;
      let curY = startY;
      const targetY = height * (0.4 + Math.random() * 0.4);

      while (curY < targetY) {
        const nextY = curY + 14 + Math.random() * 26;
        const nextX = curX + (Math.random() - 0.5) * 45;
        bolt.push({ x1: curX, y1: curY, x2: nextX, y2: nextY });

        if (Math.random() > 0.65 && bolt.length < 8) {
          const branchX = nextX + (Math.random() - 0.5) * 35;
          const branchY = nextY + 15 + Math.random() * 25;
          bolt.push({ x1: nextX, y1: nextY, x2: branchX, y2: branchY, isSub: true });
        }

        curX = nextX;
        curY = nextY;
      }

      lightningBranches = {
        segments: bolt,
        life: 1.0,
        decay: 0.08 + Math.random() * 0.06,
        color: Math.random() > 0.3 ? '#00f3ff' : '#fbbf24'
      };
    };

    let time = 0;

    // Render Optimized Frame
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.016;

      // Render & Update Lightning Arcs
      lightningCooldown++;
      if (lightningCooldown >= nextLightningTime) {
        if (Math.random() > 0.82) {
          spawnLightningBolt();
          lightningCooldown = 0;
          nextLightningTime = 90 + Math.floor(Math.random() * 140);
        }
      }

      if (lightningBranches && lightningBranches.life > 0) {
        ctx.save();
        ctx.globalAlpha = lightningBranches.life * 0.85;
        ctx.strokeStyle = lightningBranches.color;
        ctx.lineWidth = 1.8;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        ctx.beginPath();
        lightningBranches.segments.forEach((seg) => {
          ctx.moveTo(seg.x1, seg.y1);
          ctx.lineTo(seg.x2, seg.y2);
        });
        ctx.stroke();

        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 0.8;
        ctx.stroke();

        ctx.restore();
        lightningBranches.life -= lightningBranches.decay;
      }

      // Render Particles (Hardware-Accelerated Dual-Ring Arc without CPU shadowBlur)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 16000 && distSq > 1) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / 126) * 3.5;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }

        p.vx *= 0.92;
        p.vy *= 0.92;

        p.x += p.baseVx + p.vx + Math.sin(time + p.pulseOffset) * 0.35;
        p.y += p.baseVy + p.vy;

        if (p.y < -15) {
          p.y = height + 15;
          p.x = Math.random() * width;
        }
        if (p.x < -15) p.x = width + 15;
        if (p.x > width + 15) p.x = -15;

        const pulse = Math.sin(time * 3 + p.pulseOffset);
        const alpha = Math.max(0.05, Math.min(1.0, p.baseAlpha + pulse * 0.25));
        const { r, g, b } = p.color;

        // Outer soft halo
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha * 0.25})`;
        ctx.fill();

        // Inner glowing core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.fill();

        // Center specular point
        if (p.size > 2.0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.9})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="rs-portal-canvas-overlay" />;
};
