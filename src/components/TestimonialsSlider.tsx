"use client";
import React, { useState } from "react";
import Slider, { Settings } from "react-slick";
import service from "../../public/service.webp";
import service2 from "../../public/service2.webp";
import service3 from "../../public/service3.webp";
import service4 from "../../public/service4.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Opinion {
  id: number;
  author: string;
  img: StaticImageData;
  text: string;
  link: string;
}

const opinions: Opinion[] = [
  {
    id: 1,
    author: "Kuba & Oliwia",
    img: service,
    link: "/gallery",
    text: "Nasze wesele było spełnieniem marzeń! Każdy detal dopracowany do perfekcji, a atmosfera, jaką stworzono, sprawiła, że ten dzień na zawsze zostanie w naszych sercach. Dziękujemy!",
  },
  {
    id: 2,
    author: "Agnieszka & Patryk",
    img: service2,
    link: "/gallery",
    text: "To był najpiękniejszy dzień w naszym życiu! Wszystko było idealne, od dekoracji po obsługę. Goście byli zachwyceni, a my czuliśmy się jak w bajce",
  },
  {
    id: 3,
    author: "Marek & Asia",
    img: service3,
    link: "/gallery",
    text: "Profesjonalizm i zaangażowanie w organizację naszego wesela przerosły nasze oczekiwania. Wszystko przebiegło sprawnie, a każdy moment był wyjątkowy. Niezapomniane chwile!",
  },
  {
    id: 4,
    author: "Janek & Patrycja",
    img: service4,
    link: "/gallery",
    text: "Dzięki Wam nasze wesele było dokładnie takie, jak sobie wymarzyliśmy. Wszystko przebiegło bez zarzutu, a my mogliśmy cieszyć się tym dniem w pełni. Jesteśmy bardzo wdzięczni!",
  },
];

const TestimonialsSlider: React.FC = () => {
  const [mainSlider, setMainSlider] = useState<Slider | null>(null);
  const [imageSlider, setImageSlider] = useState<Slider | null>(null);

  const mainSliderSettings: Settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    swipe: true,
    asNavFor: imageSlider || undefined, // Synchronize with the image slider
    beforeChange: (oldIndex: number, newIndex: number) => {
      if (imageSlider) imageSlider.slickGoTo(newIndex);
    },
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const imageSliderSettings: Settings = {
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    swipe: true,
    asNavFor: mainSlider || undefined, // Synchronize with the main slider
  };

  return (
    <div className="w-full flex justify-center items-center ">
      <div className="relative w-full md:w-[60rem] md:h-[35rem] h-[20rem]">
        <div className="md:w-[35rem] w-full h-[35rem] bg-[#F9F5F4] z-10 md:p-8 p-4">
          <h2 className="text-primary ml-2 text-5xl md:text-6xl">Zrealizowane <br /> Marzenia</h2>
          <Slider
            {...mainSliderSettings}
            ref={(slider: unknown) => setMainSlider(slider)}
            className="[&_.slick-track]:flex [&_.slick-track]:gap-4 cursor-pointer py-16"
          >
            {opinions.map(({ text, id, author }, idx) => (
              <div key={`${idx}-${id}`} className="text-white group">
                <div className="text-primary">
                  <p className="text-italic text-xl">{text}</p>
                  <div className="d-flex">
                    <p className="mt-4 text-right font-bold">-{author}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="flex justify-end bottom-0 w-full">
            <Link
              href="#"
              className=" py-2 mt-10 px-8 rounded-lg drop-shadow-md backdrop-blur-sm text-primary text-2xl"
            >
              Zobacz Zdjęcia →
            </Link>
          </div>
        </div>

        {/* Second Slider for images */}
        <div className=" md:block hidden">
          <Slider
            {...imageSliderSettings}
            ref={(slider: unknown) => setImageSlider(slider)}
            className="current-slide-image relative w-full md:absolute md:-top-[40rem] md:left-[25rem] md:w-[700px] md:h-[40rem] z-[-1]"
          >
            {opinions.map(({ img, author }, idx) => (
              <div key={idx} className="w-[700px] h-[43rem] mt-4">
                <Image
                  width={700}
                  height={700}
                  src={img.src}
                  alt={author}
                  className="w-[700px] h-[43rem] object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
