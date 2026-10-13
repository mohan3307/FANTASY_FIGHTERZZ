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
  ShieldAlert,
  Radio,
  Activity,
  AlertTriangle
} from 'lucide-react';
import { MARVEL_VILLAINS } from '../data/marvelVillains';
import { sound } from '../utils/audio';
import { Character3DPreview } from './Character3DPreview';
import confetti from 'canvas-confetti';

export const VillainSelectionPage = ({ selectedHero, onBackToHeroSelect, onStartBattle, isPaused = false }) => {
  const [selectedVillainId, setSelectedVillainId] = useState('doctor-doom');
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
    }, 80);
  };

  const getBadgeIcon = (type) => {
    switch (type) {
      case 'bomb':
        return <Flame size={14} />;
      case 'gauntlet':
        return <Sparkles size={14} />;
      case 'magnet':
        return <Zap size={14} />;
      case 'crown':
        return <Crown size={14} />;
      case 'horns':
        return <Skull size={14} />;
      default:
        return <Skull size={14} />;
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
            <div>
              <h2 className="rs-select-page-title villain-title">SELECT YOUR OPPONENT</h2>
              <div className="rs-select-sub-banner villain-sub-banner">
                <Radio size={12} className="rs-pulse-dot red" />
                <span>REAL-TIME 3D BOSS CHAMBER • THREAT MATRIX LEVEL: S-RANK</span>
              </div>
            </div>
          </div>

          {/* Current Player's Selected Hero Challenger Pill */}
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

        {/* Main 3-Column Showcase Stage: Left Boss Roster | Center 3D Boss Preview | Right Threat Dossier */}
        <div className="rs-character-select-body">
          {/* Left Column: Villain Roster List */}
          <div className="rs-select-roster-column">
            <div className="rs-roster-header villain-roster-header">
              <span>NEXUS THREAT ROSTER</span>
              <span className="rs-roster-count">{MARVEL_VILLAINS.length} BOSSES</span>
            </div>
            <div className="rs-roster-list">
              {MARVEL_VILLAINS.map((villain) => {
                const isSelected = villain.id === selectedVillainId;
                return (
                  <div
                    key={villain.id}
                    className={`rs-roster-item-card rs-villain-roster-card ${isSelected ? 'selected' : ''}`}
                    style={{
                      '--hero-accent': villain.accentColor,
                      '--hero-glow': villain.glowColor,
                      '--hero-border': villain.borderColor
                    }}
                    onClick={() => handleSelectVillain(villain)}
                    onMouseEnter={() => sound.playHover()}
                  >
                    <div className="rs-roster-item-avatar-wrap">
                      <img src={villain.image} alt={villain.name} className="rs-roster-item-avatar" />
                      <div className="rs-roster-item-badge" style={{ color: villain.accentColor }}>
                        {getBadgeIcon(villain.badgeType)}
                      </div>
                    </div>
                    <div className="rs-roster-item-info">
                      <div className="rs-roster-item-title">{villain.name}</div>
                      <div className="rs-roster-item-role">{villain.role}</div>
                      <div className="rs-roster-item-weapon">{villain.weaponName}</div>
                    </div>
                    {isSelected && <div className="rs-roster-active-indicator villain-indicator" />}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Center Column: Full-Body 3D Boss Hologram Preview */}
          <div className="rs-select-3d-stage">
            <div className="rs-3d-hologram-wrap villain-stage-wrap">
              <Character3DPreview character={selectedVillain} isVillain={true} isPaused={isPaused} />
            </div>

            <div className="rs-3d-hero-meta-badge villain-meta-badge" style={{ borderColor: selectedVillain.accentColor }}>
              <div className="rs-3d-hero-name" style={{ color: selectedVillain.accentColor }}>
                {selectedVillain.name}
              </div>
              <div className="rs-3d-hero-tagline">{selectedVillain.tagline}</div>
              <div className="rs-3d-hero-weapon-tag">
                <Skull size={13} />
                <span>{selectedVillain.weaponName}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Threat Assessment Dossier */}
          <div className="rs-select-dossier-column">
            <div className="rs-dossier-panel villain-dossier-panel">
              <div className="rs-dossier-header villain-dossier-header">
                <AlertTriangle size={14} style={{ color: selectedVillain.accentColor }} />
                <span>THREAT ASSESSMENT DOSSIER</span>
              </div>

              {/* Bio & Lore */}
              <div className="rs-dossier-bio">
                <p>{selectedVillain.description}</p>
              </div>

              {/* Boss Armament */}
              <div className="rs-dossier-weapon-box" style={{ borderColor: selectedVillain.accentColor }}>
                <div className="rs-dossier-label villain-label">ARMAMENT</div>
                <div className="rs-dossier-weapon-name">{selectedVillain.weaponName}</div>
                <p className="rs-dossier-weapon-desc">
                  High-yield destructive capabilities requiring parrying (Open Palm) or evasive maneuvers (Swipe/Dodge).
                </p>
              </div>

              {/* Animated Stat Meters */}
              <div className="rs-dossier-stats-group">
                <div className="rs-dossier-stat-row">
                  <div className="rs-dossier-stat-header">
                    <span>ANNIHILATION POWER</span>
                    <span className="rs-dossier-stat-val">{selectedVillain.stats.power}%</span>
                  </div>
                  <div className="rs-dossier-stat-track">
                    <div
                      className="rs-dossier-stat-bar power"
                      style={{ width: `${selectedVillain.stats.power}%`, background: selectedVillain.accentColor }}
                    />
                  </div>
                </div>

                <div className="rs-dossier-stat-row">
                  <div className="rs-dossier-stat-header">
                    <span>ARMOR REINFORCEMENT</span>
                    <span className="rs-dossier-stat-val">{selectedVillain.stats.defense}%</span>
                  </div>
                  <div className="rs-dossier-stat-track">
                    <div
                      className="rs-dossier-stat-bar defense"
                      style={{ width: `${selectedVillain.stats.defense}%` }}
                    />
                  </div>
                </div>

                <div className="rs-dossier-stat-row">
                  <div className="rs-dossier-stat-header">
                    <span>AGGRESSION & SPEED</span>
                    <span className="rs-dossier-stat-val">{selectedVillain.stats.speed}%</span>
                  </div>
                  <div className="rs-dossier-stat-track">
                    <div
                      className="rs-dossier-stat-bar speed"
                      style={{ width: `${selectedVillain.stats.speed}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Boss Cataclysm Attack */}
              <div className="rs-dossier-special-box villain-special-box">
                <div className="rs-dossier-special-label villain-special-label">CATACLYSMIC ATTACK</div>
                <div className="rs-dossier-special-name" style={{ color: selectedVillain.accentColor }}>
                  {selectedVillain.special}
                </div>
              </div>

              {/* Tactical Warning */}
              <div className="rs-dossier-controls-box villain-warning-box">
                <div className="rs-dossier-controls-title villain-warning-title">TACTICAL BRIEFING</div>
                <p className="rs-villain-briefing-text">
                  Red ground indicators telegraph incoming seismic slams. Execute timed Parry (Key 1 / Open Palm) to deflect and build Super Energy!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Back Button, Title Ticker, Start Battle Button */}
        <footer className="rs-select-bottom-bar">
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

          <div className="rs-select-footer-center villain-ticker">
            <span>»»</span>
            <span>REALITY SHIFT: ARENA CLASH • DIMENSIONAL GATEWAY ACTIVE</span>
            <span>««</span>
          </div>

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

