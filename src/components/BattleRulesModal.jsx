import React from 'react';
import {
  ShieldAlert,
  Hand,
  Flame,
  Zap,
  Sparkles,
  ArrowRight,
  Skull,
  Swords
} from 'lucide-react';
import { sound } from '../utils/audio';

export const BattleRulesModal = ({ isOpen, selectedHero, selectedVillain, onEnterGate }) => {
  if (!isOpen) return null;

  const handleEnterGateClick = () => {
    sound.playClick();
    sound.playPortalWarp();
    if (onEnterGate) onEnterGate();
  };

  return (
    <div className="rs-modal-backdrop rules-modal-backdrop">
      <div className="rs-rules-modal-card">
        {/* Top Warning Banner */}
        <div className="rs-redgate-warning-bar">
          <ShieldAlert size={20} className="rs-redgate-warning-icon" />
          <span className="rs-redgate-warning-text">
            SYSTEM ALERT: S-RANK RED GATE ANOMALY DETECTED
          </span>
        </div>

        {/* Title */}
        <div className="rs-rules-header">
          <h2 className="rs-rules-title">RED GATE BATTLE CONDITIONS</h2>
          <p className="rs-rules-subtitle">
            The dimensional boundary has solidified. You cannot leave until the Dungeon Boss falls.
          </p>
        </div>

        {/* Matchup Summary Card */}
        <div className="rs-rules-matchup-strip">
          <div className="rs-matchup-side hero">
            <img
              src={selectedHero?.image || '/assets/hero_spiderman.jpg'}
              alt={selectedHero?.name}
              className="rs-matchup-avatar"
            />
            <div className="rs-matchup-meta">
              <span className="rs-matchup-tag">CHALLENGER</span>
              <span className="rs-matchup-name">{selectedHero?.name || 'HERO'}</span>
            </div>
          </div>

          <div className="rs-matchup-vs-badge">
            <Swords size={22} />
            <span>VS</span>
          </div>

          <div className="rs-matchup-side villain">
            <img
              src={selectedVillain?.image || '/assets/villain_thanos.jpg'}
              alt={selectedVillain?.name}
              className="rs-matchup-avatar villain"
            />
            <div className="rs-matchup-meta right">
              <span className="rs-matchup-tag villain">DUNGEON BOSS</span>
              <span className="rs-matchup-name villain">{selectedVillain?.name || 'VILLAIN'}</span>
            </div>
          </div>
        </div>

        {/* 4 Gesture Combat Actions */}
        <div className="rs-gesture-mechanics-grid">
          {/* 1. Open Palm */}
          <div className="rs-gesture-rule-card">
            <div className="rs-gesture-icon-wrap palm">
              <Hand size={24} />
            </div>
            <div className="rs-gesture-info">
              <span className="rs-gesture-name">OPEN PALM</span>
              <span className="rs-gesture-action">ENERGY DEFENSE BARRIER</span>
              <p className="rs-gesture-desc">Raise your flat palm to deploy an invulnerable energy shield and counter incoming strikes.</p>
            </div>
          </div>

          {/* 2. Closed Fist */}
          <div className="rs-gesture-rule-card">
            <div className="rs-gesture-icon-wrap fist">
              <Flame size={24} />
            </div>
            <div className="rs-gesture-info">
              <span className="rs-gesture-name">CLOSED FIST</span>
              <span className="rs-gesture-action">HEAVY KINETIC STRIKE</span>
              <p className="rs-gesture-desc">Clench your fist towards the camera to unleash a crushing 250% critical physical blow.</p>
            </div>
          </div>

          {/* 3. V-Sign */}
          <div className="rs-gesture-rule-card">
            <div className="rs-gesture-icon-wrap special">
              <Sparkles size={24} />
            </div>
            <div className="rs-gesture-info">
              <span className="rs-gesture-name">V-SIGN / TWO FINGERS</span>
              <span className="rs-gesture-action">ELEMENTAL ULTIMATE</span>
              <p className="rs-gesture-desc">Cast two fingers forward to trigger your hero's signature dimensional ultimate power.</p>
            </div>
          </div>

          {/* 4. Side Swipe */}
          <div className="rs-gesture-rule-card">
            <div className="rs-gesture-icon-wrap swipe">
              <Zap size={24} />
            </div>
            <div className="rs-gesture-info">
              <span className="rs-gesture-name">SIDE SWIPE</span>
              <span className="rs-gesture-action">QUANTUM REALITY DODGE</span>
              <p className="rs-gesture-desc">Swipe your hand rapidly left or right to warp out of lethal boss area-of-effect attacks.</p>
            </div>
          </div>
        </div>

        {/* Red Gate Rule Conditions */}
        <div className="rs-redgate-conditions-list">
          <div className="rs-condition-item">
            <span className="rs-cond-num">01.</span>
            <span>Real-time optical gestures translate immediately into hero battle abilities.</span>
          </div>
          <div className="rs-condition-item">
            <span className="rs-cond-num">02.</span>
            <span>Maintain clear hand visibility within your camera frame for minimum latency.</span>
          </div>
          <div className="rs-condition-item">
            <span className="rs-cond-num">03.</span>
            <span>Defeat the S-Rank Dungeon Boss to break the Red Gate and claim victory!</span>
          </div>
        </div>

        {/* Enter Gate Action Button */}
        <div className="rs-rules-modal-footer">
          <button className="rs-btn-enter-redgate" onClick={handleEnterGateClick}>
            <Skull size={20} />
            <span>ENTER THE RED GATE</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
