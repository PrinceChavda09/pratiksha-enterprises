import type { Metadata } from "next";
import ProductsHero from "@/components/products/ProductsHero";
import ProductOverview from "@/components/products/ProductOverview";
import ProductCatalogue from "@/components/products/ProductCatalogue";

export const metadata: Metadata = {
  title: "Products | Pratiksha Earthing Solutions",
  description:
    "Explore our complete range of earthing and electrical safety products engineered for heavy-duty industrial dissipation and zero-maintenance longevity.",
};

export default function ProductsPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* 1. Products Hero */}
      <ProductsHero />

      {/* 2. Product Overview */}
      <ProductOverview />

      {/* 3. Main Product Catalogue (Alternating Large Rows for All 6 Products) */}
      <ProductCatalogue />
    </main>
  );
}
