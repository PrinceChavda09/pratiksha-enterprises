import Link from "next/link";

export default function WhyPratiksha() {
  return (
    <section className="w-full bg-[#F8FAFC] py-12 sm:py-20 lg:py-28 border-b border-slate-200/80 relative overflow-hidden">
      {/* Decorative Subtle Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #08758a 1px, transparent 1px), linear-gradient(to bottom, #08758a 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
            <span className="w-6 sm:w-8 h-[2px] bg-[var(--primary-color)] shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-[var(--primary-color)] tracking-widest uppercase">
              WHY PRATIKSHA ENTERPRISES
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-[1.2] mb-3 sm:mb-4">
            Engineered for Dependability. Built for Complete Electrical Safety.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[var(--gray-color)] leading-relaxed">
            From precision metallurgical selection to direct Rajkot
            manufacturing support, here is why contractors, utilities, and
            industrial facilities partner with us for reliable grounding
            solutions.
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8">
          {/* Bento Card 1: Quality-Focused Metallurgy (Span 7) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-5 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary-color)] bg-[var(--primary-color)]/10 px-3 py-1 rounded-md">
                  01 / Metallurgical Standard
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  Certified Materials
                </span>
              </div>

              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/20 flex items-center justify-center shrink-0 text-[var(--primary-color)] group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0f172a] group-hover:text-[var(--primary-color)] transition-colors">
                    Quality-Focused Products
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--gray-color)] mt-0.5">
                    Engineered for maximum conductivity and extended ground
                    life.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[var(--gray-color)] leading-relaxed mb-6">
                We focus on materials and products intended for dependable
                electrical grounding applications. High-grade electrolytic
                copper and certified hot-dip galvanized steel ensure maximum
                fault current dissipation, high tensile strength, and durable
                corrosion resistance.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0f172a] bg-slate-100 px-3 py-1.5 rounded-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-color)]" />
                Electrolytic Copper (99.9%)
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0f172a] bg-slate-100 px-3 py-1.5 rounded-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-color)]" />
                Hot-Dip Galvanized Steel
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0f172a] bg-slate-100 px-3 py-1.5 rounded-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-color)]" />
                Corrosion-Resistant Bonding
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0f172a] bg-slate-100 px-3 py-1.5 rounded-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-color)]" />
                Low Soil Resistivity Interfacing
              </span>
            </div>
          </div>

          {/* Bento Card 2: Complete Grounding Solutions (Span 5) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-5 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary-color)] bg-[var(--primary-color)]/10 px-3 py-1 rounded-md">
                  02 / Product Diversity
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  End-to-End
                </span>
              </div>

              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/20 flex items-center justify-center shrink-0 text-[var(--primary-color)] group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0f172a] group-hover:text-[var(--primary-color)] transition-colors">
                    Reliable Solutions
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--gray-color)] mt-0.5">
                    From single components to complete system arrays.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[var(--gray-color)] leading-relaxed mb-6">
                Our product range covers diverse grounding requirements, from
                conventional GI solutions to copper and chemical earthing
                systems, ensuring the ideal match for every soil and load
                condition.
              </p>
            </div>

            {/* Quick Solution Links */}
            <div className="pt-6 border-t border-slate-100 space-y-2">
              <Link
                href="/products"
                className="flex items-center justify-between text-xs sm:text-sm font-semibold text-[#0f172a] bg-slate-50 hover:bg-[var(--primary-color)]/10 px-3.5 py-2.5 rounded-lg transition-colors group/item"
              >
                <span>Copper-Bonded Electrodes & Rods</span>
                <span className="text-[var(--primary-color)] group-hover/item:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
              <Link
                href="/products"
                className="flex items-center justify-between text-xs sm:text-sm font-semibold text-[#0f172a] bg-slate-50 hover:bg-[var(--primary-color)]/10 px-3.5 py-2.5 rounded-lg transition-colors group/item"
              >
                <span>Chemical Earthing & Compound</span>
                <span className="text-[var(--primary-color)] group-hover/item:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
              <Link
                href="/products"
                className="flex items-center justify-between text-xs sm:text-sm font-semibold text-[#0f172a] bg-slate-50 hover:bg-[var(--primary-color)]/10 px-3.5 py-2.5 rounded-lg transition-colors group/item"
              >
                <span>GI Earthing Solutions & Clamps</span>
                <span className="text-[var(--primary-color)] group-hover/item:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Bento Card 3: Application-Focused Approach (Span 5) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-5 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary-color)] bg-[var(--primary-color)]/10 px-3 py-1 rounded-md">
                  03 / Field-Tested
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  Multiple Sectors
                </span>
              </div>

              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/20 flex items-center justify-center shrink-0 text-[var(--primary-color)] group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0f172a] group-hover:text-[var(--primary-color)] transition-colors">
                    Application-Focused Approach
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--gray-color)] mt-0.5">
                    Engineered for high-stress electrical environments.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[var(--gray-color)] leading-relaxed mb-6">
                Products are tailored for demanding installations including
                heavy industrial units, commercial complexes, high-voltage
                substations, solar projects, and sensitive communication grids.
              </p>
            </div>

            {/* Application Grid Badges */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-2 gap-2.5">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-semibold text-[#0f172a] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span>Industrial Plants</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-semibold text-[#0f172a] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                <span>Solar & Wind Parks</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-semibold text-[#0f172a] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500 shrink-0" />
                <span>Commercial Sites</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-semibold text-[#0f172a] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--primary-color)] shrink-0" />
                <span>Substation Grids</span>
              </div>
            </div>
          </div>

          {/* Bento Card 4: Rajkot Hub & Direct Contact CTA (Span 7) - USER HIGHLIGHT REQUEST */}
          <div className="lg:col-span-7 bg-gradient-to-br from-white via-white to-teal-50/50 rounded-2xl p-5 sm:p-8 lg:p-10 border-2 border-[var(--primary-color)]/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            {/* Top Right Decorative Background Accent */}
            <div className="absolute top-0 right-0 translate-x-8 -translate-y-8 w-48 h-48 bg-[var(--primary-color)]/5 rounded-full pointer-events-none" />

            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary-color)] bg-[var(--primary-color)]/10 px-3 py-1 rounded-md">
                  04 / Manufacturing & Logistics Hub
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Active Dispatch Hub
                </span>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--primary-color)] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0f172a] group-hover:text-[var(--primary-color)] transition-colors">
                    Rajkot-Based Support & Direct Dispatch
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[var(--primary-color)] mt-0.5">
                    Gujarat Industrial Corridor • Direct India Freight
                  </p>
                </div>
              </div>

              {/* Address Highlight Box */}
              <div className="bg-white/90 backdrop-blur-sm border border-slate-200/90 rounded-xl p-4 sm:p-5 mb-5 shadow-xs">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[var(--primary-color)]/10 text-[var(--primary-color)] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    HQ
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Registered Address
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-[#0f172a] leading-snug">
                      305, Royal Complex, Bhutkhana Chowk, South Dhebar Road,
                      Rajkot – 360002, Gujarat, India.
                    </p>
                    <p className="text-xs text-[var(--gray-color)] mt-1.5 leading-relaxed">
                      Strategically located in Gujarat’s manufacturing corridor
                      for fast turnaround times, on-demand electrode
                      fabrication, and rapid freight dispatch nationwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick CTA Actions */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--primary-color)] hover:bg-[#065e6f] text-white text-sm font-bold rounded-lg shadow-sm hover:shadow transition-all group/btn focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] focus-visible:ring-offset-2"
              >
                <span>Connect With Rajkot Office</span>
                <span
                  className="transition-transform group-hover/btn:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>

              <a
                href="tel:+919313888465"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white hover:bg-slate-50 text-[#0f172a] text-sm font-bold rounded-lg border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)]"
              >
                <svg
                  className="w-4 h-4 text-[var(--primary-color)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+91 93138 88465</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Trust & Metric Strip */}
        <div className="mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#0f172a]">
              14+ Years
            </span>
            <span className="text-xs sm:text-sm text-[var(--gray-color)] font-medium mt-1">
              Earthing & Safety Experience
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#0f172a]">
              100% Tested
            </span>
            <span className="text-xs sm:text-sm text-[var(--gray-color)] font-medium mt-1">
              Conductivity & Soil Durability
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#0f172a]">
              India
            </span>
            <span className="text-xs sm:text-sm text-[var(--gray-color)] font-medium mt-1">
              Direct Supply & Freight Network
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#0f172a]">
              Custom Sizing
            </span>
            <span className="text-xs sm:text-sm text-[var(--gray-color)] font-medium mt-1">
              Project-Specific Engineering
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
