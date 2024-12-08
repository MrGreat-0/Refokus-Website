import React from "react";

const Footer = () => {
  return (
    <div className="w-full relative">
      <div className="max-w-screen-lg mx-auto flex justify-between py-20 relative">
        <div className="f-left w-3/5 relative flex flex-col  ">
          <h1 className="text-[10.5rem] font-bold tracking-tight leading-none">
            refokus.
          </h1>
          <div className="relative flex items-center gap-8 mt-10 w-full">
            {["privacy policy", "cookie policy", "impressum", "terms"].map(
              (elem, index) => {
                return (
                  <h5 key={index} className="text-xs capitalize text-zinc-500">
                    {elem}
                  </h5>
                );
              }
            )}
          </div>
        </div>
        <div className="f-right w-2/5 relative ">
          <div className="relative flex justify-around">
            <div className="relative basis-1/4 ">
              <h5 className="text-xs text-zinc-400">Socials</h5>
              <div className="flex flex-col gap-3 mt-10 relative">
                {["instagram", "twitter(X?)", "linkedIn"].map((elem, index) => {
                  return (
                    <h5
                      key={index}
                      className="text-xs capitalize text-zinc-500"
                    >
                      {elem}
                    </h5>
                  );
                })}
              </div>
            </div>
            <div className="relative basis-1/4  ">
              <h5 className="text-xs text-zinc-400">Sitemap</h5>
              <div className="flex flex-col gap-3 mt-10 relative">
                {["home", "work", "careers", "contact"].map((elem, index) => {
                  return (
                    <h5
                      key={index}
                      className="text-xs capitalize text-zinc-100"
                    >
                      {elem}
                    </h5>
                  );
                })}
              </div>
            </div>
            <div className="relative basis-2/4 flex flex-col items-end mt-14  ">
              <p className="text-sm text-right font-semibold ">
                Refokus is a pioneering digital agency driven by design and
                empowered by technology.
              </p>
              <button className="py-2 px-3 text-xs bg-blue-600 flex gap-2 w-36 mt-6">
                <img
                  className="h-4"
                  src="https://icons.iconarchive.com/icons/simpleicons-team/simple/256/webflow-icon.png"
                  alt="webflow logo"
                />
                Enterprise Partner
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
