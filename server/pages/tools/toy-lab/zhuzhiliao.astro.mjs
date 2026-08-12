import { c as createComponent, b as renderComponent, r as renderTemplate, d as addAttribute, m as maybeRenderHead } from '../../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_DhkRtcHh.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { t as toyGameStyles } from '../../../chunks/index.4485b1f7_CKCAVoR_.mjs';
export { renderers } from '../../../renderers.mjs';

const clamp$3 = (value, min, max) => Math.min(max, Math.max(min, value));
class ZhuzhiliaoAudio {
  context = null;
  master = null;
  sourceBus = null;
  wahGain = null;
  noiseGain = null;
  raspGain = null;
  formant1 = null;
  formant2 = null;
  formant3 = null;
  fundamental = null;
  harmonic2 = null;
  harmonic3 = null;
  harmonic5 = null;
  rasp = null;
  noise = null;
  wahLfo = null;
  wahShape = null;
  wahAmplitudeDepth = null;
  formant1Depth = null;
  formant2Depth = null;
  formant3Depth = null;
  muted = false;
  started = false;
  async start() {
    if (typeof window === "undefined") return false;
    if (!this.context) this.createGraph();
    if (!this.context) return false;
    try {
      if (this.context.state === "suspended") await this.context.resume();
    } catch {
      return false;
    }
    if (this.context.state === "closed") return false;
    this.started = true;
    this.muted = false;
    this.setEnergy(0);
    return true;
  }
  setMuted(muted) {
    this.muted = muted;
    this.setEnergy(0);
  }
  setEnergy(rawEnergy) {
    if (!this.context || !this.master || !this.sourceBus || !this.wahGain || !this.noiseGain || !this.raspGain || !this.formant1 || !this.formant2 || !this.formant3 || !this.wahLfo || !this.wahShape || !this.wahAmplitudeDepth || !this.formant1Depth || !this.formant2Depth || !this.formant3Depth) return;
    const now = this.context.currentTime;
    const energy = this.muted || !this.started ? 0 : clamp$3(rawEnergy, 0, 1);
    const active = energy > 0.015;
    const baseFrequency = 118 + energy * 22;
    const wahRate = 2.8 + energy * 5.8;
    const volume = active ? Math.pow(energy, 1.28) * 0.28 : 0;
    this.master.gain.cancelScheduledValues(now);
    this.master.gain.setTargetAtTime(volume, now, active ? 0.026 : 0.11);
    this.sourceBus.gain.setTargetAtTime(0.62 + energy * 0.16, now, 0.045);
    this.fundamental?.frequency.setTargetAtTime(baseFrequency, now, 0.05);
    this.harmonic2?.frequency.setTargetAtTime(baseFrequency * 2, now, 0.05);
    this.harmonic3?.frequency.setTargetAtTime(baseFrequency * 3, now, 0.05);
    this.harmonic5?.frequency.setTargetAtTime(baseFrequency * 5, now, 0.05);
    this.rasp?.frequency.setTargetAtTime(1650 + energy * 250, now, 0.055);
    this.wahLfo.frequency.setTargetAtTime(wahRate, now, 0.04);
    this.wahGain.gain.setTargetAtTime(0.22, now, 0.035);
    this.wahAmplitudeDepth.gain.setTargetAtTime(0.78, now, 0.04);
    this.formant1.frequency.setTargetAtTime(330 + energy * 12, now, 0.055);
    this.formant2.frequency.setTargetAtTime(780 + energy * 18, now, 0.055);
    this.formant3.frequency.setTargetAtTime(1450 + energy * 24, now, 0.055);
    this.formant1Depth.gain.setTargetAtTime(420, now, 0.06);
    this.formant2Depth.gain.setTargetAtTime(520, now, 0.06);
    this.formant3Depth.gain.setTargetAtTime(380, now, 0.06);
    this.noiseGain.gain.setTargetAtTime(0.012 + energy * 0.038, now, 0.045);
    this.raspGain.gain.setTargetAtTime(8e-3 + energy * 0.027, now, 0.045);
  }
  suspend() {
    if (this.context?.state === "running") void this.context.suspend();
  }
  dispose() {
    const sources = [
      this.fundamental,
      this.harmonic2,
      this.harmonic3,
      this.harmonic5,
      this.rasp,
      this.noise,
      this.wahLfo
    ];
    for (const source of sources) {
      try {
        source?.stop();
      } catch {
      }
    }
    void this.context?.close();
    this.context = null;
    this.master = null;
    this.sourceBus = null;
    this.wahGain = null;
    this.noiseGain = null;
    this.raspGain = null;
    this.formant1 = null;
    this.formant2 = null;
    this.formant3 = null;
    this.fundamental = null;
    this.harmonic2 = null;
    this.harmonic3 = null;
    this.harmonic5 = null;
    this.rasp = null;
    this.noise = null;
    this.wahLfo = null;
    this.wahShape = null;
    this.wahAmplitudeDepth = null;
    this.formant1Depth = null;
    this.formant2Depth = null;
    this.formant3Depth = null;
    this.started = false;
  }
  createGraph() {
    const Context = window.AudioContext || window.webkitAudioContext;
    if (!Context) return;
    const context = new Context();
    const master = context.createGain();
    const compressor = context.createDynamicsCompressor();
    const sourceBus = context.createGain();
    const wahGain = context.createGain();
    const formant1 = context.createBiquadFilter();
    const formant2 = context.createBiquadFilter();
    const formant3 = context.createBiquadFilter();
    const formant1Gain = context.createGain();
    const formant2Gain = context.createGain();
    const formant3Gain = context.createGain();
    const fundamental = context.createOscillator();
    const harmonic2 = context.createOscillator();
    const harmonic3 = context.createOscillator();
    const harmonic5 = context.createOscillator();
    const fundamentalGain = context.createGain();
    const harmonic2Gain = context.createGain();
    const harmonic3Gain = context.createGain();
    const harmonic5Gain = context.createGain();
    const rasp = context.createOscillator();
    const raspGain = context.createGain();
    const noise = context.createBufferSource();
    const noiseFilter = context.createBiquadFilter();
    const noiseGain = context.createGain();
    const wahLfo = context.createOscillator();
    const wahShape = context.createWaveShaper();
    const wahAmplitudeDepth = context.createGain();
    const formant1Depth = context.createGain();
    const formant2Depth = context.createGain();
    const formant3Depth = context.createGain();
    master.gain.value = 0;
    sourceBus.gain.value = 0.62;
    wahGain.gain.value = 0.22;
    compressor.threshold.value = -25;
    compressor.knee.value = 18;
    compressor.ratio.value = 4.5;
    compressor.attack.value = 3e-3;
    compressor.release.value = 0.16;
    fundamental.type = "sine";
    fundamental.frequency.value = 118;
    harmonic2.type = "sine";
    harmonic2.frequency.value = 236;
    harmonic3.type = "sine";
    harmonic3.frequency.value = 354;
    harmonic5.type = "sine";
    harmonic5.frequency.value = 590;
    fundamentalGain.gain.value = 0.72;
    harmonic2Gain.gain.value = 0.26;
    harmonic3Gain.gain.value = 0.14;
    harmonic5Gain.gain.value = 0.08;
    formant1.type = "bandpass";
    formant1.frequency.value = 330;
    formant1.Q.value = 4.2;
    formant1Gain.gain.value = 0.95;
    formant2.type = "bandpass";
    formant2.frequency.value = 780;
    formant2.Q.value = 5;
    formant2Gain.gain.value = 0.55;
    formant3.type = "bandpass";
    formant3.frequency.value = 1450;
    formant3.Q.value = 4;
    formant3Gain.gain.value = 0.22;
    rasp.type = "sine";
    rasp.frequency.value = 1650;
    raspGain.gain.value = 8e-3;
    noiseFilter.type = "bandpass";
    noiseFilter.frequency.value = 1800;
    noiseFilter.Q.value = 2.8;
    noiseGain.gain.value = 0.012;
    const noiseBuffer = context.createBuffer(1, context.sampleRate * 2, context.sampleRate);
    const channel = noiseBuffer.getChannelData(0);
    let smoothed = 0;
    for (let index = 0; index < channel.length; index += 1) {
      const white = Math.random() * 2 - 1;
      smoothed = smoothed * 0.68 + white * 0.32;
      channel[index] = smoothed;
    }
    noise.buffer = noiseBuffer;
    noise.loop = true;
    wahLfo.type = "sine";
    wahLfo.frequency.value = 2.8;
    const wahCurve = new Float32Array(2048);
    for (let index = 0; index < wahCurve.length; index += 1) {
      const input = index / (wahCurve.length - 1) * 2 - 1;
      wahCurve[index] = Math.pow((input + 1) / 2, 1.7);
    }
    wahShape.curve = wahCurve;
    wahShape.oversample = "2x";
    wahAmplitudeDepth.gain.value = 0.78;
    formant1Depth.gain.value = 420;
    formant2Depth.gain.value = 520;
    formant3Depth.gain.value = 380;
    fundamental.connect(fundamentalGain).connect(sourceBus);
    harmonic2.connect(harmonic2Gain).connect(sourceBus);
    harmonic3.connect(harmonic3Gain).connect(sourceBus);
    harmonic5.connect(harmonic5Gain).connect(sourceBus);
    sourceBus.connect(formant1).connect(formant1Gain).connect(wahGain);
    sourceBus.connect(formant2).connect(formant2Gain).connect(wahGain);
    sourceBus.connect(formant3).connect(formant3Gain).connect(wahGain);
    noise.connect(noiseFilter).connect(noiseGain).connect(wahGain);
    rasp.connect(raspGain).connect(wahGain);
    wahLfo.connect(wahShape);
    wahShape.connect(wahAmplitudeDepth).connect(wahGain.gain);
    wahShape.connect(formant1Depth).connect(formant1.frequency);
    wahShape.connect(formant2Depth).connect(formant2.frequency);
    wahShape.connect(formant3Depth).connect(formant3.frequency);
    wahGain.connect(master).connect(compressor).connect(context.destination);
    fundamental.start();
    harmonic2.start();
    harmonic3.start();
    harmonic5.start();
    rasp.start();
    noise.start();
    wahLfo.start();
    this.context = context;
    this.master = master;
    this.sourceBus = sourceBus;
    this.wahGain = wahGain;
    this.noiseGain = noiseGain;
    this.raspGain = raspGain;
    this.formant1 = formant1;
    this.formant2 = formant2;
    this.formant3 = formant3;
    this.fundamental = fundamental;
    this.harmonic2 = harmonic2;
    this.harmonic3 = harmonic3;
    this.harmonic5 = harmonic5;
    this.rasp = rasp;
    this.noise = noise;
    this.wahLfo = wahLfo;
    this.wahShape = wahShape;
    this.wahAmplitudeDepth = wahAmplitudeDepth;
    this.formant1Depth = formant1Depth;
    this.formant2Depth = formant2Depth;
    this.formant3Depth = formant3Depth;
  }
}

