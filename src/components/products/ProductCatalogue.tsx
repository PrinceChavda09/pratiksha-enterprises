import { products } from "./productData";
import ProductCatalogueItem from "./ProductCatalogueItem";

export default function ProductCatalogue() {
  return (
    <section
      id="catalogue"
      className="w-full bg-white py-12 sm:py-16 border-b border-slate-200/80"
      aria-label="Product Catalogue"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-slate-200">
          <div>
            <span className="text-base font-bold text-[var(--primary-color)] tracking-widest uppercase block mb-2">
              CATALOGUE LISTING
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              Standard & Custom Earthing Specifications
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-bold text-[var(--gray-color)] uppercase tracking-wider mt-2 sm:mt-0">
            Showing all 06 products
          </p>
        </div>

        {/* Alternating Large Product Rows */}
        <div className="divide-y divide-slate-200/90">
          {products.map((product, index) => (
            <ProductCatalogueItem
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
