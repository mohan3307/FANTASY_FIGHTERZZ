import React from 'react';
import { X, BookOpen, Shield, Zap, Crosshair, Sparkles, Camera, Hand, Swords } from 'lucide-react';
import { sound } from '../utils/audio';

export const HowToPlayModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const gestures = [
    {
      id: 'defend',
      name: 'OPEN PALM',
      action: '= DEFEND',
      color: '#00f3ff',
      icon: Shield,
      desc: 'Deploy an impenetrable kinetic hardlight shield to deflect incoming enemy attacks.'
    },
    {
      id: 'charge',
      name: 'CLOSED FIST',
      action: '= CHARGE',
      color: '#f97316',
      icon: Zap,
      desc: 'Channel cosmic bio-electricity into your suit to charge energy for special abilities.'
    },
    {
      id: 'attack',
      name: 'POINT FORWARD',
      action: '= ATTACK',
      color: '#f43f5e',
      icon: Crosshair,
      desc: 'Fire laser projectiles or execute high-speed nano-dash strikes against the villain.'
    },
    {
      id: 'special',
      name: 'TWO HANDS RAISED',
      action: '= SPECIAL',
      color: '#a855f7',
      icon: Sparkles,
      desc: 'Unleash your hero’s catastrophic ultimate finishing move upon reaching 100% power.'
    }
  ];

  return (
    <div className="rs-modal-overlay" onClick={onClose}>
      <div className="rs-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="rs-modal-header">
          <div className="rs-modal-title-box">
            <BookOpen size={20} className="rs-modal-title-icon" />
            <h3 className="rs-modal-title">HOW TO PLAY — GESTURE SYSTEM</h3>
          </div>
          <button
            className="rs-modal-close"
            onClick={() => {
              sound.playClick();
              onClose();
            }}
          >
            <X size={18} />
          </button>
        </div>

        <div className="rs-modal-body">
          {/* 3 Quick Setup Steps */}
          <div className="rs-quick-steps-bar">
            <div className="rs-qstep">
              <span className="rs-qnum">1</span>
              <Camera size={16} />
              <span>ALLOW WEBCAM</span>
            </div>
            <div className="rs-qarrow">➔</div>
            <div className="rs-qstep">
              <span className="rs-qnum">2</span>
              <Hand size={16} />
              <span>POSITION HANDS</span>
            </div>
            <div className="rs-qarrow">➔</div>
            <div className="rs-qstep">
              <span className="rs-qnum">3</span>
              <Swords size={16} />
              <span>FIGHT WITH GESTURES</span>
            </div>
          </div>

          <p className="rs-modal-desc">
            Use physical hand gestures in front of your laptop webcam. The AI Vision Engine tracks your movements and commands your superhero in real-time.
          </p>

          {/* 4 Gesture Cards Grid */}
          <div className="rs-gesture-modal-grid">
            {gestures.map((g) => {
              const Icon = g.icon;
              return (
                <div
                  key={g.id}
                  className="rs-gcard-modal"
                  style={{ '--accent': g.color }}
                >
                  <div className="rs-gcard-top">
                    <div className="rs-gcard-icon-box">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="rs-gcard-name">{g.name}</h4>
                      <span className="rs-gcard-action" style={{ color: g.color }}>
                        {g.action}
                      </span>
                    </div>
                  </div>
                  <p className="rs-gcard-text">{g.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rs-modal-footer">
          <button
            className="rs-btn-confirm"
            onClick={() => {
              sound.playClick();
              onClose();
            }}
          >
            GOT IT, STEP INTO ARENA
          </button>
        </div>
      </div>
    </div>
  );
};
