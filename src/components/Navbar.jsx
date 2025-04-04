import React, { useEffect, useState } from "react";

const navitem = ["Home", "Explore", "Community", "Page", "Support"];

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleClass = () => {
    setIsNavOpen(!isNavOpen);
    const closeAfterClick = document.querySelector("#nav-icon4");
    closeAfterClick?.classList?.toggle("open");
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="pt-5 text-white">
      <div className="absolute top-0 opacity-10 w-full">
        <img
          src="/assets/nft/infynft/back.png"
          alt="backimg"
          loading="lazy"
          className="mx-auto"
        />
      </div>
      {/* HEADER */}
      <div
        className={`w-full flex md:block px-5 ${
          isScrolled &&
          "backdrop-blur-sm bg-white/20 fixed top-0 pt-5 z-40 backdrop-filter md:h-20 overscroll-none"
        }`}
      >
        <div className="md:max-w-[1120px] flex items-center justify-between md:px-0 md:gap-5 mb-8 md:mb-16 container md:mx-auto">
          <a href="#_" className="z-10">
            <img src="/assets/nft/infynft/logo.svg" alt="logo" loading="lazy" />
          </a>
          <div className="gap-5 md:flex hidden z-10">
            {navitem.map((data, index) => {
              return (
                <a
                  href="#_"
                  key={index}
                  className={`hover:text-[#5EE616] hover:border-b-2 hover:border-[#5EE616] border-b-2 ${
                    index === 0
                      ? "border-[#5EE616] text-[#5EE616] border-b-2"
                      : "border-transparent"
                  }`}
                >
                  {data}
                </a>
              );
            })}
          </div>
          <div className="gap-2 md:flex hidden">
            <button className="hover:border-white hover:border border border-transparent whitespace-nowrap rounded px-3 py-2.5 text-sm font-semibold bg-gradient-to-r from-green-500 via-green-500 to-teal-500 text-white z-20">
              Wallet Connect
            </button>
          </div>
        </div>

        <button
          className="w-12 h-12 relative focus:outline-none md:hidden overscroll-none"
          onClick={() => {
            toggleClass();
            setToggle(!toggle);
          }}
        >
          <div className="block w-5 absolute left-1 top-1/3 transform -translate-x-1/2 -translate-y-1/2 z-50">
            <span
              className={`
                    block absolute h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out
                    ${toggle ? "rotate-45" : "-translate-y-1.5"}`}
            ></span>
            <span
              className={`
                    block absolute h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out
                    ${toggle && "opacity-0"}`}
            ></span>
            <span
              className={`
                    block absolute h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out
                    ${toggle ? "-rotate-45" : "translate-y-1.5"}`}
            ></span>
          </div>
        </button>
        <div
          className={`bg-gradient-to-r from-[#5EE616] to-[#209B72] rounded-xl absolute top-20 right-5 block md:hidden p-0.5 z-20 ${
            toggle ? "visible" : "invisible"
          }`}
        >
          <div className="bg-[#050C24] p-3 rounded-xl text-center">
            {navitem.map((data, index) => (
              <div key={index} className="p-3">
                <span className="font-bold text-lg ">{data}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
