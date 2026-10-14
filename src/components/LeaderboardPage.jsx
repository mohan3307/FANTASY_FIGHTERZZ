import React, { useState, useEffect } from 'react';
import { Trophy, ArrowLeft, Flame, Zap, Clock, Shield, Star, Trash2 } from 'lucide-react';
import { sound } from '../utils/audio';

const LEADERBOARD_KEY = 'fantasy_fighterzz_leaderboard';

const SEED_CHAMPIONS = [
  { id: 'seed-1', playerName: 'Arun (S-Rank Hunter)', timeTaken: 25, score: 535000, heroName: 'Sung Jin-Woo', villainName: 'Igris The Bloodred', timestamp: new Date(Date.now() - 3600000).toISOString() },
  { id: 'seed-2', playerName: 'Karthik (Titan Slayer)', timeTaken: 38, score: 470000, heroName: 'Iron Man', villainName: 'Thanos Titan', timestamp: new Date(Date.now() - 7200000).toISOString() },
  { id: 'seed-3', playerName: 'Dinesh (Saiyan Prime)', timeTaken: 46, score: 410000, heroName: 'Goku', villainName: 'Void Titan', timestamp: new Date(Date.now() - 14400000).toISOString() },
  { id: 'seed-4', playerName: 'Praveen (Web Striker)', timeTaken: 62, score: 320000, heroName: 'Spider-Man', villainName: 'Green Goblin', timestamp: new Date(Date.now() - 28800000).toISOString() }
];

export const getLeaderboard = () => {
  try {
    const data = localStorage.getItem(LEADERBOARD_KEY);
    if (!data) {
      localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(SEED_CHAMPIONS));
      return SEED_CHAMPIONS;
    }
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : SEED_CHAMPIONS;
  } catch {
    return SEED_CHAMPIONS;
  }
};

export const saveToLeaderboard = (entry) => {
  const board = getLeaderboard();
  board.push({
    ...entry,
    id: Date.now() + Math.random(),
    timestamp: new Date().toISOString()
  });
  // Sort strictly by fastest completion time (seconds ascending), then by score descending
  board.sort((a, b) => {
    if (a.timeTaken !== b.timeTaken) return a.timeTaken - b.timeTaken;
    return b.score - a.score;
  });
  // Keep top 50
  const trimmed = board.slice(0, 50);
  localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(trimmed));
  return trimmed;
};

export const clearLeaderboard = () => {
  localStorage.removeItem(LEADERBOARD_KEY);
};

