import Image from "next/image";
import Link from "next/link";
import { Product } from "./productData";
import { ArrowRightIcon } from "../icon";

interface ProductCatalogueItemProps {
  product: Product;
  index: number;
}

export default function ProductCatalogueItem({
  product,
  index,
}: ProductCatalogueItemProps) {
  const formattedIndex = String(index + 1).padStart(2, "0");
  const isEven = index % 2 === 1; // 0: Image Left, 1: Image Right, 2: Image Left, etc.

  return (
    <div
      id={product.id}
      className="scroll-mt-24 py-16 sm:py-20 lg:py-24 border-b border-slate-200/90 last:border-b-0 group"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* PRODUCT IMAGE CONTAINER */}
        <div
          className={`lg:col-span-6 ${
            isEven ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 lg:p-10 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-[var(--primary-color)] group-hover:shadow-sm">
            {/* Corner Subtle Category Stamp */}
            <span className="absolute top-4 left-4 sm:top-5 sm:left-5 text-[11px] font-bold text-[var(--gray-color)] tracking-wider uppercase">
              {product.category}
            </span>

            {/* Complete, Uncropped Product Image */}
            <div className="relative w-full h-full">
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                className="object-contain object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* PRODUCT INFORMATION */}
        <div
          className={`lg:col-span-6 flex flex-col justify-center ${
            isEven ? "lg:order-1" : "lg:order-2"
          }`}
        >
          {/* Large Subtle Catalogue Number */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-300 group-hover:text-[var(--primary-color)] transition-colors duration-300">
              {formattedIndex}
            </span>
            <span className="h-[2px] w-12 bg-slate-200 group-hover:bg-[var(--primary-color)] transition-colors duration-300" />
          </div>

          {/* Category Tag */}
          <span className="text-xs font-bold text-[var(--primary-color)] tracking-wider uppercase block mb-2.5">
            {product.category}
          </span>

          {/* Product Name */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f172a] leading-tight tracking-tight mb-4 group-hover:text-[var(--primary-color)] transition-colors duration-300">
            {product.title}
          </h2>

          {/* Product Description */}
          <p className="text-base sm:text-lg text-[var(--gray-color)] leading-relaxed mb-8 max-w-xl">
            {product.description}
          </p>

          {/* Product Action */}
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 sm:px-7 sm:py-3.5 text-sm sm:text-base font-semibold text-white bg-[var(--primary-color)] hover:bg-[#065e6f] rounded-[10px] sm:rounded-xl transition-all duration-300 shadow-sm hover:shadow-md gap-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2 hover:scale-[1.02] active:scale-[0.98] group/btn"
              aria-label={`Enquire about ${product.title}`}
            >
              <span>Enquiry Now</span>
              <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
