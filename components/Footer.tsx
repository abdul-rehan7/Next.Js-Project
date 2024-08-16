import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-gray-300 w-[100vw]  text-black ">
     
      <div className="flex bg-gray-400 justify-center items-center flex-wrap text-center  sm:px-16  py-2 lg:py-5  text-[0.7rem] md:text-sm">
        <p>Copyright &copy; 2024 Abdul Rehan </p>
      </div>
    </footer>
  );
};

export default Footer;
