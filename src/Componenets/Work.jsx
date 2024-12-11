import React, { useState } from "react";
import { useScroll } from "motion/react";

const Work = () => {
  const [images, setImages] = useState([
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8c8de92be5a9bdae6f1_Layout%20Land%20-%2016%209%20(A)-p-1080.webp",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66a2cefa6def1aabe206b2f6_TTR%20-%2016%209%20(A)-p-1080.webp",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d407eef769166de4e917_Kablamo%20-%2016%209%20(A)-p-1080.webp",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d669e8dd55fff91862e4_Weglot%20Like%20Magic%20-%2016%209%20(A).webp",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d845d2ededb4ef0bae51_YIR%202022%20-%2016%209%20(A)-p-1080.webp",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d6dab55cd38f78a07f92_Summon%20-%2016%209%20(A)-p-1080.webp",
      top: "70%",
      left: "50%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    // console.log(Math.floor(data * 100));
    function showImage(arr) {
      setImages((prev) => {
        return prev.map((item, index) => {
          return arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true };
        });
      });
    }

    switch (Math.floor(data * 100)) {
      case 0:
        showImage([]);
        break;
      case 1:
        showImage([0]);
        break;
      case 2:
        showImage([0, 1]);
        break;
      case 4:
        showImage([0, 1, 2]);
        break;
      case 6:
        showImage([0, 1, 2, 3]);
        break;
      case 8:
        showImage([0, 1, 2, 3, 4]);
        break;
      case 10:
        showImage([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full relative">
      <div className="max-w-screen-lg mx-auto text-center relative mt-2">
        <h1 className="text-[45vw] md:text-[30vw] leading-none tracking-tight select-none">
          work
        </h1>
        <div className="w-full h-full absolute top-0 left-0">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  className="h-[30vw] sm:h-48 md:h-52 lg:h-56 xl:h-60 absolute -translate-x-1/2 -translate-y-1/2 rounded-lg"
                  style={{ top: elem.top, left: elem.left }}
                  src={elem.url}
                  alt="image"
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
