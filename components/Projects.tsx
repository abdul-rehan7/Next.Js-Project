"use client";
import { useEffect } from "react";
import { FaPencilAlt, FaDesktop, FaMobileAlt, FaBolt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

// ..

export default function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="lg:text-4xl  text-xl  flex flex-col lg:py-16 pb-10 items-center text-center">
   
      <p className=" source-serif-4-bold  lg:w-[60%]  bg-gradient-to-r py-12  text-black-200">
        Collaborate with Brands and agencies to Create Impactful Results
      </p>

      <div className=" flex flex-col lg:flex-row lg:space-x-4 lg:space-y-0 space-y-5 justify-center">
        {data.map((item, index) => (
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            key={index}
            className=" p-3 lg:p-4 text-left flex flex-col space-y-3 items-start bg-black-300 border border-black-200/[0.3] rounded-md "
          >
            <div className="text-xl text-black-200/[0.8]">{item.icon}</div>
            <h1 className="text-base  font-semibold text-black-200/[0.8]">
              {item.title}
            </h1>
            <h1 className="text-sm font-light text-black-200/[0.8]">
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
    icon: <FaBolt />,
    title: "Web Development",
    description:
      "Designing Interfaces that are intuitive, effiecient, and enjoyable to use",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description:
      "Designing Interfaces that are intuitive, effiecient, and enjoyable to use",
  },
  {
    icon: <FaPencilAlt />,
    title: "UI/UX",
    description:
      "Designing Interfaces that are intuitive, effiecient, and enjoyable to use",
  },
  {
    icon: <FaDesktop />,
    title: "Design & Creative",
    description:
      "Designing Interfaces that are intuitive, effiecient, and enjoyable to use",
  },
];
