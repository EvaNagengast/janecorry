import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import Slideshow from "./Slideshow";
import Newspaper from "../../media/ctfynewspaper.jpg";
import Fullimage from "../../media/jcfullbody.jpg";

import Subtitle from "../../media/jcfontsubtitle.png";

import "./Currentbook.css";

function Currentbook() {
  let navigate = useNavigate();
  return (
    <div className="currentbooksection pb-4">
      <div className="row m-auto">
        <div className="col-3">
          <img src={Subtitle} alt="subtitle" className="subtitle d-block"></img>
        </div>
        <div className="col-11">
          <h1 className="">
            Coming To
            <br />
            Find You
          </h1>
        </div>
      </div>
      <div className="row m-auto pt-md-4">
        <div className="col-md-7 pt-2 ps-3 ps-md-5 introduction">
          <img
            src={Fullimage}
            alt="Jane Corry holding her recent novel"
            className="jcimage d-none d-sm-block d-md-none  float-end"
          />
          My new 2023 Penguin suspense is set in the Second World War and the
          present day. When Nancy's stepbrother is sent to prison for killing
          her mother and his father, Nancy seeks refuge from the press at the
          family seaside holiday home in Devon. But Tall Chimneys was once owned
          by Elizabeth who took in evacuees during the Second World War and was
          also a member of Churchill's Secret Army. Elizabeth commited a
          teribble crime. Can Nancy discover what it was - and finally find
          peace for herself?
          <div className="d-block d-sm-none d-lg-block  pt-5 starreviewhome">
            <span className="stars">
              <MdOutlineStar /> <MdOutlineStar /> <MdOutlineStar />{" "}
              <MdOutlineStar /> <MdOutlineStar />
            </span>
            <br />
            <i>
              'What a lovely book. Parts are set in WWII & parts in the current
              day. The mix is faultless. Fabulous story line that really draws
              you in. Brilliant character'
            </i>
          </div>
          <div className="mt-5">
            <a
              href="https://www.amazon.co.uk/Coming-Find-You-heart-wrenching-suspenseful/dp/0241996104/"
              alt="shop coming to find you on amazon"
              target="_blank"
              rel="noreferrer"
              className=" py-1 px-2 btnLightDark comingtofindyouAmazon"
            >
              click here to order <i>Coming To Find You</i>
            </a>
            <div className="mt-3">
              Also available in bookshops and supermarkets nationwide.
            </div>
          </div>{" "}
        </div>{" "}
        <div className="d-block d-sm-none d-md-block col- 12 col-md-5 pt-4 p-sm-0">
          {" "}
          <img
            src={Fullimage}
            alt="Jane Corry holding her recent novel"
            className="jcimage "
          />{" "}
        </div>
        <div className=" d-none d-sm-block d-lg-none  pt-5 pt-lg-5 text-center starreviewhome">
          <span className="stars">
            <MdOutlineStar /> <MdOutlineStar /> <MdOutlineStar />{" "}
            <MdOutlineStar /> <MdOutlineStar />
          </span>
          <br />
          <i>
            'What a lovely book. Parts are set in WWII & parts in the current
            day. The mix is faultless. Fabulous story line that really draws you
            in. Brilliant character'
          </i>
        </div>
      </div>
      <div className="row m-auto my-5 pt-3 align-items-center ">
        <div className="col-6    text-end text-sm-center text-lg-end bookinmagazine">
          Absolutely thrilled that <br />
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
        </div>
        <div className="col-6 text-center text-lg-start">
          <img
            src={Newspaper}
            alt="newspaper review of Coming To Find You"
            className="pe-4 pe-sm-0 img-fluid newspapersnippet"
          />
        </div>
      </div>
      <hr className="m-4 m-lg-5" />
      <div className="mt-3 adlastbook">
        Meanwhile, you can buy my 2022 Penguin novel <br />
        <span className="highlight">
          <i>We all have our Secrets </i>
        </span>
        <br />
        and all of my other books at booksellers or online.
      </div>{" "}
      <div className="m-3 p-md-5 p-3">
        <Slideshow />
      </div>
      <a
        href="https://www.amazon.co.uk/stores/Jane-Corry/author/B01BTZ839E?ref=ap_rdr&store_ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true"
        alt="amazon sellers page"
        target="_blank"
        rel="noreferrer"
        className="px-2 py-1 btnLightDark"
      >
        Click here to find all my books
      </a>
      <hr className="m-4 m-lg-5" />
      <div className="row m-auto align-items-center reviewsection">
        <div className="col-5 col-sm-4 col-md-3 col-lg-2 ps-4">
          Psychological Thriller Of The Year!
          <br />
          <span className="highlight">The Independent</span>
        </div>
        <div className="col-7 col-sm-8 col-md-4 col-lg-3 ">
          Jane Corry writes consistently enthralling stories about the dark side
          of family life.
          <br />
          <span className="highlight">
            PETER JAMES, international best-seller
          </span>
        </div>

        <div className="col-5 col-sm-3 col-md-5 col-lg-3 mt-4 mt-md-0">
          Wonderfully paced and engaging with characters who kept me in
          heart-stopping suspense throughout. I've loved all Jane's books. This,
          to me, is her very best.
          <br />
          <span className="highlight">SANDRA HOWARD</span>
        </div>
        <div className="col-7 col-sm-4 col-md-4 col-lg-4 mt-4 mt-md-5 mt-lg-0">
          The characters were beautifully complex and the small community
          setting realistically portrayed. I loved Billy- he reminded me of one
          of my own children at that age and that's what Jane does so well.
          <br />
          <span className="highlight">
            JANE SHEMILT, Sunday Times best-seller
          </span>
        </div>

        <div className="col-8 col-sm-5 col-md-5 col-lg-4  mt-4 mt-md-5 ps-2  ps-sm-4 ps-lg-3 ">
          Another twisty treat from Jane Corry. I devoured{" "}
          <i>We All Have Our Secrets</i> in one sitting. It's clever and
          addictive and Jane is so very good at creating characters who get
          right under your skin. I love everything she writes.
          <br />
          <span className="highlight">
            TERESA DRISCOLL, <br />
            million selling author of <i>I Am Watching You</i>
          </span>
        </div>
        <div className="col-4 col-sm-3 col-md-3 col-lg-2 mt-3 mt-sm-5 mt-md-5 px-sm-4 px-lg-2">
          Full of intrigue and twists galore, <i>We All Have Our Secrets</i>{" "}
          kept me captivated until the early hours.
          <br />
          <span className="highlight">
            BA PARIS,
            <br /> international best-seller
          </span>
        </div>

        <div className="col-6 col-sm-4 col-md-3 mt-3 mt-sm-5 ps-lg-3 pe-3">
          <i>We All Have Our Secrets </i> is a twisty, pacy thriller asking
          questions about who we really are, what's important to us and whether
          we really know the people close to us.
          <br />
          <span className="highlight">
            GILLY MACMILLAN, <br />
            international best-seller
          </span>
        </div>
        <div className="col-6 col-sm-5 col-md-4 col-lg-3 mt-4 mt-sm-5 pe-sm-4">
          This is a book that sneaks up on you. A complex and suspenseful story
          about family secrets and relationship driven, beautifully plotted and
          filled with shocking twists.
          <br />
          <span className="highlight">
            SAMANTHA DOWNING , Sunday Times bestselling author of My Lovely Wife
          </span>
        </div>

        <div className="col-12 col-md-5 col-lg-6 mt-4 mt-md-5 mt-lg-4 p-lg-5">
          <i>We All Have Our Secrets</i> Our Secrets is a clever, tense and
          compelling thriller about fathers and daughters and the lies we tell
          to ourselves and others. I never knew which of the well-drawn
          characters to believe and I couldn't turn the pages fast enough to
          find out! An excellent read. <br />
          <span className="highlight">
            CLAIRE DOUGLAS, <br />
            best-selling author of<i> The Couple at No. 9</i>
          </span>
        </div>

        <div className="col-12 col-md-12 col-lg-6 mt-4 mt-md-5 mt-lg-4 mb-4 mb-lg-0 ps-sm-5">
          I loved the concept and I loved the tension throughout between Emily
          and Francoise. This was a gripping slice of domestic noir. There's
          plenty of twists to keep the reader hooked. Another winner from Jane.
          The pages keep turning in this suspenseful tale of secrets and lies
          and suspicion. Unmissable. Brava.
          <br /> <i>We All Have Our Secrets</i> is sure to be huge.
          <br />
          <span className="highlight">
            IMRAN MAHMOOD, award-winning author of several books including the
            major BBC drama <i> You Don't Know Me </i>
          </span>
        </div>
      </div>
      <p className="mt-2 mb-0">
        <button
          onClick={() => {
            navigate("./reviews");
          }}
          className="btnLightDark px-3 py-1 reviewLink"
        >
          find more reviews here
        </button>
      </p>
    </div>
  );
}

export default Currentbook;
