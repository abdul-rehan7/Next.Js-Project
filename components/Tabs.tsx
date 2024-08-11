"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="  lg:w-[85vw] w-[85vw] overflow-hidden relative h-auto rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-b from-gray-200 to-gray-300">
          <p>Product Tab here</p>
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="  lg:w-[85vw] w-[85vw]  overflow-hidden relative h-auto rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-b from-gray-200 to-gray-300">
          <p>Services tab</p>
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="lg:w-[85vw] w-[85vw]   overflow-hidden relative h-auto rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-b from-gray-200 to-gray-300">
          <p>Playground tab</p>
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="lg:w-[85vw] w-[85vw]  flex justify-start overflow-hidden  h-auto rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-b from-gray-200 to-gray-300">
          <p>Content tab</p>
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="lg:w-[85vw] w-[85vw]  overflow-hidden p-10  h-auto rounded-2xl  text-xl md:text-4xl font-bold text-black bg-gradient-to-b from-gray-200 to-gray-300">
          <p>Random tab</p>
          <div className="bg-red-500 h-[20rem] w-[20rem]"></div>
    
        </div>
      ),
    },
  ];

  return (
    <div className="h-[45rem] md:h-[50rem] [perspective:1000px] relative  flex flex-col max-w-md lg:max-w-6xl  w-full  items-center justify-start lg:py-20 py-10">
      <Tabs tabs={tabs} />
    </div>
  );
}
