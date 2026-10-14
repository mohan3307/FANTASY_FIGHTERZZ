import React, { useState, useEffect, useRef } from 'react';
import { User, Zap, Sparkles } from 'lucide-react';

export const StudentNameModal = ({ isOpen, onSubmit }) => {
  const [name, setName] = useState('');
  const [isShaking, setIsShaking] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed || trimmed.length < 2) {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      return;
    }
    onSubmit(trimmed);
  };

  return (
    <div className="rs-student-name-overlay">
      <div className={`rs-student-name-card ${isShaking ? 'shake' : ''}`}>
        <div className="rs-student-glow-orb">
          <User size={36} className="rs-student-icon" />
        </div>
        <div className="rs-student-spark-line"></div>
        <h2 className="rs-student-title">ENTER YOUR NAME, WARRIOR</h2>
        <p className="rs-student-desc">
          Your name will be recorded on the <strong>LEADERBOARD</strong>. The fastest fighters earn the highest rank!
        </p>
        <form onSubmit={handleSubmit} className="rs-student-form">
          <div className="rs-student-input-wrap">
            <Sparkles size={16} className="rs-student-input-icon" />
            <input
              ref={inputRef}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name..."
              className="rs-student-input"
              maxLength={24}
              autoComplete="off"
              spellCheck="false"
            />
          </div>
          <button type="submit" className="rs-student-submit-btn">
            <Zap size={18} />
            <span>ENTER THE ARENA</span>
          </button>
        </form>
        <div className="rs-student-footer-tag">
          <span className="rs-student-pulse-dot"></span>
          <span>LEADERBOARD TRACKING ACTIVE</span>
        </div>
      </div>
    </div>
  );
};
