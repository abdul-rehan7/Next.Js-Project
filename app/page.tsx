"use client";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import { useEffect } from "react";
import { IoIosMail } from "react-icons/io";

export default function Home() {
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrolled = window.scrollY;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxHeight) * 100;
      
      const progressBar = document.querySelector('.scroll-indicator');
      if (progressBar) {
        (progressBar as HTMLElement).style.width = `${progress}%`;
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);
  return (
    <>
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 scroll-indicator"></div>
      </div>
      
      <main
        id="home"
        className="flex bg-gray-200 flex-col items-center justify-between relative"
      >
        <Hero />
      <div className="wrapper lg:w-[500%] w-[1500%] ">
        <div className="wrapper-track space-x-20 stack  lg:h-[10rem] h-[7rem] bg-gray-200 flex  justify-between p-2 lg:p-10">
          <img
            className="card   lg:w-[20vw] w-[45vw]"
            src="/chakra.svg"
            alt=""
          />
          <img className="card   lg:w-[20vw] w-[45vw]" src="/git.svg" alt="" />
          <img className="card   lg:w-[20vw] w-[45vw]" src="/node.svg" alt="" />
          <img
            className="card   lg:w-[20vw] w-[45vw]"
            src="/react.svg"
            alt=""
          />
          <img className="card   lg:w-[20vw] w-[45vw]" src="/ts.svg" alt="" />
          <img className="card   lg:w-[20vw] w-[45vw]" src="/next.svg" alt="" />
          <img className="card   lg:w-[20vw] w-[45vw]" src="/tail.svg" alt="" />
          <img
            className="card   lg:w-[20vw] w-[45vw]"
            src="/chakra.svg"
            alt=""
          />
          <img className="card   lg:w-[20vw] w-[45vw]" src="/git.svg" alt="" />
          <img className="card   lg:w-[20vw] w-[45vw]" src="/node.svg" alt="" />
          <img
            className="card   lg:w-[20vw] w-[45vw]"
            src="/react.svg"
            alt=""
          />
          <img className="card   lg:w-[20vw] w-[45vw]" src="/ts.svg" alt="" />
          <img className="card   lg:w-[20vw] w-[45vw]" src="/next.svg" alt="" />
          <img className="card   lg:w-[20vw] w-[45vw]" src="/tail.svg" alt="" />
          <img
            className="card   lg:w-[20vw] w-[45vw]"
            src="/chakra.svg"
            alt=""
          />
          <img className="card   lg:w-[20vw] w-[45vw]" src="/git.svg" alt="" />
          <img className="card   lg:w-[20vw] w-[45vw]" src="/node.svg" alt="" />
          <img
            className="card   lg:w-[20vw] w-[45vw]"
            src="/react.svg"
            alt=""
          />
          <img className="card   lg:w-[20vw] w-[45vw]" src="/ts.svg" alt="" />
          <img className="card   lg:w-[20vw] w-[45vw]" src="/next.svg" alt="" />
          <img className="card   lg:w-[20vw] w-[45vw]" src="/tail.svg" alt="" />
        </div>
      </div>

      <div id="projects" className="w-auto bg-black-100 h-auto py-4 px-10">
        <Projects />
      </div>
      <div className="bg-black-100">

      {/* <Resume /> */}
      </div>
      <div
        id="about"
        className="bg-black-100 lg:pt-20 pt-16  lg:pb-20 pb-16 flex flex-col items-center border-t border-black-200 w-screen  "
      >
        <div className=" lg:w-[45%] w-[85%] text-center py-12 bg-gradient-to-r lg:text-6xl text-3xl font-semibold  from-black-200/[0.6] bg-clip-text text-transparent to-black-200">
          Tell me about Your Next Project
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/abdul-rehan/"
            target="_blank"
            className=" text-black-300 text-sm border border-black-300 bg-black-200 py-2 px-4 rounded-full flex justify-between items-center"
          >
            Get in Touch <IoIosMail className="lg:text-2xl text-sm ml-2  " />
          </a>
        </div>
      </div>
    </main>
    </>
  );
}
