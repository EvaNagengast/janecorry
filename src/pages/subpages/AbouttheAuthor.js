import React from "react";
import { useNavigate } from "react-router-dom";
import Halfimage from "../../media/jctopbody.jpg";import "./AbouttheAuthor.css";

function AbouttheAuthor() {
  let navigate = useNavigate();
  return (
    <div className="abouttheauthor">
      <div className="mt-5 py-2 py-lg-5 aboutJaneCorry">
        <div className="row m-auto align-items-center">
          <div className="col-md-6 mt-4 mt-md-0 mt-lg-3">
            <h2>Jane Corry</h2>
            <div className="my-4 d-none d-lg-block Newsletterprompt">
              <button
                onClick={() => {
                  navigate("../newsletter");
                }}
                className="d-block m-auto mb-2 btnLightDark"
              >
                Sign up to my newsletter
              </button>
              and I will send you a free short story.
            </div>
            <div className="px-2 px-md-3 px-lg-5 pt-3 pt-md-0 jcdescription">
              Jane Corry is a writer and journalist who has spent time working
              as the writer in residence of a high security prison for men - an
              experience that helped inspire her Sunday Times bestsellers. Jane
              runs regular writing workshops and speaks at literary festivals
              all over the world. Many of her ideas strike during morning
              dog-jogs along the beach followed by a dip in the sea.
              <button
                onClick={() => {
                  navigate("./reviews");
                }}
                className="d-block m-auto mt-3 buttonLink"
              >
                Find out more about Jane
              </button>
            </div>
          </div>
          <div className="col-md-6 ">
            <img
              src={Halfimage}
              alt="Jane Corry Profile holiding her newest Book"
              className="img-fluid pt-4 pt-sm-5 jcimagesmall"
            />
            <div className="my-4 d-block d-lg-none Newsletterprompt">
              <button
                onClick={() => {
                  navigate("../newsletter");
                }}
                className="d-block m-auto mb-2 btnLightDark"
              >
                Sign up to my newsletter
              </button>
              and I will send you a free short story.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AbouttheAuthor;
