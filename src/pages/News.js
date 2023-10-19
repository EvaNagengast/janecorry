import React from "react";
import Footer from "./Footer";
import Newspaper from "../media/ctfynewspaper.jpg";
import "./News.css";

function News() {
  return (
    <div>
      <div className="newspage">
        NEWS
        <br />
        <br />
        I'm very excited that "Coming to find you" is being published by
        doubleday in canada and the states on december 19. This will be the
        cover (Image od cover) Audiobook <br />
        <br />
        Do you like listening to novels rather than reading? Then you might
        enjoy the audio version of We All Have Our Secrets
        https://amzn.to/3Ris6EI
        <br />
        <br />
        If you would like to be amongst the first to know more details, please
        get in touch with me through the mailing list by emailing me at
        janecorryauthor@gmail.com
        <br />
        <br />
        <div className="row m-auto my-5 pt-3 align-items-center ">
          <div className="col-6 text-end">
            <img
              src={Newspaper}
              alt="newspaper review of Coming To Find You"
              className="newspapersnippet"
            />
          </div>
          <div className="col-6 text-start bookinmagazine">
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

export default News;
