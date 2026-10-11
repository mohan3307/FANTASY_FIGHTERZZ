import React, { useState } from 'react';
import {
  Shield,
  Zap,
  Sparkles,
  Crosshair,
  Flame,
  ArrowLeft,
  Check,
  UserCheck
} from 'lucide-react';
import { MARVEL_HEROES } from '../data/marvelHeroes';
import { sound } from '../utils/audio';
import confetti from 'canvas-confetti';

export const HeroSelectionPage = ({ onBackToHome, onConfirmHero }) => {
  const [selectedHeroId, setSelectedHeroId] = useState('spiderman');
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
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6, x: 0.5 },
        colors: [selectedHero.accentColor, selectedHero.secondaryColor, '#ffffff']
      });
    } catch (e) {}

    setTimeout(() => {
      setHeroConfirmed(false);
      if (onConfirmHero) onConfirmHero(selectedHero);
    }, 1800);
  };

  const getBadgeIcon = (type) => {
    switch (type) {
      case 'spider':
        return <Crosshair size={15} />;
      case 'thunder':
        return <Zap size={15} />;
      case 'shield':
        return <Shield size={15} />;
      case 'energy':
        return <Flame size={15} />;
      case 'magic':
        return <Sparkles size={15} />;
      default:
        return <Sparkles size={15} />;
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

        {/* Top Header: Logo & Title (matching reference image) */}
        <header className="rs-select-header">
          <div className="rs-select-header-brand">
            <div className="rs-select-logo-badge" onClick={onBackToHome}>
              <span className="rs-select-logo-main">REALITY SHIFT</span>
              <span className="rs-select-logo-sub">GESTURE ARENA</span>
            </div>
            <h2 className="rs-select-page-title">CHOOSE YOUR HERO</h2>
          </div>
        </header>

        {/* 5 Marvel Hero Cards Row */}
        <div className="rs-heroes-cards-row">
          {MARVEL_HEROES.map((hero, index) => {
            const isSelected = hero.id === selectedHeroId;
            return (
              <div
                key={hero.id}
                className={`rs-marvel-hero-card ${isSelected ? 'selected' : ''}`}
                style={{
                  '--hero-accent': hero.accentColor,
                  '--hero-glow': hero.glowColor,
                  '--hero-border': hero.borderColor,
                  animationDelay: `${0.08 + index * 0.08}s`
                }}
                onClick={() => handleSelectHero(hero)}
                onMouseEnter={() => sound.playHover()}
              >
                {/* Glowing Selected Halo */}
                {isSelected && <div className="rs-hero-card-halo"></div>}

                {/* Character Image Window */}
                <div className="rs-hero-image-wrap">
                  <img
                    src={hero.image}
                    alt={hero.name}
                    className="rs-hero-portrait-img"
                  />
                  <div className="rs-hero-image-overlay"></div>
                </div>

                {/* Card Meta & Details */}
                <div className="rs-hero-card-meta">
                  <h3 className="rs-hero-card-name">{hero.name}</h3>
                  <p className="rs-hero-card-tagline">{hero.tagline}</p>

                  <div className="rs-hero-badge-circle" style={{ borderColor: hero.accentColor, color: hero.accentColor }}>
                    {getBadgeIcon(hero.badgeType)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Bar: Back Button, Title Ticker, Select Button */}
        <footer className="rs-select-bottom-bar">
          {/* Back to Home Button */}
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

          {/* Central Ticker */}
          <div className="rs-select-footer-center">
            <span>»»</span>
            <span>REALITY SHIFT: GESTURE ARENA</span>
            <span>««</span>
          </div>

          {/* Select Hero Confirm Button */}
          <button
            className={`rs-btn-select-confirm ${heroConfirmed ? 'confirmed' : ''}`}
            onClick={handleConfirm}
          >
            {heroConfirmed ? (
              <>
                <Check size={18} />
                <span>{selectedHero.name} SELECTED!</span>
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
