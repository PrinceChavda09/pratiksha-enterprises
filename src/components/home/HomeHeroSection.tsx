"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ElectricityCanvas from "./ElectricityCanvas";

export default function HomeHeroSection() {
  const [isSurging, setIsSurging] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  // Trigger high-voltage lightning surge
  const handleTriggerSurge = () => {
    if (!isSurging) {
      setIsSurging(true);
    }
  };

  const handleSurgeComplete = () => {
    setIsSurging(false);
  };

  // Electrode positioning calibration
  // Rod is located horizontally at ~28% on desktop, ~22% on tablet
  const rodXPercent = 28;
  const rodClampYPercent = 63.5;
  const rodBaseYPercent = 88;
  const wireDepthPercent = 74;

  return (
    <section className="relative w-full h-[calc(100vh-80px)] min-h-[640px] max-h-[1050px] overflow-hidden select-none">
      {/* 1. PHOTOREALISTIC BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/homeHeroSection-Background.png"
          alt="Transmission towers and power grid background with earthing soil cutaway"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center w-full h-full"
        />
        {/* Subtle dark vignette on left side to guarantee crisp text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-1 pointer-events-none" />
        {/* Sky atmospheric gradient */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black/50 to-transparent z-1 pointer-events-none" />
      </div>

      {/* 2. SUBTERRANEAN ELECTRICITY CANVAS (Animated wire, plasma jitter, comets, shockwaves) */}
      <ElectricityCanvas
        rodXPercent={rodXPercent}
        rodClampYPercent={rodClampYPercent}
        rodBaseYPercent={rodBaseYPercent}
        wireDepthPercent={wireDepthPercent}
        isSurging={isSurging}
        onSurgeChange={setIsSurging}
        onSurgeComplete={handleSurgeComplete}
      />

      {/* 3. SUBTERRANEAN COPPER EARTHING ELECTRODE & GROUND SYMBOL */}
      <div
        className="absolute z-25 pointer-events-auto cursor-pointer group"
        style={{
          left: `${rodXPercent}%`,
          top: `56.5%`,
          transform: "translateX(-50%)",
        }}
        onClick={handleTriggerSurge}
        title="Click to discharge fault surge into earth"
      >
        {/* Rod Assembly Container */}
        <div className="relative flex flex-col items-center">
          {/* Real Copper Earthing Electrode Product Image (Enlarged Size) */}
          <div className="relative w-28 sm:w-32 md:w-36 lg:w-40 h-[280px] sm:h-[320px] md:h-[360px] lg:h-[390px] select-none">
            <Image
              src="/home/Copper-Earthing-Electrode-without-bg.png"
              alt="Copper Earthing Electrode"
              fill
              priority
              sizes="(max-width: 768px) 120px, 160px"
              className={`object-contain object-top transition-all duration-300 ${
                isSurging
                  ? "brightness-125 contrast-105 drop-shadow-[0_0_25px_#00f0ff]"
                  : "drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
              }`}
            />
          </div>

          {/* Glowing Ground Symbol (⏚) at the Base */}
          <div className="-mt-1 flex flex-col items-center space-y-[3px] pointer-events-none">
            {/* Vertical stem */}
            <div className="w-2 h-4 bg-[#00f0ff] shadow-[0_0_8px_#00f0ff] rounded-t-sm" />
            {/* Bar 1 (Widest) */}
            <div className="w-12 h-1 bg-[#00f0ff] shadow-[0_0_10px_#00f0ff] rounded-full" />
            {/* Bar 2 (Medium) */}
            <div className="w-6 h-1 bg-[#05ffc2] shadow-[0_0_8px_#05ffc2] rounded-full" />
            {/* Bar 3 (Narrowest) */}
            <div className="w-3 h-1 bg-[#00f0ff] shadow-[0_0_6px_#00f0ff] rounded-full" />
          </div>

          {/* Concentric Dissipation Ripple Rings into the Earth */}
          <div className="absolute -bottom-1 flex items-center justify-center pointer-events-none">
            {/* Inner Ring */}
            <div className="absolute w-24 h-8 border border-cyan-400/80 rounded-[50%] animate-ground-ripple-1 shadow-[0_0_12px_rgba(0,240,255,0.7)]" />
            {/* Middle Ring */}
            <div className="absolute w-40 h-12 border border-teal-300/60 rounded-[50%] animate-ground-ripple-2 shadow-[0_0_18px_rgba(5,255,194,0.5)]" />
            {/* Outer Ring */}
            <div className="absolute w-60 h-18 border border-cyan-200/40 rounded-[50%] animate-ground-ripple-3 shadow-[0_0_22px_rgba(0,240,255,0.3)]" />
          </div>

          {/* Interactive Tooltip on Hover */}
          <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap bg-black/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-cyan-400/60 text-[11px] text-cyan-300 font-medium shadow-[0_0_15px_rgba(0,240,255,0.4)] z-30">
            ⚡ Copper Earthing Electrode (Active Grounding)
          </div>
        </div>
      </div>

      {/* 4. PRODUCT LINEUP ON RIGHT (Resting precisely on the ground surface line) */}
      <div className="absolute bottom-[36%] sm:bottom-[36.5%] md:bottom-[37%] lg:bottom-[37.5%] right-0 sm:right-4 md:right-8 lg:right-14 z-20 pointer-events-auto">
        <div className="relative group">
          {/* Ground Contact Shadow */}
          <div className="absolute -bottom-2 inset-x-4 h-6 bg-black/80 blur-md rounded-full transform scale-y-50" />

          {/* Product Image */}
          <div className="relative w-[300px] sm:w-[420px] md:w-[520px] lg:w-[650px] xl:w-[720px] h-[220px] sm:h-[290px] md:h-[360px] lg:h-[430px] xl:h-[470px] transition-transform duration-500 ease-out group-hover:scale-[1.015]">
            <Image
              src="/home/pratiksha-enterprises-product.png"
              alt="Pratiksha Enterprise SRIP Compound Bags, Copper Bonded Rods, Chemical Earthing Electrodes"
              fill
              priority
              sizes="(max-width: 768px) 300px, (max-width: 1200px) 520px, 720px"
              className="object-contain object-bottom drop-shadow-[0_12px_28px_rgba(0,0,0,0.65)]"
            />
          </div>

          {/* Interactive Floating Product Badges */}
          <div
            className="hidden xl:flex items-center space-x-2 absolute top-10 left-4 bg-[#0a1824]/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-teal-500/40 shadow-xl cursor-pointer hover:border-cyan-400 transition-all"
            onMouseEnter={() => setActiveTooltip("compound")}
            onMouseLeave={() => setActiveTooltip(null)}
          >
            <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
            <span className="text-[11px] font-semibold text-white tracking-wide">
              SRIP Compound Bag
            </span>
          </div>

          <div
            className="hidden xl:flex items-center space-x-2 absolute top-14 right-6 bg-[#0a1824]/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-teal-500/40 shadow-xl cursor-pointer hover:border-cyan-400 transition-all"
            onMouseEnter={() => setActiveTooltip("rod")}
            onMouseLeave={() => setActiveTooltip(null)}
          >
            <span className="w-2 h-2 rounded-full bg-[#ffd572] animate-pulse" />
            <span className="text-[11px] font-semibold text-white tracking-wide">
              Copper Bonded Rods
            </span>
          </div>

          {activeTooltip === "compound" && (
            <div className="absolute top-20 left-4 z-30 w-56 bg-[#0a1824]/95 backdrop-blur-lg p-3 rounded-xl border border-cyan-400/60 shadow-2xl text-xs text-gray-200 animate-fadeIn">
              <p className="font-bold text-cyan-300">SRIP Carbon Compound</p>
              <p className="mt-1 text-[11px] text-gray-300">
                Enhances earth conductivity, retains moisture & provides zero-corrosion protection.
              </p>
            </div>
          )}

          {activeTooltip === "rod" && (
            <div className="absolute top-24 right-6 z-30 w-56 bg-[#0a1824]/95 backdrop-blur-lg p-3 rounded-xl border border-[#ffd572]/60 shadow-2xl text-xs text-gray-200 animate-fadeIn">
              <p className="font-bold text-[#ffd572]">99.9% Pure Electrolytic Copper</p>
              <p className="mt-1 text-[11px] text-gray-300">
                Molecularly bonded for 30+ years lifespan with ultra-low earth resistance.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 5. MAIN HERO CONTENT (VERTICALLY CENTERED IN SKY ZONE ABOVE SOIL) */}
      <div className="relative z-30 h-[58%] sm:h-[60%] lg:h-[62%] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pointer-events-none">
        <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl pointer-events-auto">
          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[80px] font-extrabold tracking-tight leading-[1.06] text-white">
            Make Your Premises <span className="text-[#00f0ff] glow-cyan-text">Secure</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-gray-200/95 font-normal leading-relaxed max-w-md lg:max-w-lg drop-shadow-md">
            Safeguard your industrial infrastructure, transmission grids, and commercial assets.
          </p>

          {/* Action CTA */}
          <div className="mt-6 sm:mt-8 flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#08758a] to-[#0d9488] hover:from-[#065e6f] hover:to-[#0f766e] rounded-xl transition-all shadow-[0_0_20px_rgba(8,117,138,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] hover:scale-[1.02] active:scale-[0.98]"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

