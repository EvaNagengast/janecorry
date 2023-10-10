import React from "react";
import { useNavigate } from "react-router-dom";
import Newspaperprompt from "./Newspaperprompt";
import Newspaper from "../../media/ctfynewspaper.jpg";
import Fullimage from "../../media/jcfullbody.jpg";
import Halfimage from "../../media/jctopbody.jpg";
import Subtitle from "../../media/jcfontsubtitle.png";

import "./Currentbook.css";

function Currentbook() {
  let navigate = useNavigate();
  return (
    <div className="currentbooksection"><img src={Subtitle} alt="subtitle" className="subtitle d-block"></img>
      <h1>COMING TO <br/>FIND YOU</h1>
      
      <p>
        My new 2023 Penguin suspense is set in the Second World War and the
        present day. When Nancy's stepbrother is sent to prison for killing her
        mother and his father, Nancy seeks refuge from the press at the family
        seaside holiday home in Devon. But Tall Chimneys was once owned by
        Elizabeth who took in evacuees during the Second World War and was also
        a member of Churchill's Secret Army. Elizabeth commited a teribble
        crime. Can Nancy discover what it was - and finally find peace for
        herself?
        <img src={Fullimage} alt="Jane Corry holding her recent novel" />
      </p>
      <a
        href="https://www.amazon.co.uk/Coming-Find-You-heart-wrenching-suspenseful/dp/0241996104/"
        alt="shop coming to find you on amazon"
      >
        click here to order
      </a>
      Also available in bookshops and supermarkets nationwide.
      <p>
        {" "}
        ‘What a lovely book. Parts are set in WWII & parts in the current day.
        The mix is faultless. Fabulous story line that really draws you in.
        Brilliant characters’
      </p>
      <Newspaperprompt />
      <p>
        Absolutely thrilled that Coming To Find You is in the{" "}
        <a
          href="https://www.womanandhome.com/"
          alt="Woman and Home online magazine"
        >
          July issue of Woman & Home!
        </a>
        <img src={Newspaper} alt="newspaper review of Coming To Find You" />
      </p>
      <p>
        Meanwhile, you can buy my 2022 Penguin novel WE ALL HAVE OUR SECRETS and
        all of my other books at booksellers or online.
        <a
          href="https://www.amazon.co.uk/stores/Jane-Corry/author/B01BTZ839E?ref=ap_rdr&store_ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true"
          alt="amazon sellers page"
        >
          Just click here to find my books
        </a>
      </p>
      <div className="row">
        <div className="col-6">
          Psychological Thriller Of The Year!
          <br />
          <span className="quotesource">The Independent</span>
        </div>
        <div className="col-6">
          Jane Corry writes consistently enthralling stories about the dark side
          of family life.
          <br />{" "}
          <span className="quotesource">
            PETER JAMES, international best-seller
          </span>
        </div>{" "}
        <div className="col-3">
          "Full of intrigue and twists galore, WE ALL HAVE OUR SECRETS kept me
          captivated until the early hours.”
          <span className="quotesource">
            BA PARIS, international best-seller
          </span>
        </div>
        <div className="col-3">
          The characters were beautifully complex and the small community
          setting realistically portrayed. I loved Billy- he reminded me of one
          of my own children at that age and that's what Jane does so well.
          <span className="quotesource">
            {" "}
            JANE SHEMILT, Sunday Times best-seller
          </span>
        </div>
        <div className="col-3">
          'We All Have Our Secrets is a twisty, pacy thriller asking questions
          about who we really are, what's important to us and whether we really
          know the people close to us.'
          <span className="quotesource">
            GILLY MACMILLAN, international best-seller{" "}
          </span>
        </div>
        <div className="col-3">
          'Another twisty treat from Jane Corry. I devoured We All Have Our
          Secrets in one sitting. It's clever and addictive and Jane is so very
          good at creating characters who get right under your skin. I love
          everything she writes.'
          <span className="quotesource">
            TERESA DRISCOLL - million selling author of ‘I Am Watching You’
          </span>
        </div>
        <div className="col-4">
          I loved the concept and I loved the tension throughout between Emily
          and Francoise. This was a gripping slice of domestic noir. There's
          plenty of twists to keep the reader hooked. Another winner from Jane.
          The pages keep turning in this suspenseful tale of secrets and lies
          and suspicion. Unmissable. Brava. WE ALL HAVE OUR SECRETS is sure to
          be huge.
          <span className="quotesource">
            IMRAN MAHMOOD, award-winning author of several books including You
            Don't Know Me, a major BBC drama
          </span>
        </div>
        <div className="col-4">
          “We All Have Our Secrets is a clever, tense and compelling thriller
          about fathers and daughters and the lies we tell to ourselves and
          others. I never knew which of the well-drawn characters to believe and
          I couldn’t turn the pages fast enough to find out! An excellent read."
          <span className="quotesource">
            {" "}
            CLAIRE DOUGLAS, best-selling author of 'The Couple at No. 9'
          </span>
        </div>
        <div className="col-4">
          ‘Wonderfully paced and engaging with characters who kept me in
          heart-stopping suspense throughout. I’ve loved all Jane’s books. This,
          to me, is her very best.’ SANDRA HOWARD “This is a book that sneaks up
          on you. A complex and suspenseful story about family secrets and
          relationship driven, beautifully plotted and filled with shocking
          twists.”{" "}
          <span className="quotesource">
            SAMANTHA DOWNING , Sunday Times bestselling author of My Lovely Wife
          </span>
        </div>
      </div>
      <p>
        {" "}
        <a
          onClick={() => {
            navigate("./reviews");
          }}
        >
          find more reviews here
        </a>
      </p>
      <h2>Jane Corry</h2>
      <p>
        Jane Corry is a writer and journalist who has spent time working as the
        writer in residence of a high security prison for men - an experience
        that helped inspire her Sunday Times bestsellers. Jane runs regular
        writing workshops and speaks at literary festivals all over the world.
        Many of her ideas strike during morning dog-jogs along the beach
        followed by a dip in the sea.
        <a
          onClick={() => {
            navigate("./reviews");
          }}
        >
          Find out more about Jane
        </a>
        <img
          src={Halfimage}
          alt="Jane Corry Profile holiding her newest Book"
        />
      </p>
    </div>
  );
}

export default Currentbook;
