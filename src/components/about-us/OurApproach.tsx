import { Reveal, StaggerContainer, StaggerItem } from "@/components/animations";

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
    <section className="w-full bg-[#F8FAFC] py-12 sm:py-16 lg:py-24 border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal direction="up" delay={0.1} duration={0.65}>
          <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <span className="w-5 sm:w-6 h-[2px] bg-[var(--primary-color)] shrink-0" />
              <span className="text-xs sm:text-sm md:text-base font-bold text-[var(--primary-color)] tracking-widest uppercase">
                OUR APPROACH
              </span>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-[var(--gray-color)] leading-relaxed">
              We believe effective earthing is an important part of electrical
              safety. Our solutions are focused on providing reliable grounding
              performance, suitable material selection and practical solutions for
              different installation requirements.
            </p>
          </div>
        </Reveal>

        {/* Process-Style Horizontal Numbered Row */}
        <StaggerContainer
          staggerDelay={0.1}
          delay={0.15}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 border-t border-slate-200 pt-8 sm:pt-10 lg:pt-12"
        >
          {pillars.map((pillar, index) => (
            <StaggerItem
              key={pillar.number}
              index={index}
              direction="up"
              className="flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2.5 sm:pb-3 border-b border-slate-200">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[var(--primary-color)]">
                    {pillar.number}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[var(--text-heading)] mb-1.5 sm:mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--gray-color)] leading-relaxed">
                  {pillar.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom Editorial Quote Bar */}
        <Reveal direction="up" delay={0.2} duration={0.65}>
          <div className="mt-8 sm:mt-12 lg:mt-16 bg-white p-4 sm:p-6 lg:p-8 rounded-lg border border-slate-200/90 shadow-sm transition-all duration-300 hover:shadow-md">
            <p className="text-xs sm:text-sm md:text-base font-medium text-[var(--gray-color)] leading-relaxed italic">
              &ldquo;From individual earthing components to complete grounding
              requirements, we aim to provide products that are practical, durable
              and suitable for demanding electrical environments.&rdquo;
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
