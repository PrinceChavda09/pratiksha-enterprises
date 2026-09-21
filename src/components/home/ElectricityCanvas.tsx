"use client";

import React, { useEffect, useRef, useCallback } from "react";

interface ElectricityCanvasProps {
  rodXPercent?: number; // Horizontal position of copper rod (e.g. 28%)
  rodClampYPercent?: number; // Vertical position of terminal clamp (e.g. 63.5%)
  rodBaseYPercent?: number; // Vertical position of rod bottom in soil (e.g. 88%)
  wireDepthPercent?: number; // Vertical depth of underground wire (e.g. 74%)
  isSurging?: boolean; // High-voltage surge trigger state
  onSurgeComplete?: () => void;
}

// Particle for ground dissipation sparks
interface SparkParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  size: number;
  color: string;
  life: number;
  maxLife: number;
}

// Elliptical shockwave ring radiating in the soil
interface SoilShockwave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  color: string;
}

export default function ElectricityCanvas({
  rodXPercent = 28,
  rodClampYPercent = 63.5,
  rodBaseYPercent = 88,
  wireDepthPercent = 74,
  isSurging = false,
  onSurgeComplete,
}: ElectricityCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);

  // Active particles & dissipation rings
  const particlesRef = useRef<SparkParticle[]>([]);
  const shockwavesRef = useRef<SoilShockwave[]>([]);

  // 3 steady electrons traveling continuously along the wire
  const pulsesRef = useRef([
    { progress: 0.1, speed: 0.0022, size: 4.5 },
    { progress: 0.45, speed: 0.0026, size: 4 },
    { progress: 0.8, speed: 0.002, size: 5 },
  ]);

  /**
   * Helper: Calculate (x, y) coordinates along the subterranean wire
   * Progress t goes from 0.0 (at rod clamp) to 1.0 (at screen right edge)
   */
  const getWirePoint = useCallback(
    (t: number, width: number, height: number) => {
      const rodX = (rodXPercent / 100) * width;
      const clampY = (rodClampYPercent / 100) * height;
      const wireY = (wireDepthPercent / 100) * height;

      // Curve begins near the rod and connects upward to the clamp
      const curveEndX = rodX + Math.min(width * 0.07, 85);
      const curveRatio = Math.max(0.1, (curveEndX - rodX) / (width - rodX));

      if (t < curveRatio) {
        // Smooth cubic Bezier curve to the electrode clamp
        const u = t / curveRatio;
        const invU = 1 - u;
        const p0x = rodX, p0y = clampY;
        const p1x = rodX + 15, p1y = wireY;
        const p2x = curveEndX - 20, p2y = wireY;
        const p3x = curveEndX, p3y = wireY;

        const x =
          invU * invU * invU * p0x +
          3 * invU * invU * u * p1x +
          3 * invU * u * u * p2x +
          u * u * u * p3x;
        const y =
          invU * invU * invU * p0y +
          3 * invU * invU * u * p1y +
          3 * invU * u * u * p2y +
          u * u * u * p3y;
        return { x, y };
      } else {
        // Straight horizontal cable line across the soil
        const ht = (t - curveRatio) / (1 - curveRatio);
        return {
          x: curveEndX + ht * (width - curveEndX),
          y: wireY,
        };
      }
    },
    [rodXPercent, rodClampYPercent, wireDepthPercent]
  );

  /**
   * Helper: Trigger ground shockwaves and spark particles at the rod base
   */
  const triggerSoilDissipation = useCallback(
    (x: number, y: number, intensity = 1) => {
      // 1. Add expanding elliptical shockwaves into the soil
      shockwavesRef.current.push(
        {
          x,
          y,
          radius: 8,
          maxRadius: 80 * intensity,
          alpha: 0.9,
          color: "#00f0ff",
        },
        {
          x,
          y,
          radius: 4,
          maxRadius: 55 * intensity,
          alpha: 0.75,
          color: "#05ffc2",
        }
      );

      // 2. Add spark particles dissipating into the soil
      const particleCount = Math.floor(14 * intensity);
      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.5 + Math.random() * 2 * intensity;
        particlesRef.current.push({
          x: x + (Math.random() - 0.5) * 12,
          y: y + (Math.random() - 0.5) * 6,
          vx: Math.cos(angle) * speed * 1.3,
          vy: Math.sin(angle) * speed * 0.7,
          alpha: 1,
          size: 1.2 + Math.random() * 1.8,
          color: Math.random() > 0.4 ? "#00f0ff" : "#10b981",
          life: 0,
          maxLife: 25 + Math.random() * 20,
        });
      }
    },
    []
  );

  // Handle high-voltage surge trigger
  useEffect(() => {
    if (isSurging && canvasRef.current) {
      const canvas = canvasRef.current;
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);
      const rodX = (rodXPercent / 100) * width;
      const baseY = (rodBaseYPercent / 100) * height;

      // Burst of ground shockwaves
      triggerSoilDissipation(rodX, baseY, 2.2);

      const timer = setTimeout(() => {
        if (onSurgeComplete) onSurgeComplete();
      }, 900);
      return () => clearTimeout(timer);
    }
  }, [isSurging, rodXPercent, rodBaseYPercent, triggerSoilDissipation, onSurgeComplete]);

  // Main 60 FPS Canvas Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;

    // Handle high-DPI display resizing
    const handleResize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    handleResize();
    const observer = new ResizeObserver(handleResize);
    observer.observe(canvas);

    // Render loop
    const render = () => {
      animFrameRef.current = requestAnimationFrame(render);
      ctx.clearRect(0, 0, width, height);
      if (width === 0 || height === 0) return;

      const rodX = (rodXPercent / 100) * width;
      const clampY = (rodClampYPercent / 100) * height;
      const baseY = (rodBaseYPercent / 100) * height;
      const wireY = (wireDepthPercent / 100) * height;
      const curveEndX = rodX + Math.min(width * 0.07, 85);

      // ----------------------------------------------------
      // 1. DRAW SUBTERRANEAN WIRE PATH (Clean 3-Layer Glow)
      // ----------------------------------------------------
      ctx.save();
      const drawWireLine = () => {
        ctx.beginPath();
        ctx.moveTo(width, wireY);
        ctx.lineTo(curveEndX, wireY);
        ctx.bezierCurveTo(curveEndX - 20, wireY, rodX + 15, wireY, rodX, clampY);
      };

      // Layer 1: Soft cyan ambient aura
      drawWireLine();
      ctx.strokeStyle = "rgba(0, 240, 255, 0.3)";
      ctx.lineWidth = 6;
      ctx.lineCap = "round";
      ctx.stroke();

      // Layer 2: Vibrant teal electric wire
      drawWireLine();
      ctx.strokeStyle = "rgba(5, 255, 194, 0.85)";
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Layer 3: White-hot inner core thread
      drawWireLine();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.95)";
      ctx.lineWidth = 1.2;
      ctx.stroke();
      ctx.restore();

      // ----------------------------------------------------
      // 2. DRAW TRAVELING ELECTRONS (Sober, Clean, No Heavy Shadow)
      // ----------------------------------------------------
      pulsesRef.current.forEach((pulse) => {
        pulse.progress += pulse.speed;
        if (pulse.progress > 1.0) {
          pulse.progress = 0.0;
          // Pulse arrived at rod clamp -> dissipate into ground
          triggerSoilDissipation(rodX, baseY, 0.6);
        }

        // Pulse travels from right (progress = 0) to left (progress = 1)
        const t = 1 - pulse.progress;
        const pt = getWirePoint(t, width, height);

        ctx.save();

        // 1. Trailing comet tail (smooth gradient, clean fade)
        for (let i = 1; i <= 5; i++) {
          const tailT = Math.min(1, t + i * 0.012);
          const tailPt = getWirePoint(tailT, width, height);
          ctx.beginPath();
          ctx.arc(tailPt.x, tailPt.y, Math.max(0.8, pulse.size * (1 - i / 6)), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(5, 255, 194, ${0.5 * (1 - i / 6)})`;
          ctx.fill();
        }

        // 2. Outer crisp halo ring (No dark shadow)
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pulse.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 240, 255, 0.25)";
        ctx.fill();

        // 3. Concentric thin aura ring
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pulse.size * 3.2, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(0, 240, 255, 0.45)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // 4. Solid white-hot electron core
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pulse.size, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();

        ctx.restore();
      });

      // ----------------------------------------------------
      // 3. ELECTRIC SPARK JITTER (Subtle, realistic high voltage)
      // ----------------------------------------------------
      if (Math.random() > 0.4) {
        ctx.save();
        const randT = 0.05 + Math.random() * 0.9;
        const pt1 = getWirePoint(randT, width, height);
        const pt2 = getWirePoint(Math.max(0, randT - 0.04), width, height);
        const midX = (pt1.x + pt2.x) / 2 + (Math.random() - 0.5) * 6;
        const midY = (pt1.y + pt2.y) / 2 + (Math.random() - 0.5) * 4;

        ctx.beginPath();
        ctx.moveTo(pt1.x, pt1.y);
        ctx.lineTo(midX, midY);
        ctx.lineTo(pt2.x, pt2.y);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.85)";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }

      // ----------------------------------------------------
      // 4. DRAW GROUND SHOCKWAVES (Concentric Dissipation Rings)
      // ----------------------------------------------------
      for (let i = shockwavesRef.current.length - 1; i >= 0; i--) {
        const sw = shockwavesRef.current[i];
        sw.radius += 1.2;
        sw.alpha -= 0.018;

        if (sw.alpha <= 0 || sw.radius >= sw.maxRadius) {
          shockwavesRef.current.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        // 3D perspective ground ellipse (wider horizontally)
        ctx.ellipse(sw.x, sw.y, sw.radius * 2.0, sw.radius * 0.6, 0, 0, Math.PI * 2);
        ctx.strokeStyle = sw.color;
        ctx.lineWidth = Math.max(0.8, 1.8 * sw.alpha);
        ctx.globalAlpha = Math.max(0, sw.alpha);
        ctx.stroke();
        ctx.restore();
      }

      // ----------------------------------------------------
      // 5. DRAW DISSIPATING SOIL SPARK PARTICLES
      // ----------------------------------------------------
      for (let p = particlesRef.current.length - 1; p >= 0; p--) {
        const particle = particlesRef.current[p];
        particle.life++;
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.94;
        particle.vy *= 0.94;
        particle.alpha = 1 - particle.life / particle.maxLife;

        if (particle.alpha <= 0 || particle.life >= particle.maxLife) {
          particlesRef.current.splice(p, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = Math.max(0, particle.alpha);
        ctx.fill();
        ctx.restore();
      }
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      observer.disconnect();
    };
  }, [
    getWirePoint,
    triggerSoilDissipation,
    rodXPercent,
    rodClampYPercent,
    rodBaseYPercent,
    wireDepthPercent,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-20"
      style={{ display: "block" }}
    />
  );
}
