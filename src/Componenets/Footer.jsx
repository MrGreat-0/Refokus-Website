import React from "react";

const Footer = () => {
  return (
    <div className="w-full relative ">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center flex-col-reverse lg:flex-row pb-20 px-2 relative">
        <div className="f-left lg:basis-3/5 relative flex flex-col ">
          <h1 className="text-[26vw] sm:text-[10.5rem] font-bold tracking-tight mt-10 lg:m-0">
            refokus.
          </h1>
          <div className="relative flex items-center self-center sm:self-start gap-4 sm:gap-8 mt-10 max-w-4/5">
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
        <div className="f-right lg:basis-2/5 relative">
          <div className="relative flex gap-5 sm:gap-10 justify-center">
            <div className="relative flex gap-5 sm:gap-10 mt-10">
              <div className="relative basis-1/4 ">
                <h5 className="text-xs text-zinc-400">Socials</h5>
                <div className="flex flex-col gap-3 mt-10 relative">
                  {["instagram", "twitter(X?)", "linkedIn"].map(
                    (elem, index) => {
                      return (
                        <h5
                          key={index}
                          className="text-xs capitalize text-zinc-500"
                        >
                          {elem}
                        </h5>
                      );
                    }
                  )}
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
            </div>
            <div className="relative basis-2/4 flex flex-col items-center lg:items-end mt-14  ">
              <p className="text-xs sm:text-sm text-center lg:text-right font-semibold ">
                Refokus is a pioneering digital agency driven by design and
                empowered by technology.
              </p>
              <button className="py-2 px-3 text-xs bg-blue-600 flex gap-2 w-36 mt-6">
                <img
                  className="h-4 filter invert"
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
