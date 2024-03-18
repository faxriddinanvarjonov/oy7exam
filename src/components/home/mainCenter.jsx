import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function mainCenter() {
  function HandleClick(e) {
    console.log(e);
    localStorage.setItem("State", e);
  }
  return (
    <section className="h-[320px] rounded-lg mb-20 mx-auto max-w-[1110px] bg_home_speaker w-[93%] pl-[20px] sm:pl-[100px] items-center flex">
      <div>
        <h4 className="text-5xl leading-10 pb-12 tracking-[2px] text-black ">
          ZX7 SPEAKER
        </h4>
        <Link
          onClick={() => {
            HandleClick("4");
          }}
          className="btn rounded-none w-[160px] border-2 bg-inherit border-black hover:bg-black hover:text-white text-black"
          to="/products"
        >
          See Product
        </Link>
      </div>
    </section>
  );
}

export default mainCenter;
