import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-black-200 text-black-300 pt-2 px-2 w-full"
      id="contact"
    >
      <div className="flex flex-col space-y-4 justify-center items-center h-auto  border-b py-4 border-black-300  px-2">
        <span className="text-xs text-center w-full">
          {" "}
          You can also reach me through my socials{" "}
        </span>
        <div className="socials lg:justify-end justify-center flex space-x-3">
          <a href="https://github.com/abdul-rehan7" target="_blank">
            <FaGithub className="p-2  hover:text-black-100 hover:bg-black-300 transition-all cursor-pointer text-4xl rounded-md border text-black-300 border-black-300" />
          </a>
          <a href="https://x.com/mirza_rehan76" target="_blank">
            <FaTwitter className="p-2  hover:text-black-100 hover:bg-black-300 transition-all cursor-pointer text-4xl rounded-md border text-black-300 border-black-300" />
          </a>
          <a href="https://www.linkedin.com/in/abdul-rehan/" target="_blank">
            <FaLinkedin className="p-2  hover:text-black-100 hover:bg-black-300 transition-all cursor-pointer text-4xl rounded-md border text-black-300 border-black-300" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100055767942968" target="_blank">
            <FaFacebook className="p-2  hover:text-black-100 hover:bg-black-300 transition-all cursor-pointer text-4xl rounded-md border text-black-300 border-black-300" />
          </a>
        </div>
      </div>

      <div className="flex text-black-300 justify-center items-center flex-wrap text-center  sm:px-16  py-2 lg:py-2  text-[0.7rem] md:text-sm">
        <p>Copyright &copy; 2024 Abdul Rehan </p>
      </div>
    </footer>
  );
};

export default Footer;
