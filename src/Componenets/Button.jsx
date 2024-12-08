import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({ title = "Get Started" }) => {
  return (
    <div className="w-32 px-3 py-2 bg-zinc-100 text-black rounded-full text-center flex items-center justify-between relative">
      <span className="text-xs font-semibold">{title}</span>
      <IoIosReturnRight />
    </div>
  );
};

export default Button;
