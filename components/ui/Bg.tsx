"use client";
import React from "react";
import { TextGenerateEffectDemo } from "@/components/TextGen";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export function GridBackgroundDemo() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="lg:h-screen h-[95vh]  lg:py-0 py-7 w-full bg-black-100 bg-dot-black/[0.2] relative flex  justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute  inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="z-[10] p-24 justify-center items-center lg:text-left text-center h-full lg:pt-0 pt-28  w-screen lg:p-0 flex flex-col lg:flex-row ">
        <div className="first  lg:p-0 p-4 flex flex-col  w-[90vw] lg:w-[55vw] lg:h-[60vh] h-auto ">
          <div className="flex flex-col py-14 items-center space-y-5">
            <TextGenerateEffectDemo />
            <a
              href="https://www.linkedin.com/in/abdul-rehan/"
              target="_blank"
              className="cssbutton lg:text-base text-xs"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
