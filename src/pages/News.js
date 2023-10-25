import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { InstagramEmbed } from "react-social-media-embed";
import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaPlayButton,
  MediaMuteButton,
} from "media-chrome/dist/react";
import {
  RiTwitterXLine,
  RiInstagramLine,
  RiFacebookCircleLine,
} from "react-icons/ri";
import Newspaper from "../media/ctfynewspaper.jpg";
import ctfy from "../media/book8.jpg";
import ctfycanada from "../media/book8canada.jpg";
import wahosaudio from "../media/audiobookwahos.png";
import audiobook from "../media/ctfyaudio.mp3";
import "./News.css";

function News() {
  let navigate = useNavigate();
  return (
    <div className="News">
      <div className="newspage">
        <h1 className="text-center">NEWS</h1>
        <p className="m-5">
          {" "}
          If you would like to be amongst the first to know more details, please
          get in touch with me through the mailing list by emailing me at
          <a
            href="mailto:janecorryauthor@gmail.com?subject=Newsletter&body=Please add me to your Newsletter!"
            target="_blank"
            rel="noreferrer"
            alt="send a mail to receive the newsletter"
            className="px-3 linkLightBase "
          >
            janecorryauthor@gmail.com
          </a>
          <button
            onClick={() => {
              navigate("../newsletter");
            }}
            className="btnLightDark px-3 py-1 reviewLink"
          >
            click here to find out more
          </button>
        </p>
        <hr />
        {/* 
        NEWS 
         */}
        <div className="row align-items-center m-auto newsOne">
          <div className="col-6">
            <div className="row  m-auto">
              <div className="col-6">
                <img
                  src={ctfy}
                  alt="coming to find you book cover"
                  className=" w-100 img-fluid d-inline px-2 ctfycover"
                />
              </div>
              <div className="col-6">
                <img
                  src={ctfycanada}
                  alt="coming to find you book cover"
                  className="w-100 img-fluid d-inline px-2 ctfycover"
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            {" "}
            <p>
              I'm very excited that <i>Coming To Find You</i> is being published
              by
              <a
                href="https://www.penguinrandomhouse.ca/imprints/4H/doubleday-canada"
                alt="Woman and Home online magazine"
                target="_blank"
                rel="noreferrer"
                className="linkLightBase"
              >
                {"  "}Doubleday {"  "}
              </a>
              in Canada and the States on December 19.
            </p>
            <p>These are the covers.</p>
          </div>
        </div>
        <hr />
        {/* 
        NEWS TWO
         */}{" "}
        <div className="row m-auto align-items-center newsThree">
          <div className="col-6 text-end">
            <img
              src={Newspaper}
              alt="newspaper review of Coming To Find You"
              className="w-50 img-fluid  newspapersnippet"
            />
          </div>
          <div className="col-6 p-3">
            <p className=" mt-3 newsTwo">
              I'm absolutely thrilled that <br />
              Coming To Find You <br />
              is in the July issue of
              <br />
              <a
                href="https://www.womanandhome.com/"
                alt="Woman and Home online magazine"
                target="_blank"
                rel="noreferrer"
                className="linkLightBase"
              >
                Woman & Home!
              </a>
            </p>
          </div>
        </div>
        <hr />
        {/* 
        NEWS THREE
         */}{" "}
        <div className="row m-auto align-items-center newsTwo">
          <div className="col-4">
            {" "}
            <img
              src={wahosaudio}
              alt="coming to find you book cover"
              className=" w-100 img-fluid d-inline px-2 ctfycover"
            />{" "}
            <MediaController audio>
              <audio slot="media" src={audiobook}></audio>
              <MediaControlBar>
                <MediaPlayButton />
                <MediaTimeDisplay showDuration />
                <MediaTimeRange />
                <MediaMuteButton />
              </MediaControlBar>
            </MediaController>
          </div>
          <div className="col-8 p-3">
            <p className=" mt-3 newsTwo">
              Do you like listening to novels rather than reading? Then you
              might enjoy the audio version of <i>We All Have Our Secrets</i>{" "}
              <p className="mt-5">
                Listen to the audiobook on{" "}
                <a
                  href="https://amzn.to/3Ris6EI"
                  alt="Listen to the audiobook on audible "
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 py-1 linkLightBase"
                >
                  audible
                </a>
              </p>
            </p>{" "}
          </div>
        </div>{" "}
        <hr />
        {/* 
SOCIALS
 */}
        <p className="mt-3  text-center">
          Follow me on
          <br /> Facebook, Twitter and Instagram. .newspage
        </p>
        <p className="text-center">
          {" "}
          <a
            href="https://www.facebook.com/authorjanecorry/"
            alt="Jane Corrys Facebook account"
            className="p-3 contactlink"
          >
            <RiFacebookCircleLine className="contactlinkicon " />
          </a>
          <a
            href="https://twitter.com/JaneCorryAuthor"
            alt="Jane Corrys Twitter account"
            className="p-3 contactlink"
          >
            <RiTwitterXLine className="contactlinkicon" />
          </a>
          <a
            href="https://www.instagram.com/janecorry"
            alt="Jane Corrys Instagram account"
            className="p-3  contactlink"
          >
            <RiInstagramLine className="contactlinkicon" />
          </a>
        </p>
        <div className="d-flex justify-content-between mt-4">
          <InstagramEmbed
            url="https://www.instagram.com/p/CwIEH9JLzub/"
            width={333}
            captioned="false"
          />

          <InstagramEmbed
            url="https://www.instagram.com/p/CvFR657oeQ1/"
            width={333}
            captioned="false"
          />

          <InstagramEmbed
            url="https://www.instagram.com/p/CuIF8JDLp2p/"
            width={333}
            captioned="false"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default News;
