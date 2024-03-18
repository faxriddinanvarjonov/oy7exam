import HomeEndBg from "../../assets/png/HomeEndBg.png";
import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function mainEnd() {
  function HandleClick(e) {
    console.log(e);
    localStorage.setItem("State", e);
  }
  return (
    <section className="mb-[200px]">
      <div className="flex gap-[30px] max-w-[1110px] mx-auto w-[93%] flex-col sm:flex-row">
        <div className="bgEarphones w-full h-[320px] rounded-lg"></div>
        <div className="bg-[#f1f1f1] h-[320px] w-full rounded-lg flex flex-col justify-center items-start pl-2 sm:pl-[20px] lg:pl-[100px]">
          <h4 className="text-2xl sm:text-5xl leading-10 pb-12 tracking-[2px] text-black ">
            YX1 EARPHONES
          </h4>
          <Link
            onClick={() => {
              HandleClick("0");
            }}
            className="btn rounded-none w-[160px] border-2 bg-inherit border-black hover:bg-black hover:text-white text-black"
            to="/products"
          >
            See Product
          </Link>
        </div>
      </div>
    </section>
  );
}

export default mainEnd;
