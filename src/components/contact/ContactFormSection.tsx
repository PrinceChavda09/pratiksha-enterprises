"use client";

import React, { useState, useRef, useEffect } from "react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { WhatsAppIcon, PhoneIcon } from "@/components/icon";

const productOptions = [
  "Pure Copper Earthing Electrodes",
  "SRIP Advanced Backfill Compound",
  "Copper Bonded Chemical Earthing Rods",
  "High-Voltage Substation Grounding",
  "Heavy-Duty Earth Busbars & Clamps",
  "Turnkey Industrial Grounding Solution",
];

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "Pure Copper Earthing Electrodes",
    quantity: "",
    message: "",
  });

  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsProductDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section
      id="contact-form"
      className="py-10 sm:py-20 lg:py-24 bg-white relative scroll-mt-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal direction="up" delay={0.1} duration={0.65}>
          <div className="max-w-3xl mb-12 sm:mb-16 text-center lg:text-left mx-auto lg:mx-0">
            <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-2.5 mb-3">
              <span className="w-7 sm:w-8 h-[2px] bg-[var(--primary-color)] rounded-full shrink-0" />
              <span className="text-[11px] sm:text-xs md:text-sm font-bold text-[var(--primary-color)] tracking-wider sm:tracking-widest uppercase">
                TECHNICAL INQUIRY & QUOTES
              </span>
            </div>
            <h2 className="text-xl sm:text-4xl font-extrabold text-[var(--text-heading)] tracking-tight">
              Send Us Your Project Requirements
            </h2>
            <p className="mt-3 text-[14px] text-[var(--gray-color)] max-w-2xl mx-auto lg:mx-0">
              Whether you need bulk earthing electrodes for a solar park,
              substation grounding design, or custom copper bonded rods, our
              engineering team responds within 2 business hours.
            </p>
          </div>
        </Reveal>

        {/* Form & Assurance Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT: INTERACTIVE FORM (7 Cols) */}
          <Reveal
            direction="up"
            delay={0.15}
            duration={0.65}
            className="lg:col-span-7"
          >
            <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm relative">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--text-heading)] mb-2">
                    Thank You for Reaching Out!
                  </h3>
                  <p className="text-[var(--gray-color)] max-w-md mx-auto mb-6 text-sm sm:text-base">
                    Your inquiry has been received by our technical sales
                    engineering team. We will review your requirements and send
                    a customized quote shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        company: "",
                        email: "",
                        phone: "",
                        product: "Pure Copper Earthing Electrodes",
                        quantity: "",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 bg-[var(--primary-color)] text-white text-sm font-semibold rounded-xl hover:bg-[#065e6f] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] focus-visible:ring-offset-2"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 sm:space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-[var(--text-heading)] uppercase tracking-wider mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Patel"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 text-sm text-[var(--text-dark)] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-xs font-semibold text-[var(--text-heading)] uppercase tracking-wider mb-2">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Sterling Infrastructure"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 text-sm text-[var(--text-dark)] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-[var(--text-heading)] uppercase tracking-wider mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 text-sm text-[var(--text-dark)] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold text-[var(--text-heading)] uppercase tracking-wider mb-2">
                        Phone / WhatsApp Number{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 text-sm text-[var(--text-dark)] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Product of Interest */}
                    <div
                      ref={dropdownRef}
                      className={`relative ${isProductDropdownOpen ? "z-30" : "z-10"}`}
                    >
                      <label className="block text-xs font-semibold text-[var(--text-heading)] uppercase tracking-wider mb-2">
                        Product / Solution
                      </label>
                      <button
                        type="button"
                        onClick={() => setIsProductDropdownOpen((prev) => !prev)}
                        className={`w-full px-4 py-3 bg-white rounded-xl border text-sm text-left flex items-center justify-between cursor-pointer transition-all ${
                          isProductDropdownOpen
                            ? "border-[var(--primary-color)] ring-2 ring-[var(--primary-color)]/20 shadow-sm"
                            : "border-slate-200 hover:border-slate-300"
                        }`}
                        aria-haspopup="listbox"
                        aria-expanded={isProductDropdownOpen}
                      >
                        <span className="truncate text-[var(--text-dark)] font-medium">
                          {formData.product}
                        </span>
                        <svg
                          className={`w-4 h-4 ml-2 text-[var(--gray-color)] shrink-0 transition-transform duration-200 ${
                            isProductDropdownOpen
                              ? "rotate-180 text-[var(--primary-color)]"
                              : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Simple Custom Site-Related Dropdown Menu */}
                      {isProductDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-xl border border-slate-200 shadow-xl py-1 z-50">
                          <div className="max-h-60 overflow-y-auto">
                            {productOptions.map((option) => {
                              const isSelected = formData.product === option;
                              return (
                                <button
                                  key={option}
                                  type="button"
                                  onClick={() => {
                                    setFormData({
                                      ...formData,
                                      product: option,
                                    });
                                    setIsProductDropdownOpen(false);
                                  }}
                                  className={`w-full text-left px-4 py-2.5 text-sm cursor-pointer transition-colors flex items-center justify-between ${
                                    isSelected
                                      ? "bg-[color-mix(in_srgb,var(--primary-color)_10%,transparent)] text-[var(--primary-color)] font-semibold"
                                      : "text-[var(--text-dark)] hover:bg-slate-50 hover:text-[var(--primary-color)]"
                                  }`}
                                >
                                  <span className="truncate">{option}</span>
                                  {isSelected && (
                                    <svg
                                      className="w-4 h-4 text-[var(--primary-color)] shrink-0 ml-2"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                      strokeWidth="2.5"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 13l4 4L19 7"
                                      />
                                    </svg>
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Estimated Quantity */}
                    <div>
                      <label className="block text-xs font-semibold text-[var(--text-heading)] uppercase tracking-wider mb-2">
                        Approximate Quantity
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 50 rods / 100 bags"
                        value={formData.quantity}
                        onChange={(e) =>
                          setFormData({ ...formData, quantity: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 text-sm text-[var(--text-dark)] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-[var(--text-heading)] uppercase tracking-wider mb-2">
                      Project Requirements / Specifications
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Provide details about soil conditions, target earth resistance (&lt; 1 Ohm), site location, or delivery timeline..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 text-sm text-[var(--text-dark)] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="flex sm:justify-start pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-auto gap-2 px-7 sm:px-8 py-3 sm:py-3.5 bg-[var(--primary-color)] hover:bg-[#065e6f] text-white text-sm sm:text-base font-semibold rounded-xl shadow-[0_4px_16px_color-mix(in_srgb,var(--primary-color)_30%,transparent)] hover:shadow-[0_8px_24px_color-mix(in_srgb,var(--primary-color)_45%,transparent)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] focus-visible:ring-offset-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v8H4z"
                            />
                          </svg>
                          <span>Processing Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>

          {/* RIGHT: FACTORY ASSURANCE & DIRECT DESK (5 Cols) */}
          <StaggerContainer
            staggerDelay={0.1}
            delay={0.2}
            className="lg:col-span-5 space-y-6"
          >
            {/* Direct Factory Assurance Card */}
            <StaggerItem index={0} direction="up">
              <div className="bg-gradient-to-br from-[var(--bg-dark)] to-[#334155] text-white rounded-3xl p-6 sm:p-8 shadow-xl">
                <span className="text-xs font-bold text-[var(--primary-color)] tracking-widest uppercase block mb-2">
                  DIRECT MANUFACTURER ADVANTAGE
                </span>
                <h3 className="text-xl font-bold mb-3">
                  Why Procure Direct From Pratiksha?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Avoid middleman markups and delayed lead times. We engineer,
                  test, and ship directly from our Rajkot manufacturing
                  facilities with full compliance certificates.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        NABL & CPRI Tested Compliance
                      </h4>
                      <p className="text-xs text-slate-400">
                        Manufactured strictly to IS 3043 and IEEE 80 standards.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Direct-From-Plant Pricing
                      </h4>
                      <p className="text-xs text-slate-400">
                        Competitive bulk rates for contractors and
                        infrastructure projects.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Pan-India Freight Logistics
                      </h4>
                      <p className="text-xs text-slate-400">
                        Dependable transit tie-ups ensuring timely site
                        delivery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* Need Urgent Dispatch? */}
            <StaggerItem index={1} direction="up">
              <div className="bg-[#F4FAFC] border border-[color-mix(in_srgb,var(--primary-color)_25%,transparent)] rounded-2xl p-6 sm:p-7">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-sm font-bold text-[var(--text-heading)] uppercase tracking-wider">
                    Urgent Project Requirement?
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[var(--gray-color)] mb-4">
                  Speak directly with our technical commercial director for
                  same-day dispatch and proforma invoicing.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+919313888465"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[var(--primary-color)] hover:bg-[#065e6f] rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] focus-visible:ring-offset-2"
                  >
                    <PhoneIcon className="w-4 h-4 shrink-0" />
                    <span>Call +91 93138 88465</span>
                  </a>
                  <a
                    href="https://wa.me/919313888465?text=Hello%20Pratiksha%20Enterprises,%20I%20have%20an%20urgent%20earthing%20quote%20request."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] focus-visible:ring-offset-2"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>WhatsApp Priority</span>
                  </a>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
