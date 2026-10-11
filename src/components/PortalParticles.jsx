import React, { useEffect, useRef } from 'react';

/**
 * HeroAtmosphereParticles creates floating cosmic energy embers,
 * electrical lightning sparks, and glowing particles across the superhero battle scene.
 */
export const PortalParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Floating Cosmic Embers & Sparks
    const numSparks = 60;
    const sparks = [];
    for (let i = 0; i < numSparks; i++) {
      sparks.push({
        x: Math.random() * (canvas.width || 1024),
        y: Math.random() * (canvas.height || 576),
        vx: (Math.random() - 0.5) * 0.8,
        vy: -0.3 - Math.random() * 0.9,
        size: 1 + Math.random() * 2.5,
        color: Math.random() > 0.6 ? '#00f3ff' : Math.random() > 0.4 ? '#fbbf24' : '#f43f5e',
        opacity: 0.3 + Math.random() * 0.7,
        pulseSpeed: 0.02 + Math.random() * 0.04
      });
    }

    // Thor's Lightning & Cosmic Light Flashes
    let flashTimer = 0;
    let flashIntensity = 0;

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.02;

      // Occasional subtle lightning flash near Thor / top-center
      flashTimer++;
      if (flashTimer > 180 && Math.random() > 0.95) {
        flashIntensity = 0.3;
        flashTimer = 0;
      }
      if (flashIntensity > 0) {
        ctx.fillStyle = `rgba(0, 243, 255, ${flashIntensity})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        flashIntensity -= 0.03;
      }

      // Render floating embers
      sparks.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;

        // Wrap around screen
        if (s.y < -10) {
          s.y = canvas.height + 10;
          s.x = Math.random() * canvas.width;
        }
        if (s.x < -10) s.x = canvas.width + 10;
        if (s.x > canvas.width + 10) s.x = -10;

        ctx.save();
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 8;
        ctx.globalAlpha = Math.abs(Math.sin(time + s.x)) * s.opacity;
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="rs-portal-canvas-overlay" />;
};
