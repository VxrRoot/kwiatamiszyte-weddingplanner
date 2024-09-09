"use client";
import BrainIcon from "@/icons/BrainIcon";
import HandHearthIcon from "@/icons/HandHearthIcon";
import { motion } from "framer-motion";
import NetworkIcon from "@/icons/NetworkIcon";
import TimeIcon from "@/icons/TimeIcon";
import TruckIcon from "@/icons/TruckIcon";
import ContainerLayout from "@/layouts/ContainerLayout";
import { useMediaQuery } from "react-responsive";

import React from "react";

const WhyWorthSection = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <section className="pt-20 mb-40 text-primary">
      <ContainerLayout>
        <h2 className="text-center text-5xl">
          Co daje współpraca z wedding plannerem?
        </h2>
        <div className="grid mt-20 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {/* Item */}
          <motion.div
            transition={{
              duration: 0.5,
            }}
            initial={{
              opacity: 0,
              y: 200,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-200px",
            }}
            className="text-4xl bg-[#F9F5F4] p-8  drop-shadow-md"
          >
            <div className="flex items-center [&_svg]:h-auto [&_svg]:w-12 h-20 ">
              <TimeIcon />
              <h3 className="ml-8">Oszczędność czasu i stresu</h3>
            </div>
            <div className="border-t border-primary mt-8 pt-8">
              <p className="text-2xl">
                Organizacja <strong>wesela</strong> to ogromne wyzwanie.{" "}
                <strong>Wedding planner</strong> zadba o każdy detal, pozwalając
                Ci cieszyć się <strong>wyjątkowym dniem</strong> bez zmartwień.
              </p>
            </div>
          </motion.div>
          {/* End - Item */}
          {/* Item */}
          <motion.div
            transition={{
              duration: 0.5,
              delay: isDesktop ? 0.3 : 0,
            }}
            initial={{
              opacity: 0,
              y: 200,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-200px",
            }}
            className="text-4xl bg-[#F9F5F4] p-8  drop-shadow-md"
          >
            <div className="flex items-center [&_svg]:h-auto [&_svg]:w-12 h-20">
              <TruckIcon />
              <h3 className="ml-8">Dostęp do najlepszych dostawców</h3>
            </div>
            <div className="border-t border-primary mt-8 pt-8">
              <p className="text-2xl">
                Nasz zespół ma wypracowane relacje z najlepszymi{" "}
                <strong>dostawcami usług ślubnych</strong> w okolicy. Dzięki
                temu możemy zaoferować Wam niespotykane zniżki i wyjątkową
                jakość.
              </p>
            </div>
          </motion.div>
          {/* End - Item */}
          {/* Item */}
          <motion.div
            transition={{
              duration: 0.5,
              delay: isDesktop ? 0.6 : 0,
            }}
            initial={{
              opacity: 0,
              y: 200,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-200px",
            }}
            className="text-4xl bg-[#F9F5F4] p-8  drop-shadow-md"
          >
            <div className="flex items-center [&_svg]:h-auto [&_svg]:w-12 h-20">
              <NetworkIcon />
              <h3 className="ml-8">Kompleksowa obsługa</h3>
            </div>
            <div className="border-t border-primary mt-8 pt-8">
              <p className="text-2xl">
                Od wyboru <strong>sali weselnej</strong>, przez oprawę{" "}
                <strong>muzyczną</strong>, po <strong>dekoracje</strong> -{" "}
                <strong>wedding planer</strong> zadba o każdy element Waszego{" "}
                <strong>wesela</strong>. Możecie skupić się na celebrowaniu tej
                wyjątkowej chwili.
              </p>
            </div>
          </motion.div>
          {/* End - Item */}
          {/* Item */}
          <motion.div
            transition={{
              duration: 0.5,
            }}
            initial={{
              opacity: 0,
              y: 200,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-200px",
            }}
            className="text-4xl bg-[#F9F5F4] p-8  drop-shadow-md"
          >
            <div className="flex items-center [&_svg]:h-auto [&_svg]:w-12 h-20">
              <HandHearthIcon />
              <h3 className="ml-8">Spokój w dniu ślubu</h3>
            </div>
            <div className="border-t border-primary mt-8 pt-8">
              <p className="text-2xl">
                Kiedy zatrudnisz <strong>wedding plannera</strong>, w dniu{" "}
                <strong>ślubu</strong> nie musisz się o nic martwić. Nasz
                doświadczony zespół zadba o pełną koordynację wszystkich{" "}
                <strong>dostawców</strong> usług ślubnych, dochowanie terminów i
                płynny przebieg całego <strong>wydarzenia</strong>. Dzięki temu
                możesz w pełni cieszyć się tą wyjątkową chwilą, bez stresu i
                zmartwień.
              </p>
            </div>
          </motion.div>
          {/* End - Item */}
          {/* Item */}
          <motion.div
            transition={{
              duration: 0.5,
              delay: isDesktop ? 0.3 : 0,
            }}
            initial={{
              opacity: 0,
              y: 200,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-200px",
            }}
            className="text-4xl bg-[#F9F5F4] p-8  drop-shadow-md"
          >
            <div className="flex items-center [&_svg]:h-auto [&_svg]:w-12 h-20">
              <HandHearthIcon />
              <h3 className="ml-8">Zarządzanie weselnym budżetem</h3>
            </div>
            <div className="border-t border-primary mt-8 pt-8">
              <p className="text-2xl">
                <strong>Wedding planner</strong> pomoże zaplanować Twój{" "}
                <strong>wymarzony ślub</strong> w ramach ustalonego{" "}
                <strong>budżetu</strong>. Nasze doświadczenie pozwoli Ci uniknąć
                nieprzewidzianych kosztów i skutecznie zrealizować{" "}
                <strong>plany weselne</strong>.
              </p>
            </div>
          </motion.div>
          {/* End - Item */}
          {/* Item */}
          <motion.div
            transition={{
              duration: 0.5,
              delay: isDesktop ? 0.6 : 0,
            }}
            initial={{
              opacity: 0,
              y: 200,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-200px",
            }}
            className="text-4xl bg-[#F9F5F4] p-8  drop-shadow-md"
          >
            <div className="flex items-center [&_svg]:h-auto [&_svg]:w-12 h-20">
              <BrainIcon />
              <h3 className="ml-8">Oryginalne pomysły</h3>
            </div>
            <div className="border-t border-primary mt-8 pt-8">
              <p className="text-2xl">
                Nasz <strong>doświadczony zespół</strong> zna najnowsze{" "}
                <strong>trendy ślubne</strong> i zaproponuje kreatywne
                rozwiązania. Od <strong>stylizacji weselnej</strong> po unikalne{" "}
                <strong>atrakcje na wesele</strong> - stworzymy{" "}
                <strong>niezapomniane wydarzenie</strong>.
              </p>
            </div>
          </motion.div>
          {/* End - Item */}
        </div>
      </ContainerLayout>
    </section>
  );
};

export default WhyWorthSection;
