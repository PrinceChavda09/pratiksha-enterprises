"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomeHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [rodPosition, setRodPosition] = useState({ left: "28%" });

  useEffect(() => {
    const updatePosition = () => {
      if (!sectionRef.current) return;
      const cW = sectionRef.current.clientWidth;
      const cH = sectionRef.current.clientHeight;
      if (!cW || !cH) return;

      const nW = 960;
      const nH = 480;
      const scale = Math.max(cW / nW, cH / nH);
      const rW = nW * scale;
      const offsetX = (cW - rW) * 0.5;

      // In electron-pass.gif natural coords (960x480), wire junction starts at X = 274
      // Center rod is placed slightly to the left (X = 268) so the wire connects to the rod's right sleeve
      const targetX = offsetX + 268 * scale;
      const leftPct = (targetX / cW) * 100;
      setRodPosition({ left: `${leftPct.toFixed(2)}%` });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[calc(100vh-80px)] min-h-[640px] max-h-[1050px] overflow-hidden select-none"
    >
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/30 to-transparent z-1 pointer-events-none" />
        {/* Sky atmospheric gradient */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black/10 to-transparent z-1 pointer-events-none" />
      </div>

      {/* 2. SUBTERRANEAN LAYER: GIF ANIMATION + COPPER ELECTRODE (COMBINED IN ONE DIV) */}
      <div className="absolute inset-0 z-20 pointer-events-none select-none">
        {/* Subterranean Electricity Animation: Hidden on mobile view (< 640px) */}
        <div className="hidden sm:block absolute inset-0 w-full h-full translate-y-1 sm:translate-y-2 lg:translate-y-2.5 xl:translate-y-4 2xl:translate-y-10 transition-transform duration-300">
          <Image
            src="/electron-pass.gif"
            alt="Underground Subterranean Electricity Earthing Animation"
            fill
            unoptimized
            priority
            sizes="100vw"
            className="w-full h-full object-cover object-[center_85%] pointer-events-none"
          />
        </div>

        {/* Copper Earthing Electrode */}
        <div
          className="hidden sm:block absolute pointer-events-auto group top-[52%] sm:top-[53%] lg:top-[53%] xl:top-[57%] -translate-x-1/2 transition-[left] duration-150"
          style={{ left: rodPosition.left }}
        >
          {/* Rod Assembly Container */}
          <div className="relative flex flex-col items-center origin-top scale-105 sm:scale-110 md:scale-115 lg:scale-115 xl:scale-120 transition-transform duration-300">
            {/* Real Copper Earthing Electrode Product Image */}
            <div className="relative w-32 sm:w-36 md:w-36 lg:w-38 xl:w-40 2xl:w-44 h-[300px] sm:h-[320px] md:h-[300px] lg:h-[360px] xl:h-[200px] 2xl:h-[400px] select-none">
              <Image
                src="/home/herosection-road.png"
                alt="Copper Earthing Electrode"
                fill
                priority
                sizes="(max-width: 768px) 140px, 180px"
                className="object-contain object-top drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. PRODUCT LINEUP (CENTERED ON MOBILE, RIGHT-ALIGNED ON TABLET/DESKTOP) */}
      <div className="absolute bottom-[15%] sm:bottom-[26%] md:bottom-[30%] lg:bottom-[34%] xl:bottom-[28%] 2xl:bottom-[35%] left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-2 md:right-2 lg:right-3 xl:right-10 2xl:right-14 z-20 pointer-events-auto">
        <div className="relative group">
          {/* Ground Contact Shadow */}
          <div className="absolute -bottom-2 inset-x-4 h-6 bg-black/90 blur-md rounded-full transform scale-y-50" />

          {/* Product Lineup Image */}
          <div className="relative w-[380px] sm:w-[380px] md:w-[430px] lg:w-[540px] xl:w-[720px] 2xl:w-[860px] h-[245px] sm:h-[270px] md:h-[300px] lg:h-[385px] xl:h-[430px] 2xl:h-[470px] transition-transform duration-500 ease-out">
            <Image
              src="/home/pratiksha-enterprises-product.png"
              alt="Pratiksha Enterprise SRIP Compound Bags, Copper Bonded Rods, Chemical Earthing Electrodes"
              fill
              priority
              sizes="(max-width: 640px) 340px, (max-width: 768px) 430px, (max-width: 1200px) 540px, 860px"
              className="object-contain object-bottom drop-shadow-[0_12px_28px_rgba(0,0,0,0.65)]"
            />
          </div>
        </div>
      </div>

      {/* 4. MAIN HERO CONTENT (CENTERED ON MOBILE, LEFT-ALIGNED ON TABLET/DESKTOP) */}
      <div className="relative z-30 h-auto container px-4 sm:px-6 lg:px-8 flex flex-col items-center sm:items-start justify-start pt-8 sm:pt-10 md:pt-12 lg:pt-12 xl:pt-14 2xl:pt-30 pointer-events-none">
        <div className="max-w-[340px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[440px] xl:max-w-2xl 2xl:max-w-3xl pointer-events-auto text-center sm:text-left flex flex-col items-center sm:items-start">
          {/* Main Hero Headline */}
          <h1 className="text-3xl sm:text-[34px] md:text-[38px] lg:text-[46px] xl:text-[72px] 2xl:text-[80px] font-extrabold tracking-tight leading-[1.08] text-white">
            Make Your Premises{" "}
            <span className="text-[var(--primary-color)]">Secure</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-3 sm:mt-3.5 md:mt-3.5 text-xs sm:text-sm md:text-sm lg:text-base xl:text-xl text-gray-200/95 font-normal leading-relaxed max-w-[300px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[380px] xl:max-w-lg drop-shadow-md">
            Safeguard your industrial infrastructure, transmission grids, and
            commercial assets.
          </p>

          {/* Action CTA Button */}
          <div className="mt-4 sm:mt-5 md:mt-5 flex items-center justify-center sm:justify-start">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-3 text-xs sm:text-sm md:text-sm lg:text-base font-semibold text-white bg-[var(--primary-color)] rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-teal-900/30"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
