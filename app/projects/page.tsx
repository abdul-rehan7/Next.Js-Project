import { TabsDemo } from "@/components/Tabs";
import React from "react";

const page = () => {
  const tabs = [
    {
      title: "Tab 1",
      value: "tab1",
      content: <div className="bg-black w-[50vw]"></div>,
    },
    {
      title: "Tab 2",
      value: "tab2",
      content: <div>Content for Tab 2</div>,
    },
    {
      title: "Tab 3",
      value: "tab3",
      content: <div className="text-black">Content for Tab 3</div>,
    },
  ];
  return (
    <div className="w-[100vw]">
      <section
        style={{ backgroundImage: `url(${"/projs.jpg"})`, backgroundBlendMode:"overlay" }}
        className={`flex bg-center bg-cover bg-no-repeat bg-[#000000b3] flex-col lg:flex-row justify-center items-center pt-24 p-10  lg:h-[70vh] h-auto w-screen`}
      >
        <div className="first text-white h-full flex flex-col justify-center py-16    space-y-5 lg:w-[70vw]  w-[96vw]  lg:p-14 p-4">
          <h1 className="lg:text-4xl text-2xl text-center  font-semibold">
            Advanced IT Solutions:
            <span className="text-blue-500"> Empowering Businesses</span> With
            Transforming Tech.
          </h1>
        </div>
      </section>
      <section className="tabs flex mx-auto h-auto justify-center items-center">
        <TabsDemo  /> 
      </section>
      <section className="tabs h-[50rem] w-screen bg-green-500 flex mx-auto justify-center items-center">
        
      </section>
    </div>
  );
};

export default page;
