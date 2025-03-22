import React from "react";
import { useScrollAnimation } from "./AnimatedRef";

const bestcreator = [
  {
    img: "/assets/nft/infynft/avatar1.png",
    name: "King",
    eth: "3.5",
  },
  {
    img: "/assets/nft/infynft/avatar2.png",
    name: "King",
    eth: "3.5",
  },
  {
    img: "/assets/nft/infynft/avatar3.png",
    name: "King",
    eth: "3.5",
  },
  {
    img: "/assets/nft/infynft/avatar4.png",
    name: "King",
    eth: "3.5",
  },
  {
    img: "/assets/nft/infynft/avatar5.png",
    name: "King",
    eth: "3.5",
  },
  {
    img: "/assets/nft/infynft/avatar6.png",
    name: "King",
    eth: "3.5",
  },
  {
    img: "/assets/nft/infynft/avatar7.png",
    name: "King",
    eth: "3.5",
  },
  {
    img: "/assets/nft/infynft/avatar5.png",
    name: "King",
    eth: "3.5",
  },
  {
    img: "/assets/nft/infynft/avatar2.png",
    name: "King",
    eth: "3.5",
  },
  {
    img: "/assets/nft/infynft/avatar1.png",
    name: "King",
    eth: "3.5",
  },
];

function BestCollection() {
  const animatedRef = useScrollAnimation();

  return (
    <div
      className="flex flex-col gap-8 p-5 md:p-10 animate-item"
      ref={animatedRef}
    >
      <h2 className="text-2xl md:text-4xl font-bold text-center">
        Best Creators and Seller
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {bestcreator.map((data, index) => {
          return (
            <div
              key={index}
              className={`animate-item delay-${
                (index % 5) * 200
              } flex flex-col items-center p-4 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20`}
            >
              <div className="relative w-full">
                <img
                  src={data.img}
                  alt="creator"
                  className="w-24 h-24 mx-auto rounded-full border-4 border-green-500 hover:scale-110 transition-transform duration-300"
                />

                <div className="absolute bottom-0 right-1/4 bg-green-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {index + 1}
                </div>
              </div>

              <div className="mt-4 text-center">
                <h3 className="font-semibold text-lg text-green-400">
                  @Milla_Wendt
                </h3>

                <p className="text-gray-300 mt-1">12.25 ETH</p>
              </div>

              <div className="mt-4 w-full">
                <button className="w-full py-2 bg-gradient-to-r from-green-400 to-teal-600 hover:opacity-90 rounded-lg text-white font-medium transition-all duration-300">
                  Follow
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BestCollection;
