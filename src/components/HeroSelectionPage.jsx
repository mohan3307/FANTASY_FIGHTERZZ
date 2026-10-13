import React, { useState } from 'react';
import {
  Shield,
  Zap,
  Sparkles,
  Crosshair,
  Flame,
  ArrowLeft,
  Check,
  UserCheck,
  Activity,
  Sword,
  Gauge,
  Radio
} from 'lucide-react';
import { MARVEL_HEROES } from '../data/marvelHeroes';
import { sound } from '../utils/audio';
import { Character3DPreview } from './Character3DPreview';
import confetti from 'canvas-confetti';

export const HeroSelectionPage = ({ onBackToHome, onConfirmHero }) => {
  const [selectedHeroId, setSelectedHeroId] = useState('ironman');
  const [heroConfirmed, setHeroConfirmed] = useState(false);

  const selectedHero = MARVEL_HEROES.find((h) => h.id === selectedHeroId) || MARVEL_HEROES[0];

  const handleSelectHero = (hero) => {
    sound.playHover();
    setSelectedHeroId(hero.id);
  };

  const handleConfirm = () => {
    sound.playClick();
    sound.playPortalWarp();
    setHeroConfirmed(true);

    try {
      confetti({
        particleCount: 75,
        spread: 85,
        origin: { y: 0.6, x: 0.5 },
        colors: [selectedHero.accentColor, selectedHero.secondaryColor, '#ffffff']
      });
    } catch (e) {}

    setTimeout(() => {
      setHeroConfirmed(false);
      if (onConfirmHero) onConfirmHero(selectedHero);
    }, 80);
  };

  const getBadgeIcon = (type) => {
    switch (type) {
      case 'spider':
        return <Crosshair size={14} />;
      case 'thunder':
        return <Zap size={14} />;
      case 'shield':
        return <Shield size={14} />;
      case 'energy':
        return <Flame size={14} />;
      case 'magic':
        return <Sparkles size={14} />;
      default:
        return <Sparkles size={14} />;
    }
  };

  return (
    <div className="rs-hero-select-screen">
      {/* 16:9 Aspect-Locked Arena Stage */}
      <div className="rs-select-stage-container">
        {/* Arena Background Layer */}
        <img
          src="/assets/choose_hero_bg.jpg"
          alt="Choose Your Hero Arena"
          className="rs-select-bg-img"
        />
        <div className="rs-select-ambient-pulse"></div>

        {/* Top Header: Logo, Title & Mode Badge */}
        <header className="rs-select-header">
          <div className="rs-select-header-brand">
            <div className="rs-select-logo-badge" onClick={onBackToHome}>
              <span className="rs-select-logo-main">REALITY SHIFT</span>
              <span className="rs-select-logo-sub">GESTURE ARENA</span>
            </div>
            <div>
              <h2 className="rs-select-page-title">CHOOSE YOUR HERO</h2>
              <div className="rs-select-sub-banner">
                <Radio size={12} className="rs-pulse-dot" />
                <span>REAL-TIME 3D HOLOGRAM CHAMBER • SELECT FIGHTER ARCHETYPE</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main 3-Column Showcase Stage: Left Roster | Center 3D Preview | Right Dossier */}
        <div className="rs-character-select-body">
          {/* Left Column: 5 Superhero Archetype Cards */}
          <div className="rs-select-roster-column">
            <div className="rs-roster-header">
              <span>WARRIOR MATRIX</span>
              <span className="rs-roster-count">{MARVEL_HEROES.length} FIGHTERS</span>
            </div>
            <div className="rs-roster-list">
              {MARVEL_HEROES.map((hero) => {
                const isSelected = hero.id === selectedHeroId;
                return (
                  <div
                    key={hero.id}
                    className={`rs-roster-item-card ${isSelected ? 'selected' : ''}`}
                    style={{
                      '--hero-accent': hero.accentColor,
                      '--hero-glow': hero.glowColor,
                      '--hero-border': hero.borderColor
                    }}
                    onClick={() => handleSelectHero(hero)}
                    onMouseEnter={() => sound.playHover()}
                  >
                    <div className="rs-roster-item-avatar-wrap">
                      <img src={hero.image} alt={hero.name} className="rs-roster-item-avatar" />
                      <div className="rs-roster-item-badge" style={{ color: hero.accentColor }}>
                        {getBadgeIcon(hero.badgeType)}
                      </div>
                    </div>
                    <div className="rs-roster-item-info">
                      <div className="rs-roster-item-title">{hero.name}</div>
                      <div className="rs-roster-item-role">{hero.role}</div>
                      <div className="rs-roster-item-weapon">{hero.weaponName}</div>
                    </div>
                    {isSelected && <div className="rs-roster-active-indicator" />}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Center Column: Full-Body 3D Character Hologram Preview */}
          <div className="rs-select-3d-stage">
            <div className="rs-3d-hologram-wrap">
              <Character3DPreview character={selectedHero} isVillain={false} />
            </div>

            <div className="rs-3d-hero-meta-badge" style={{ borderColor: selectedHero.accentColor }}>
              <div className="rs-3d-hero-name" style={{ color: selectedHero.accentColor }}>
                {selectedHero.name}
              </div>
              <div className="rs-3d-hero-tagline">{selectedHero.tagline}</div>
              <div className="rs-3d-hero-weapon-tag">
                <Sword size={13} />
                <span>{selectedHero.weaponName}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Tactical Combat Dossier & Gesture Controls */}
          <div className="rs-select-dossier-column">
            <div className="rs-dossier-panel">
              <div className="rs-dossier-header">
                <Activity size={14} style={{ color: selectedHero.accentColor }} />
                <span>TACTICAL COMBAT DOSSIER</span>
              </div>

              {/* Bio & Lore */}
              <div className="rs-dossier-bio">
                <p>{selectedHero.description}</p>
              </div>

              {/* Weapon Specifications */}
              <div className="rs-dossier-weapon-box" style={{ borderColor: selectedHero.accentColor }}>
                <div className="rs-dossier-label">SIGNATURE WEAPON</div>
                <div className="rs-dossier-weapon-name">{selectedHero.weaponName}</div>
                <p className="rs-dossier-weapon-desc">{selectedHero.weaponDesc}</p>
              </div>

              {/* Animated Stat Meters */}
              <div className="rs-dossier-stats-group">
                <div className="rs-dossier-stat-row">
                  <div className="rs-dossier-stat-header">
                    <span>POWER</span>
                    <span className="rs-dossier-stat-val">{selectedHero.stats.power}%</span>
                  </div>
                  <div className="rs-dossier-stat-track">
                    <div
                      className="rs-dossier-stat-bar power"
                      style={{ width: `${selectedHero.stats.power}%` }}
                    />
                  </div>
                </div>

                <div className="rs-dossier-stat-row">
                  <div className="rs-dossier-stat-header">
                    <span>DEFENSE</span>
                    <span className="rs-dossier-stat-val">{selectedHero.stats.defense}%</span>
                  </div>
                  <div className="rs-dossier-stat-track">
                    <div
                      className="rs-dossier-stat-bar defense"
                      style={{ width: `${selectedHero.stats.defense}%` }}
                    />
                  </div>
                </div>

                <div className="rs-dossier-stat-row">
                  <div className="rs-dossier-stat-header">
                    <span>SPEED</span>
                    <span className="rs-dossier-stat-val">{selectedHero.stats.speed}%</span>
                  </div>
                  <div className="rs-dossier-stat-track">
                    <div
                      className="rs-dossier-stat-bar speed"
                      style={{ width: `${selectedHero.stats.speed}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Ultimate Ability */}
              <div className="rs-dossier-special-box">
                <div className="rs-dossier-special-label">ULTIMATE FINISHER</div>
                <div className="rs-dossier-special-name" style={{ color: selectedHero.accentColor }}>
                  {selectedHero.special}
                </div>
              </div>

              {/* Gesture Controls Cheat Sheet */}
              <div className="rs-dossier-controls-box">
                <div className="rs-dossier-controls-title">GESTURE CONTROLS</div>
                <div className="rs-dossier-controls-grid">
                  <span>✋ Open Palm: Defend</span>
                  <span>✊ Closed Fist: Charge</span>
                  <span>☝️ Point: Ranged</span>
                  <span>👊 Forward: Strike</span>
                  <span>🙌 Both Hands: Finisher</span>
                  <span>↔️ Swipe: Warp Dodge</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Back Button, Title Ticker, Select Button */}
        <footer className="rs-select-bottom-bar">
          <button
            className="rs-btn-back-home"
            onClick={() => {
              sound.playClick();
              onBackToHome();
            }}
          >
            <ArrowLeft size={16} />
            <span>BACK TO HOME</span>
          </button>

          <div className="rs-select-footer-center">
            <span>»»</span>
            <span>REALITY SHIFT: GESTURE ARENA • 3D SUPERHERO COMBAT</span>
            <span>««</span>
          </div>

          <button
            className={`rs-btn-select-confirm ${heroConfirmed ? 'confirmed' : ''}`}
            onClick={handleConfirm}
          >
            {heroConfirmed ? (
              <>
                <Check size={18} />
                <span>{selectedHero.name} LOCKED IN!</span>
              </>
            ) : (
              <>
                <UserCheck size={18} />
                <span>SELECT HERO</span>
              </>
            )}
          </button>
        </footer>

        {/* Selected Hero Announcement Toast */}
        {heroConfirmed && (
          <div className="rs-hero-confirm-toast">
            <span className="rs-toast-title">{selectedHero.name} READY!</span>
            <span className="rs-toast-sub">{selectedHero.special} ACTIVATED</span>
          </div>
        )}
      </div>
    </div>
  );
};

