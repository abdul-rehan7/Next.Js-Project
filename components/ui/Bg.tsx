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
    <div className="lg:h-screen h-auto  lg:py-0 py-7 w-full bg-black-100 bg-dot-white/[0.07] relative flex  justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute  inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="z-[10]  p-24 justify-center items-center lg:text-left text-center h-screen lg:pt-0 pt-14  w-screen lg:p-0 flex flex-col lg:flex-row ">
        <div className="first  lg:p-0 p-4 flex flex-col  w-[90vw] lg:w-[55vw] lg:h-[60vh] h-auto ">
          <div className="flex flex-col items-center space-y-2">
            <div className="logo">
              <img
                className="rounded-full h-[6rem] w-[6rem] lg:h-[10rem] lg:w-[10rem]"
                src="/logo.png"
                alt=""
              />
            </div>
            <TextGenerateEffectDemo  />
            <a
              href="https://www.linkedin.com/in/abdul-rehan/"
              target="_blank"
              className="cssbutton"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
