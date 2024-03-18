import React from "react";
import { Link } from "react-router-dom";
import LogoWhite from "../../assets/svg/LogoWhite.svg";

function PageNotFound() {
  return (
    <div className="h-screen flex flex-col">
      <div className="bg-[#101010]">
        <header className="max-w-[1110px] mx-auto py-9 w-full flex justify-between items-center">
          <Link to={"/"}>
            <img src={LogoWhite} alt="logo" width={143} height={25} />
          </Link>
        </header>
      </div>
      <main className=" mx-auto flex flex-col justify-center items-center h-screen w-full">
        <div className="bg-[#D87D4A] max-w-[600px] w-full flex flex-col rounded-xl p-8 gap-8">
          <h1 className="text-center font-bold text-3xl uppercase text-white tracking-[2px]">
            Page not found 404
          </h1>
          <div className="text-center font-bold text-3xl uppercase text-white tracking-[2px]">
            return to
            <Link className="opacity-70 underline hover:opacity-100" to={"/"}>
              home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PageNotFound;
