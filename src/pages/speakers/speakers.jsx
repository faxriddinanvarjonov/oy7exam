import Layout from "../../layout/layout";
import React from "react";
import { Link } from "react-router-dom";
import Cards from "../../components/home/cards";
import FooterFragment from "../../components/home/footerFragment";
import mainSpeakersBgOrange from "../../assets/png/mainSpeakersBgOrange.png";
import OldSpeaker from "../../assets/png/oldSpeaker.png";

function speakers() {
  function HandleClick(e) {
    console.log(e);
    localStorage.setItem("State", e);
  }
  return (
    <Layout el={<h2 className="headerGraph">SPEAKERS</h2>}>
      <div className="flex flex-col items-center ml-auto mr-auto max-w-[1110px] w-full xl:px-0 justify-between">
        <div className="flex flex-col w-full">
          <div className="flex flex-col mb-[160px] gap-[160px]">
            <div className="flex justify-between items-center flex-col lg:flex-row gap-[52px] lg:gap-0">
              <div className="rounded-lg w-[93%] max-w-[540px] h-[352px] lg:h-[560px] bg-[#f1f1f1] flex items-center justify-center">
                <img
                  className="w-[220px] h-[243px] lg:h-[386px] lg:w-[349px]"
                  src={mainSpeakersBgOrange}
                  alt="headphones"
                />
              </div>
              <div className="flex flex-col gap-[24px] items-center lg:items-start">
                <p className=" tracking-[10px] text-[#D87D4A] opacity-50 text-sm font-normal">
                  NEW PRODUCT
                </p>
                <h1 className="flex flex-col font-bold text-black tracking-[2px] text-4xl sm:text-[56px] leading-none items-center lg:items-start">
                  <span className="uppercase">ZX9</span>
                  <span className="uppercase">SPEAKER</span>
                </h1>
                <p className="text-black opacity-75 text-sm w-full max-w-[572px] sm:max-w-[350px] text-center lg:text-start font-medium">
                  Upgrade your sound system with the all new ZX9 active speaker.
                  It’s a bookshelf speaker system that offers truly wireless
                  connectivity -- creating new possibilities for more pleasing
                  and practical audio setups.
                </p>
                <Link
                 onClick={() => {
                  HandleClick("5");
                }}
                  className="btn rounded-none bg-[#D87D4A] hover:bg-[#FBAF85] cursor-pointer border-none w-40 font-bold text-[13px] text-white uppercase tracking-[1px] mt-7 sm:mt-10 duration-300"
                  to="/products"
                >
                  See Product
                </Link>
              </div>
            </div>
            <div className="flex justify-between items-center flex-col-reverse lg:flex-row gap-[52px] lg:gap-0">
              <div className="flex flex-col gap-[24px] items-center lg:items-start">
                <h1 className="flex flex-col font-bold text-black tracking-[2px] text-4xl sm:text-[56px] leading-none items-center lg:items-start">
                  <span className="uppercase">ZX7</span>
                  <span className="uppercase">SPEAKER</span>
                </h1>
                <p className="text-black opacity-75 text-sm w-full max-w-[572px] sm:max-w-[350px] text-center lg:text-start font-medium">
                  Stream high quality sound wirelessly with minimal loss. The
                  ZX7 bookshelf speaker uses high-end audiophile components that
                  represents the top of the line powered speakers for home or
                  studio use.
                </p>
                <Link
                  onClick={() => {
                    HandleClick("4");
                  }}
                  className="btn rounded-none bg-[#D87D4A] hover:bg-[#FBAF85] cursor-pointer border-none w-40 font-bold text-[13px] text-white uppercase tracking-[1px] mt-7 sm:mt-10 duration-300"
                  to="/products"
                >
                  See Product
                </Link>
              </div>
              <div className="rounded-lg w-[93%] max-w-[540px] h-[352px] lg:h-[560px] bg-[#f1f1f1] flex items-center justify-center">
                <img
                  className="w-[169px] h-[243px] lg:h-[385px] lg:w-[268px]"
                  src={OldSpeaker}
                  alt="headphones"
                />
              </div>
            </div>
          </div>
          <Cards></Cards>
          <FooterFragment />
        </div>
      </div>
    </Layout>
  );
}

export default speakers;
