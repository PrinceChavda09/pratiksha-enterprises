import HomeHeroSection from "@/components/home/HomeHeroSection";
import AboutPratiksha from "@/components/home/AboutPratiksha";
 
export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <HomeHeroSection />
      <AboutPratiksha />
    </main>
  );
}