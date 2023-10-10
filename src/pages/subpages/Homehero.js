import React from "react";
import Title from "../../media/jcfonttitle.png";
import "./Homehero.css";
function Homehero() {
  return (
    <div>
      <div className="herocontainer">
        <div className="flickeringlights"> </div>
        <div className="hero">
          <img
            src={Title}
            alt="title coming to find you"
            className="titleimage"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Homehero;
