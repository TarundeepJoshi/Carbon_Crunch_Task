import React from "react";
import { useScrollAnimation } from "./AnimatedRef";

const topcollection = [
  {
    img: "/assets/nft/infynft/animation.png",
    title: "Animation collection",
    by: "Nigntingo",
    item: "25",
  },
  {
    img: "/assets/nft/infynft/illustration.png",
    title: "Illustration collection",
    by: "Nigntingo",
    item: "25",
  },
  {
    img: "/assets/nft/infynft/photography.png",
    title: "Photography collection",
    by: "Nigntingo",
    item: "25",
  },
  {
    img: "/assets/nft/infynft/gif.png",
    title: "Gif collection",
    by: "Nigntingo",
    item: "25",
  },
];

function TopCollections() {
  const animatedRef = useScrollAnimation();

  return (
    <div
      className="flex flex-col gap-8 p-5 md:p-10 animate-item"
      ref={animatedRef}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl md:text-4xl font-bold">Top Collections</h2>

        <div>
          <a
            href="#_"
            className="flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors"
          >
            See All
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {topcollection.map((data, index) => {
          return (
            <div
              key={index}
              className={`animate-item delay-${
                index * 200
              } overflow-hidden rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20`}
            >
              <div className="overflow-hidden">
                <img
                  src={data.img}
                  alt={data.title}
                  className="w-full h-52 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-4">
                <h3 className="text-xl font-semibold">{data.title}</h3>

                <div className="mt-2 text-sm text-gray-400">by @{data.by}</div>

                <div className="mt-1 text-sm text-gray-300 flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 21V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {data.item} Item
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopCollections;
