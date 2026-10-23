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

const defaultCitySuggestions = [
  "Rajkot",
  "Ahmedabad",
  "Surat",
  "Vadodara",
  "Gandhinagar",
  "Jamnagar",
  "Morbi",
  "Bhavnagar",
  "Junagadh",
  "Mumbai",
  "Pune",
  "Delhi",
  "Bengaluru",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Jaipur",
  "Indore",
  "Nagpur",
  "Noida",
  "Chandigarh",
  "Lucknow",
  "Bhopal",
  "Visakhapatnam",
  "Patna",
];

// Existing verified business WhatsApp destination configured in this section
const BUSINESS_WHATSAPP_NUMBER = "919909920314";

/**
 * Format submitted inquiry details into a clean, professional WhatsApp message
 */
function formatWhatsAppInquiry(data: {
  name: string;
  company?: string;
  email: string;
  phone: string;
  city: string;
  product?: string;
  quantity?: string;
  message?: string;
}): string {
  return [
    "Hello Pratiksha Enterprises,",
    "",
    "*New Website Inquiry — Pratiksha Earthing Solutions*",
    "",
    "*Customer Details*",
    `• Name: ${data.name}`,
    `• Company: ${data.company || "Not provided"}`,
    `• Email: ${data.email}`,
    `• Phone: ${data.phone}`,
    `• City: ${data.city}`,
    "",
    "*Product Requirements*",
    `• Product / Solution: ${data.product || "Pure Copper Earthing Electrodes"}`,
    `• Approximate Quantity: ${data.quantity || "Not provided"}`,
    `• Project Specifications: ${data.message || "Not provided"}`,
    "",
    "Source: Website Project Enquiry Form",
  ].join("\n");
}

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    city: "",
    product: "Pure Copper Earthing Electrodes",
    quantity: "",
    message: "",
  });

  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [cityError, setCityError] = useState("");
  const [activeCityIndex, setActiveCityIndex] = useState(-1);
  const cityDropdownRef = useRef<HTMLDivElement>(null);
  const cityInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsProductDropdownOpen(false);
      }
      if (
        cityDropdownRef.current &&
        !cityDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCityDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Ensure active keyboard-navigated city option stays visible within the scrollable dropdown
  useEffect(() => {
    if (activeCityIndex >= 0 && isCityDropdownOpen) {
      const activeEl = document.getElementById(
        `city-option-${activeCityIndex}`,
      );
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest" });
      }
    }
  }, [activeCityIndex, isCityDropdownOpen]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState("");

  // Filtered suggestions based on typed input
  const trimmedCityQuery = formData.city.trim();
  const filteredCities = defaultCitySuggestions.filter((c) =>
    c.toLowerCase().includes(trimmedCityQuery.toLowerCase()),
  );
  const hasExactCityMatch = defaultCitySuggestions.some(
    (c) => c.toLowerCase() === trimmedCityQuery.toLowerCase(),
  );
  const showCustomCityOption =
    trimmedCityQuery.length > 0 && !hasExactCityMatch;

  // Flattened selectable items for keyboard navigation (arrows/enter)
  const citySelectableItems: { type: "suggested" | "custom"; value: string }[] =
    [
      ...filteredCities.map((c) => ({ type: "suggested" as const, value: c })),
      ...(showCustomCityOption
        ? [{ type: "custom" as const, value: trimmedCityQuery }]
        : []),
    ];

  const handleSelectCity = (selectedCity: string) => {
    setFormData((prev) => ({ ...prev, city: selectedCity }));
    if (cityError) setCityError("");
    setIsCityDropdownOpen(false);
    setActiveCityIndex(-1);
  };

  const handleCityKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!isCityDropdownOpen) {
        setIsCityDropdownOpen(true);
        setActiveCityIndex(0);
      } else if (citySelectableItems.length > 0) {
        setActiveCityIndex((prev) => (prev + 1) % citySelectableItems.length);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!isCityDropdownOpen) {
        setIsCityDropdownOpen(true);
        setActiveCityIndex(citySelectableItems.length - 1);
      } else if (citySelectableItems.length > 0) {
        setActiveCityIndex(
          (prev) =>
            (prev - 1 + citySelectableItems.length) %
            citySelectableItems.length,
        );
      }
    } else if (e.key === "Enter") {
      if (
        isCityDropdownOpen &&
        activeCityIndex >= 0 &&
        citySelectableItems[activeCityIndex]
      ) {
        e.preventDefault();
        handleSelectCity(citySelectableItems[activeCityIndex].value);
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      setIsCityDropdownOpen(false);
      setActiveCityIndex(-1);
    } else if (e.key === "Tab") {
      setIsCityDropdownOpen(false);
      setActiveCityIndex(-1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const finalCity = formData.city.trim();
    if (!finalCity) {
      setCityError("Please enter or select your city");
      setIsCityDropdownOpen(false);
      cityInputRef.current?.focus();
      return;
    }

    setCityError("");
    setIsSubmitting(true);

    const messageText = formatWhatsAppInquiry({
      name: formData.name.trim(),
      company: formData.company.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      city: finalCity,
      product: formData.product,
      quantity: formData.quantity.trim(),
      message: formData.message.trim(),
    });

    const waUrl = `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent(
      messageText,
    )}`;

    // Open WhatsApp in a new tab with prefilled inquiry message
    if (typeof window !== "undefined") {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    }

    setLastWhatsAppUrl(waUrl);
    setSubmitted(true);
    setIsSubmitting(false);
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
                    Inquiry Prepared for WhatsApp!
                  </h3>
                  <p className="text-[var(--gray-color)] max-w-md mx-auto mb-6 text-sm sm:text-base">
                    WhatsApp has opened with your prefilled inquiry details. You can review and send the message directly to our team. If WhatsApp did not open automatically, click below:
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    {lastWhatsAppUrl && (
                      <a
                        href={lastWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                      >
                        <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
                        <span>Open WhatsApp Chat</span>
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setLastWhatsAppUrl("");
                        setFormData({
                          name: "",
                          company: "",
                          email: "",
                          phone: "",
                          city: "",
                          product: "Pure Copper Earthing Electrodes",
                          quantity: "",
                          message: "",
                        });
                        setCityError("");
                      }}
                      className="px-6 py-2.5 bg-[var(--primary-color)] text-white text-sm font-semibold rounded-xl hover:bg-[#065e6f] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] focus-visible:ring-offset-2"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
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

                  {/* City with Searchable Dropdown & Custom Entry */}
                  <div
                    ref={cityDropdownRef}
                    className={`relative ${isCityDropdownOpen ? "z-30" : "z-10"}`}
                  >
                    <label
                      htmlFor="city-input"
                      className="block text-xs font-semibold text-[var(--text-heading)] uppercase tracking-wider mb-2"
                    >
                      City <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="city-input"
                        ref={cityInputRef}
                        type="text"
                        required
                        autoComplete="off"
                        role="combobox"
                        aria-autocomplete="list"
                        aria-expanded={isCityDropdownOpen}
                        aria-controls="city-listbox"
                        aria-activedescendant={
                          activeCityIndex >= 0
                            ? `city-option-${activeCityIndex}`
                            : undefined
                        }
                        placeholder="Search or enter your city"
                        value={formData.city}
                        onFocus={() => setIsCityDropdownOpen(true)}
                        onChange={(e) => {
                          setFormData({ ...formData, city: e.target.value });
                          if (cityError) setCityError("");
                          setIsCityDropdownOpen(true);
                          setActiveCityIndex(-1);
                        }}
                        onKeyDown={handleCityKeyDown}
                        className={`w-full px-4 py-3 pr-10 bg-white rounded-xl border text-sm text-[var(--text-dark)] placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                          cityError
                            ? "border-red-400 focus:ring-red-400/40"
                            : "border-slate-200 focus:ring-[var(--primary-color)]"
                        }`}
                      />
                      {/* Search / Location Pin Icon */}
                      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
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
                    </div>

                    {/* Inline Validation Error */}
                    {cityError && (
                      <p
                        id="city-error"
                        className="mt-1.5 text-xs text-red-600 font-medium flex items-center gap-1"
                        role="alert"
                      >
                        <svg
                          className="w-3.5 h-3.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        <span>{cityError}</span>
                      </p>
                    )}

                    {/* Searchable Dropdown Menu with Independent Scrolling & Overscroll Containment */}
                    {isCityDropdownOpen && (
                      <div
                        id="city-listbox"
                        role="listbox"
                        data-lenis-prevent
                        className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-xl border border-slate-200 shadow-xl py-1 z-50 max-h-[220px] sm:max-h-[250px] overflow-y-auto overscroll-contain touch-pan-y"
                        style={{
                          overscrollBehaviorY: "contain",
                          WebkitOverflowScrolling: "touch",
                          scrollbarWidth: "thin",
                        }}
                      >
                        {citySelectableItems.length > 0
                          ? citySelectableItems.map((item, idx) => {
                              const isSelected =
                                formData.city.trim().toLowerCase() ===
                                item.value.toLowerCase();
                              const isHighlighted = idx === activeCityIndex;

                              if (item.type === "custom") {
                                return (
                                  <button
                                    key={`custom-${item.value}`}
                                    id={`city-option-${idx}`}
                                    role="option"
                                    aria-selected={isSelected}
                                    type="button"
                                    onMouseDown={(e) => {
                                      e.preventDefault();
                                      handleSelectCity(item.value);
                                    }}
                                    className={`w-full text-left px-4 py-2.5 text-sm cursor-pointer transition-colors flex items-center justify-between border-t border-slate-100 ${
                                      isHighlighted
                                        ? "bg-[color-mix(in_srgb,var(--primary-color)_10%,transparent)] text-[var(--primary-color)] font-semibold"
                                        : "text-[var(--text-heading)] hover:bg-slate-50 hover:text-[var(--primary-color)]"
                                    }`}
                                  >
                                    <span className="flex items-center gap-2 truncate">
                                      <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200/80">
                                        Custom
                                      </span>
                                      <span className="truncate">
                                        Use &ldquo;{item.value}&rdquo;
                                      </span>
                                    </span>
                                    <span className="text-xs text-[var(--primary-color)] font-medium shrink-0 ml-2">
                                      Enter ↵
                                    </span>
                                  </button>
                                );
                              }

                              return (
                                <button
                                  key={item.value}
                                  id={`city-option-${idx}`}
                                  role="option"
                                  aria-selected={isSelected}
                                  type="button"
                                  onMouseDown={(e) => {
                                    e.preventDefault();
                                    handleSelectCity(item.value);
                                  }}
                                  className={`w-full text-left px-4 py-2.5 text-sm cursor-pointer transition-colors flex items-center justify-between ${
                                    isHighlighted || isSelected
                                      ? "bg-[color-mix(in_srgb,var(--primary-color)_10%,transparent)] text-[var(--primary-color)] font-semibold"
                                      : "text-[var(--text-dark)] hover:bg-slate-50 hover:text-[var(--primary-color)]"
                                  }`}
                                >
                                  <span className="truncate">{item.value}</span>
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
                            })
                          : null}
                      </div>
                    )}
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
                        onClick={() =>
                          setIsProductDropdownOpen((prev) => !prev)
                        }
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
                        <div
                          data-lenis-prevent
                          className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-xl border border-slate-200 shadow-xl py-1 z-50"
                        >
                          <div
                            data-lenis-prevent
                            className="max-h-60 overflow-y-auto overscroll-contain touch-pan-y"
                            style={{
                              overscrollBehaviorY: "contain",
                              WebkitOverflowScrolling: "touch",
                            }}
                          >
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
                        ISO Certified
                      </h4>
                      <p className="text-xs text-slate-400">
                        Quality Management System
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
                    href="tel:+919909920314"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[var(--primary-color)] hover:bg-[#065e6f] rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] focus-visible:ring-offset-2"
                  >
                    <PhoneIcon className="w-4 h-4 shrink-0" />
                    <span>Call +91 99099 20314</span>
                  </a>
                  <a
                    href="https://wa.me/919909920314?text=Hello%20Pratiksha%20Enterprises,%20I%20have%20an%20urgent%20earthing%20quote%20request."
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
