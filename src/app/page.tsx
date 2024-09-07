import AboutSection from "@/sections/AboutSection";
import HeroSection from "@/sections/HeroSection";
import OfferSection from "@/sections/OfferSection";
import StepsSection from "@/sections/StepsSection";
import OurTeamSection from "../sections/OurTeamSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <OfferSection />
      <OurTeamSection />
      <StepsSection />
    </main>
  );
}
