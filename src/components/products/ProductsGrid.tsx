"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon, productIcons } from "@/components/icon";
import { products } from "@/components/products/productData";

/**
 * Visual styling theme per product to replicate the premium design
 * across all 6 products.
 */
const cardThemes: Record<
  string,
  {
    icon: string;
    categoryBadge: string;
    cardBg: string;
    iconBg: string;
    iconColor: string;
    badgeBg: string;
    badgeColor: string;
    glowBg: string;
    arrowBorder: string;
    arrowColor: string;
  }
> = {
  "copper-bonded-chemical-earthing-electrodes": {
    icon: productIcons.copperBonded,
    categoryBadge: "EARTHING ELECTRODES",
    cardBg: "bg-[#FCF9F6]",
    iconBg: "bg-[#FCEEE6]",
    iconColor: "text-[#C2410C]",
    badgeBg: "bg-[#FAECE3]",
    badgeColor: "text-[#B45309]",
    glowBg:
      "radial-gradient(circle, rgba(251, 146, 60, 0.18) 0%, rgba(251, 146, 60, 0) 70%)",
    arrowBorder:
      "border-[#E8C7B4] group-hover:border-[#C2410C] group-hover:bg-[#C2410C]",
    arrowColor: "text-[#C2410C] group-hover:text-white",
  },
  "pure-copper-gi-earthing-accessories": {
    icon: productIcons.hardwareAccessories,
    categoryBadge: "HARDWARE & WELD",
    cardBg: "bg-[#F7FAFD]",
    iconBg: "bg-[#E6F3FB]",
    iconColor: "text-[var(--primary-color)]",
    badgeBg: "bg-[#E2F1FC]",
    badgeColor: "text-[var(--primary-color)]",
    glowBg:
      "radial-gradient(circle, rgba(8, 117, 138, 0.16) 0%, rgba(8, 117, 138, 0) 70%)",
    arrowBorder:
      "border-[#BEE2F7] group-hover:border-[var(--primary-color)] group-hover:bg-[var(--primary-color)]",
    arrowColor: "text-[var(--primary-color)] group-hover:text-white",
  },
  "industrial-substation-grounding-grid": {
    icon: productIcons.substationGrid,
    categoryBadge: "UTILITY GRADE",
    cardBg: "bg-[#F7FAF8]",
    iconBg: "bg-[#E8F6EE]",
    iconColor: "text-[#15803D]",
    badgeBg: "bg-[#E5F5EC]",
    badgeColor: "text-[#15803D]",
    glowBg:
      "radial-gradient(circle, rgba(34, 197, 94, 0.16) 0%, rgba(34, 197, 94, 0) 70%)",
    arrowBorder:
      "border-[#C1E8CE] group-hover:border-[#15803D] group-hover:bg-[#15803D]",
    arrowColor: "text-[#15803D] group-hover:text-white",
  },
  "commercial-earth-busbars-distribution": {
    icon: "lucide:layout-grid",
    categoryBadge: "COMMERCIAL SAFETY",
    cardBg: "bg-[#FDFBF7]",
    iconBg: "bg-[#FEF3C7]",
    iconColor: "text-[#D97706]",
    badgeBg: "bg-[#FEF3C7]",
    badgeColor: "text-[#B45309]",
    glowBg:
      "radial-gradient(circle, rgba(245, 158, 11, 0.16) 0%, rgba(245, 158, 11, 0) 70%)",
    arrowBorder:
      "border-[#FDE68A] group-hover:border-[#D97706] group-hover:bg-[#D97706]",
    arrowColor: "text-[#D97706] group-hover:text-white",
  },
  "solar-pv-plant-grounding-systems": {
    icon: "lucide:sun",
    categoryBadge: "SOLAR & RENEWABLES",
    cardBg: "bg-[#F8FAFC]",
    iconBg: "bg-[#EFF6FF]",
    iconColor: "text-[#2563EB]",
    badgeBg: "bg-[#DBEAFE]",
    badgeColor: "text-[#1D4ED8]",
    glowBg:
      "radial-gradient(circle, rgba(37, 99, 235, 0.16) 0%, rgba(37, 99, 235, 0) 70%)",
    arrowBorder:
      "border-[#BFDBFE] group-hover:border-[#2563EB] group-hover:bg-[#2563EB]",
    arrowColor: "text-[#2563EB] group-hover:text-white",
  },
  "advanced-maintenance-free-backfill": {
    icon: "lucide:flask-conical",
    categoryBadge: "BACKFILL COMPOUND",
    cardBg: "bg-[#FAF7FD]",
    iconBg: "bg-[#F3E8FF]",
    iconColor: "text-[#7C3AED]",
    badgeBg: "bg-[#EDE9FE]",
    badgeColor: "text-[#6D28D9]",
    glowBg:
      "radial-gradient(circle, rgba(124, 58, 237, 0.16) 0%, rgba(124, 58, 237, 0) 70%)",
    arrowBorder:
      "border-[#DDD6FE] group-hover:border-[#7C3AED] group-hover:bg-[#7C3AED]",
    arrowColor: "text-[#7C3AED] group-hover:text-white",
  },
};

