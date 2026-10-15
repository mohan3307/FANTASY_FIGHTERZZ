import React, { useState, useEffect, useRef } from 'react';
import { User, Zap, Sparkles, Trophy, Clock, X } from 'lucide-react';
import { sound } from '../utils/audio';

export const StudentNameModal = ({ isOpen, onSubmit, initialName = '', onClose }) => {
  const [name, setName] = useState(initialName || '');
  const [isShaking, setIsShaking] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      if (initialName) setName(initialName);
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
          inputRef.current.select();
        }
      }, 250);
    }
  }, [isOpen, initialName]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed || trimmed.length < 2) {
      setIsShaking(true);
      sound.playDefeatSound();
      setTimeout(() => setIsShaking(false), 500);
      return;
    }
    sound.playClick();
    onSubmit(trimmed);
  };

  return (
    <div className="rs-student-name-overlay">
      <div className={`rs-student-name-card ${isShaking ? 'shake' : ''}`}>
        {onClose && (
          <button
            type="button"
            className="rs-student-close-btn"
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            title="Cancel"
          >
            <X size={18} />
          </button>
        )}

        <div className="rs-student-glow-orb">
          <User size={38} className="rs-student-icon" />
        </div>

        <div className="rs-student-spark-line"></div>

        <span className="rs-student-tag-badge">
          <Sparkles size={13} />
          <span>TOURNAMENT REGISTRATION</span>
        </span>

        <h2 className="rs-student-title">ENTER STUDENT / WARRIOR NAME</h2>
        <p className="rs-student-desc">
          Enter your name to compete on the <strong>GLOBAL LEADERBOARD</strong>.
          <br />
          <span className="rs-student-highlight-text">
            ⏱️ Fastest completion time (fewest seconds) takes the <strong>#1 RANK</strong>!
          </span>
        </p>

        <form onSubmit={handleSubmit} className="rs-student-form">
          <div className="rs-student-input-wrap">
            <User size={18} className="rs-student-input-icon" />
            <input
              ref={inputRef}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Rahul (CSE), Priya..."
              className="rs-student-input"
              maxLength={28}
              autoComplete="off"
              spellCheck="false"
            />
          </div>

          <div className="rs-student-quick-info">
            <div className="rs-student-info-item">
              <Clock size={13} className="text-cyan-400" />
              <span>Speed Timer Active</span>
            </div>
            <div className="rs-student-info-item">
              <Trophy size={13} className="text-yellow-400" />
              <span>Rank #1 Podium Eligible</span>
            </div>
          </div>

          <button type="submit" className="rs-student-submit-btn">
            <Zap size={20} />
            <span>ENTER THE ARENA</span>
          </button>
        </form>

        <div className="rs-student-footer-tag">
          <span className="rs-student-pulse-dot"></span>
          <span>REAL-TIME AI GESTURE LEADERBOARD SYNC</span>
        </div>
      </div>
    </div>
  );
};

export default StudentNameModal;
