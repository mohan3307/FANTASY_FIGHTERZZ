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
  Cpu,
  Trophy
} from 'lucide-react';
import { ComputerVisionGestureEngine } from '../utils/gestureDetector';
import { ThreeBattleArena } from './ThreeBattleArena';
import { Cosmic3DBackground } from './Cosmic3DBackground';
import { PortalParticles } from './PortalParticles';
import { sound } from '../utils/audio';
import { saveToLeaderboard } from './LeaderboardPage';
import confetti from 'canvas-confetti';

export const getHeroCombatKit = (hero) => {
  const code = hero?.heroCode || hero?.id || '';
  if (code === 'ironman' || code === 'plasma-ranger') {
    return {
      parry: { title: 'NANOTECH GUARD', desc: 'OPEN PALM' },
      charge: { title: 'ARC OVERDRIVE', desc: 'CLOSED FIST' },
      aim: { title: 'REPULSOR BEAM', desc: 'POINT INDEX' },
      strike: { title: 'PLASMA DASH', desc: 'FORWARD PUSH' },
      special: { title: 'UNIBEAM BLAST', desc: 'RAISE BOTH HANDS' },
      dodge: { title: 'JET EVASION', desc: 'SWIPE HAND' },
      parryDeflect: '🛡️ NANOTECH PARRY! 100% DEFLECTED',
      parryBrace: '🖐️ NANOTECH DEFLECTOR SHIELD BRACED',
      fistStrike: '⚡ ARC PLASMA REPULSOR JET BARRAGE',
      aimBeam: '☝️ MARK 85 PRECISION REPULSOR BEAM',
      aimHitLog: 'plasma repulsor core beam',
      aimBanner: '🎯 DIRECT HIT! PLASMA REPULSOR CORE PENETRATION!',
      forwardStrike: '💥 ROCKET DASH REPULSOR THRUST',
      comboFinisher: '💥 3-HIT COMBO: DIVE-BOMB THRUSTER SLAM!',
      specialName: hero?.special || 'Arc Reactor Unibeam Overdrive',
      specialGesture: '🔥 ARC REACTOR UNIBEAM OVERDRIVE',
      dodgeGesture: '🚀 JET THRUSTER AFTERBURNER EVASION',
      dodgeLog: 'evaded through jet thrusters'
    };
  }
  if (code === 'thor' || code === 'storm-guardian') {
    return {
      parry: { title: 'MJOLNIR GUARD', desc: 'OPEN PALM' },
      charge: { title: 'THUNDER CHARGE', desc: 'CLOSED FIST' },
      aim: { title: 'SKY LIGHTNING', desc: 'POINT INDEX' },
      strike: { title: 'HAMMER STRIKE', desc: 'FORWARD PUSH' },
      special: { title: 'LIGHTNING CATACLYSM', desc: 'RAISE BOTH HANDS' },
      dodge: { title: 'STORM EVASION', desc: 'SWIPE HAND' },
      parryDeflect: '⚡ MJOLNIR PARRY! DIVINE LIGHTNING DEFLECTION',
      parryBrace: '🖐️ ASGARDIAN URU HAMMER GUARD BRACED',
      fistStrike: '⚡ MJOLNIR RETURNING HAMMER THROW',
      aimBeam: '☝️ ASGARDIAN SKYWARD LIGHTNING BOLT',
      aimHitLog: 'Asgardian lightning strike',
      aimBanner: '⚡ DIRECT HIT! DIVINE LIGHTNING BOLT!',
      forwardStrike: '⚡ MJOLNIR ELECTRIC UPPERCUT SMASH',
      comboFinisher: '⚡ 3-HIT COMBO: SKYWARD HAMMER THUNDER SLAM!',
      specialName: hero?.special || 'Mjolnir Lightning Cataclysm',
      specialGesture: '⚡ ASGARDIAN LIGHTNING CATACLYSM',
      dodgeGesture: '⚡ DIVINE STORM STEP EVASION',
      dodgeLog: 'evaded with divine lightning speed'
    };
  }
  if (code === 'spiderman' || code === 'web-ninja' || !code) {
    return {
      parry: { title: 'WEB PARRY', desc: 'OPEN PALM' },
      charge: { title: 'WEB WEAVE', desc: 'CLOSED FIST' },
      aim: { title: 'WEB SNIPER', desc: 'POINT INDEX' },
      strike: { title: 'SLINGSHOT KICK', desc: 'FORWARD PUSH' },
      special: { title: 'MAXIMUM SPIDER', desc: 'RAISE BOTH HANDS' },
      dodge: { title: 'SPIDER EVADE', desc: 'SWIPE HAND' },
      parryDeflect: '🕸️ WEB PARRY! HIGH-TENSILE DEFLECTION',
      parryBrace: '🖐️ SYNTHETIC WEB BARRIER BRACED',
      fistStrike: '🕸️ ACROBATIC WINDMILL ROUNDHOUSE KICK',
      aimBeam: '☝️ HIGH-VELOCITY WEB-SNIPER SHOT',
      aimHitLog: 'high-tensile web-sniper round',
      aimBanner: '🕸️ DIRECT HIT! HIGH-TENSILE WEB SNIPER SHOT!',
      forwardStrike: '🕸️ WEB-ZIP SLINGSHOT DROPKICK',
      comboFinisher: '🕸️ 3-HIT COMBO: 360° WEB SOMERSAULT FLIP SLAM!',
      specialName: hero?.special || 'Maximum Spider Web Blitz',
      specialGesture: '🕸️ MAXIMUM SPIDER 3D WEB BLITZ',
      dodgeGesture: '🕷️ SPIDER-SENSE ACROBATIC EVASION',
      dodgeLog: 'dodged with hyper-agile Spider-Sense'
    };
  }
  if (code === 'captain-america' || code === 'shield-sentinel') {
    return {
      parry: { title: 'VIBRANIUM BLOCK', desc: 'OPEN PALM' },
      charge: { title: 'KINETIC ABSORB', desc: 'CLOSED FIST' },
      aim: { title: 'RICOCHET TOSS', desc: 'POINT INDEX' },
      strike: { title: 'SHIELD BASH', desc: 'FORWARD PUSH' },
      special: { title: 'KINETIC BASTION', desc: 'RAISE BOTH HANDS' },
      dodge: { title: 'COMBAT ROLL', desc: 'SWIPE HAND' },
      parryDeflect: '🛡️ VIBRANIUM PARRY! 100% KINETIC REFLECTION',
      parryBrace: '🖐️ VIBRANIUM HIGH GUARD BRACED',
      fistStrike: '🛡️ SPINNING RICOCHET SHIELD TOSS',
      aimBeam: '☝️ TACTICAL VIBRANIUM SHIELD RICOCHET',
      aimHitLog: 'vibranium shield ricochet',
      aimBanner: '🛡️ DIRECT HIT! VIBRANIUM SHIELD RICOCHET!',
      forwardStrike: '🛡️ VIBRANIUM KINETIC SHIELD BASH',
      comboFinisher: '🛡️ 3-HIT COMBO: LEAPING SHIELD RIM CRUSH!',
      specialName: hero?.special || 'Vibranium Kinetic Bastion',
      specialGesture: '🛡️ VIBRANIUM KINETIC BASTION STAR SLAM',
      dodgeGesture: '🌀 TACTICAL VIBRANIUM COMBAT ROLL',
      dodgeLog: 'evaded through tactical combat roll'
    };
  }
  if (code === 'doctor-strange' || code === 'dr-strange' || code === 'arcane-sorcerer') {
    return {
      parry: { title: 'TAO MANDALA', desc: 'OPEN PALM' },
      charge: { title: 'ELDRITCH FOCUS', desc: 'CLOSED FIST' },
      aim: { title: 'MYSTIC RAY', desc: 'POINT INDEX' },
      strike: { title: 'MANDALA BLAST', desc: 'FORWARD PUSH' },
      special: { title: 'MIRROR DIMENSION', desc: 'RAISE BOTH HANDS' },
      dodge: { title: 'ASTRAL PHASE', desc: 'SWIPE HAND' },
      parryDeflect: '✨ TAO MANDALA PARRY! MYSTIC WARD',
      parryBrace: '🖐️ ELDRITCH TAO MANDALA BARRIER BRACED',
      fistStrike: '✨ DUAL TAO MANDALA CONTINUOUS RAY',
      aimBeam: '☝️ ELDRITCH MANDALA CONTINUOUS BEAM',
      aimHitLog: 'eldritch mystic mandala beam',
      aimBanner: '✨ DIRECT HIT! ELDRITCH TAO MANDALA BEAM!',
      forwardStrike: '✨ FLOATING ELDRITCH MANDALA DISK CAST',
      comboFinisher: '✨ 3-HIT COMBO: TAO GLYPH BURST SLAM!',
      specialName: hero?.special || 'Astral Mirror Dimension Shift',
      specialGesture: '✨ ASTRAL MIRROR DIMENSION SHARD SHIFT',
      dodgeGesture: '✨ ASTRAL PHASE SHIFT DRIFT',
      dodgeLog: 'phased through astral plane'
    };
  }
  return {
    parry: { title: 'PARRY GUARD', desc: 'OPEN PALM' },
    charge: { title: 'WEAPON CHARGE', desc: 'CLOSED FIST' },
    aim: { title: 'AIM BEAM', desc: 'POINT INDEX' },
    strike: { title: 'KINETIC STRIKE', desc: 'FORWARD PUSH' },
    special: { title: 'SPECIAL OVERDRIVE', desc: 'RAISE BOTH HANDS' },
    dodge: { title: 'WARP DODGE', desc: 'SWIPE HAND' },
    parryDeflect: '🛡️ PERFECT PARRY! 100% DEFLECTED',
    parryBrace: '🖐️ ENERGY SHIELD BRACED',
    fistStrike: '✊ HEAVY KINETIC STRIKE',
    aimBeam: `☝️ TARGETED CORE AIM // ${hero?.weaponName || 'BEAM'}`,
    aimHitLog: 'energy beam',
    aimBanner: '🎯 DIRECT HIT! CORE PENETRATION!',
    forwardStrike: '🥊 KINETIC COMBO STRIKE',
    comboFinisher: '💥 3-HIT COMBO FINISHER! AIRBORNE SLAM!',
    specialName: hero?.special || 'SPECIAL CATACLYSM',
    specialGesture: `🙌 ${hero?.special || 'CATACLYSM SPECIAL ATTACK'}`,
    dodgeGesture: '↔️ QUANTUM WARP DODGE',
    dodgeLog: 'phased through attack zone'
  };
};

