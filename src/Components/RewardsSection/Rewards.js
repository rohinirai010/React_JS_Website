import React from "react";
import Title2 from "../Title2/Title2";
import "./Rewards.css";
import { BsCheck2Circle } from "react-icons/bs";

function Rewards() {
  return (
    <div>
      <div className="rewardsSection">
        <div className="leftRewardsSection">
          <div className="left-leftRewardsSection">
            <div className="circle"> </div> <div className="Vline"> </div>
          </div>{" "}
          <div className="right-leftRewardsSection">
            <span> Accoladez LINKS API </span>{" "}
            <h2> Fuel Your Employee Engagement Engine </h2>{" "}
            <p>
              Leverage rewards and incentives to improve employee engagement and{" "}
              <br /> help everyone stay connected virtually.{" "}
            </p>{" "}
            <div className="right-leftRewardsSection1">
              <button className="btnRight">
                <a href="#"> Key Benefits </a>{" "}
              </button>{" "}
              <ul style={{ "list-style": "none" }}>
                <li>
                  <BsCheck2Circle className="checkIcon"> </BsCheck2Circle>
                  Give out performance rewards - Build gift cards into <br />
                  your sales team 's structured incentives{" "}
                </li>{" "}
                <li>
                  <BsCheck2Circle className="checkIcon"> </BsCheck2Circle>
                  Celebrate Milestones - Set up and schedule milestone <br />
                  rewards and never again miss rewarding your loyal <br />
                  employee on their special day{" "}
                </li>{" "}
                <li>
                  <BsCheck2Circle className="checkIcon"> </BsCheck2Circle>
                  Onboarding gifts - Delight your new joinee with <br /> branded
                  vouchers of their choice{" "}
                </li>{" "}
                <li>
                  <BsCheck2Circle className="checkIcon"> </BsCheck2Circle>
                  Feedback Survey - Appreciate valuable employee <br /> inputs
                  with an incentivized, anonymous survey.{" "}
                </li>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="rightRewardsSection">
          <img src="./images/GiftCards.png" />
        </div>{" "}
      </div>
      <div className="rewardsSection1">
        <div className="leftRewardsSection">
          <div className="left-leftRewardsSection">
            <div className="circle"> </div> <div className="Vline"> </div>
          </div>{" "}
          <div className="right-leftRewardsSection">
            <span> POINTS API </span> <h2> Improve customer loyalty </h2>{" "}
            <p>
              Engage and retain your loyal customers with exclusive rewards
              delivered <br /> instantly.Make quick refunds and rebates that
              builds trust.{" "}
            </p>{" "}
            <div className="right-leftRewardsSection1">
              <button className="btnRight">
                <a href="#"> Key Benefits </a>{" "}
              </button>{" "}
              <ul>
                <li>
                  <BsCheck2Circle className="checkIcon"> </BsCheck2Circle>
                  Run tiered reward programs with each new tier to be <br />
                  aspirational and offer improved desired benefits <br />
                  instantly{" "}
                </li>{" "}
                <li>
                  {" "}
                  <BsCheck2Circle className="checkIcon"> </BsCheck2Circle>
                  Create game - play mechanics that <br /> provides an immediate{" "}
                </li>{" "}
                <li>
                  {" "}
                  <BsCheck2Circle className="checkIcon"> </BsCheck2Circle>
                  Build in -app engagement, fully manage the users <br />{" "}
                  journey and keep them hooked.{" "}
                </li>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="rightRewardsSection1">
          <img src="./images/prepaidCards.png" />
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Rewards;
