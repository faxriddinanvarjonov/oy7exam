import Layout from "../../layout/layout";
import React from "react";
import { Link } from "react-router-dom";
import Cards from "../../components/home/cards";
import FooterFragment from "../../components/home/footerFragment";
import TopCard2 from "../../assets/png/TopCard2.png";

function earphones() {
  function HandleClick(e) {
    console.log(e);
    localStorage.setItem("State", e);
  }

  return (
    <Layout el={<h2 className="headerGraph">EARPHONES</h2>}>
      <div className="flex flex-col items-center ml-auto mr-auto max-w-[1110px] w-full xl:px-0 justify-between">
        <div className="flex flex-col w-full">
          <div className="flex flex-col mb-[160px]">
            <div className="flex justify-between items-center flex-col lg:flex-row gap-[52px] lg:gap-0">
              <div className="rounded-lg w-[93%] max-w-[540px] h-[352px] lg:h-[560px] bg-[#f1f1f1] flex items-center justify-center">
                <img
                  className="w-[242px] h-[244px] lg:h-[300px] lg:w-[296px]"
                  src={TopCard2}
                  alt="headphones"
                />
              </div>
              <div className="flex flex-col gap-[24px] items-center lg:items-start">
                <p className=" tracking-[10px] text-black opacity-50 text-sm font-normal">
                  NEW PRODUCT
                </p>
                <h1 className="flex flex-col font-bold text-black tracking-[2px] text-4xl sm:text-[56px] leading-none items-center lg:items-start">
                  <span className="uppercase text-center">XYX1 WIRELESS</span>
                  <span className="uppercase">EARPHONES</span>
                </h1>
                <p className="text-black opacity-75 text-sm w-full max-w-[572px] sm:max-w-[350px] text-center lg:text-start font-medium">
                  The new XX99 Mark II headphones is the pinnacle of pristine
                  audio. It redefines your premium headphone experience by
                  reproducing the balanced depth and precision of studio-quality
                  sound.
                </p>
                <Link
                  onClick={() => {
                    HandleClick("0");
                  }}
                  className="btn rounded-none bg-[#D87D4A] hover:bg-[#FBAF85] cursor-pointer border-none w-40 font-bold text-[13px] text-white uppercase tracking-[1px] mt-7 sm:mt-10 duration-300"
                  to="/products"
                >
                  See Product
                </Link>
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

export default earphones;
