import React from "react";
import "./Title.css";
import { AiOutlineArrowRight } from "react-icons/ai";

function Title() {
  return (
    <div className="TitleSection">
      <h2>
        Get rewarded for living your life and paying your bills.Discover <br />
        <span> Accoladez Loyalty!! </span>{" "}
      </h2>{" "}
      <div>
        <button className="btn">
          <a href="#">
            {" "}
            <img src="./images/DemoIcon.png" /> <h3> Book a Demo </h3>{" "}
          </a>{" "}
        </button>{" "}
        <h4>
          {" "}
          Try for free{" "}
          <AiOutlineArrowRight className="arrowRight">
            {" "}
          </AiOutlineArrowRight>{" "}
        </h4>{" "}
        <div className="midPart">
      {/*    <img className="line" src="./images/line.png" />   */}
       {/*   <img className="giftBox" src="./images/GiftBox.png" />     */}
        {/*  <img className="smallCurve" src="./images/smallCurve.png" />   */}
         {/* <img className="bigCurve" src="./images/bigCurvenew.png" />   */}

          <img className="mainImage" src="./images/768px1.png" alt="" />

       {/*   <img className="quoteImg" src="./images/comment.png" />   */}

       {/*   <img className="midPart1" src="./images/smallGraph.png" />  */}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Title;
