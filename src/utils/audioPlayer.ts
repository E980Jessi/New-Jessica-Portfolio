// Web Audio API synthesizer tuned to the warm R&B groove of NewJeans' "Attention"
class LoFiSynthesizer {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private timer: number | null = null;
  private step = 0;

  // Key of F / Dm: Bbmaj7 -> Am7 -> Gm7 -> C9sus (iconic early 2000s R&B vibe of Attention)
  private chordProgression = [
    [233.08, 293.66, 349.23, 440.00], // Bbmaj7 (Bb3, D4, F4, A4)
    [220.00, 261.63, 329.63, 392.00], // Am7 (A3, C4, E4, G4)
    [196.00, 233.08, 293.66, 349.23], // Gm7 (G3, Bb3, D4, F4)
    [261.63, 349.23, 392.00, 466.16], // C7sus4 (C4, F4, G4, Bb4)
  ];

  public init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
  }

  public play() {
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.isPlaying = true;
    this.playStep();
  }

  public pause() {
    this.isPlaying = false;
    if (this.timer) {
      window.clearTimeout(this.timer);
      this.timer = null;
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public playShutter() {
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(900, now);
    osc.frequency.exponentialRampToValueAtTime(150, now + 0.09);
    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.1);
  }

  public getPlaying(): boolean {
    return this.isPlaying;
  }

  private playStep() {
    if (!this.isPlaying || !this.ctx) return;

    const chord = this.chordProgression[this.step % this.chordProgression.length];
    const now = this.ctx.currentTime;

    chord.forEach((freq, i) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      // Warm electric piano / Rhodes tone
      osc.type = i === 0 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.035);

      // Warm lowpass filter
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1100, now);

      // Silky envelope
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.05, now + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 2.1);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + i * 0.035);
      osc.stop(now + 2.2);
    });

    this.step++;
    // Repeat every 1.8 seconds for smooth head-nod rhythm
    this.timer = window.setTimeout(() => {
      this.playStep();
    }, 1800);
  }
}

export const lofiPlayer = new LoFiSynthesizer();
