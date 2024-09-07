"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import React, { useEffect, useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const genericHamburgerLine = `h-1 w-8 my-[3px] rounded-full ${
    isOpen ? "bg-black" : "bg-creme"
  } transition ease transform duration-300`;

  useEffect(() => {
    // Block scroll
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className="w-full h-full flex">
      <div className="hidden lg:flex text-white w-full ">
        <div className="flex-1 flex items-center justify-around">
          <Link href="#" className="uppercase text-2xl font-bold">
            O nas
          </Link>
          <Link href="#" className="uppercase text-2xl font-bold">
            Nasz zespół
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="border-logo  w-[300px] bg-creme flex justify-center items-center">
            <Image alt="" src={logo} className="-mt-4" />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-around">
          <Link href="#" className="uppercase text-2xl font-bold">
            Usługi
          </Link>
          <Link href="#" className="uppercase text-2xl font-bold">
            Kontakt
          </Link>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`flex top-0 h-full z-20 justify-center pt-40 left-0 w-full  fixed xl:hidden transition-all bg-creme ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-20">
          <Link href="#" className="uppercase text-2xl font-bold text-center">
            O nas
          </Link>
          <Link href="#" className="uppercase text-2xl font-bold text-center">
            Nasz zespół
          </Link>
          <Link href="#" className="uppercase text-2xl font-bold text-center">
            Usługi
          </Link>
          <Link href="#" className="uppercase text-2xl font-bold text-center">
            Kontakt
          </Link>
        </div>
      </div>
      <div className="flex lg:hidden relative z-30 items-center justify-between w-full">
        <div className="border-logo  w-[300px] bg-creme flex justify-center items-center">
          <Image alt="" src={logo} className="-mt-4" />
        </div>
        <div>
          <button
            className="flex flex-col h-12 w-12 rounded relative z-20 justify-center items-center group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "rotate-45 translate-y-[10px] opacity-80 group-hover:opacity-100"
                  : "opacity-80 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen ? "opacity-0" : "opacity-80 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "-rotate-45 -translate-y-[10px] opacity-80 group-hover:opacity-100"
                  : "opacity-80 group-hover:opacity-100"
              }`}
            />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
