import Image from "next/image";
import Link from "next/link";

export default function AboutUsHero() {
  return (
    <section className="w-full bg-[#f8fafc] border-b border-slate-200/90 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
          <ol className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500">
            <li>
              <Link
                href="/"
                className="hover:text-[var(--primary-color)] transition-colors focus:outline-none focus:underline"
              >
                Home
              </Link>
            </li>
            <li className="text-slate-400" aria-hidden="true">
              /
            </li>
            <li className="text-[#0f172a] font-semibold" aria-current="page">
              About Us
            </li>
          </ol>
        </nav>

        {/* Asymmetric Corporate Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow with Brand Accent Bar */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[var(--primary-color)]" />
              <span className="text-xs sm:text-sm font-bold text-[var(--primary-color)] tracking-widest uppercase">
                ABOUT PRATIKSHA
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a] tracking-tight leading-[1.15] mb-6">
              Reliable Earthing Solutions for Safer Electrical Systems
            </h1>

            {/* Supporting Content */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Pratiksha Earthing Solutions is a Rajkot-based business focused on
              earthing and electrical safety products designed for residential,
              commercial and industrial applications.
            </p>
          </div>

          {/* Right Column: Architectural Photography Frame */}
          <div className="lg:col-span-5">
            <div className="relative border border-slate-300/80 p-2 sm:p-3 bg-white shadow-sm rounded-lg">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded bg-slate-100">
                <Image
                  src="/images/about-factory-clean.webp"
                  alt="Pratiksha Earthing Solutions engineering and manufacturing facility"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="mt-2.5 px-1 flex items-center justify-between text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                <span>Rajkot, Gujarat</span>
                <span className="text-[var(--primary-color)]">
                  Grounding Systems
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
