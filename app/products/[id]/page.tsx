import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/components/products/productData";
import { ArrowRightIcon } from "@/components/icon";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/animations";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return {
      title: "Product Not Found | Pratiksha Earthing Solutions",
    };
  }

  return {
    title: `${product.title} | Pratiksha Earthing Solutions`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  // Related products (all except current)
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <main className="w-full min-h-screen bg-[#FAFCFD] py-8 sm:py-12 lg:py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* BREADCRUMB & BACK LINK */}
        <Reveal direction="fade" delay={0.05} duration={0.5}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-12">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-xs sm:text-sm text-[var(--gray-color)] font-medium">
                <li>
                  <Link
                    href="/"
                    className="hover:text-[var(--primary-color)] transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li className="text-slate-300">/</li>
                <li>
                  <Link
                    href="/products"
                    className="hover:text-[var(--primary-color)] transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li className="text-slate-300">/</li>
                <li className="text-[var(--text-heading)] font-bold truncate max-w-[200px] sm:max-w-none">
                  {product.title}
                </li>
              </ol>
            </nav>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--primary-color)] hover:underline self-start sm:self-auto"
            >
              <span>←</span>
              <span>Back to All Products</span>
            </Link>
          </div>
        </Reveal>

        {/* MAIN PRODUCT HERO SECTION: IMAGE ON LEFT, DETAILS ON RIGHT */}
        <Reveal direction="up" delay={0.1} duration={0.65}>
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 lg:p-12 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* LEFT COLUMN: LARGE PRODUCT IMAGE CONTAINER */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="relative w-full aspect-square bg-[#F8FAFC] rounded-2xl border border-slate-200/80 p-8 flex items-center justify-center overflow-hidden shadow-inner group">
                  {/* Ambient Soft Glow Behind Product */}
                  <div
                    className="absolute w-72 h-72 rounded-full pointer-events-none blur-3xl opacity-30"
                    style={{
                      background:
                        "radial-gradient(circle, var(--primary-color) 0%, transparent 70%)",
                    }}
                    aria-hidden="true"
                  />

                  {/* Badge on Top Left */}
                  <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-teal-50 border border-teal-200/80 text-[var(--primary-color)] shadow-xs">
                    {product.badge || product.category}
                  </span>

                  {/* Main Product Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 450px"
                      className="object-contain object-center drop-shadow-md transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* 4 Trust & Dispatch Badges */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center gap-2.5">
                    <span className="text-base">🛡️</span>
                    <span className="font-semibold text-[var(--text-dark)]">
                      IS 3043:2018 Certified
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center gap-2.5">
                    <span className="text-base">⚡</span>
                    <span className="font-semibold text-[var(--text-dark)]">
                      250+ Micron Copper
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center gap-2.5">
                    <span className="text-base">🏭</span>
                    <span className="font-semibold text-[var(--text-dark)]">
                      Direct Plant Dispatch
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center gap-2.5">
                    <span className="text-base">🚚</span>
                    <span className="font-semibold text-[var(--text-dark)]">
                      Pan-India Delivery
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: TECHNICAL INFORMATION & ACTION BUTTONS */}
              <div className="lg:col-span-7 flex flex-col justify-start">
                {/* Category Eyebrow */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-1.5 w-6 bg-[var(--primary-color)] rounded-full" />
                  <span className="text-xs font-bold text-[var(--primary-color)] tracking-widest uppercase">
                    {product.category}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[var(--text-heading)] leading-tight mb-4">
                  {product.title}
                </h1>

                {/* Short & Long Description */}
                <p className="text-base sm:text-lg text-[var(--gray-color)] leading-relaxed mb-6 font-normal">
                  {product.longDescription || product.description}
                </p>

                {/* Key Technical Specifications Table */}
                {product.specifications && product.specifications.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-sm font-bold text-[var(--text-heading)] uppercase tracking-wider mb-3">
                      Technical Specifications
                    </h3>
                    <div className="rounded-xl border border-slate-200 overflow-hidden divide-y divide-slate-100 text-xs sm:text-sm">
                      {product.specifications.map((spec, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center justify-between p-3 sm:px-4 ${
                            idx % 2 === 0 ? "bg-slate-50/60" : "bg-white"
                          }`}
                        >
                          <span className="font-semibold text-slate-600">
                            {spec.label}
                          </span>
                          <span className="font-bold text-[var(--text-heading)] text-right">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons: Request Quote & Contact Hotline */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 border-t border-slate-100">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 text-sm sm:text-base font-bold text-white bg-[var(--primary-color)] hover:bg-[#065e6f] rounded-xl transition-all duration-200 shadow-md hover:shadow-lg gap-2 text-center hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Request a Quotation</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>

                  <a
                    href="tel:+919313888465"
                    className="inline-flex items-center justify-center px-6 py-4 text-sm sm:text-base font-semibold text-[var(--text-heading)] bg-slate-100 hover:bg-slate-200 rounded-xl transition-all duration-200 gap-2 text-center hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>📞 Call: +91 93138 88465</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* DETAILED FEATURES & APPLICATIONS GRID */}
        <StaggerContainer
          staggerDelay={0.1}
          delay={0.15}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {/* Left: Engineering Features */}
          {product.features && product.features.length > 0 && (
            <StaggerItem index={0} direction="up" className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              <h3 className="text-lg font-bold text-[var(--text-heading)] mb-5 flex items-center gap-2">
                <span>⚡</span>
                <span>Engineering Features & Advantages</span>
              </h3>
              <ul className="space-y-3.5">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[var(--gray-color)]">
                    <span className="h-5 w-5 rounded-full bg-teal-50 text-[var(--primary-color)] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </StaggerItem>
          )}

          {/* Right: Applications & Standards */}
          <StaggerItem index={1} direction="up" className="flex flex-col gap-6">
            {/* Applications */}
            {product.applications && product.applications.length > 0 && (
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs flex-1">
                <h3 className="text-lg font-bold text-[var(--text-heading)] mb-5 flex items-center gap-2">
                  <span>🏭</span>
                  <span>Primary Industry Applications</span>
                </h3>
                <ul className="space-y-3">
                  {product.applications.map((app, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-sm text-[var(--gray-color)]">
                      <span className="w-2 h-2 rounded-full bg-[var(--primary-color)]" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Compliance Standards */}
            {product.compliance && product.compliance.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                  Tested & Verified Against Standards
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.compliance.map((standard, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-100 border border-slate-200 text-[var(--text-dark)] rounded-lg text-xs font-bold"
                    >
                      {standard}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </StaggerItem>
        </StaggerContainer>

        {/* RELATED PRODUCTS SECTION */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <Reveal direction="up" delay={0.1} duration={0.65}>
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold text-[var(--primary-color)] tracking-wider uppercase block mb-1">
                  EXPLORE MORE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-heading)]">
                  Related Earthing Systems
                </h3>
              </div>
              <Link
                href="/products"
                className="text-xs sm:text-sm font-semibold text-[var(--primary-color)] hover:underline"
              >
                View Full Range →
              </Link>
            </div>
          </Reveal>

          <StaggerContainer
            staggerDelay={0.08}
            delay={0.15}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {relatedProducts.map((rel, idx) => (
              <StaggerItem key={rel.id} index={idx} direction="up" className="h-full">
                <Link
                  href={`/products/${rel.id}`}
                  className="group h-full bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-[var(--primary-color)] uppercase tracking-wider block mb-2">
                      {rel.badge || rel.category}
                    </span>
                    <div className="relative w-full h-40 mb-3 flex items-center justify-center bg-slate-50 rounded-xl p-2 overflow-hidden">
                      <Image
                        src={rel.image}
                        alt={rel.title}
                        fill
                        sizes="300px"
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="font-bold text-[var(--text-heading)] text-sm group-hover:text-[var(--primary-color)] transition-colors">
                      {rel.title}
                    </h4>
                  </div>
                  <div className="flex items-center justify-between pt-4 mt-2 border-t border-slate-100 text-xs font-semibold text-[var(--primary-color)]">
                    <span>View Details</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </main>
  );
}
