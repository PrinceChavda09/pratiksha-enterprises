import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@/components/icon";

export default function NotFound() {
  return (
    <main
      data-not-found="true"
      id="not-found-page"
      className="w-full min-h-screen flex flex-col items-center justify-between bg-[#FAFCFD] px-4 py-10 sm:py-16 text-center overflow-hidden"
    >
      {/* 1. BRAND LOGO */}
      <div className="w-full flex justify-center pt-2">
        <Link
          href="/"
          className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] rounded"
        >
          <Image
            src="/images/pratiksha-logo.webp"
            alt="Pratiksha Earthing Solutions"
            width={190}
            height={95}
            className="h-11 sm:h-13 w-auto object-contain mx-auto"
            priority
          />
        </Link>
      </div>

      {/* 2. CENTER: 404 CARD */}
      <div className="max-w-lg w-full my-auto py-8 px-4 flex flex-col items-center">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-teal-50 border border-teal-200/80 text-[var(--primary-color)] mb-5 shadow-xs">
          404 Error / Page Not Found
        </span>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--text-heading)] leading-tight tracking-tight mb-4">
          Looking for Something Specific?
        </h1>

        <p className="text-sm sm:text-base text-[var(--gray-color)] max-w-md leading-relaxed mb-8 font-normal">
          The product or page you are trying to access does not exist, has been removed, or the link may be outdated.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 w-full sm:w-auto">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-7 py-3.5 text-sm sm:text-base font-bold text-white bg-[var(--primary-color)] hover:bg-[#065e6f] rounded-xl transition-all duration-200 shadow-sm hover:shadow gap-2 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Browse Products</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-semibold text-[var(--text-heading)] bg-slate-100 hover:bg-slate-200 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Return to Home</span>
          </Link>
        </div>
      </div>

      {/* 3. BOTTOM FOOTNOTE */}
      <div className="w-full text-xs text-[var(--gray-color)]/75 pb-2">
        <p>© {new Date().getFullYear()} Pratiksha Earthing Solutions. All Rights Reserved.</p>
      </div>
    </main>
  );
}
