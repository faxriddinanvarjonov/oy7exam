import React from "react";
import "./home.css";
import mainSpeakersBgOrange from "../../assets/png/mainSpeakersBgOrange.png";
import { Link } from "react-router-dom";


function mainTop() {
  function HandleClick(e) {
    console.log(e);
    localStorage.setItem("State", e);
  }
  return (
    <div className="bg-[#D87D4A] w-[93%] lg:w-full flex flex-col lg:flex-row max-w-[1110px] mb-[48px] mx-auto rounded-lg lg:pt-[96px] justify-around items-center lg:items-start pt-[52px] pb-[64px] lg:pb-0 gap-[64px] lg:gap-0">
      <img className="w-[200px] lg:w-[410px]" src={mainSpeakersBgOrange} />
      <div className="flex flex-col max-w-[350px] gap-[24px] lg:mt-[50px] text-center lg:text-start">
        <h2 className=" text-[36px] sm:text-[56px] font-bold text-white tracking-[2px] leading-none">
          ZX9 SPEAKER
        </h2>
        <h3 className="text-[15px] text-white font-normal opacity-75 lg:mb-10">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </h3>
        <Link
          onClick={() => {
            HandleClick("5");
          }}
          className="btn bg-black text-white font-bold tracking-[1px] text-[13px] border-none rounded-none w-[160px] mx-auto lg:mx-0 hover:bg-[#4C4C4C]"
          to="/products"
        >
          See Product
        </Link>
      </div>
    </div>
  );
}

export default mainTop;
