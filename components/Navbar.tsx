"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { TbSolarPanel } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="w-full absolute flex z-50 items-center justify-center">
      <Navbar className="top-0" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        " absolute lg:px-20 px-7 py-6 flex justify-between items-center bg-transparent inset-x-0 max-w-[100vw] ",
        className
      )}
    >
      <a href="#home" className="text-black text-2xl font-semibold  ">DevelopersFleet</a>
      <div className="hidden space-x-10 text-lg lg:block">
        <a href="#home" className="link">
          Home
        </a>
        <a href="#projects" className="link">
          Projects
        </a>
        <a href="#about" className="link">
          About
        </a>
        <a href="#contact" className="link">
          Contact
        </a>
      </div>
      <div className="button hidden lg:block">
        <a
          className="py-3 px-5 hover:text-white hover:bg-black text-black transition-all rounded-full border-2 border-black"
          href="/www.linkedin.com"
        >
          Get Started
        </a>
      </div>
      <div className="lg:hidden">
        <div
          className="hamburger cursor-pointer space-y-1"
          onClick={() => setIsOpen(true)}
        >
          <div className="line bg-black w-7 h-1 rounded-full"></div>
          <div className="line bg-black w-7 h-1 rounded-full"></div>
          <div className="line bg-black w-7 h-1 rounded-full"></div>
        </div>
        {isOpen && (
          <div className="links flex flex-col text-2xl w-[100vw] h-[100vh]  top-0 right-0 bg-gray-300 absolute py-2 px-9 space-y-4">
            <div className="cursor-pointer py-5  font-bold flex items-center justify-between">
              <span>DevelopersFleet</span>
              <span onClick={() => setIsOpen(false)}>
                <IoClose className="text-2xl" />
              </span>
            </div>

            <div className="w-[100%] flex flex-col justify-center py-7 items-center ">
              <div className="flex text-center flex-col space-y-4">
                <a
                  onClick={() => setIsOpen(false)}
                  className="link text-black w-full py-3 "
                  href="#home"
                >
                  Home
                </a>
                <a
                  onClick={() => setIsOpen(false)}
                  className="link text-black w-full py-3 "
                  href="#projects"
                >
                  Projects
                </a>
                <a
                  onClick={() => setIsOpen(false)}
                  className="link text-black w-full py-3 "
                  href="#about"
                >
                  About
                </a>
                <a
                  onClick={() => setIsOpen(false)}
                  className="link text-black w-full py-3 "
                  href="#contact"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
