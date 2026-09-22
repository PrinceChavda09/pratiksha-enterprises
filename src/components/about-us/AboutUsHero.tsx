import Image from "next/image";
import Link from "next/link";

export default function AboutUsHero() {
  return (
    <section className="relative w-full min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] xl:min-h-[490px] flex items-center overflow-hidden border-b border-slate-200/90 bg-[#eef5f8]">
      {/* 1. HERO BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about-us/hero-section.png"
          alt="Pratiksha Earthing Solutions manufacturing facility and complete product lineup"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right md:object-center w-full h-full"
        />

        {/* 2. GRADIENT OVERLAYS FOR CRISP TEXT LEGIBILITY */}
        {/* Horizontal gradient: ensures high contrast for editorial text on left while showcasing products on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-white/0 md:via-white/70 md:to-transparent z-1 pointer-events-none" />
        {/* Subtle vertical gradient for atmospheric depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-white/0 z-1 pointer-events-none" />
      </div>

      {/* 3. HERO CONTENT CONTAINER (COMPACT HALF-SCREEN PROPORTIONS) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 lg:py-7 flex flex-col justify-between min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] xl:min-h-[490px]">
        {/* TOP BAR: BREADCRUMB*/}
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
                About Us
              </li>
            </ol>
          </nav>
        </div>

        {/* MIDDLE: MAIN HEADLINE, SUBTITLE, 3 FEATURE BADGES, CTA BUTTON */}
        <div className="max-w-xl lg:max-w-2xl py-2 sm:py-3">
          {/* Eyebrow with Brand Accent Bar */}
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 sm:w-8 h-[2px] bg-[var(--primary-color)] rounded-full" />
            <span className="text-[11px] sm:text-xs font-bold text-[var(--primary-color)] tracking-widest uppercase">
              ABOUT PRATIKSHA
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] font-black text-[#0f172a] tracking-tight leading-[1.1] mb-2 sm:mb-2.5">
            Reliable Earthing Solutions {" "}
            <span className="text-[var(--primary-color)]">For Safer Systems</span>
          </h1>

          {/* Supporting Content */}
          <p className="text-xs sm:text-sm md:text-base text-[var(--gray-color)] font-normal leading-relaxed max-w-lg mb-3.5 sm:mb-4">
            Pratiksha Earthing Solutions is a Rajkot-based business focused on
            earthing and electrical safety products designed for residential,
            commercial and industrial applications.
          </p>

          {/* 3 Feature Highlights (Quality Certified | 14+ Years | Rajkot Hub) */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-5 lg:gap-6 mb-3.5 sm:mb-4">
            {/* Feature 1: Quality Certified */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#E0F2F6] text-[var(--primary-color)] flex items-center justify-center shrink-0">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-[#0f172a] leading-tight">
                Quality Certified
              </div>
            </div>

            {/* Feature 2: 14+ Years */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#E0F2F6] text-[var(--primary-color)] flex items-center justify-center shrink-0">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-[#0f172a] leading-tight">
                14+ Years Heritage
              </div>
            </div>

            {/* Feature 3: Rajkot Hub */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#E0F2F6] text-[var(--primary-color)] flex items-center justify-center shrink-0">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-[#0f172a] leading-tight">
                Rajkot Hub
              </div>
            </div>
          </div>

          {/* Action CTA Button */}
          <div>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white bg-[var(--primary-color)] hover:bg-[#065e6f] rounded-lg sm:rounded-xl transition-all duration-200 shadow-[0_4px_14px_color-mix(in_srgb,var(--primary-color)_30%,transparent)] hover:shadow-[0_6px_20px_color-mix(in_srgb,var(--primary-color)_40%,transparent)] hover:scale-[1.02] active:scale-[0.98] group"
            >
              <span>Explore Our Company</span>
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
        </div>

        {/* BOTTOM ROW: LEFT MOTTO & RAJKOT GUJARAT ACCENT STRIP */}
        <div className="pt-2.5 sm:pt-3 border-t border-slate-200/80 sm:border-slate-300/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-5 sm:w-6 h-[2px] bg-[var(--primary-color)] rounded-full" />
            <div className="text-[10px] sm:text-[11px] font-bold text-[var(--gray-color)] uppercase tracking-wider">
              ENGINEERING PRECISION{" "}
              <span className="text-slate-300 mx-1">/</span>{" "}
              <span className="text-[#0f172a]">GROUNDING & SAFETY</span>
            </div>
          </div>
          <div className="text-[10px] sm:text-[11px] font-semibold text-[var(--gray-color)] tracking-wider uppercase">
            RAJKOT, GUJARAT — INDIA
          </div>
        </div>
      </div>
    </section>
  );
}