export const getVillainCombatKit = (villain) => {
  const code = villain?.villainCode || villain?.id || '';
  if (code === 'thanos') {
    return {
      incomingWarning: 'INFINITY GAUNTLET 6-STONE BEAM',
      weaponName: 'THE INFINITY GAUNTLET (6 STONES)',
      counterHitText: "interrupted Thanos's 6-Stone Gauntlet channel!"
    };
  }
  if (code === 'green-goblin') {
    return {
      incomingWarning: 'RAZOR GLIDER PUMPKIN BOMB DIVE',
      weaponName: 'RAZOR GLIDER & PUMPKIN BOMBS',
      counterHitText: "interrupted Green Goblin's Glider dive!"
    };
  }
  if (code === 'doctor-doom' || code === 'doom-regent') {
    return {
      incomingWarning: 'ORBITAL LATVERIAN SIPHON RAY',
      weaponName: 'ELDRITCH TECHNOMANCY GAUNTLETS',
      counterHitText: "interrupted Doctor Doom's orbital siphon!"
    };
  }
  if (code === 'loki') {
    return {
      incomingWarning: 'PHANTOM ILLUSION DAGGER AMBUSH',
      weaponName: 'DUAL ASGARDIAN ENCHANTED DAGGERS',
      counterHitText: "interrupted Loki's phantom illusion ambush!"
    };
  }
  if (code === 'magneto') {
    return {
      incomingWarning: 'ELECTROMAGNETIC RAILGUN STORM',
      weaponName: 'ELECTROMAGNETIC FORCE MANIPULATION',
      counterHitText: "interrupted Magneto's magnetic railgun barrage!"
    };
  }
  return {
    incomingWarning: `${villain?.name || 'BOSS'}'S LETHAL STRIKE`,
    weaponName: villain?.weaponName || 'DARK VOID GAUNTLETS',
    counterHitText: `interrupted ${villain?.name || 'boss'}'s attack startup!`
  };
};

