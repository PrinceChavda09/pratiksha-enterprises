"use client";

import React, { useState, useRef, useCallback } from "react";
import {
  StarIcon,
  GoogleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  BadgeCheckIcon,
  ArrowUpRightIcon,
} from "@/components/icon";
import {
  reviews,
  googleReviewSummary,
} from "@/components/home/reviewData";
import { Reveal } from "@/components/animations";

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const totalReviews = reviews.length;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
  }, [totalReviews]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  }, [totalReviews]);

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
  };

  // Keyboard navigation when user is focused within the carousel controls
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    }
  };

  // Touch swipe support for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      // Swiped left -> next
      handleNext();
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> prev
      handlePrev();
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  const activeReview = reviews[currentIndex];

  return (
    <section
      id="customer-reviews"
      ref={sectionRef}
      aria-labelledby="reviews-heading"
      className="w-full bg-[#f8fbfd] py-16 sm:py-20 lg:py-24 border-t border-slate-200/80 overflow-hidden scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
          {/* ================= LEFT COLUMN: EDITORIAL HEADER & GOOGLE RATING ================= */}
          <Reveal direction="up" delay={0.1} className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Eyebrow */}
              <span className="text-sm font-bold text-[var(--primary-color)] tracking-widest uppercase block mb-3">
                CUSTOMER REVIEWS
              </span>

              {/* Heading */}
              <h2
                id="reviews-heading"
                className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[var(--text-heading)] leading-[1.2] mb-4"
              >
                What Our Customers Say
              </h2>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-[var(--gray-color)] leading-relaxed mb-8 max-w-xl">
                Real experiences from customers who have worked with Pratiksha
                Enterprise.
              </p>

              {/* Google Rating Summary Card */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm mb-8 transition-all hover:border-[var(--primary-color)]/30">
                <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-center shrink-0">
                      <GoogleIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                        Verified Platform
                      </span>
                      <span className="text-sm font-bold text-[var(--text-heading)]">
                        {googleReviewSummary.sourceName}
                      </span>
                    </div>
                  </div>

                  {/* Rating Badge */}
                  <div className="text-right">
                    <div className="flex items-center gap-1.5 justify-end">
                      <span className="text-2xl font-black text-[var(--text-heading)] leading-none">
                        {googleReviewSummary.rating.toFixed(1)}
                      </span>
                      <span className="text-xs font-bold text-slate-400">
                        / 5.0
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-[var(--primary-color)] gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="w-4 h-4" filled={true} />
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-[var(--gray-color)]">
                      Based on {googleReviewSummary.reviewCountDisplay} reviews
                    </span>
                  </div>

                  <a
                    href={googleReviewSummary.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--primary-color)] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] rounded"
                  >
                    <span>View on Google</span>
                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation Controls on Desktop / Tablet */}
            <div
              className="flex items-center justify-between pt-2 border-t border-slate-200/60"
              onKeyDown={handleKeyDown}
            >
              {/* Counter / Pagination Indicators */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-400 tracking-wider">
                  {String(currentIndex + 1).padStart(2, "0")} /{" "}
                  {String(totalReviews).padStart(2, "0")}
                </span>
                <div
                  className="flex items-center gap-1.5"
                  role="tablist"
                  aria-label="Review selection tabs"
                >
                  {reviews.map((r, idx) => (
                    <button
                      key={r.id}
                      onClick={() => handleSelect(idx)}
                      role="tab"
                      aria-selected={currentIndex === idx}
                      aria-label={`Go to review ${idx + 1} by ${r.name}`}
                      className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] ${
                        currentIndex === idx
                          ? "w-7 bg-[var(--primary-color)]"
                          : "w-2 bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous customer review"
                  className="w-11 h-11 rounded-xl bg-white border border-slate-200/90 text-slate-700 hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]/40 hover:bg-slate-50 transition-all duration-200 flex items-center justify-center shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] focus-visible:ring-offset-2 active:scale-95"
                >
                  <ChevronLeftIcon className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next customer review"
                  className="w-11 h-11 rounded-xl bg-white border border-slate-200/90 text-slate-700 hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]/40 hover:bg-slate-50 transition-all duration-200 flex items-center justify-center shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] focus-visible:ring-offset-2 active:scale-95"
                >
                  <ChevronRightIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </Reveal>

          {/* ================= RIGHT COLUMN: PREMIUM EDITORIAL REVIEW CARD ================= */}
          <Reveal
            direction="up"
            delay={0.2}
            duration={0.7}
            className="lg:col-span-7 flex flex-col justify-center min-w-0"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Active Card Container */}
            <div
              key={activeReview.id}
              className="relative bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-7 lg:p-9 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.06)] transition-all duration-300 animate-in fade-in zoom-in-[0.99] flex flex-col justify-between md:min-h-[390px]"
            >
              {/* Top Row: Stars + Source Indicator */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 border-b border-slate-100">
                {/* 5-Star Rating */}
                <div
                  className="flex items-center gap-1 text-[var(--primary-color)]"
                  aria-label={`Rating: ${activeReview.rating} out of 5 stars`}
                >
                  {[...Array(activeReview.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5" filled={true} />
                  ))}
                </div>

                {/* Google Review Tag */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700">
                  <GoogleIcon className="w-3.5 h-3.5" />
                  <span>Google Review</span>
                  <BadgeCheckIcon className="w-3.5 h-3.5 text-[var(--primary-color)] ml-0.5" />
                </div>
              </div>

              {/* Review Text */}
              <div className="mb-8">
                <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed whitespace-pre-line font-normal">
                  {activeReview.text}
                </p>
              </div>

              {/* Reviewer Details Footer */}
              <div className="flex items-center justify-between gap-4 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  {/* Initials Avatar */}
                  <div
                    aria-hidden="true"
                    className="w-12 h-12 rounded-full bg-[color-mix(in_srgb,var(--primary-color)_12%,transparent)] border border-[color-mix(in_srgb,var(--primary-color)_24%,transparent)] text-[var(--primary-color)] font-bold text-sm sm:text-base flex items-center justify-center shrink-0 tracking-wider"
                  >
                    {activeReview.initials}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-[var(--text-heading)] truncate">
                      {activeReview.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-[var(--gray-color)]">
                      <span className="inline-flex items-center gap-1 text-[var(--primary-color)] font-medium">
                        <BadgeCheckIcon className="w-3.5 h-3.5" />
                        Verified Customer
                      </span>
                      <span className="text-slate-300">•</span>
                      <span>{activeReview.date}</span>
                    </div>
                  </div>
                </div>

                {/* Subtle verified checkmark badge */}
                <div className="hidden sm:flex items-center gap-1 text-xs text-slate-400 font-medium shrink-0">
                  <GoogleIcon className="w-4 h-4 opacity-80" />
                  <span>Google Verified</span>
                </div>
              </div>
            </div>

            {/* Quick Preview Thumbnail Strip (Desktop & Tablet) */}
            <div className="hidden md:grid grid-cols-5 gap-3 mt-4">
              {reviews.map((rev, idx) => {
                const isCurrent = currentIndex === idx;
                return (
                  <button
                    key={rev.id}
                    type="button"
                    onClick={() => handleSelect(idx)}
                    aria-label={`View review by ${rev.name}`}
                    className={`text-left p-3 rounded-xl border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] ${
                      isCurrent
                        ? "bg-white border-[var(--primary-color)] shadow-xs"
                        : "bg-white/60 border-slate-200/80 hover:bg-white hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-1 mb-1">
                      <div className="flex text-[var(--primary-color)]">
                        <StarIcon className="w-3 h-3" filled={true} />
                      </div>
                      <span className="text-[10px] font-bold text-slate-500">
                        5.0
                      </span>
                    </div>
                    <p className="text-xs font-bold text-[var(--text-heading)] truncate">
                      {rev.name}
                    </p>
                    <p className="text-[10px] text-slate-400">{rev.date}</p>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
