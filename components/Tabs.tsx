"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import { MdDevicesOther } from "react-icons/md";

export function TabsDemo() {
  const tabs = [
    {
      title: "Website Development",
      value: "Website Development",
      content: (
        <div className="  lg:w-[85vw] border-[1px] border-gray-300 w-[85vw] flex flex-col justify-center items-center overflow-hidden relative h-auto rounded-2xl p-10 space-y-2 text-xl md:text-4xl font-bold text-black  bg-gray-100">
          <MdDevicesOther className="text-9xl" />
          <p>Website Development</p>
          <p className="text-center font-normal text-base lg:w-[70%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, beatae earum. Illum saepe cupiditate cumque sit vero minima reiciendis rem nostrum natus voluptatum repellat unde ad mollitia, ipsam numquam ut?</p>
        </div>
      ),
    },
    {
      title: "E-Commerce Web",
      value: "E-Commerce Web",
      content: (
        <div className="lg:w-[85vw] border-[1px] border-gray-300 w-[85vw] flex flex-col justify-center items-center   overflow-hidden relative h-auto rounded-2xl space-y-2 p-10 text-xl md:text-4xl font-bold text-black  bg-gray-100">
          <MdDevicesOther className="text-9xl" />
          <p>E-Commerce Web</p>
          <p className="text-center font-normal text-base lg:w-[70%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, beatae earum. Illum saepe cupiditate cumque sit vero minima reiciendis rem nostrum natus voluptatum repellat unde ad mollitia, ipsam numquam ut?</p>
        </div>
      ),
    },
    {
      title: "UI/UX Design",
      value: "UI/UX Design",
      content: (
        <div className="  lg:w-[85vw] border-[1px] border-gray-300 w-[85vw] flex flex-col justify-center items-center  overflow-hidden relative h-auto rounded-2xl space-y-2 p-10 text-xl md:text-4xl font-bold text-black bg-gray-100">
          <MdDevicesOther className="text-9xl" />
          <p>UI/UX Design </p>
          <p className="text-center font-normal text-base lg:w-[70%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, beatae earum. Illum saepe cupiditate cumque sit vero minima reiciendis rem nostrum natus voluptatum repellat unde ad mollitia, ipsam numquam ut?</p>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[45rem] md:h-[50rem]  [perspective:1000px] relative  flex flex-col max-w-md lg:max-w-6xl  w-full  items-center justify-start lg:py-20 py-10">
      <Tabs tabs={tabs} />
    </div>
  );
}
