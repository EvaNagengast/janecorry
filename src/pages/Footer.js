import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="Footer ">
      <footer className="footer text-center">
        © 2023 Jane Correy <br className="text-end" />
        This page was crafted with care by 
        <a
          href="https://github.com/EvaNagengast/PersonalPortfolio"
          target="_blank"
          rel="noreferrer"
          alt="Info Eva Nagengast"
          className="footerlink"
        >
        Eva Nagengast
        </a>
       images are by Lucy Davies
      </footer>
    </div>
  );
}
