import FooterFragment from "../../components/home/footerFragment";
import Cards from "../../components/home/cards";
import React, { useEffect, useState } from "react";
import Layout from "../../layout/layout";
import { Link, useNavigate } from "react-router-dom/dist";
import mainSpeakersBgOrange from "../../assets/png/mainSpeakersBgOrange.png";
import TopCard2 from "../../assets/png/TopCard2.png";
import X99mark2 from "../../assets/png/x99mark2Headphones.png";
import TopCard1 from "../../assets/png/TopCard1.png";
import X59Headphone from "../../assets/png/x59headphones.png";
import OldSpeaker from "../../assets/png/oldSpeaker.png";
import { useDispatch, useSelector } from "react-redux";
import "./products.css";
import HeroBg from "../../assets/png/HeroBg.png";

function products() {
  let navigate = useNavigate();
  let [loader, setLoader] = useState(true);
  let [state, setState] = useState(localStorage.getItem("State"));
  let [data, setData] = useState([]);
  let [num, setNum] = useState(1);
  let dispatch = useDispatch();

  num <= 0 && setNum(1);

  let Checkouts = useSelector((state) => state.checkouts);
  console.log(Checkouts.checkouts);

  useEffect(() => {
    console.log(state);
    state
      ? fetch(`http://localhost:3000/${state}`)
          .then((res) => res.json())
          .then((data) => {
            setData(data);
          })
          .catch((err) => console.log(err))
          .finally(setLoader(false))
      : navigate("/");
  }, [state]);

  let USDollar = new Intl.NumberFormat("en-US", {});

  function handleSubmit(e) {
    e.preventDefault();
    Checkouts.checkouts && dispatch({ type: "ADD", checkout: data });
    console.log(Checkouts.checkouts);
  }

  function HandleClick(e) {
    let num =
      e == "XX99 Mark I"
        ? "2"
        : e == "XX59"
        ? "1"
        : e == "ZX9 Speaker"
        ? "5"
        : e == "XX99 Mark II"
        ? "3"
        : e == "ZX7 Speaker"
        ? "4"
        : "wth";

    console.log(num);
    localStorage.setItem("State", num);
    setState(localStorage.getItem("State"));
  }

  return (
    <Layout>
      {loader == true ? (
        <div className="loading loading-spinner text-[#D87D4A] flex w-full max-w-[310px] mx-auto mb-[160px]"></div>
      ) : data.id ? (
        <>
          <main className="mb-[200px] lg:mb-0">
            <div className="flex flex-col ml-auto mr-auto max-w-[1110px] w-full xl:px-0 gap-[160px] lg:mb-[160px]">
              <div className="flex justify-between items-center flex-col lg:flex-row gap-[52px] lg:gap-0 ">
                <div className="rounded-lg w-[93%] max-w-[540px] sm:h-[420px] lg:h-[560px] bg-[#f1f1f1] flex items-center justify-center py-[60px] sm:py-0 ">
                  <img
                    src={
                      state == "0"
                        ? TopCard2
                        : state == "1"
                        ? X59Headphone
                        : state == "2"
                        ? TopCard1
                        : state == "3"
                        ? X99mark2
                        : state == "4"
                        ? OldSpeaker
                        : state == "5" && mainSpeakersBgOrange
                    }
                    className=""
                    alt="headphones"
                  />
                </div>
                <div className="flex flex-col gap-[32px] items-center lg:items-start">
                  {data.new == true && (
                    <p className=" tracking-[10px] text-[#D87D4A] opacity-50 text-sm font-normal">
                      NEW PRODUCT
                    </p>
                  )}
                  <h1 className="flex flex-col font-bold text-black tracking-[2px] text-4xl sm:text-[56px] leading-none items-center lg:items-start">
                    <span className="uppercase max-w-[445px] text-center lg:text-start">
                      {data.name}
                    </span>
                  </h1>
                  <p className="text-black opacity-75 text-sm w-full max-w-[572px] sm:max-w-[350px] text-center lg:text-start font-medium">
                    {data.description}
                  </p>
                  <p className="text-black font-bold text-[18px] tracking-[2.3px]">
                    ${USDollar.format(data.price)}
                  </p>
                  <form
                    className="flex items-center gap-[16px] flex-col-reverse sm:flex-row"
                    onSubmit={handleSubmit}
                  >
                    <div className="w-[120px] bg-[#F1F1F1] h-[48px] flex items-center justify-around text-[13px] font-bold">
                      <div
                        onClick={() => {
                          setNum(num - 1);
                        }}
                        className="hover:text-[#D87D4A] duration-300 cursor-pointer"
                      >
                        -
                      </div>
                      <p>{num}</p>
                      <div
                        onClick={() => {
                          setNum(num + 1);
                        }}
                        className="hover:text-[#D87D4A] duration-300 cursor-pointer"
                      >
                        +
                      </div>
                    </div>
                    <button
                      className="btn rounded-none bg-[#D87D4A] hover:bg-[#FBAF85] cursor-pointer border-none w-40 font-bold text-[13px] text-white uppercase tracking-[1px] duration-300"
                      to="/products"
                    >
                      ADD TO CART
                    </button>
                  </form>
                </div>
              </div>
              <div className="flex max-w-[1110px] w-[93%] lg:w-full mx-auto justify-between flex-col lg:flex-row items-start gap-[88px]">
                <div className="flex flex-col gap-[32px]">
                  <h2 className="text-black text-[32px] tracking-[1.1px] font-bold">
                    FEATURES
                  </h2>
                  <p className="text-black max-w-[635px]">{data.features}</p>
                </div>
                <div className="w-full max-w-[555px] lg:max-w-[350px] justify-between flex-col sm:flex-row flex lg:flex-col sm:gap-[32px] gap-0">
                  <h2 className="text-black text-[32px] tracking-[1.1px] font-bold w-[350px]">
                    IN THE BOX
                  </h2>
                  <div className="flex flex-col gap-[8px]">
                    {data.includes.map((data, index) => {
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-[24px]"
                        >
                          <p className="text-[#D87D4A] font-bold text-[15px]">
                            {data.quantity}x
                          </p>
                          <p className="text-black font-normal text-[15px] opacity-50">
                            {data.item}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="flex gap-[30px] max-w-[1110px] w-[93%] lg:w-full mx-auto flex-col sm:flex-row items-center lg:items-stretch">
                <div className="flex flex-col gap-[30px] w-full sm:max-w-[445px]">
                  <div
                    className={`flex w-full bg-black h-[174px] lg:h-[280px] rounded-lg bg1_${state}`}
                  ></div>
                  <div
                    className={`flex w-full bg-black h-[174px] lg:h-[280px] rounded-lg bg2_${state}`}
                  ></div>
                </div>
                <div
                  className={`flex sm:max-w-[635px] w-full bg-black rounded-lg h-[368px] lg:h-[592px] bg3_${state}`}
                ></div>
              </div>
              <div className="flex w-[93%] lg:w-full max-w-[1110px] mx-auto flex-col">
                <h2 className="text-black text-[32px] tracking-[1.1px] font-bold uppercase text-center mb-[40px] sm:mb-[64px]">
                  you may also like
                </h2>
                <div className="flex justify-between flex-col lg:flex-row gap-[56px] lg:gap-0 items-center">
                  {data &&
                    data.others.map((data2, index) => {
                      return (
                        <div
                          key={index}
                          className="w-full lg:max-w-[350px] flex flex-col items-center"
                        >
                          <div className="w-full h-[120px] lg:h-[318px] flex items-center justify-center bg-[#f1f1f1] mb-[40px] rounded-lg">
                            <img
                              className="w-[80px] lg:w-[45%]"
                              src={
                                data2.name == "XX99 Mark I"
                                  ? TopCard1
                                  : data2.name == "XX59"
                                  ? X59Headphone
                                  : data2.name == "ZX9 Speaker"
                                  ? mainSpeakersBgOrange
                                  : data2.name == "XX99 Mark II"
                                  ? X99mark2
                                  : data2.name == "ZX7 Speaker"
                                  ? OldSpeaker
                                  : "Error"
                              }
                              alt="others"
                            />
                          </div>
                          <h3 className="text-black text-[24px] tracking-[1.7px] text-center font-bold uppercase">
                            {data2.name}
                          </h3>
                          <button
                            onClick={() => {
                              HandleClick(data2.name);
                            }}
                            className="btn rounded-none bg-[#D87D4A] hover:bg-[#FBAF85] cursor-pointer border-none w-40 font-bold text-[13px] text-white uppercase tracking-[1px] mt-[32px] lg:mt-10 duration-300 mx-auto"
                          >
                            See Product
                          </button>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </main>
          <div className="flex flex-col items-center ml-auto mr-auto max-w-[1110px] w-full xl:px-0">
            <Cards></Cards>
          </div>
          <FooterFragment />
        </>
      ) : (
        <div className="loading loading-spinner text-[#D87D4A] flex w-full max-w-[310px] mx-auto mb-[160px]"></div>
      )}
    </Layout>
  );
}

export default products;