export const LeaderboardPage = ({ onBack }) => {
  const [board, setBoard] = useState([]);
  const [showConfirmClear, setShowConfirmClear] = useState(false);

  useEffect(() => {
    setBoard(getLeaderboard());
  }, []);

  const handleClear = () => {
    clearLeaderboard();
    setBoard([]);
    setShowConfirmClear(false);
    sound.playClick();
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getRankBadge = (index) => {
    if (index === 0) return { emoji: '🥇', cls: 'gold' };
    if (index === 1) return { emoji: '🥈', cls: 'silver' };
    if (index === 2) return { emoji: '🥉', cls: 'bronze' };
    return { emoji: `#${index + 1}`, cls: '' };
  };

  const getRankTitle = (score) => {
    if (score >= 500000) return 'SSS TITAN SLAYER';
    if (score >= 400000) return 'SS S-RANK HERO';
    if (score >= 300000) return 'S GUARDIAN';
    if (score >= 200000) return 'A WARRIOR';
    if (score >= 100000) return 'B FIGHTER';
    return 'C ROOKIE';
  };

  return (
    <div className="rs-leaderboard-screen">
      {/* Animated background particles */}
      <div className="rs-lb-bg-particles"></div>
      <div className="rs-lb-bg-grid"></div>

      {/* Header */}
      <header className="rs-lb-header">
        <button className="rs-lb-back-btn" onClick={() => { sound.playClick(); onBack(); }}>
          <ArrowLeft size={16} />
          <span>BACK</span>
        </button>
        <div className="rs-lb-title-group">
          <Trophy size={28} className="rs-lb-trophy-icon" />
          <h1 className="rs-lb-title">LEADERBOARD</h1>
          <div className="rs-lb-subtitle">
            <span className="rs-lb-dot"></span>
            <span>FASTEST WARRIORS // REAL-TIME RANKINGS</span>
          </div>
        </div>
        <button
          className="rs-lb-clear-btn"
          onClick={() => { sound.playClick(); setShowConfirmClear(true); }}
        >
          <Trash2 size={14} />
          <span>CLEAR</span>
        </button>
      </header>

      {/* Leaderboard Table */}
      <div className="rs-lb-table-container">
        {board.length === 0 ? (
          <div className="rs-lb-empty">
            <Shield size={48} className="rs-lb-empty-icon" />
            <h3>NO WARRIORS YET</h3>
            <p>Defeat a boss to claim the first spot on the leaderboard!</p>
          </div>
        ) : (
          <div className="rs-lb-table">
            <div className="rs-lb-table-head">
              <span className="rs-lb-col rank">RANK</span>
              <span className="rs-lb-col name">WARRIOR NAME</span>
              <span className="rs-lb-col time">⏱️ TIME</span>
              <span className="rs-lb-col score">⚡ SCORE</span>
              <span className="rs-lb-col hero">HERO</span>
              <span className="rs-lb-col villain">VS BOSS</span>
              <span className="rs-lb-col title">TITLE</span>
            </div>
            {board.map((entry, i) => {
              const rb = getRankBadge(i);
              return (
                <div key={entry.id || i} className={`rs-lb-row ${rb.cls} ${i < 3 ? 'top3' : ''}`}>
                  <span className={`rs-lb-col rank ${rb.cls}`}>
                    <span className="rs-lb-rank-badge">{rb.emoji}</span>
                  </span>
                  <span className="rs-lb-col name">
                    <Star size={12} className="rs-lb-name-star" />
                    {entry.playerName}
                  </span>
                  <span className="rs-lb-col time">
                    <Clock size={12} />
                    {formatTime(entry.timeTaken)}
                  </span>
                  <span className="rs-lb-col score">
                    <Zap size={12} />
                    {entry.score?.toLocaleString()}
                  </span>
                  <span className="rs-lb-col hero">{entry.heroName || '—'}</span>
                  <span className="rs-lb-col villain">{entry.villainName || '—'}</span>
                  <span className={`rs-lb-col title ${rb.cls}`}>{getRankTitle(entry.score)}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Footer Stats */}
      <footer className="rs-lb-footer">
        <div className="rs-lb-footer-stat">
          <Flame size={14} />
          <span>TOTAL WARRIORS: {board.length}</span>
        </div>
        <div className="rs-lb-footer-stat">
          <span>REALITY SHIFT • GESTURE ARENA • LEADERBOARD</span>
        </div>
        <div className="rs-lb-footer-stat">
          <span>BEST TIME: {board.length > 0 ? formatTime(board[0].timeTaken) : '—'}</span>
        </div>
      </footer>

      {/* Confirm Clear Modal */}
      {showConfirmClear && (
        <div className="rs-defeat-modal-overlay">
          <div className="rs-defeat-modal-card">
            <h2 className="rs-defeat-title" style={{ color: '#ef4444' }}>CLEAR LEADERBOARD?</h2>
            <p className="rs-defeat-subtitle">This will erase all warrior records permanently.</p>
            <div className="rs-defeat-actions-row">
              <button className="rs-btn-defeat-retry" onClick={handleClear}>
                <Trash2 size={16} />
                <span>YES, CLEAR ALL</span>
              </button>
              <button className="rs-btn-defeat-exit" onClick={() => setShowConfirmClear(false)}>
                <ArrowLeft size={16} />
                <span>CANCEL</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
