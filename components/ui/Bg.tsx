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
    <div className="lg:h-screen h-[95vh] lg:py-0 py-7 w-full bg-black-100 bg-dot-black/[0.2] relative flex justify-center overflow-hidden">
      {/* Floating animated shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-400/15 to-yellow-400/15 rounded-full blur-3xl animate-bounce" style={{animationDuration: '6s'}}></div>
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-br from-green-400/10 to-blue-500/10 rounded-full blur-2xl animate-ping" style={{animationDuration: '4s'}}></div>
      
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

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
