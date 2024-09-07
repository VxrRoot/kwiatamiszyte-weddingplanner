import { FlipWords } from "@/components/FlipWords";
import StepList from "@/components/StepList/StepList";
import ContainerLayout from "@/layouts/ContainerLayout";
import React from "react";

const HeroSection = () => {
  return (
    <section>
      <ContainerLayout>
        <h1 className="text-5xl">
        </h1>
        <FlipWords
          className="text-4xl px-4 lg:text-5xl w-full text-center mb-16 text-primary"
          words={[
            "Przeprowadzimy Was przez cały proces organizacji ślubu i wesela",
          ]}
        />
        <StepList/>
      </ContainerLayout>
    </section>
  );
};

export default HeroSection;
