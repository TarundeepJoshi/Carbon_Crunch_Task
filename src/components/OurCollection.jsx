import React from "react";
import { useScrollAnimation } from "./AnimatedRef";

const ourcollection = [
  {
    mainimg: "/assets/nft/infynft/img1.png",
    thumbnail: "/assets/nft/infynft/thumbnail1.png",
    name: "King",
    eth: "3.5",
    title: "Probably A Label #650",
  },
  {
    mainimg: "/assets/nft/infynft/img2.png",
    thumbnail: "/assets/nft/infynft/thumbnail2.png",
    name: "GoodBad",
    eth: "3.5",
    title: "Soki#0147",
  },
  {
    mainimg: "/assets/nft/infynft/img3.png",
    thumbnail: "/assets/nft/infynft/thumbnail3.png",
    name: "CrazyJelly",
    eth: "3.5",
    title: "Windows #768",
  },
  {
    mainimg: "/assets/nft/infynft/img4.png",
    thumbnail: "/assets/nft/infynft/thumbnail1.png",
    name: "Butterfly",
    eth: "3.5",
    title: "Probably A Label #650",
  },
  {
    mainimg: "/assets/nft/infynft/img5.png",
    thumbnail: "/assets/nft/infynft/thumbnail1.png",
    name: "Angel",
    eth: "3.5",
    title: "Soki#0147",
  },
  {
    mainimg: "/assets/nft/infynft/img6.png",
    thumbnail: "/assets/nft/infynft/thumbnail1.png",
    name: "Nigntingo",
    eth: "3.5",
    title: "Window#768",
  },
  {
    mainimg: "/assets/nft/infynft/img7.png",
    thumbnail: "/assets/nft/infynft/thumbnail4.png",
    name: "King",
    eth: "3.5",
    title: "Probably A Label #650",
  },
  {
    mainimg: "/assets/nft/infynft/img8.png",
    thumbnail: "/assets/nft/infynft/thumbnail5.png",
    name: "BigBull",
    eth: "3.5",
    title: "Window#768",
  },
];

function OurCollection() {
  const animatedRef = useScrollAnimation();

  return (
    <div
      className="flex flex-col gap-5 md:gap-[37px] animate-item"
      ref={animatedRef}
    >
      <div className="flex items-center justify-between">
        <div className="text-2xl md:text-[32px] font-semibold leading-[44px] tracking-[0.01em]">
          Our Collections
        </div>
        <div className="border-b-2 border-b-transparent hover:border-b-2 hover:border-green-600">
          <a href="#_" className="text-sm flex gap-2 md:text-lg font-medium">
            More Explore{" "}
            <img
              src="/assets/nft/infynft/arrow.svg"
              alt="arrow"
              className="md:block hidden"
            />
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[24px] place-items-center">
        {ourcollection.map((data, index) => {
          return (
            <div
              key={index}
              className={`animate-item delay-${
                (index % 4) * 200
              } flex min-w-[262px] md:min-w-min flex-col items-center justify-center gap-5 rounded-[10px] border border-[#2F3548] p-3 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20`}
            >
              <div className="overflow-hidden rounded-[10px]">
                <img
                  src={data.mainimg}
                  alt="img"
                  loading="lazy"
                  className="w-[350px] hover:scale-125 transition-all duration-500 ease-in-out"
                />
              </div>
              <div className="flex w-full flex-col gap-5">
                <div className="w-full flex flex-col gap-2">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2 md:gap-1 lg:gap-2">
                      <img
                        src={data?.thumbnail}
                        alt="thumbnail"
                        className="rounded-full"
                      />
                      <span className="text-[9px] lg:text-sm whitespace-nowrap font-normal text-[#209B72]">
                        @{data.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/assets/nft/infynft/eth.png" alt="eth" />
                      <span className="text-xs md:text-[9px] lg:text-xs font-normal">
                        3.5ETH
                      </span>
                    </div>
                  </div>
                  <div className="text-lg md:text-sm lg:text-lg whitespace-nowrap text-ellipsis font-medium">
                    {data?.title}
                  </div>
                </div>
                <div className="flex items-center justify-center rounded p-0.5 text-sm font-semibold text-[#5EE616] bg-gradient-to-r from-green-400 to-teal-600 hover:text-[#FDFBFB] w-fit mx-auto">
                  <button className="px-3 py-2.5 bg-[#050C24] hover:bg-gradient-to-r from-green-400 to-teal-600 transition-all duration-300">
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurCollection;
