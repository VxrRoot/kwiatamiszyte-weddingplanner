import ContainerLayout from "@/layouts/ContainerLayout";
import Link from "next/link";
import React from "react";
import offerOneImg from "../../public/offer-1.webp";
import offerTwoImg from "../../public/offer-2.webp";
import Image from "next/image";

const OfferSection = () => {
  return (
    <section className="pt-40 pb-32" id="uslugi">
      <div className="border-t border-primary w-full relative">
        <span className="uppercase absolute left-1/2 whitespace-nowrap -translate-y-1/2 bg-creme  text-primary text-2xl lg:text-4xl   -translate-x-1/2 lg:px-10 px-4">
          Poznaj naszą ofertę
        </span>
      </div>
      <div>
        <ContainerLayout>
          <div className="flex flex-col lg:flex-row pt:12 md:pt-40">
            <div className="flex-1 lg:pr-20 pt-20 text-primary">
              <h2 className="mb-14 font-semibold">
                KOMPLEKSOWA ORGANIZACJA ŚLUBU
              </h2>
              <p className="mb-20 lg:text-2xl">
                Planujecie swój slub i nie wiecie od czego zacząć? <br /> Jako
                doświadczony zespół pomożemy Wam stworzyć wymarzony ślub od A do
                Z. Zajmiemy się każdym detalem – od wyboru idealnej lokalizacji
                i dekoracji, przez koordynację z dostawcami, aż po planowanie
                harmonogramu dnia.
              </p>
              <Link
                href="#"
                className="uppercase bg-primary px-8 text-white py-4  w-fit"
              >
                Dowiedz się więcej
              </Link>
            </div>
            <div className="flex-1 flex items-center justify-center pt-20 lg:pt-0">
              <Image
                alt=""
                src={offerOneImg}
                className="max-w-[36rem] w-full h-auto"
              />
            </div>
          </div>
        </ContainerLayout>
        <div className="bg-primary pt-72  -mt-32">
          <ContainerLayout>
            <div className="flex flex-col lg:flex-row translate-y-[13rem] -mt-[20rem] mb-8">
              <div className="flex-1 order-2 lg:order-1 pt-20 lg:pt-0 ">
                <Image
                  alt=""
                  src={offerTwoImg}
                  className="max-w-[36rem] h-auto w-full"
                />
              </div>
              <div className="flex-1 lg:pl-20 pt-20 text-creme order-1 lg:order-2">
                <h2 className="mb-14 font-semibold">
                  CZĘSCIOWA ORGANIZACJA SLUBU
                </h2>
                <p className="mb-20 lg:text-2xl">
                  Jesteście w trakcie organizacji swojego ślubu, ale pojawiają
                  się obszary, w których potrzebujecie wsparcia? Pomożemy Wam
                  uporządkować dotychczasowe ustaleinia i znaleźć idelane
                  rozwiązania, które pomogą wam spełnić Wasze marzenia.
                </p>
                <Link
                  href="#"
                  className="uppercase bg-creme px-8 text-textDark py-4  w-fit"
                >
                  Dowiedz się więcej
                </Link>
              </div>
            </div>
          </ContainerLayout>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
