import React from "react";
import "./Navbar.css";
import {GiHamburgerMenu} from "react-icons/gi";

function Navbar() {
  return (
    <div className="wrapper">
      <nav>
        <div className="logo">
          <a href="#">
              <img src="./images/logoimg.png" alt="Logo" />
          </a>
        </div>{" "}
        <ul>
          <li>
            <a href="#"> Home </a>{" "}
          </li>{" "}
          <li>
            <a href="#"> Platform </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a href="#"> Pricing </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a href="#"> About Us </a>{" "}
          </li>{" "}
        </ul>{" "}
        <div>
          <button className="btnLeft">
            {" "}
            <a href="#"> Get Started </a>{" "}
          </button>{" "}
          <button className="btnRight">
            {" "}
            <a href="#"> Book a Demo </a>{" "}
          </button>{" "}
          
        </div>{" "}
      </nav>{" "}
      
    </div>
  );
}

export default Navbar;
