import React from "react";
import Title2 from "../Title2/Title2";
import "./FaqSection.css";

function FaqSection() {
  return (
    <div className="FaqSec">
      <div className="FaqTitle">
        <h2> Frequently asked questions </h2>{" "}
        <p> Everything you need to know about the product and billing. </p>{" "}
      </div>
      <div className="accordionFaqSection">
        <div className="parent-tab">
          <input type="radio" name="tab" id="tab-1" checked />
          <label for="tab-1">
            <span> Is there a free trial available ? </span>{" "}
            <img src="./images/Icon2.png" className="icon" />
          </label>{" "}
          <div class="content">
            <p>
              Yes, you can try us for free for 30 days.If you want, we’ ll
              provide you with a free, <br /> personalized 30 - minute
              onboarding call to get you up and running as soon as possible.{" "}
            </p>{" "}
          </div>{" "}
        </div>
        <div className="parent-tab">
          <input type="radio" name="tab" id="tab-2" />
          <label for="tab-2">
            <span> Can I change my plan later ? </span>{" "}
            <img src="./images/Icon2.png" className="icon" />
          </label>{" "}
          <div class="content">
            <p>
              Yes, you can try us for free for 30 days.If you want, we’ ll
              provide you with a free, <br /> personalized 30 - minute
              onboarding call to get you up and running as soon as possible.{" "}
            </p>{" "}
          </div>{" "}
        </div>
        <div className="parent-tab">
          <input type="radio" name="tab" id="tab-3" />
          <label for="tab-3">
            <span> What is your cancellation policy ? </span>{" "}
            <img src="./images/Icon2.png" className="icon" />
          </label>{" "}
          <div class="content">
            <p>
              Yes, you can try us for free for 30 days.If you want, we’ ll
              provide you with a free, <br /> personalized 30 - minute
              onboarding call to get you up and running as soon as possible.{" "}
            </p>{" "}
          </div>{" "}
        </div>
        <div className="parent-tab">
          <input type="radio" name="tab" id="tab-4" />
          <label for="tab-4">
            <span> Can other info be added to an invoice ? </span>{" "}
            <img src="./images/Icon2.png" className="icon" />
          </label>{" "}
          <div class="content">
            <p>
              {" "}
              Yes, you can try us for free for 30 days.If you want, we’ ll
              provide you with a free, <br /> personalized 30 - minute
              onboarding call to get you up and running as soon as possible.{" "}
            </p>{" "}
          </div>{" "}
        </div>
        <div className="parent-tab">
          <input type="radio" name="tab" id="tab-5" />
          <label for="tab-5">
            <span> How does billing work ? </span>{" "}
            <img src="./images/Icon2.png" className="icon" />
          </label>{" "}
          <div class="content">
            <p>
              {" "}
              Yes, you can try us for free for 30 days.If you want, we’ ll
              provide you with a free, <br /> personalized 30 - minute
              onboarding call to get you up and running as soon as possible.{" "}
            </p>{" "}
          </div>{" "}
        </div>
        <div className="parent-tab">
          <input type="radio" name="tab" id="tab-6" />
          <label for="tab-6">
            <span> How do I change my account email ? </span>{" "}
            <img src="./images/Icon2.png" className="icon" />
          </label>{" "}
          <div class="content">
            <p>
              {" "}
              Yes, you can try us for free for 30 days.If you want, we’ ll
              provide you with a free, <br /> personalized 30 - minute
              onboarding call to get you up and running as soon as possible.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default FaqSection;
