import type { Metadata } from "next";
import AboutUsHero from "@/components/about-us/AboutUsHero";
import AboutCompany from "@/components/about-us/AboutCompany";
import OurApproach from "@/components/about-us/OurApproach";
import WhatWeOffer from "@/components/about-us/WhatWeOffer";
import WhyPratiksha from "@/components/about-us/WhyPratiksha";
import OurCommitment from "@/components/about-us/OurCommitment";

export const metadata: Metadata = {
  title: "About Us | Pratiksha Earthing Solutions",
  description:
    "Pratiksha Earthing Solutions is a Rajkot-based business focused on earthing and electrical safety products designed for residential, commercial and industrial applications.",
};

export default function AboutUsPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* 1. About Us Hero */}
      <AboutUsHero />

      {/* 2. About Company */}
      <AboutCompany />

      {/* 3. Our Approach */}
      <OurApproach />

      {/* 4. What We Offer */}
      <WhatWeOffer />

      {/* 5. Why Pratiksha */}
      <WhyPratiksha />

      {/* 6. Our Commitment */}
      <OurCommitment />
    </main>
  );
}
