import { Reveal, StaggerContainer, StaggerItem } from "@/components/animations";

export default function OurCommitment() {
  return (
    <section className="w-full bg-white py-12 sm:py-20 lg:py-28 border-b border-slate-200/80 relative overflow-hidden">
      {/* Subtle Engineering Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--text-heading) 1px, transparent 1px), linear-gradient(to bottom, var(--text-heading) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <Reveal direction="up" delay={0.1} duration={0.6}>
          <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 mb-4 sm:mb-6">
            <span className="w-5 sm:w-8 h-[2px] bg-[var(--primary-color)] shrink-0" />
            <span className="text-xs sm:text-sm md:text-base font-bold text-[var(--primary-color)] tracking-widest uppercase">
              OUR COMMITMENT
            </span>
          </div>

          {/* Oversized Statement */}
          <div className="mb-6 sm:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--text-heading)] leading-[1.2] sm:leading-[1.1] tracking-tight uppercase max-w-5xl text-center md:text-left mx-auto md:mx-0">
              Engineering dependable grounding solutions for safer electrical systems.
            </h2>
          </div>
        </Reveal>

        {/* Supporting Content Grid */}
        <StaggerContainer
          staggerDelay={0.08}
          delay={0.18}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-14 pt-6 sm:pt-8 border-t border-slate-200 text-[var(--gray-color)] text-sm sm:text-base lg:text-lg leading-relaxed text-center md:text-left"
        >
          <StaggerItem index={0} direction="up">
            <p>
              At Pratiksha, our goal is to provide practical earthing products that
              help customers address their electrical grounding requirements with
              confidence.
            </p>
          </StaggerItem>
          <StaggerItem index={1} direction="up">
            <p>
              Whether the requirement is for an industrial facility, commercial
              installation, solar project, electrical equipment or general
              grounding application, our product range is designed to support
              different earthing needs.
            </p>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
