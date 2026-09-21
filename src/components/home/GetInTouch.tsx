import Link from "next/link";

export default function GetInTouch() {
  return (
    <section
      id="get-in-touch"
      className="relative w-full py-20 md:py-24 lg:py-28 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 35%, rgba(255, 255, 255, 0.12) 0%, rgba(0, 0, 0, 0.15) 100%), var(--primary-color)",
      }}
      aria-labelledby="get-in-touch-heading"
    >
      {/* Subtle decorative technical grid pattern for industrial feel without distraction */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <span className="text-xs sm:text-sm font-semibold tracking-widest text-teal-100 uppercase mb-3.5 sm:mb-4 block">
          GET IN TOUCH
        </span>

        {/* Main Heading */}
        <h2
          id="get-in-touch-heading"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight tracking-tight mb-4 sm:mb-5"
        >
          Need a Reliable Earthing Solution?
        </h2>

        {/* Supporting Description */}
        <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 font-normal">
          Discuss your technical requirement with the Pratiksha Earthing
          Solutions engineering team.
          <br className="hidden sm:inline" /> We deliver custom sizing, CPRI
          certification reports, and factory quotes within 24 hours.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          {/* Secondary CTA: Contact Us */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-transparent hover:bg-white/10 active:bg-white/15 border border-white/80 hover:border-white rounded-[7px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--primary-color)] w-full sm:w-auto min-w-[155px]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
