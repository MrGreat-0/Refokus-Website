import React, { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react";

const Products = () => {
  const products = [
    {
      title: "arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: false,
      case: true,
      start: true,
    },
    {
      title: "cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: false,
      start: true,
      case: false,
    },
    {
      title: "layout land",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: false,
      start: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: false,
      start: true,
      case: false,
    },
    {
      title: "maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: false,
      start: true,
      case: false,
    },
  ];

  const [postion, setPosition] = useState(0);
  const mover = (val) => {
    setPosition(val * 19);
  };

  return (
    <div className="w-full relative my-32">
      {products.map((elem, index) => (
        <Product key={index} product={elem} mover={mover} index={index} />
      ))}

      <div className="absolute top-0 pointer-events-none w-full h-full">
        <motion.div
          initial={{ y: postion, x: "-50%" }}
          animate={{ y: postion + "vw" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window w-[26vw] h-[19vw] bg-white absolute left-[42%] overflow-hidden"
        >
          <motion.div
            animate={{ y: -postion + "vw" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-100"
          ></motion.div>

          <motion.div
            animate={{ y: -postion + "vw" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-200"
          ></motion.div>

          <motion.div
            animate={{ y: -postion + "vw" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-300"
          ></motion.div>

          <motion.div
            animate={{ y: -postion + "vw" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-400"
          ></motion.div>

          <motion.div
            animate={{ y: -postion + "vw" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-500"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
