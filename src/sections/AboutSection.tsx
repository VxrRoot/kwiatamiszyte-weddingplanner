import ContainerLayout from "@/layouts/ContainerLayout";
import Image from "next/image";
import aboutImage from "../../public/about-img.webp";
import React from "react";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="py-40">
      <ContainerLayout>
        <div className="flex flex-col lg:flex-row">
          <div className="basis-1/3 flex items-center  justify-center order-2 lg:order-1">
            <Image
              alt=""
              className="max-h-[36rem] w-auto lg:max-h-none mt-20 lg:mt-0"
              src={aboutImage}
            />
          </div>
          <div className="basis-2/3 justify-center items-center lg:px-20 order-1 lg:order-2 flex flex-col">
            <h2 className="text-5xl text-center font-normal">
              ZAPLANUJEMY WESELE WASZYCH MARZEŃ!
            </h2>
            <p className="text-xl text-center mt-10">
              Witajcie! <br /> Jesteśmy zespołem profesjonalnych wedding
              plannerów z wieloletnim doświadczeniem w organizacji ślubów
              marzeń. Naszym celem jest tworzenie niezapomnianych chwil, które
              odzwierciedlają osobowość i miłość każdej pary młodej. Dzięki
              indywidualnemu podejściu oraz współpracy z najlepszymi dostawcami
              usług, zapewniamy kompleksową organizację każdego detalu Waszego
              ślubu. Razem stworzymy coś naprawdę wyjątkowego, co pozostanie w
              Waszej pamięci na zawsze.
            </p>
            <Link
              href="#"
              className="mt-20 text-xl bg-[#E0CDBE] py-2 px-8 rounded-lg"
            >
              Zobacz realizacje
            </Link>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default AboutSection;
