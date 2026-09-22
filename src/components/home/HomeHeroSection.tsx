"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomeHeroSection() {
  // Electrode positioning calibration (Rod is located horizontally at ~28%)
  const rodXPercent = 28;

  return (
    <section className="relative w-full h-[calc(100vh-80px)] min-h-[640px] max-h-[1050px] overflow-hidden select-none">
      {/* 1. PHOTOREALISTIC BACKGROUND IMAGE & GRADIENTS */}
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

      {/* 2. SUBTERRANEAN ELECTRICITY ANIMATION */}
      <img
        src="/electron-pass.gif"
        alt="Underground Subterranean Electricity Earthing Animation"
        className="absolute inset-0 w-full h-full pointer-events-none z-20 object-cover object-center select-none"
        loading="eager"
      />

      {/* 3. SUBTERRANEAN COPPER EARTHING ELECTRODE */}
      <div
        className="absolute z-25 pointer-events-auto group"
        style={{
          left: `${rodXPercent}%`,
          top: `56.5%`,
          transform: "translateX(-50%)",
        }}
      >
        {/* Rod Assembly Container */}
        <div className="relative flex flex-col items-center">
          {/* Real Copper Earthing Electrode Product Image */}
          <div className="relative w-28 sm:w-32 md:w-36 lg:w-40 h-[280px] sm:h-[320px] md:h-[360px] lg:h-[390px] select-none">
            <Image
              src="/home/Copper-Earthing-Electrode-without-bg.png"
              alt="Copper Earthing Electrode"
              fill
              priority
              sizes="(max-width: 768px) 120px, 160px"
              className="object-contain object-top drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
            />
          </div>

          {/* Interactive Tooltip on Hover */}
          <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap bg-black/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-cyan-400/60 text-[11px] text-cyan-300 font-medium shadow-[0_0_15px_rgba(0,240,255,0.4)] z-30">
            ⚡ Copper Earthing Electrode (Active Grounding)
          </div>
        </div>
      </div>

      {/* 4. PRODUCT LINEUP ON RIGHT */}
      <div className="absolute bottom-[26.5%] sm:bottom-[27%] md:bottom-[27.5%] lg:bottom-[28%] xl:bottom-[31%] right-0 sm:right-4 md:right-8 lg:right-14 z-20 pointer-events-auto">
        <div className="relative group">
          {/* Ground Contact Shadow */}
          <div className="absolute -bottom-2 inset-x-4 h-6 bg-black/90 blur-md rounded-full transform scale-y-50" />

          {/* Product Lineup Image */}
          <div className="relative w-[300px] sm:w-[420px] md:w-[520px] lg:w-[650px] xl:w-[900px] h-[220px] sm:h-[290px] md:h-[360px] lg:h-[430px] xl:h-[470px] transition-transform duration-500 ease-out">
            <Image
              src="/home/pratiksha-enterprises-product.png"
              alt="Pratiksha Enterprise SRIP Compound Bags, Copper Bonded Rods, Chemical Earthing Electrodes"
              fill
              priority
              sizes="(max-width: 768px) 300px, (max-width: 1200px) 520px, 720px"
              className="object-contain object-bottom drop-shadow-[0_12px_28px_rgba(0,0,0,0.65)]"
            />
          </div>
        </div>
      </div>

      {/* 5. MAIN HERO CONTENT */}
      <div className="relative z-30 h-[60%] sm:h-[62%] lg:h-[63%] xl:h-[63.5%] container sm:px-6 lg:px-8 flex flex-col justify-end pointer-events-none">
        <div className="lg:max-w-2xl xl:max-w-3xl pointer-events-auto">
          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[80px] font-extrabold tracking-tight leading-[1.06] text-white">
            Make Your Premises{" "}
            <span className="text-[var(--primary-color)]">Secure</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-gray-200/95 font-normal leading-relaxed max-w-md lg:max-w-lg drop-shadow-md">
            Safeguard your industrial infrastructure, transmission grids, and
            commercial assets.
          </p>

          {/* Action CTA Button */}
          <div className="mt-6 sm:mt-8 flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 text-sm sm:text-base font-semibold text-white bg-[var(--primary-color)] rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
