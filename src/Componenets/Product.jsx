import React from "react";
import Button from "./Button";

const Product = ({ product, mover, index }) => {
  return (
    <div className="w-full p-2 relative">
      <div
        onMouseEnter={() => {
          mover(index);
        }}
        className="lg:max-w-screen-xl mx-auto py-12 px-6 w-full sm:h-[100vw] lg:h-auto rounded-xl flex flex-col border lg:border-none lg:flex-row items-center justify-between relative"
      >
        <h1 className="text-6xl capitalize font-semibold">{product.title}</h1>

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
