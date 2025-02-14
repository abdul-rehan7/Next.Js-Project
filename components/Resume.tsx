import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Resume() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-[100vw] py-14 px-4 flex flex-col lg:flex-row lg:justify-center lg:space-x-7 space-y-16 ">
      <div
        data-aos="fade-up"
        className=" lg:w-[40%] lg:h-[32rem] rounded-md  bg-black-300 border broder-black-200/[0.7] hover:bg-gray-200 transition-all text-black-200 p-4"
      >
        <h1 className="lg:-mt-[15%] -mt-[14%] lg:text-5xl text-3xl text-left font-semibold text-black-200">
          Education
        </h1>
        <div className="items  py-7 flex flex-col space-y-5">
          <p className="uppercase lg:text-base text-sm tracking-wider font-medium ">
            specialisation course
          </p>
          <p className="lg:text-base text-xs">
            Certified Cloud Applied Generative AI Engineer, Karachi, Pakistan
            &#40; Feb 2024 to PRESENT &#41;
          </p>
          <p className="lg:text-base text-xs">Next Js Developer</p>
          <p className="lg:text-base text-xs">Web Development Instructor</p>
          <span className="bg-black-200 w-full h-[1px]"></span>
          <p className="lg:text-base text-xs">
            Army Public College Saddar, Karachi, Pakistan &#40;Aug 2022 to Aug
            2024&#41;
          </p>
          <p className="lg:text-base text-xs">Website Development</p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className=" lg:w-[40%] lg:h-[32rem] rounded-md  bg-black-300 border broder-black-200/[0.7]  mt-28 text-black-200 hover:bg-gray-200 transition-all p-4"
      >
        <h1 className="lg:-mt-[15%] text-black-200 -mt-[14%] lg:text-5xl text-3xl text-left font-semibold">
          Experience
        </h1>
        <div className="items  py-7 flex flex-col space-y-5">
          <p className="uppercase lg:text-base text-sm tracking-wider font-medium ">
            Student Leader
          </p>
          <p className="lg:text-base text-xs">
            Governor Sindh Initiative for GenAI, Web3, and Metaverse Feb 2024 -
            PRESENT
          </p>
          <span className="bg-black-200 w-full h-[1px]"></span>
          <p className="uppercase lg:text-base text-sm tracking-wider font-medium ">
            HTML/CSS/JS Instructor
          </p>
          <p className="lg:text-base text-xs">
            Erudite Coaching Centre &#40; April 2024 - July 2024 &#41;
          </p>
          <span className="bg-black-200 w-full h-[1px]"></span>
          <p className="uppercase lg:text-base text-sm tracking-wider font-medium ">
            Website Developer
          </p>
          <p className="lg:text-base text-xs">
            A-FORWARD &#40; Aug 2023 - Nov 2023 &#41;
          </p>
          <span className="bg-black-200 w-full h-[1px]"></span>
          <p className="uppercase lg:text-base text-sm tracking-wider font-medium ">
            Customer Support Representative
          </p>
          <p className="lg:text-base text-xs">
            S&A Solutions &#40; May 2023 - Aug 2023 &#41;
          </p>
        </div>
      </div>
    </div>
  );
}
