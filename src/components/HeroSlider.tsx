"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import slide1 from "../../public/slide-1.webp";
import slide2 from "../../public/slide-2.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroSlider() {
  const settings = {
    fade: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 5000,
    pagination: false,
    autoplay: true,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    <div className="slider-container w-full h-full absolute top-0 left-0 overflow-hidden">
      <div className="absolute top-0 left-0 z-10 bg-gradient-to-b from-[#00000054] to-[#000000b7] w-full h-full " />

      <Slider {...settings} className="h-full w-full">
        <div className="h-screen w-full relative ">
          <Image
            priority
            src={slide1}
            alt=""
            className="object-bottom object-cover w-full h-full "
          />
        </div>
        <div className="h-screen w-full relative ">
          <Image
            priority
            src={slide2}
            alt=""
            className="lg:object-[60%] object-cover w-full h-full "
          />
        </div>
      </Slider>
    </div>
  );
}

export default HeroSlider;
