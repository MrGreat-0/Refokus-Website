import React, { useEffect, useState } from "react";
import Button from "./Button";

const Product = ({ product, enter, index, moving }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full px-3 pt-4 lg:p-0 relative">
      <div
        onMouseEnter={() => enter(index)}
        onMouseLeave={() => enter(0)}
        onMouseMove={(e) => moving(e)}
        style={{
          backgroundColor:
            windowWidth <= 1024 ? product.bgColor : "transparent",
        }}
        className="lg:max-w-screen-xl mx-auto py-12 px-6 w-full sm:h-[90vw] lg:h-auto rounded-xl flex flex-col lg:flex-row items-center justify-between relative"
      >
        <h1 className="text-6xl capitalize font-semibold">{product.title}</h1>
        <img
          className="h-full w-full cover bg-no-repeat bg-center my-6 rounded-lg lg:hidden"
          src={product.image}
          alt={product.title}
        />
        <div className=" lg:w-1/3 flex flex-col relative">
          <p className="mb-14 text-lg">{product.description}</p>
          <div className="flex items-center justify-center flex-wrap lg:justify-start gap-4">
            {product.start && <Button />}
            {product.live && <Button title="Live Website" />}
            {product.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