const DEFAULT_CONFIG = {
  ropeLength: 172,
  gravity: 1280,
  damping: 0.992,
  maxDelta: 1 / 30,
  maxSpeed: 1600
};
const clamp$2 = (value, min, max) => Math.min(max, Math.max(min, value));
const magnitude = (value) => Math.hypot(value.x, value.y);
const capVector = (value, maxLength) => {
  const length = magnitude(value);
  if (!Number.isFinite(length) || length === 0) return { x: 0, y: 0 };
  if (length <= maxLength) return value;
  const scale = maxLength / length;
  return { x: value.x * scale, y: value.y * scale };
};
class RopePendulum {
  config;
  state;
  constructor(config = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
    this.state = this.createInitialState({ x: 320, y: 150 });
  }
  reset(anchor = this.state.anchor) {
    this.state = this.createInitialState(anchor);
  }
  applyTangentialImpulse(speedDelta, direction) {
    const safeDelta = clamp$2(Number.isFinite(speedDelta) ? Math.abs(speedDelta) : 0, 0, this.config.maxSpeed);
    if (safeDelta === 0) return this.getState();
    const rope = {
      x: this.state.position.x - this.state.anchor.x,
      y: this.state.position.y - this.state.anchor.y
    };
    const ropeDistance = magnitude(rope) || this.config.ropeLength;
    const ropeDirection = {
      x: rope.x / ropeDistance,
      y: rope.y / ropeDistance
    };
    const currentSignedSpeed = ropeDirection.x * this.state.velocity.y - ropeDirection.y * this.state.velocity.x;
    const spinDirection = direction ?? (Math.abs(currentSignedSpeed) > 1 ? currentSignedSpeed > 0 ? 1 : -1 : 1);
    const tangent = {
      x: -ropeDirection.y * spinDirection,
      y: ropeDirection.x * spinDirection
    };
    const velocity = capVector(
      {
        x: this.state.velocity.x + tangent.x * safeDelta,
        y: this.state.velocity.y + tangent.y * safeDelta
      },
      this.config.maxSpeed
    );
    const signedTangentialSpeed = ropeDirection.x * velocity.y - ropeDirection.y * velocity.x;
    const tangentialSpeed = Math.abs(signedTangentialSpeed);
    this.state = {
      ...this.state,
      velocity,
      angularVelocity: signedTangentialSpeed / this.config.ropeLength,
      tangentialSpeed,
      energy: clamp$2(tangentialSpeed / (this.config.maxSpeed * 0.72), 0, 1)
    };
    return this.getState();
  }
  driveTangential(deltaSeconds, acceleration, direction) {
    const dt = clamp$2(Number.isFinite(deltaSeconds) ? deltaSeconds : 0, 0, this.config.maxDelta);
    const safeAcceleration = Number.isFinite(acceleration) ? Math.abs(acceleration) : 0;
    return this.applyTangentialImpulse(safeAcceleration * dt, direction);
  }
  step(deltaSeconds, targetAnchor) {
    const dt = clamp$2(Number.isFinite(deltaSeconds) ? deltaSeconds : 0, 1 / 1e3, this.config.maxDelta);
    const previousAnchor = this.state.anchor;
    const nextAnchor = {
      x: Number.isFinite(targetAnchor.x) ? targetAnchor.x : previousAnchor.x,
      y: Number.isFinite(targetAnchor.y) ? targetAnchor.y : previousAnchor.y
    };
    const anchorVelocity = capVector(
      {
        x: (nextAnchor.x - previousAnchor.x) / dt,
        y: (nextAnchor.y - previousAnchor.y) / dt
      },
      this.config.maxSpeed
    );
    let velocity = {
      x: this.state.velocity.x,
      y: this.state.velocity.y + this.config.gravity * dt
    };
    const damping = Math.pow(this.config.damping, dt * 60);
    velocity.x *= damping;
    velocity.y *= damping;
    velocity = capVector(velocity, this.config.maxSpeed);
    let position = {
      x: this.state.position.x + velocity.x * dt,
      y: this.state.position.y + velocity.y * dt
    };
    let rope = {
      x: position.x - nextAnchor.x,
      y: position.y - nextAnchor.y
    };
    let ropeDistance = magnitude(rope);
    if (!Number.isFinite(ropeDistance) || ropeDistance < 1e-4) {
      rope = { x: 0, y: this.config.ropeLength };
      ropeDistance = this.config.ropeLength;
    }
    const direction = {
      x: rope.x / ropeDistance,
      y: rope.y / ropeDistance
    };
    position = {
      x: nextAnchor.x + direction.x * this.config.ropeLength,
      y: nextAnchor.y + direction.y * this.config.ropeLength
    };
    const relativeVelocity = {
      x: velocity.x - anchorVelocity.x,
      y: velocity.y - anchorVelocity.y
    };
    const radialSpeed = relativeVelocity.x * direction.x + relativeVelocity.y * direction.y;
    const tangentialVelocity = {
      x: relativeVelocity.x - direction.x * radialSpeed,
      y: relativeVelocity.y - direction.y * radialSpeed
    };
    velocity = capVector(
      {
        x: anchorVelocity.x + tangentialVelocity.x,
        y: anchorVelocity.y + tangentialVelocity.y
      },
      this.config.maxSpeed
    );
    const signedTangentialSpeed = direction.x * tangentialVelocity.y - direction.y * tangentialVelocity.x;
    const tangentialSpeed = Math.abs(signedTangentialSpeed);
    const anchorSpeed = magnitude(anchorVelocity);
    const energy = clamp$2(
      (tangentialSpeed + anchorSpeed * 0.16) / (this.config.maxSpeed * 0.72),
      0,
      1
    );
    this.state = {
      anchor: nextAnchor,
      position,
      velocity,
      angularVelocity: signedTangentialSpeed / this.config.ropeLength,
      tangentialSpeed,
      energy
    };
    return this.getState();
  }
  getState() {
    return {
      anchor: { ...this.state.anchor },
      position: { ...this.state.position },
      velocity: { ...this.state.velocity },
      angularVelocity: this.state.angularVelocity,
      tangentialSpeed: this.state.tangentialSpeed,
      energy: this.state.energy
    };
  }
  createInitialState(anchor) {
    return {
      anchor: { ...anchor },
      position: { x: anchor.x, y: anchor.y + this.config.ropeLength },
      velocity: { x: 0, y: 0 },
      angularVelocity: 0,
      tangentialSpeed: 0,
      energy: 0
    };
  }
}

const clamp$1 = (value, min, max) => Math.min(max, Math.max(min, value));
const levelForEnergy = (energy) => {
  if (energy >= 0.72) return "全村都听见了";
  if (energy >= 0.44) return "竹声起来了";
  if (energy >= 0.16) return "轻轻响";
  return "静下来";
};
class ToyScore {
  score = 0;
  bestScore = 0;
  activeSeconds = 0;
  bestActiveSeconds = 0;
  quietSeconds = 0;
  level = "静下来";
  update(deltaSeconds, rawEnergy) {
    const dt = clamp$1(Number.isFinite(deltaSeconds) ? deltaSeconds : 0, 0, 0.05);
    const energy = clamp$1(Number.isFinite(rawEnergy) ? rawEnergy : 0, 0, 1);
    this.level = levelForEnergy(energy);
    if (energy >= 0.14) {
      this.quietSeconds = 0;
      this.activeSeconds += dt;
      this.bestActiveSeconds = Math.max(this.bestActiveSeconds, this.activeSeconds);
      this.score += Math.pow(energy, 1.45) * dt * 190;
      this.bestScore = Math.max(this.bestScore, this.score);
    } else {
      this.quietSeconds += dt;
      if (this.quietSeconds >= 0.45) this.activeSeconds = 0;
    }
    return this.getSnapshot();
  }
  resetRound() {
    this.score = 0;
    this.activeSeconds = 0;
    this.quietSeconds = 0;
    this.level = "静下来";
  }
  resetAll() {
    this.score = 0;
    this.bestScore = 0;
    this.activeSeconds = 0;
    this.bestActiveSeconds = 0;
    this.quietSeconds = 0;
    this.level = "静下来";
  }
  getSnapshot() {
    return {
      score: Math.round(this.score),
      bestScore: Math.round(this.bestScore),
      activeSeconds: Number(this.activeSeconds.toFixed(2)),
      bestActiveSeconds: Number(this.bestActiveSeconds.toFixed(2)),
      level: this.level
    };
  }
}

const formatRotationCount = (rotations) => {
  const safeValue = Number.isFinite(rotations) ? Math.max(0, rotations) : 0;
  if (safeValue < 10) return safeValue.toFixed(1);
  return Math.round(safeValue).toLocaleString("zh-CN");
};
const buildPosterChallengeCopy = ({ score, rotations, maxSpeed }) => {
  if (score >= 5e3 || rotations >= 100) {
    return "这一下，怕是半个村都听见了。";
  }
  if (score >= 1800 || maxSpeed >= 12) {
    return "童年的手感还在，越甩越响。";
  }
  if (score >= 600 || rotations >= 20) {
    return "竹声已经起来了，你能超过我吗？";
  }
  return "小时候会玩的，现在还会吗？";
};
const buildPosterShareText = ({ score, rotations, maxSpeed }) => `我在童玩实验室把竹知了甩到了 ${Math.max(0, Math.round(score)).toLocaleString("zh-CN")} 分，累计 ${formatRotationCount(rotations)} 转，最高转速 ${Math.max(0, maxSpeed).toFixed(1)} rad/s。你也来试试。`;

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const deviceMotionAvailable = () => typeof window !== "undefined" && "DeviceMotionEvent" in window;
const subscribeToDeviceMotion = async (onMotion) => {
  if (!deviceMotionAvailable()) {
    throw new Error("当前设备或浏览器不支持体感模式");
  }
  const MotionEvent = window.DeviceMotionEvent;
  if (typeof MotionEvent.requestPermission === "function") {
    const permission = await MotionEvent.requestPermission();
    if (permission !== "granted") throw new Error("没有获得动作与方向访问权限");
  }
  let filteredX = 0;
  let filteredY = 0;
  const handler = (event) => {
    const acceleration = event.accelerationIncludingGravity || event.acceleration;
    if (!acceleration) return;
    const rawX = Number(acceleration.x || 0) / 8;
    const rawY = Number(acceleration.y || 0) / 8;
    filteredX += (clamp(rawX, -1, 1) - filteredX) * 0.22;
    filteredY += (clamp(rawY, -1, 1) - filteredY) * 0.22;
    onMotion({ x: filteredX, y: filteredY });
  };
  window.addEventListener("devicemotion", handler, { passive: true });
  return () => window.removeEventListener("devicemotion", handler);
};

