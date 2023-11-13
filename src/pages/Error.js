import React from "react";
import Footer from "./Footer";
import "./Error.css";

function Error() {
  return (
    <div className="Error">
      <div className="errorpage">
        <h1>
         <a href="https://www.janecorryauthor.com/" alt="get to main page" className="linkLightBase">
           Click here {" "}
          </a> 
          to return to main page
        </h1>
      </div>
      <Footer />
    </div>
  );
}

export default Error;
