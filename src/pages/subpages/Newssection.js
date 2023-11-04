import React from "react";
import { useNavigate } from "react-router-dom";
import Newspaper from "../../media/ctfynewspaper.jpg";
import tlwtgerman from "../../media/book6german.jpg";
import ctfycanada from "../../media/book8canada.jpg";
import "./Newssection.css";

function Newssection() {
  let navigate = useNavigate();
  return (
    <div className="Newssection">
      <div className="newssection">
        <h2>News</h2>

        <div className="row m-auto newsCardContainer">
          <div className="col-12 col-lg-4 order-3 pt-3 pt-lg-0 ">
            {/* newspaper */}
            <div className="cardOne">
              <p className="pt-2 cardtextOne">
                <img
                  src={Newspaper}
                  alt="newspaper review of Coming To Find You"
                  className=" float-start img-fluid d-inline px-2 cardImageOne mb-3"
                />
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
          {/* canada/us */}
          <div className="col-12 col-lg-4 order-2  pt-3 pt-lg-0">
            <div className="cardTwo">
              <p className="pt-2 cardtextTwo">
                <img
                  src={ctfycanada}
                  alt="coming to find you book cover"
                  className=" float-start img-fluid d-inline px-2 cardImageTwo mb-3"
                />
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
              <div>
                {" "}
                <a
                  href="https://www.amazon.ca/gp/product/B0BYYNF1YX/ref=dbs_a_def_rwt_bibl_vppi_i0"
                  alt="amazon link to Coming to find you in canada"
                  target="_blank"
                  rel="noreferrer"
                  className="linkLightBase"
                >
                  Click here to order in Canada
                </a>
              </div>
              <div>
                {" "}
                <a
                  href="https://www.amazon.com/Coming-Find-You-Jane-Corry-ebook/dp/B0BYYNF1YX/ref=sr_1_3?keywords=jane+corry&qid=1699120785&sr=8-3"
                  alt="amazon link to Coming to find you in usa"
                  target="_blank"
                  rel="noreferrer"
                  className="linkLightBase"
                >
                  Click here to order in the US
                </a>
              </div>
            </div>
          </div>
          {/* germany  */}
          <div className="col-12 col-lg-4 order-1">
            <div className="cardThree">
              <p className="pt-2 cardtextThree">
                <img
                  src={tlwtgerman}
                  alt="The lies we tell, german book cover"
                  className=" float-start img-fluid d-inline px-2 cardImageThree mb-3"
                />
                I'm delighted that <i>The Lies We Tell</i> has just been
                published in Germany by
                <a
                  href="https://www.piper.de/buecher/the-lies-we-tell-niemand-ist-ohne-schuld-isbn-978-3-492-31917-1"
                  alt="Piper publishing"
                  target="_blank"
                  rel="noreferrer"
                  className="linkLightBase"
                >
                  {"  "} Piper Verlag GmbH {"  "}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          navigate("../../News");
        }}
        className="btnLightDark px-3   py-1 reviewLink"
      >
        more news
      </button>
    </div>
  );
}

export default Newssection;
