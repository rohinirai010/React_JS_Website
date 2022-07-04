import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import "./SecuritySection.css";

function SecuritySection() {
    return ( <
        div >
        <
        div className = "rewardsSectionSecurity" >
        <
        div className = "leftRewardsSection" >
        <
        div className = "right-leftRewardsSection" >
        <
        span > Security < /span>{" "} <
        h2 > Security and compliance at the core < /h2>{" "} <
        p > { " " }
        Xoxoday platform meets the highest certification standards to help { " " } <
        br / > reduce compliance burdens
        for your business and keep payouts safe. { " " } <
        /p>{" "} <
        div className = "right-leftRewardsSection1"
        style = {
            { 'margin-bottom': '38px' } } >
        <
        ul >
        <
        li style = {
            { "padding-bottom": "15px" } } > { " " } <
        BsCheck2Circle className = "checkIcon"
        style = {
            { color: "#254FE4" } } >
        { " " } <
        /BsCheck2Circle>
        Encryption of sensitive data { " " } <
        /li>{" "} <
        li style = {
            { "padding-bottom": "15px" } } >
        <
        BsCheck2Circle className = "checkIcon"
        style = {
            { color: "#254FE4" } } >
        { " " } <
        /BsCheck2Circle>
        HTTPS and HSTS
        for secure connections { " " } <
        /li>{" "} <
        li style = {
            { "padding-bottom": "15px" } } >
        <
        BsCheck2Circle className = "checkIcon"
        style = {
            { color: "#254FE4" } } >
        { " " } <
        /BsCheck2Circle>
        Vulnerability disclosure and reward program { " " } <
        /li>{" "} <
        /ul>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        div className = "rightRewardsSectionSecurity" >
        <
        img src = "./images/SecurityImg.png" /
        > { " " } <
        /div>{" "} <
        /div>{" "} <
        /div>
    );
}

export default SecuritySection;