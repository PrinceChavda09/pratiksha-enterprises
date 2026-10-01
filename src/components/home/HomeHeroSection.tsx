"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animations";

export default function HomeHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [rodPosition, setRodPosition] = useState({
    left: "28%",
    top: "",
  });

  useEffect(() => {
    const updatePosition = () => {
      if (!sectionRef.current) return;
      const cW = sectionRef.current.clientWidth;
      const cH = sectionRef.current.clientHeight;
      if (!cW || !cH) return;

      const nW = 960;
      const nH = 480;

      if (cW < 640) {
        // Mobile view: background image and GIF are object-contain object-center (constrained by width)
        const scale = cW / nW;
        const rH = nH * scale;
        const offsetY = (cH - rH) * 0.5;
        const targetX = 268 * scale;
        const targetY = offsetY + 252 * scale;

        const leftPct = (targetX / cW) * 100;
        const topPct = (targetY / cH) * 100;

        setRodPosition({
          left: `${leftPct.toFixed(2)}%`,
          top: `${topPct.toFixed(2)}%`,
        });
      } else {
        // Desktop / Tablet view: keep exact original calculation and placement
        const scale = Math.max(cW / nW, cH / nH);
        const rW = nW * scale;
        const offsetX = (cW - rW) * 0.5;

        // In electron-pass.gif natural coords (960x480), wire junction starts at X = 274
        // Center rod is placed slightly to the left (X = 268) so the wire connects to the rod's right sleeve
        const targetX = offsetX + 268 * scale;
        const leftPct = (targetX / cW) * 100;
        setRodPosition({
          left: `${leftPct.toFixed(2)}%`,
          top: "",
        });
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full max-w-full h-[calc(100vh-80px)] min-h-[640px] max-h-[1050px] overflow-hidden overflow-x-hidden"
    >
      {/* 1. PHOTOREALISTIC BACKGROUND IMAGE & GRADIENTS */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full max-w-full">
        {/* Mobile Background Image (< 768px): Dedicated vertical portrait mobile asset */}
        <div className="block md:hidden absolute inset-0 w-full h-full">
          <Image
            src="/home/Hero-Backgrond-mobile.png"
            alt="Transmission towers and industrial factory power grid background with earthing soil cutaway"
            fill
            priority
            sizes="100vw"
            className="object-contain object-center w-full max-w-full"
          />
        </div>

        {/* Desktop & Tablet Background Image (>= 768px): Original widescreen asset */}
        <div className="hidden md:block absolute inset-0 w-full h-full">
          <Image
            src="/home/Hero-Backgrond.png"
            alt="Transmission towers and power grid background with earthing soil cutaway"
            fill
            priority
            sizes="100vw"
            className="hero-bg-responsive w-full h-full object-cover md:object-[58%_bottom] lg:object-[center_bottom] xl:object-center"
          />
        </div>
        {/* Subtle dark vignette on left side to guarantee crisp text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-dark)]/2 via-[var(--bg-dark)]/0 to-transparent z-1 pointer-events-none" />
        {/* Sky atmospheric gradient */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[var(--bg-dark)]/0 to-transparent z-1 pointer-events-none" />
      </div>

      {/* 2. SUBTERRANEAN LAYER: GIF ANIMATION + COPPER ELECTRODE (COMBINED IN ONE DIV) */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden w-full max-w-full">
        {/* Subterranean Electricity Animation: Fits cleanly on mobile view (< 640px) matching background contain */}
        <div className="hidden sm:block absolute inset-0 w-full max-w-full h-full translate-y-0 sm:translate-y-[-40px] lg:translate-y-[-30px] xl:translate-y-4 2xl:translate-y-10 transition-transform duration-200 overflow-hidden">
          <Image
            src="/electron-pass.gif"
            alt="Underground Subterranean Electricity Earthing Animation"
            fill
            unoptimized
            priority
            sizes="(max-width: 640px) 100vw, 100vw"
            className="w-full h-full max-w-full object-contain object-center sm:object-cover sm:object-[center_85%] pointer-events-none"
          />
        </div>

        {/* Copper Earthing Electrode */}
        <div
          className="hidden sm:block absolute pointer-events-auto group top-[51%] sm:top-[53%] lg:top-[53%] xl:top-[57%] -translate-x-1/2 transition-[left] duration-150"
          style={{
            left: rodPosition.left,
            ...(rodPosition.top ? { top: rodPosition.top } : {}),
          }}
        >
          {/* Rod Assembly Container */}
          <div className="relative flex flex-col items-center origin-top scale-100 sm:scale-110 md:scale-115 lg:scale-115 xl:scale-120 transition-transform duration-300">
            {/* Real Copper Earthing Electrode Product Image */}
            <div className="relative w-15 sm:w-30 md:w-25 lg:w-35 xl:w-40 2xl:w-44 h-[100px] sm:h-[290px] md:h-[300px] lg:h-[360px] xl:h-[200px] 2xl:h-[400px]">
              <Image
                src="/home/herosection-road.png"
                alt="Copper Earthing Electrode"
                fill
                priority
                sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, 180px"
                className="object-contain object-top drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 4. MAIN HERO CONTENT (CENTERED ON MOBILE, LEFT-ALIGNED ON TABLET/DESKTOP) */}
      <div className="relative z-30 h-auto container w-full max-w-full overflow-hidden px-4 sm:px-6 lg:px-8 flex flex-col items-center sm:items-start justify-start pt-8 sm:pt-10 md:pt-12 lg:pt-12 xl:pt-14 2xl:pt-30 pointer-events-none">
        <div className="max-w-[340px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[440px] xl:max-w-2xl 2xl:max-w-3xl pointer-events-auto text-center sm:text-left flex flex-col items-center sm:items-start">
          {/* Main Hero Headline */}
          <Reveal direction="up" delay={0.1} duration={0.7}>
            <h1 className="text-3xl sm:text-[34px] md:text-[38px] lg:text-[46px] xl:text-[72px] 2xl:text-[80px] font-extrabold tracking-tight leading-[1.08] text-black/80">
              Make Your Premises{" "}
              <span className="text-[var(--primary-color)]">Secure</span>
            </h1>
          </Reveal>

          {/* Subtitle */}
          <Reveal direction="up" delay={0.25} duration={0.7}>
            <p className="mt-3 sm:mt-3.5 md:mt-3.5 text-xs sm:text-sm md:text-sm lg:text-base xl:text-xl text-black/40 font-normal leading-relaxed max-w-[300px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[380px] xl:max-w-lg">
              Safeguard your industrial infrastructure, transmission grids, and
              commercial assets.
            </p>
          </Reveal>

          {/* Action CTA Button */}
          <Reveal direction="up" delay={0.4} duration={0.7}>
            <div className="mt-4 sm:mt-5 md:mt-5 flex items-center justify-center sm:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-3 text-xs sm:text-sm md:text-sm lg:text-base font-semibold text-white bg-[var(--primary-color)] rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-teal-900/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] focus-visible:ring-offset-2 hover:shadow-xl"
              >
                Get a Quote
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
