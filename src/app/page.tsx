import AboutSection from "@/sections/AboutSection";
import HeroSection from "@/sections/HeroSection";
import NumbersSection from "@/sections/NumbersSection";
import OfferSection from "@/sections/OfferSection";
import StepsSection from "@/sections/StepsSection";
import OurTeamSection from "../sections/OurTeamSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <OfferSection />
      <NumbersSection />
      <OurTeamSection />
      <StepsSection />
    </main>
  );
}
