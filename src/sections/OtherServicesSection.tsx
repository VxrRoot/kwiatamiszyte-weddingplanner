import ServicesSlider from "@/components/ServicesSlider";
import ContainerLayout from "@/layouts/ContainerLayout";
import React from "react";

const OtherServicesSection = () => {
  return (
    <section className="py-40">
      <div className="border-t border-primary w-full relative">
        <h2 className="uppercase absolute left-3/4 whitespace-nowrap -translate-y-1/2 bg-creme lg:text-4xl  text-2xl -translate-x-1/2 lg:px-10 px-4">
          Pozostałe usługi
        </h2>
      </div>
      <div>
        <ContainerLayout>
            <ServicesSlider />
        </ContainerLayout>
      </div>
    </section>
  );
};

export default OtherServicesSection;
