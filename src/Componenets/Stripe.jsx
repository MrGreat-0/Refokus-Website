import React from "react";

const Stripe = ({ val, isLast }) => {
  return (
    <div
      className={`w-1/6 flex justify-between items-center px-4 py-3 ${
        isLast ? "" : "border-r-[1px] border-zinc-700"
      }`}
    >
      <img src={val.url} alt="logo" />
      <span className="font-semibold">{val.number}</span>
    </div>
  );
};

export default Stripe;
