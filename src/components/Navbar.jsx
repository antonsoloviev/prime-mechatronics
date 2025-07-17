import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-6 py-4 md:px-20 lg:px-32 bg-transparent">
        <div className="flex justify-center gap-4">
          <div
            className="flex justify-center h-screen"
            style={{ height: "48px" }}
          >
            <img src={assets.logo} alt="" className="object-scale-down" />
          </div>
          <div className="flex items-center">
            <span className="text-xl">PrimeMechatronics</span>
          </div>
        </div>

        <ul className="hidden md:flex gap-7">
          <a
            href="#Header"
            className="cursor-pointer hover:text-gray-400 text-xl"
          >
            Home
          </a>
          <a
            href="#Header"
            className="cursor-pointer hover:text-gray-400 text-xl"
          >
            About
          </a>
          <a
            href="#Header"
            className="cursor-pointer hover:text-gray-400 text-xl"
          >
            Projects
          </a>
          <a
            href="#Header"
            className="cursor-pointer hover:text-gray-400 text-xl"
          >
            More
          </a>
        </ul>
        <button className="hidden cursor-pointer md:block bg-white px-8 py-2 rounded-full text-xl hover:text-gray-400">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
