import type { Metadata } from "next";
import ProductsHero from "@/components/products/ProductsHero";
import ProductsGrid from "@/components/products/ProductsGrid";

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

      {/* 2. All 6 Product Cards Grid */}
      <ProductsGrid />
    </main>
  );
}
