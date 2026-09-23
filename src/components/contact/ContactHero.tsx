import Image from "next/image";
import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="relative w-full min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] xl:min-h-[490px] flex items-center overflow-hidden bg-[#F8FAFC]">
      {/* 1. PHOTOREALISTIC ARCHITECTURAL BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/contact/background-image-main-section.png"
          alt="Pratiksha Earthing Solutions Corporate Headquarters and Manufacturing Plant"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right md:object-center w-full h-full"
        />

        {/* 2. SOFT ATMOSPHERIC GRADIENTS TO ENSURE TEXT LEGIBILITY */}
        {/* Left-to-right gradient overlay matching mockup */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/95 via-45% sm:via-white/80 sm:via-45% md:via-white/70 to-transparent z-1 pointer-events-none" />

        {/* Mobile readability protection */}
        <div className="absolute inset-0 bg-white/60 sm:bg-transparent z-1 pointer-events-none" />

        {/* Subtle top header blend */}
        <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-white/70 to-transparent z-1 pointer-events-none" />
      </div>

      {/* 3. HERO CONTENT CONTAINER (COMPACT HALF-SCREEN PROPORTIONS) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 lg:py-7 flex flex-col justify-between min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] xl:min-h-[490px]">
        {/* TOP BAR: BREADCRUMB */}
        <div className="flex items-center justify-between w-full">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-xs text-[var(--gray-color)] font-medium">
              <li>
                <Link
                  href="/"
                  className="hover:text-[var(--primary-color)] transition-colors focus:outline-none"
                >
                  Home
                </Link>
              </li>
              <li className="text-[var(--gray-color)]/60" aria-hidden="true">
                /
              </li>
              <li className="text-[#0f172a] font-semibold" aria-current="page">
                Contact Us
              </li>
            </ol>
          </nav>
        </div>

        {/* MIDDLE: MAIN HEADLINE, SUBTITLE, CTA, AND PILLARS */}
        <div className="max-w-xl lg:max-w-2xl py-2 sm:py-4">
          {/* Eyebrow / Tagline */}
          <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
            <span className="w-6 sm:w-8 h-[2px] bg-[var(--primary-color)] rounded-full" />
            <span className="text-base font-bold text-[var(--primary-color)] tracking-widest uppercase">
              GET IN TOUCH
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[48px] font-black text-[#0f172a] tracking-tight leading-[1.1]">
            Let&apos;s Build
            <span className="text-[var(--primary-color)]"> A Safer</span>{" "}
            Tomorrow
          </h1>

          {/* Description */}
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed max-w-lg">
            Have a question or need a quote? Our team is here to help. Get in
            touch with Pratiksha Earthing Solutions.
          </p>

          {/* Action CTA Button */}
          <div className="mt-4 sm:mt-5">
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white bg-[var(--primary-color)] hover:bg-[#065e6f] rounded-full transition-all duration-200 shadow-[0_4px_14px_color-mix(in_srgb,var(--primary-color)_30%,transparent)] hover:shadow-[0_6px_20px_color-mix(in_srgb,var(--primary-color)_40%,transparent)] hover:scale-[1.02] active:scale-[0.98] group"
            >
              <span>Contact Our Team</span>
              <svg
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>

          {/* 3 Trust Feature Pillars */}
          <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-slate-500/90 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg">
            {/* Pillar 1: Quick Response */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[color-mix(in_srgb,var(--primary-color)_10%,transparent)] flex items-center justify-center shrink-0 text-[var(--primary-color)]">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 11a9 9 0 0118 0v3a3 3 0 01-3 3h-1m-14-3a3 3 0 01-3-3v-3"
                  />
                </svg>
              </div>
              <span className="text-[11px] sm:text-xs font-bold text-[#0f172a] leading-tight">
                Quick Response
              </span>
            </div>

            {/* Pillar 2: Expert Support */}
            <div className="flex items-center gap-2 border-l border-slate-500 pl-2 sm:pl-4">
              <div className="w-8 h-8 rounded-full bg-[color-mix(in_srgb,var(--primary-color)_10%,transparent)] flex items-center justify-center shrink-0 text-[var(--primary-color)]">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <span className="text-[11px] sm:text-xs font-bold text-[#0f172a] leading-tight">
                Expert Support
              </span>
            </div>

            {/* Pillar 3: Trusted Partnership */}
            <div className="flex items-center gap-2 border-l border-slate-500 pl-2 sm:pl-4">
              <div className="w-8 h-8 rounded-full bg-[color-mix(in_srgb,var(--primary-color)_10%,transparent)] flex items-center justify-center shrink-0 text-[var(--primary-color)]">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <span className="text-[11px] sm:text-xs font-bold text-[#0f172a] leading-tight">
                Trusted Partnership
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM: SUBTLE LOCATION & SLOGAN ACCENT STRIP */}
        <div className="pt-3 border-t border-slate-500 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-[10px] sm:text-[11px] font-semibold text-[var(--gray-color)] tracking-wider">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-color)]" />
            <span className="uppercase text-[var(--gray-color)]">
              RAJKOT, GUJARAT
            </span>
          </div>
          <div className="uppercase tracking-widest text-white">
            CONNECT <span className="mx-1 text-[var(--gray-color)]/900">/</span>{" "}
            COLLABORATE{" "}
            <span className="mx-1 text-[var(--gray-color)]/900">/</span> GROW
          </div>
        </div>
      </div>
    </section>
  );
}
