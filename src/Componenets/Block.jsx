import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Block = ({ width, start, para, heading, subheading, hover }) => {
  return (
    <div
      className={`group ${width} ${hover} transition-all ease-in-out duration-500 bg-zinc-800 p-5 rounded-xl min-h-[60vh] flex flex-col justify-between relative`}
    >
      <div className="w-full relative group-hover:px-2 transition-all ease-in-out duration-500">
        <div className="w-full flex justify-between items-center relative">
          <h3>{heading}</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl mt-5">{subheading}</h1>
      </div>
      <div className="mt-10 sm:m-0 relative">
        {start && (
          <>
            <h1 className="text-7xl sm:text-8xl font-bold tracking-tight leading-none">
              Start a project
            </h1>
            <button className="rounded-full py-2 px-3 font-semibold border-[1px] border-zinc-50 mt-5">
              Contact us
            </button>
          </>
        )}

        {para && (
          <p className="text-sm text-zinc-500 mt-3">
            Explore what divides our team.
          </p>
        )}
      </div>
    </div>
  );
};

export default Block;
