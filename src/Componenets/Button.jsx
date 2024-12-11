import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({ title = "Get Started" }) => {
  return (
    <div className="w-32 h-8 px-3 py-2 bg-zinc-100 text-black rounded-full text-center overflow-hidden group">
      <div className="flex items-center justify-between relative transform group-hover:-translate-y-[150%] transition-transform duration-300 ease-custom-bezier">
        <span className="text-xs font-semibold">{title}</span>
        <IoIosReturnRight />
      </div>

      <div className="flex items-center justify-between relative transform translate-y-[30%] group-hover:-translate-y-[100%] transition-transform duration-300 ease-custom-bezier">
        <span className="text-xs font-semibold">{title}</span>
        <IoIosReturnRight />
      </div>
    </div>
  );
};

export default Button;
