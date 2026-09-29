import HomeHeroSection from "@/components/home/HomeHeroSection";
import AboutPratiksha from "@/components/home/AboutPratiksha";
import OurProduct from "@/components/home/OurProduct";
import WhyChoosePratiksha from "@/components/home/WhyChoosePratiksha";
import Reviews from "@/components/home/Reviews";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <HomeHeroSection />
      <AboutPratiksha />

      {/* Our Products Section */}
      <OurProduct />

      {/* Why Choose Pratiksha Section */}
      <WhyChoosePratiksha />

      {/* Customer Reviews Section */}
      <Reviews />
    </main>
  );
}

