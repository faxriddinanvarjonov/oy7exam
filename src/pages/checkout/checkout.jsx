import React from "react";
import Layout from "../../layout/layout";

function checkout() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <Layout>
      <div className="max-w-[1110px] w-[93%] lg:w-full mx-auto gap-[30px] mb-[160px] lg:flex">
        <div className="w-full max-w-[730px] rounded-lg p-[50px] flex flex-col bg-[#f1f1f1]">
          <h1 className="text-[32px] text-black font-bold tracking-[1.15px] mb-[41px]">
            CHECKOUT
          </h1>
          <p className="uppercase text-[#D87D4A] font-bold text-sm tracking-[1px] mb-[16px]">
            billing details
          </p>
          <form
            className="flex gap-[16px] flex-wrap lg:flex-nowrap"
            onSubmit={handleSubmit}
          >
            <div className=" flex flex-col">
              <label className="text-black font-bold text-[12px]">Name</label>
              <input
                id="input"
                placeholder="Alexei Ward"
                className="mt-[9px] input lg:max-w-[309px] w-full focus:border-[#D87D4A] border border-[#CFCFCF]"
                type="text"
              />
            </div>
            <div className=" flex flex-col">
              <label className="text-black font-bold text-[12px]">
                Email Address
              </label>
              <input
                id="input2"
                placeholder="alexeiward@mail.com"
                className="mt-[9px] input lg:max-w-[309px] w-full focus:border-[#D87D4A] border border-[#CFCFCF]"
                type="text"
              />
            </div>
            <div className=" flex flex-col">
              <label className="text-black font-bold text-[12px]">
                Phone Number
              </label>
              <input
                id="input3"
                placeholder="+1 202-555-0136"
                className="mt-[9px] input lg:max-w-[309px] w-full focus:border-[#D87D4A] border border-[#CFCFCF]"
                type="text"
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
            />
          </div>
          <div className="flex items-end gap-[16px]">
            <div className=" flex flex-col mt-[24px]">
              <label className="text-black font-bold text-[12px]">
                ZIP Code
              </label>
              <input
                id="input"
                placeholder="10001"
                className="mt-[9px] input  w-full focus:border-[#D87D4A] border border-[#CFCFCF]"
                type="text"
              />
            </div>
            <div className=" flex flex-col">
              <label className="text-black font-bold text-[12px]">City</label>
              <input
                id="input2"
                placeholder="New York"
                className="mt-[9px] input w-full focus:border-[#D87D4A] border border-[#CFCFCF]"
                type="text"
              />
            </div>
          </div>
          <div className=" flex flex-col max-w-[309px] mt-[24px]">
            <label className="text-black font-bold text-[12px]">Country</label>
            <input
              id="input2"
              placeholder="United States"
              className="mt-[9px] input w-full focus:border-[#D87D4A] border border-[#CFCFCF]"
              type="text"
            />
          </div>
          <div className="mt-[61px]">
            <p className="uppercase text-[#D87D4A] font-bold text-sm tracking-[1px] mb-[16px]">
              payment details
            </p>
            <label className="text-black font-bold text-[12px]">
              Payment Method
            </label>
          </div>
        </div>
        <div className="max-w-[350px] w-full rounded-lg p-[30px] bg-[#f1f1f1]">
          <h3 className="font-bold text-black text-[25px] uppercase">
            Summary
          </h3>
        </div>
      </div>
    </Layout>
  );
}

export default checkout;
