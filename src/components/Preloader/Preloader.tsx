// Preloader.tsx
"use client"; // To ensure this component runs only on the client side in Next.js

import { useEffect, useState } from "react";
import styles from "./Preloader.module.scss";

const Preloader = () => {
  const [show, setShow] = useState(true);
  const [showDisplay, setShowDisplay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 700);
    setTimeout(() => {
      setShowDisplay(false);
    }, 1700);
  }, []);

  return (
    <div
      className={`${styles.preloader} ${!show ? styles.preloader_hidden : ""} ${
        !showDisplay ? styles.preloader_notdisplayed : ""
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="351"
        height="157"
        viewBox="0 0 351 157"
        fill="none"
        className="scale-[1.2]"
      >
        <path
          className={styles.preloader__svg__line}
          d="M0 149.455C116.667 149.455 188.5 52.1468 156.25 19.3234C124 -13.5 104.5 38.532 104.5 38.532C104.5 38.532 93.3822 11.3171 68.9405 17.4036C44.4988 23.4901 53.9773 55.5605 64.5833 71.4067C75.1894 87.253 116.667 123.045 180.303 123.045C243.939 123.045 284.304 60.0726 281.061 38.532C276.285 6.82337 250.434 3.6049 233.333 12.1216C212.5 22.4971 206.25 42.2401 206.25 42.2401C206.25 42.2401 197.917 2.65888 177.083 2.65674C148.526 2.65381 144.318 31.2149 145.833 50.5734C148.306 82.1692 190.349 119.34 233.333 133.612C265.152 144.176 307.575 149.461 350 154.74"
          stroke="#6C4E3F"
          strokeWidth="4.16667"
        ></path>
      </svg>
      <p className={`${styles.preloader__text} text-6xl`}>Kwiatami Szyte</p>
      <p>Wedding planer</p>
    </div>
  );
};

export default Preloader;
