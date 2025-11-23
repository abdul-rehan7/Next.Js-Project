"use client";
import { useEffect, useState } from "react";
import { FaPencilAlt, FaDesktop, FaMobileAlt, FaBolt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Link from "next/link";
import { CiLocationArrow1 } from "react-icons/ci";

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  projectUrl: string;
  image: string;
}


export default function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
  AOS.init();

  const loadProjects = async () => {
    const res = await fetch("https://portfolio-projects-api-eight.vercel.app/api/projects");
    const data = await res.json();
    setProjects(data);
  };

  loadProjects();
}, []);

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
  <div key={item.id} className="bg-black-300 space-y-3 border text-left border-black-200/[0.3] p-2 md:w-[30vw]">
    
    <img src={item.image} alt={item.title} className="lg:h-[20rem] lg:w-full" />

    <p className="capitalize md:text-xl text-base font-bold">
      {item.title}
    </p>

    <p className="md:text-sm text-xs text-justify font-light">
      {item.description}
    </p>

    <div className="skills grid md:grid-cols-3 grid-cols-3 md:gap-3 gap-2">
      {item.techStack.map((tech) => (
        <span key={tech} className="bg-gray-200 text-center md:text-sm text-[0.6rem] px-1 md:px-2 md:py-2 rounded-md">
          {tech}
        </span>
      ))}
    </div>
      <Link className="text-sm md:text-base flex space-x-3 items-center border bg-blue-200 hover:bg-transparent transition-all border-blue-400 rounded-md p-2 w-auto justify-center" href={item.projectUrl} target="_blank">
      <p>Live Preview </p><CiLocationArrow1/>
      </Link>


  </div>
))}

      </div>
    </div>
  );
}


// const projects = [
//   {
//     name: "DevInsight | Tech Blogs",
//     img: "/projects/1.png",
//     skills: ["Next JS", "React Js", "Tailwind CSS"],
//     Description:
//       "A tech blog dedicated to sharing the latest trends and tutorials in software development. It provides valuable insights for developers of all skill levels to enhance their skills and stay informed.",
//   },
//   {
//     name: "Flavor Fusion ",
//     img: "/projects/2.png",
//     skills: ["Next JS", "React Js", "Tailwind CSS","Fast API"],
//     Description:
//       "An intuitive food ordering website that connects customers with local restaurants. Users can explore menus, customize orders, and enjoy convenient delivery options.",
//   },
//   {
//     name: "DevToDeploy",
//     img: "/projects/3.png",
//     skills: ["Next JS","Aceternity UI", "Tailwind CSS", "ShadCN"],
//     Description:
//       " A Karachi-based software startup that turns innovative ideas into robust software solutions offering comprehensive development and deployment services tailored to client needs.",
//   },
//   {
//     name: "Shop Savvvy",
//     img: "/projects/4.png",
//     skills: ["Next JS","Tailwind CSS", "API", "Aceternity UI"],
//     Description:
//       "A cutting-edge eCommerce site providing a seamless shopping experience. With a diverse product range and secure payments, it makes online shopping easy and efficient.",
//   }
// ];

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
