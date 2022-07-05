import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";


function Navbar() {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return ( <
        div className = "wrapper" >
        <
        div className = "logo" >
        <
        a href = "#" >
        <
        img src = "./images/logoimg.png"
        alt = "Logo" / >
        <
        /a> <
        /div> <
        nav ref = { navRef } >
        <
        ul >
        <
        li >
        <
        a href = "#" > Home < /a>{" "} <
        /li>{" "} <
        li >
        <
        a href = "#" > Platform < /a>{" "} <
        /li>{" "} <
        li > { " " } <
        a href = "#" > Pricing < /a>{" "} <
        /li>{" "} <
        li > { " " } <
        a href = "#" > About Us < /a>{" "} <
        /li>{" "} <
        /ul>{" "} <
        div className = "twoButtons" >
        <
        button className = "btnLeft" > { " " } <
        a href = "#" > Get Started < /a>{" "} <
        /button>{" "} <
        button className = "btnRight" > { " " } <
        a href = "#" > Book a Demo < /a>{" "} <
        /button>{" "}

        <
        /div>{" "} <
        /nav>{" "} <
        button className = "nav-btn"
        onClick = { showNavbar } >
        <
        FaBars > < /FaBars> <
        /button> <
        /div>
    );
}

export default Navbar;