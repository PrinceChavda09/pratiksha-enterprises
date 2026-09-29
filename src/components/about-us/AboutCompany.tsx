import Image from "next/image";

export default function AboutCompany() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <div className="max-w-lg">
              <div className="flex items-center gap-3 mb-3 sm:mb-5 ">
                <span className="w-6 h-[2px] bg-[var(--primary-color)]" />
                <span className="text-sm sm:text-base font-bold text-[var(--primary-color)] tracking-[0.18em] uppercase">
                  COMPANY OVERVIEW
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a] leading-tight tracking-tight mb-3 sm:mb-5">
                About Pratiksha
              </h2>

              <p className="text-sm sm:text-base font-semibold text-[var(--gray-color)] uppercase tracking-[0.1em]">
                Grounding & Electrical Safety Engineering
              </p>
            </div>

            <div className="relative mt-10">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-200">
                <Image
                  src="/images/installation-substation.webp"
                  alt="Industrial substation earthing installation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border-t border-slate-200">
              <div className="py-7 sm:py-8 border-b border-slate-200">
                <p className="text-xl sm:text-2xl font-medium text-[#0f172a] leading-relaxed">
                  Pratiksha Earthing Solutions is a Rajkot-based business focused
                  on earthing and electrical safety products designed for
                  residential, commercial and industrial applications.
                </p>
              </div>

              <div className="py-7 sm:py-8 border-b border-slate-200">
                <p className="text-sm sm:text-base text-[var(--gray-color)] leading-8">
                  With a focus on dependable grounding performance, our product
                  range includes copper-bonded earthing electrodes, GI earthing
                  electrodes, chemical earthing solutions, copper earthing
                  products, earthing rods, strips and earthing accessories.
                </p>
              </div>

              <div className="pt-7 sm:pt-8">
                <p className="text-sm sm:text-base text-[var(--gray-color)] leading-8">
                  Available listings for the Pratiksha brand show products in
                  copper and galvanized iron, including copper-coated/copper-bonded
                  rods and chemical earthing electrodes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
