"use client";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

const NewNav = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="bg-transparent border-b border-black-300/[0.3]  absolute z-[20] px-6 py-3 flex lg:justify-between justify-end  items-center w-full">
        <div className="logo  hidden lg:flex items-center text-black-300 space-x-2  ">
          <IoIosMail className="border text-2xl p-[4px] rounded-sm border-black-300 " />
          <a href="mailto:abdulrehan0317@gmail.com" className=" text-base">
            {" "}
            contact@rehan.co
          </a>
        </div>
        <button
          className="cursor-pointer text-black-300 rounded lg:hidden"
          onClick={() => setVisible(true)} // Click handler to open the menu
        >
          <div className="burger flex flex-col space-y-1">
            <div className="line bg-black-300 h-1 w-7 rounded-full"></div>
            <div className="line bg-black-300 h-1 w-7 rounded-full"></div>
            <div className="line bg-black-300 h-1 w-7 rounded-full"></div>
          </div>
        </button>
        <div className="lg:flex hidden space-x-2 p-2">
          <a href="#home" className="link text-black-300">
            Home
          </a>
          <span className="text-black-300 flex items-center">/</span>
          <a href="#projects" className="link text-black-300">
            Projects
          </a>
          <span className="text-black-300 flex items-center">/</span>
          <a href="#about" className="link text-black-300">
            About
          </a>
          <span className="text-black-300 flex items-center">/</span>
          <a href="#contact" className="link text-black-300">
            Contact
          </a>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 shadow-[#0000006f] backdrop-blur-md  shadow-md bg-[#ffffff45] z-[100] p-2 px-4 text-black h-full flex w-[50%] transition-transform duration-500 ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-6">
          <IoClose
            className="text-3xl cursor-pointer"
            onClick={() => setVisible(false)} // Click handler to close the menu
          />

          <div className="flex flex-col space-y-4">
            <a
              className="link w-[10rem]"
              href="#home"
              onClick={() => setVisible(false)}
            >
              Home
            </a>
            <a
              className="link w-[10rem]"
              href="#projects"
              onClick={() => setVisible(false)}
            >
              Projects
            </a>
            <a
              className="link w-[10rem]"
              href="#about"
              onClick={() => setVisible(false)}
            >
              About
            </a>
            <a
              className="link w-[10rem]"
              href="#contact"
              onClick={() => setVisible(false)}
            >
              Contact
            </a>
          </div>
          <div className="h-full flex flex-col justify-end">
            <a
              href="mailto:abdulrehan0317@gmail.com"
              className="font-medium text-sm"
            >
              {" "}
              contact@rehan.co
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewNav;
