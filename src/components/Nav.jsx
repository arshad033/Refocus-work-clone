import React from "react";
import logo from "../assets/logo.png";
import { FaArrowTrendUp } from "react-icons/fa6";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

function Nav() {
  return (
    <div className="w-full min-h-16 text-white fixed bg-black z-10 flex justify-between items-center px-8 md:px-24">
      <img src={logo} alt="" className="h-[120px]" />
      <div className="hidden md:flex gap-20 items-center w-max p-2 h-full">
        <div className="flex gap-10">
          {["Home", "Work", "About", "News", "Career"].map((item, index) => {
            return (
              <h1
                key={index}
                className="flex justify-center items-center gap-2"
              >
                {index === 1 && (
                  <span className="inline-block bg-green-400 h-1 w-1 rounded-[100%]"></span>
                )}
                {item}
              </h1>
            );
          })}
        </div>
        <button className="px-4 h-8 flex justify-center items-center gap-4 rounded-3xl bg-white text-black">
          Start a Project{" "}
          <span>
            <FaArrowTrendUp />
          </span>
        </button>
      </div>
      <div className="md:hidden">
        <HiOutlineMenuAlt3 className="h-8 w-8 text-white" />
      </div>
    </div>
  );
}

export default Nav;
