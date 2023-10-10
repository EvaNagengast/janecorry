import React from "react";
import Footer from "./Footer";
import Homehero from "./subpages/Homehero";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="homepage">
      <Homehero/>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