const roundRect = (context, x, y, width, height, radius) => {
  const r = Math.min(radius, width / 2, height / 2);
  context.beginPath();
  context.moveTo(x + r, y);
  context.arcTo(x + width, y, x + width, y + height, r);
  context.arcTo(x + width, y + height, x, y + height, r);
  context.arcTo(x, y + height, x, y, r);
  context.arcTo(x, y, x + width, y, r);
  context.closePath();
};
const drawPaper = (context, width, height, darkMode) => {
  const gradient = context.createLinearGradient(0, 0, width, height);
  if (darkMode) {
    gradient.addColorStop(0, "#17130f");
    gradient.addColorStop(0.55, "#0f1510");
    gradient.addColorStop(1, "#14100d");
  } else {
    gradient.addColorStop(0, "#f3ead7");
    gradient.addColorStop(0.55, "#f7f0df");
    gradient.addColorStop(1, "#ead8bb");
  }
  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);
  context.save();
  context.globalAlpha = darkMode ? 0.045 : 0.08;
  context.strokeStyle = darkMode ? "#f8e9c7" : "#7b5b31";
  context.lineWidth = 1;
  for (let y = 18; y < height; y += 23) {
    context.beginPath();
    context.moveTo(0, y + Math.sin(y) * 2);
    context.bezierCurveTo(width * 0.25, y - 4, width * 0.75, y + 5, width, y - 1);
    context.stroke();
  }
  context.restore();
  const sun = context.createRadialGradient(width * 0.76, height * 0.2, 0, width * 0.76, height * 0.2, Math.min(width, height) * 0.35);
  sun.addColorStop(0, darkMode ? "rgba(242, 153, 74, 0.16)" : "rgba(214, 119, 42, 0.22)");
  sun.addColorStop(1, "rgba(214, 119, 42, 0)");
  context.fillStyle = sun;
  context.fillRect(0, 0, width, height);
};
const drawTrail = (context, trail, energy) => {
  if (trail.length < 3 || energy < 0.04) return;
  context.save();
  context.lineCap = "round";
  context.lineJoin = "round";
  for (let index = 1; index < trail.length; index += 1) {
    const progress = index / trail.length;
    context.beginPath();
    context.moveTo(trail[index - 1].x, trail[index - 1].y);
    context.lineTo(trail[index].x, trail[index].y);
    context.strokeStyle = `rgba(199, 77, 34, ${progress * energy * 0.3})`;
    context.lineWidth = 1 + progress * 5;
    context.stroke();
  }
  context.restore();
};
const drawAnchor = (context, anchor, running) => {
  context.save();
  context.translate(anchor.x, anchor.y);
  context.shadowColor = "rgba(45, 24, 10, 0.24)";
  context.shadowBlur = 16;
  context.shadowOffsetY = 8;
  const handleGradient = context.createLinearGradient(-38, -8, 38, 8);
  handleGradient.addColorStop(0, "#6e3b1f");
  handleGradient.addColorStop(0.45, "#a96935");
  handleGradient.addColorStop(1, "#5a2c18");
  roundRect(context, -46, -10, 92, 20, 10);
  context.fillStyle = handleGradient;
  context.fill();
  context.shadowColor = "transparent";
  context.strokeStyle = "rgba(255, 235, 202, 0.35)";
  context.lineWidth = 1.5;
  context.beginPath();
  context.moveTo(-32, -3);
  context.lineTo(29, -3);
  context.stroke();
  context.fillStyle = running ? "#c94f2d" : "#875733";
  context.beginPath();
  context.arc(0, 0, 5.5, 0, Math.PI * 2);
  context.fill();
  context.restore();
};
const drawToy = (context, state, darkMode) => {
  const { anchor, position, energy, angularVelocity } = state;
  const ropeAngle = Math.atan2(position.y - anchor.y, position.x - anchor.x);
  context.save();
  context.strokeStyle = darkMode ? "rgba(236, 199, 144, 0.92)" : "rgba(111, 63, 28, 0.9)";
  context.lineWidth = 2.2;
  context.beginPath();
  context.moveTo(anchor.x, anchor.y);
  context.quadraticCurveTo(
    (anchor.x + position.x) / 2 + Math.sin(ropeAngle) * 7,
    (anchor.y + position.y) / 2 - Math.cos(ropeAngle) * 7,
    position.x,
    position.y
  );
  context.stroke();
  context.restore();
  context.save();
  context.translate(position.x, position.y);
  context.rotate(ropeAngle - Math.PI / 2 + angularVelocity * 0.018);
  context.shadowColor = "rgba(49, 25, 9, 0.32)";
  context.shadowBlur = 22 + energy * 14;
  context.shadowOffsetY = 10;
  const bodyGradient = context.createLinearGradient(-42, 0, 42, 0);
  bodyGradient.addColorStop(0, "#816129");
  bodyGradient.addColorStop(0.18, "#c49a49");
  bodyGradient.addColorStop(0.5, "#e3bd68");
  bodyGradient.addColorStop(0.82, "#b18236");
  bodyGradient.addColorStop(1, "#69481d");
  roundRect(context, -44, -18, 88, 36, 15);
  context.fillStyle = bodyGradient;
  context.fill();
  context.shadowColor = "transparent";
  context.strokeStyle = "rgba(78, 49, 18, 0.55)";
  context.lineWidth = 1.2;
  roundRect(context, -44, -18, 88, 36, 15);
  context.stroke();
  context.strokeStyle = "rgba(92, 58, 20, 0.28)";
  for (let x = -27; x <= 26; x += 13) {
    context.beginPath();
    context.moveTo(x, -15);
    context.lineTo(x - 4, 15);
    context.stroke();
  }
  const membraneGradient = context.createRadialGradient(36, 0, 2, 36, 0, 18);
  membraneGradient.addColorStop(0, "#f7e5b8");
  membraneGradient.addColorStop(0.7, "#d9a653");
  membraneGradient.addColorStop(1, "#7f4a20");
  context.fillStyle = membraneGradient;
  context.beginPath();
  context.ellipse(38, 0, 11 + energy * 1.5, 16 + energy * 2.5, 0, 0, Math.PI * 2);
  context.fill();
  context.strokeStyle = "rgba(86, 47, 18, 0.65)";
  context.stroke();
  context.fillStyle = "#9d3523";
  context.beginPath();
  context.arc(-36, 0, 5, 0, Math.PI * 2);
  context.fill();
  context.strokeStyle = "#a63f2a";
  context.lineWidth = 2;
  context.beginPath();
  context.moveTo(-41, 4);
  context.bezierCurveTo(-58, 18, -56, 34, -68, 46);
  context.stroke();
  context.beginPath();
  context.moveTo(-35, 5);
  context.bezierCurveTo(-48, 24, -42, 35, -49, 52);
  context.stroke();
  context.restore();
};
const drawZhuzhiliao = (context, options) => {
  const { width, height, state, trail, running, darkMode } = options;
  context.clearRect(0, 0, width, height);
  drawPaper(context, width, height, darkMode);
  drawTrail(context, trail, state.energy);
  context.save();
  context.globalAlpha = 0.1 + state.energy * 0.16;
  context.fillStyle = "#c64d2e";
  context.beginPath();
  context.arc(state.position.x, state.position.y, 55 + state.energy * 80, 0, Math.PI * 2);
  context.fill();
  context.restore();
  drawAnchor(context, state.anchor, running);
  drawToy(context, state, darkMode);
};

