import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { IoIosMail } from "react-icons/io";

export default function Home() {
  return (
    <main id="home" className="flex  flex-col items-center justify-between ">
      <Hero />
      <div className="stack w-screen h-[10rem] bg-black-200 flex  justify-between p-7"></div>
      <div id="projects" className="bg-black-100 w-screen h-auto p-4 ">
        <Projects />
      </div>
      <div
        id="about"
        className="bg-black-100 lg:pt-20 pt-16  lg:pb-20 pb-16 flex flex-col items-center border-t border-black-200 w-screen  "
      >
        <div className=" lg:w-[45%] w-[85%] text-center py-12 bg-gradient-to-r lg:text-6xl text-3xl font-semibold  from-[#ffffff] bg-clip-text text-transparent to-[#6b6b6b]">
          Tell me about Your Next Project
        </div>
        <div >
          <a
            href="https://www.linkedin.com/in/abdul-rehan/"
            target="_blank"
            className=" text-black-300 text-sm border border-black-300 bg-black-200 py-2 px-4 rounded-md flex justify-between items-center"
          >
            Get in Touch{" "}
            <IoIosMail className="lg:text-2xl text-sm ml-2  " />
          </a>
        </div>
      </div>
    </main>
  );
}
