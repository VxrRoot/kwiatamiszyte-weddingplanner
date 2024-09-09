import AboutSection from "@/sections/AboutSection";
import HeroSection from "@/sections/HeroSection";
import NumbersSection from "@/sections/NumbersSection";
import OfferSection from "@/sections/OfferSection";
import OtherServicesSection from "@/sections/OtherServicesSection";
import StepsSection from "@/sections/StepsSection";
import TesimonialsSection from "@/sections/TesimonialsSection";
import WhyWorthSection from "@/sections/WhyWorthSection";
import OurTeamSection from "../sections/OurTeamSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <OurTeamSection />
      <NumbersSection />
      <TesimonialsSection />
      <OfferSection />
      <OtherServicesSection />
      <WhyWorthSection />
      <StepsSection />
    </main>
  );
}
