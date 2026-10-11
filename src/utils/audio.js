// High-tech Cyberpunk Web Audio Sound Generator (No external MP3 files needed!)
class SoundFX {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    return this.muted;
  }

  // Futuristic UI Hover tick
  playHover() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1400, this.ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch (e) {
      // Audio fallback
    }
  }

  // Holographic Click
  playClick() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1200, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch (e) {
      // Audio fallback
    }
  }

  // Epic Portal Warp & Play Game Launch Sound
  playPortalWarp() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;

      // Sub-bass rumble
      const subOsc = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(60, now);
      subOsc.frequency.exponentialRampToValueAtTime(220, now + 0.5);
      subOsc.frequency.exponentialRampToValueAtTime(30, now + 1.2);

      subGain.gain.setValueAtTime(0.25, now);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

      subOsc.connect(subGain);
      subGain.connect(this.ctx.destination);
      subOsc.start();
      subOsc.stop(now + 1.2);

      // Cyber laser frequency sweep
      const laserOsc = this.ctx.createOscillator();
      const laserGain = this.ctx.createGain();
      laserOsc.type = 'sawtooth';
      laserOsc.frequency.setValueAtTime(300, now);
      laserOsc.frequency.exponentialRampToValueAtTime(2400, now + 0.35);
      laserOsc.frequency.exponentialRampToValueAtTime(800, now + 0.8);

      laserGain.gain.setValueAtTime(0.12, now);
      laserGain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

      laserOsc.connect(laserGain);
      laserGain.connect(this.ctx.destination);
      laserOsc.start();
      laserGain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
      laserOsc.stop(now + 0.8);
    } catch (e) {
      // Audio fallback
    }
  }

  // HUD Modal activate
  playModal() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      [440, 660, 880].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.04);
        gain.gain.setValueAtTime(0.06, now + idx * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.04 + 0.15);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.04);
        osc.stop(now + idx * 0.04 + 0.15);
      });
    } catch (e) {
      // Audio fallback
    }
  }

  // --- MARVEL HERO & VILLAIN SIGNATURE COMBAT SOUNDS ---

  // Heavy Punch / Physical Impact Strike
  playPunch() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.exponentialRampToValueAtTime(45, now + 0.12);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.12);
    } catch (e) {}
  }

  // Iron Man Repulsor & Unibeam Laser / Energy Ray
  playLaserBeam(isHeavy = false) {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      const startFreq = isHeavy ? 1200 : 850;
      const endFreq = isHeavy ? 180 : 320;
      const dur = isHeavy ? 0.45 : 0.22;
      osc.frequency.setValueAtTime(startFreq, now);
      osc.frequency.exponentialRampToValueAtTime(endFreq, now + dur);
      gain.gain.setValueAtTime(isHeavy ? 0.35 : 0.22, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + dur);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + dur);
    } catch (e) {}
  }

  // Thor Mjolnir Thunder Strike & Sky Lightning
  playThunder() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      // White noise rumble + sub-bass
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(95, now);
      osc.frequency.exponentialRampToValueAtTime(25, now + 0.65);
      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.65);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.65);

      // High electric crackle
      const crackle = this.ctx.createOscillator();
      const cGain = this.ctx.createGain();
      crackle.type = 'sawtooth';
      crackle.frequency.setValueAtTime(3200, now);
      crackle.frequency.exponentialRampToValueAtTime(300, now + 0.25);
      cGain.gain.setValueAtTime(0.18, now);
      cGain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      crackle.connect(cGain);
      cGain.connect(this.ctx.destination);
      crackle.start(now);
      crackle.stop(now + 0.25);
    } catch (e) {}
  }

  // Spider-Man Web Shot / Quantum Web Thwip
  playWebSling() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(2200, now);
      osc.frequency.exponentialRampToValueAtTime(350, now + 0.14);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.14);
    } catch (e) {}
  }

  // Captain America Vibranium Shield Parry / Ricochet
  playShieldBlock() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1400, now);
      osc.frequency.exponentialRampToValueAtTime(650, now + 0.25);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.25);
    } catch (e) {}
  }

  // Doctor Strange & Loki Mystic Spellcast / Mandala Resonance
  playMysticCast() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.03);
        gain.gain.setValueAtTime(0.12, now + i * 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.03 + 0.3);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.03);
        osc.stop(now + i * 0.03 + 0.3);
      });
    } catch (e) {}
  }

  // Explosion for Pumpkin Bomb / Thanos Cosmic Detonation
  playExplosion() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.exponentialRampToValueAtTime(30, now + 0.45);
      gain.gain.setValueAtTime(0.38, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.45);
    } catch (e) {}
  }
}

export const sound = new SoundFX();
