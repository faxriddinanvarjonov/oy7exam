import React from "react";
import { Link } from "react-router-dom";
import Cards from "../../components/home/cards";
import Layout from "../../layout/layout";
import FooterFragment from "../../components/home/footerFragment";
import X99mark2 from "../../assets/png/x99mark2Headphones.png";
import X59Headphone from "../../assets/png/x59headphones.png";
import TopCard1 from "../../assets/png/TopCard1.png";

function headphones() {
  function HandleClick(e) {
    console.log(e);
    localStorage.setItem("State", e);
  }
  return (
    <Layout el={<h2 className="headerGraph">HEADPHONES</h2>}>
      <div className="flex flex-col items-center ml-auto mr-auto max-w-[1110px] w-full xl:px-0 justify-between">
        <div className="flex flex-col w-full">
          <div className="flex flex-col gap-[160px] mb-[240px]">
            <div className="flex justify-between items-center flex-col lg:flex-row gap-[52px] lg:gap-0">
              <div className="rounded-lg w-[93%] max-w-[540px] h-[352px] lg:h-[560px] bg-[#f1f1f1] flex items-center justify-center">
                <img
                  className="w-[220px] h-[243px] lg:h-[386px] lg:w-[349px]"
                  src={X99mark2}
                  alt="headphones"
                />
              </div>
              <div className="flex flex-col gap-[24px] items-center lg:items-start">
                <p className=" tracking-[10px] text-[#D87D4A] opacity-50 text-sm font-normal">
                  NEW PRODUCT
                </p>
                <h1 className="flex flex-col font-bold text-black tracking-[2px] text-4xl sm:text-[56px] leading-none items-center lg:items-start">
                  <span className="uppercase">XX99 Mark II</span>
                  <span className="uppercase">Headphones</span>
                </h1>
                <p className="text-black opacity-75 text-sm w-full max-w-[572px] sm:max-w-[350px] text-center lg:text-start font-medium">
                  The new XX99 Mark II headphones is the pinnacle of pristine
                  audio. It redefines your premium headphone experience by
                  reproducing the balanced depth and precision of studio-quality
                  sound.
                </p>
                <Link
                  onClick={() => {
                    HandleClick("3");
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
                  <span className="uppercase">XX99 Mark I</span>
                  <span className="uppercase">Headphones</span>
                </h1>
                <p className="text-black opacity-75 text-sm w-full max-w-[572px] sm:max-w-[350px] text-center lg:text-start font-medium">
                  As the gold standard for headphones, the classic XX99 Mark I
                  offers detailed and accurate audio reproduction for
                  audiophiles, mixing engineers, and music aficionados alike in
                  studios and on the go.
                </p>
                <Link
                  onClick={() => {
                    HandleClick("2");
                  }}
                  className="btn rounded-none bg-[#D87D4A] hover:bg-[#FBAF85] cursor-pointer border-none w-40 font-bold text-[13px] text-white uppercase tracking-[1px] mt-7 sm:mt-10 duration-300"
                  to="/products"
                >
                  See Product
                </Link>
              </div>
              <div className="rounded-lg w-[93%] max-w-[540px] h-[352px] lg:h-[560px] bg-[#f1f1f1] flex items-center justify-center">
                <img
                  className="w-[148px] h-[207px] lg:h-[385px] lg:w-[295px]"
                  src={TopCard1}
                  alt="headphones"
                />
              </div>
            </div>
            <div className="flex justify-between items-center flex-col lg:flex-row gap-[52px] lg:gap-0">
              <div className="rounded-lg w-[93%] max-w-[540px] h-[352px] lg:h-[560px] bg-[#f1f1f1] flex items-center justify-center">
                <img
                  className="w-[220px] h-[243px] lg:h-[386px] lg:w-[349px]"
                  src={X59Headphone}
                  alt="headphones"
                />
              </div>
              <div className="flex flex-col gap-[24px] items-center lg:items-start">
                <h1 className="flex flex-col font-bold text-black tracking-[2px] text-4xl sm:text-[56px] leading-none items-center lg:items-start">
                  <span className="uppercase">XX59</span>
                  <span className="uppercase">Headphones</span>
                </h1>
                <p className="text-black opacity-75 text-sm w-full max-w-[572px] sm:max-w-[350px] text-center lg:text-start font-medium">
                  Enjoy your audio almost anywhere and customize it to your
                  specific tastes with the XX59 headphones. The stylish yet
                  durable versatile wireless headset is a brilliant companion at
                  home or on the move.
                </p>
                <Link
                  onClick={() => {
                    HandleClick("1");
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

export default headphones;
