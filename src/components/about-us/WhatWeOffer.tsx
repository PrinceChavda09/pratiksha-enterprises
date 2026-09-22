import Image from "next/image";
import Link from "next/link";

export default function WhatWeOffer() {
  const categories = [
    {
      number: "01",
      title: "Copper & Copper-Bonded Earthing",
      desc: "Copper earthing rods and copper-bonded electrodes designed for reliable grounding applications.",
      image: "/home/Copper_Earthing_Electrode.jpeg",
    },
    {
      number: "02",
      title: "GI Earthing Solutions",
      desc: "Galvanized iron earthing products including GI rods and related components for electrical installations.",
      image: "/home/Earthing_Electrode.jpeg",
    },
    {
      number: "03",
      title: "Chemical Earthing Solutions",
      desc: "Chemical earthing electrodes and backfill-related products designed to support stable grounding performance.",
      image: "/home/Earthing_Compound.jpeg",
    },
    {
      number: "04",
      title: "Earthing Accessories",
      desc: "A range of supporting components such as earthing strips, clamps and related electrical earthing accessories.",
      image: "/home/Copper_Earthing_Wire.jpeg",
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[2px] bg-[var(--primary-color)]" />
              <span className="text-xs font-bold text-[var(--primary-color)] tracking-widest uppercase">
                WHAT WE OFFER
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f172a] leading-tight">
              What We Offer
            </h2>
          </div>
          <p className="text-sm font-medium text-[var(--gray-color)] uppercase tracking-wider mt-3 md:mt-0">
            Engineering Catalogue Index
          </p>
        </div>

        {/* Engineering Catalogue Index Rows */}
        <div className="divide-y divide-slate-200 border-b border-slate-200">
          {categories.map((item) => (
            <div
              key={item.number}
              className="py-8 sm:py-10 transition-colors duration-200 hover:bg-slate-50/70 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Index Number */}
                <div className="lg:col-span-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[var(--gray-color)] group-hover:text-[var(--primary-color)] transition-colors">
                    {item.number}
                  </span>
                </div>

                {/* Product Thumbnail (Contained, non-distorted) */}
                <div className="lg:col-span-2">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 bg-white border border-slate-200 rounded-lg p-2 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="120px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Category Title & Description */}
                <div className="lg:col-span-7">
                  <h3 className="text-lg sm:text-xl font-bold text-[#0f172a] group-hover:text-[var(--primary-color)] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--gray-color)] leading-relaxed max-w-2xl">
                    {item.desc}
                  </p>
                </div>

                {/* Arrow Action */}
                <div className="lg:col-span-2 flex lg:justify-end">
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--gray-color)] group-hover:text-[var(--primary-color)] transition-colors focus:outline-none focus:underline"
                    aria-label={`View ${item.title}`}
                  >
                    <span>View Category</span>
                    <span
                      className="transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
