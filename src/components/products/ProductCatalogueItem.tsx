import Image from "next/image";
import Link from "next/link";
import { Product } from "./productData";

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
            <span className="absolute top-4 left-4 sm:top-5 sm:left-5 text-[11px] font-bold text-slate-400 tracking-wider uppercase">
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
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
            {product.description}
          </p>

          {/* Product Action */}
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center text-sm sm:text-base font-bold text-[#0f172a] group-hover:text-[var(--primary-color)] transition-colors gap-2.5 pb-1 border-b-2 border-slate-300 group-hover:border-[var(--primary-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] rounded"
              aria-label={`Enquire about ${product.title}`}
            >
              <span>Enquire Now</span>
              <span
                className="transition-transform duration-200 group-hover:translate-x-1.5"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
