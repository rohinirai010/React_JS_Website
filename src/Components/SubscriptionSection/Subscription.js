import React from "react";
import "./Subscription.css";

function Subscription() {
    return ( <
        div >
        <
        section class = "container" >
        <
        div class = "card" >
        <
        div className = "card-image" >
        <
        img src = "./images/Frame1new.png" / >
        <
        div className = "FrameContent" >
        <
        h2 > Let’ s get started! < /h2>{" "} <
        p > { " " }
        Get a personalized demo of Empuls or explore it < br / >
        for your teams with our 30 - days free trial. { " " } <
        /p>{" "} <
        button className = "btnDemo" >
        <
        a href = "#" >
        <
        img src = "./images/DemoIcon.png"
        className = "btnDemoImage" / > < h3 > Book a Demo < /h3>{" "} <
        /a> <
        /button>{" "} <
        /div>{" "} <
        /div>{" "}

        <
        /div> <
        div class = "card" >
        <
        div className = "card-image1" >
        <
        img src = "./images/Frame2new1.png" / >
        <
        /div>{" "} <
        div className = "FrameContentRight" >
        <
        h2 > Subscribe Our Newsletter < /h2>{" "} <
        p > Get a personalized demo of Empuls. < /p>{" "} <
        form action = "" >
        <
        input type = "email"
        className = "emailInput"
        name = ""
        placeholder = "Enter your email"
        id = "" /
        >
        <
        input type = "submit"
        className = "submitInput"
        value = "Get Started" /
        >
        <
        /form>{" "} <
        /div>{" "} <
        /div>{" "} <
        /section>{" "} <
        /div>
    );
}

export default Subscription;