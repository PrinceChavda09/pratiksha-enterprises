import Link from "next/link";
import Image from "next/image";

interface FeatureCard {
  title: string;
  subtitle: string;
}

const featureCards: FeatureCard[] = [
  {
    title: "Quality Certified",
    subtitle: "CPRI & NABL Tested",
  },
  {
    title: "High Reliability",
    subtitle: "15+ Year Lifespan",
  },
  {
    title: "Dedicated Support",
    subtitle: "On-Site Assistance",
  },
];

export default function AboutPratiksha() {
  return (
    <section className="w-full bg-[#eaf7fb] py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT SIDE — IMAGE */}
          <div className="relative w-full rounded-[16px] overflow-hidden shadow-lg aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] bg-slate-900 group">
            <Image
              src="/images/about-factory.webp"
              alt="Pratiksha Earthing Solutions precision engineering and industrial earthing installation"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />

            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

            {/* Bottom-left overlay text */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 z-10">
              <p className="text-xs font-bold text-[#00c5cb] tracking-wider uppercase">
                RAJKOT ENGINEERING HERITAGE
              </p>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-1 leading-snug">
                Manufacturing Precision for Over 14 Years
              </h3>
            </div>
          </div>

          {/* RIGHT SIDE — CONTENT */}
          <div className="flex flex-col justify-center">
            {/* Small eyebrow text */}
            <span className="text-xs font-bold text-[#08758a] tracking-widest uppercase block mb-3">
              ABOUT PRATIKSHA
            </span>

            {/* Main heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#0f172a] leading-tight mb-5">
              Building Safer Electrical Foundations
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-gray-600 text-[15px] sm:text-base leading-relaxed mb-8">
              <p>
                Pratiksha Earthing Solutions is focused on providing dependable
                earthing products and solutions that support electrical safety,
                system reliability, and long-term performance across demanding
                power networks.
              </p>
              <p>
                Based in Rajkot, Gujarat — one of India’s premier engineering and
                foundry hubs — we combine precision manufacturing with rigorous
                electrical engineering standards to protect lives, machinery,
                and sensitive infrastructure from hazardous fault currents and
                lightning surges.
              </p>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 mb-8">
              {featureCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-white rounded-[10px] p-4 sm:p-5 shadow-sm border border-slate-100 flex flex-col justify-between transition-shadow hover:shadow-md"
                >
                  <div className="mb-3">
                    <svg
                      className="w-5 h-5 text-[#08758a]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-[15px] font-bold text-[#0f172a] mb-1">
                      {card.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-normal">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div>
              <Link
                href="/about"
                className="inline-flex items-center text-[15px] font-bold text-[#08758a] hover:text-[#065e6f] transition-colors group focus:outline-none focus:ring-2 focus:ring-[#08758a] focus:ring-offset-2 rounded"
              >
                <span>Know More About Us</span>
                <span
                  className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
