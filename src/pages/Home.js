import React from "react";
import Footer from "./Footer";
import Title from "../media/jcfonttitle.png";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="homepage">
        <div className="herocontainer">
          <div className="flickeringlights"> </div>
          <div className="hero">
            {" "}
            <img
              src={Title}
              alt="title coming to find you"
              className="titleimage"
            ></img>{" "}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
