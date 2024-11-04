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

      <p className="font-bold bg-gradient-to-r py-12  text-black-200">
        PROJECTS
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-16 gap-4  ">
        {projects.map((item) => (
          <div key={item.name} className="bg-black-300 space-y-3 border text-left border-black-200/[0.3] p-2 md:w-[30vw]">
            <img src={item.img} alt={item.name} className="lg:h-[20rem] lg:w-[25rem]" />
            <p className="capitalize md:text-xl text-base font-bold"> {item.name}</p>
            <p className="md:text-sm text-xs text-justify font-light">{item.Description}</p>
            <div className="skills grid md:grid-cols-3 grid-cols-3 md:gap-3 gap-2 ">
              {item.skills.map((item)=>(
              <span className="bg-gray-200 text-center md:text-sm text-[0.6rem] px-1 md:px-2 md:py-2 rounded-md ">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const projects = [
  {
    name: "DevInsight | Tech Blogs",
    img: "/projects/1.png",
    skills: ["Next JS", "React Js", "Tailwind CSS"],
    Description:
      "A tech blog dedicated to sharing the latest trends and tutorials in software development. It provides valuable insights for developers of all skill levels to enhance their skills and stay informed.",
  },
  {
    name: "Flavor Fusion ",
    img: "/projects/2.png",
    skills: ["Next JS", "React Js", "Tailwind CSS","Fast API"],
    Description:
      "An intuitive food ordering website that connects customers with local restaurants. Users can explore menus, customize orders, and enjoy convenient delivery options.",
  },
  {
    name: "DevToDeploy",
    img: "/projects/3.png",
    skills: ["Next JS","Aceternity UI", "Tailwind CSS", "ShadCN"],
    Description:
      " A Karachi-based software startup that turns innovative ideas into robust software solutions offering comprehensive development and deployment services tailored to client needs.",
  },
  {
    name: "Shop Savvvy",
    img: "/projects/4.png",
    skills: ["Next JS","Tailwind CSS", "API", "Aceternity UI"],
    Description:
      "A cutting-edge eCommerce site providing a seamless shopping experience. With a diverse product range and secure payments, it makes online shopping easy and efficient.",
  }
];

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
