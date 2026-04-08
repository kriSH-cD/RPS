/* ===== useSound – Lightweight Web Audio effects ===== */

let audioCtx = null;

function ensureAudio() {
  if (!audioCtx) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    audioCtx = new Ctx();
  }
  return audioCtx;
}

function playTone(freq, duration, type = 'sine', vol = 0.1) {
  try {
    const ctx = ensureAudio();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.value = vol;
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (_) {
    /* audio not critical */
  }
}

export function playSelect() {
  playTone(480, 0.08, 'sine', 0.07);
}

export function playWin() {
  playTone(523, 0.12, 'sine', 0.09);
  setTimeout(() => playTone(659, 0.12, 'sine', 0.09), 100);
  setTimeout(() => playTone(784, 0.2, 'sine', 0.09), 200);
}

export function playLose() {
  playTone(350, 0.25, 'sawtooth', 0.06);
  setTimeout(() => playTone(280, 0.3, 'sawtooth', 0.06), 200);
}

export function playDraw() {
  playTone(400, 0.2, 'triangle', 0.07);
}
