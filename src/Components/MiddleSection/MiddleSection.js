import React from "react";
import GiftCardSection from "./GiftCardSection";
import "./MiddleSection.css";

function MiddleSection(props) {
  return (
    <div>
      <div className="MidSec">
        <h3 className="MidSecTitle">
          {" "}
          {props.title1} <br />
          <span> {props.title2} </span>{" "}
        </h3>{" "}
        
        <button className="midBtn">
          <a href="#">
            {" "}
            <img src="./images/DemoIcon.png" /> <h3> Book a Demo </h3>{" "}
          </a>{" "}
        </button>{" "}
      </div>{" "}
      <GiftCardSection> </GiftCardSection>{" "}
    </div>
  );
}

export default MiddleSection;
