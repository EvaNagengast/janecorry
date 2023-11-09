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
import tlwtgerman from "../media/book6german.jpg";
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
        <p className="mt-3 m-1 m-sm-4 m-md-5 text-center">
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
          </a>{" "}
          <button
            onClick={() => {
              navigate("../newsletter");
            }}
            className="btnLightDark px-3 mt-3 py-1 reviewLink"
          >
            click here to find out more
          </button>
        </p>
        <hr />
        {/* 
        NEWS Coming to find you germany
         */}
        <div className="row m-auto p-1 p-sm-3 align-items-center news">
          <div className="col-12 col-md-6 text-center text-md-end">
            <img
              src={tlwtgerman}
              alt="The lies we tell, german book cover"
              className="w-50 img-fluid  newspapersnippet"
            />
          </div>
          <div className="col-12 col-md-6 text-center text-md-start">
            <p className="mt-sm-3 mb-0 ">
              I'm delighted that <i>The Lies We Tell</i> has just been published
              in Germany by
              <br />
              <a
                href="https://www.piper.de/buecher/the-lies-we-tell-niemand-ist-ohne-schuld-isbn-978-3-492-31917-1"
                alt="Piper publishing"
                target="_blank"
                rel="noreferrer"
                className="linkLightBase"
              >
                {"  "} Piper Verlag GmbH {"  "}
              </a>
            </p>
            <div className="mt-3">
              {" "}
              <a
                href="https://www.amazon.de/Lies-We-Tell-Niemand-Thriller-ebook/dp/B0C1P7KZC5"
                alt="amazon link to Coming to find you in germany"
                target="_blank"
                rel="noreferrer"
                className="linkLightBase"
              >
                Click here to order in Germany
              </a>
            </div>
          </div>
        </div>
        <hr />
        {/* 
        NEWS 
        coming to find you Canada
         */}
        <div className="row m-auto p-1 p-sm-3 align-items-center news">
          <div className="col-12 col-md-6 text-center text-md-end">
            <img
              src={ctfycanada}
              alt="Canadian cover of Coming to find you"
              className="w-50 img-fluid  middleimage"
            />
          </div>
          <div className="col-12 col-md-6 text-center text-md-start">
            <p className="mt-sm-3 mb-0 ">
              I'm very excited that <i>Coming To Find You</i> is being published
              by
              <br />
              <a
                href="https://www.penguinrandomhouse.ca/imprints/4H/doubleday-canada"
                alt="Doubleday publishing"
                target="_blank"
                rel="noreferrer"
                className="linkLightBase"
              >
                {"  "}Doubleday {"  "}
              </a>
              in Canada and the States on December 19.
            </p>{" "}
            <div className="mt-3">
              <a
                href="https://www.amazon.ca/gp/product/B0BYYNF1YX/ref=dbs_a_def_rwt_bibl_vppi_i0"
                alt="amazon link to Coming to find you in canada"
                target="_blank"
                rel="noreferrer"
                className="linkLightBase"
              >
                Click here to order in Canada
              </a>
            </div>
            <div>
              {" "}
              <a
                href="https://www.amazon.com/Coming-Find-You-Jane-Corry-ebook/dp/B0BYYNF1YX/ref=sr_1_3?keywords=jane+corry&qid=1699120785&sr=8-3"
                alt="amazon link to Coming to find you in usa"
                target="_blank"
                rel="noreferrer"
                className="linkLightBase"
              >
                Click here to order in the US
              </a>
            </div>
          </div>
        </div>
        <hr />
        {/* 
        NEWS 
        Coming to find you newspaper
         */}{" "}
        <div className="row m-auto p-1 p-sm-3 align-items-center news">
          <div className="col-12 col-md-6 text-center text-md-end">
            <img
              src={Newspaper}
              alt="newspaper review of Coming To Find You"
              className="w-50 img-fluid  middleimage"
            />
          </div>
          <div className="col-12 col-md-6 text-center text-md-start">
            <p className="mt-sm-3 mb-0 ms-3">
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
        NEWS 
        We all have our secrets audio book
         */}{" "}
        <div className="row m-auto  p-1 p-sm-3  align-items-center news">
          <div className="col-12 col-md-5 col-lg-4 text-center text-md-end">
            {" "}
            <img
              src={wahosaudio}
              alt="coming to find you book cover"
              className=" w-100 img-fluid d-inline px-2 wahoscover"
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
          <div className="col-12 col-md-7 col-lg-8">
            <p className=" mt-3 my-3 px-2 text-center text-md-start">
              Do you like listening to novels rather than reading? Then you
              might enjoy the audio version of <i>We All Have Our Secrets</i>
            </p>
            <p className=" px-2   text-center text-md-start">
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
          </div>
        </div>
        <hr />
        {/* 
SOCIALS
 */}
        <p className="mt-3  text-center">
          Follow me on
          <br /> Facebook, Twitter and Instagram
        </p>
        <p className="text-center">
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
        {/*  */}
        <div className="row m-auto insta">
          <div className="col">
            {" "}
            <InstagramEmbed
              url="https://www.instagram.com/p/CwIEH9JLzub/"
              width={333}
              captioned="false"
              className="m-auto embed"
            />
          </div>
          <div className="col">
            <InstagramEmbed
              url="https://www.instagram.com/p/CvFR657oeQ1/"
              width={333}
              captioned="false"
              className="m-auto embed"
            />
          </div>{" "}
          <div className="col">
            {" "}
            <InstagramEmbed
              url="https://www.instagram.com/p/CuIF8JDLp2p/"
              captioned="false"
              className="m-auto embed"
            />
          </div>
          <div></div>
        </div>
        {/*  */}
      </div>
      <Footer />
    </div>
  );
}

export default News;
