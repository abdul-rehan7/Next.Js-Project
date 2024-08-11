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
        "absolute lg:px-20 px-7 py-6 flex justify-between items-center bg-[#eeeeeed5] inset-x-0 max-w-[100vw] ",
        className
      )}
    >
      <div className="text-black text-2xl font-semibold  ">
       DevelopersFleet
      </div>
      <div className="hidden space-x-10 text-lg lg:block">
        
          <HoveredLink href="/">Home</HoveredLink>
          <HoveredLink href="/services">Services</HoveredLink>
          <HoveredLink href="/about">About</HoveredLink>
          <HoveredLink href="/contact">Contact</HoveredLink>
      
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
          <div className="links flex flex-col text-2xl w-[100vw] h-[70vh]  top-0 right-0 bg-white absolute py-4 px-11 space-y-4">
            <div className="cursor-pointer py-5  font-bold flex items-center justify-between">
              <span>
              DevelopersFleet
              </span>
              <span onClick={() => setIsOpen(false)}>
                <IoClose className="text-4xl" />
              </span>
            </div>
            <Link
              onClick={() => setIsOpen(false)}
              className="text-black hover:text-green-500 border-b-[1px] py-3 border-gray-300"
              href="/"
            >
              Home
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              className="text-black hover:text-green-500 border-b-[1px] py-3 border-gray-300"
              href="/about"
            >
              About
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              className="text-black hover:text-green-500 border-b-[1px] py-3 border-gray-300"
              href="/services"
            >
              Services
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              className="text-black hover:text-green-500 border-b-[1px] py-3 border-gray-300"
              href="/contact"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
