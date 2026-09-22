import Image from "next/image";
import Link from "next/link";
import { products } from "./productData";

export default function ProductsHero() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden bg-slate-950">
      {/* Background Industrial Visual */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/substation-installation.webp"
          alt="Pratiksha Earthing Solutions high-voltage substation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25"
        />
        {/* Dark Industrial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/80" />
        {/* Technical Blueprint Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
          <ol className="flex items-center space-x-2 text-xs sm:text-sm text-slate-400">
            <li>
              <Link
                href="/"
                className="hover:text-[var(--primary-color)] transition-colors focus:outline-none focus:underline"
              >
                Home
              </Link>
            </li>
            <li className="text-slate-600" aria-hidden="true">
              /
            </li>
            <li className="text-white font-medium" aria-current="page">
              Products
            </li>
          </ol>
        </nav>

        {/* Hero Content Area */}
        <div className="max-w-4xl">
          {/* Eyebrow with Pulsing Brand Dot */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 mb-5">
            <span className="w-2 h-2 rounded-full bg-[var(--primary-color)] animate-pulse" />
            <span className="text-xs font-bold text-teal-300 tracking-widest uppercase">
              OUR PRODUCTS // INDUSTRIAL CATALOGUE
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-6">
            Complete Earthing Solutions
            <br />
            <span className="text-[var(--primary-color)]">
              for Every Requirement
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl font-normal mb-8 sm:mb-10">
            Explore our complete range of earthing and electrical safety
            products engineered for heavy-duty industrial dissipation and
            zero-maintenance longevity.
          </p>

          {/* Key Engineering Specification Tags */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-semibold text-slate-300 pb-10 sm:pb-12 border-b border-slate-800/80">
            <span className="px-3 py-1.5 rounded-md bg-slate-900/80 border border-slate-800">
              ✓ IS 3043:2018 Engineering
            </span>
            <span className="px-3 py-1.5 rounded-md bg-slate-900/80 border border-slate-800">
              ✓ Heavy-Duty Fault Dissipation
            </span>
            <span className="px-3 py-1.5 rounded-md bg-slate-900/80 border border-slate-800">
              ✓ Zero-Maintenance Longevity
            </span>
            <span className="px-3 py-1.5 rounded-md bg-slate-900/80 border border-slate-800">
              ✓ Direct Factory Dispatch
            </span>
          </div>
        </div>

        {/* Quick-Jump Catalogue Navigation Bar */}
        <div className="mt-8 pt-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3.5">
            Quick Jump to Specification (06 Products):
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {products.map((product, idx) => (
              <a
                key={product.id}
                href={`#${product.id}`}
                className="group px-3 py-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-[var(--primary-color)] hover:bg-slate-800/90 transition-all flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              >
                <span className="text-[10px] font-bold text-slate-500 group-hover:text-[var(--primary-color)] transition-colors">
                  0{idx + 1}
                </span>
                <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors line-clamp-1 mt-1">
                  {product.title.split(" ")[0]} {product.title.split(" ")[1]}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
