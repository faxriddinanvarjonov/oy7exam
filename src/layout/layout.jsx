import React from "react";
import { Link } from "react-router-dom";
import cart from "../assets/svg/Cart.svg";
import LogoWhite from "../assets/svg/LogoWhite.svg";
import BurgerBar from "../assets/svg/BurgerBar.svg";
import Footer from "../components/footer/footer";
import X99mark2 from "../assets/png/x99mark2Headphones.png";
import TopCard1 from "../assets/png/TopCard1.png";
import TopCard2 from "../assets/png/TopCard2.png";
import X59Headphone from "../assets/png/x59headphones.png";
import OldSpeaker from "../assets/png/oldSpeaker.png";
import { NavLink } from "react-router-dom/dist";
import mainSpeakersBgOrange from "../assets/png/mainSpeakersBgOrange.png";
import { useDispatch, useSelector } from "react-redux";
import "./layout.css";

const Layout = ({ children, el }) => {
  let Checkouts = useSelector((state) => state.checkouts);
  let dispatch = useDispatch();
  function handleRemove() {
    dispatch({ type: "REMOVE", checkouts: [] });
  }
  console.log(Checkouts.checkouts);
  let USDollar = new Intl.NumberFormat("en-US", {});

  let total = 0;

  return (
    <>
      <div className="bg-black mb-40">
        <header className="flex flex-col items-center bg-black ml-auto mr-auto max-w-[1110px] w-full xl:px-0">
          <div className="flex justify-between w-full py-[36px] items-center px-6 sm:px-10 xl:px-0">
            <div className="flex gap-16">
              <button className="lg:hidden">
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle"
                  >
                    <img
                      src={BurgerBar}
                      alt="site-nav-bar"
                      width="16"
                      height="15"
                    />
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase font-bold"
                  >
                    <li>
                      <NavLink to="/">home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/headphones">headphones</NavLink>
                    </li>
                    <li>
                      <NavLink to="/speakers">speakers</NavLink>
                    </li>
                    <li>
                      <NavLink to="/earphones">earphones</NavLink>
                    </li>
                  </ul>
                </div>
              </button>
              <Link className="flex" to="/">
                <img src={LogoWhite} alt="audiophile logo w-[143px] h-[25px]" />
              </Link>
            </div>
            <nav className="">
              <ul className="lg:flex hidden gap-8">
                <li>
                  <NavLink
                    className="text-white text-sm leading-10 hover:text-[#D87D4A] duration-200"
                    to="/"
                  >
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-white text-sm leading-10 hover:text-[#D87D4A] duration-200"
                    to="/headphones"
                  >
                    HEADPHONES
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-white text-sm leading-10 hover:text-[#D87D4A] duration-200"
                    to="/speakers"
                  >
                    SPEAKERS
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-white text-sm leading-10 hover:text-[#D87D4A] duration-200"
                    to="/earphones"
                  >
                    EARPHONES
                  </NavLink>
                </li>
              </ul>
            </nav>

            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className=" m-1">
                <img src={cart} alt="shop-button" width="23" height="20" />
              </div>
              <div
                tabIndex={0}
                className="dropdown-content z-[1] menu p-[33px] shadow bg-base-100 w-[377px] mt-[69px] rounded-xl"
              >
                <div className="flex justify-between mb-[31px]">
                  <h3 className="text-black text-[18px] font-bold tracking-[1.3px]">
                    CART ({Checkouts.checkouts ? Checkouts.checkouts.length : 0}
                    )
                  </h3>
                  <button
                    onClick={handleRemove}
                    className="text-black opacity-50 cursor-pointer hover:text-[#D87D4A] hover:opacity-100 text-[15px]"
                  >
                    Remove all
                  </button>
                </div>
                <div className="w-full flex flex-col gap-[24px]">
                  {Checkouts.checkouts
                    ? Checkouts.checkouts.map((el, index) => {
                        total += el.price;
                        return (
                          <div
                            className="flex items-center gap-[14px]"
                            key={index}
                          >
                            <div className="w-[64px] h-[64px] bg-[#f1f1f1] flex items-center justify-center rounded-lg ">
                              <img
                                className="w-[36px]"
                                src={
                                  el.id == 3
                                    ? TopCard1
                                    : el.id == 2
                                    ? X59Headphone
                                    : el.id == 6
                                    ? mainSpeakersBgOrange
                                    : el.id == 4
                                    ? X99mark2
                                    : el.id == 5
                                    ? OldSpeaker
                                    : el.id == 1
                                    ? TopCard2
                                    : "Error"
                                }
                                alt="img"
                              />
                            </div>
                            <div className="flex flex-col">
                              <h3 className="font-bold text-black text-[15px] uppercase">
                                {el.id == 1
                                  ? "YX1"
                                  : el.id == 2
                                  ? "XX59"
                                  : el.id == 3
                                  ? "XX99 MK I"
                                  : el.id == 4
                                  ? "XX99 MK II"
                                  : el.id == 5
                                  ? "ZX7"
                                  : el.id == 6
                                  ? "ZX9"
                                  : "ERROR"}
                              </h3>
                              <p>${USDollar.format(el.price)}</p>
                            </div>
                          </div>
                        );
                      })
                    : ""}
                </div>
                <div className="flex justify-between mt-[32px] items-center">
                  <p>TOTAL</p>
                  <p className="text-black text-[18px] font-bold">
                    ${USDollar.format(total)}
                  </p>
                </div>
                <Link
                  className="flex w-full btn border-none bg-[#D87D4A] rounded-none mt-[18px] text-white hover:bg-[#FBAF85]"
                  to="/checkout"
                >
                  checkout
                </Link>
              </div>
            </div>
          </div>

          {el && (
            <div className="w-full px-6 sm:px-10 xl:px-0">
              <hr className="w-full flex-shrink-0 opacity-20 inline-block" />
            </div>
          )}
          {el}
        </header>
      </div>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
