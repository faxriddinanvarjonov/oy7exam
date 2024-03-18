import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function footerFragment() {
  return (
    <div className="flex items-center justify-between max-w-[1110px] w-full mx-auto mb-[200px] flex-col-reverse lg:flex-row gap-[63px] lg:gap-0">
      <div className="flex flex-col gap-[32px] max-w-full lg:max-w-[445px]">
        <h1 className="uppercase font-bold text-[40px] leading-none tracking-[1.4px] text-black text-center lg:text-start">
          Bringing you the <span className="text-[#D87D4A]">best</span>
          audio gear
        </h1>
        <p className="font-normal text-black opacity-50 text-[15px] text-center lg:text-start">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="w-[93%] HeroBg h-[300px] lg:h-[588px] lg:max-w-[540px] rounded-lg"></div>
    </div>
  );
}

export default footerFragment;
