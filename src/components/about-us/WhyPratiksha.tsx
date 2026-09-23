export default function WhyPratiksha() {
  const points = [
    {
      number: "01",
      title: "Quality-Focused Products",
      desc: "We focus on materials and products intended for dependable electrical grounding applications.",
    },
    {
      number: "02",
      title: "Reliable Solutions",
      desc: "Our product range covers different grounding requirements, from conventional GI solutions to copper and chemical earthing systems.",
    },
    {
      number: "03",
      title: "Application-Focused Approach",
      desc: "Products are available for applications including industrial, commercial and other electrical installations.",
    },
    {
      number: "04",
      title: "Rajkot-Based Support",
      desc: "The available business listings place Pratiksha Enterprise in Rajkot, Gujarat, with its listed address at 305, Royal Complex, Bhutkhana Chowk, South Dhebar Road, Rajkot – 360002.",
    },
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Large Editorial Typography */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-[var(--primary-color)]" />
                <span className="text-base font-bold text-[var(--primary-color)] tracking-widest uppercase">
                  WHY PRATIKSHA
                </span>
              </div>
              <p className="text-base text-[var(--gray-color)] leading-relaxed max-w-md">
                Dependable grounding solutions built around material quality,
                practical engineering support, and reliable electrical protection.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 hidden lg:block">
              <span className="text-xs font-semibold text-[var(--gray-color)] uppercase tracking-wider block mb-1">
                Headquarters
              </span>
              <p className="text-sm font-bold text-[#0f172a]">
                Rajkot, Gujarat — India
              </p>
            </div>
          </div>

          {/* Right Column: Clean Editorial Numbered List with Thin Dividers (No Cards, No Shadows) */}
          <div className="lg:col-span-7 divide-y divide-slate-200 border-y border-slate-200">
            {points.map((point) => (
              <div
                key={point.number}
                className="py-6 sm:py-7 flex items-start gap-5 sm:gap-6 group"
              >
                {/* Number */}
                <span className="text-xl sm:text-2xl font-bold text-[var(--gray-color)] group-hover:text-[var(--primary-color)] transition-colors shrink-0 mt-0.5">
                  {point.number}
                </span>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-[#0f172a] group-hover:text-[var(--primary-color)] transition-colors mb-1.5">
                    {point.title}
                  </h3>
                  <p className="text-sm text-[var(--gray-color)] leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
