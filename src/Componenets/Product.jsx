import React from "react";
import Button from "./Button";

const Product = ({ product }) => {
  return (
    <div className="w-full py-20 relative">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between relative">
        <h1 className="text-6xl capitalize font-semibold">{product.title}</h1>
        <div className="w-1/4 relative">
          <p className="mb-4">{product.description}</p>
          <div className="flex items-center gap-4">
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
