import React, { useState, useEffect } from 'react';
import {
  Play,
  BookOpen,
  Settings,
  Power,
  Zap,
  Gem,
  User,
  Volume2,
  VolumeX,
  Maximize2
} from 'lucide-react';
import { PortalParticles } from './components/PortalParticles';
import { HowToPlayModal } from './components/HowToPlayModal';
import { SettingsModal } from './components/SettingsModal';
import { QuitModal } from './components/QuitModal';
import { HeroSelectionPage } from './components/HeroSelectionPage';
import { VillainSelectionPage } from './components/VillainSelectionPage';
import { CameraPermissionModal } from './components/CameraPermissionModal';
import { BattleRulesModal } from './components/BattleRulesModal';
import { RedGateArenaPage } from './components/RedGateArenaPage';
import { FighterSlashTransition } from './components/FighterSlashTransition';
import { MARVEL_HEROES } from './data/marvelHeroes';
import { MARVEL_VILLAINS } from './data/marvelVillains';
import { preloadFighterModels } from './components/ThreeFighter3DModels';
import { preloadHandLandmarker } from './utils/gestureDetector';
import { sound } from './utils/audio';

export function App() {
  // Preload character 3D models and AI Vision model in background for instant camera & 0ms gesture response
  useEffect(() => {
    preloadFighterModels();
    preloadHandLandmarker();
  }, []);
  // Navigation State: 'home' | 'hero-select' | 'villain-select' | 'red-gate-battle'
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedHero, setSelectedHero] = useState(MARVEL_HEROES[0]);
  const [selectedVillain, setSelectedVillain] = useState(MARVEL_VILLAINS[0]); // Default Doctor Doom

  // Innovative Page Transition Warp State
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pendingTarget, setPendingTarget] = useState(null);
  const [warpTargetTitle, setWarpTargetTitle] = useState('');

  // Modals & Vision Hardware
  const [howToPlayOpen, setHowToPlayOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [quitOpen, setQuitOpen] = useState(false);
  const [cameraModalOpen, setCameraModalOpen] = useState(false);
  const [rulesModalOpen, setRulesModalOpen] = useState(false);
  const [cameraStream, setCameraStream] = useState(null);
  const [isSimulatedCamera, setIsSimulatedCamera] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Player Resources
  const [energy, setEnergy] = useState(1250);
  const [gems, setGems] = useState(320);

  const handleToggleMute = (e) => {
    e.stopPropagation();
    const muted = sound.toggleMute();
    setIsMuted(muted);
  };

  const handleFullscreen = (e) => {
    e.stopPropagation();
    sound.playClick();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  // High-tech Innovative Dimensional Warp Transition
  const navigateWithWarp = (targetPage, title) => {
    sound.playClick();
    sound.playPortalWarp();
    setPendingTarget(targetPage);
    setWarpTargetTitle(title);
    setIsTransitioning(true);
  };

  const handleWarpMidpoint = () => {
    if (pendingTarget) {
      setCurrentPage(pendingTarget);
      setPendingTarget(null);
    }
    setTimeout(() => {
      setIsTransitioning(false);
    }, 90);
  };

  // 1. Play Button on Home ➡️ Warp to Hero Selection
  const handlePlayClick = () => {
    navigateWithWarp('hero-select', 'HERO SELECTION');
  };

  // 2. Select Hero ➡️ Warp to Villain Selection
  const handleConfirmHero = (hero) => {
    setSelectedHero(hero);
    navigateWithWarp('villain-select', 'OPPONENT MATRIX');
  };

  // 3. Start Battle on Villain Selection ➡️ Prompt for Laptop Camera
  const handleStartBattleVillain = (hero, villain) => {
    setSelectedVillain(villain);
    setCameraModalOpen(true);
  };

  // 4. Camera Access Granted (or Simulated) ➡️ Open How To Play Conditions
  const handleCameraGranted = ({ stream, isSimulated }) => {
    setCameraStream(stream);
    setIsSimulatedCamera(isSimulated);
    setCameraModalOpen(false);
    setRulesModalOpen(true);
  };

  // 5. Enter Red Gate ➡️ Launch Red Gate Arena with Villain Entrance!
  const handleEnterRedGate = () => {
    setRulesModalOpen(false);
    navigateWithWarp('red-gate-battle', 'THE RED GATE');
  };

  const handleHowToPlayClick = () => {
    sound.playClick();
    sound.playModal();
    setHowToPlayOpen(true);
  };

  const handleSettingsClick = () => {
    sound.playClick();
    sound.playModal();
    setSettingsOpen(true);
  };

  const handleQuitClick = () => {
    sound.playClick();
    sound.playModal();
    setQuitOpen(true);
  };

  const handleQuitConfirm = () => {
    setQuitOpen(false);
    alert('Session safely terminated. Standby mode active.');
  };

  // Background Mode: 'heroes' (4K Cinematic Heroes Assemble) | 'arena' (4K Celestial Arena)
  const [homeBgMode, setHomeBgMode] = useState('heroes');

  return (
    <div className="rs-main-app-root">
      {/* 1. Page Content Router */}
      {currentPage === 'home' && (
        <div className="rs-screen-viewport">
          <div className="rs-stage-container rs-home-stage-4k">
            {/* Cinematic 4K Ultra Background Layer */}
            <img
              src={homeBgMode === 'heroes' ? '/assets/heroes_assemble_4k.jpg' : '/assets/marvel_arena_4k.jpg'}
              alt="Reality Shift 4K Gesture Arena"
              className="rs-stage-background-img rs-stage-bg-4k"
            />
            <div className="rs-stage-vignette-overlay"></div>
            <div className="rs-stage-ambient-pulse"></div>

            {/* 4K Interactive Energy Particle Canvas */}
            <PortalParticles />

            {/* Pristine 4K Top Navigation Bar */}
            <header className="rs-home-top-bar">
              {/* Brand Logo & Title on Left */}
              <div className="rs-home-brand-block" onClick={() => sound.playHover()}>
                <div className="rs-home-logo-glow"></div>
                <div className="rs-home-logo-emblem">⚡</div>
                <div className="rs-home-brand-text">
                  <h1 className="rs-main-title-clean">REALITY SHIFT</h1>
                  <div className="rs-sub-title-badge-clean">
                    <span className="rs-badge-dot"></span>
                    <span className="rs-sub-title-text">GESTURE ARENA 4K</span>
                    <span className="rs-badge-tag">ULTRA-HD</span>
                  </div>
                </div>
              </div>

              {/* Player Profile & Controls on Right */}
              <div className="rs-stage-top-hud rs-home-hud-clean">
                <div className="rs-hud-profile-badge">
                  <div className="rs-hud-avatar-icon">
                    <User size={14} />
                  </div>
                  <div className="rs-hud-profile-info">
                    <span className="rs-hud-user-name">Hero_001</span>
                    <span className="rs-hud-user-lvl">Lv. 5</span>
                  </div>
                  <div className="rs-hud-progress-track">
                    <div className="rs-hud-progress-bar" style={{ width: '65%' }}></div>
                  </div>
                </div>

                <div
                  className="rs-hud-currency-pill energy"
                  onClick={() => {
                    sound.playClick();
                    setEnergy((prev) => prev + 50);
                  }}
                  title="Click to recharge +50 Energy"
                >
                  <Zap size={14} className="rs-hud-curr-icon energy-icon" />
                  <span className="rs-hud-curr-amount">{energy.toLocaleString()}</span>
                  <span className="rs-hud-curr-plus">+</span>
                </div>

                <div
                  className="rs-hud-currency-pill gems"
                  onClick={() => {
                    sound.playClick();
                    setGems((prev) => prev + 10);
                  }}
                  title="Click to add +10 Crystals"
                >
                  <Gem size={14} className="rs-hud-curr-icon gems-icon" />
                  <span className="rs-hud-curr-amount">{gems.toLocaleString()}</span>
                  <span className="rs-hud-curr-plus">+</span>
                </div>

                {/* 4K Background Mode Switcher */}
                <button
                  className="rs-hud-bg-toggle-btn"
                  onClick={() => {
                    sound.playClick();
                    setHomeBgMode((prev) => (prev === 'heroes' ? 'arena' : 'heroes'));
                  }}
                  title="Toggle 4K Cinematic Scene"
                >
                  <span className="rs-bg-toggle-indicator">4K</span>
                  <span>{homeBgMode === 'heroes' ? 'HEROES' : 'ARENA'}</span>
                </button>

                <button
                  className="rs-hud-icon-btn"
                  onClick={handleToggleMute}
                  title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
                >
                  {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                </button>

                <button
                  className="rs-hud-icon-btn"
                  onClick={handleFullscreen}
                  title="Toggle Fullscreen"
                >
                  <Maximize2 size={14} />
                </button>
              </div>
            </header>

            {/* Main Interactive Stage Body */}
            <main className="rs-home-main-stage">
              {/* Left Side: High-Tech Combat Dossier & Gesture Controls */}
              <div className="rs-home-intel-card">
                <div className="rs-intel-glow-line"></div>
                <div className="rs-intel-header">
                  <span className="rs-intel-tag">OPTICAL AI COMBAT ENGINE</span>
                  <h2 className="rs-intel-title">CHOOSE YOUR DESTINY</h2>
                  <p className="rs-intel-desc">
                    Control superhero combat in real-time using physical hand gestures captured through your webcam or hotkeys.
                  </p>
                </div>

                {/* Quick Gesture Guide Mini Cards */}
                <div className="rs-intel-gestures-grid">
                  <div className="rs-intel-gesture-chip">
                    <span className="rs-gesture-icon">✋</span>
                    <div className="rs-gesture-chip-info">
                      <span className="rs-gesture-chip-title">OPEN PALM</span>
                      <span className="rs-gesture-chip-effect">Energy Shield Barrier</span>
                    </div>
                  </div>

                  <div className="rs-intel-gesture-chip">
                    <span className="rs-gesture-icon">✊</span>
                    <div className="rs-gesture-chip-info">
                      <span className="rs-gesture-chip-title">CLOSED FIST</span>
                      <span className="rs-gesture-chip-effect">Heavy Kinetic Strike</span>
                    </div>
                  </div>

                  <div className="rs-intel-gesture-chip">
                    <span className="rs-gesture-icon">✌️</span>
                    <div className="rs-gesture-chip-info">
                      <span className="rs-gesture-chip-title">V-SIGN</span>
                      <span className="rs-gesture-chip-effect">Elemental Ultimate</span>
                    </div>
                  </div>

                  <div className="rs-intel-gesture-chip">
                    <span className="rs-gesture-icon">💨</span>
                    <div className="rs-gesture-chip-info">
                      <span className="rs-gesture-chip-title">RAPID SWIPE</span>
                      <span className="rs-gesture-chip-effect">Quantum Reality Dodge</span>
                    </div>
                  </div>
                </div>

                <div className="rs-intel-status-pill">
                  <span className="rs-status-pulsar"></span>
                  <span>4K GRAPHICS • 60FPS MOTOR • ZERO DELAY</span>
                </div>
              </div>

              {/* Right Side: Sleek Chamfered Action Buttons */}
              <div className="rs-stage-menu-group rs-stage-menu-4k">
                <button
                  className="rs-stage-btn play chamfered rs-play-btn-4k"
                  onClick={handlePlayClick}
                  onMouseEnter={() => sound.playHover()}
                >
                  <div className="rs-btn-neon-sweep"></div>
                  <div className="rs-play-btn-glow"></div>
                  <Play size={32} fill="currentColor" className="rs-play-icon" />
                  <div className="rs-play-btn-text-wrap">
                    <span className="rs-btn-text-play">PLAY NOW</span>
                    <span className="rs-btn-subtext-play">ENTER RED GATE ARENA</span>
                  </div>
                </button>

                <button
                  className="rs-stage-btn nav chamfered"
                  onClick={handleHowToPlayClick}
                  onMouseEnter={() => sound.playHover()}
                >
                  <BookOpen size={19} className="rs-nav-icon" />
                  <span className="rs-nav-text">HOW TO PLAY</span>
                </button>

                <button
                  className="rs-stage-btn nav chamfered"
                  onClick={handleSettingsClick}
                  onMouseEnter={() => sound.playHover()}
                >
                  <Settings size={19} className="rs-nav-icon" />
                  <span className="rs-nav-text">SETTINGS</span>
                </button>

                <button
                  className="rs-stage-btn nav chamfered quit"
                  onClick={handleQuitClick}
                  onMouseEnter={() => sound.playHover()}
                >
                  <Power size={19} className="rs-nav-icon quit-icon" />
                  <span className="rs-nav-text">QUIT</span>
                </button>
              </div>
            </main>

            {/* Bottom Telemetry Bar */}
            <footer className="rs-home-footer-bar">
              <div className="rs-footer-left">
                <span className="rs-footer-tag">SYSTEM STATUS</span>
                <span className="rs-footer-val">READY // 4K 60HZ RESOLUTION</span>
              </div>
              <div className="rs-footer-center">
                <span>REALITY SHIFT GESTURE ARENA • MARVEL MULTIVERSE CLASH</span>
              </div>
              <div className="rs-footer-right">
                <span className="rs-footer-tag">AI VISION</span>
                <span className="rs-footer-val">STANDBY OPTICAL TRACKING</span>
              </div>
            </footer>
          </div>
        </div>
      )}

      {currentPage === 'hero-select' && (
        <HeroSelectionPage
          onBackToHome={() => navigateWithWarp('home', 'MAIN MENU')}
          onConfirmHero={handleConfirmHero}
        />
      )}

      {currentPage === 'villain-select' && (
        <VillainSelectionPage
          selectedHero={selectedHero}
          onBackToHeroSelect={() => navigateWithWarp('hero-select', 'HERO SELECTION')}
          onStartBattle={handleStartBattleVillain}
          isPaused={cameraModalOpen}
        />
      )}

      {currentPage === 'red-gate-battle' && (
        <RedGateArenaPage
          selectedHero={selectedHero}
          selectedVillain={selectedVillain}
          cameraStream={cameraStream}
          isSimulatedCamera={isSimulatedCamera}
          onExitArena={() => navigateWithWarp('home', 'MAIN MENU')}
        />
      )}

      {/* 2. Arcade Fighter Blade Slash Transition Overlay */}
      <FighterSlashTransition
        isTransitioning={isTransitioning}
        targetTitle={warpTargetTitle}
        onMidpoint={handleWarpMidpoint}
      />

      {/* 3. Hardware Camera Sensor Permission Modal */}
      <CameraPermissionModal
        isOpen={cameraModalOpen}
        onAccessGranted={handleCameraGranted}
        onClose={() => setCameraModalOpen(false)}
      />

      {/* 4. How To Play Red Gate Conditions Modal */}
      <BattleRulesModal
        isOpen={rulesModalOpen}
        selectedHero={selectedHero}
        selectedVillain={selectedVillain}
        onEnterGate={handleEnterRedGate}
      />

      {/* 5. General Modals */}
      <HowToPlayModal
        isOpen={howToPlayOpen}
        onClose={() => setHowToPlayOpen(false)}
      />

      <SettingsModal
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
      />

      <QuitModal
        isOpen={quitOpen}
        onClose={() => setQuitOpen(false)}
        onConfirm={handleQuitConfirm}
      />
    </div>
  );
}

export default App;
