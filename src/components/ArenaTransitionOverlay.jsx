import React, { useEffect, useState } from 'react';
import { Swords, CheckCircle2, Video, ArrowRight, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';

export const ArenaTransitionOverlay = ({ isOpen, onClose }) => {
  const [phase, setPhase] = useState(1);

  useEffect(() => {
    if (!isOpen) {
      setPhase(1);
      return;
    }

    sound.playPortalWarp();

    // Trigger celebratory particle blast
    try {
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.5, x: 0.5 },
        colors: ['#00f3ff', '#38bdf8', '#a855f7', '#ffffff']
      });
    } catch (e) {}

    const t1 = setTimeout(() => setPhase(2), 900);
    const t2 = setTimeout(() => setPhase(3), 1900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="rs-arena-warp-overlay">
      <div className="rs-warp-ring ring-1"></div>
      <div className="rs-warp-ring ring-2"></div>
      <div className="rs-warp-ring ring-3"></div>

      <div className="rs-warp-card">
        <button
          className="rs-warp-close"
          onClick={() => {
            sound.playClick();
            onClose();
          }}
        >
          <X size={20} />
        </button>

        <div className="rs-warp-icon-circle">
          <Swords size={36} className="rs-warp-sword-icon" />
        </div>

        <h2 className="rs-warp-title">REALITY SHIFT IN PROGRESS</h2>
        <p className="rs-warp-subtitle">SYNCHRONIZING WITH GESTURE ARENA</p>

        <div className="rs-warp-steps-list">
          <div className={`rs-warp-step-item ${phase >= 1 ? 'completed' : ''}`}>
            <CheckCircle2 size={18} />
            <span>Calibrating Neural Vision Matrix...</span>
          </div>
          <div className={`rs-warp-step-item ${phase >= 2 ? 'completed' : ''}`}>
            <CheckCircle2 size={18} />
            <span>Connecting Quantum MediaPipe Nodes...</span>
          </div>
          <div className={`rs-warp-step-item ${phase >= 3 ? 'completed' : ''}`}>
            <CheckCircle2 size={18} />
            <span>Combat Arena Loaded: NEO-CYBER ARENA 01</span>
          </div>
        </div>

        <div className="rs-warp-actions">
          <button
            className="rs-btn-launch-combat"
            onClick={() => {
              sound.playClick();
              alert('Hero Stance Ready! Welcome to the Arena!');
              onClose();
            }}
          >
            <span>ENTER BATTLE RING</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
