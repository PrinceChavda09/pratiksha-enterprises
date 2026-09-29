import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icon";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/animations";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Products", href: "/products" },
    { name: "Contact Us", href: "/contact" },
  ];

  const solutions = [
    { name: "Earthing Electrodes", href: "/products" },
    { name: "Copper & GI Accessories", href: "/products" },
    { name: "Substation Grounding", href: "/products" },
    { name: "Earth Busbars", href: "/products" },
    { name: "Solar PV Grounding", href: "/products" },
    { name: "Maintenance-Free Backfill", href: "/products" },
  ];

  return (
    <footer className="w-full bg-[#F4FAFC] border-t border-slate-200/90 text-[var(--gray-color)] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. TOP COMPACT CTA STRIP */}
        <Reveal direction="up" delay={0.1}>
          <div className="pt-12 sm:pt-16 pb-10 sm:pb-12 border-b border-slate-200/80">
            <div className="bg-white border border-[color-mix(in_srgb,var(--primary-color)_20%,transparent)] border-l-4 border-l-[var(--primary-color)] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6 transition-all duration-300 hover:shadow-md">
              <div>
                <span className="text-sm font-bold text-[var(--primary-color)] tracking-widest uppercase block mb-2">
                  READY TO GET STARTED?
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--text-heading)] leading-tight mb-2">
                  Let&apos;s Build a Safer Electrical Foundation.
                </h3>
                <p className="text-sm sm:text-base text-[var(--gray-color)] max-w-xl leading-relaxed">
                  Talk to our engineering team about your earthing and electrical
                  safety requirements.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-[var(--primary-color)] hover:bg-[#065e6f] rounded-[8px] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow gap-2 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] focus-visible:ring-offset-2"
              >
                <span>Get a Quote</span>
                <span
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </Reveal>

        {/* 2. MAIN FOOTER CONTENT (4 COLUMNS) */}
        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 py-12 sm:py-16"
        >
          {/* COLUMN 1 — BRAND */}
          <StaggerItem index={0} direction="up" className="lg:col-span-4">
            <Link
              href="/"
              className="inline-block mb-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] focus-visible:ring-offset-2 rounded"
            >
              <Image
                src="/images/pratiksha-logo.webp"
                alt="Pratiksha Earthing Solutions"
                width={190}
                height={95}
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-[var(--gray-color)] leading-relaxed mb-4 max-w-sm">
              Pratiksha Earthing Solutions delivers dependable earthing products
              and engineered electrical safety solutions for demanding
              industrial applications.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="text-xs font-semibold text-[var(--primary-color)] tracking-wider uppercase">
                Engineering safety. Protecting what matters.
              </span>
            </div>
          </StaggerItem>

          {/* COLUMN 2 & 3 — COMPANY & SOLUTIONS */}
          <StaggerItem
            index={1}
            direction="up"
            className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 lg:col-span-5"
          >
            {/* COLUMN 2 — COMPANY */}
            <div className="sm:col-span-2">
              <h4 className="text-sm font-bold text-[var(--text-heading)] uppercase tracking-widest mb-4 sm:mb-5">
                Company
              </h4>
              <ul className="space-y-2.5 text-sm">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[var(--gray-color)] hover:text-[var(--primary-color)] transition-colors duration-200 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] rounded-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 3 — SOLUTIONS */}
            <div className="sm:col-span-3">
              <h4 className="text-sm font-bold text-[var(--text-heading)] uppercase tracking-widest mb-4 sm:mb-5">
                Solutions
              </h4>
              <ul className="space-y-2.5 text-sm">
                {solutions.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-[var(--gray-color)] hover:text-[var(--primary-color)] transition-colors duration-200 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] rounded-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>

          {/* COLUMN 4 — GET IN TOUCH */}
          <StaggerItem index={2} direction="up" className="lg:col-span-3">
            <h4 className="text-sm font-bold text-[var(--text-heading)] uppercase tracking-widest mb-4 sm:mb-5">
              Get In Touch
            </h4>
            <div className="space-y-4 text-sm">
              {/* Location */}
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-[var(--primary-color)] shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
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
                <div>
                  <p className="font-semibold text-[var(--text-heading)]">
                    305, Royal Complex, Dhebar Rd, Millpara, Bhutkhana Chowk,
                    Rajkot, Gujarat 360002.
                  </p>
                  <p className="text-xs text-[var(--gray-color)]">
                    Engineering & Manufacturing Hub
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-[var(--primary-color)] shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--text-heading)]">
                    Phone No. : +91 93138 88465.
                  </p>
                  <p className="text-xs text-[var(--gray-color)]">
                    Direct dispatch across Phone number
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-[var(--primary-color)] shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <a
                    href="mailto:pratikshaenterprises.sales@gmail.com"
                    className="font-semibold text-[var(--text-heading)] hover:text-[var(--primary-color)] transition-colors break-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] rounded-sm"
                  >
                    pratikshaenterprises.sales@gmail.com
                  </a>
                </div>
              </div>

              {/* Inquiry Link */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center text-sm font-semibold text-[var(--primary-color)] hover:text-[#065e6f] transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] rounded-sm"
                >
                  <span>Submit Technical Inquiry</span>
                  <span
                    className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <ArrowRightIcon />
                  </span>
                </Link>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* 3. BOTTOM COPYRIGHT BAR */}
        <Reveal direction="none" delay={0.15}>
          <div className="border-t border-slate-200/90 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--gray-color)]">
            <p>
              © {currentYear} Pratiksha Earthing Solutions. All Rights Reserved.
            </p>
            <p className="text-[var(--gray-color)]">
              Precision Earthing & Electrical Safety Systems
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
