import "./home.css";
import React from "react";
import Layout from "../../layout/layout";
import { Link } from "react-router-dom";
import MainTop from "../../components/home/mainTop";
import Cards from "../../components/home/cards";
import MainCenter from "../../components/home/mainCenter";
import MainEnd from "../../components/home/mainEnd";
import FooterFragment from "../../components/home/footerFragment";

function home() {
  function HandleClick(e) {
    console.log(e);
    localStorage.setItem("State", e);
  }
  return (
    <Layout
      el={
        <div className="flex flex-col items-center justify-center gap-6 mr-0 lg:mr-auto lg:items-start Header-bg-img w-full min-h-[635px] bg-no-repeat px-6 sm:px-10 xl:px-0">
          <p className=" tracking-[10px] text-white opacity-50 text-sm font-normal">
            NEW PRODUCT
          </p>
          <h1 className="flex flex-col font-bold text-white tracking-[2px] text-4xl sm:text-[56px] leading-none">
            <span className="uppercase">XX99 Mark II</span>
            <span className="uppercase">Headphones</span>
          </h1>
          <p className="text-white opacity-75 text-sm max-w-[328px] sm:max-w-[350px] text-center lg:text-start font-medium">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
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
      }
    >
      <main className="mb-[200px] lg:mb-0">
        <div className="flex flex-col items-center ml-auto mr-auto max-w-[1110px] w-full xl:px-0">
          <Cards></Cards>
        </div>
        <MainTop />
        <MainCenter />
        <MainEnd />
        <FooterFragment />
      </main>
    </Layout>
  );
}

export default home;
