"use client";

import { useState } from "react";
import Image from "next/image";

interface Reason {
  number: string;
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    number: "01",
    title: "Quality-Focused Products",
    description:
      "Manufactured using high-grade electrolytic copper and certified hot-dip galvanized steel.",
  },
  {
    number: "02",
    title: "Reliable Earthing Solutions",
    description:
      "Engineered for dependable fault dissipation, electrical safety and long-term performance.",
  },
  {
    number: "03",
    title: "Professional Assistance",
    description:
      "Dedicated technical support for earthing design, conductor sizing and project requirements.",
  },
  {
    number: "04",
    title: "Customer-Centric Approach",
    description:
      "Responsive support, custom fabrication and practical solutions tailored to each project.",
  },
  {
    number: "05",
    title: "Long-Term Reliability",
    description:
      "Maintenance-free solutions designed to provide dependable protection and extended service life.",
  },
];

export default function WhyChoosePratiksha() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="why-choose"
      className="w-full bg-[#EAF7FB] py-20 md:py-24 lg:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="text-base font-bold text-[var(--primary-color)] tracking-widest uppercase block mb-3">
            WHY CHOOSE PRATIKSHA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a] leading-[1.15] mb-4">
            Engineering You Can Trust. Protection That Lasts.
          </h2>
          <p className="text-base sm:text-lg text-[var(--gray-color)] leading-relaxed">
            Precision manufacturing, dependable earthing technology and
            dedicated engineering support come together to deliver reliable
            protection for demanding electrical environments.
          </p>
        </div>

        {/* Main Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT / MAIN VISUAL AREA */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200/60 bg-white aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] w-full group">
              <Image
                src="/home/Why_choose_Pratiksha.png"
                alt="Pratiksha Earthing Solutions high-voltage substation installation in Rajkot"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />

              {/* Floating label badge */}
              <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-lg border border-slate-200/80 shadow-sm flex items-center gap-2.5 z-10">
                <span className="w-2 h-2 rounded-full bg-[var(--primary-color)] animate-pulse" />
                <span className="text-[11px] font-bold text-[#0f172a] tracking-wider uppercase">
                  ENGINEERED FOR REAL-WORLD CONDITIONS
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT / INTERACTIVE REASONS LIST */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="divide-y divide-slate-200/70 border-y border-slate-200/70">
              {reasons.map((reason, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={reason.number}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    tabIndex={0}
                    className={`py-5 transition-all duration-200 cursor-pointer outline-none ${
                      isActive
                        ? "border-l-4 border-[var(--primary-color)] pl-5 bg-white/70 rounded-r-xl shadow-sm"
                        : "border-l-4 border-transparent pl-5 opacity-70 hover:opacity-100 hover:bg-white/40 rounded-r-xl"
                    }`}
                  >
                    <div className="flex items-baseline gap-4">
                      {/* Number */}
                      <span
                        className={`text-2xl sm:text-3xl font-bold transition-colors duration-200 ${
                          isActive ? "text-[var(--primary-color)]" : "text-[color-mix(in_srgb,var(--primary-color)_40%,transparent)]"
                        }`}
                      >
                        {reason.number}
                      </span>

                      {/* Title & Description */}
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-bold text-[#0f172a] uppercase tracking-wide">
                          {reason.title}
                        </h3>
                        <p className="text-sm sm:text-[15px] text-[var(--gray-color)] leading-relaxed mt-1">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Trust Strip */}
        <div className="mt-16 lg:mt-20 pt-10 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-bold text-[#0f172a]">
              14+ Years
            </span>
            <span className="text-xs sm:text-sm text-[var(--gray-color)] font-medium mt-1">
              Industrial Manufacturing Expertise
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-bold text-[#0f172a]">
              CPRI & NABL Tested
            </span>
            <span className="text-xs sm:text-sm text-[var(--gray-color)] font-medium mt-1">
              Rigorous Fault Current Verification
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-bold text-[#0f172a]">
              Rajkot Engineering Hub
            </span>
            <span className="text-xs sm:text-sm text-[var(--gray-color)] font-medium mt-1">
              Precision Foundry & Direct Dispatch
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
