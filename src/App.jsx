import React, { useState } from 'react';
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
import { QuantumWarpTransition } from './components/QuantumWarpTransition';
import { MARVEL_HEROES } from './data/marvelHeroes';
import { MARVEL_VILLAINS } from './data/marvelVillains';
import { sound } from './utils/audio';

export function App() {
  // Navigation State: 'home' | 'hero-select' | 'villain-select' | 'red-gate-battle'
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedHero, setSelectedHero] = useState(MARVEL_HEROES[0]);
  const [selectedVillain, setSelectedVillain] = useState(MARVEL_VILLAINS[1]); // Default Thanos

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
    }, 200);
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

  return (
    <div className="rs-main-app-root">
      {/* 1. Page Content Router */}
      {currentPage === 'home' && (
        <div className="rs-screen-viewport">
          <div className="rs-stage-container">
            {/* Cinematic Background Layer with Marvel Heroes Artwork */}
            <img
              src="/assets/marvel_heroes_bg.jpg"
              alt="Reality Shift Gesture Arena"
              className="rs-stage-background-img"
            />
            <div className="rs-stage-vignette-overlay"></div>
            <div className="rs-stage-ambient-pulse"></div>

            {/* Interactive Energy Particle Canvas */}
            <PortalParticles />

            {/* Top Center Brand Logo */}
            <div className="rs-stage-logo-container" onClick={() => sound.playHover()}>
              <div className="rs-logo-glow-aura"></div>
              <h1 className="rs-main-title">REALITY SHIFT</h1>
              <div className="rs-sub-title-badge">
                <span className="rs-sub-title-text">GESTURE ARENA</span>
              </div>
            </div>

            {/* Top Right Player HUD */}
            <div className="rs-stage-top-hud">
              <div className="rs-hud-profile-badge">
                <div className="rs-hud-avatar-icon">
                  <User size={13} />
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

            {/* Right Side Interactive Menu Buttons */}
            <div className="rs-stage-menu-group">
              <button
                className="rs-stage-btn play chamfered"
                onClick={handlePlayClick}
                onMouseEnter={() => sound.playHover()}
              >
                <div className="rs-btn-neon-sweep"></div>
                <Play size={30} fill="currentColor" className="rs-play-icon" />
                <span className="rs-btn-text-play">PLAY</span>
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

            {/* Bottom Left Hero Caption */}
            <div className="rs-home-destiny-caption">
              <div className="rs-destiny-accent-bracket"></div>
              <div className="rs-destiny-text-block">
                <p className="rs-destiny-line line-1">Step into the arena.</p>
                <p className="rs-destiny-line line-2">Choose your hero.</p>
                <p className="rs-destiny-line line-3">Face your destiny.</p>
              </div>
            </div>
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

      {/* 2. Innovative Quantum Warp Transition Overlay */}
      <QuantumWarpTransition
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
