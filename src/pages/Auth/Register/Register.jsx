import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoWhite from "../../../assets/svg/LogoWhite.svg";

function Register() {
  let [Err, setErr] = useState("");
  let Password = useRef("");
  let Email = useRef("");
  let RePassword = useRef("");

  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    let card = {
      email: Email?.current?.value,
      password: Password?.current?.value,
    };
    setErr("");

    if (Password.current.value == RePassword.current.value) {
      localStorage.setItem("token", JSON.stringify(card));
      navigate("/login");
    } else {
      setErr("Password must be same!");
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
            register
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              className="input w-full h-14"
              type="email"
              placeholder="Email..."
              ref={Email}
            />
            <input
              className="input w-full h-14"
              type="password"
              placeholder="Password..."
              ref={Password}
            />
            <input
              className="input w-full h-14"
              type="password"
              placeholder="Sumbit password..."
              ref={RePassword}
            />
            {Err != "" && (
              <p className="text-[#ebc2c2] font-bold text-xl uppercase">
                {Err}!
              </p>
            )}
            <button className="btn rounded-none bg-[#ffc69d] hover:bg-[#FBAF85] cursor-pointer border-none w-40 font-bold text-[13px] text-white uppercase tracking-[1px] duration-300 w-full">
              submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Register;
