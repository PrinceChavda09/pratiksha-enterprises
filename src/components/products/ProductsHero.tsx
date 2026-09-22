import Image from "next/image";
import Link from "next/link";

export default function ProductsHero() {
  return (
    <section className="relative w-full min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] xl:min-h-[490px] flex items-center overflow-hidden bg-[#eef5f8]">
      {/* 1. PHOTOREALISTIC INDUSTRIAL PRODUCTS BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/product/background-image.png"
          alt="Pratiksha Earthing Solutions Industrial Product Range"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right md:object-center w-full h-full"
        />

        {/* 2. SOFT WHITE SHADOW / GRADIENT OVERLAY (LIKE CONTACT HERO) */}
        {/* Left-to-right soft white shadow / gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-42% sm:via-white/85 sm:via-50% md:via-white/60 md:via-58% to-transparent z-1 pointer-events-none" />

        {/* Ambient soft glow on left text content area */}
        <div className="absolute inset-y-0 left-0 w-[60%] sm:w-[50%] bg-gradient-to-r from-white/80 via-white/50 to-transparent z-1 pointer-events-none" />

        {/* Mobile readability protection */}
        <div className="absolute inset-0 bg-white/65 sm:bg-transparent z-1 pointer-events-none" />

        {/* Subtle top header blend */}
        <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-white/70 to-transparent z-1 pointer-events-none" />
      </div>

      {/* 3. HERO CONTENT CONTAINER (HALF-SCREEN COMPACT PROPORTIONS) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 lg:py-7 flex flex-col justify-between min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] xl:min-h-[490px]">
        {/* TOP BAR: BREADCRUMB (LEFT) & RELIABLE EARTHING TAGLINE (RIGHT) */}
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
                Products
              </li>
            </ol>
          </nav>

          {/* Top Right Tagline matching reference */}
          <div className="hidden sm:flex items-center gap-2.5 text-right">
            <span className="w-6 lg:w-8 h-[2px] bg-[var(--primary-color)] sm:bg-white/80 rounded-full" />
            <div className="text-[10px] sm:text-[11px] lg:text-xs font-bold text-slate-800 sm:text-white uppercase tracking-widest drop-shadow-sm leading-tight text-left">
              <div>Reliable Earthing</div>
              <div className="text-[var(--primary-color)] sm:text-slate-200">Stronger Infrastructure</div>
            </div>
          </div>
        </div>

        {/* MIDDLE: MAIN HEADLINE, SUBTITLE, 3 FEATURE BADGES, CTA BUTTON */}
        <div className="max-w-xl lg:max-w-2xl py-2 sm:py-3">
          {/* Eyebrow / Category Tag */}
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 sm:w-8 h-[2px] bg-[var(--primary-color)] rounded-full" />
            <span className="text-[11px] sm:text-xs font-bold text-[var(--primary-color)] tracking-widest uppercase">
              OUR PRODUCTS
            </span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] font-black text-[#0f172a] tracking-tight leading-[1.1] mb-2 sm:mb-2.5">
            Complete Earthing <br />
            Solutions for a{" "}
            <span className="text-[var(--primary-color)]">Safer Tomorrow</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-[var(--gray-color)] font-normal leading-relaxed max-w-lg mb-3.5 sm:mb-4">
            High-quality earthing and electrical safety products designed for
            reliable protection in every environment.
          </p>

          {/* 3 Feature Highlights (Trusted Quality | Wide Range | Built for Safety) */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-5 lg:gap-6 mb-3.5 sm:mb-4">
            {/* Feature 1: Trusted Quality */}
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
                Trusted
                <br />
                Quality
              </div>
            </div>

            {/* Feature 2: Wide Range */}
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
                    d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.27.1.06-.12l-.773.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.15.894c-.09.542-.559.94-1.109.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.27-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.11v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-[#0f172a] leading-tight">
                Wide
                <br />
                Range
              </div>
            </div>

            {/* Feature 3: Built for Safety */}
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
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-[#0f172a] leading-tight">
                Built for
                <br />
                Safety
              </div>
            </div>
          </div>

          {/* Action CTA Button */}
          <div>
            <a
              href="#catalogue"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white bg-[var(--primary-color)] hover:bg-[#065e6f] rounded-lg sm:rounded-xl transition-all duration-200 shadow-[0_4px_14px_color-mix(in_srgb,var(--primary-color)_30%,transparent)] hover:shadow-[0_6px_20px_color-mix(in_srgb,var(--primary-color)_40%,transparent)] hover:scale-[1.02] active:scale-[0.98] group"
            >
              <span>Explore Our Products</span>
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

        {/* BOTTOM ROW: LEFT TAGLINE & RIGHT SECTOR CATEGORIES STRIP */}
        <div className="pt-2.5 sm:pt-3 border-t border-slate-200/80 sm:border-slate-300/60 flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Bottom Left Motto matching reference */}
          <div className="flex items-center gap-2">
            <span className="w-5 sm:w-6 h-[2px] bg-[var(--primary-color)] rounded-full" />
            <div className="text-[10px] sm:text-[11px] font-bold text-[var(--gray-color)] uppercase tracking-wider">
              GROUNDING TODAY <br className="sm:hidden" />
              <span className="text-[#0f172a]">FOR A SAFER TOMORROW</span>
            </div>
          </div>

          {/* Bottom Right Sectors Bar (Residential | Commercial | Industrial | Utilities) */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 lg:gap-5 bg-white/85 backdrop-blur-md border border-slate-200/90 rounded-xl px-3.5 py-1.5 sm:px-4 sm:py-2 shadow-sm">
            {/* Sector 1: Residential */}
            <div className="flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5 text-[var(--primary-color)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <span className="text-xs font-semibold text-[#0f172a]">
                Residential
              </span>
            </div>

            <span className="text-slate-300 hidden sm:inline" aria-hidden="true">
              |
            </span>

            {/* Sector 2: Commercial */}
            <div className="flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5 text-[var(--primary-color)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                />
              </svg>
              <span className="text-xs font-semibold text-[#0f172a]">
                Commercial
              </span>
            </div>

            <span className="text-slate-300 hidden sm:inline" aria-hidden="true">
              |
            </span>

            {/* Sector 3: Industrial */}
            <div className="flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5 text-[var(--primary-color)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 21h16.5M4.5 3h3.75l2.25 4.5V21M10.5 7.5l2.25 4.5V21M15 12l2.25 4.5V21"
                />
              </svg>
              <span className="text-xs font-semibold text-[#0f172a]">
                Industrial
              </span>
            </div>

            <span className="text-slate-300 hidden sm:inline" aria-hidden="true">
              |
            </span>

            {/* Sector 4: Utilities */}
            <div className="flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5 text-[var(--primary-color)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className="text-xs font-semibold text-[#0f172a]">
                Utilities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
