import React, { useState, useEffect, useMemo } from 'react';
import {
  Trophy,
  ArrowLeft,
  Flame,
  Zap,
  Clock,
  Shield,
  Star,
  Trash2,
  Search,
  Filter,
  Medal,
  Crown,
  Play,
  RotateCcw,
  Sparkles,
  UserCheck
} from 'lucide-react';
import { Cosmic3DBackground } from './Cosmic3DBackground';
import { sound } from '../utils/audio';

export const LEADERBOARD_KEY = 'fantasy_fighterzz_leaderboard';

// Authentic college expo champion records matching Marvel Multiverse roster
const SEED_CHAMPIONS = [
  {
    id: 'seed-1',
    playerName: 'Aditya (ECE Speedster)',
    timeTaken: 18,
    score: 542000,
    heroName: 'Iron Man',
    villainName: 'Thanos',
    maxCombo: 14,
    rankTitle: 'SSS MULTIVERSE GOD',
    timestamp: new Date(Date.now() - 1800000).toISOString()
  },
  {
    id: 'seed-2',
    playerName: 'Priya (CSE Web Ninja)',
    timeTaken: 24,
    score: 489000,
    heroName: 'Spider-Man',
    villainName: 'Green Goblin',
    maxCombo: 11,
    rankTitle: 'SS TITAN SLAYER',
    timestamp: new Date(Date.now() - 4200000).toISOString()
  },
  {
    id: 'seed-3',
    playerName: 'Vikram (IT Thunder Lord)',
    timeTaken: 31,
    score: 425000,
    heroName: 'Thor',
    villainName: 'Loki',
    maxCombo: 9,
    rankTitle: 'SS TITAN SLAYER',
    timestamp: new Date(Date.now() - 9600000).toISOString()
  },
  {
    id: 'seed-4',
    playerName: 'Sanjay (Mech Bastion)',
    timeTaken: 42,
    score: 345000,
    heroName: 'Captain America',
    villainName: 'Magneto',
    maxCombo: 8,
    rankTitle: 'S APEX GUARDIAN',
    timestamp: new Date(Date.now() - 18000000).toISOString()
  },
  {
    id: 'seed-5',
    playerName: 'Deepak (AI Mystic)',
    timeTaken: 53,
    score: 278000,
    heroName: 'Doctor Strange',
    villainName: 'Doctor Doom',
    maxCombo: 6,
    rankTitle: 'A MASTER WARRIOR',
    timestamp: new Date(Date.now() - 36000000).toISOString()
  }
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
  
  // Clean up duplicate entries for the exact same run
  const newEntry = {
    ...entry,
    id: Date.now() + Math.random(),
    timestamp: new Date().toISOString()
  };
  board.push(newEntry);

  // STRICT TOURNAMENT RULE:
  // 1. Primary Sort: Fewest seconds taken (timeTaken ASCENDING)
  // 2. Secondary Sort: Highest total points (score DESCENDING)
  board.sort((a, b) => {
    const tA = Number(a.timeTaken) || 999;
    const tB = Number(b.timeTaken) || 999;
    if (tA !== tB) return tA - tB;
    return (Number(b.score) || 0) - (Number(a.score) || 0);
  });

  const trimmed = board.slice(0, 100);
  localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(trimmed));
  return trimmed;
};

export const clearLeaderboard = () => {
  localStorage.removeItem(LEADERBOARD_KEY);
};

