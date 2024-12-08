import React from "react";

const Marquee = ({ elem }) => {
  return (
    <div className="w-full flex py-8  gap-10 whitespace-nowrap overflow-x-auto">
      {elem.map((url,index) => (
        <img key={index} className="h-5 flex-shrink-0" src={url} alt="logo" />
      ))}
    </div>
  );
};

export default Marquee;
