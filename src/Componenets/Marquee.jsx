import React from "react";
import { motion } from "motion/react";

const Marquee = ({ elem, direction }) => {
  return (
    <div className="w-full flex overflow-hidden relative">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 100, repeat: Infinity }}
        className="flex flex-shrink-0 py-8 gap-20 px-10 relative"
      >
        {elem.map((url, index) => (
          <img key={index} className="h-6" src={url} alt="logo" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 100, repeat: Infinity }}
        className="flex flex-shrink-0 py-8 gap-20 px-10 relative"
      >
        {elem.map((url, index) => (
          <img key={index} className="h-6" src={url} alt="logo" />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
