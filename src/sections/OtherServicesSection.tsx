import ServicesSlider from "@/components/ServicesSlider";
import ContainerLayout from "@/layouts/ContainerLayout";
import React from "react";

const OtherServicesSection = () => {
  return (
    <section className="py-40">
      <div className="border-t border-primary w-full relative mb-8">
        <h2 className="uppercase absolute sm:left-3/4 left-1/2 whitespace-nowrap -translate-y-1/2 bg-creme text-primary lg:text-4xl  text-2xl -translate-x-1/2 lg:px-10 px-4">
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
