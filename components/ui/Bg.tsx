import React from "react";

export function GridBackgroundDemo() {
  return (
    <div className="h-[50rem] w-full dark:bg-[var(--primary)] bg-[var(--primary)]  dark:bg-grid-white/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[var(--primary)] bg-[var(--primary)] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
   <div className="flex bg-red-500 w-screen justify-around ">
    <p className="text-white">Lorem ipsum dolor sit amet.</p>
  <div className="box bg-green-500 w-7 h-7 "></div>
   </div>
    </div>
  );
}
