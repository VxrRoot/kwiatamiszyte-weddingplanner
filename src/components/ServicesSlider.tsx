"use client";
import React from "react";
import Slider from "react-slick";
import service from "../../public/service.webp";
import service2 from "../../public/service2.webp";
import service3 from "../../public/service3.webp";
import service4 from "../../public/service4.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const opinions = [
  {
    id: 1,
    author: "Jacob",
    title: "KOORDYNACJA DNIA ŚLUBU I WESELA",
    img: service,
    text: "Idealny pakiet dla Par które chcą skupić sie na celebrowaniu swojego wyjątkowego dnia i na spędzianiu czasu z najbliższymi. Wspólnie dokonamy analizy waszych dotychczasowych ustaleń oraz ułożymy harmonogram dnia ślubu. Dzięki naszemu wsparciu Wasz dzień przebiegnie płynnie i bezproblemowo",
  },
  {
    id: 2,
    author: "Jacob",
    title: "ŚLUB LAST MINUTE",
    img: service2,
    text: "Zależy Wam na zoorganizowaniu swojego ślubu w krótkim czasie przy zachowaniu jak wyższej jakości? Dzięki wieloletniemu doświadczeniu w branży ślubnej, pomożemy Wam zoorganizować ślub i wesele bez zbędnego stresu",
  },
  {
    id: 3,
    author: "Jacob",
    title: "KONSULTACJE ŚLUBNE",
    img: service3,
    text: "Zapraszamy na konsultacje Pary, które samodzielnie organizują swój ślub, ale potrzebują wsparcia merytorycznego i porad ekspertów! Dzięki czemu Warsze marzenia będą zrealizowane w 100%. Wspólnie uporządkujemy Wasze etapy przygotowań i podpowiemy jak wkroczyć na kolejne.",
  },
  {
    id: 4,
    author: "Jacob",
    title: "ORGANIZACJA EVENTÓW",
    img: service4,
    text: "Wielkimi krokami zbliża się 20-lecie firmy, wigilia firmowa czy odnowa przysięgi? Skontaktuj się z nami, chętnie przygotujemy spersonalizowaną ofertę, która spełni Wasze wymagania i nada wydarzeniu wyjątkowego tonu.",
  },
];

const ServicesSlider = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider
        {...settings}
        className="[&_.slick-track]:flex [&_.slick-track]:gap-4 cursor-pointer py-16"
      >
        {opinions.map(({ text, id, img, title }, idx) => {
          return (
            <div key={`${idx}-${id}`} className="text-white group">
              <div
                className="h-[35rem] relative"
                style={{
                  backgroundImage: `url(${img.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="bg-white absolute bottom-0 group-hover:bg-opacity-85 group-hover:h-full h-[10rem]  p-4 transition-all duration-500">
                  <div className="border-2 border-primary h-full p-4 overflow-hidden transition-all duration-500">
                    <div className="h-[6rem] flex justify-center items-center">
                      <h3 className="text-primary text-2xl text-center">
                        {title}
                      </h3>
                    </div>
                    <p className="text-primary font-light mt-8 text-xl">
                      {text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ServicesSlider;
