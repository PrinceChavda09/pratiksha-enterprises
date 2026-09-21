import HomeHeroSection from "@/components/home/HomeHeroSection";
import AboutPratiksha from "@/components/home/AboutPratiksha";
import OurProduct from "@/components/home/OurProduct";
import WhyChoosePratiksha from "@/components/home/WhyChoosePratiksha";
import GetInTouch from "@/components/home/GetInTouch";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <HomeHeroSection />
      <AboutPratiksha />

      {/* Our Products Section */}
      <OurProduct />

      {/* Why Choose Pratiksha Section */}
      <WhyChoosePratiksha />

      {/* Get In Touch CTA Section */}
      <GetInTouch />
    </main>
  );
}
