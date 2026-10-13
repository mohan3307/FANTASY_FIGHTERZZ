import React, { useEffect, useState } from 'react';
import { Swords, Flame, Sparkles, Zap } from 'lucide-react';
import { sound } from '../utils/audio';

export const FighterSlashTransition = ({ isTransitioning, targetTitle, onMidpoint }) => {
  const [phase, setPhase] = useState('idle'); // 'idle' | 'slam' | 'impact' | 'slice-apart'

  useEffect(() => {
    if (!isTransitioning) {
      setPhase('idle');
      return;
    }

    // Phase 1: High-speed diagonal blade slash crash
    setPhase('slam');
    sound.playBladeSlash();

    // Phase 2: Impact flash & switch React page under the blade seal
    const impactTimer = setTimeout(() => {
      setPhase('impact');
      sound.playCounterHit();
      if (onMidpoint) onMidpoint();
    }, 180);

    // Phase 3: Blades violently slice apart with particle dissipation
    const sliceTimer = setTimeout(() => {
      setPhase('slice-apart');
    }, 300);

    return () => {
      clearTimeout(impactTimer);
      clearTimeout(sliceTimer);
    };
  }, [isTransitioning]);

  if (!isTransitioning && phase === 'idle') return null;

  // Curate fighting game titles based on destination
  let displayTitle = 'GET READY!';
  let displaySub = 'GESTURE COMBAT ARENA';
  let badgeIcon = <Swords size={28} className="text-amber-400" />;

  const upper = (targetTitle || '').toUpperCase();
  if (upper.includes('HERO')) {
    displayTitle = 'SELECT YOUR FIGHTER';
    displaySub = 'HEROES OF THE MULTIVERSE';
    badgeIcon = <Sparkles size={28} className="text-cyan-400" />;
  } else if (upper.includes('OPPONENT') || upper.includes('VILLAIN')) {
    displayTitle = 'CHALLENGER APPROACHING';
    displaySub = 'THREAT MATRIX: S-RANK NEMESIS';
    badgeIcon = <Flame size={28} className="text-rose-500" />;
  } else if (upper.includes('RED GATE') || upper.includes('BATTLE')) {
    displayTitle = 'ROUND 1 // FIGHT!';
    displaySub = 'THE RED GATE DIMENSIONAL DUEL';
    badgeIcon = <Zap size={28} className="text-amber-400 animate-bounce" />;
  } else if (upper.includes('MAIN') || upper.includes('HOME')) {
    displayTitle = 'MISSION STANDBY';
    displaySub = 'REALITY SHIFT GESTURE ARENA';
    badgeIcon = <Swords size={28} className="text-cyan-400" />;
  }

  return (
    <div className={`rs-fighter-transition-root phase-${phase}`}>
      {/* 1. High-Velocity Comic Speed Lines */}
      <div className="rs-trans-speedlines"></div>

      {/* 2. Top-Left Heavy Carbon Titanium Slicing Shutter */}
      <div className="rs-trans-shutter-top">
        <div className="rs-trans-carbon-texture"></div>
        <div className="rs-trans-hazard-line top"></div>
        <div className="rs-trans-neon-edge top"></div>
      </div>

      {/* 3. Bottom-Right Heavy Carbon Titanium Slicing Shutter */}
      <div className="rs-trans-shutter-bottom">
        <div className="rs-trans-carbon-texture"></div>
        <div className="rs-trans-hazard-line bottom"></div>
        <div className="rs-trans-neon-edge bottom"></div>
      </div>

      {/* 4. Center Diagonal Razor Blade Cut Line with Fiery Sparks */}
      <div className="rs-trans-blade-seam">
        <div className="rs-trans-laser-sparkle"></div>
      </div>

      {/* 5. Arcade Fighting Game Centerpiece Banner */}
      <div className="rs-trans-centerpiece">
        <div className="rs-trans-icon-emblem">
          <div className="rs-trans-emblem-halo"></div>
          {badgeIcon}
        </div>

        <div className="rs-trans-text-block">
          <div className="rs-trans-sub-tag">
            <span className="rs-trans-dot"></span>
            <span>{displaySub}</span>
            <span className="rs-trans-dot"></span>
          </div>

          <h1 className="rs-trans-main-title">{displayTitle}</h1>

          <div className="rs-trans-accent-meter">
            <div className="rs-trans-meter-notch"></div>
            <div className="rs-trans-meter-line"></div>
            <div className="rs-trans-meter-notch"></div>
          </div>
        </div>
      </div>

      {/* 6. Screen Impact Flash */}
      <div className="rs-trans-impact-flash"></div>
    </div>
  );
};
