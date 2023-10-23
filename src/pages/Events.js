import React from "react";
import Footer from "./Footer";
import "./Events.css";

function Events() {
  return (
    <div className="Events">
      <div className="eventspage">
        <h1 className="text-center">Events</h1>
        <div className="event1">
          <h2 className="ms-2 highlight"> THE FREELANCE MEDIA GROUP</h2>
          <p>
            I help to run the <i>Freelance Media Group</i> which generally meets
            in London at <i>The University Women's Club</i>. When the virus
            struck, we turned to Zoom and currently run online meetings with
            speakers from publishing.
          </p>
          <p>
            {" "}
            If youd like to join us online, please email me at
            <a
              href="mailto:janecorryauthor@gmail.com"
              alt="send an e-mail for online meetings with the Freelance Media Group"
              target="_blank"
              rel="noreferrer"
              className="mx-2 linkLightBase"
            >
              janecorryauthor@gmail.com
            </a>
          </p>
          <div>
            {" "}
            <a
              href="mailto:janecorryauthor@gmail.com?subject=Freelance Media Group&body=I would like to join the online meetings with the Freelance Media Group!"
              target="_blank"
              rel="noreferrer"
              alt="send a mail to join the online meetings with the Freelance Media Group"
              className="px-3 btnLightDark newsletterbutton"
            >
              click here to join
            </a>
          </div>
        </div>
      </div>
      <Footer />{" "}
    </div>
  );
}

export default Events;
