import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main id="home" className="flex  flex-col items-center justify-between ">
      <Hero />
      <div id="projects" className="bg-blue-400 w-screen h-screen "></div>
      <div id="about" className="bg-green-400 w-screen h-screen "></div>
      <div id="contact" className="bg-red-400 w-screen h-screen "></div>
    </main>
  );
}
