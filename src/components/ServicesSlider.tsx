"use client";
import React from "react";
import Slider from "react-slick";
import opinionImg from "../../public/service.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const opinions = [
  {
    id: 1,
    author: "Jacob",
    title: "KOORDYNACJA DNIA ŚLUBU I WESELA",
    img: opinionImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id lacus augue. Aenean aliquam posuere nulla in finibus. Pellentesque quis odio viverra, dignissim nisi et, consequat arcu. Mauris tortor felis, feugiat et",
  },
  {
    id: 2,
    author: "Jacob",
    title: "ŚLUB LAST MINUTE",
    img: opinionImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id lacus augue. Aenean aliquam posuere nulla in finibus. Pellentesque quis odio viverra, dignissim nisi et, consequat arcu. Mauris tortor felis, feugiat et",
  },
  {
    id: 3,
    author: "Jacob",
    title: "KONSULTACJE ŚLUBNE",
    img: opinionImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id lacus augue. Aenean aliquam posuere nulla in finibus. Pellentesque quis odio viverra, dignissim nisi et",
  },
  {
    id: 4,
    author: "Jacob",
    title: "ORGANIZACJA EVENTÓW",
    img: opinionImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id lacus augue. Aenean aliquam posuere nulla in finibus. Pellentesque quis odio viverra, dignissim nisi et, consequat arcu. Mauris tortor felis, feugiat et",
  },
];

const ServicesSlider = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    autoplay: false,
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
            <div key={`${idx}-${id}`} className="text-white">
              <div
                className="h-[30rem] relative"
                style={{
                  backgroundImage: `url(${img.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="bg-white absolute bottom-0 h-[12rem] hover:h-full hover:bg-opacity-75 p-4 transition-all">
                  <div className="border-4 border-primary hover:h-full">
                    <h6 className="text-primary text-2xl text-center">
                      {title}
                    </h6>
                    <p className="text-base text-primary font-light">{text}</p>
                    <div className="flex gap-4">
                      <div className="flex flex-col ">
                        <span className="text-awGrey font-normal">{title}</span>
                      </div>
                    </div>
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
