import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactMapSection from "@/components/contact/ContactMapSection";
import ContactFAQ from "@/components/contact/ContactFAQ";

export const metadata: Metadata = {
  title: "Contact Us | Pratiksha Earthing Solutions - Rajkot, Gujarat",
  description:
    "Get in touch with Pratiksha Earthing Solutions. Request direct factory quotes for copper bonded rods, chemical earthing electrodes, and substation grounding systems in Rajkot, Gujarat.",
  keywords: [
    "Pratiksha Earthing contact",
    "earthing electrode manufacturer Rajkot",
    "copper bonded rods quote",
    "chemical earthing supplier Gujarat",
    "substation grounding contact",
  ],
};

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* 1. HERO SECTION (MATCHING USER REFERENCE DESIGN) */}
      <ContactHero />

      {/* 2. TECHNICAL INQUIRY & QUOTE REQUEST FORM */}
      <ContactFormSection />

      {/* 3. RAJKOT MANUFACTURING FACILITY & GOOGLE MAP */}
      <ContactMapSection />

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      <ContactFAQ />
    </main>
  );
}
