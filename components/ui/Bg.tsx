"use client";
import React from "react";
import { TextGenerateEffectDemo } from "@/components/TextGen";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

export function GridBackgroundDemo() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="lg:h-[50rem] h-[70vh]  py-5 w-full bg-white bg-grid-black/[0.1] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute  inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="z-[10] p-24 justify-center items-center lg:text-left text-center h-screen lg:pt-7 pt-14  w-screen lg:p-12 flex flex-col lg:flex-row ">
        <div className="first p-4 flex flex-col  w-[80vw] lg:w-[55vw] lg:h-[60vh] h-[30vh] ">
          <div >
            <TextGenerateEffectDemo />
          </div>
        </div>
        <div className="second  mt-7 lg:flex hidden lg:justify-end">
          <img
            src="/hero-item.png"
            className="lg:w-[40rem] lg:h-[30rem] overflow-x-hidden  h-[20rem] w-[20rem]"
            alt=""
            data-aos = "zoom-in"
          />
        </div>
      </div>
    </div>
  );
}
