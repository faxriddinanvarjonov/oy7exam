import React from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../../assets/svg/ArrowRightBtn.svg";
import TopCard1 from "../../assets/png/TopCard1.png";
import TopCard2 from "../../assets/png/TopCard2.png";
import mainSpeakersBgOrange from "../../assets/png/mainSpeakersBgOrange.png";
import CardShadow from "../../assets/png/CardShadow.png";

function cards() {
  let CardsParent =
    "bg-[#F1F1F1] h-[204px] rounded-lg uppercase flex flex-col justify-end items-center p-[30px] gap-[15px] w-full mt-[70px] sm:mt-[50px]";

  return (
    <div className="flex lg:gap-[30px] sm:gap-7 flex-col lg:flex-row items-center w-full mb-[168px]">
      <div className="w-full max-w-[93%] flex">
        <div className={CardsParent}>
          <img
            className="mb-[-65px]"
            src={TopCard1}
            alt="card image products"
            width={122}
          />
          <img
            className="mb-[-35px]"
            src={CardShadow}
            alt="card image products"
          />
          <h3 className="text-black font-bold text-[18px] tracking-[1.29px] text-center">
            Headphones
          </h3>
          <p className="ArrowBtnText">
            <Link to="/headphones">shop</Link>
            <img src={ArrowRight}></img>
          </p>
        </div>
      </div>
      <div className="w-full max-w-[93%]">
        <div className={CardsParent}>
          <img
            className="mb-[-65px]"
            src={mainSpeakersBgOrange}
            alt="card image products"
            width={122}
          />
          <img
            className="mb-[-35px]"
            src={CardShadow}
            alt="card image products"
          />
          <h3 className="text-black font-bold text-[18px] tracking-[1.29px] text-center">
            SPEAKERS
          </h3>
          <p className="ArrowBtnText">
            <Link to="/speakers">shop</Link>
            <img src={ArrowRight}></img>
          </p>
        </div>
      </div>
      <div className="w-full max-w-[93%]">
        <div className={CardsParent}>
          <img
            className="mb-[-65px]"
            src={TopCard2}
            alt="card image products"
            width={122}
          />
          <img
            className="mb-[-35px]"
            src={CardShadow}
            alt="card image products"
          />
          <h3 className="text-black font-bold text-[18px] tracking-[1.29px] text-center">
            EARPHONES
          </h3>
          <p className="ArrowBtnText">
            <Link to="/earphones">shop</Link>
            <img src={ArrowRight}></img>
          </p>
        </div>
      </div>
    </div>
  );
}

export default cards;
