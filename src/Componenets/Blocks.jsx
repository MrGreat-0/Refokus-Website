import React from "react";
import Block from "./Block";

const Blocks = () => {
  return (
    <div className="w-full relative mt-32">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-2 py-20 px-7 relative">
        <Block
          width={"basis-1/3"}
          start={false}
          para={true}
          heading={"Up next news"}
          subheading={
            <>
              Insights and behind <br /> the senses
            </>
          }
          hover={"hover:bg-zinc-700"}
        />
        <Block
          width={"basis-2/3"}
          start={true}
          para={false}
          heading={"Get in touch"}
          subheading={
            <>
              Let's get to it, <br />
              together
            </>
          }
          hover={"hover:bg-[#7443ff]"}
        />
      </div>
    </div>
  );
};

export default Blocks;