const POSTER_WIDTH = 1080;
const POSTER_HEIGHT = 1920;
const QR_ASSET = "/images/toy-lab/guizhou-outdoor-qr.svg";
const loadImage = (src) => new Promise((resolve, reject) => {
  const image = new Image();
  image.decoding = "async";
  image.onload = () => resolve(image);
  image.onerror = () => reject(new Error(`无法加载海报资源：${src}`));
  image.src = src;
});
const roundedRect = (context, x, y, width, height, radius) => {
  const r = Math.min(radius, width / 2, height / 2);
  context.beginPath();
  context.moveTo(x + r, y);
  context.arcTo(x + width, y, x + width, y + height, r);
  context.arcTo(x + width, y + height, x, y + height, r);
  context.arcTo(x, y + height, x, y, r);
  context.arcTo(x, y, x + width, y, r);
  context.closePath();
};
const drawContainedCanvas = (context, source, x, y, width, height) => {
  const ratio = Math.min(width / source.width, height / source.height);
  const renderedWidth = source.width * ratio;
  const renderedHeight = source.height * ratio;
  context.drawImage(
    source,
    x + (width - renderedWidth) / 2,
    y + (height - renderedHeight) / 2,
    renderedWidth,
    renderedHeight
  );
};
const drawStat = (context, x, y, width, label, value, unit = "") => {
  roundedRect(context, x, y, width, 150, 28);
  context.fillStyle = "rgba(255, 250, 238, 0.78)";
  context.fill();
  context.strokeStyle = "rgba(112, 70, 37, 0.18)";
  context.lineWidth = 2;
  context.stroke();
  context.fillStyle = "#806a52";
  context.font = "800 25px sans-serif";
  context.fillText(label, x + 28, y + 43);
  context.fillStyle = "#2b2118";
  context.font = "900 48px sans-serif";
  context.fillText(value, x + 28, y + 105);
  if (unit) {
    const valueWidth = context.measureText(value).width;
    context.fillStyle = "#9b4129";
    context.font = "800 22px sans-serif";
    context.fillText(unit, x + 34 + valueWidth, y + 105);
  }
};
const canvasToBlob = (canvas) => new Promise((resolve, reject) => {
  canvas.toBlob(
    (blob) => blob ? resolve(blob) : reject(new Error("分享海报生成失败")),
    "image/png",
    0.96
  );
});
const createZhuzhiliaoPoster = async (gameCanvas, stats) => {
  const poster = document.createElement("canvas");
  poster.width = POSTER_WIDTH;
  poster.height = POSTER_HEIGHT;
  const context = poster.getContext("2d");
  if (!context) throw new Error("当前浏览器不支持海报生成");
  const background = context.createLinearGradient(0, 0, POSTER_WIDTH, POSTER_HEIGHT);
  background.addColorStop(0, "#fffdf6");
  background.addColorStop(0.48, "#f4ead5");
  background.addColorStop(1, "#ead5b4");
  context.fillStyle = background;
  context.fillRect(0, 0, POSTER_WIDTH, POSTER_HEIGHT);
  context.save();
  context.globalAlpha = 0.07;
  context.strokeStyle = "#6f4a2c";
  context.lineWidth = 1;
  for (let y = 18; y < POSTER_HEIGHT; y += 19) {
    context.beginPath();
    context.moveTo(0, y);
    context.bezierCurveTo(260, y - 3, 760, y + 5, POSTER_WIDTH, y - 1);
    context.stroke();
  }
  context.restore();
  context.fillStyle = "#b84329";
  context.font = "900 24px sans-serif";
  context.letterSpacing = "7px";
  context.fillText("TOY FOLK LABORATORY · XBSTACK ORIGINAL", 80, 84);
  context.letterSpacing = "0px";
  context.fillStyle = "#2b2118";
  context.font = "900 96px STKaiti, KaiTi, serif";
  context.fillText("竹知了成绩单", 74, 205);
  const challengeCopy = buildPosterChallengeCopy({
    score: stats.score,
    rotations: stats.rotations,
    maxSpeed: stats.maxSpeed
  });
  context.fillStyle = "#785f49";
  context.font = "800 36px STKaiti, KaiTi, serif";
  context.fillText(challengeCopy, 80, 275);
  roundedRect(context, 80, 325, 920, 640, 44);
  context.fillStyle = "rgba(255, 250, 238, 0.92)";
  context.fill();
  context.strokeStyle = "rgba(105, 66, 32, 0.22)";
  context.lineWidth = 3;
  context.stroke();
  context.save();
  roundedRect(context, 104, 349, 872, 592, 30);
  context.clip();
  context.fillStyle = "#f5ecd9";
  context.fillRect(104, 349, 872, 592);
  drawContainedCanvas(context, gameCanvas, 104, 349, 872, 592);
  context.restore();
  roundedRect(context, 112, 365, 210, 56, 28);
  context.fillStyle = "rgba(184, 67, 41, 0.94)";
  context.fill();
  context.fillStyle = "#fff8e8";
  context.font = "900 24px sans-serif";
  context.fillText("第 001 号玩具", 138, 402);
  context.textAlign = "right";
  context.fillStyle = "#b84329";
  context.font = "900 80px sans-serif";
  context.fillText(Math.round(stats.score).toLocaleString("zh-CN"), 958, 900);
  context.font = "900 25px sans-serif";
  context.fillText(`${stats.level} · 本轮成绩`, 958, 932);
  context.textAlign = "left";
  context.fillStyle = "#493725";
  context.font = "900 31px sans-serif";
  context.fillText("这一轮的数据", 80, 1030);
  context.fillStyle = "#92765a";
  context.font = "700 22px sans-serif";
  context.fillText("成绩、转数和转速都来自当前浏览器的实时物理计算", 80, 1067);
  const statWidth = 286;
  drawStat(context, 80, 1105, statWidth, "本轮成绩", Math.round(stats.score).toLocaleString("zh-CN"), "分");
  drawStat(context, 397, 1105, statWidth, "历史最高", Math.round(stats.bestScore).toLocaleString("zh-CN"), "分");
  drawStat(context, 714, 1105, statWidth, "累计转数", formatRotationCount(stats.rotations), "转");
  drawStat(context, 80, 1280, statWidth, "最高转速", stats.maxSpeed.toFixed(1), "rad/s");
  drawStat(context, 397, 1280, statWidth, "连续响动", stats.activeSeconds.toFixed(1), "秒");
  drawStat(context, 714, 1280, statWidth, "当前响度", `${Math.round(stats.energyPercent)}`, "%");
  roundedRect(context, 80, 1480, 920, 330, 42);
  context.fillStyle = "rgba(53, 42, 30, 0.94)";
  context.fill();
  context.fillStyle = "#f8e9cf";
  context.font = "900 48px STKaiti, KaiTi, serif";
  context.fillText("童玩实验室", 126, 1558);
  context.fillStyle = "#dba45c";
  context.font = "900 23px sans-serif";
  context.fillText("1000万以内最好的玩具", 128, 1602);
  context.fillStyle = "rgba(255, 247, 230, 0.82)";
  context.font = "700 25px sans-serif";
  context.fillText("Web：www.xbstack.com", 128, 1683);
  context.fillText("公众号：贵州户外", 128, 1732);
  context.fillStyle = "rgba(255, 247, 230, 0.58)";
  context.font = "700 20px sans-serif";
  context.fillText("扫码关注公众号，打开网站继续挑战", 128, 1772);
  const qrImage = await loadImage(new URL(QR_ASSET, window.location.origin).toString());
  roundedRect(context, 724, 1532, 224, 224, 26);
  context.fillStyle = "#fffaf0";
  context.fill();
  context.drawImage(qrImage, 736, 1544, 200, 200);
  context.fillStyle = "#f8e9cf";
  context.font = "800 18px sans-serif";
  context.textAlign = "center";
  context.fillText("微信扫码关注", 836, 1790);
  context.textAlign = "left";
  const now = /* @__PURE__ */ new Date();
  context.fillStyle = "rgba(70, 49, 30, 0.58)";
  context.font = "700 18px sans-serif";
  context.fillText(
    `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, "0")}.${String(now.getDate()).padStart(2, "0")} · 数据仅保存在当前浏览器`,
    80,
    1870
  );
  return canvasToBlob(poster);
};

