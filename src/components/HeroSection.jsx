import React, { useRef, useEffect, useState } from "react";

function HeroSection() {
  const bubbleRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    // Initialize the 3D effect
    const bubbleContainer = bubbleRef.current;
    if (!bubbleContainer) return;

    // Animate just the main bubble floating
    const animateBubble = () => {
      // Simple floating animation using sine wave
      const time = Date.now() * 0.001;
      bubbleContainer.style.transform = `
        translateY(${Math.sin(time) * 8}px)
        scale(${isHovering ? 1.05 : 1})
      `;

      animationRef.current = requestAnimationFrame(animateBubble);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animateBubble);

    // Cleanup function
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovering]);

  return (
    <div className="flex flex-col gap-5 md:gap-0 items-center justify-center md:flex-row md:justify-between xl:pr-20 py-12">
      <div className="md:max-w-[598px] flex flex-col gap-5 tracking-[0.01em]">
        <div className="text-[36px] lg:text-[52px] font-bold leading-[49px] lg:leading-[71px]">
          Unleashing Web3&apos;s Boundless{" "}
          <span className="bg-gradient-to-r from-[#5EE616] to-[#209B72] inline-block text-transparent bg-clip-text">
            NFT
          </span>{" "}
          Gallery
        </div>
        <div className="lg:text-[22px] text-lg leading-[25px] md:leading-[30px] font-normal">
          <span className="font-bold">INFYNFT</span> invites you to step into a
          revolutionary digital realm where creativity knows no bounds. Prepare
          to embark on an extraordinary journey where the possibilities are as
          infinite as the imagination itself.
        </div>
        <div>
          <button className="hover:border-white hover:border border border-transparent flex items-center gap-2 rounded px-3 py-2.5 text-sm font-semibold bg-gradient-to-r from-green-500 via-green-500 to-teal-500 text-white">
            Explore Now
            <img
              src="/assets/nft/infynft/arrow.svg"
              alt="arrow image"
              loading="lazy"
            />
          </button>
        </div>
      </div>

      <div className="max-w-[350px] md:max-w-[300px] w-full flex items-center md:justify-end relative">
        {/* 3D Bubble Container */}
        <div
          ref={bubbleRef}
          className="relative w-full h-full transition-all duration-300"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Main Bubble Image */}
          <div className="relative w-full h-full">
            <img
              src="/assets/nft/infynft/round.png"
              alt="NFT Bubble"
              loading="lazy"
              className="w-full h-auto object-contain filter drop-shadow-lg transition-all duration-500"
            />

            {/* Subtle glow effect */}
            <div
              className={`absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-purple-500 opacity-20 blur-lg transition-opacity duration-500 ${
                isHovering ? "opacity-30" : "opacity-10"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
