import React from "react";
import { TextGenerateEffectDemo } from "@/components/TextGen";

export function GridBackgroundDemo() {
  return (
    <div className="lg:h-[50rem] h-[45rem]  py-5 w-full dark:bg-[var(--primary)] bg-[var(--primary)]  dark:bg-grid-white/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[var(--primary)] bg-[var(--primary)] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="z-10 p-24 justify-center items-center h-screen lg:pt-7 pt-14  w-screen lg:p-12 flex flex-col lg:flex-row ">
        <div className="first p-4 flex flex-col  w-[95vw] lg:w-[55vw] h-[60vh] ">
          <div>
            <TextGenerateEffectDemo />
          </div>
        </div>
        <div className="second  mt-7 lg:flex hidden lg:justify-end">
          <img
            src="/hero-item.svg"
            className="lg:w-[35rem] lg:h-[35rem] overflow-x-hidden  h-[20rem] w-[20rem]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
