import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import TopCollections from "../components/TopCollections";
import OurCollection from "../components/OurCollection";
import BestCollection from "../components/BestCollection";

function Homepage() {
  return (
    <div className="bg-[#050C24] font-interfont">
      <Navbar />
      <div className="relative mx-auto pt-6 flex flex-col items-center justify-center text-[#D2DADF] bg-[url('/assets/nft/infynft/gradient.svg')] bg-cover">
        <div className="flex w-full md:max-w-[1120px] flex-col gap-10 md:gap-20 px-5 xl:px-0">
          <HeroSection />
          <TopCollections />
          <OurCollection />
          <BestCollection />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
