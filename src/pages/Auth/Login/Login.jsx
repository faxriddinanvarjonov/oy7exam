import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoWhite from "../../../assets/svg/LogoWhite.svg";

function Login() {
  let Password = useRef("");
  let Email = useRef("");
  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    let card = {
      email: Email?.current?.value,
      password: Password?.current?.value,
    };
    console.log(card);
    console.log(JSON.parse(localStorage.getItem("token")).email);

    // localStorage.setItem("token", JSON.stringify(card));

    if (
      card.email == JSON.parse(localStorage.getItem("token")).email &&
      card.password == JSON.parse(localStorage.getItem("token")).password
    ) {
      localStorage.setItem("boolean", true);
      navigate("/");
    }
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-[#101010]">
        <header className="max-w-[1110px] mx-auto py-9 w-full flex justify-between items-center">
          <Link to={"/"}>
            <img src={LogoWhite} alt="logo" width={143} height={25} />
          </Link>
          <div className="flex gap-8 text-white text-xl font-bold ">
            <Link
              className="opacity-55 hover:opacity-100 duration-300"
              to={"/login"}
            >
              Login
            </Link>
            <Link
              className="opacity-55 hover:opacity-100 duration-300"
              to={"/register"}
            >
              Register
            </Link>
          </div>
        </header>
      </div>
      <main className=" mx-auto flex flex-col justify-center items-center h-screen w-full">
        <div className=" bg-[#D87D4A] max-w-[600px] w-full flex flex-col rounded-xl p-8 gap-8">
          <h1 className="text-center font-bold text-3xl uppercase text-white tracking-[2px]">
            Login
          </h1>
          <form className="flex flex-col gap-6">
            <input
              className="input w-full h-14"
              type="email"
              placeholder="Email..."
            />
            <input
              className="input w-full h-14"
              type="password"
              placeholder="Password..."
            />
            <button className="btn rounded-none bg-[#ffc69d] hover:bg-[#FBAF85] cursor-pointer border-none w-40 font-bold text-[13px] text-white uppercase tracking-[1px] duration-300 w-full">
              submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Login;
