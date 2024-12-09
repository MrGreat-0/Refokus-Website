import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-4 px-2 flex items-center gap-14 text-sm justify-between border-b border-zinc-700 relative">
      <div className="n_left flex justify-between md:justify-start w-full relative">
        <img
          className="mr-10"
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="refokus logo"
        />

        <div className="links flex gap-12 relative">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) => {
            return elem.length === 0 ? (
              <span
                key={index}
                className="w-[2px] h-7 rounded bg-zinc-700 hidden md:block"
              ></span>
            ) : (
              <a
                key={index}
                className={`flex items-center gap-1 relative ${
                  index !== 0 ? "hidden md:flex" : ""
                }`}
              >
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.35em #00FF19" }}
                    className="inline-block h-1 w-1 bg-[#00FF19] rounded-full"
                  ></span>
                )}
                {elem}
              </a>
            );
          })}
        </div>
      </div>
      <div className="n_right hidden md:block">
        <Button />
      </div>
    </div>
  );
};

export default Navbar;
