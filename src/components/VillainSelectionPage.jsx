import React, { useState } from 'react';
import {
  Skull,
  Flame,
  Zap,
  Crown,
  Sparkles,
  ArrowLeft,
  Swords,
  Check,
  ShieldAlert
} from 'lucide-react';
import { MARVEL_VILLAINS } from '../data/marvelVillains';
import { sound } from '../utils/audio';
import confetti from 'canvas-confetti';

export const VillainSelectionPage = ({ selectedHero, onBackToHeroSelect, onStartBattle }) => {
  const [selectedVillainId, setSelectedVillainId] = useState('green-goblin');
  const [battleStarting, setBattleStarting] = useState(false);

  const selectedVillain = MARVEL_VILLAINS.find((v) => v.id === selectedVillainId) || MARVEL_VILLAINS[0];

  const handleSelectVillain = (villain) => {
    sound.playHover();
    setSelectedVillainId(villain.id);
  };

  const handleStartBattle = () => {
    sound.playClick();
    sound.playPortalWarp();
    setBattleStarting(true);

    try {
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.6, x: 0.5 },
        colors: [selectedVillain.accentColor, selectedVillain.secondaryColor, '#ffffff']
      });
    } catch (e) {}

    setTimeout(() => {
      setBattleStarting(false);
      if (onStartBattle) {
        onStartBattle(selectedHero, selectedVillain);
      }
    }, 2000);
  };

  const getBadgeIcon = (type) => {
    switch (type) {
      case 'bomb':
        return <Flame size={15} />;
      case 'gauntlet':
        return <Sparkles size={15} />;
      case 'magnet':
        return <Zap size={15} />;
      case 'crown':
        return <Crown size={15} />;
      case 'horns':
        return <Skull size={15} />;
      default:
        return <Skull size={15} />;
    }
  };

  return (
    <div className="rs-hero-select-screen villain-theme">
      {/* 16:9 Aspect-Locked Arena Stage */}
      <div className="rs-select-stage-container">
        {/* Arena Background Layer (Dark Crimson Villain Theme) */}
        <img
          src="/assets/villain_arena_bg.jpg"
          alt="Villain Selection Arena"
          className="rs-select-bg-img"
        />
        <div className="rs-select-ambient-pulse villain-pulse"></div>

        {/* Top Header: Logo, Title & Selected Hero Challenger Pill */}
        <header className="rs-select-header villain-header">
          <div className="rs-select-header-brand">
            <div className="rs-select-logo-badge villain-badge" onClick={onBackToHeroSelect}>
              <span className="rs-select-logo-main">REALITY SHIFT</span>
              <span className="rs-select-logo-sub">GESTURE ARENA</span>
            </div>
            <h2 className="rs-select-page-title villain-title">SELECT YOUR OPPONENT</h2>
          </div>

          {/* Current Player's Selected Hero Pill */}
          {selectedHero && (
            <div className="rs-challenger-hero-pill">
              <span className="rs-challenger-label">CHALLENGER</span>
              <div className="rs-challenger-hero-box" style={{ borderColor: selectedHero.accentColor }}>
                <img
                  src={selectedHero.image}
                  alt={selectedHero.name}
                  className="rs-challenger-avatar"
                />
                <div className="rs-challenger-info">
                  <span className="rs-challenger-name">{selectedHero.name}</span>
                  <span className="rs-challenger-role">{selectedHero.role}</span>
                </div>
              </div>
            </div>
          )}
        </header>

        {/* 5 Marvel Villain Cards Row */}
        <div className="rs-heroes-cards-row">
          {MARVEL_VILLAINS.map((villain, index) => {
            const isSelected = villain.id === selectedVillainId;
            return (
              <div
                key={villain.id}
                className={`rs-marvel-hero-card rs-villain-card ${isSelected ? 'selected' : ''}`}
                style={{
                  '--hero-accent': villain.accentColor,
                  '--hero-glow': villain.glowColor,
                  '--hero-border': villain.borderColor,
                  animationDelay: `${0.08 + index * 0.08}s`
                }}
                onClick={() => handleSelectVillain(villain)}
                onMouseEnter={() => sound.playHover()}
              >
                {/* Glowing Selected Halo */}
                {isSelected && <div className="rs-hero-card-halo villain-halo"></div>}

                {/* Character Image Window */}
                <div className="rs-hero-image-wrap">
                  <img
                    src={villain.image}
                    alt={villain.name}
                    className="rs-hero-portrait-img"
                  />
                  <div className="rs-hero-image-overlay villain-overlay"></div>
                </div>

                {/* Card Meta & Details */}
                <div className="rs-hero-card-meta">
                  <h3 className="rs-hero-card-name villain-name">{villain.name}</h3>
                  <p className="rs-hero-card-tagline">{villain.tagline}</p>

                  <div
                    className="rs-hero-badge-circle"
                    style={{ borderColor: villain.accentColor, color: villain.accentColor }}
                  >
                    {getBadgeIcon(villain.badgeType)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Bar: Back Button, Title Ticker, Start Battle Button */}
        <footer className="rs-select-bottom-bar">
          {/* Back to Hero Select Button */}
          <button
            className="rs-btn-back-home villain-back-btn"
            onClick={() => {
              sound.playClick();
              onBackToHeroSelect();
            }}
          >
            <ArrowLeft size={16} />
            <span>BACK TO HEROES</span>
          </button>

          {/* Central Ticker */}
          <div className="rs-select-footer-center villain-ticker">
            <span>»»</span>
            <span>REALITY SHIFT: ARENA CLASH</span>
            <span>««</span>
          </div>

          {/* Start Battle Button */}
          <button
            className={`rs-btn-select-confirm villain-battle-btn ${battleStarting ? 'confirmed' : ''}`}
            onClick={handleStartBattle}
          >
            {battleStarting ? (
              <>
                <Check size={18} />
                <span>BATTLE STARTING!</span>
              </>
            ) : (
              <>
                <Swords size={18} />
                <span>START BATTLE</span>
              </>
            )}
          </button>
        </footer>

        {/* Matchup Clash Toast Announcement */}
        {battleStarting && (
          <div className="rs-hero-confirm-toast villain-clash-toast">
            <div className="rs-clash-badge">
              <ShieldAlert size={28} className="rs-clash-icon" />
              <span className="rs-clash-vs-text">ARENA DUEL INITIATED</span>
            </div>
            <span className="rs-toast-title">
              {selectedHero?.name || 'HERO'} <span className="rs-vs-highlight">VS</span> {selectedVillain.name}
            </span>
            <span className="rs-toast-sub">{selectedVillain.special} INCOMING!</span>
          </div>
        )}
      </div>
    </div>
  );
};
