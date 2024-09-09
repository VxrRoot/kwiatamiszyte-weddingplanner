import HeroSlider from "@/components/HeroSlider";
import ContainerLayout from "@/layouts/ContainerLayout";
import React from "react";

const HeroSection = () => {
  return (
    <section className="h-dvh">
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
        <div className="w-[24px] h-[36px] border-2 rounded-lg border-white mx-auto mt-20 z-30 absolute left-1/2 lg:bottom-[60px] bottom-[30px] flex justify-center">
          <div
            className={`w-0.5 h-4 bg-white rounded-full absolute top-2 animate-bounce`}
          />
        </div>
      </ContainerLayout>
    </section>
  );
};

export default HeroSection;
