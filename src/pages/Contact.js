import React from "react";
import Footer from "./Footer";
import {
  RiTwitterXLine,
  RiInstagramLine,
  RiFacebookCircleLine,
} from "react-icons/ri";
import jcbookstore from "../media/jcbookstore.png";
import "./Contact.css";

function Contact() {
  return (
    <div className="Contact">
      <div className="contactpage">
        <h1 className="m-0">Contact</h1>
        <div className="row my-4 my-md-5 m-auto">
          <div className="col-12 col-md-6 pt-lg-4 contacttext">
            You can send me a message on
            <br /> Facebook, Twitter and Instagram.
            <div className="d-flex iconContainer">
              <a
                href="https://www.facebook.com/authorjanecorry/"
                alt="Jane Corrys Facebook account"
                className="ps-5 contactlink"
              >
                <RiFacebookCircleLine className="contactlinkicon " />
              </a>
              <a
                href="https://twitter.com/JaneCorryAuthor"
                alt="Jane Corrys Twitter account"
                className="contactlink"
              >
                <RiTwitterXLine className="contactlinkicon" />
              </a>

              <a
                href="https://www.instagram.com/janecorry"
                alt="Jane Corrys Instagram account"
                className="pe-5 contactlink"
              >
                <RiInstagramLine className="contactlinkicon" />
              </a>
            </div>
            <p>
              My publicity contact at Penguin is Jane Gentle
              <br />
              <a
                href="mailto:JGentle@penguinrandomhouse.co.uk"
                target="_blank"
                rel="noreferrer"
                alt="mail of Jane Gentle"
                className="highlight contactlink"
              >
                JGentle@penguinrandomhouse.co.uk
              </a>
            </p>
            <p>
              My literary agent is Kate Hordern at KHLA.
              <br />
              <a
                href="mailto:kate@khla.co.uk"
                target="_blank"
                rel="noreferrer"
                alt="mail of Kate Hordern"
                className="highlight contactlink"
              >
                kate@khla.co.uk
              </a>
            </p>
            <p>
              My film and tv agent is Italia Gandolfo. <br />
              <a
                href="mailto:italia@ghliterary.com"
                alt="mail of Italia Gandolfo"
                className="highlight contactlink"
              >
                italia@ghliterary.com
              </a>
            </p>
          </div>
          <div className="col-md-6 mb-5">
            <img
              src={jcbookstore}
              alt="Jane corry showing her new book inside a bookstore"
              className="img-fluid contactimage"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
