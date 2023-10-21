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
      <h1 className="ms-3">Contact</h1>
      <div className="row">
        <div className="col p-5">
          <div className="contactpage">
            You can send me a message through Facebook, Twitter and Instagram.
            <div className="d-flex">
              <div className="contactlink">
                <a
                  href="https://twitter.com/JaneCorryAuthor"
                  alt="Jane Corrys Twitter account"
                >
                  <RiTwitterXLine className="contactlinkicon" />
                </a>
              </div>
              <div className="contactlink">
                <a
                  href="https://www.facebook.com/authorjanecorry/"
                  alt="Jane Corrys Facebook account"
                >
                  <RiFacebookCircleLine className="contactlinkicon" />
                </a>
              </div>
              <div className="contactlink">
                <a
                  href="https://www.instagram.com/janecorry"
                  alt="Jane Corrys Facebook account"
                >
                  <RiInstagramLine className="contactlinkicon" />
                </a>
              </div>
            </div>
            <p>
              My publicity contact at Penguin is Jane Gentle
              <br />
              <a
                href="mailto:JGentle@penguinrandomhouse.co.uk"
                alt="mail of Jane Gentle"
                className="highlight"
              >
                JGentle@penguinrandomhouse.co.uk
              </a>
            </p>
            <p>
              My literary agent is Kate Hordern at KHLA.
              <br />
              <a
                href="mailto:           kate@khla.co.uk"
                alt="mail of Kate Hordern"
                className="highlight"
              >
                kate@khla.co.uk
              </a>
            </p>
            <p>
              My film and tv agent is Italia Gandolfo. <br />
              <a
                href="mailto:italia@ghliterary.com"
                alt="mail of Italia Gandolfo"
                className="highlight"
              >
                italia@ghliterary.com
              </a>
            </p>
          </div>
        </div>
        <div className="col p-5">
          <img
            src={jcbookstore}
            alt="Jane corry showing her new book inside a bookstore"
            className="img-fluid"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
