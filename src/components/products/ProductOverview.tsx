export default function ProductOverview() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline">
          {/* Left Column: Small Label */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-bold text-[var(--primary-color)] tracking-widest uppercase">
                PRODUCT RANGE
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Overview */}
          <div className="lg:col-span-9">
            <p className="text-base sm:text-lg text-[var(--gray-color)] leading-relaxed max-w-4xl font-normal">
              Our catalogue encompasses precision-engineered earthing solutions
              designed for dependable ground fault dissipation, system protection,
              and low soil resistivity across demanding industrial, commercial,
              and utility-scale environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
