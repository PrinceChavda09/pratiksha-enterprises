export default function OurApproach() {
  const pillars = [
    {
      number: "01",
      title: "Electrical Safety",
      text: "We believe effective earthing is an important part of electrical safety.",
    },
    {
      number: "02",
      title: "Suitable Material Selection",
      text: "Our solutions are focused on providing reliable grounding performance and suitable material selection.",
    },
    {
      number: "03",
      title: "Practical Installation Requirements",
      text: "Practical solutions for different installation requirements, from individual components to complete grounding needs.",
    },
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[2px] bg-[var(--primary-color)]" />
            <span className="text-base font-bold text-[var(--primary-color)] tracking-widest uppercase">
              OUR APPROACH
            </span>
          </div>
          <p className="text-base sm:text-lg text-[var(--gray-color)] leading-relaxed">
            We believe effective earthing is an important part of electrical
            safety. Our solutions are focused on providing reliable grounding
            performance, suitable material selection and practical solutions for
            different installation requirements.
          </p>
        </div>

        {/* Process-Style Horizontal Numbered Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 border-t border-slate-200 pt-10 sm:pt-12">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[var(--primary-color)]">
                    {pillar.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[var(--gray-color)] leading-relaxed">
                  {pillar.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Quote Bar */}
        <div className="mt-12 sm:mt-16 bg-white p-6 sm:p-8 rounded-lg border border-slate-200/90 shadow-sm">
          <p className="text-sm sm:text-base font-medium text-[var(--gray-color)] leading-relaxed italic">
            &ldquo;From individual earthing components to complete grounding
            requirements, we aim to provide products that are practical, durable
            and suitable for demanding electrical environments.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
