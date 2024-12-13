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
      case: false,
      start: true,
      video:
        "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/arqitel-43.webm",
      image:
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8682a7bae884b4a8177_Arqitel%20-%2016%209%20(A).webp",
    },
    {
      title: "cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: false,
      start: true,
      case: true,
      video:
        "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/cula-43.webm",
      image:
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8816e60550876d3d56e_Cula-%2016%209%20(A).webp",
    },
    {
      title: "layout land",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: false,
      start: true,
      case: false,
      video:
        "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/layoutland-43.webm",
      image:
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8c8de92be5a9bdae6f1_Layout%20Land%20-%2016%209%20(A).webp",
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      start: true,
      case: false,
      video:
        "https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm",
      image:
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66a2cefa6def1aabe206b2f6_TTR%20-%2016%209%20(A).webp",
    },
    {
      title: "maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: false,
      start: true,
      case: false,
      video:
        "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/maniv-43.webm",
      image:
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8b035ffab0e6b77c5f5_Maniv%20-%2016%209%20(A).webp",
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
          className="window w-[30vw] h-[19vw] absolute left-[42%] overflow-hidden"
        >
          {products.map((elem, index) => {
            return (
              <motion.div
                key={index}
                animate={{ y: -postion + "vw" }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                className={`child w-full h-full rounded-lg overflow-hidden`}
              >
                <video
                  width="100%"
                  height="100%"
                  loop
                  autoPlay
                  muted
                  playsInline
                  preload="auto"
                  poster={elem.image}
                  className="h-full w-full object-cover"
                >
                  <source src={elem.video} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
