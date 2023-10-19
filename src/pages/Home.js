import React from "react";
import Footer from "./Footer";
import Homehero from "./subpages/Homehero";
import Currentbook from "./subpages/Currentbook";
import AbouttheAuthor from "./subpages/AbouttheAuthor";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="homepage">
        <Homehero />
        <main>
          <Currentbook />
        </main>
      </div>
      <section>
        <AbouttheAuthor />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
