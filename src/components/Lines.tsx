"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Lines = () => {
    const ref = useRef(null)
    const controls = useAnimation();
    const inView = useInView(ref,{
        amount: 0.5,
      });

    useEffect(() => {
        if (inView) {
            controls.start({
                pathLength: 1,
            });
        }
    }, [controls, inView]);

    return (
        <svg
            className="absolute -top-32 left-0 z-0 overflow-hidden w-full md:block hidden"
            xmlns="http://www.w3.org/2000/svg"
            width="1920"
            height="1080"
            viewBox="0 0 1920 1080"
            fill="none"
            ref={ref}
        >
            <motion.path
                initial={{ pathLength: 0 }}
                animate={controls}
                transition={{
                    type: "easeInOut",
                    bounce: 0.8,
                    duration: 2,
                    delay: 0,
                }}
                d="M-9.49942 641.5C175.001 693 361.115 682.406 628.538 680.942C907.501 695 1181.41 735.033 1454.5 617.319C1727.01 499.858 1758.32 428.165 1927.5 226.5"
                stroke="#DEC68F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <motion.path
                initial={{ pathLength: 0 }}
                animate={controls}
                transition={{
                    type: "easeInOut",
                    bounce: 0.8,
                    duration: 2,
                    delay: .1,
                }}
                d="M-19.2657 623.499C230.235 687 763.5 783.5 1061.5 755.917C1348.24 687.193 1707.28 379.504 1921 205.999"
                stroke="#DEC68F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <motion.path
                initial={{ pathLength: 0 }}
                animate={controls}
                transition={{
                    type: "easeInOut",
                    bounce: 0.8,
                    duration: 2,
                    delay: .2,
                }}
                d="M-0.00126155 596.499C141.499 673.999 131.969 626.187 376.499 667.5C626.955 709.813 874.644 787.226 1154.16 710.784C1433.08 634.506 1707.5 354.5 1922 179.5"
                stroke="#DEC68F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Lines;
