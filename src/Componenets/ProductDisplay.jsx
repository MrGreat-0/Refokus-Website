import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const ProductDisplay = ({ products, position, value, mover }) => {
  const [movement, setMovement] = useState({ offsetX: 0, offsetY: 0 });

  // console.log("state", movement);

  // console.log("mouseMove", mover);

  useEffect(() => {
    if (mover.clientX && mover.clientY) {
      // const rect = productRef.current.getBoundingClientRect();
      const offsetX = mover.clientX / 10;
      const offsetY = mover.clientY / 10;
      // setMovement({ offsetX, offsetY });
    }
  }, [mover]);

  return (
    //if we remove pointer event, the mouse follower works but for perfectly need working...
    // <div className="absolute top-0 (pointer-events-none) w-full h-full bg-zinc-500">

    <div className="display absolute top-0 pointer-events-none w-full h-full bg-zinc-00 hidden lg:block">
      <div className="w-[35vw] h-full left-[25%] relative bg-zinc-00">
        <motion.div
          initial={{ y: position }}
          animate={{ y: position + "rem" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window w-full h-[18rem] absolute overflow-hidden bg-zinc-00"
        >
          {products.map((elem, index) => {
            return (
              <motion.div
                key={index}
                animate={{ y: -position + "rem" }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                className="w-full h-full relative bg-zinc-00"
              >
                <div
                  style={{
                    transform: `translate3d(${movement.offsetX}px, ${movement.offsetY}px,0)`,
                  }}
                  className="w-[30vw] h-full absolute transition-transform ease-in-out duration-500 bg-zinc-00 "
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
                    className="w-full h-full object-cover"
                    // className={`w-full h-full object-cover transition-opacity duration-500 ${
                    //   value === index ? "opacity-100" : "opacity-0"
                    // }`}
                  >
                    <source src={elem.video} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDisplay;
