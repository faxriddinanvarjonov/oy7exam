import React from "react";
import Layout from "../../layout/layout";
import LogoWhite from "../../assets/svg/LogoWhite.svg";
import BurgerBar from "../../assets/svg/BurgerBar.svg";
import Footer from "../../components/footer/footer";
import X99mark2 from "../../assets/png/x99mark2Headphones.png";
import TopCard1 from "../../assets/png/TopCard1.png";
import TopCard2 from "../../assets/png/TopCard2.png";
import X59Headphone from "../../assets/png/x59headphones.png";
import OldSpeaker from "../../assets/png/oldSpeaker.png";
import mainSpeakersBgOrange from "../../assets/png/mainSpeakersBgOrange.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Succes from "../../assets/png/succes.png";

function checkout() {
  let navigate = useNavigate();
  let Checkouts = useSelector((state) => state.checkouts);
  let dispatch = useDispatch();

  Checkouts.checkouts.length ? console.log(false) : navigate("/");

  let USDollar = new Intl.NumberFormat("en-US", {});

  function handleSubmit(e) {
    e.preventDefault();
  }
  let total = 0;

  return (
    <Layout>
      <div className="max-w-[1110px] w-[93%] lg:w-full mx-auto gap-[30px] mb-[160px] lg:flex">
        <div className="w-full max-w-[730px] rounded-lg p-[50px] flex flex-col bg-[#fff] mx-auto h-fit">
          <h1 className="text-[32px] text-black font-bold tracking-[1.15px] mb-[41px]">
            CHECKOUT
          </h1>
          <p className="uppercase text-[#D87D4A] font-bold text-sm tracking-[1px] mb-[16px]">
            billing details
          </p>
          <form
            className="flex gap-[16px] flex-col lg:flex-row items-center lg:items-stretch"
            onSubmit={handleSubmit}
          >
            <div className="w-full">
              <div className=" flex flex-col w-full">
                <label className="text-black font-bold text-[12px]">Name</label>
                <input
                  id="input"
                  placeholder="Alexei Ward"
                  className="mt-[9px] input w-full focus:border-[#D87D4A] border border-[#CFCFCF]"
                  type="text"
                  required
                />
              </div>
              <div className=" flex flex-col w-full">
                <label className="text-black font-bold text-[12px] mt-[16px] lg:mt-[24px]">
                  Email Address
                </label>
                <input
                  id="input2"
                  placeholder="alexeiward@mail.com"
                  className="mt-[9px] input w-full focus:border-[#D87D4A] border border-[#CFCFCF]"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className=" flex flex-col w-full">
              <label className="text-black font-bold text-[12px]">
                Phone Number
              </label>
              <input
                id="input3"
                placeholder="+1 202-555-0136"
                className="mt-[9px] input w-full focus:border-[#D87D4A] border border-[#CFCFCF]"
                type="text"
                required
              />
            </div>
          </form>

          <p className="uppercase text-[#D87D4A] font-bold text-sm tracking-[1px] mb-[16px] mt-[53px]">
            shipping info
          </p>
          <div className=" flex flex-col">
            <label className="text-black font-bold text-[12px]">
              Your Address
            </label>
            <input
              id="input4"
              placeholder="1137 Williams Avenue"
              className="mt-[9px] input w-full focus:border-[#D87D4A] border border-[#CFCFCF]"
              type="text"
              required
            />
          </div>
          <div className="flex items-end gap-[16px] w-full flex-col lg:flex-row">
            <div className=" flex flex-col mt-[24px] w-full">
              <label className="text-black font-bold text-[12px]">
                ZIP Code
              </label>
              <input
                id="input"
                placeholder="10001"
                className="mt-[9px] input w-full focus:border-[#D87D4A] border border-[#CFCFCF]"
                type="text"
              />
            </div>
            <div className=" flex flex-col w-full">
              <label className="text-black font-bold text-[12px]">City</label>
              <input
                id="input2"
                placeholder="New York"
                className="mt-[9px] input w-full focus:border-[#D87D4A] border border-[#CFCFCF]"
                type="text"
                required
              />
            </div>
          </div>
          <div className=" flex flex-col lg:max-w-[309px] mt-[24px]">
            <label className="text-black font-bold text-[12px]">Country</label>
            <input
              id="input2"
              placeholder="United States"
              className="mt-[9px] input w-full focus:border-[#D87D4A] border border-[#CFCFCF]"
              type="text"
              required
            />
          </div>
          <div className="mt-[61px] flex justify-between flex-col lg:flex-row ">
            <div>
              <p className="uppercase text-[#D87D4A] font-bold text-sm tracking-[1px] mb-[16px]">
                payment details
              </p>
              <label className="text-black font-bold text-[12px]">
                Payment Method
              </label>
            </div>
            <div className="flex flex-col gap-[16px] mt-[17px] lg:mt-[39px]">
              <label
                htmlFor="radiobtn1"
                className="input flex w-full lg:w-[309px] border border-[#CFCFCF] items-center gap-[21px]"
              >
                <input
                  type="radio"
                  name="radio-4"
                  className="radio radio-error"
                  defaultChecked
                  id="radiobtn1"
                  required
                />
                <p className="font-bold text-black text-sm">e-Money</p>
              </label>
              <label
                htmlFor="radiobtn2"
                className="input flex w-full lg:w-[309px] border border-[#CFCFCF] items-center gap-[21px]"
              >
                <input
                  type="radio"
                  name="radio-4"
                  className="radio radio-error"
                  id="radiobtn2"
                  required
                />
                <p className="font-bold text-black text-sm">Cash on Delivery</p>
              </label>
            </div>
          </div>

          <div className="flex items-end gap-[16px] w-full flex-col lg:flex-row">
            <div className=" flex flex-col mt-[24px] w-full">
              <label className="text-black font-bold text-[12px]">
                e-Money Number
              </label>
              <input
                id="input"
                placeholder="238521993"
                className="mt-[9px] input w-full focus:border-[#D87D4A] border border-[#CFCFCF]"
                type="text"
                required
              />
            </div>
            <div className=" flex flex-col w-full">
              <label className="text-black font-bold text-[12px]">
                e-Money PIN
              </label>
              <input
                id="input2"
                placeholder="6891"
                className="mt-[9px] input w-full focus:border-[#D87D4A] border border-[#CFCFCF]"
                type="text"
                required
              />
            </div>
          </div>
        </div>
        <div className="lg:max-w-[350px] w-full rounded-lg p-[30px] bg-[#fff] mx-auto mt-[32px] lg:mt-0 h-fit">
          <h3 className="font-bold text-black text-[25px] uppercase">
            Summary
          </h3>
          <div className="w-full flex flex-col gap-[24px] mt-[38px]">
            {Checkouts.checkouts
              ? Checkouts.checkouts.map((el, index) => {
                  total += el.price;
                  return (
                    <div className="flex items-center gap-[14px] " key={index}>
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
            <div className="flex flex-col gap-[8px]">
              <div className="flex justify-between items-center">
                <p>TOTAL</p>
                <p className="text-black text-[18px] font-bold">
                  ${USDollar.format(total)}
                </p>
              </div>
              <div className="flex justify-between  items-center">
                <p>SHIPPING</p>
                <p className="text-black text-[18px] font-bold">
                  ${USDollar.format(Math.trunc(total / 100))}
                </p>
              </div>
              <div className="flex justify-between  items-center">
                <p>VAT (INCLUDED)</p>
                <p className="text-black text-[18px] font-bold">
                  ${USDollar.format(Math.trunc(total / 5))}
                </p>
              </div>
              <div className="flex justify-between  items-center my-[24px]">
                <p>GRAND TOTAL</p>
                <p className="text-[#D87D4A] text-[18px] font-bold">
                  $
                  {USDollar.format(
                    total + Math.trunc(total / 100) + Math.trunc(total / 5)
                  )}
                </p>
              </div>
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="flex w-full btn border-none bg-[#D87D4A] rounded-none mt-[18px] text-white hover:bg-[#FBAF85]"
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                CONTINUE & PAY
              </button>
              <dialog id="my_modal_2" className="modal">
                <div className="modal-box w-full max-w-[540px] p-[48px]">
                  <div className="flex flex-col">
                    <img
                      className="w-[64px] mb-[33px]"
                      src={Succes}
                      alt="Succes btn"
                    />
                    <h2 className="text-black font-bold tracking-[1.15px] text-[32px] max-w-[284px] leading-[36px] mb-[24px]">
                      THANK YOU FOR YOUR ORDER
                    </h2>
                    <p className="text-[15px] text-black opacity-50 font-normal mb-[33px]">
                      You will receive an email confirmation shortly.
                    </p>

                    <Link
                      to={"/"}
                      className="btn rounded-none bg-[#D87D4A] hover:bg-[#FBAF85] cursor-pointer border-none w-full font-bold text-[13px] text-white uppercase tracking-[1px] duration-300"
                    >
                      BACK TO HOME
                    </Link>
                  </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default checkout;
