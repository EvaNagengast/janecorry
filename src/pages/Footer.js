import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="Footer py-2 py-sm-3">
      <footer className="footer text-center">
        © 2023 Jane Corry <br />
        Images are by
        <a
          href="https://www.lucydaviesphotography.com/"
          target="_blank"
          rel="noreferrer"
          alt="Photos by Lucy Davies"
          className="footerlink ps-1 pe-3"
        >
          Lucy Davies Photography
        </a>
        <br className="d-block d-sm-none" />
        This page was crafted with care by
        <a
          href="https://eva-nagengast.com/"
          target="_blank"
          rel="noreferrer"
          alt="Info Eva Nagengast"
          className="footerlink ps-1"
        >
          Eva Nagengast
        </a>
      </footer>
    </div>
  );
}
