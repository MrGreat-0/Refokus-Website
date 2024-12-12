import React from "react";
import Navbar from "./Componenets/Navbar";
import Work from "./Componenets/Work";
import Stripes from "./Componenets/Stripes";
import Products from "./Componenets/Products";
import Marquees from "./Componenets/Marquees";
import Blocks from "./Componenets/Blocks";
import Footer from "./Componenets/Footer";
import LocomotiveScroll from "locomotive-scroll";
import Cursor from "./Componenets/Cursor";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full bg-zinc-900 text-white relative font-custom ">
      <Cursor />
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Blocks />
      <Footer />
    </div>
  );
};

export default App;
