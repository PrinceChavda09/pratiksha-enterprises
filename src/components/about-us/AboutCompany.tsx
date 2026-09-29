import Image from "next/image";
import { Reveal } from "@/components/animations";

export default function AboutCompany() {
  return (
    <section className="w-full bg-white py-10 sm:py-16 lg:py-24 border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <Reveal direction="up" delay={0.1} duration={0.65}>
              <div className="max-w-lg text-center lg:text-left mx-auto lg:mx-0">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-3 sm:mb-5">
                  <span className="w-6 h-[2px] bg-[var(--primary-color)]" />
                  <span className="text-sm sm:text-base font-bold text-[var(--primary-color)] tracking-[0.18em] uppercase">
                    COMPANY OVERVIEW
                  </span>
                </div>

                <h2 className="text-xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-heading)] leading-tight tracking-tight mb-3 sm:mb-5 text-center lg:text-left">
                  About Pratiksha
                </h2>

                <p className="text-sm sm:text-base font-semibold text-[var(--gray-color)] uppercase tracking-[0.1em] text-center lg:text-left">
                  Grounding & Electrical Safety Engineering
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2} duration={0.7} className="relative mt-10">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-200 group">
                <Image
                  src="/images/installation-substation.webp"
                  alt="Industrial substation earthing installation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal direction="up" delay={0.2} duration={0.65}>
              <div className="border-t border-slate-200">
                <div className="py-5 sm:py-8 border-b border-slate-200">
                  <p className="text-[14px] sm:text-2xl font-medium text-[var(--text-heading)] leading-relaxed text-center lg:text-left">
                    Pratiksha Earthing Solutions is a Rajkot based business focused
                    on earthing and electrical safety products designed for
                    residential, commercial and industrial applications.
                  </p>
                </div>

                <div className="py-5 sm:py-8 border-b border-slate-200">
                  <p className="text-sm sm:text-base text-[var(--gray-color)] leading-8 text-center lg:text-left">
                    With a focus on dependable grounding performance, our product
                    range includes copper bonded earthing electrodes, GI earthing
                    electrodes, chemical earthing solutions, copper earthing
                    products, earthing rods, strips and earthing accessories.
                  </p>
                </div>

                <div className="pt-7 sm:pt-8">
                  <p className="text-sm sm:text-base text-[var(--gray-color)] leading-8 text-center lg:text-left">
                    Available listings for the Pratiksha brand show products in
                    copper and galvanized iron, including copper coated/copper bonded
                    rods and chemical earthing electrodes.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