export const RedGateArenaPage = ({
  selectedHero,
  selectedVillain,
  cameraStream,
  isSimulatedCamera,
  onExitArena,
  onViewLeaderboard,
  playerName = 'Hero_001',
  bgMode = 'heroes'
}) => {
  // Intro Sequence Phases: 'city-pan' -> 'hero-entrance' -> 'boss-entrance' -> 'cinematic-banner' -> 'countdown' -> 'active'
  const [introPhase, setIntroPhase] = useState('city-pan');
  const [countdownNum, setCountdownNum] = useState(3);
  const [expoMode, setExpoMode] = useState(false); // Standard 99s round
  const [showCalibrationModal, setShowCalibrationModal] = useState(false);

  // BALANCED FIGHTING GAME STATS (Villain HP tuned to 8,000 HP)
  const maxHeroHp = 3500;
  const maxBossHp = 8000;
  const maxBossStagger = 2000;

  const [bossHp, setBossHp] = useState(8000);
  const [bossHpGhost, setBossHpGhost] = useState(8000);
  const [bossStaggerHp, setBossStaggerHp] = useState(2000);
  const [isBossStaggered, setIsBossStaggered] = useState(false);
  const [bossPhase, setBossPhase] = useState(1); // 1 = Normal, 2 = Enraged (<=60%), 3 = Overdrive (<=25%)

  const [heroHp, setHeroHp] = useState(3500);
  const [heroSuperEnergy, setHeroSuperEnergy] = useState(0); // 0% to 100% EX Gauge
  const [isHeroParrying, setIsHeroParrying] = useState(false);
  const [weaponCharged, setWeaponCharged] = useState(false);

  // Match Details & Score (Generous 240s timer so battle never cuts off prematurely)
  const [roundTime, setRoundTime] = useState(240);
  const [comboCount, setComboCount] = useState(0);
  const [maxComboReached, setMaxComboReached] = useState(0);
  const [totalDamageDealt, setTotalDamageDealt] = useState(0);
  const lastGestureTypeRef = useRef(null);
  const setLastGestureType = (val) => { lastGestureTypeRef.current = val; };
  const [activeGesture, setActiveGesture] = useState('Standby (Show Hand)');
  const [combatBanner, setCombatBanner] = useState(null);
  const [combatLog, setCombatLog] = useState([]);
  const [isVictory, setIsVictory] = useState(false);
  const [isDefeated, setIsDefeated] = useState(false);
  const [battleElapsed, setBattleElapsed] = useState(0); // Counts UP for leaderboard timing
  const [leaderboardSaved, setLeaderboardSaved] = useState(false);
  const battleStartTimeRef = useRef(null);
  const [cvConfidence, setCvConfidence] = useState(0);
  const [cvTrackingStatus, setCvTrackingStatus] = useState(cameraStream ? 'LOADING MODEL' : 'CAMERA OFF');
  const [isScreenShaking, setIsScreenShaking] = useState(false);
  const [bossHitFlash, setBossHitFlash] = useState(false);
  const [damagePopups, setDamagePopups] = useState([]);
  const [incomingAttackWarning, setIncomingAttackWarning] = useState(false);
  const [heroActionTrigger, setHeroActionTrigger] = useState(null);

  const heroKit = getHeroCombatKit(selectedHero);
  const villainKit = getVillainCombatKit(selectedVillain);

  // Incoming Attack Warning Telegraph with canonical villain skill
  useEffect(() => {
    if (incomingAttackWarning && introPhase === 'active' && !isVictory && !isDefeated) {
      showBanner(`⚠️ DANGER: ${villainKit.incomingWarning}!`, 'warning');
      addLog(`🚨 WARNING: ${selectedVillain?.name || 'BOSS'} charging ${villainKit.incomingWarning}! Raise Palm [1] or Swipe!`);
    }
  }, [incomingAttackWarning, introPhase, isVictory, isDefeated]);

  // References to keep event handlers synced without resetting CV engine
  const introPhaseRef = useRef(introPhase);
  useEffect(() => { introPhaseRef.current = introPhase; }, [introPhase]);

  const isVictoryRef = useRef(isVictory);
  useEffect(() => { isVictoryRef.current = isVictory; }, [isVictory]);

  const isDefeatedRef = useRef(isDefeated);
  useEffect(() => { isDefeatedRef.current = isDefeated; }, [isDefeated]);

  const heroHpRef = useRef(heroHp);
  useEffect(() => { heroHpRef.current = heroHp; }, [heroHp]);

  const bossHpRef = useRef(bossHp);
  useEffect(() => { bossHpRef.current = bossHp; }, [bossHp]);

  // Telemetry Debug Info (Direct DOM ref updates to avoid 60fps React re-renders)
  const [telemetry, setTelemetry] = useState({ fps: 60, aiState: 'APPROACH', distance: '3.8' });
  const lastTelemTimeRef = useRef(0);
  const lastConfUpdateRef = useRef(0);

  const handleTelemetryUpdate = (t) => {
    const now = Date.now();
    if (now - lastTelemTimeRef.current > 400) {
      lastTelemTimeRef.current = now;
      setTelemetry(t);
    }
  };

  const pipVideoRef = useRef(null);
  const pipCanvasRef = useRef(null);
  const cvEngineRef = useRef(null);
  const confBadgeRef = useRef(null);
  const lastGestureTextRef = useRef('');
  const gestureTimeoutRef = useRef(null);
  const comboTimerRef = useRef(null);
  const staggerTimerRef = useRef(null);
  const bannerTimerRef = useRef(null);
  const lastAttackTimeRef = useRef(0);
  const lastHeroDamageTimeRef = useRef(0);

  const showBanner = (text, type = 'normal') => {
    setCombatBanner({ text, type });
    if (bannerTimerRef.current) clearTimeout(bannerTimerRef.current);
    bannerTimerRef.current = setTimeout(() => {
      setCombatBanner(null);
    }, 2200);
  };

  const addLog = (msg) => {
    setCombatLog((prev) => [msg, ...prev.slice(0, 2)]);
  };

  const triggerHitEffects = (dmg, isCrit) => {
    // 3D camera handles combat shake inside WebGL to avoid DOM layout stutters
    setBossHitFlash(true);
    const newPopup = {
      id: Date.now() + Math.random(),
      text: `-${dmg.toLocaleString()}${isCrit ? ' CRIT!' : ''}`,
      isCrit,
      x: (Math.random() - 0.5) * 80,
      y: (Math.random() - 0.5) * 60
    };
    setDamagePopups((prev) => [...prev.slice(-1), newPopup]);

    setTimeout(() => setBossHitFlash(false), 140);
    setTimeout(() => {
      setDamagePopups((prev) => prev.filter((p) => p.id !== newPopup.id));
    }, 850);
  };

  // Accelerated Cinematic Trailer Intro Sequence (Fast & Punchy ~3.1s total)
  useEffect(() => {
    sound.playPortalWarp();

    // 1. City Pan & Energy Portal Awakening (0.0s - 0.4s)
    const t1 = setTimeout(() => {
      setIntroPhase('hero-entrance');
      sound.playLaserBeam(false);
    }, 400);

    // 2. Hero Drops In & Weapon Materialization (0.4s - 0.85s)
    const t2 = setTimeout(() => {
      setIntroPhase('boss-entrance');
      sound.playPortalWarp();
    }, 850);

    // 3. Boss Steps Through Dark Vortex (0.85s - 1.3s)
    const t3 = setTimeout(() => {
      setIntroPhase('cinematic-banner');
      sound.playModal();
    }, 1300);

    // 4. Snappy Countdown 3, 2, 1, FIGHT! (1.3s - 3.1s)
    const t4 = setTimeout(() => {
      setIntroPhase('countdown');
      setCountdownNum(3);
      sound.playClick();
    }, 1700);

    const t5 = setTimeout(() => {
      setCountdownNum(2);
      sound.playClick();
    }, 2100);

    const t6 = setTimeout(() => {
      setCountdownNum(1);
      sound.playClick();
    }, 2500);

    const t7 = setTimeout(() => {
      setCountdownNum('FIGHT!');
      sound.playThunder();
    }, 2800);

    const t8 = setTimeout(() => {
      setIntroPhase('active');
      addLog(`[SYSTEM] ⚡ Battle active! S-Rank Boss ${selectedVillain?.name || 'VOID TITAN'} engaged!`);
      addLog(`[TUTORIAL] Strike [2] or Push Forward. Shield [1] Parries attacks. Ultimate [4] at 100%!`);
    }, 3100);

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

  // Instant Skip Intro Handler
  const handleSkipIntro = () => {
    setIntroPhase('active');
    sound.playClick();
    addLog(`[SYSTEM] ⚡ Intro bypassed. Battle active!`);
  };

  // Keyboard shortcut to skip intro immediately on SPACE or ENTER
  useEffect(() => {
    const handleSkipKey = (e) => {
      if (introPhaseRef.current !== 'active' && (e.key === ' ' || e.key === 'Enter')) {
        handleSkipIntro();
      }
    };
    window.addEventListener('keydown', handleSkipKey);
    return () => window.removeEventListener('keydown', handleSkipKey);
  }, []);

  // Round Clock Timer (Countdown)
  useEffect(() => {
    if (introPhase !== 'active' || isVictory || isDefeated) return;
    // Start the elapsed timer when battle becomes active
    if (!battleStartTimeRef.current) {
      battleStartTimeRef.current = Date.now();
    }
    const interval = setInterval(() => {
      // Update elapsed time
      if (battleStartTimeRef.current) {
        setBattleElapsed(Math.floor((Date.now() - battleStartTimeRef.current) / 1000));
      }
      setRoundTime((prev) => {
        if (prev <= 1) {
          // Never shut down battle prematurely — grant Overtime Sudden Death!
          showBanner('⚡ OVERTIME! SUDDEN DEATH ENGAGED!', 'phase');
          addLog('⚡ OVERTIME: Round clock extended by +120s! Finish the titan!');
          return 120;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [introPhase, isVictory, isDefeated]);

  // Ghost HP Catchup Bar
  useEffect(() => {
    const timer = setTimeout(() => {
      setBossHpGhost(bossHp);
    }, 350);
    return () => clearTimeout(timer);
  }, [bossHp]);

  const [activeStream, setActiveStream] = useState(cameraStream);
  const isRequestingCameraRef = useRef(false);

  // Direct webcam enable handler in arena (auto-reconnects if missing or dropped)
  const enableWebcamDirectly = async () => {
    if (isRequestingCameraRef.current) return;
    isRequestingCameraRef.current = true;
    setCvTrackingStatus('LOADING MODEL');
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Webcam API not supported');
      }
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 640, max: 640 },
          height: { ideal: 480, max: 480 },
          frameRate: { ideal: 30, max: 30 }
        },
        audio: false
      });
      setActiveStream(stream);
      addLog('[CAMERA] 📹 Webcam connected! 21-landmark tracking live!');
    } catch (err) {
      console.warn('Direct webcam failure:', err);
      setCvTrackingStatus('CAMERA OFF');
      addLog('[CAMERA] Webcam unavailable. Keyboard controls [1-4, SPACE, A/D] active!');
    } finally {
      isRequestingCameraRef.current = false;
    }
  };

  useEffect(() => {
    if (cameraStream) {
      const liveTracks = cameraStream.getVideoTracks?.()?.filter((t) => t.readyState === 'live');
      if (liveTracks && liveTracks.length > 0) {
        setActiveStream(cameraStream);
      } else {
        enableWebcamDirectly();
      }
    } else {
      enableWebcamDirectly();
    }
  }, [cameraStream]);

  // Bind live camera stream to PIP and start Computer Vision Detection Engine
  useEffect(() => {
    if (!activeStream) {
      enableWebcamDirectly();
      return;
    }

    const videoEl = pipVideoRef.current;
    if (!videoEl) return;

    videoEl.srcObject = activeStream;

    let isDisposed = false;

    const startEngine = () => {
      if (isDisposed) return;
      videoEl.play().catch(() => {});

      if (pipCanvasRef.current) {
        // Lock canvas to fixed 320x240 for instantaneous HUD clearing & rendering
        pipCanvasRef.current.width = 320;
        pipCanvasRef.current.height = 240;

        if (cvEngineRef.current) {
          cvEngineRef.current.stop();
        }

        cvEngineRef.current = new ComputerVisionGestureEngine(
          videoEl,
          pipCanvasRef.current,
          (res) => {
            // Update confidence badge safely throttled without DOM collision
            const confPercent = Math.round(res.confidence * 100);
            const nowTime = Date.now();
            if (nowTime - lastConfUpdateRef.current > 400) {
              lastConfUpdateRef.current = nowTime;
              setCvConfidence(confPercent);
            }

            // Instant live feedback on current gesture
            if (res.gesture && res.gesture !== 'none') {
              const GESTURE_NAME_MAP = {
                palm: '🖐️ OPEN PALM (SHIELD)',
                fist: '✊ CLOSED FIST (STRIKE)',
                point: '☝️ POINT 1 FINGER (BEAM)',
                forward: '👊 FORWARD PUNCH (COMBO)',
                both_hands: '✌️ PEACE / BOTH HANDS (ULTIMATE)',
                vsign: '✌️ PEACE / BOTH HANDS (ULTIMATE)',
                thumbs_up: '👍 THUMBS UP (WARP DODGE)',
                swipe: '👈👉 SWIPE (WARP DODGE)'
              };

              if (introPhaseRef.current !== 'active') {
                const readyText = `${GESTURE_NAME_MAP[res.gesture] || res.gesture} [READY]`;
                if (lastGestureTextRef.current !== readyText) {
                  lastGestureTextRef.current = readyText;
                  setActiveGesture(readyText);
                }
              } else if (res.actionTriggered && !isVictoryRef.current && !isDefeatedRef.current) {
                handleTriggerGesture(res.gesture, true);
              }
            }
          },
          (status) => {
            setCvTrackingStatus(status);
          }
        );
        cvEngineRef.current.start();
      }
    };

    if (videoEl.readyState >= 1) {
      startEngine();
    } else {
      videoEl.onloadedmetadata = startEngine;
      videoEl.onloadeddata = startEngine;
      videoEl.oncanplay = startEngine;
      // Resilient fallback timer to guarantee startEngine triggers even if browser events were missed
      const fallbackTimer = setTimeout(() => {
        if (!isDisposed && !cvEngineRef.current) {
          startEngine();
        }
      }, 350);
    }

    return () => {
      isDisposed = true;
      if (videoEl) {
        videoEl.onloadedmetadata = null;
        videoEl.onloadeddata = null;
        videoEl.oncanplay = null;
      }
      if (cvEngineRef.current) {
        cvEngineRef.current.stop();
        cvEngineRef.current = null;
      }
    };
  }, [activeStream]);

  // Keyboard Hotkeys Fallback Controls:
  // [1] = Parry / Shield (Open Palm)
  // [2] = Kinetic Strike (Closed Fist)
  // [3] or [E] = Aim Beam (Pointing)
  // [Space] or [F] = Kinetic Strike (Forward Push)
  // [4] or [R] = Special Ability (Both Hands)
  // [A] / [D] / [W] = Warp Dodge (Sideways)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isVictory || isDefeated) return;
      if (introPhaseRef.current !== 'active') {
        if (['1', '2', '3', '4', ' ', 'Enter', 'e', 'E', 'f', 'F', 'r', 'R', 'a', 'A', 'd', 'D', 'w', 'W'].includes(e.key)) {
          setIntroPhase('active');
        }
      }
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
    if (introPhaseRef.current !== 'active') {
      setIntroPhase('active');
    }
    const now = Date.now();
    // Ultra-responsive combat cadence: instant 140ms parries, snappy 250ms strikes
    const minCooldown = gestureType === 'palm' ? 140 : (gestureType === 'both_hands' || gestureType === 'vsign') ? 380 : 250;
    if (now - lastAttackTimeRef.current < minCooldown) return;
    lastAttackTimeRef.current = now;

    setLastGestureType(gestureType);

    if (gestureTimeoutRef.current) {
      clearTimeout(gestureTimeoutRef.current);
    }

    // 1. OPEN PALM // ENERGY SHIELD & PERFECT PARRY
    if (gestureType === 'palm') {
      if (incomingAttackWarning) {
        // == PERFECT PARRY! ==
        setIncomingAttackWarning(false);
        setIsHeroParrying(true);
        setActiveGesture(heroKit.parryDeflect);
        sound.playShieldBlock();
        setHeroActionTrigger({ type: 'palm', id: Date.now() });

        setBossStaggerHp((prev) => {
          const next = Math.max(0, prev - 700);
          if (next === 0 && !isBossStaggered) triggerStaggerBreak();
          return next;
        });
        setHeroSuperEnergy((prev) => Math.min(100, prev + 28));
        showBanner(`${heroKit.parryDeflect}! +28% SUPER ENERGY!`, 'parry');
        addLog(`${fromCV ? '[CV VISION]' : '[INPUT]'} 🛡️ ${heroKit.parryDeflect}! Deflected attack with 0 damage & gained +28% Energy!`);

        setTimeout(() => setIsHeroParrying(false), 900);
      } else {
        setActiveGesture(heroKit.parryBrace);
        sound.playHover();
        setHeroActionTrigger({ type: 'palm', id: Date.now() });
        addLog(`${fromCV ? '[CV VISION]' : '[INPUT]'} ${heroKit.parryBrace}!`);
      }

      gestureTimeoutRef.current = setTimeout(() => {
        setActiveGesture('Standby (Show Hand)');
        setLastGestureType(null);
      }, 2400);
    }

    // 2. CLOSED FIST // HEAVY KINETIC COMBO STRIKE
    else if (gestureType === 'fist') {
      const isCounterHit = Boolean(incomingAttackWarning);
      if (isCounterHit) {
        setIncomingAttackWarning(false);
        sound.playCounterHit();
        showBanner('⚡ COUNTER HIT! +75% CRUSH DMG!', 'counter');
        addLog(`${fromCV ? '[CV VISION]' : '[INPUT]'} ⚡ COUNTER HIT! ${villainKit.counterHitText}`);
      }

      setActiveGesture(isCounterHit ? '⚡ COUNTER HIT CRUSH!' : heroKit.fistStrike);

      // Combo count handling
      let currentComboStep = 1;
      setComboCount((prev) => {
        const next = prev + 1;
        currentComboStep = next;
        if (next > maxComboReached) setMaxComboReached(next);
        if (comboTimerRef.current) clearTimeout(comboTimerRef.current);
        comboTimerRef.current = setTimeout(() => setComboCount(0), 2800);
        return next;
      });

      if (!isCounterHit && currentComboStep % 3 === 0) {
        showBanner(heroKit.comboFinisher, 'combo');
      }

      let baseDmg = Math.floor(Math.random() * 60) + 320;
      if (weaponCharged) {
        baseDmg += 180;
        setWeaponCharged(false);
      }
      if (isCounterHit) {
        baseDmg = Math.round(baseDmg * 1.75); // Tekken-style Counter-Hit Crush multiplier
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
          const next = Math.max(0, prev - (isCounterHit ? 600 : 350));
          if (next === 0) triggerStaggerBreak();
          return next;
        });
      }

      setHeroSuperEnergy((prev) => {
        const gain = isCounterHit ? 24 : isBossStaggered ? 18 : 12;
        const next = Math.min(100, prev + gain);
        if (next === 100 && prev < 100) {
          showBanner(`⚡ ${heroKit.specialName} READY! (RAISE BOTH HANDS / 4)`, 'ready');
        }
        return next;
      });

      triggerHitEffects(finalDmg, isCounterHit || isBossStaggered);
      setHeroActionTrigger({ type: 'fist', id: Date.now(), isCounterHit });
      addLog(`${fromCV ? '[CV VISION]' : '[INPUT]'} ${isCounterHit ? '⚡ Counter Strike' : heroKit.fistStrike} struck ${selectedVillain?.name} for ${finalDmg.toLocaleString()} DMG!`);

      gestureTimeoutRef.current = setTimeout(() => {
        setActiveGesture('Standby (Show Hand)');
        setLastGestureType(null);
      }, 1200);
    }

    // 3. INDEX POINTING // TARGETED AIM BEAM
    else if (gestureType === 'point') {
      const isCounterHit = Boolean(incomingAttackWarning);
      if (isCounterHit) {
        setIncomingAttackWarning(false);
        sound.playCounterHit();
        showBanner('⚡ COUNTER SNIPE! +75% CRUSH DMG!', 'counter');
        addLog(`${fromCV ? '[CV VISION]' : '[INPUT]'} ⚡ COUNTER SNIPE! ${villainKit.counterHitText}`);
      } else {
        sound.playLaserBeam(true);
      }

      setActiveGesture(isCounterHit ? '⚡ COUNTER SNIPE HIT!' : heroKit.aimBeam);

      let baseDmg = weaponCharged ? 520 : 380;
      setWeaponCharged(false);
      if (isCounterHit) {
        baseDmg = Math.round(baseDmg * 1.75);
      }

      setBossHp((prev) => {
        const next = Math.max(0, prev - baseDmg);
        checkBossPhase(next);
        if (next === 0) triggerVictory();
        return next;
      });

      triggerHitEffects(baseDmg, true);
      setHeroActionTrigger({ type: 'point', id: Date.now(), isCounterHit });
      if (!isCounterHit) {
        showBanner(heroKit.aimBanner, 'info');
      }
      addLog(`${fromCV ? '[CV VISION]' : '[INPUT]'} 🎯 ${selectedHero?.name}'s ${heroKit.aimHitLog} penetrated ${selectedVillain?.name}'s core for ${baseDmg.toLocaleString()} DMG!`);

      gestureTimeoutRef.current = setTimeout(() => {
        setActiveGesture('Standby (Show Hand)');
        setLastGestureType(null);
      }, 1400);
    }

    // 4. QUICK FORWARD HAND MOVEMENT // KINETIC COMBO STRIKE
    else if (gestureType === 'forward') {
      const isCounterHit = Boolean(incomingAttackWarning);
      if (isCounterHit) {
        setIncomingAttackWarning(false);
        sound.playCounterHit();
        showBanner('⚡ COUNTER HIT! +75% CRUSH DMG!', 'counter');
        addLog(`${fromCV ? '[CV VISION]' : '[INPUT]'} ⚡ COUNTER HIT! ${villainKit.counterHitText}`);
      }

      setActiveGesture(isCounterHit ? '⚡ COUNTER HIT CRUSH!' : heroKit.forwardStrike);

      // Combo count handling
      let currentComboStep = 1;
      setComboCount((prev) => {
        const next = prev + 1;
        currentComboStep = next;
        if (next > maxComboReached) setMaxComboReached(next);
        if (comboTimerRef.current) clearTimeout(comboTimerRef.current);
        comboTimerRef.current = setTimeout(() => setComboCount(0), 2800);
        return next;
      });

      if (!isCounterHit && currentComboStep % 3 === 0) {
        showBanner(heroKit.comboFinisher, 'combo');
      }

      let baseDmg = Math.floor(Math.random() * 60) + 290;
      if (weaponCharged) {
        baseDmg += 170;
        setWeaponCharged(false);
      }
      if (isCounterHit) {
        baseDmg = Math.round(baseDmg * 1.75);
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
          const next = Math.max(0, prev - (isCounterHit ? 600 : 350));
          if (next === 0) triggerStaggerBreak();
          return next;
        });
      }

      setHeroSuperEnergy((prev) => {
        const gain = isCounterHit ? 24 : isBossStaggered ? 18 : 12;
        const next = Math.min(100, prev + gain);
        if (next === 100 && prev < 100) {
          showBanner(`⚡ ${heroKit.specialName} READY! (RAISE BOTH HANDS / 4)`, 'ready');
        }
        return next;
      });

      triggerHitEffects(finalDmg, isCounterHit || isBossStaggered);
      setHeroActionTrigger({ type: 'forward', id: Date.now(), isCounterHit });
      addLog(`${fromCV ? '[CV VISION]' : '[INPUT]'} ${isCounterHit ? '⚡ Counter Strike' : heroKit.forwardStrike} struck ${selectedVillain?.name} for ${finalDmg.toLocaleString()} DMG!`);

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
      setActiveGesture(heroKit.specialGesture);

      let ultDmg = Math.floor(Math.random() * 300) + 2200;
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
      showBanner(`🔥 ${heroKit.specialName}! -${ultDmg.toLocaleString()} DMG!`, 'ult');
      addLog(`${fromCV ? '[CV VISION]' : '[INPUT]'} ⚡ ${selectedHero?.name} unleashed ${heroKit.specialName} for ${ultDmg.toLocaleString()} DMG!`);

      gestureTimeoutRef.current = setTimeout(() => {
        setActiveGesture('Standby (Show Hand)');
        setLastGestureType(null);
      }, 2000);
    }

    // 6. SIDEWAYS HAND MOVEMENT OR THUMBS UP // WARP DODGE
    else if (gestureType === 'swipe' || gestureType === 'thumbs_up') {
      setActiveGesture(heroKit.dodgeGesture || '🌀 WARP REALITY DODGE');
      sound.playHover();
      setHeroActionTrigger({ type: 'swipe', id: Date.now() });

      if (incomingAttackWarning) {
        setIncomingAttackWarning(false);
        setHeroSuperEnergy((prev) => Math.min(100, prev + 14));
        showBanner('🌀 PERFECT DODGE! +14% ENERGY!', 'dodge');
      }

      addLog(`${fromCV ? '[CV VISION]' : '[INPUT]'} 🌀 ${selectedHero?.name} ${heroKit.dodgeLog}!`);

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
      addLog(`🚨 WARNING: ${selectedVillain?.name} entered DESPERATION OVERDRIVE! High fury attack overdrive!`);
    } else if (hpRatio <= 0.60 && bossPhase < 2) {
      setBossPhase(2);
      sound.playLaserBeam(true);
      showBanner('🔥 BOSS ENRAGED! ATTACK SPEED INCREASED!', 'phase');
      addLog(`🔥 WARNING: ${selectedVillain?.name} is ENRAGED! Damage and fury elevated!`);
    }
  };

  // Handle Hero Taking Damage from Villain Strikes (Deflection, Evasion, Clash, or Impact)
  const handleHeroDamaged = (defenseType) => {
    if (defenseType === 'blocked' || defenseType === true) {
      addLog(`🛡️ Hero Shield absorbed 100% of the kinetic blow! No damage taken!`);
      showBanner(`🛡️ ATTACK BLOCKED! 0 DAMAGE!`, 'parry');
      return;
    }
    if (defenseType === 'dodged') {
      showBanner(`🌀 CLEAN EVASION! 0 DAMAGE!`, 'dodge');
      setHeroSuperEnergy((prev) => Math.min(100, prev + 15));
      addLog(`🌀 ${selectedHero?.name} phased completely through ${selectedVillain?.name}'s strike! No damage taken!`);
      return;
    }
    if (defenseType === 'clash') {
      showBanner(`⚡ MID-AIR CLASH! COUNTER STRIKE!`, 'parry');
      setHeroSuperEnergy((prev) => Math.min(100, prev + 25));
      setBossHp((prev) => {
        const next = Math.max(0, prev - 360);
        checkBossPhase(next);
        if (next === 0) triggerVictory();
        return next;
      });
      triggerHitEffects(360, true);
      addLog(`⚡ COUNTER CLASH! ${selectedHero?.name} intercepted ${selectedVillain?.name}'s attack in mid-air for 360 DMG!`);
      return;
    }

    const now = Date.now();
    if (now - lastHeroDamageTimeRef.current < 1100) return; // Invulnerability frames (iframes)
    lastHeroDamageTimeRef.current = now;

    // Balanced damage so hero comfortably survives without premature game over
    const baseEnemyDmg = bossPhase === 3 ? 35 : bossPhase === 2 ? 26 : 18;
    const dmg = baseEnemyDmg + Math.floor(Math.random() * 8);

    setHeroHp((prev) => {
      const next = Math.max(0, prev - dmg);
      if (next === 0) triggerDefeat();
      return next;
    });

    showBanner(`⚠️ IMPACT TAKEN! -${dmg} HP!`, 'warning');
    addLog(`💥 ${selectedVillain?.name} struck ${selectedHero?.name} for ${dmg} DMG!`);
  };

  const triggerVictory = () => {
    setIsVictory(true);
    // Freeze elapsed time
    if (battleStartTimeRef.current) {
      setBattleElapsed(Math.floor((Date.now() - battleStartTimeRef.current) / 1000));
    }
    sound.playVictoryFanfare();
    showBanner(`🏆 VICTORY! ${selectedVillain?.name || 'BOSS'} DEFEATED!`, 'victory');
    addLog(`🏆 GLORY! ${selectedVillain?.name} collapsed! S-Rank Gate successfully sealed!`);

    // Multi-angle celebratory confetti cannons
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
      setTimeout(() => {
        confetti({
          particleCount: 70,
          angle: 60,
          spread: 60,
          origin: { x: 0.05, y: 0.7 }
        });
        confetti({
          particleCount: 70,
          angle: 120,
          spread: 60,
          origin: { x: 0.95, y: 0.7 }
        });
      }, 350);
    } catch {}
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
    setRoundTime(expoMode ? 60 : 240);
    setIsDefeated(false);
    setIsVictory(false);
    setIncomingAttackWarning(false);
    setHeroActionTrigger(null);
    setIntroPhase('active');
    setBattleElapsed(0);
    setLeaderboardSaved(false);
    battleStartTimeRef.current = Date.now();
    setTotalDamageDealt(0);
    setMaxComboReached(0);
    addLog(`[SYSTEM] Battle reset. S-Rank Gate reopened. Engage!`);
  };

  // Calculate proper scoring: reward FASTER completion heavily (real fighting game tournament rules)
  const calculateExpoScore = () => {
    const timeTaken = battleElapsed || 1;
    // Speed points:
    // Sub 20s: 350,000 pts (Speed God)
    // 20-35s: 280,000 - 320,000 pts
    // 35-60s: 200,000 - 250,000 pts
    // Above 60s: decays smoothly down to min 40,000 pts
    let speedBonus = 0;
    if (timeTaken <= 20) {
      speedBonus = 350000 - (timeTaken * 1500);
    } else if (timeTaken <= 35) {
      speedBonus = 300000 - ((timeTaken - 20) * 4000);
    } else if (timeTaken <= 60) {
      speedBonus = 220000 - ((timeTaken - 35) * 3000);
    } else {
      speedBonus = Math.max(40000, 140000 - ((timeTaken - 60) * 1200));
    }

    // HP preservation bonus: up to 150,000 points
    const hpRatio = Math.max(0, Math.min(1, heroHp / maxHeroHp));
    let hpBonus = Math.round(hpRatio * 150000);
    if (hpRatio >= 0.98) hpBonus += 50000; // FLAWLESS VICTORY BONUS!

    // Combo Mastery: 7,500 points per max combo hit
    const bestCombo = Math.max(maxComboReached, comboCount);
    const comboBonus = Math.min(120000, bestCombo * 7500);

    // Damage Dealt Efficiency
    const damageBonus = Math.min(80000, Math.round(totalDamageDealt / 8));

    const totalScore = Math.round(speedBonus + hpBonus + comboBonus + damageBonus);

    let rank = 'C ROOKIE';
    if (totalScore >= 520000 || (timeTaken <= 22 && hpRatio > 0.8)) rank = 'SSS TITAN SLAYER';
    else if (totalScore >= 420000 || timeTaken <= 32) rank = 'SS S-RANK HERO';
    else if (totalScore >= 320000 || timeTaken <= 45) rank = 'S GUARDIAN';
    else if (totalScore >= 220000 || timeTaken <= 65) rank = 'A WARRIOR';
    else if (totalScore >= 120000) rank = 'B FIGHTER';

    return { totalScore, rank, timeTaken, isFlawless: hpRatio >= 0.98 };
  };

  const expoResults = calculateExpoScore();

  // Auto-save to leaderboard cleanly on victory
  useEffect(() => {
    if (isVictory && !leaderboardSaved) {
      saveToLeaderboard({
        playerName: playerName || 'Student Warrior',
        timeTaken: expoResults.timeTaken,
        score: expoResults.totalScore,
        heroName: selectedHero?.name || 'Unknown Hero',
        villainName: selectedVillain?.name || 'Unknown Boss',
        maxCombo: maxComboReached || comboCount,
        heroHpRemaining: heroHp
      });
      setLeaderboardSaved(true);
    }
  }, [isVictory, leaderboardSaved, expoResults, playerName, selectedHero, selectedVillain, maxComboReached, comboCount, heroHp]);

  // Percentages for HUD
  const heroHpPercent = Math.max(0, (heroHp / maxHeroHp) * 100);
  const bossHpPercent = Math.max(0, (bossHp / maxBossHp) * 100);
  const bossHpGhostPercent = Math.max(0, (bossHpGhost / maxBossHp) * 100);
  const bossStaggerPercent = Math.max(0, (bossStaggerHp / maxBossStagger) * 100);

  return (
    <div className={`rs-redgate-arena-screen phase-${introPhase}`}>
      {/* 1. New Custom 4K Battle Arena Background (No characters, clean aesthetic) */}
      <img
        src="/assets/final_fight_arena_4k.jpg"
        alt="Final Fight 4K Arena Background"
        className="rs-stage-background-img rs-stage-bg-4k rs-arena-normal-bg"
      />
      <div className="rs-stage-vignette-overlay"></div>

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
        onTelemetryUpdate={handleTelemetryUpdate}
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

          {/* Interactive Fast Skip Intro Button */}
          <button
            type="button"
            className="rs-cinematic-skip-btn"
            onClick={handleSkipIntro}
            title="Start Combat Immediately (SPACE / ENTER)"
          >
            ⚡ SKIP INTRO [SPACE / ENTER]
          </button>
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
                <span className="rs-hud-weapon-tag villain">🌌 {villainKit.weaponName}</span>
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

      {/* 7.5 HIGH-PRIORITY INCOMING ATTACK TELEGRAPH BANNER */}
      {incomingAttackWarning && (
        <div className="rs-incoming-telegraph-overlay">
          <div className="rs-telegraph-content">
            <AlertTriangle size={20} className="rs-telegraph-icon" />
            <span className="rs-telegraph-text">
              ⚠️ INCOMING: {villainKit.incomingWarning}!
            </span>
            <span className="rs-telegraph-counter-tip">PARRY [1] OR DODGE [A/D] NOW!</span>
          </div>
        </div>
      )}

      {/* ============================================================
          8. TACTICAL ACTION BAR (Bottom Center Keybinds & Gesture Guide)
          ============================================================ */}
      <footer className="rs-tactical-ability-bar">
        <button
          className={`rs-ability-slot ${isHeroParrying ? 'active' : ''}`}
          onClick={() => handleTriggerGesture('palm')}
          title={`${heroKit.parry.title} (Key 1 or Open Palm)`}
        >
          <span className="rs-key-tag">[1]</span>
          <Shield size={16} />
          <div className="rs-slot-info">
            <span className="rs-slot-title">{heroKit.parry.title}</span>
            <span className="rs-slot-desc">{heroKit.parry.desc}</span>
          </div>
        </button>

        <button
          className={`rs-ability-slot charge ${weaponCharged ? 'active' : ''}`}
          onClick={() => handleTriggerGesture('fist')}
          title={`${heroKit.charge.title} (Key 2 or Closed Fist)`}
        >
          <span className="rs-key-tag">[2]</span>
          <Flame size={16} />
          <div className="rs-slot-info">
            <span className="rs-slot-title">{heroKit.charge.title}</span>
            <span className="rs-slot-desc">{heroKit.charge.desc}</span>
          </div>
        </button>

        <button
          className="rs-ability-slot aim"
          onClick={() => handleTriggerGesture('point')}
          title={`${heroKit.aim.title} (Key 3 / E or Point Index Finger)`}
        >
          <span className="rs-key-tag">[3]</span>
          <Target size={16} />
          <div className="rs-slot-info">
            <span className="rs-slot-title">{heroKit.aim.title}</span>
            <span className="rs-slot-desc">{heroKit.aim.desc}</span>
          </div>
        </button>

        <button
          className="rs-ability-slot strike"
          onClick={() => handleTriggerGesture('forward')}
          title={`${heroKit.strike.title} (Space / F or Forward Hand Push)`}
        >
          <span className="rs-key-tag">[SPACE]</span>
          <Sparkles size={16} />
          <div className="rs-slot-info">
            <span className="rs-slot-title">{heroKit.strike.title}</span>
            <span className="rs-slot-desc">{heroKit.strike.desc}</span>
          </div>
        </button>

        <button
          className={`rs-ability-slot ultimate ${heroSuperEnergy >= 100 ? 'ready' : 'charging'}`}
          onClick={() => handleTriggerGesture('both_hands')}
          title={`${heroKit.special.title} (Key 4 / R or Raise Both Hands)`}
        >
          <span className="rs-key-tag">[4]</span>
          <Zap size={16} />
          <div className="rs-slot-info">
            <span className="rs-slot-title">{heroKit.special.title}</span>
            <span className="rs-slot-desc">{heroSuperEnergy >= 100 ? 'READY!' : `${heroSuperEnergy}%`}</span>
          </div>
        </button>

        <button
          className="rs-ability-slot dodge"
          onClick={() => handleTriggerGesture('swipe')}
          title={`${heroKit.dodge.title} (Key A/D/W or Swipe Sideways)`}
        >
          <span className="rs-key-tag">[DODGE]</span>
          <RotateCcw size={16} />
          <div className="rs-slot-info">
            <span className="rs-slot-title">{heroKit.dodge.title}</span>
            <span className="rs-slot-desc">{heroKit.dodge.desc}</span>
          </div>
        </button>
      </footer>

      {/* ============================================================
          9. TACTICAL COMPUTER VISION CAMERA HUD (Bottom Left)
          ============================================================ */}
      <div className="rs-cv-battle-pip-box">
        <div className="rs-cv-battle-header">
          <div className="rs-cv-status-live">
            <span
              className="rs-cv-status-dot"
              style={{
                backgroundColor:
                  cvTrackingStatus === 'TRACKING'
                    ? '#10b981'
                    : cvTrackingStatus === 'HAND NOT DETECTED'
                    ? '#f59e0b'
                    : cvTrackingStatus === 'LOADING MODEL'
                    ? '#00f3ff'
                    : cvTrackingStatus === 'CAMERA OFF'
                    ? '#64748b'
                    : '#ef4444',
                boxShadow:
                  cvTrackingStatus === 'TRACKING'
                    ? '0 0 10px #10b981'
                    : cvTrackingStatus === 'HAND NOT DETECTED'
                    ? '0 0 10px #f59e0b'
                    : cvTrackingStatus === 'LOADING MODEL'
                    ? '0 0 10px #00f3ff'
                    : 'none'
              }}
            ></span>
            <span style={{ fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.05em' }}>
              {cvTrackingStatus}
            </span>
          </div>
          {cvTrackingStatus === 'TRACKING' ? (
            <span
              className="rs-cv-conf-badge"
              style={{ color: '#10b981', borderColor: 'rgba(16, 185, 129, 0.4)' }}
            >
              {cvConfidence || 95}% CONF
            </span>
          ) : (
            <span className="rs-cv-conf-badge" style={{ color: '#94a3b8', fontSize: '9px' }}>
              KEYS ACTIVE
            </span>
          )}
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
          {!activeStream && (
            <div className="rs-cv-camera-off-overlay">
              <button
                className="rs-cv-enable-btn"
                onClick={enableWebcamDirectly}
                type="button"
              >
                <Camera size={14} />
                <span>ENABLE WEBCAM</span>
              </button>
            </div>
          )}
        </div>
        <div className="rs-cv-active-gesture-tag">
          <span className="rs-cv-gesture-name">
            {activeGesture && !activeGesture.includes('Standby')
              ? activeGesture
              : cvTrackingStatus === 'TRACKING'
              ? 'TRACKING LIVE — SHOW MOVE'
              : cvTrackingStatus === 'HAND NOT DETECTED'
              ? 'SHOW HAND TO CAMERA'
              : cvTrackingStatus === 'LOADING MODEL'
              ? 'LOADING AI MODEL...'
              : 'KEYBOARD: [1-4, SPACE, A/D]'}
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
                  <span className="rs-calib-action">{heroKit.parry.title} [1]</span>
                </div>
              </div>
              <div className="rs-calib-item">
                <span className="rs-calib-icon">✊</span>
                <div className="rs-calib-details">
                  <span className="rs-calib-name">CLOSED FIST</span>
                  <span className="rs-calib-action">{heroKit.charge.title} [2]</span>
                </div>
              </div>
              <div className="rs-calib-item">
                <span className="rs-calib-icon">☝️</span>
                <div className="rs-calib-details">
                  <span className="rs-calib-name">POINT INDEX</span>
                  <span className="rs-calib-action">{heroKit.aim.title} [3]</span>
                </div>
              </div>
              <div className="rs-calib-item">
                <span className="rs-calib-icon">🥊</span>
                <div className="rs-calib-details">
                  <span className="rs-calib-name">FORWARD PUSH</span>
                  <span className="rs-calib-action">{heroKit.strike.title} [SPACE]</span>
                </div>
              </div>
              <div className="rs-calib-item">
                <span className="rs-calib-icon">🙌</span>
                <div className="rs-calib-details">
                  <span className="rs-calib-name">BOTH HANDS</span>
                  <span className="rs-calib-action">{heroKit.special.title} [4]</span>
                </div>
              </div>
              <div className="rs-calib-item">
                <span className="rs-calib-icon">↔️</span>
                <div className="rs-calib-details">
                  <span className="rs-calib-name">SIDEWAYS SWIPE</span>
                  <span className="rs-calib-action">{heroKit.dodge.title} [A/D]</span>
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
          <Cosmic3DBackground opacity={0.65} showGrid={true} showMonoliths={true} />
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
                <span>MAIN MENU</span>
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
          <Cosmic3DBackground opacity={0.95} showGrid={true} showMonoliths={true} />
          <div className="rs-defeat-modal-card victory-card">
            <div className="rs-defeat-skull-glow victory-glow">
              <Award size={52} className="text-cyan-400 animate-pulse" />
            </div>
            <h2 className="rs-defeat-title text-cyan-400">{selectedVillain?.name || 'BOSS'} OBLITERATED!</h2>
            <p className="rs-defeat-subtitle">
              <strong>{playerName}</strong> achieved tactical mastery! S-Rank Red Gate sealed against {selectedVillain?.name || 'Dungeon Boss'} with {selectedHero?.name}.
            </p>
            <div className="rs-victory-stats-row">
              <div className="rs-vic-stat">
                <span className="rs-vic-stat-label">⏱️ TIME TAKEN</span>
                <span className="rs-vic-stat-val text-green-400">
                  {Math.floor(expoResults.timeTaken / 60)}:{(expoResults.timeTaken % 60).toString().padStart(2, '0')}
                </span>
              </div>
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
            <div className="rs-lb-saved-badge">
              <Trophy size={14} className="text-yellow-400" />
              <span>RECORD SAVED TO LEADERBOARD</span>
            </div>
            <div className="rs-defeat-actions-row">
              <button className="rs-btn-defeat-retry victory-replay" onClick={handleRetryBattle}>
                <RotateCcw size={16} />
                <span>PLAY AGAIN</span>
              </button>
              {onViewLeaderboard && (
                <button className="rs-btn-defeat-leaderboard" onClick={onViewLeaderboard}>
                  <Trophy size={16} />
                  <span>VIEW LEADERBOARD</span>
                </button>
              )}
              <button className="rs-btn-defeat-exit" onClick={onExitArena}>
                <ArrowLeft size={16} />
                <span>MAIN MENU</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
