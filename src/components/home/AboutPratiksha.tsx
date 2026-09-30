import Link from "next/link";
import Image from "next/image";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/animations";

interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: "14+", label: "YEARS IN INDUSTRY" },
  { value: "500+", label: "PROJECTS COMPLETED" },
  { value: "28+", label: "STATES COVERED" },
  { value: "10K+", label: "DISTRIBUTORS" },
];

export default function AboutPratiksha() {
  return (
    <section className="w-full py-10 sm:py-20 lg:py-24 overflow-hidden relative border-b border-slate-100">
      <div className="container w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 items-center">
          {/* LEFT COLUMN: EDITORIAL HEADLINE & STATS */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Primary accent eyebrow & Headline */}
            <Reveal direction="up" delay={0.1}>
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4 sm:mb-5">
                <span className="w-7 sm:w-8 h-[2px] bg-[var(--primary-color)] rounded-full shrink-0" />
                <span className="text-xs sm:text-[13px] font-bold text-[var(--primary-color)] tracking-[0.2em] uppercase">
                  ABOUT US
                </span>
              </div>

              {/* Main Headline (All caps, bold industrial typography) */}
              <h2 className="text-xl sm:text-4xl lg:text-[44px] font-extrabold text-[var(--text-heading)] tracking-tight uppercase leading-[1.12] mb-5 sm:mb-6 text-center md:text-left">
                SETTING THE STANDARD IN ELECTRICAL SAFETY.
              </h2>
            </Reveal>

            {/* Overview Paragraph using --gray-color */}
            <Reveal direction="up" delay={0.2}>
              <p className="text-[var(--gray-color)] text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 max-w-2xl text-center md:text-left mx-auto md:mx-0">
                Since 2008, Pratiksha Earthing has manufactured and installed over
                500+ earthing systems for substations, data centres, railways, and
                industrial plants. Our manufacturing facilities produce CPRI certified
                electrodes, IS 3043 compliant compounds, and ESE lightning arresters
                backed by 1000 hour salt-spray testing.
              </p>
              {/* Paragraphs */}
              <div className="space-y-4 text-[var(--gray-color)] text-[15px] sm:text-base leading-relaxed mb-8 text-center md:text-left">
                <p>
                  Pratiksha Earthing Solutions is focused on providing dependable
                  earthing products and solutions that support electrical safety,
                  system reliability, and long-term performance across demanding
                  power networks.
                </p>
                <p>
                  Based in Rajkot, Gujarat one of India’s premier engineering
                  and foundry hubs we combine precision manufacturing with
                  rigorous electrical engineering standards to protect lives,
                  machinery, and sensitive infrastructure from hazardous fault
                  currents and lightning surges.
                </p>
              </div>
            </Reveal>

            {/* 2x2 Stats Grid with subtle staggered reveal */}
            <StaggerContainer
              staggerDelay={0.09}
              className="grid grid-cols-2 gap-y-7 gap-x-8 sm:gap-x-12 mb-9 sm:mb-11"
            >
              {stats.map((stat, idx) => (
                <StaggerItem
                  key={stat.label}
                  index={idx}
                  direction="up"
                  className="border-l-2 border-[var(--primary-color)] pl-3.5 sm:pl-4 transition-transform duration-200"
                >
                  <div className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-heading)] tracking-tight leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-[var(--gray-color)] tracking-wider uppercase mt-1.5">
                    {stat.label}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* CTA Button / Link */}
            <Reveal direction="up" delay={0.35}>
              <div className="text-center md:text-left">
                <Link
                  href="/about-us"
                  className="inline-flex items-center text-[14px] font-bold text-[var(--primary-color)] hover:text-[#065e6f] transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] focus-visible:ring-offset-2 rounded"
                >
                  <span>LEARN MORE ABOUT US</span>
                  <span
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* RIGHT COLUMN: SUBSTATION IMAGE WITH FLOATING BADGE */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Top-Right Decorative Circular Wireframe Accent */}
            <div
              aria-hidden="true"
              className="absolute -top-5 -right-5 sm:-top-7 sm:-right-7 w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-[var(--primary-color)]/25 pointer-events-none z-0"
            />

            {/* Main Rounded Image Container */}
            <Reveal direction="left" delay={0.2} scale duration={0.75}>
              <div className="relative z-10 w-full aspect-[4/3] sm:aspect-[16/12] lg:aspect-[4/3] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-[0_16px_36px_-8px_rgba(15,23,42,0.12)] border border-slate-200/80 bg-slate-100 group">
                <Image
                  src="/about-us/hero-section.png"
                  alt="High-voltage electrical substation transformer and gantry towers at sunset"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 550px"
                  className="object-cover object-right sm:object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </Reveal>

            {/* Floating Quality Badge Card on Bottom-Left (Light Theme) */}
            <Reveal direction="up" delay={0.4} duration={0.65}>
              <div className="relative mt-4 sm:mt-0 sm:absolute sm:-bottom-7 sm:-left-8 sm:max-w-[340px] lg:-bottom-8 lg:-left-10 lg:max-w-[350px] bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-5 sm:p-5.5 shadow-[0_20px_40px_-10px_rgba(15,23,42,0.12)] z-20 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  {/* Shield icon with primary color */}
                  <div className="w-8 h-8 rounded-full bg-[#e8f6f8] flex items-center justify-center text-[var(--primary-color)] shrink-0">
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
                        d="M12 3.75c-3.75 0-6.75 1.5-6.75 1.5v6.75c0 5.25 4.5 9 6.75 9.75 2.25-.75 6.75-4.5 6.75-9.75v-6.75s-3-1.5-6.75-1.5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-sm sm:text-[15px] font-bold text-[var(--text-heading)] tracking-tight">
                    Uncompromised Quality
                  </h3>
                </div>
                <p className="text-xs text-[var(--gray-color)] leading-relaxed font-normal">
                  IS 3043, CPRI, RDSO, IEC 62305, and NFC 17-102 compliant. Every batch
                  salt spray tested for 1000+ hours.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
