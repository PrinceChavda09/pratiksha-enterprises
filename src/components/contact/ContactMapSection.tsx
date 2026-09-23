import React from "react";

export default function ContactMapSection() {
  const address =
    "305, Royal Complex, Dhebar Rd, Millpara, Bhutkhana Chowk, Rajkot, Gujarat 360002.";

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    "Royal Complex, Dhebar Rd, Millpara, Bhutkhana Chowk, Rajkot, Gujarat 360002, India"
  )}`;

  // Precise Google Maps embed query pointing directly to Royal Complex, Dhebar Road, Rajkot
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    "Royal Complex, Dhebar Rd, Millpara, Rajkot, Gujarat 360002"
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section
      id="map-section"
      className="py-16 sm:py-20 bg-[#F8FAFC] border-t border-slate-200/80 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* LEFT: LOCATION DETAILS & DIRECTIONS (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[2px] bg-[var(--primary-color)]" />
                <span className="text-base font-bold text-[var(--primary-color)] tracking-widest uppercase">
                  HEADQUARTERS & MANUFACTURING
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
                Visit Our Rajkot Facility
              </h2>
              <p className="mt-3 text-sm text-[var(--gray-color)] leading-relaxed">
                Located in the heart of Gujarat&apos;s industrial manufacturing
                capital, our central warehouse and corporate office coordinate
                dispatches nationwide.
              </p>
            </div>

            {/* Address Box */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[color-mix(in_srgb,var(--primary-color)_10%,transparent)] text-[var(--primary-color)] flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0f172a]">
                    Pratiksha Enterprises
                  </h4>
                  <p className="text-xs text-[var(--gray-color)] mt-1 leading-relaxed">
                    {address}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-2 text-[11px] font-semibold text-[var(--gray-color)]">
                <span className="bg-slate-100 px-2.5 py-1 rounded-md">
                  Near ST Bus Station
                </span>
                <span className="bg-slate-100 px-2.5 py-1 rounded-md">
                  Freight Corridor Access
                </span>
                <span className="bg-slate-100 px-2.5 py-1 rounded-md">
                  Bhutkhana Chowk
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--primary-color)] hover:bg-[#065e6f] text-white text-sm font-semibold rounded-xl transition-all shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2"
              >
                <span>Get Directions on Google Maps</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* RIGHT: INTERACTIVE MAP (7 Cols) */}
          <div className="lg:col-span-7 h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/90 relative bg-slate-100">
            <iframe
              title="Pratiksha Enterprises - 305, Royal Complex, Bhutkhana Chowk, Dhebar Rd, Rajkot"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
