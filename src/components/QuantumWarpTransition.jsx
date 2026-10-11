import React, { useEffect, useState } from 'react';
import { Zap, Activity, Cpu } from 'lucide-react';

export const QuantumWarpTransition = ({ isTransitioning, targetTitle, onMidpoint }) => {
  const [phase, setPhase] = useState('idle'); // 'idle' | 'charging' | 'flash' | 'warp-out'

  useEffect(() => {
    if (!isTransitioning) {
      setPhase('idle');
      return;
    }

    // Step 1: Charging warp tunnel
    setPhase('charging');

    // Step 2: Midpoint flash (switch page under flash)
    const flashTimer = setTimeout(() => {
      setPhase('flash');
      if (onMidpoint) onMidpoint();
    }, 160);

    // Step 3: Warp out / energy dissolve
    const warpOutTimer = setTimeout(() => {
      setPhase('warp-out');
    }, 280);

    return () => {
      clearTimeout(flashTimer);
      clearTimeout(warpOutTimer);
    };
  }, [isTransitioning]);

  if (!isTransitioning && phase === 'idle') return null;

  return (
    <div className={`rs-quantum-warp-overlay phase-${phase}`}>
      {/* 1. Dimensional Hyperspace Tunnel */}
      <div className="rs-warp-hyperspace-core">
        <div className="rs-warp-speed-ring ring-1"></div>
        <div className="rs-warp-speed-ring ring-2"></div>
        <div className="rs-warp-speed-ring ring-3"></div>
        <div className="rs-warp-laser-portal"></div>
      </div>

      {/* 2. Scanning Laser Grid & Lines */}
      <div className="rs-warp-scanline"></div>
      <div className="rs-warp-hex-grid"></div>

      {/* 3. Central Tactical Hologram HUD */}
      <div className="rs-warp-hud-center">
        <div className="rs-warp-hud-icon-box">
          <Zap size={28} className="rs-warp-zap-icon" />
        </div>
        <div className="rs-warp-hud-text-group">
          <span className="rs-warp-sub-protocol">DIMENSIONAL REALITY SHIFT</span>
          <h2 className="rs-warp-destination-title">
            {targetTitle ? `WARPING TO ${targetTitle}` : 'SHIFTING ARENA...'}
          </h2>
          <div className="rs-warp-loading-bar-wrap">
            <div className="rs-warp-loading-bar-fill"></div>
          </div>
        </div>
      </div>

      {/* 4. Peripheral Quantum Coordinates */}
      <div className="rs-warp-peripheral-hud top-left">
        <Activity size={12} />
        <span>ARENA_LATENCY: 0.02ms // ENERGETIC MATRIX LOCKED</span>
      </div>
      <div className="rs-warp-peripheral-hud bottom-right">
        <Cpu size={12} />
        <span>GESTURE_NEURAL_LINK: SYNCED 100%</span>
      </div>

      {/* 5. Flash Burst */}
      <div className="rs-warp-flash-screen"></div>
    </div>
  );
};
