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
      <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-16 gap-4 relative">
        {projects.map((item, index) => (
  <div 
    key={item.id} 
    className="group relative shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden md:w-[30vw] p-1"
    style={{background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)'}}
    data-aos="fade-up"
    data-aos-delay={index * 100}
  >
    <div className="bg-white rounded-xl h-full overflow-hidden">
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div className="relative overflow-hidden rounded-t-2xl">
      <img 
        src={item.image} 
        alt={item.title} 
        className="lg:h-[20rem] w-full h-48 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1 transform-gpu" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    
    <div className="relative p-6 space-y-4">
      <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent transition-all duration-300">
        {item.title}
      </h3>

      <p className="text-gray-600 md:text-base text-sm leading-relaxed">
        {item.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {item.techStack.slice(0, 4).map((tech, techIndex) => (
          <span 
            key={tech} 
            className="inline-flex items-center px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-full border border-gray-200 hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 transition-all duration-300 hover:scale-105"
            style={{ animationDelay: `${techIndex * 100}ms` }}
          >
            {tech}
          </span>
        ))}
        {item.techStack.length > 4 && (
          <span className="inline-flex items-center px-3 py-1.5 text-xs font-medium bg-gray-100 text-gray-500 rounded-full border border-gray-200">
            +{item.techStack.length - 4} more
          </span>
        )}
      </div>

      <Link 
        className="group/btn relative inline-flex items-center justify-center gap-2 w-full mt-4 px-6 py-3 text-sm font-semibold text-white bg-black rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 overflow-hidden" 
        href={item.projectUrl} 
        target="_blank"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
        <span className="relative z-10">View Project</span>
        <CiLocationArrow1 className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"/>
      </Link>
    </div>
    </div>
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
