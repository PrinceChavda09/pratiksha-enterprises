import Image from "next/image";
import Link from "next/link";

export interface Product {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export const products: Product[] = [
  {
    id: "copper-bonded-chemical-earthing-electrodes",
    category: "IS 3043:2018",
    title: "Copper Bonded Chemical Earthing Electrodes",
    description:
      "High-tensile steel core with 250+ micron copper coating and crystalline backfill for low soil resistivity.",
    image: "/home/Copper_Earthing_Electrode.jpeg",
    href: "/products",
  },
  {
    id: "pure-copper-gi-earthing-accessories",
    category: "HARDWARE & WELD",
    title: "Pure Copper & GI Earthing Accessories",
    description:
      "Precision-machined earthing clamps, U-bolts, busbars, and exothermic welding graphite moulds.",
    image: "/home/Copper_Earthing_Wire.jpeg",
    href: "/products",
  },
  {
    id: "industrial-substation-grounding-grid",
    category: "UTILITY GRADE",
    title: "Industrial Substation Grounding Grid",
    description:
      "Heavy-duty earthing mats, flat copper strips, and inspection pits engineered for HT/LT substations.",
    image: "/home/Earthing_Inspection_Chamber.jpeg",
    href: "/products",
  },
  {
    id: "commercial-earth-busbars-distribution",
    category: "COMMERCIAL SAFETY",
    title: "Commercial Earth Busbars & Distribution",
    description:
      "Architectural earthing distribution panels, clean busbar enclosures, and main earth terminal links.",
    image: "/home/Earthing_Electrode.jpeg",
    href: "/products",
  },
  {
    id: "solar-pv-plant-grounding-systems",
    category: "RENEWABLE SIZING",
    title: "Solar PV Plant Grounding Systems",
    description:
      "Corrosion-resistant earthing solutions designed for large-scale utility and rooftop solar tracker arrays.",
    image: "/home/Lightning_Protection_Air_Terminal.jpeg",
    href: "/products",
  },
  {
    id: "advanced-maintenance-free-backfill",
    category: "BACKFILL MATERIAL",
    title: "Advanced Maintenance-Free Backfill",
    description:
      "Eco-safe carbonaceous and bentonite earthing minerals ensuring permanent low soil impedance.",
    image: "/home/Earthing_Compound.jpeg",
    href: "/products",
  },
];

export default function OurProduct() {
  return (
    <section id="products" className="w-full bg-white py-16 md:py-20 lg:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-[var(--primary-color)] tracking-widest uppercase block mb-3">
            OUR PRODUCTS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f172a] leading-tight mb-4">
            Complete Earthing Solutions for Every Requirement
          </h2>
          <p className="text-sm sm:text-base text-[var(--gray-color)] leading-relaxed max-w-2xl mx-auto">
            Explore our range of earthing and electrical safety products
            engineered for heavy-duty industrial dissipation and zero-maintenance
            longevity.
          </p>
        </div>

        {/* Product Cards Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#E6F5FB] rounded-[14px] overflow-hidden flex flex-col justify-between shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#f8f8f8] flex items-center justify-center p-4 sm:p-5">
                <div className="relative w-full h-full">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain object-center transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>

              {/* Product Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-xs font-bold text-[var(--primary-color)] tracking-wider uppercase block mb-1.5">
                    {product.category}
                  </span>
                  <h3 className="text-lg sm:text-[19px] font-bold text-[#0f172a] leading-snug mb-2.5">
                    {product.title}
                  </h3>
                  <p className="text-sm text-[var(--gray-color)] leading-relaxed mb-4">
                    {product.description}
                  </p>
                </div>

                {/* View Details Link */}
                <Link
                  href={product.href}
                  className="inline-flex items-center text-sm font-semibold text-[var(--primary-color)] hover:text-[#065e6f] transition-colors group/link mt-auto focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] rounded"
                >
                  <span>View Details</span>
                  <span
                    className="ml-1.5 transition-transform duration-200 group-hover/link:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="mt-12 sm:mt-14 text-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-[var(--primary-color)] hover:bg-[#065e6f] rounded-[8px] transition-colors shadow-sm gap-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2"
          >
            <span>View All Products & Request Catalog</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
