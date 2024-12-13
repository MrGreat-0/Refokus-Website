import React from "react";

const Stripe = ({ val, isLast, shouldHide }) => {
  return (
    <div
      className={`basis-1/6 flex justify-between items-center gap-2 px-4 py-3 relative ${
        isLast
          ? "border-b-[1px] border-zinc-700"
          : "border-b-[1px] border-r-[1px] border-zinc-700"
      } ${shouldHide ? "hidden xl:flex" : ""} `}
    >
      <img className="min-h-[26px]" src={val.url} alt="logo" loading="lazy" />
      <span className="font-semibold text-xl">{val.number}</span>
    </div>
  );
};

export default Stripe;
