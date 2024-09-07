import HeroSlider from "@/components/HeroSlider";
import ContainerLayout from "@/layouts/ContainerLayout";
import React from "react";

const HeroSection = () => {
  return (
    <section className="h-screen">
      <HeroSlider />
      <ContainerLayout>
        <div className="z-10 absolute bottom-0 pb-20 max-w-6xl">
          <h2 className="text-5xl xl:text-7xl text-white">
            TWOJE MARZENIA, NASZA PASJA
          </h2>
          <h1 className="xl:text-6xl text-3xl text-white">
            KOMPLEKSOWA ORGANIZACJA ŚLUBÓW MARZEŃ
          </h1>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default HeroSection;
