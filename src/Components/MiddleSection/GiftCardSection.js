import React from "react";
import "./GiftCardSection.css";

function GiftCardSection() {
  return (
    <div>
      <div className="GiftCard">
        <div className="GiftCardsContent">
          <img src="./images/GiftCards.png" />
          <h2> Gift cards </h2>{" "}
          <p>
            {" "}
            Enjoy gift cards from 4000 + global <br /> brands.{" "}
          </p>{" "}
        </div>{" "}
        <div className="GiftCardsContent">
          <img src="./images/prepaidCards.png" />
          <h2> Prepaid Cards </h2>{" "}
          <p>
            {" "}
            Disburse payouts via Visa, Master and Rupay <br /> cards{" "}
          </p>{" "}
        </div>{" "}
        <div className="GiftCardsContent">
          <img src="./images/experiences1.png" />
          <h2> Experiences </h2>{" "}
          <p>
            {" "}
            Access the largest and most diverse <br /> selection of experiential
            gifting at Xoxoday.{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default GiftCardSection;
