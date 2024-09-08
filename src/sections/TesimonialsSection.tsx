import TestimonialsSlider from "@/components/TestimonialsSlider";
import ContainerLayout from "@/layouts/ContainerLayout";
import React from "react";

const TesimonialsSection = () => {
  return (
    <section className="py-40">
      <div>
        <ContainerLayout>
          <TestimonialsSlider />
        </ContainerLayout>
      </div>
    </section>
  );
};

export default TesimonialsSection;
