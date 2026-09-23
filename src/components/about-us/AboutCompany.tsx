import Image from "next/image";

export default function AboutCompany() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Side Label Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Side Heading & Visual Statement */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-base font-bold text-[var(--primary-color)] tracking-widest uppercase mb-3">
                <span className="block w-6 h-[2px] bg-[var(--primary-color)]" />
                COMPANY OVERVIEW
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f172a] leading-tight mb-4">
                About Pratiksha
              </h2>
              <p className="text-sm font-medium text-[var(--gray-color)] uppercase tracking-wide">
                Grounding & Electrical Safety Engineering
              </p>
            </div>

            {/* Industrial Installation Detail Image */}
            <div className="mt-8 relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-slate-200 shadow-sm hidden lg:block">
              <Image
                src="/images/substation-installation.webp"
                alt="Industrial substation earthing installation"
                fill
                sizes="350px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Editorial Text Flow */}
          <div className="lg:col-span-8 flex flex-col justify-center space-y-6">
            {/* Primary Paragraph with Lead Styling */}
            <p className="text-lg sm:text-xl font-medium text-[#0f172a] leading-relaxed border-l-2 border-[var(--primary-color)] pl-5">
              Pratiksha Earthing Solutions is a Rajkot-based business focused on
              earthing and electrical safety products designed for residential,
              commercial and industrial applications.
            </p>

            {/* Supporting Content Paragraphs */}
            <p className="text-sm sm:text-base text-[var(--gray-color)] leading-relaxed pl-5">
              With a focus on dependable grounding performance, our product
              range includes copper-bonded earthing electrodes, GI earthing
              electrodes, chemical earthing solutions, copper earthing products,
              earthing rods, strips and earthing accessories.
            </p>

            <p className="text-sm sm:text-base text-[var(--gray-color)] leading-relaxed pl-5">
              Available listings for the Pratiksha brand show products in copper
              and galvanized iron, including copper-coated/copper-bonded rods
              and chemical earthing electrodes.
            </p>

            {/* Mobile Visual */}
            <div className="mt-6 relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-slate-200 shadow-sm block lg:hidden">
              <Image
                src="/images/substation-installation.webp"
                alt="Industrial substation earthing installation"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