export default function ProductsGrid() {
  return (
    <section
      id="product-grid"
      className="w-full bg-[#FAFCFD] py-14 sm:py-16 md:py-20 lg:py-24 border-b border-slate-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Centered on Mobile, Left-Aligned on Desktop, NO EXPLORE MORE BUTTON */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-base font-bold text-[var(--primary-color)] tracking-[0.2em] uppercase">
              OUR PRODUCTS
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] leading-tight tracking-tight">
            Complete Earthing Solutions <br className="hidden sm:inline" />
            for{" "}
            <span className="text-[var(--primary-color)]">
              Every Requirement
            </span>
          </h2>
        </div>

        {/* 6 Product Cards Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => {
            const theme = cardThemes[product.id] || {
              icon: productIcons.copperBonded,
              categoryBadge: product.badge || product.category,
              cardBg: "bg-white",
              iconBg: "bg-slate-100",
              iconColor: "text-[var(--primary-color)]",
              badgeBg: "bg-slate-100",
              badgeColor: "text-slate-700",
              glowBg:
                "radial-gradient(circle, rgba(8, 117, 138, 0.12) 0%, rgba(8, 117, 138, 0) 70%)",
              arrowBorder:
                "border-slate-200 group-hover:border-[var(--primary-color)] group-hover:bg-[var(--primary-color)]",
              arrowColor: "text-slate-700 group-hover:text-white",
            };

            return (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                aria-label={`View detailed specifications for ${product.title}`}
                className={`group relative ${theme.cardBg} rounded-[28px] sm:rounded-[32px] border border-slate-200/70 p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_24px_-4px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_36px_-6px_rgba(15,23,42,0.08)] hover:border-slate-300 transition-all duration-300 hover:-translate-y-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] focus-visible:ring-offset-2`}
              >
                {/* Top Row: Icon on Left, Category Badge on Right */}
                <div className="flex items-center justify-between gap-3 mb-2">
                  {/* Category Icon */}
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full ${theme.iconBg} ${theme.iconColor} flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Icon icon={theme.icon} className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  {/* Category Pill Badge */}
                  <span
                    className={`px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-[8px] text-[10px] sm:text-[11px] font-bold tracking-wider uppercase ${theme.badgeBg} ${theme.badgeColor}`}
                  >
                    {theme.categoryBadge}
                  </span>
                </div>

                {/* Center: Large Clean Airy Product Image Container */}
                <div className="relative w-full h-56 sm:h-64 my-3 sm:my-4 flex items-center justify-center overflow-hidden">
                  {/* Subtle Ambient Halo */}
                  <div
                    className="absolute w-48 h-48 sm:w-56 sm:h-56 rounded-full pointer-events-none transition-transform duration-500 ease-out group-hover:scale-110"
                    style={{ background: theme.glowBg }}
                    aria-hidden="true"
                  />

                  {/* Uncropped Product Image */}
                  <div className="relative w-full h-full p-2">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain object-center transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="eager"
                    />
                  </div>
                </div>

                {/* Bottom Row: Product Title & Circular Arrow Action Button */}
                <div className="flex items-end justify-between gap-3 pt-2">
                  {/* Product Title */}
                  <div className="flex-1 pr-2">
                    <h3 className="text-base sm:text-lg lg:text-[19px] font-bold text-[#0f172a] leading-snug group-hover:text-[var(--primary-color)] transition-colors duration-200">
                      {product.title}
                    </h3>
                  </div>

                  {/* Circular Arrow Button (Opens Detail Page) */}
                  <div
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full border ${theme.arrowBorder} ${theme.arrowColor} flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm`}
                    aria-hidden="true"
                  >
                    <Icon
                      icon={productIcons.arrowRight}
                      className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
