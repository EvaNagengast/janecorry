import React from "react";
import Newspaper from "../../media/ctfynewspaper.jpg";
import ctfy from "../../media/book8.jpg";
import ctfycanada from "../../media/book8canada.jpg";
import "./Newssection.css";

function Newssection() {
  return (
    <div className="Newssection">
      <div className="newssection">
        <h2>News</h2>

        <div className="row newsCardContainer">
          <div className="col-6 order-2">
            {" "}
            <div className="cardOne">
              <div className="cardimageOne">
                <img
                  src={Newspaper}
                  alt="newspaper review of Coming To Find You"
                  className="w-70 img-fluid newspapersnippet"
                />
              </div>{" "}
              <p className="pt-2 cardtextOne">
                Absolutely thrilled that <i>Coming To Find You </i>is in the
                July issue of
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
              </p>
            </div>
          </div>
          <div className="col-6 order-1">
            <div className="cardTwo">
              <div className="cardimageTwo">
                <ul>
                  <li>
                    <img
                      src={ctfy}
                      alt="coming to find you book cover"
                      className=" w-50 img-fluid d-inline px-2 ctfycover"
                    />
                    <figcaption>Coming To find you UK</figcaption>
                  </li>
                  <li>
                    <img
                      src={ctfycanada}
                      alt="coming to find you book cover"
                      className="w-50 img-fluid d-inline px-2 ctfycover"
                    />
                    <figcaption className="text-wrap">Coming To find you Canada/US</figcaption>
                  </li>
                </ul>
              </div>
              <p className="cardtextTwo">
                I'm very excited that <i>Coming To Find You</i> is being
                published by
                <a
                  href="https://www.penguinrandomhouse.ca/imprints/4H/doubleday-canada"
                  alt="Woman and Home online magazine"
                  target="_blank"
                  rel="noreferrer"
                  className="linkLightBase"
                >
                  {"  "}Doubleday {"  "}
                </a>
                in Canada and the States on December 19.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newssection;
