import React from "react";
export default function Projects() {
  return (
    <div className="lg:text-4xl text-xl font-medium flex flex-col lg:pb-12 pb-7 items-center text-center">
      <p className=" lg:w-[60%]  bg-gradient-to-r py-12 from-[#ffffff] bg-clip-text text-transparent to-[#6b6b6b]">
        Collaborate with Brands and agencies to Create Impactful Results
      </p>
      <div className="container flex flex-col lg:flex-row lg:space-x-4 lg:space-y-0 space-y-5 justify-center">
        {data.map((item, index) => (
          <div
            key={index}
            className=" p-3 text-left flex flex-col space-y-3 items-start bg-black-200 border border-[#393939] rounded-md "
          >
            <div className="div lg:h-[10rem]  h-[5rem]"></div>
            <h1 className="text-base  font-semibold text-white">
              {item.title}
            </h1>
            <h1 className="text-sm font-light text-white">
              {item.description}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    title: "UI/UX",
    description:
      "Designing Interfaces that are intuitive, effiecient, and enjoyable to use",
  },
  {
    title: "UI/UX",
    description:
      "Designing Interfaces that are intuitive, effiecient, and enjoyable to use",
  },
  {
    title: "UI/UX",
    description:
      "Designing Interfaces that are intuitive, effiecient, and enjoyable to use",
  },
  {
    title: "UI/UX",
    description:
      "Designing Interfaces that are intuitive, effiecient, and enjoyable to use",
  },
];
