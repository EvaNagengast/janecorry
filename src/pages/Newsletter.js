import React from "react";
import Footer from "./Footer";
import janebeach from "../media/janebeach.png";
import "./Newsletter.css";

function Newsletter() {
  return (
    <div className="Newsletter">
      <div className="newsletterpage">
        <h1 className="mb-md-3"> Newsletter</h1>

        <div className="row m-auto my-3 my-md-5">
          <div className="col-12 col-md-5 col-lg-6 order-2 order-md-1">
            <img
              src={janebeach}
              alt="Jane on the beach in front of a lighthouse holding her book"
              className="newsletterimage"
            />
          </div>
          <div className="col-12 col-md-7 col-lg-6 pb-5 order-1 order-md-2">
            <p className="pt-md-4 pt-lg-5 px-1 px-sm-3 px-md-5 ps-md-0 pe-md-4 pb-3 text-md-start newslettertext">
              Would you like to receive a regular newsletter?
              <br /> Contact me at
              <a
                href="mailto:janecorryauthor@gmail.com"
                target="_blank"
                rel="noreferrer"
                alt="send a mail to receive the newsletter"
                className="linkLightBase"
              >
                {" "}
                janecorryauthor@gmail.com{" "}
              </a>{" "}
              <br />
              and I'll send you details.
            </p>
            <a
              href="mailto:janecorryauthor@gmail.com?subject=Newsletter&body=Please add me to your Newsletter!"
              target="_blank"
              rel="noreferrer"
              alt="send a mail to receive the newsletter"
              className="px-3 btnLightDark subscribebutton"
            >
              click here to subscribe
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Newsletter;
