"use client";
import ContainerLayout from "@/layouts/ContainerLayout";
import { useInView } from "framer-motion";
import React, { useRef } from "react";
import CountUp from "react-countup";

const NumbersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="text-primary pb-8 pt-16">
      <ContainerLayout>
        <h2 className="text-center mb-20 ">Dlaczego Warto Nam Zaufać?</h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 text-5xl [&_p]:text-2xl"
          ref={ref}
        >
          <div className="flex flex-col items-center justify-center">
            <span>
              {isInView ? <CountUp end={82} duration={3} delay={0.5} /> : 0}
            </span>
            <p>Zorganizowane wesele</p>
          </div>
          <div className="flex items-center flex-col justify-center">
            <span>
              {isInView ? <CountUp end={100} duration={3} delay={0.5} /> : 0} %
            </span>
            <p>Szczęśliwych par</p>
          </div>
          <div className="flex items-center flex-col justify-center">
            <span>
              {isInView ? <CountUp end={5} duration={3} delay={0.5} /> : 0} +
            </span>
            <p>Lat doświadczenia</p>
          </div>
          <div className="flex items-center flex-col justify-center">
            <span>
              {isInView ? (
                <CountUp end={50} className="" duration={3} delay={0.5} />
              ) : (
                0
              )}{" "}
              +
            </span>
            <p>Zaufanych dostawców</p>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default NumbersSection;
