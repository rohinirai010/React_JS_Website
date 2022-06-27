import React from "react";
import MiddleSection from "../MiddleSection/MiddleSection";
import OurTeam from "../OurTeam/OurTeam";
import "./OurTeamMain.css";

function OurTeamMain() {
  return (
    <div className="OurTeamMainSection">
      <div className="MidSec">
        <h3 className="MidSecTitle">
          Powerful Features & Benefits <br />
          <span> All in one simple platform </span>{" "}
        </h3>{" "}
        <button className="midBtn">
          <a href="#">
            {" "}
            <img src="./images/DemoIcon.png" /> <h3> Book a Demo </h3>{" "}
          </a>{" "}
        </button>{" "}
      </div>{" "}
      <div className="ourTeamSection">
        <div className="ourTeamSectionTop">
          <OurTeam> </OurTeam> <OurTeam> </OurTeam> <OurTeam> </OurTeam>{" "}
        </div>{" "}
        <div className="ourTeamSectionBottom">
          <OurTeam> </OurTeam> <OurTeam> </OurTeam> <OurTeam> </OurTeam>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default OurTeamMain;