const FIXED_STEP = 1 / 120;
const HOLD_ACCELERATION = 1500;
const RAPID_TAP_WINDOW_MS = 420;
const EMPTY_SCORE = {
  score: 0,
  bestScore: 0,
  activeSeconds: 0,
  bestActiveSeconds: 0,
  level: "静下来"
};
const track = (eventName, params = {}) => {
  if (typeof window === "undefined") return;
  const analyticsWindow = window;
  analyticsWindow.gtag?.("event", eventName, params);
  analyticsWindow._hmt?.push(["_trackEvent", "toy_lab", eventName, JSON.stringify(params)]);
};
const readStoredBest = () => {
  if (typeof window === "undefined") return 0;
  try {
    const value = Number(window.localStorage.getItem("toy-lab:zhuzhiliao:best") || 0);
    return Number.isFinite(value) ? value : 0;
  } catch {
    return 0;
  }
};
const shareUrl = () => {
  const url = new URL(window.location.href);
  url.searchParams.set("utm_source", "toy_lab_share");
  url.searchParams.set("utm_medium", "referral");
  url.searchParams.set("utm_campaign", "toy_lab_zhuzhiliao");
  return url.toString();
};
function ZhuzhiliaoGame() {
  const canvasRef = useRef(null);
  const stageRef = useRef(null);
  const pendulumRef = useRef(new RopePendulum());
  const scoreRef = useRef(new ToyScore());
  const audioRef = useRef(null);
  const audioStartPromiseRef = useRef(null);
  const targetAnchorRef = useRef({ x: 320, y: 150 });
  const canvasSizeRef = useRef({ width: 640, height: 560, dpr: 1 });
  const trailRef = useRef([]);
  const runningRef = useRef(false);
  const mutedRef = useRef(false);
  const accumulatorRef = useRef(0);
  const lastFrameRef = useRef(0);
  const lastUiUpdateRef = useRef(0);
  const frameRef = useRef(null);
  const motionCleanupRef = useRef(null);
  const highScoreTrackedRef = useRef(false);
  const pointerActiveRef = useRef(false);
  const motionEnabledRef = useRef(false);
  const holdSecondsRef = useRef(0);
  const lastTapAtRef = useRef(0);
  const tapStreakRef = useRef(0);
  const spinDirectionRef = useRef(1);
  const totalRotationsRef = useRef(0);
  const maxSpeedRef = useRef(0);
  const posterUrlRef = useRef(null);
  const posterBlobRef = useRef(null);
  const [running, setRunning] = useState(false);
  const [muted, setMuted] = useState(false);
  const [audioReady, setAudioReady] = useState(false);
  const [motionEnabled, setMotionEnabled] = useState(false);
  const [motionSupported, setMotionSupported] = useState(false);
  const [score, setScore] = useState(EMPTY_SCORE);
  const [storedBest, setStoredBest] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [rotations, setRotations] = useState(0);
  const [maxSpeed, setMaxSpeed] = useState(0);
  const [posterUrl, setPosterUrl] = useState(null);
  const [posterOpen, setPosterOpen] = useState(false);
  const [posterHint, setPosterHint] = useState("生成后可下载、分享，微信内可长按保存到相册。");
  const [message, setMessage] = useState("声音默认开启；第一次点击开始玩或画布时会自动解锁。快速连点加速，长按持续加速。");
  const [shareState, setShareState] = useState("idle");
  const setRunningState = useCallback((nextRunning) => {
    runningRef.current = nextRunning;
    setRunning(nextRunning);
  }, []);
  const ensureSoundStarted = useCallback(async (announce = false) => {
    if (mutedRef.current) return false;
    if (!audioRef.current) audioRef.current = new ZhuzhiliaoAudio();
    if (!audioStartPromiseRef.current) {
      audioStartPromiseRef.current = audioRef.current.start().finally(() => {
        audioStartPromiseRef.current = null;
      });
    }
    const started = await audioStartPromiseRef.current;
    if (!started) {
      mutedRef.current = true;
      setMuted(true);
      setAudioReady(false);
      setMessage("浏览器没有允许声音启动。请检查系统静音状态，再点一次“开启声音”。");
      return false;
    }
    if (mutedRef.current) {
      audioRef.current.setMuted(true);
      return false;
    }
    audioRef.current.setMuted(false);
    setAudioReady(true);
    if (announce) {
      setMessage("声音已开启。现在使用“哇—哇—哇”共鸣音，转得越快，哇声越密。");
    }
    return true;
  }, []);
  const resetRound = useCallback(() => {
    const { width } = canvasSizeRef.current;
    const anchor = { x: width / 2, y: Math.max(104, width * 0.16) };
    targetAnchorRef.current = anchor;
    pendulumRef.current.reset(anchor);
    scoreRef.current.resetRound();
    trailRef.current = [];
    accumulatorRef.current = 0;
    pointerActiveRef.current = false;
    holdSecondsRef.current = 0;
    lastTapAtRef.current = 0;
    tapStreakRef.current = 0;
    spinDirectionRef.current = 1;
    totalRotationsRef.current = 0;
    maxSpeedRef.current = 0;
    setScore({ ...EMPTY_SCORE, bestScore: Math.max(storedBest, score.bestScore) });
    setEnergy(0);
    setSpeed(0);
    setRotations(0);
    setMaxSpeed(0);
    setMessage("新一轮开始：声音保持开启；快速连点会加速，按住不放会持续加速。");
    setRunningState(false);
    audioRef.current?.setEnergy(0);
    track("toy_lab_reset", { toy: "zhuzhiliao" });
  }, [score.bestScore, setRunningState, storedBest]);
  const startPlaying = useCallback(() => {
    if (!mutedRef.current) void ensureSoundStarted(false);
    if (!runningRef.current) {
      setRunningState(true);
      setMessage("开始了：声音默认开启。快速连点提高转速，按住持续加速，拖动画圈可改变轨迹。");
      track("toy_lab_start", { toy: "zhuzhiliao", input: motionEnabled ? "motion" : "pointer" });
    }
    canvasRef.current?.focus({ preventScroll: true });
  }, [ensureSoundStarted, motionEnabled, setRunningState]);
  const toggleSound = useCallback(async () => {
    if (mutedRef.current) {
      mutedRef.current = false;
      setMuted(false);
      const started = await ensureSoundStarted(true);
      if (started) track("toy_lab_sound_enable", { toy: "zhuzhiliao" });
      return;
    }
    mutedRef.current = true;
    audioRef.current?.setMuted(true);
    setMuted(true);
    setMessage("声音已关闭，动作和计分仍会继续。再次点击可重新开启。");
    track("toy_lab_sound_disable", { toy: "zhuzhiliao" });
  }, [ensureSoundStarted]);
  const toggleMotion = useCallback(async () => {
    if (motionEnabled) {
      motionCleanupRef.current?.();
      motionCleanupRef.current = null;
      motionEnabledRef.current = false;
      setMotionEnabled(false);
      setMessage("体感模式已关闭，可以继续用手指或鼠标操作。");
      track("toy_lab_motion_disable", { toy: "zhuzhiliao" });
      return;
    }
    if (!mutedRef.current) void ensureSoundStarted(false);
    try {
      const cleanup = await subscribeToDeviceMotion((vector) => {
        const { width, height } = canvasSizeRef.current;
        targetAnchorRef.current = {
          x: width / 2 + vector.x * Math.min(width * 0.3, 180),
          y: Math.max(78, height * 0.22 + vector.y * Math.min(height * 0.18, 110))
        };
        if (!runningRef.current) setRunningState(true);
      });
      motionCleanupRef.current = cleanup;
      motionEnabledRef.current = true;
      pointerActiveRef.current = false;
      holdSecondsRef.current = 0;
      setMotionEnabled(true);
      setMessage("体感模式已开启：声音默认开启，握稳手机后缓慢画圈或摆动手腕。");
      track("toy_lab_motion_enable", { toy: "zhuzhiliao" });
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "体感模式开启失败");
      track("toy_lab_motion_error", { toy: "zhuzhiliao" });
    }
  }, [ensureSoundStarted, motionEnabled, setRunningState]);
  const closePoster = useCallback(() => {
    setPosterOpen(false);
    setShareState("idle");
  }, []);
  const generateSharePoster = useCallback(async () => {
    const gameCanvas = canvasRef.current;
    if (!gameCanvas) return;
    setShareState("generating");
    setPosterHint("正在生成 1080 × 1920 分享海报……");
    try {
      const bestScore = Math.max(storedBest, score.bestScore, score.score);
      const blob = await createZhuzhiliaoPoster(gameCanvas, {
        score: score.score,
        bestScore,
        rotations: totalRotationsRef.current,
        currentSpeed: speed,
        maxSpeed: maxSpeedRef.current,
        activeSeconds: score.activeSeconds,
        bestActiveSeconds: score.bestActiveSeconds,
        energyPercent: Math.round(energy * 100),
        level: score.level
      });
      if (posterUrlRef.current) URL.revokeObjectURL(posterUrlRef.current);
      const nextUrl = URL.createObjectURL(blob);
      posterUrlRef.current = nextUrl;
      posterBlobRef.current = blob;
      setPosterUrl(nextUrl);
      setPosterOpen(true);
      setPosterHint("海报已生成。微信内长按图片可保存；也可以点击下方按钮下载或分享。");
      setShareState("ready");
      track("toy_lab_poster_generate", {
        toy: "zhuzhiliao",
        score: score.score,
        rotations: Math.round(totalRotationsRef.current * 10) / 10,
        max_speed: Math.round(maxSpeedRef.current * 10) / 10
      });
    } catch (error) {
      setShareState("failed");
      setPosterHint(error instanceof Error ? error.message : "海报生成失败，请稍后重试。");
      setMessage(error instanceof Error ? error.message : "海报生成失败，请稍后重试。");
    }
  }, [energy, score, speed, storedBest]);
  const savePoster = useCallback(() => {
    const url = posterUrlRef.current;
    if (!url) return;
    const link = document.createElement("a");
    link.href = url;
    link.download = `童玩实验室-竹知了-${Math.max(0, Math.round(score.score))}分.png`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    const userAgent = navigator.userAgent;
    if (/MicroMessenger/i.test(userAgent) || /iPhone|iPad|iPod/i.test(userAgent)) {
      setPosterHint("微信或 iPhone 未直接保存时，请长按上方海报选择“保存图片”，或点击“分享图片”调出系统菜单。");
    } else {
      setPosterHint("图片已开始下载，可在下载目录或相册中查看。");
    }
    setShareState("saved");
    track("toy_lab_poster_save", { toy: "zhuzhiliao", score: score.score });
  }, [score.score]);
  const sharePosterImage = useCallback(async () => {
    const blob = posterBlobRef.current;
    if (!blob) return;
    const result = {
      score: score.score,
      rotations: totalRotationsRef.current,
      maxSpeed: maxSpeedRef.current
    };
    const text = buildPosterShareText(result);
    const url = shareUrl();
    const file = new File([blob], `童玩实验室-竹知了-${Math.max(0, Math.round(score.score))}分.png`, {
      type: "image/png"
    });
    try {
      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          title: "童玩实验室｜竹知了成绩单",
          text,
          url,
          files: [file]
        });
        setShareState("shared");
        setPosterHint("分享图片已交给系统处理。");
      } else if (navigator.share) {
        await navigator.share({ title: "童玩实验室｜竹知了成绩单", text, url });
        setShareState("shared");
        setPosterHint("当前浏览器不支持直接分享图片，已改为分享成绩和游戏链接。");
      } else {
        await navigator.clipboard.writeText(`${text}
${url}`);
        setShareState("copied");
        setPosterHint("成绩和游戏链接已复制；图片可继续长按或下载保存。");
      }
      track("toy_lab_poster_share", {
        toy: "zhuzhiliao",
        score: score.score,
        with_file: navigator.canShare?.({ files: [file] }) ?? false
      });
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      try {
        await navigator.clipboard.writeText(`${text}
${url}`);
        setShareState("copied");
        setPosterHint("图片分享未完成，成绩和游戏链接已复制。");
      } catch {
        setShareState("failed");
        setPosterHint("分享失败。可以长按海报保存后，再从相册发送。");
      }
    }
  }, [score.score]);
  useEffect(() => {
    setMotionSupported(deviceMotionAvailable());
    setStoredBest(readStoredBest());
  }, []);
  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = stageRef.current;
    if (!canvas || !stage) return;
    const resize = () => {
      const rect = stage.getBoundingClientRect();
      const width = Math.max(300, rect.width);
      const height = Math.max(430, Math.min(680, window.innerHeight * 0.68));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      const context2 = canvas.getContext("2d");
      context2?.setTransform(dpr, 0, 0, dpr, 0, 0);
      canvasSizeRef.current = { width, height, dpr };
      const current = pendulumRef.current.getState();
      if (!runningRef.current || !Number.isFinite(current.anchor.x)) {
        const anchor = { x: width / 2, y: Math.max(96, height * 0.19) };
        targetAnchorRef.current = anchor;
        pendulumRef.current.reset(anchor);
      } else {
        targetAnchorRef.current = {
          x: Math.min(width - 58, Math.max(58, targetAnchorRef.current.x)),
          y: Math.min(height * 0.48, Math.max(72, targetAnchorRef.current.y))
        };
      }
    };
    const observer = new ResizeObserver(resize);
    observer.observe(stage);
    resize();
    const context = canvas.getContext("2d");
    if (!context) return () => observer.disconnect();
    const renderFrame = (time) => {
      const delta = lastFrameRef.current ? Math.min((time - lastFrameRef.current) / 1e3, 0.05) : FIXED_STEP;
      lastFrameRef.current = time;
      let state = pendulumRef.current.getState();
      let snapshot = scoreRef.current.getSnapshot();
      if (runningRef.current) {
        accumulatorRef.current += delta;
        while (accumulatorRef.current >= FIXED_STEP) {
          state = pendulumRef.current.step(FIXED_STEP, targetAnchorRef.current);
          if (pointerActiveRef.current && !motionEnabledRef.current) {
            holdSecondsRef.current += FIXED_STEP;
            const holdRamp = Math.min(1, holdSecondsRef.current / 1.6);
            state = pendulumRef.current.driveTangential(
              FIXED_STEP,
              HOLD_ACCELERATION * (0.78 + holdRamp * 0.42),
              spinDirectionRef.current
            );
          } else {
            holdSecondsRef.current = 0;
          }
          const absoluteAngularVelocity = Math.abs(state.angularVelocity);
          totalRotationsRef.current += absoluteAngularVelocity * FIXED_STEP / (Math.PI * 2);
          maxSpeedRef.current = Math.max(maxSpeedRef.current, absoluteAngularVelocity);
          if (absoluteAngularVelocity > 0.45) {
            spinDirectionRef.current = state.angularVelocity > 0 ? 1 : -1;
          }
          snapshot = scoreRef.current.update(FIXED_STEP, state.energy);
          accumulatorRef.current -= FIXED_STEP;
        }
      } else {
        state = pendulumRef.current.step(delta, targetAnchorRef.current);
        snapshot = scoreRef.current.update(delta, Math.min(state.energy, 0.08));
      }
      trailRef.current.push({ ...state.position });
      const maxTrail = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 4 : 24;
      if (trailRef.current.length > maxTrail) trailRef.current.splice(0, trailRef.current.length - maxTrail);
      audioRef.current?.setEnergy(state.energy);
      const { width, height } = canvasSizeRef.current;
      drawZhuzhiliao(context, {
        width,
        height,
        state,
        trail: trailRef.current,
        running: runningRef.current,
        darkMode: document.documentElement.classList.contains("dark")
      });
      if (time - lastUiUpdateRef.current > 90) {
        lastUiUpdateRef.current = time;
        const persisted = Math.max(readStoredBest(), snapshot.bestScore, snapshot.score);
        if (persisted > readStoredBest()) {
          try {
            window.localStorage.setItem("toy-lab:zhuzhiliao:best", String(persisted));
          } catch {
          }
          setStoredBest(persisted);
        }
        if (persisted >= 1e3 && !highScoreTrackedRef.current) {
          highScoreTrackedRef.current = true;
          track("toy_lab_high_score", { toy: "zhuzhiliao", score: persisted });
        }
        setScore(snapshot);
        setEnergy(state.energy);
        setSpeed(Math.round(Math.abs(state.angularVelocity) * 10) / 10);
        setRotations(Math.round(totalRotationsRef.current * 10) / 10);
        setMaxSpeed(Math.round(maxSpeedRef.current * 10) / 10);
      }
      frameRef.current = window.requestAnimationFrame(renderFrame);
    };
    frameRef.current = window.requestAnimationFrame(renderFrame);
    return () => {
      observer.disconnect();
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);
  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === "hidden") {
        audioRef.current?.suspend();
      } else if (!mutedRef.current) {
        void audioRef.current?.start().then((started) => {
          if (started) setAudioReady(true);
        }).catch(() => void 0);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);
  useEffect(() => {
    if (!posterOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown2 = (event) => {
      if (event.key === "Escape") closePoster();
    };
    document.addEventListener("keydown", handleKeyDown2);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown2);
    };
  }, [closePoster, posterOpen]);
  useEffect(
    () => () => {
      motionCleanupRef.current?.();
      audioRef.current?.dispose();
      if (posterUrlRef.current) URL.revokeObjectURL(posterUrlRef.current);
    },
    []
  );
  const updateAnchorFromPointer = (event) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const { width, height } = canvasSizeRef.current;
    targetAnchorRef.current = {
      x: Math.min(width - 52, Math.max(52, event.clientX - rect.left)),
      y: Math.min(height * 0.5, Math.max(64, event.clientY - rect.top))
    };
  };
  const accelerateFromClick = useCallback(() => {
    const now = performance.now();
    const interval = lastTapAtRef.current > 0 ? now - lastTapAtRef.current : Number.POSITIVE_INFINITY;
    tapStreakRef.current = interval <= RAPID_TAP_WINDOW_MS ? Math.min(8, tapStreakRef.current + 1) : 1;
    lastTapAtRef.current = now;
    const cadence = Number.isFinite(interval) ? Math.max(0, 1 - interval / RAPID_TAP_WINDOW_MS) : 0;
    const currentState = pendulumRef.current.getState();
    if (Math.abs(currentState.angularVelocity) > 0.45) {
      spinDirectionRef.current = currentState.angularVelocity > 0 ? 1 : -1;
    }
    const impulse = 130 + cadence * 230 + Math.max(0, tapStreakRef.current - 1) * 20;
    pendulumRef.current.applyTangentialImpulse(impulse, spinDirectionRef.current);
    if (tapStreakRef.current >= 2) {
      setMessage(`连续点击 ${tapStreakRef.current} 次：每次点击都在叠加转速，继续按住还能持续加速。`);
    } else {
      setMessage("点击已加速。继续快速点击会更快，按住不放则持续加速。");
    }
  }, []);
  const handleStartClick = useCallback(() => {
    startPlaying();
    accelerateFromClick();
  }, [accelerateFromClick, startPlaying]);
  const handlePointerDown = (event) => {
    startPlaying();
    accelerateFromClick();
    if (motionEnabledRef.current) {
      setMessage("已通过点击加速；体感模式继续负责控制轨迹和甩动方向。");
      return;
    }
    pointerActiveRef.current = true;
    holdSecondsRef.current = 0;
    event.currentTarget.setPointerCapture(event.pointerId);
    updateAnchorFromPointer(event);
  };
  const handlePointerMove = (event) => {
    if (!pointerActiveRef.current || motionEnabled) return;
    updateAnchorFromPointer(event);
  };
  const handlePointerEnd = (event) => {
    pointerActiveRef.current = false;
    holdSecondsRef.current = 0;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };
  const handleKeyDown = (event) => {
    const step = event.shiftKey ? 30 : 16;
    const next = { ...targetAnchorRef.current };
    if (event.key === "ArrowLeft") next.x -= step;
    else if (event.key === "ArrowRight") next.x += step;
    else if (event.key === "ArrowUp") next.y -= step;
    else if (event.key === "ArrowDown") next.y += step;
    else if (event.key === " ") {
      event.preventDefault();
      void toggleSound();
      return;
    } else return;
    event.preventDefault();
    const { width, height } = canvasSizeRef.current;
    targetAnchorRef.current = {
      x: Math.min(width - 52, Math.max(52, next.x)),
      y: Math.min(height * 0.5, Math.max(64, next.y))
    };
    startPlaying();
  };
  const displayedBest = Math.max(storedBest, score.bestScore, score.score);
  const energyPercent = Math.round(energy * 100);
  const shareButtonLabel = shareState === "generating" ? "正在生成海报…" : posterUrl ? "重新生成分享图" : "生成分享图";
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: `toy-game${posterOpen ? " is-poster-open" : ""}`,
      "aria-label": "竹知了互动游戏",
      "data-sound-state": muted ? "muted" : audioReady ? "ready" : "armed",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "toy-game__headline", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "toy-game__eyebrow", children: "童玩实验室 · 第 001 号玩具" }),
            /* @__PURE__ */ jsx("h2", { children: "竹知了" }),
            /* @__PURE__ */ jsx("p", { children: "快速连续点击会叠加转速，长按则持续加速；声音默认开启，第一次操作会自动解锁。" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "toy-game__seal", "aria-label": "一千万以内最好的玩具", children: [
            /* @__PURE__ */ jsx("span", { children: "1000万以内" }),
            /* @__PURE__ */ jsx("strong", { children: "最好的玩具" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "toy-game__layout", children: [
          /* @__PURE__ */ jsxs("div", { className: "toy-game__stage-shell", children: [
            /* @__PURE__ */ jsxs(
              "div",
              {
                ref: stageRef,
                className: "toy-game__stage",
                "data-energy": energyPercent,
                children: [
                  /* @__PURE__ */ jsx(
                    "canvas",
                    {
                      ref: canvasRef,
                      className: "toy-game__canvas",
                      tabIndex: 0,
                      role: "application",
                      "aria-label": "快速连续点击会加速，按住会持续加速，拖动可改变轨迹；声音默认开启，也可用空格切换声音",
                      onPointerDown: handlePointerDown,
                      onPointerMove: handlePointerMove,
                      onPointerUp: handlePointerEnd,
                      onPointerCancel: handlePointerEnd,
                      onKeyDown: handleKeyDown
                    }
                  ),
                  !running && /* @__PURE__ */ jsxs("button", { type: "button", className: "toy-game__start", onClick: handleStartClick, children: [
                    /* @__PURE__ */ jsx("span", { children: "点击竹知了，立即加速" }),
                    /* @__PURE__ */ jsx("small", { children: "第一次点击就会旋转 · 连续点击叠加转速 · 长按持续加速" })
                  ] }),
                  running && /* @__PURE__ */ jsx("div", { className: "toy-game__tap-hint", "aria-hidden": "true", children: "点击画面继续加速" }),
                  /* @__PURE__ */ jsxs("div", { className: "toy-game__sound-wave", "aria-hidden": "true", children: [
                    /* @__PURE__ */ jsx("i", { style: { transform: `scaleY(${0.35 + energy * 0.9})` } }),
                    /* @__PURE__ */ jsx("i", { style: { transform: `scaleY(${0.5 + energy * 1.2})` } }),
                    /* @__PURE__ */ jsx("i", { style: { transform: `scaleY(${0.3 + energy * 0.75})` } })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "toy-game__message", role: "status", "aria-live": "polite", children: message })
          ] }),
          /* @__PURE__ */ jsxs("aside", { className: "toy-game__panel", children: [
            /* @__PURE__ */ jsxs("div", { className: "toy-game__score-card", children: [
              /* @__PURE__ */ jsx("span", { children: "本轮得分" }),
              /* @__PURE__ */ jsx("strong", { children: score.score.toLocaleString("zh-CN") }),
              /* @__PURE__ */ jsx("p", { children: score.level })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "toy-game__meters", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { children: "响度" }),
                /* @__PURE__ */ jsxs("strong", { children: [
                  energyPercent,
                  "%"
                ] }),
                /* @__PURE__ */ jsx("i", { children: /* @__PURE__ */ jsx("b", { style: { width: `${energyPercent}%` } }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { children: "转速" }),
                /* @__PURE__ */ jsx("strong", { children: speed.toFixed(1) }),
                /* @__PURE__ */ jsx("small", { children: "rad/s" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("dl", { className: "toy-game__stats", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("dt", { children: "历史最高" }),
                /* @__PURE__ */ jsx("dd", { children: displayedBest.toLocaleString("zh-CN") })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("dt", { children: "累计转数" }),
                /* @__PURE__ */ jsxs("dd", { children: [
                  formatRotationCount(rotations),
                  " 转"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("dt", { children: "最高转速" }),
                /* @__PURE__ */ jsxs("dd", { children: [
                  maxSpeed.toFixed(1),
                  " rad/s"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("dt", { children: "连续响动" }),
                /* @__PURE__ */ jsxs("dd", { children: [
                  score.activeSeconds.toFixed(1),
                  " 秒"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("dt", { children: "最长连续" }),
                /* @__PURE__ */ jsxs("dd", { children: [
                  score.bestActiveSeconds.toFixed(1),
                  " 秒"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "toy-game__controls", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  className: muted ? "" : "is-active",
                  "aria-pressed": !muted,
                  onClick: () => void toggleSound(),
                  children: muted ? "开启声音" : "关闭声音"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  className: motionEnabled ? "is-active" : "",
                  onClick: () => void toggleMotion(),
                  disabled: !motionSupported,
                  title: motionSupported ? "使用手机动作传感器控制" : "当前设备不支持动作传感器",
                  children: motionEnabled ? "关闭体感" : "体感模式"
                }
              ),
              /* @__PURE__ */ jsx("button", { type: "button", onClick: resetRound, children: "重新开始" }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  className: "toy-game__share",
                  onClick: () => void generateSharePoster(),
                  disabled: shareState === "generating",
                  children: shareButtonLabel
                }
              )
            ] }),
            /* @__PURE__ */ jsx("p", { className: "toy-game__privacy", children: "动作、分数和传感器数据只在当前浏览器计算，不上传服务器。分享海报也在本地生成，只在图片中加入 www.xbstack.com、公众号“贵州户外”和关注二维码。" })
          ] })
        ] }),
        posterOpen && posterUrl && typeof document !== "undefined" && createPortal(
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "toy-game__poster-overlay",
              role: "presentation",
              onPointerDown: (event) => {
                if (event.target === event.currentTarget) closePoster();
              },
              children: /* @__PURE__ */ jsxs(
                "section",
                {
                  className: "toy-game__poster-dialog",
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-labelledby": "toy-poster-title",
                  children: [
                    /* @__PURE__ */ jsxs("header", { className: "toy-game__poster-header", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("p", { children: "童玩实验室 · 分享成绩" }),
                        /* @__PURE__ */ jsx("h3", { id: "toy-poster-title", children: "竹知了成绩海报" })
                      ] }),
                      /* @__PURE__ */ jsx("button", { type: "button", className: "toy-game__poster-close", onClick: closePoster, "aria-label": "关闭分享海报", children: "×" })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "toy-game__poster-preview", children: /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: posterUrl,
                        alt: `竹知了成绩海报：${score.score.toLocaleString("zh-CN")} 分，累计 ${formatRotationCount(rotations)} 转`,
                        draggable: false
                      }
                    ) }),
                    /* @__PURE__ */ jsx("p", { className: "toy-game__poster-hint", role: "status", "aria-live": "polite", children: posterHint }),
                    /* @__PURE__ */ jsxs("div", { className: "toy-game__poster-actions", children: [
                      /* @__PURE__ */ jsx("button", { type: "button", className: "is-primary", onClick: savePoster, children: shareState === "saved" ? "已开始保存" : "保存图片" }),
                      /* @__PURE__ */ jsx("button", { type: "button", onClick: () => void sharePosterImage(), children: shareState === "shared" ? "已分享" : shareState === "copied" ? "链接已复制" : "分享图片" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "toy-game__poster-footnote", children: "海报尺寸 1080 × 1920，包含本轮成绩、历史最高、累计转数、最高转速、连续响动、网站域名和“贵州户外”公众号二维码。" })
                  ]
                }
              )
            }
          ),
          document.body
        )
      ]
    }
  );
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "\u7AF9\u77E5\u4E86\u7F51\u9875\u7248\uFF1A\u5728\u7EBF\u7529\u54CD\u7AE5\u5E74\u4F20\u7EDF\u73A9\u5177";
  const description = "\u5728\u7EBF\u73A9\u7AF9\u77E5\u4E86\uFF1A\u5FEB\u901F\u8FDE\u7EED\u70B9\u51FB\u63D0\u9AD8\u8F6C\u901F\uFF0C\u957F\u6309\u6301\u7EED\u52A0\u901F\uFF0C\u4E5F\u53EF\u62D6\u52A8\u753B\u5708\u6216\u4F7F\u7528\u624B\u673A\u4F53\u611F\uFF0C\u8BA9\u7AF9\u77E5\u4E86\u65CB\u8F6C\u53D1\u58F0\u3002\u52A8\u4F5C\u548C\u5206\u6570\u5168\u90E8\u5728\u6D4F\u89C8\u5668\u672C\u5730\u8BA1\u7B97\uFF0C\u65E0\u9700\u6CE8\u518C\u3002";
  const keywords = "\u7AF9\u77E5\u4E86\u7F51\u9875\u7248, \u7AF9\u77E5\u4E86\u6E38\u620F, \u7AF9\u77E5\u4E86\u600E\u4E48\u73A9, \u7AF9\u77E5\u4E86\u4E3A\u4EC0\u4E48\u4F1A\u54CD, \u4F20\u7EDF\u73A9\u5177\u6E38\u620F, \u7AE5\u73A9\u5B9E\u9A8C\u5BA4, \u624B\u673A\u4F53\u611F\u6E38\u620F";
  const canonical = "https://www.xbstack.com/tools/toy-lab/zhuzhiliao/";
  const cover = "/assets/toy-lab/toy-lab-cover.svg";
  const faqs = [
    { question: "\u7AF9\u77E5\u4E86\u7F51\u9875\u7248\u600E\u4E48\u64CD\u4F5C\uFF1F", answer: "\u5FEB\u901F\u8FDE\u7EED\u70B9\u51FB\u4F1A\u53E0\u52A0\u8F6C\u901F\uFF0C\u957F\u6309\u4F1A\u6301\u7EED\u52A0\u901F\uFF1B\u62D6\u52A8\u9F20\u6807\u6216\u624B\u6307\u753B\u5708\u53EF\u4EE5\u6539\u53D8\u7529\u52A8\u8F68\u8FF9\u3002\u624B\u673A\u8FD8\u53EF\u4EE5\u5F00\u542F\u4F53\u611F\u6A21\u5F0F\uFF0C\u952E\u76D8\u7528\u6237\u53EF\u7528\u65B9\u5411\u952E\u79FB\u52A8\u6728\u67C4\uFF0C\u7A7A\u683C\u952E\u5207\u6362\u58F0\u97F3\u3002" },
    { question: "\u4E3A\u4EC0\u4E48\u7B2C\u4E00\u6B21\u6253\u5F00\u6CA1\u6709\u58F0\u97F3\uFF1F", answer: "\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u7F51\u9875\u81EA\u52A8\u64AD\u653E\u58F0\u97F3\u3002\u70B9\u51FB\u201C\u5F00\u542F\u58F0\u97F3\u201D\u540E\u624D\u4F1A\u521D\u59CB\u5316 Web Audio\uFF0C\u9875\u9762\u5207\u5230\u540E\u53F0\u65F6\u4E5F\u4F1A\u4E3B\u52A8\u6682\u505C\u3002" },
    { question: "\u7AF9\u77E5\u4E86\u4E3A\u4EC0\u4E48\u4F1A\u54CD\uFF1F", answer: "\u4F20\u7EDF\u7AF9\u77E5\u4E86\u901A\u5E38\u5229\u7528\u65CB\u8F6C\u5E26\u52A8\u7ED3\u6784\u6469\u64E6\u6216\u632F\u52A8\uFF0C\u4F7F\u7AF9\u819C\u6216\u8584\u819C\u5468\u671F\u6027\u632F\u52A8\u5E76\u653E\u5927\u58F0\u97F3\u3002\u4E0D\u540C\u5730\u533A\u7684\u5236\u4F5C\u6750\u6599\u548C\u7ED3\u6784\u4F1A\u6709\u5DEE\u5F02\u3002" },
    { question: "\u73B0\u5728\u7684\u58F0\u97F3\u662F\u5B9E\u7269\u5F55\u97F3\u5417\uFF1F", answer: "\u5F53\u524D\u7248\u672C\u4F7F\u7528\u72EC\u7ACB\u7F16\u5199\u7684 Web Audio \u5408\u6210\u97F3\u4F5C\u4E3A\u5360\u4F4D\uFF0C\u4E0D\u4F7F\u7528\u5176\u4ED6\u9879\u76EE\u97F3\u9891\u3002\u81EA\u884C\u91C7\u96C6\u3001\u6E05\u7406\u5E76\u53D6\u5F97\u53EF\u5546\u7528\u6743\u5229\u7684\u5B9E\u7269\u5F55\u97F3\u540E\uFF0C\u4F1A\u66FF\u6362\u4E3A\u91C7\u6837\u7248\u672C\u3002" },
    { question: "\u53EF\u4EE5\u5728\u516C\u4F17\u53F7\u91CC\u73A9\u5417\uFF1F", answer: "\u53EF\u4EE5\u5728\u516C\u4F17\u53F7\u6587\u7AE0\u4E2D\u653E\u5165\u672C\u9875\u94FE\u63A5\uFF0C\u7528\u6237\u70B9\u51FB\u540E\u5728\u5FAE\u4FE1\u6D4F\u89C8\u5668\u6253\u5F00\u3002\u5FAE\u4FE1\u5C0F\u6E38\u620F\u7248\u672C\u8FD8\u6CA1\u6709\u53D1\u5E03\uFF0C\u540E\u7EED\u4F1A\u590D\u7528\u540C\u4E00\u5957\u7269\u7406\u548C\u8BA1\u5206\u6838\u5FC3\u3002" }
  ];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": ["VideoGame", "SoftwareApplication"], name: "\u7AE5\u73A9\u5B9E\u9A8C\u5BA4\uFF1A\u7AF9\u77E5\u4E86", alternateName: "\u7AF9\u77E5\u4E86\u7F51\u9875\u7248", applicationCategory: "GameApplication", operatingSystem: "Web Browser", url: canonical, image: `https://www.xbstack.com${cover}`, description, inLanguage: "zh-Hans", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "CNY" }, author: { "@type": "Organization", name: "XBSTACK", url: "https://www.xbstack.com/" }, playMode: "SinglePlayer", sameAs: ["https://github.com/xbstack/zhuzhiliao-web"] },
      { "@type": "FAQPage", mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) }
    ]
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "canonical": canonical, "image": cover, "schemaJsonLd": schema, "data-astro-cid-snclkbcr": true }, { "default": ($$result2) => renderTemplate` <link rel="stylesheet"${addAttribute(toyGameStyles, "href")}> ${maybeRenderHead()}<main class="zhuzhiliao-page" data-astro-cid-snclkbcr> <section class="zhuzhiliao-shell" data-astro-cid-snclkbcr> <nav class="zhuzhiliao-breadcrumb" aria-label="面包屑" data-astro-cid-snclkbcr><a href="/" data-astro-cid-snclkbcr>首页</a><span data-astro-cid-snclkbcr>/</span><a href="/tools/" data-astro-cid-snclkbcr>工具</a><span data-astro-cid-snclkbcr>/</span><a href="/tools/toy-lab/" data-astro-cid-snclkbcr>童玩实验室</a><span data-astro-cid-snclkbcr>/</span><strong data-astro-cid-snclkbcr>竹知了</strong></nav> <header class="zhuzhiliao-intro" data-astro-cid-snclkbcr> <div data-astro-cid-snclkbcr><p data-astro-cid-snclkbcr>TOY FOLK LABORATORY · NO.001</p><h1 data-astro-cid-snclkbcr>小时候甩一下<br data-astro-cid-snclkbcr><em data-astro-cid-snclkbcr>就会叫的玩具</em></h1></div> <div class="zhuzhiliao-intro__side" data-astro-cid-snclkbcr><p data-astro-cid-snclkbcr>快速连续点击会叠加转速，按住不放会持续加速；拖动鼠标或手指画圈，还能改变绳子和竹筒的甩动轨迹。</p><div data-astro-cid-snclkbcr><span data-astro-cid-snclkbcr>连点加速</span><span data-astro-cid-snclkbcr>长按持续加速</span><span data-astro-cid-snclkbcr>支持手机体感</span></div></div> </header> ${renderComponent($$result2, "ZhuzhiliaoGame", ZhuzhiliaoGame, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@features/toy-lab/components/ZhuzhiliaoGame", "client:component-export": "default", "data-astro-cid-snclkbcr": true })} <section class="zhuzhiliao-guide" aria-labelledby="guide-title" data-astro-cid-snclkbcr> <div class="zhuzhiliao-section-title" data-astro-cid-snclkbcr><p data-astro-cid-snclkbcr>HOW TO PLAY</p><h2 id="guide-title" data-astro-cid-snclkbcr>怎么把它甩响</h2></div> <ol data-astro-cid-snclkbcr><li data-astro-cid-snclkbcr><span data-astro-cid-snclkbcr>01</span><div data-astro-cid-snclkbcr><h3 data-astro-cid-snclkbcr>快速点按</h3><p data-astro-cid-snclkbcr>点击“开始玩”后，在画布上连续点按。两次点击间隔越短，叠加的切向冲量越大，转速会上升得更快。</p></div></li><li data-astro-cid-snclkbcr><span data-astro-cid-snclkbcr>02</span><div data-astro-cid-snclkbcr><h3 data-astro-cid-snclkbcr>长按加速</h3><p data-astro-cid-snclkbcr>鼠标或手指按住不放时，系统会持续施加驱动力；按住时间越长，加速效果会逐步增强，松开后自然惯性衰减。</p></div></li><li data-astro-cid-snclkbcr><span data-astro-cid-snclkbcr>03</span><div data-astro-cid-snclkbcr><h3 data-astro-cid-snclkbcr>拖动改轨迹</h3><p data-astro-cid-snclkbcr>按住并拖动画圈，可以移动木柄锚点，让绳长、重力和手势共同改变竹筒的甩动轨迹。</p></div></li><li data-astro-cid-snclkbcr><span data-astro-cid-snclkbcr>04</span><div data-astro-cid-snclkbcr><h3 data-astro-cid-snclkbcr>分享最高分</h3><p data-astro-cid-snclkbcr>历史最高分保存在当前设备。点击分享成绩，可生成带来源参数的页面链接。</p></div></li></ol> </section> <section class="zhuzhiliao-explain" aria-labelledby="explain-title" data-astro-cid-snclkbcr> <div class="zhuzhiliao-explain__copy" data-astro-cid-snclkbcr><p class="zhuzhiliao-label" data-astro-cid-snclkbcr>WHY IT SOUNDS</p><h2 id="explain-title" data-astro-cid-snclkbcr>声音不是按钮触发的，<br data-astro-cid-snclkbcr>它来自运动本身。</h2><p data-astro-cid-snclkbcr>传统竹知了的结构在不同地区并不完全一样，但核心都离不开旋转、摩擦与薄膜振动。网页版本把手柄作为移动锚点，把竹筒视作被绳约束的质点：重力不断拉低它，手腕的圆周动作不断注入切向速度。</p><p data-astro-cid-snclkbcr>当前响度使用运动能量驱动原创 Web Audio 合成器。它不是对实物声学结构的精密仿真，也不是其他作品的录音；它承担的是 MVP 的交互反馈。后续自行采集实物声音后，音频层可以替换，物理和计分内核不需要重写。</p></div> <div class="zhuzhiliao-diagram" aria-label="竹知了网页物理结构示意" data-astro-cid-snclkbcr><div class="zhuzhiliao-diagram__handle" data-astro-cid-snclkbcr>手柄 / Anchor</div><i data-astro-cid-snclkbcr></i><div class="zhuzhiliao-diagram__toy" data-astro-cid-snclkbcr>竹筒 / Body</div><div class="zhuzhiliao-diagram__force zhuzhiliao-diagram__force--g" data-astro-cid-snclkbcr>重力</div><div class="zhuzhiliao-diagram__force zhuzhiliao-diagram__force--t" data-astro-cid-snclkbcr>切向速度</div><div class="zhuzhiliao-diagram__force zhuzhiliao-diagram__force--s" data-astro-cid-snclkbcr>绳长约束</div></div> </section> <section class="zhuzhiliao-boundary" aria-labelledby="boundary-title" data-astro-cid-snclkbcr><div data-astro-cid-snclkbcr><p data-astro-cid-snclkbcr>ORIGINALITY & DATA</p><h2 id="boundary-title" data-astro-cid-snclkbcr>这次重新做了什么</h2></div><div class="zhuzhiliao-boundary__grid" data-astro-cid-snclkbcr><article data-astro-cid-snclkbcr><b data-astro-cid-snclkbcr>独立物理内核</b><p data-astro-cid-snclkbcr>固定时间步、绳长投影、径向速度移除、能量归一化和计分均从空项目实现，并有自动化测试。</p></article><article data-astro-cid-snclkbcr><b data-astro-cid-snclkbcr>原创 Canvas 画面</b><p data-astro-cid-snclkbcr>竹筒、竹膜、木柄、红穗、纸纹和轨迹全部由本项目代码绘制，不使用外部项目图片。</p></article><article data-astro-cid-snclkbcr><b data-astro-cid-snclkbcr>原创合成音</b><p data-astro-cid-snclkbcr>当前使用振荡器、噪声、带通滤波和动态增益生成占位声音，未来只替换为自行采集的录音。</p></article><article data-astro-cid-snclkbcr><b data-astro-cid-snclkbcr>动作不上传</b><p data-astro-cid-snclkbcr>鼠标、触摸、键盘和传感器数据留在浏览器；服务器不会接收原始动作轨迹或设备姿态。</p></article></div></section> <section class="zhuzhiliao-open-source" aria-labelledby="open-source-title" data-astro-cid-snclkbcr><div data-astro-cid-snclkbcr><p data-astro-cid-snclkbcr>OPEN SOURCE · MIT</p><h2 id="open-source-title" data-astro-cid-snclkbcr>完整交互实现已经开源。</h2><span data-astro-cid-snclkbcr>独立仓库包含 React、TypeScript、Canvas 2D、Web Audio、DeviceMotion、分享海报、物理与计分内核，以及 11 项自动化测试。官方试玩仍保留在当前 XBSTACK 页面。</span></div><div data-astro-cid-snclkbcr><b data-astro-cid-snclkbcr>github.com/xbstack/zhuzhiliao-web</b><a href="https://github.com/xbstack/zhuzhiliao-web" target="_blank" rel="noopener noreferrer" data-astro-cid-snclkbcr>查看 GitHub 源码 →</a><small data-astro-cid-snclkbcr>欢迎 Star、Issue 和 Pull Request</small></div></section> <section class="zhuzhiliao-platforms" aria-labelledby="platform-title" data-astro-cid-snclkbcr><p data-astro-cid-snclkbcr>FROM WEB TO WECHAT</p><h2 id="platform-title" data-astro-cid-snclkbcr>网站版不是终点，但它是所有版本的基准。</h2><div data-astro-cid-snclkbcr><article class="is-live" data-astro-cid-snclkbcr><span data-astro-cid-snclkbcr>Web</span><h3 data-astro-cid-snclkbcr>当前页面</h3><p data-astro-cid-snclkbcr>用于搜索、公众号链接、桌面和手机试玩。当前已经可以完成完整游戏循环。</p><b data-astro-cid-snclkbcr>Live MVP</b></article><article data-astro-cid-snclkbcr><span data-astro-cid-snclkbcr>H5</span><h3 data-astro-cid-snclkbcr>公众号入口</h3><p data-astro-cid-snclkbcr>直接使用本页，后续增加微信分享卡片、公众号关注引导和活动参数。</p><b data-astro-cid-snclkbcr>Compatible</b></article><article data-astro-cid-snclkbcr><span data-astro-cid-snclkbcr>微信小游戏</span><h3 data-astro-cid-snclkbcr>原生适配</h3><p data-astro-cid-snclkbcr>复用物理和计分核心，替换为 wx Canvas、InnerAudioContext、加速度计和微信分享接口。</p><b data-astro-cid-snclkbcr>Planned</b></article></div></section> <section class="zhuzhiliao-faq" aria-labelledby="faq-title" data-astro-cid-snclkbcr><div class="zhuzhiliao-section-title" data-astro-cid-snclkbcr><p data-astro-cid-snclkbcr>FAQ</p><h2 id="faq-title" data-astro-cid-snclkbcr>常见问题</h2></div><div class="zhuzhiliao-faq__grid" data-astro-cid-snclkbcr>${faqs.map((item) => renderTemplate`<article data-astro-cid-snclkbcr><h3 data-astro-cid-snclkbcr>${item.question}</h3><p data-astro-cid-snclkbcr>${item.answer}</p></article>`)}</div></section> <section class="zhuzhiliao-next" data-astro-cid-snclkbcr><div data-astro-cid-snclkbcr><p data-astro-cid-snclkbcr>下一件玩具</p><h2 data-astro-cid-snclkbcr>陀螺，还是竹蜻蜓？</h2><span data-astro-cid-snclkbcr>后续开放投票和公众号征集。</span></div><a href="/tools/toy-lab/" data-astro-cid-snclkbcr>返回童玩实验室 →</a></section> </section> </main> ` })} `;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/tools/toy-lab/zhuzhiliao/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/tools/toy-lab/zhuzhiliao/index.astro";
const $$url = "/tools/toy-lab/zhuzhiliao/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
