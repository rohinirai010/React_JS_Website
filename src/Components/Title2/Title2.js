import React from "react";
import "./Title2.css";

function Title2(props) {
  return (
    <div className="title2Section">
      <h2> {props.head} </h2> <p> {props.para} </p>
    </div>
  );
}

export default Title2;
