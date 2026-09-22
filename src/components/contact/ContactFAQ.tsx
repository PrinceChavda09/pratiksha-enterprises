"use client";

import React, { useState } from "react";

export default function ContactFAQ() {
  const faqs = [
    {
      q: "How fast can you dispatch bulk orders across India?",
      a: "Standard sizes of copper bonded rods (14mm, 17mm) and SRIP backfill compound bags are stocked in large volumes at our Rajkot plant. We dispatch standard inventory within 24 to 48 hours via established logistics freight partners.",
    },
    {
      q: "Do you supply customized electrode lengths or copper micron thickness?",
      a: "Yes. In addition to standard 250-micron molecularly bonded rods, we manufacture custom diameters, lengths (up to 3 meters or extendable threaded couplings), and higher micron coatings to meet specific project tenders.",
    },
    {
      q: "What test certificates and compliance reports accompany shipments?",
      a: "Every commercial dispatch includes manufacturer test certificates (MTC) and NABL/CPRI test reports verifying copper adhesion, tensile strength, and electrical conductivity under IS 3043 & IEEE 80 standards.",
    },
    {
      q: "Can your team assist with soil resistivity and earth pit calculation?",
      a: "Yes. Our technical team provides consultation for soil resistivity analysis (Wenner 4-pin method interpretation) and helps determine the optimal pit design to achieve target resistance under 1 Ohm or 0.5 Ohm.",
    },
    {
      q: "How does the SRIP carbon compound perform in rocky or dry terrain?",
      a: "SRIP compound is engineered with hygroscopic conductivity enhancers that retain moisture and maintain low soil resistivity over seasonal dry spells without requiring frequent water recharging.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[var(--primary-color)]" />
            <span className="text-xs font-bold text-[var(--primary-color)] tracking-widest uppercase">
              GOT QUESTIONS?
            </span>
            <span className="w-5 h-[2px] bg-[var(--primary-color)]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Everything you need to know about our products, direct supply contracts, and engineering assistance.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer hover:bg-slate-50/75 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0f172a]">
                    {faq.q}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-sm font-semibold transition-transform duration-300 ${
                      isOpen
                        ? "bg-[var(--primary-color)] text-white rotate-180"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    ↓
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
