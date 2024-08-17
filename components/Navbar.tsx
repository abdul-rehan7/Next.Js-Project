"use client";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const NewNav = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="bg-blue-100 absolute z-[20] px-6 py-3 flex justify-between items-center w-full">
        <div className="logo text-2xl font-bold">Abdul Rehan</div>
        <button
          className="cursor-pointer text-white rounded lg:hidden"
          onClick={() => setVisible(true)} // Click handler to open the menu
        >
          <div className="burger flex flex-col space-y-1">
            <div className="line bg-black h-1 w-7 rounded-full"></div>
            <div className="line bg-black h-1 w-7 rounded-full"></div>
            <div className="line bg-black h-1 w-7 rounded-full"></div>
          </div>
        </button>
        <div className="lg:flex hidden space-x-5 p-2">
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
        </div>
      </div>
    </>
  );
};

export default NewNav;
