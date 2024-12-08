import React from "react";
import Product from "./Product";

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

  return (
    <div className="w-full relative my-32">
      {products.map((elem, index) => (
        <Product key={index} product={elem} />
      ))}
    </div>
  );
};

export default Products;