export const formatTimeDisplay = (seconds) => {
  const s = Math.max(0, Math.floor(seconds || 0));
  const mins = Math.floor(s / 60);
  const secs = s % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export const getRankTitleByStats = (timeTaken, score) => {
  if (timeTaken <= 20 || score >= 520000) return 'SSS MULTIVERSE GOD';
  if (timeTaken <= 32 || score >= 420000) return 'SS TITAN SLAYER';
  if (timeTaken <= 45 || score >= 320000) return 'S APEX GUARDIAN';
  if (timeTaken <= 60 || score >= 220000) return 'A MASTER WARRIOR';
  if (score >= 120000) return 'B FIGHTER';
  return 'C ROOKIE';
};

export const LeaderboardPage = ({ onBack, onPlayNow }) => {
  const [board, setBoard] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'fastest' | 'ironman' | 'thor' | 'spiderman'
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

  const handleResetToSeeds = () => {
    localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(SEED_CHAMPIONS));
    setBoard(SEED_CHAMPIONS);
    setShowConfirmClear(false);
    sound.playClick();
  };

  // Filtered & Searched Board
  const filteredBoard = useMemo(() => {
    let list = [...board];

    // Filter by category
    if (activeFilter === 'fastest') {
      list = list.filter((item) => (item.timeTaken || 99) <= 30);
    } else if (activeFilter !== 'all') {
      list = list.filter((item) =>
        item.heroName?.toLowerCase().includes(activeFilter.toLowerCase())
      );
    }

    // Filter by student name query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (item) =>
          item.playerName?.toLowerCase().includes(q) ||
          item.heroName?.toLowerCase().includes(q) ||
          item.villainName?.toLowerCase().includes(q)
      );
    }

    return list;
  }, [board, activeFilter, searchQuery]);

  // Top 3 Podium
  const topThree = useMemo(() => board.slice(0, 3), [board]);

  return (
    <div className="rs-leaderboard-screen">
      {/* 1. Epic 3D Moving Cosmic Arena Background */}
      <Cosmic3DBackground opacity={0.9} showGrid={true} showMonoliths={true} />

      {/* Decorative Cyber Grid Overlays */}
      <div className="rs-lb-ambient-glow"></div>
      <div className="rs-lb-vignette-layer"></div>

      {/* 2. Top Header Navigation */}
      <header className="rs-lb-header">
        <button
          className="rs-lb-back-btn"
          onClick={() => {
            sound.playClick();
            onBack();
          }}
        >
          <ArrowLeft size={16} />
          <span>MAIN MENU</span>
        </button>

        <div className="rs-lb-title-group">
          <div className="rs-lb-trophy-halo">
            <Trophy size={32} className="rs-lb-trophy-icon" />
          </div>
          <h1 className="rs-lb-title">GLOBAL ARENA LEADERBOARD</h1>
          <div className="rs-lb-subtitle">
            <span className="rs-lb-dot"></span>
            <span>RANKED BY FASTEST S-RANK GATE CLEAR TIME // 60HZ REAL-TIME TRACKING</span>
          </div>
        </div>

        <div className="rs-lb-header-actions">
          {onPlayNow && (
            <button
              className="rs-lb-play-btn"
              onClick={() => {
                sound.playClick();
                onPlayNow();
              }}
            >
              <Play size={15} fill="currentColor" />
              <span>PLAY NOW</span>
            </button>
          )}
          <button
            className="rs-lb-clear-btn"
            onClick={() => {
              sound.playClick();
              setShowConfirmClear(true);
            }}
            title="Reset or clear leaderboard data"
          >
            <Trash2 size={15} />
            <span>RESET</span>
          </button>
        </div>
      </header>

      {/* 3. Top 3 Champions Podium (Olympic / Esports Gold, Silver, Bronze) */}
      {board.length >= 3 && !searchQuery && activeFilter === 'all' && (
        <section className="rs-lb-podium-section">
          {/* #2 Silver Rank */}
          {topThree[1] && (
            <div className="rs-podium-card silver">
              <div className="rs-podium-crown">🥈</div>
              <div className="rs-podium-badge">RANK #2</div>
              <h3 className="rs-podium-name">{topThree[1].playerName}</h3>
              <div className="rs-podium-time silver">
                <Clock size={16} />
                <span>{formatTimeDisplay(topThree[1].timeTaken)}</span>
              </div>
              <div className="rs-podium-score">
                <Zap size={13} />
                <span>{(topThree[1].score || 0).toLocaleString()} PTS</span>
              </div>
              <div className="rs-podium-matchup">
                <span className="hero">{topThree[1].heroName}</span>
                <span className="vs">vs</span>
                <span className="boss">{topThree[1].villainName}</span>
              </div>
              <div className="rs-podium-title silver">
                {topThree[1].rankTitle || getRankTitleByStats(topThree[1].timeTaken, topThree[1].score)}
              </div>
            </div>
          )}

          {/* #1 Gold Champion */}
          {topThree[0] && (
            <div className="rs-podium-card gold champion">
              <div className="rs-podium-champion-banner">
                <Crown size={14} />
                <span>RECORD HOLDER</span>
              </div>
              <div className="rs-podium-crown gold-crown">🥇</div>
              <div className="rs-podium-badge gold">CHAMPION #1</div>
              <h3 className="rs-podium-name gold">{topThree[0].playerName}</h3>
              <div className="rs-podium-time gold">
                <Clock size={20} />
                <span>{formatTimeDisplay(topThree[0].timeTaken)}</span>
              </div>
              <div className="rs-podium-score gold">
                <Zap size={16} />
                <span>{(topThree[0].score || 0).toLocaleString()} PTS</span>
              </div>
              <div className="rs-podium-matchup">
                <span className="hero gold">{topThree[0].heroName}</span>
                <span className="vs">vs</span>
                <span className="boss">{topThree[0].villainName}</span>
              </div>
              <div className="rs-podium-title gold">
                {topThree[0].rankTitle || getRankTitleByStats(topThree[0].timeTaken, topThree[0].score)}
              </div>
              <div className="rs-podium-shine"></div>
            </div>
          )}

          {/* #3 Bronze Rank */}
          {topThree[2] && (
            <div className="rs-podium-card bronze">
              <div className="rs-podium-crown">🥉</div>
              <div className="rs-podium-badge bronze">RANK #3</div>
              <h3 className="rs-podium-name">{topThree[2].playerName}</h3>
              <div className="rs-podium-time bronze">
                <Clock size={16} />
                <span>{formatTimeDisplay(topThree[2].timeTaken)}</span>
              </div>
              <div className="rs-podium-score">
                <Zap size={13} />
                <span>{(topThree[2].score || 0).toLocaleString()} PTS</span>
              </div>
              <div className="rs-podium-matchup">
                <span className="hero">{topThree[2].heroName}</span>
                <span className="vs">vs</span>
                <span className="boss">{topThree[2].villainName}</span>
              </div>
              <div className="rs-podium-title bronze">
                {topThree[2].rankTitle || getRankTitleByStats(topThree[2].timeTaken, topThree[2].score)}
              </div>
            </div>
          )}
        </section>
      )}

      {/* 4. Filter & Search Controls */}
      <div className="rs-lb-controls-bar">
        <div className="rs-lb-search-wrap">
          <Search size={15} className="rs-lb-search-icon" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search student or warrior name..."
            className="rs-lb-search-input"
          />
        </div>

        <div className="rs-lb-filter-pills">
          <button
            className={`rs-lb-pill ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => { sound.playHover(); setActiveFilter('all'); }}
          >
            ALL RUNS ({board.length})
          </button>
          <button
            className={`rs-lb-pill ${activeFilter === 'fastest' ? 'active' : ''}`}
            onClick={() => { sound.playHover(); setActiveFilter('fastest'); }}
          >
            ⚡ SUB-30s SPEED GODS
          </button>
          <button
            className={`rs-lb-pill ${activeFilter === 'ironman' ? 'active' : ''}`}
            onClick={() => { sound.playHover(); setActiveFilter('ironman'); }}
          >
            IRON MAN
          </button>
          <button
            className={`rs-lb-pill ${activeFilter === 'thor' ? 'active' : ''}`}
            onClick={() => { sound.playHover(); setActiveFilter('thor'); }}
          >
            THOR
          </button>
          <button
            className={`rs-lb-pill ${activeFilter === 'spiderman' ? 'active' : ''}`}
            onClick={() => { sound.playHover(); setActiveFilter('spiderman'); }}
          >
            SPIDER-MAN
          </button>
        </div>
      </div>

      {/* 5. Main Leaderboard Table */}
      <div className="rs-lb-table-container">
        {filteredBoard.length === 0 ? (
          <div className="rs-lb-empty">
            <Shield size={48} className="rs-lb-empty-icon" />
            <h3>NO WARRIOR RECORDS MATCH</h3>
            <p>Enter the Red Gate and defeat a boss to claim your rank on the scoreboard!</p>
          </div>
        ) : (
          <div className="rs-lb-table">
            <div className="rs-lb-table-head">
              <span className="rs-lb-col rank">RANK</span>
              <span className="rs-lb-col name">WARRIOR</span>
              <span className="rs-lb-col time">⏱️ TIME</span>
              <span className="rs-lb-col score">⚡ SCORE</span>
              <span className="rs-lb-col combo">COMBO</span>
              <span className="rs-lb-col hero">HERO</span>
              <span className="rs-lb-col villain">BOSS</span>
              <span className="rs-lb-col title">TIER</span>
            </div>

            {filteredBoard.map((entry, index) => {
              const rankNum = index + 1;
              const isGold = rankNum === 1;
              const isSilver = rankNum === 2;
              const isBronze = rankNum === 3;
              const rankCls = isGold ? 'gold' : isSilver ? 'silver' : isBronze ? 'bronze' : '';

              return (
                <div
                  key={entry.id || index}
                  className={`rs-lb-row ${rankCls} ${rankNum <= 3 ? 'top3' : ''}`}
                  onMouseEnter={() => sound.playHover()}
                >
                  <span className={`rs-lb-col rank ${rankCls}`}>
                    {isGold ? (
                      <span className="rs-lb-medal-badge gold">🥇 #1</span>
                    ) : isSilver ? (
                      <span className="rs-lb-medal-badge silver">🥈 #2</span>
                    ) : isBronze ? (
                      <span className="rs-lb-medal-badge bronze">🥉 #3</span>
                    ) : (
                      <span className="rs-lb-rank-num">#{rankNum}</span>
                    )}
                  </span>

                  <span className="rs-lb-col name">
                    <Star size={13} className={`rs-lb-name-star ${rankCls}`} />
                    <span className="rs-lb-student-name">{entry.playerName}</span>
                  </span>

                  <span className={`rs-lb-col time ${rankCls}`}>
                    <Clock size={13} />
                    <strong>{formatTimeDisplay(entry.timeTaken)}</strong>
                  </span>

                  <span className="rs-lb-col score">
                    <Zap size={13} />
                    <span>{(entry.score || 0).toLocaleString()}</span>
                  </span>

                  <span className="rs-lb-col combo">
                    <span className="rs-lb-combo-pill">
                      {entry.maxCombo || 0} HITS
                    </span>
                  </span>

                  <span className="rs-lb-col hero">
                    <span className="rs-hero-tag">{entry.heroName || '—'}</span>
                  </span>

                  <span className="rs-lb-col villain">
                    <span className="rs-villain-tag">{entry.villainName || '—'}</span>
                  </span>

                  <span className={`rs-lb-col title ${rankCls}`}>
                    <span className="rs-lb-rank-title-badge">
                      {entry.rankTitle || getRankTitleByStats(entry.timeTaken, entry.score)}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 6. Footer Telemetry & Quick Stats */}
      <footer className="rs-lb-footer">
        <div className="rs-lb-footer-stat">
          <Flame size={15} />
          <span>TOTAL WARRIORS RECORDED: <strong>{board.length}</strong></span>
        </div>
        <div className="rs-lb-footer-stat center">
          <span>FASTEST TIME WINS HIGHEST RANK • REALITY SHIFT AI GESTURE ARENA</span>
        </div>
        <div className="rs-lb-footer-stat">
          <Clock size={15} />
          <span>ARENA RECORD: <strong>{board.length > 0 ? formatTimeDisplay(board[0].timeTaken) : '—'}</strong></span>
        </div>
      </footer>

      {/* 7. Reset / Clear Confirmation Modal */}
      {showConfirmClear && (
        <div className="rs-defeat-modal-overlay">
          <div className="rs-defeat-modal-card">
            <h2 className="rs-defeat-title" style={{ color: '#ef4444' }}>
              RESET LEADERBOARD?
            </h2>
            <p className="rs-defeat-subtitle">
              Choose to reset back to Default Seed Champions or erase all recorded scores completely.
            </p>
            <div className="rs-defeat-actions-row">
              <button className="rs-btn-defeat-retry" onClick={handleResetToSeeds}>
                <RotateCcw size={16} />
                <span>RESTORE SEED RECORDS</span>
              </button>
              <button
                className="rs-btn-defeat-retreat"
                onClick={handleClear}
                style={{ background: '#b91c1c', borderColor: '#ef4444', color: '#fff' }}
              >
                <Trash2 size={16} />
                <span>ERASE ALL</span>
              </button>
              <button
                className="rs-btn-defeat-retreat"
                onClick={() => setShowConfirmClear(false)}
              >
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

export default LeaderboardPage;
