import OurProduct from "@/components/home/OurProduct";

export const metadata = {
  title: "Products | Pratiksha Earthing Solutions",
  description:
    "Explore our complete range of earthing and electrical safety products engineered for heavy-duty industrial dissipation and zero-maintenance longevity.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <OurProduct />
    </main>
  );
}
