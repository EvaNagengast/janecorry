import React from "react";
import Footer from "./Footer";
import Newspaper from "../media/ctfynewspaper.jpg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div>
      <div className="aboutmepage">
        {" "}
        hello aboutme
        <div className="row m-auto my-5 pt-3 align-items-center ">
          <div className="col-6 text-end">
            <img
              src={Newspaper}
              alt="newspaper review of Coming To Find You"
              className="newspapersnippet"
            />
          </div>
          <div className="col-6 text-start bookinmagazine">
            {" "}
            I'm absolutely thrilled that <br />
            Coming To Find You <br />
            is in the July issue of
            <br />
            <a
              href="https://www.womanandhome.com/"
              alt="Woman and Home online magazine"
              target="_blank"
              rel="noreferrer"
              className="linkLightBase"
            >
              Woman & Home!
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutMe;
