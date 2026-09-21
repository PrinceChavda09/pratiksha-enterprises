"use client";

import React, { useEffect, useRef, useCallback } from "react";

interface ElectricityCanvasProps {
  rodXPercent?: number; // e.g. 28% from left
  rodClampYPercent?: number; // e.g. 64% from top
  rodBaseYPercent?: number; // e.g. 88% from top
  wireDepthPercent?: number; // e.g. 74% from top
  isSurging?: boolean;
  onSurgeChange?: (isSurging: boolean) => void;
  onSurgeComplete?: () => void;
}

interface Particle {
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

interface Shockwave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  color: string;
}

interface LightningSegment {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  alpha: number;
  width: number;
}

export default function ElectricityCanvas({
  rodXPercent = 28,
  rodClampYPercent = 63.5,
  rodBaseYPercent = 88,
  wireDepthPercent = 74,
  isSurging = false,
  onSurgeChange,
  onSurgeComplete,
}: ElectricityCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);

  // Particles & Shockwaves refs
  const particlesRef = useRef<Particle[]>([]);
  const shockwavesRef = useRef<Shockwave[]>([]);
  const lightningBranchesRef = useRef<LightningSegment[]>([]);

  // Pulse progression along the cable (Smooth continuous traveling electrons)
  const pulsesRef = useRef<{ progress: number; speed: number; size: number; intensity: number }[]>([
    { progress: 0.1, speed: 0.0024, size: 6, intensity: 1 },
    { progress: 0.45, speed: 0.0027, size: 5, intensity: 0.9 },
    { progress: 0.78, speed: 0.0022, size: 6.5, intensity: 1.1 },
  ]);

  // Helper to get wire coordinate given progress t from 1.0 (right edge) to 0.0 (clamp)
  const getWirePoint = useCallback(
    (t: number, width: number, height: number) => {
      const rodX = (rodXPercent / 100) * width;
      const clampY = (rodClampYPercent / 100) * height;
      const wireY = (wireDepthPercent / 100) * height;

      // The cable consists of:
      // 1. Horizontal line from right edge (width) to (rodX + 70) at depth wireY
      // 2. Smooth bezier curve from (rodX + 70, wireY) to (rodX, clampY)
      const curveEndX = rodX + Math.min(width * 0.07, 90);
      const totalWireLen = width - rodX;
      const curveLen = curveEndX - rodX;
      const curveRatio = Math.max(0.1, curveLen / totalWireLen);

      if (t < curveRatio) {
        // Curve section connecting to the clamp
        const ct = t / curveRatio; // 0 (at rod clamp) to 1 (at curveEndX)
        const p0x = rodX;
        const p0y = clampY;
        const p1x = rodX + 15;
        const p1y = wireY;
        const p2x = curveEndX - 20;
        const p2y = wireY;
        const p3x = curveEndX;
        const p3y = wireY;

        const u = ct;
        const tt = u * u;
        const uu = (1 - u) * (1 - u);
        const uuu = uu * (1 - u);
        const ttt = tt * u;

        const x = uuu * p0x + 3 * uu * u * p1x + 3 * (1 - u) * tt * p2x + ttt * p3x;
        const y = uuu * p0y + 3 * uu * u * p1y + 3 * (1 - u) * tt * p2y + ttt * p3y;
        return { x, y };
      } else {
        // Straight horizontal section through the subterranean soil
        const ht = (t - curveRatio) / (1 - curveRatio);
        const x = curveEndX + ht * (width - curveEndX);
        const y = wireY;
        return { x, y };
      }
    },
    [rodXPercent, rodClampYPercent, wireDepthPercent]
  );

  // Trigger ground dissipation shockwave at rod base
  const triggerGroundDissipation = useCallback(
    (x: number, y: number, intensity: number = 1) => {
      // Add shockwave rings into soil
      shockwavesRef.current.push(
        {
          x,
          y,
          radius: 10,
          maxRadius: 75 * intensity,
          alpha: 0.95,
          color: "#00f0ff",
        },
        {
          x,
          y,
          radius: 4,
          maxRadius: 55 * intensity,
          alpha: 0.85,
          color: "#05ffc2",
        }
      );

      // Create spark particles dissipating into the soil
      const particleCount = Math.floor(20 * intensity);
      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.8 + Math.random() * 2.8 * intensity;
        particlesRef.current.push({
          x: x + (Math.random() - 0.5) * 15,
          y: y + (Math.random() - 0.5) * 8,
          vx: Math.cos(angle) * speed * 1.5,
          vy: Math.sin(angle) * speed * 0.7,
          alpha: 1,
          size: 1.5 + Math.random() * 2.5,
          color: Math.random() > 0.4 ? "#00f0ff" : "#10b981",
          life: 0,
          maxLife: 30 + Math.random() * 25,
        });
      }

      // Add ground lightning branches (crackle in soil)
      if (intensity > 1.2) {
        for (let b = 0; b < 6; b++) {
          const startAngle = Math.PI * 0.2 + Math.random() * Math.PI * 0.6;
          let lx = x;
          let ly = y;
          const branchLen = 3 + Math.floor(Math.random() * 4);
          for (let s = 0; s < branchLen; s++) {
            const nextX = lx + (Math.cos(startAngle) + (Math.random() - 0.5) * 0.8) * 12;
            const nextY = ly + (Math.sin(startAngle) + (Math.random() - 0.5) * 0.8) * 8;
            lightningBranchesRef.current.push({
              x1: lx,
              y1: ly,
              x2: nextX,
              y2: nextY,
              alpha: 1,
              width: 1.5 * intensity,
            });
            lx = nextX;
            ly = nextY;
          }
        }
      }
    },
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;

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
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(canvas);

    let lastTime = performance.now();

    // Main animation render loop
    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      if (width === 0 || height === 0) {
        animFrameRef.current = requestAnimationFrame(render);
        return;
      }

      const rodX = (rodXPercent / 100) * width;
      const clampY = (rodClampYPercent / 100) * height;
      const baseY = (rodBaseYPercent / 100) * height;
      const wireY = (wireDepthPercent / 100) * height;
      const curveEndX = rodX + Math.min(width * 0.07, 90);

      // 1. SUBTERRANEAN AMBIENT GLOW ALONG WIRE
      ctx.save();
      const ambientGrad = ctx.createLinearGradient(0, wireY - 22, 0, wireY + 22);
      ambientGrad.addColorStop(0, "rgba(0, 240, 255, 0)");
      ambientGrad.addColorStop(0.5, "rgba(0, 240, 255, 0.14)");
      ambientGrad.addColorStop(1, "rgba(0, 240, 255, 0)");
      ctx.fillStyle = ambientGrad;
      ctx.fillRect(curveEndX, wireY - 22, width - curveEndX, 44);

      // 2. DRAW MAIN CABLE PATH
      // Layer 1: Outermost diffused cyan glow
      ctx.beginPath();
      ctx.moveTo(width, wireY);
      ctx.lineTo(curveEndX, wireY);
      ctx.bezierCurveTo(curveEndX - 20, wireY, rodX + 15, wireY, rodX, clampY);
      ctx.strokeStyle = "rgba(0, 240, 255, 0.28)";
      ctx.lineWidth = 10;
      ctx.lineCap = "round";
      ctx.shadowColor = "#00f0ff";
      ctx.shadowBlur = 20;
      ctx.stroke();

      // Layer 2: Medium vibrant cyan/teal line
      ctx.beginPath();
      ctx.moveTo(width, wireY);
      ctx.lineTo(curveEndX, wireY);
      ctx.bezierCurveTo(curveEndX - 20, wireY, rodX + 15, wireY, rodX, clampY);
      ctx.strokeStyle = "rgba(5, 255, 194, 0.8)";
      ctx.lineWidth = 4;
      ctx.shadowColor = "#05ffc2";
      ctx.shadowBlur = 10;
      ctx.stroke();

      // Layer 3: Sharp white-hot electric core
      ctx.beginPath();
      ctx.moveTo(width, wireY);
      ctx.lineTo(curveEndX, wireY);
      ctx.bezierCurveTo(curveEndX - 20, wireY, rodX + 15, wireY, rodX, clampY);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.95)";
      ctx.lineWidth = 1.8;
      ctx.shadowColor = "#ffffff";
      ctx.shadowBlur = 4;
      ctx.stroke();
      ctx.restore();

      // 3. DRAW CONTINUOUS TRAVELING ELECTRONS / PULSES
      pulsesRef.current.forEach((pulse) => {
        pulse.progress += pulse.speed;
        if (pulse.progress > 1.0) {
          pulse.progress = 0.0;
          // Pulse arrived at the rod! Trigger subtle dissipation at base
          triggerGroundDissipation(rodX, baseY, 0.6);
        }

        // Pulse travels from right (progress = 0) to left (progress = 1)
        const t = 1 - pulse.progress;
        const pt = getWirePoint(t, width, height);

        // Draw glowing electron head
        ctx.save();
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pulse.size, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = "#00f0ff";
        ctx.shadowBlur = 16;
        ctx.fill();

        // Outer pulse corona
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pulse.size * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 240, 255, 0.38)";
        ctx.fill();

        // Trailing plasma comet tail
        for (let i = 1; i <= 6; i++) {
          const tailT = Math.min(1, t + i * 0.012);
          const tailPt = getWirePoint(tailT, width, height);
          ctx.beginPath();
          ctx.arc(tailPt.x, tailPt.y, Math.max(1, pulse.size * (1 - i / 7)), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(5, 255, 194, ${0.7 * (1 - i / 7)})`;
          ctx.shadowBlur = 8;
          ctx.fill();
        }
        ctx.restore();
      });

      // 4. DRAW CRACKLING MICRO-LIGHTNING JITTER ALONG WIRE
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
        ctx.strokeStyle = "rgba(255, 255, 255, 0.75)";
        ctx.lineWidth = 1.2;
        ctx.shadowColor = "#00f0ff";
        ctx.shadowBlur = 6;
        ctx.stroke();
        ctx.restore();
      }
      if (Math.random() > 0.35) {
        ctx.save();
        const randT = 0.05 + Math.random() * 0.9;
        const pt1 = getWirePoint(randT, width, height);
        const pt2 = getWirePoint(Math.max(0, randT - 0.04), width, height);

        const midX = (pt1.x + pt2.x) / 2 + (Math.random() - 0.5) * 8;
        const midY = (pt1.y + pt2.y) / 2 + (Math.random() - 0.5) * 6;

        ctx.beginPath();
        ctx.moveTo(pt1.x, pt1.y);
        ctx.lineTo(midX, midY);
        ctx.lineTo(pt2.x, pt2.y);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.85)";
        ctx.lineWidth = 1.2;
        ctx.shadowColor = "#00f0ff";
        ctx.shadowBlur = 8;
        ctx.stroke();
        ctx.restore();
      }

      // 7. DRAW GROUND DISSIPATION SHOCKWAVES
      for (let i = shockwavesRef.current.length - 1; i >= 0; i--) {
        const sw = shockwavesRef.current[i];
        sw.radius += 1.3;
        sw.alpha -= 0.016;

        if (sw.alpha <= 0 || sw.radius >= sw.maxRadius) {
          shockwavesRef.current.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        // Elliptical shockwave to match 3D ground perspective
        ctx.ellipse(sw.x, sw.y, sw.radius * 1.8, sw.radius * 0.55, 0, 0, Math.PI * 2);
        ctx.strokeStyle = sw.color;
        ctx.lineWidth = Math.max(1, 2.5 * sw.alpha);
        ctx.globalAlpha = Math.max(0, sw.alpha);
        ctx.shadowColor = sw.color;
        ctx.shadowBlur = 14;
        ctx.stroke();
        ctx.restore();
      }

      // 8. DRAW GROUND DISCHARGE LIGHTNING BRANCHES
      for (let b = lightningBranchesRef.current.length - 1; b >= 0; b--) {
        const branch = lightningBranchesRef.current[b];
        branch.alpha -= 0.04;
        if (branch.alpha <= 0) {
          lightningBranchesRef.current.splice(b, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(branch.x1, branch.y1);
        ctx.lineTo(branch.x2, branch.y2);
        ctx.strokeStyle = `rgba(0, 240, 255, ${branch.alpha})`;
        ctx.lineWidth = branch.width;
        ctx.shadowColor = "#00f0ff";
        ctx.shadowBlur = 8;
        ctx.stroke();
        ctx.restore();
      }

      // 9. UPDATE & DRAW DISSIPATING PARTICLES
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
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.restore();
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      resizeObserver.disconnect();
    };
  }, [
    getWirePoint,
    triggerGroundDissipation,
    rodXPercent,
    rodClampYPercent,
    rodBaseYPercent,
    wireDepthPercent,
    onSurgeChange,
    onSurgeComplete,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-20"
      style={{ display: "block" }}
    />
  );
}
