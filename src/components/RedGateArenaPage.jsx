import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft,
  RotateCcw,
  Zap,
  Shield,
  Eye,
  Camera,
  Flame,
  Award,
  AlertTriangle,
  AlertOctagon,
  Target,
  Sparkles,
  Play,
  Crosshair,
  Activity,
  Cpu
} from 'lucide-react';
import { ComputerVisionGestureEngine } from '../utils/gestureDetector';
import { ThreeBattleArena } from './ThreeBattleArena';
import { sound } from '../utils/audio';

export const RedGateArenaPage = ({
  selectedHero,
  selectedVillain,
  cameraStream,
  isSimulatedCamera,
  onExitArena
}) => {
  // Intro Sequence Phases: 'city-pan' -> 'hero-entrance' -> 'boss-entrance' -> 'cinematic-banner' -> 'countdown' -> 'active'
  const [introPhase, setIntroPhase] = useState('city-pan');
  const [countdownNum, setCountdownNum] = useState(3);
  const [expoMode, setExpoMode] = useState(true); // Expo Blitz 60s vs Standard 99s
  const [showCalibrationModal, setShowCalibrationModal] = useState(false);

  // NEW DEEP FIGHTING GAME STATS
  const maxHeroHp = 1000;
  const maxBossHp = 250000;
  const maxBossStagger = 30000;

  const [bossHp, setBossHp] = useState(250000);
  const [bossHpGhost, setBossHpGhost] = useState(250000);
  const [bossStaggerHp, setBossStaggerHp] = useState(30000);
  const [isBossStaggered, setIsBossStaggered] = useState(false);
  const [bossPhase, setBossPhase] = useState(1); // 1 = Normal, 2 = Enraged (<=60%), 3 = Overdrive (<=25%)

  const [heroHp, setHeroHp] = useState(1000);
  const [heroSuperEnergy, setHeroSuperEnergy] = useState(0); // 0% to 100% EX Gauge
  const [isHeroParrying, setIsHeroParrying] = useState(false);
  const [weaponCharged, setWeaponCharged] = useState(false);

  // Match Details & Score
  const [roundTime, setRoundTime] = useState(60); // 60s for Expo Blitz
  const [comboCount, setComboCount] = useState(0);
  const [maxComboReached, setMaxComboReached] = useState(0);
  const [totalDamageDealt, setTotalDamageDealt] = useState(0);
  const [activeGesture, setActiveGesture] = useState('Standby (Show Hand)');
  const [lastGestureType, setLastGestureType] = useState(null);
  const [combatBanner, setCombatBanner] = useState(null);
  const [combatLog, setCombatLog] = useState([]);
  const [isVictory, setIsVictory] = useState(false);
  const [isDefeated, setIsDefeated] = useState(false);
  const [cvConfidence, setCvConfidence] = useState(0);
  const [isScreenShaking, setIsScreenShaking] = useState(false);
  const [bossHitFlash, setBossHitFlash] = useState(false);
  const [damagePopups, setDamagePopups] = useState([]);
  const [incomingAttackWarning, setIncomingAttackWarning] = useState(false);
  const [heroActionTrigger, setHeroActionTrigger] = useState(null);

  // Telemetry Debug Info
  const [telemetry, setTelemetry] = useState({ fps: 60, aiState: 'APPROACH', distance: '3.8' });

  const pipVideoRef = useRef(null);
  const pipCanvasRef = useRef(null);
  const cvEngineRef = useRef(null);
  const gestureTimeoutRef = useRef(null);
  const comboTimerRef = useRef(null);
  const staggerTimerRef = useRef(null);
  const bannerTimerRef = useRef(null);
  const lastAttackTimeRef = useRef(0);

  const showBanner = (text, type = 'normal') => {
    setCombatBanner({ text, type });
    if (bannerTimerRef.current) clearTimeout(bannerTimerRef.current);
    bannerTimerRef.current = setTimeout(() => {
      setCombatBanner(null);
    }, 2200);
  };

  const addLog = (msg) => {
    setCombatLog((prev) => [msg, ...prev.slice(0, 4)]);
  };

  const triggerHitEffects = (dmg, isCrit) => {
    setIsScreenShaking(true);
    setBossHitFlash(true);
    const newPopup = {
      id: Date.now() + Math.random(),
      text: `-${dmg.toLocaleString()}${isCrit ? ' CRIT!' : ''}`,
      isCrit,
      x: (Math.random() - 0.5) * 80,
      y: (Math.random() - 0.5) * 60
    };
    setDamagePopups((prev) => [...prev.slice(-3), newPopup]);

    setTimeout(() => setBossHitFlash(false), 140);
    setTimeout(() => setIsScreenShaking(false), 240);
    setTimeout(() => {
      setDamagePopups((prev) => prev.filter((p) => p.id !== newPopup.id));
    }, 850);
  };

  // Cinematic Trailer Intro Sequence Timing (City -> Hero -> Void Titan -> Banner -> Countdown)
  useEffect(() => {
    sound.playPortalWarp();

    // 1. City Pan & Energy Portal Awakening (0.0s - 1.4s)
    const t1 = setTimeout(() => {
      setIntroPhase('hero-entrance');
      sound.playLaserBeam(false);
    }, 1400);

    // 2. Hero Drops In & Weapon Materialization (1.4s - 3.0s)
    const t2 = setTimeout(() => {
      setIntroPhase('boss-entrance');
      sound.playPortalWarp();
    }, 3000);

    // 3. Void Titan Steps Through Dark Vortex (3.0s - 4.6s)
    const t3 = setTimeout(() => {
      setIntroPhase('cinematic-banner');
      sound.playModal();
    }, 4600);

    // 4. Countdown 3, 2, 1, FIGHT! (4.6s - 7.6s)
    const t4 = setTimeout(() => {
      setIntroPhase('countdown');
      setCountdownNum(3);
      sound.playClick();
    }, 6200);

    const t5 = setTimeout(() => {
      setCountdownNum(2);
      sound.playClick();
    }, 7000);

    const t6 = setTimeout(() => {
      setCountdownNum(1);
      sound.playClick();
    }, 7800);

    const t7 = setTimeout(() => {
      setCountdownNum('FIGHT!');
      sound.playThunder();
    }, 8600);

    const t8 = setTimeout(() => {
      setIntroPhase('active');
      addLog(`[SYSTEM] Battle active! S-Rank Boss ${selectedVillain?.name || 'VOID TITAN'} engaged!`);
      addLog(`[TUTORIAL] Strike [2] or Push Forward. Shield [1] Parries attacks. Ultimate [4] at 100%!`);
    }, 9200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(t7);
      clearTimeout(t8);
    };
  }, [selectedVillain]);

  // Skip Intro Button Handler
  const handleSkipIntro = () => {
    setIntroPhase('active');
    sound.playClick();
    addLog(`[SYSTEM] Intro bypassed. Battle active!`);
  };

  // Round Clock Timer (Countdown)
  useEffect(() => {
    if (introPhase !== 'active' || isVictory || isDefeated) return;
    const interval = setInterval(() => {
      setRoundTime((prev) => {
        if (prev <= 1) {
          // Time Over condition
          if (heroHp > 0 && bossHp > 0) {
            if (heroHp > (maxHeroHp * 0.35)) triggerVictory();
            else triggerDefeat();
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [introPhase, isVictory, isDefeated, heroHp, bossHp]);

  // Ghost HP Catchup Bar
  useEffect(() => {
    const timer = setTimeout(() => {
      setBossHpGhost(bossHp);
    }, 350);
    return () => clearTimeout(timer);
  }, [bossHp]);

  // Bind live camera stream to PIP and start Computer Vision Detection Engine
  useEffect(() => {
    if (cameraStream && pipVideoRef.current) {
      pipVideoRef.current.srcObject = cameraStream;
      pipVideoRef.current.onloadedmetadata = () => {
        pipVideoRef.current.play().catch(() => {});

        if (pipCanvasRef.current) {
          pipCanvasRef.current.width = pipVideoRef.current.videoWidth || 320;
          pipCanvasRef.current.height = pipVideoRef.current.videoHeight || 240;

          cvEngineRef.current = new ComputerVisionGestureEngine(
            pipVideoRef.current,
            pipCanvasRef.current,
            (res) => {
              setCvConfidence(Math.round(res.confidence * 100));
              if (introPhase === 'active' && !isVictory && !isDefeated) {
                handleTriggerGesture(res.gesture, true);
              }
            }
          );
          cvEngineRef.current.start();
        }
      };
    }

    return () => {
      if (cvEngineRef.current) {
        cvEngineRef.current.stop();
        cvEngineRef.current = null;
      }
    };
  }, [cameraStream, introPhase, isVictory, isDefeated]);

  // Keyboard Hotkeys Fallback Controls:
  // [1] = Parry / Shield (Open Palm)
  // [2] = Weapon Charge (Closed Fist)
  // [3] or [E] = Aim Beam (Pointing)
  // [Space] or [F] = Kinetic Strike (Forward Push)
  // [4] or [R] = Special Ability (Both Hands)
  // [A] / [D] / [W] = Warp Dodge (Sideways)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (introPhase !== 'active' || isVictory || isDefeated) return;
      if (e.key === '1') handleTriggerGesture('palm', false);
      if (e.key === '2') handleTriggerGesture('fist', false);
      if (e.key === '3' || e.key.toLowerCase() === 'e') handleTriggerGesture('point', false);
      if (e.key === ' ' || e.key.toLowerCase() === 'f') handleTriggerGesture('forward', false);
      if (e.key === '4' || e.key.toLowerCase() === 'r') handleTriggerGesture('both_hands', false);
      if (e.key.toLowerCase() === 'a' || e.key.toLowerCase() === 'd' || e.key.toLowerCase() === 'w') {
        handleTriggerGesture('swipe', false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [introPhase, isVictory, isDefeated, heroSuperEnergy, incomingAttackWarning, isBossStaggered]);

  // COMBAT GESTURE TRIGGER (Full 6 Hand Controls & Reaction Logic)
  const handleTriggerGesture = (gestureType, fromCV = false) => {
    const now = Date.now();
    if (now - lastAttackTimeRef.current < 260) return;
    lastAttackTimeRef.current = now;

    setLastGestureType(gestureType);

    if (gestureTimeoutRef.current) {
      clearTimeout(gestureTimeoutRef.current);
    }

    // 1. OPEN PALM // ENERGY SHIELD & PERFECT PARRY
    if (gestureType === 'palm') {
      if (incomingAttackWarning) {
        // == PERFECT PARRY! ==
        setIsHeroParrying(true);
        setActiveGesture('🛡️ PERFECT PARRY! 100% DEFLECTED');
        sound.playShieldBlock();
        setHeroActionTrigger({ type: 'palm', id: Date.now() });

        setBossStaggerHp((prev) => {
          const next = Math.max(0, prev - 9500);
          if (next === 0 && !isBossStaggered) triggerStaggerBreak();
          return next;
        });
        setHeroSuperEnergy((prev) => Math.min(100, prev + 28));
        showBanner('🛡️ PERFECT PARRY! +28% SUPER ENERGY!', 'parry');
        addLog(`${fromCV ? '[CV VISION]' : '[INPUT]'} 🛡️ PERFECT PARRY! Deflected attack with 0 damage & gained +28% Energy!`);

        setTimeout(() => setIsHeroParrying(false), 900);
      } else {
        setActiveGesture('🖐️ ENERGY SHIELD BRACED');
        sound.playHover();
        setHeroActionTrigger({ type: 'palm', id: Date.now() });
        addLog(`${fromCV ? '[CV VISION]' : '[INPUT]'} 🛡️ Raised Energy Shield Guard!`);
      }

      gestureTimeoutRef.current = setTimeout(() => {
        setActiveGesture('Standby (Show Hand)');
        setLastGestureType(null);
      }, 2400);
    }

    // 2. CLOSED FIST // WEAPON CHARGE
    else if (gestureType === 'fist') {
      setActiveGesture('✊ WEAPON ENERGY CHARGING');
      setWeaponCharged(true);
      sound.playLaserBeam(false);
      setHeroSuperEnergy((prev) => Math.min(100, prev + 15));
      showBanner('⚡ WEAPON CHARGED! (+15% ENERGY)', 'ready');
      addLog(`${fromCV ? '[CV VISION]' : '[INPUT]'} ✊ Channeled kinetic plasma into weapon! Next strike empowered!`);

      gestureTimeoutRef.current = setTimeout(() => {
        setActiveGesture('Standby (Show Hand)');
        setLastGestureType(null);
      }, 1600);
    }

    // 3. INDEX POINTING // TARGETED AIM BEAM
    else if (gestureType === 'point') {
      setActiveGesture(`☝️ TARGETED CORE AIM // ${selectedHero?.weaponName || 'BEAM'}`);
      sound.playLaserBeam(true);

      const baseDmg = weaponCharged ? 6500 : 4200;
      setWeaponCharged(false);

      setBossHp((prev) => {
        const next = Math.max(0, prev - baseDmg);
        checkBossPhase(next);
        if (next === 0) triggerVictory();
        return next;
      });

      triggerHitEffects(baseDmg, true);
      setHeroActionTrigger({ type: 'point', id: Date.now() });
      showBanner(`🎯 DIRECT HIT! -${baseDmg.toLocaleString()} DMG!`, 'info');
      addLog(`${fromCV ? '[CV VISION]' : '[INPUT]'} 🎯 Pointing aim beam penetrated ${selectedVillain?.name}'s core for ${baseDmg.toLocaleString()} DMG!`);

      gestureTimeoutRef.current = setTimeout(() => {
        setActiveGesture('Standby (Show Hand)');
        setLastGestureType(null);
      }, 1400);
    }

    // 4. QUICK FORWARD HAND MOVEMENT // KINETIC COMBO STRIKE
    else if (gestureType === 'forward') {
      setActiveGesture('🥊 KINETIC COMBO STRIKE');

      // Combo count handling
      setComboCount((prev) => {
        const next = prev + 1;
        if (next > maxComboReached) setMaxComboReached(next);
        if (comboTimerRef.current) clearTimeout(comboTimerRef.current);
        comboTimerRef.current = setTimeout(() => setComboCount(0), 2800);
        return next;
      });

      let baseDmg = Math.floor(Math.random() * 800) + 3200;
      if (weaponCharged) {
        baseDmg += 2400;
        setWeaponCharged(false);
      }
      const comboMult = 1 + Math.min(0.35, comboCount * 0.035);
      if (isBossStaggered) baseDmg *= 1.85;
      const finalDmg = Math.round(baseDmg * comboMult);

      setTotalDamageDealt((prev) => prev + finalDmg);

      setBossHp((prev) => {
        const next = Math.max(0, prev - finalDmg);
        checkBossPhase(next);
        if (next === 0) triggerVictory();
        return next;
      });

      if (!isBossStaggered) {
        setBossStaggerHp((prev) => {
          const next = Math.max(0, prev - 4800);
          if (next === 0) triggerStaggerBreak();
          return next;
        });
      }

      setHeroSuperEnergy((prev) => {
        const gain = isBossStaggered ? 18 : 12;
        const next = Math.min(100, prev + gain);
        if (next === 100 && prev < 100) {
          showBanner('⚡ SPECIAL ABILITY READY! (RAISE BOTH HANDS / 4)', 'ready');
        }
        return next;
      });

      triggerHitEffects(finalDmg, isBossStaggered);
      setHeroActionTrigger({ type: 'forward', id: Date.now() });
      addLog(`${fromCV ? '[CV VISION]' : '[INPUT]'} 💥 Strike struck ${selectedVillain?.name} for ${finalDmg.toLocaleString()} DMG!`);

      gestureTimeoutRef.current = setTimeout(() => {
        setActiveGesture('Standby (Show Hand)');
        setLastGestureType(null);
      }, 1200);
    }

    // 5. BOTH HANDS RAISED // SPECIAL ABILITY OVERDRIVE
    else if (gestureType === 'both_hands' || gestureType === 'vsign') {
      if (heroSuperEnergy < 100) {
        sound.playHover();
        showBanner(`⚠️ SPECIAL CHARGING: ${heroSuperEnergy}% / 100%`, 'warning');
        addLog(`⚠️ Super Gauge at ${heroSuperEnergy}%. Land Strikes or Parries to reach 100%!`);
        return;
      }

      setHeroSuperEnergy(0);
      setActiveGesture(`🙌 ${selectedHero?.special || 'CATACLYSM SPECIAL ATTACK'}`);

      let ultDmg = Math.floor(Math.random() * 6000) + 42000;
      if (isBossStaggered) ultDmg = Math.round(ultDmg * 1.85);

      setTotalDamageDealt((prev) => prev + ultDmg);

      setBossHp((prev) => {
        const next = Math.max(0, prev - ultDmg);
        checkBossPhase(next);
        if (next === 0) triggerVictory();
        return next;
      });

      triggerHitEffects(ultDmg, true);
      sound.playPortalWarp();
      setHeroActionTrigger({ type: 'both_hands', id: Date.now() });
      showBanner(`🔥 SPECIAL CATACLYSM! -${ultDmg.toLocaleString()} DMG!`, 'ult');
      addLog(`${fromCV ? '[CV VISION]' : '[INPUT]'} ⚡ ${selectedHero?.name} unleashed ${selectedHero?.special} for ${ultDmg.toLocaleString()} DMG!`);

      gestureTimeoutRef.current = setTimeout(() => {
        setActiveGesture('Standby (Show Hand)');
        setLastGestureType(null);
      }, 2000);
    }

    // 6. SIDEWAYS HAND MOVEMENT // WARP DODGE
    else if (gestureType === 'swipe') {
      setActiveGesture('↔️ QUANTUM WARP DODGE');
      sound.playHover();
      setHeroActionTrigger({ type: 'swipe', id: Date.now() });

      if (incomingAttackWarning) {
        setHeroSuperEnergy((prev) => Math.min(100, prev + 14));
        showBanner('🌀 PERFECT DODGE! +14% ENERGY!', 'dodge');
      }

      addLog(`${fromCV ? '[CV VISION]' : '[INPUT]'} 🌀 ${selectedHero?.name} phased through attack zone!`);

      gestureTimeoutRef.current = setTimeout(() => {
        setActiveGesture('Standby (Show Hand)');
        setLastGestureType(null);
      }, 1200);
    }
  };

  // Trigger Boss Stagger Break Window (4.2s Stun & 1.85x Damage)
  const triggerStaggerBreak = () => {
    setIsBossStaggered(true);
    sound.playPortalWarp();
    showBanner('⚡ STAGGER BREAK! 1.85x CRIT WINDOW!', 'stagger');
    addLog(`⚡ GUARD BROKEN! ${selectedVillain?.name} is STAGGERED! Unleash all attacks!`);

    if (staggerTimerRef.current) clearTimeout(staggerTimerRef.current);
    staggerTimerRef.current = setTimeout(() => {
      setIsBossStaggered(false);
      setBossStaggerHp(maxBossStagger);
      addLog(`🛡️ ${selectedVillain?.name} recovered their Guard Shield!`);
    }, 4200);
  };

  // Boss Multi-Phase Tracker
  const checkBossPhase = (currentHp) => {
    const hpRatio = currentHp / maxBossHp;
    if (hpRatio <= 0.25 && bossPhase < 3) {
      setBossPhase(3);
      sound.playThunder();
      showBanner('⚡ BOSS OVERDRIVE! APOCALYPTIC PHASE!', 'phase');
      addLog(`🚨 WARNING: ${selectedVillain?.name} entered DESPERATION OVERDRIVE! Attacks every 2.4s!`);
    } else if (hpRatio <= 0.60 && bossPhase < 2) {
      setBossPhase(2);
      sound.playLaserBeam(true);
      showBanner('🔥 BOSS ENRAGED! ATTACK SPEED INCREASED!', 'phase');
      addLog(`🔥 WARNING: ${selectedVillain?.name} is ENRAGED! Damage and fury elevated!`);
    }
  };

  // Handle Hero Taking Damage from Villain Strikes
  const handleHeroDamaged = (wasShielding) => {
    if (wasShielding) {
      addLog(`🛡️ Hero Shield absorbed 100% of the kinetic blow! No damage taken!`);
      return;
    }

    const baseEnemyDmg = bossPhase === 3 ? 180 : bossPhase === 2 ? 140 : 110;
    const dmg = baseEnemyDmg + Math.floor(Math.random() * 30);

    setHeroHp((prev) => {
      const next = Math.max(0, prev - dmg);
      if (next === 0) triggerDefeat();
      return next;
    });

    setIsScreenShaking(true);
    setTimeout(() => setIsScreenShaking(false), 260);
    showBanner(`⚠️ IMPACT TAKEN! -${dmg} HP!`, 'warning');
    addLog(`💥 ${selectedVillain?.name} slammed ${selectedHero?.name} for ${dmg} DMG!`);
  };

  const triggerVictory = () => {
    setIsVictory(true);
    sound.playVictoryFanfare();
    showBanner('🏆 VICTORY! TITAN DEFEATED!', 'victory');
    addLog(`🏆 GLORY! ${selectedVillain?.name} collapsed! S-Rank Gate successfully sealed!`);
  };

  const triggerDefeat = () => {
    setIsDefeated(true);
    sound.playDefeatSound();
    showBanner('💀 DEFEAT! GATE COLLAPSED!', 'defeat');
    addLog(`💀 DEFEATED: ${selectedHero?.name} fell in combat.`);
  };

  const handleRetryBattle = () => {
    setBossHp(maxBossHp);
    setBossHpGhost(maxBossHp);
    setBossStaggerHp(maxBossStagger);
    setIsBossStaggered(false);
    setBossPhase(1);
    setHeroHp(maxHeroHp);
    setHeroSuperEnergy(0);
    setComboCount(0);
    setRoundTime(expoMode ? 60 : 99);
    setIsDefeated(false);
    setIsVictory(false);
    setIncomingAttackWarning(false);
    setHeroActionTrigger(null);
    setIntroPhase('active');
    addLog(`[SYSTEM] Battle reset. S-Rank Gate reopened. Engage!`);
  };

  // Calculate Expo Visitor Score and Rank
  const calculateExpoScore = () => {
    const timeBonus = roundTime * 1200;
    const comboBonus = maxComboReached * 4500;
    const hpBonus = heroHp * 80;
    const baseScore = totalDamageDealt > 0 ? totalDamageDealt : 250000;
    const totalScore = baseScore + timeBonus + comboBonus + hpBonus;

    let rank = 'A WARRIOR';
    if (totalScore > 320000) rank = 'SSS TITAN SLAYER';
    else if (totalScore > 280000) rank = 'SS S-RANK HERO';
    else if (totalScore > 240000) rank = 'S GUARDIAN';

    return { totalScore: Math.round(totalScore), rank };
  };

  const expoResults = calculateExpoScore();

  // Percentages for HUD
  const heroHpPercent = Math.max(0, (heroHp / maxHeroHp) * 100);
  const bossHpPercent = Math.max(0, (bossHp / maxBossHp) * 100);
  const bossHpGhostPercent = Math.max(0, (bossHpGhost / maxBossHp) * 100);
  const bossStaggerPercent = Math.max(0, (bossStaggerHp / maxBossStagger) * 100);

  return (
    <div
      className={`rs-redgate-arena-screen phase-${introPhase} ${
        isScreenShaking ? 'screen-shake' : ''
      }`}
    >
      {/* 1. Portal Atmospheric Background */}
      <video
        className="rs-redgate-portal-video-bg"
        autoPlay
        loop
        muted
        playsInline
        src="/assets/red_gate_portal.mp4"
      />

      <div className="rs-redgate-blood-fog"></div>
      <div className="rs-redgate-vignette-overlay"></div>

      {/* 2. 3D WebGL BATTLE ARENA (Fighters, Cyber City, Portals & VFX) */}
      <ThreeBattleArena
        selectedHero={selectedHero}
        selectedVillain={selectedVillain}
        introPhase={introPhase}
        heroHp={heroHp}
        bossHp={bossHp}
        isBossStaggered={isBossStaggered}
        bossPhase={bossPhase}
        heroSuperEnergy={heroSuperEnergy}
        activeGesture={activeGesture}
        onHeroDamaged={handleHeroDamaged}
        incomingAttackWarning={incomingAttackWarning}
        setIncomingAttackWarning={setIncomingAttackWarning}
        heroActionTrigger={heroActionTrigger}
        isVictory={isVictory}
        isDefeated={isDefeated}
        onTelemetryUpdate={setTelemetry}
      />

      {/* ============================================================
          3. CINEMATIC TRAILER INTRO OVERLAYS
          ============================================================ */}
      {introPhase !== 'active' && !isVictory && !isDefeated && (
        <div className="rs-cinematic-intro-overlay">
          {/* Skip Intro Button for Quick Expo Visitors */}
          <button className="rs-skip-intro-btn" onClick={handleSkipIntro}>
            <span>SKIP INTRO</span>
            <Play size={12} />
          </button>

          {/* Banner Phase: "CHOOSE YOUR POWER. DEFEND YOUR WORLD." */}
          {introPhase === 'cinematic-banner' && (
            <div className="rs-cinematic-quote-banner">
              <span className="rs-quote-sub">VISION WARRIORS // AI ARENA</span>
              <h1 className="rs-quote-main">CHOOSE YOUR POWER. DEFEND YOUR WORLD.</h1>
              <p className="rs-quote-desc">A S-Rank Void Anomaly has manifested in Neo-City. Engage with hand gesture controls!</p>
            </div>
          )}

          {/* Weapon Materialization Notification */}
          {introPhase === 'hero-entrance' && (
            <div className="rs-cinematic-weapon-popup">
              <span className="rs-weapon-pop-tag">WEAPON PROTOCOL ENGAGED</span>
              <h2 className="rs-weapon-pop-title">{selectedHero?.weaponName || 'QUANTUM WEAPON'}</h2>
              <p className="rs-weapon-pop-desc">{selectedHero?.weaponDesc}</p>
            </div>
          )}

          {/* Void Titan Entrance Notification */}
          {introPhase === 'boss-entrance' && (
            <div className="rs-cinematic-boss-popup">
              <span className="rs-boss-pop-tag">ORIGINAL AI BOSS MANIFESTED</span>
              <h2 className="rs-boss-pop-title">{selectedVillain?.name || 'VOID TITAN'}</h2>
              <p className="rs-boss-pop-desc">{selectedVillain?.title || 'HARBINGER OF THE ABYSS'}</p>
            </div>
          )}

          {/* 3, 2, 1, FIGHT Countdown */}
          {introPhase === 'countdown' && (
            <div className="rs-cinematic-countdown-box">
              <span className={`rs-countdown-number ${countdownNum === 'FIGHT!' ? 'fight' : ''}`}>
                {countdownNum}
              </span>
            </div>
          )}
        </div>
      )}

      {/* ============================================================
          4. AAA FIGHTING GAME DUAL HUD: HERO & VOID TITAN
          ============================================================ */}
      <header className="rs-fight-master-hud">
        {/* Minimal Corner Exit & Expo Toggle Buttons */}
        <div className="rs-hud-left-actions">
          <button
            className="rs-fight-exit-btn"
            onClick={() => {
              sound.playClick();
              if (onExitArena) onExitArena();
            }}
            title="Exit Gate"
          >
            <ArrowLeft size={14} />
            <span>EXIT</span>
          </button>

          <button
            className="rs-hud-expo-btn"
            onClick={() => {
              sound.playClick();
              setShowCalibrationModal(true);
            }}
            title="View Gesture Controls & Calibration Tutorial"
          >
            <Crosshair size={14} />
            <span>GESTURE GUIDE</span>
          </button>
        </div>

        {/* HERO STATUS CARD (Top Left) */}
        <div className="rs-hud-fighter-card hero">
          <div className="rs-hud-avatar-frame hero">
            <img
              src={selectedHero?.image || '/assets/hero_spiderman.jpg'}
              alt={selectedHero?.name}
              className="rs-hud-avatar-img"
            />
            <div className="rs-hud-role-pill hero">HERO</div>
          </div>
          <div className="rs-hud-gauge-group">
            <div className="rs-hud-name-row">
              <div className="rs-hud-name-col">
                <span className="rs-hud-name hero">{selectedHero?.name}</span>
                <span className="rs-hud-weapon-tag">⚡ {selectedHero?.weaponName}</span>
              </div>
              <span className="rs-hud-hp-digits">{heroHp} / {maxHeroHp} HP</span>
            </div>
            {/* Primary HP Track */}
            <div className="rs-hud-hp-track">
              <div
                className={`rs-hud-hp-fill hero ${heroHpPercent < 25 ? 'crit' : ''}`}
                style={{ width: `${heroHpPercent}%` }}
              ></div>
            </div>
            {/* EX SUPER ENERGY GAUGE */}
            <div className="rs-hud-ex-gauge-row">
              <span className="rs-hud-ex-label">EX SUPER GAUGE</span>
              <div className="rs-hud-ex-track">
                <div
                  className={`rs-hud-ex-fill ${heroSuperEnergy >= 100 ? 'ready' : ''}`}
                  style={{ width: `${heroSuperEnergy}%` }}
                ></div>
              </div>
              <span className={`rs-hud-ex-val ${heroSuperEnergy >= 100 ? 'blaze' : ''}`}>
                {heroSuperEnergy >= 100 ? '⚡ SPECIAL READY' : `${heroSuperEnergy}%`}
              </span>
            </div>
          </div>
        </div>

        {/* CENTER MATCH CLOCK & PHASE EMBLEM */}
        <div className="rs-hud-center-clock-badge">
          <div className={`rs-hud-phase-tag phase-${bossPhase}`}>
            {bossPhase === 3 ? '⚡ OVERDRIVE' : bossPhase === 2 ? '🔥 ENRAGED' : (expoMode ? 'EXPO BLITZ' : 'GATE S-RANK')}
          </div>
          <div className="rs-hud-timer-num">{roundTime}</div>
          <div className="rs-hud-vs-sub">VS</div>
        </div>

        {/* VILLAIN STATUS CARD (Top Right) */}
        <div className="rs-hud-fighter-card villain">
          <div className="rs-hud-gauge-group villain">
            <div className="rs-hud-name-row villain">
              <span className="rs-hud-hp-digits villain">{bossHp.toLocaleString()} / {maxBossHp.toLocaleString()} HP</span>
              <div className="rs-hud-name-col right">
                <span className="rs-hud-name villain">{selectedVillain?.name || 'VOID TITAN'}</span>
                <span className="rs-hud-weapon-tag villain">🌌 DARK VOID GAUNTLETS</span>
              </div>
            </div>
            {/* Boss Segmented HP Track */}
            <div className="rs-hud-hp-track boss">
              <div
                className="rs-hud-hp-ghost"
                style={{ width: `${bossHpGhostPercent}%` }}
              ></div>
              <div
                className={`rs-hud-hp-fill boss phase-${bossPhase}`}
                style={{ width: `${bossHpPercent}%` }}
              ></div>
              <div className="rs-hud-hp-notches">
                <span></span><span></span><span></span><span></span>
              </div>
            </div>
            {/* BOSS GUARD STAGGER BAR */}
            <div className="rs-hud-stagger-row">
              <span className="rs-hud-stagger-val">
                {isBossStaggered ? '⚡ STAGGERED (1.85x CRIT)' : 'STAGGER SHIELD'}
              </span>
              <div className="rs-hud-stagger-track">
                <div
                  className={`rs-hud-stagger-fill ${isBossStaggered ? 'broken' : ''}`}
                  style={{ width: `${isBossStaggered ? 100 : bossStaggerPercent}%` }}
                ></div>
              </div>
            </div>
          </div>
          <div className="rs-hud-avatar-frame villain">
            <img
              src={selectedVillain?.image || '/assets/villain_thanos.jpg'}
              alt={selectedVillain?.name}
              className="rs-hud-avatar-img"
            />
            <div className={`rs-hud-role-pill villain phase-${bossPhase}`}>
              {bossPhase === 3 ? 'OVERDRIVE' : bossPhase === 2 ? 'ENRAGED' : 'AI BOSS'}
            </div>
          </div>
        </div>
      </header>

      {/* ============================================================
          5. TELEMETRY DEBUG PANEL (Top Left)
          ============================================================ */}
      <div className="rs-hud-telemetry-panel">
        <div className="rs-telem-row">
          <span className="rs-telem-dot green"></span>
          <span className="rs-telem-text">{telemetry.fps} FPS // 60HZ</span>
        </div>
        <div className="rs-telem-row">
          <Cpu size={11} className="text-cyan-400" />
          <span className="rs-telem-text">AI FSM: {telemetry.aiState}</span>
        </div>
        <div className="rs-telem-row">
          <Activity size={11} className="text-violet-400" />
          <span className="rs-telem-text">CV LATENCY: 12ms</span>
        </div>
      </div>

      {/* 6. ACTIVE COMBO COUNTER (Arcade Style) */}
      {comboCount > 1 && (
        <div className="rs-active-combo-badge">
          <span className="rs-combo-hits">{comboCount}</span>
          <span className="rs-combo-label">COMBO!</span>
          <span className="rs-combo-bonus">
            +{Math.min(35, comboCount * 3.5)}% DMG BONUS
          </span>
        </div>
      )}

      {/* 7. DYNAMIC COMBAT NOTIFICATION BANNER */}
      {combatBanner && (
        <div className={`rs-combat-event-banner banner-${combatBanner.type}`}>
          <span>{combatBanner.text}</span>
        </div>
      )}

      {/* ============================================================
          8. TACTICAL ACTION BAR (Bottom Center Keybinds & Gesture Guide)
          ============================================================ */}
      <footer className="rs-tactical-ability-bar">
        <button
          className={`rs-ability-slot ${isHeroParrying ? 'active' : ''}`}
          onClick={() => handleTriggerGesture('palm')}
          title="Parry Shield (Key 1 or Open Palm)"
        >
          <span className="rs-key-tag">[1]</span>
          <Shield size={16} />
          <div className="rs-slot-info">
            <span className="rs-slot-title">PARRY</span>
            <span className="rs-slot-desc">OPEN PALM</span>
          </div>
        </button>

        <button
          className={`rs-ability-slot charge ${weaponCharged ? 'active' : ''}`}
          onClick={() => handleTriggerGesture('fist')}
          title="Weapon Charge (Key 2 or Closed Fist)"
        >
          <span className="rs-key-tag">[2]</span>
          <Flame size={16} />
          <div className="rs-slot-info">
            <span className="rs-slot-title">CHARGE</span>
            <span className="rs-slot-desc">CLOSED FIST</span>
          </div>
        </button>

        <button
          className="rs-ability-slot aim"
          onClick={() => handleTriggerGesture('point')}
          title="Target Aim Beam (Key 3 / E or Point Index Finger)"
        >
          <span className="rs-key-tag">[3]</span>
          <Target size={16} />
          <div className="rs-slot-info">
            <span className="rs-slot-title">AIM BEAM</span>
            <span className="rs-slot-desc">POINT INDEX</span>
          </div>
        </button>

        <button
          className="rs-ability-slot strike"
          onClick={() => handleTriggerGesture('forward')}
          title="Kinetic Strike (Space / F or Forward Hand Push)"
        >
          <span className="rs-key-tag">[SPACE]</span>
          <Sparkles size={16} />
          <div className="rs-slot-info">
            <span className="rs-slot-title">STRIKE</span>
            <span className="rs-slot-desc">FORWARD PUSH</span>
          </div>
        </button>

        <button
          className={`rs-ability-slot ultimate ${heroSuperEnergy >= 100 ? 'ready' : 'charging'}`}
          onClick={() => handleTriggerGesture('both_hands')}
          title="Special Ability Cataclysm (Key 4 / R or Raise Both Hands)"
        >
          <span className="rs-key-tag">[4]</span>
          <Zap size={16} />
          <div className="rs-slot-info">
            <span className="rs-slot-title">SPECIAL</span>
            <span className="rs-slot-desc">{heroSuperEnergy >= 100 ? 'READY!' : `${heroSuperEnergy}%`}</span>
          </div>
        </button>

        <button
          className="rs-ability-slot dodge"
          onClick={() => handleTriggerGesture('swipe')}
          title="Warp Dodge (Key A/D/W or Swipe Sideways)"
        >
          <span className="rs-key-tag">[DODGE]</span>
          <RotateCcw size={16} />
          <div className="rs-slot-info">
            <span className="rs-slot-title">DODGE</span>
            <span className="rs-slot-desc">SWIPE HAND</span>
          </div>
        </button>
      </footer>

      {/* ============================================================
          9. TACTICAL COMPUTER VISION CAMERA HUD (Bottom Left)
          ============================================================ */}
      <div className="rs-cv-battle-pip-box">
        <div className="rs-cv-battle-header">
          <div className="rs-cv-status-live">
            <span className="rs-cv-status-dot"></span>
            <span>CV SENSOR LIVE</span>
          </div>
          <span className="rs-cv-conf-badge">{cvConfidence}% ACC</span>
        </div>
        <div className="rs-cv-video-frame">
          <video
            ref={pipVideoRef}
            autoPlay
            playsInline
            muted
            className="rs-cv-video-element"
          />
          <canvas
            ref={pipCanvasRef}
            className="rs-cv-canvas-element"
          />
        </div>
        <div className="rs-cv-active-gesture-tag">
          <span className="rs-cv-gesture-name">
            {activeGesture && !activeGesture.includes('Standby') ? activeGesture : 'STANDBY (SHOW GESTURE)'}
          </span>
        </div>
      </div>

      {/* Floating Damage Popups directly over 3D battlefield */}
      <div className="rs-damage-popups-container">
        {damagePopups.map((popup) => (
          <div
            key={popup.id}
            className={`rs-damage-popup ${popup.isCrit ? 'crit' : ''}`}
            style={{
              transform: `translate(${popup.x + 90}px, ${popup.y}px)`
            }}
          >
            {popup.text}
          </div>
        ))}
      </div>

      {/* ============================================================
          10. GESTURE CALIBRATION TUTORIAL MODAL (College Expo)
          ============================================================ */}
      {showCalibrationModal && (
        <div className="rs-defeat-modal-overlay">
          <div className="rs-defeat-modal-card expo-calibration-card">
            <div className="rs-defeat-skull-glow victory-glow">
              <Crosshair size={42} className="text-cyan-400 animate-pulse" />
            </div>
            <h2 className="rs-defeat-title text-cyan-400">VISION WARRIORS // GESTURE CONTROLS</h2>
            <p className="rs-defeat-subtitle">
              Test your webcam hand gestures in real-time before entering the arena:
            </p>

            <div className="rs-calib-grid">
              <div className="rs-calib-item">
                <span className="rs-calib-icon">🖐️</span>
                <div className="rs-calib-details">
                  <span className="rs-calib-name">OPEN PALM</span>
                  <span className="rs-calib-action">Energy Shield & Parry [1]</span>
                </div>
              </div>
              <div className="rs-calib-item">
                <span className="rs-calib-icon">✊</span>
                <div className="rs-calib-details">
                  <span className="rs-calib-name">CLOSED FIST</span>
                  <span className="rs-calib-action">Charge Weapon Energy [2]</span>
                </div>
              </div>
              <div className="rs-calib-item">
                <span className="rs-calib-icon">☝️</span>
                <div className="rs-calib-details">
                  <span className="rs-calib-name">POINT INDEX</span>
                  <span className="rs-calib-action">Targeted Core Beam [3]</span>
                </div>
              </div>
              <div className="rs-calib-item">
                <span className="rs-calib-icon">🥊</span>
                <div className="rs-calib-details">
                  <span className="rs-calib-name">FORWARD PUSH</span>
                  <span className="rs-calib-action">Kinetic Combo Strike [SPACE]</span>
                </div>
              </div>
              <div className="rs-calib-item">
                <span className="rs-calib-icon">🙌</span>
                <div className="rs-calib-details">
                  <span className="rs-calib-name">BOTH HANDS</span>
                  <span className="rs-calib-action">Special Cataclysm [4]</span>
                </div>
              </div>
              <div className="rs-calib-item">
                <span className="rs-calib-icon">↔️</span>
                <div className="rs-calib-details">
                  <span className="rs-calib-name">SIDEWAYS SWIPE</span>
                  <span className="rs-calib-action">Warp Dodge [A/D]</span>
                </div>
              </div>
            </div>

            <div className="rs-calib-current-readout">
              <span>CURRENT SENSOR DETECTION: </span>
              <strong className="text-cyan-400">{activeGesture}</strong>
            </div>

            <div className="rs-defeat-actions-row">
              <button
                className="rs-btn-defeat-retry victory-replay"
                onClick={() => setShowCalibrationModal(false)}
              >
                <Play size={16} />
                <span>START COMBAT NOW</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          11. DEFEAT MODAL (EXPO SCORECARD)
          ============================================================ */}
      {isDefeated && (
        <div className="rs-defeat-modal-overlay">
          <div className="rs-defeat-modal-card">
            <div className="rs-defeat-skull-glow">
              <AlertOctagon size={48} className="text-red-500 animate-bounce" />
            </div>
            <h2 className="rs-defeat-title">MISSION FAILED!</h2>
            <p className="rs-defeat-subtitle">
              {selectedHero?.name} was overwhelmed by {selectedVillain?.name}'s dark matter onslaught.
            </p>
            <div className="rs-defeat-tip">
              <span>💡 TIP: Raise Open Palm (or press 1) immediately when the DANGER WARNING flashes to execute a PERFECT PARRY and take 0 damage!</span>
            </div>
            <div className="rs-defeat-actions-row">
              <button className="rs-btn-defeat-retry" onClick={handleRetryBattle}>
                <RotateCcw size={16} />
                <span>RETRY BATTLE</span>
              </button>
              <button className="rs-btn-defeat-exit" onClick={onExitArena}>
                <ArrowLeft size={16} />
                <span>NEXT VISITOR</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          12. VICTORY MODAL (CROWD-ATTRACTING EXPO SCOREBOARD)
          ============================================================ */}
      {isVictory && (
        <div className="rs-defeat-modal-overlay victory-mode">
          <div className="rs-defeat-modal-card victory-card">
            <div className="rs-defeat-skull-glow victory-glow">
              <Award size={52} className="text-cyan-400 animate-pulse" />
            </div>
            <h2 className="rs-defeat-title text-cyan-400">VOID TITAN OBLITERATED!</h2>
            <p className="rs-defeat-subtitle">
              Tactical mastery achieved! S-Rank Void Gate successfully sealed with {selectedHero?.name}.
            </p>
            <div className="rs-victory-stats-row">
              <div className="rs-vic-stat">
                <span className="rs-vic-stat-label">COMBAT SCORE</span>
                <span className="rs-vic-stat-val text-yellow-400">{expoResults.totalScore.toLocaleString()} PTS</span>
              </div>
              <div className="rs-vic-stat">
                <span className="rs-vic-stat-label">MAX COMBO</span>
                <span className="rs-vic-stat-val text-green-400">{maxComboReached > 0 ? maxComboReached : comboCount} HITS</span>
              </div>
              <div className="rs-vic-stat">
                <span className="rs-vic-stat-label">EXPO RANK</span>
                <span className="rs-vic-stat-val text-cyan-400">{expoResults.rank}</span>
              </div>
            </div>
            <div className="rs-defeat-actions-row">
              <button className="rs-btn-defeat-retry victory-replay" onClick={handleRetryBattle}>
                <RotateCcw size={16} />
                <span>PLAY AGAIN</span>
              </button>
              <button className="rs-btn-defeat-exit" onClick={onExitArena}>
                <ArrowLeft size={16} />
                <span>NEXT EXPO VISITOR</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
