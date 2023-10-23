import React from "react";
import Footer from "./Footer";
import { MdOutlineStar } from "react-icons/md";
import book8 from "../media/book8.jpg";
import book7 from "../media/book7.png";
import book6 from "../media/book6.png";
import book5 from "../media/book5.png";
import book4 from "../media/book4.png";
import book3 from "../media/book3.png";
import book2 from "../media/book2.png";
import book1 from "../media/book1.png";
import book0 from "../media/book0.png";

import "./Books.css";

function Books() {
  return (
    <div className="Books">
      <div className="bookpage">
        <h1 className="m-xl-3 text-center">Books</h1>
        <div className="row g-5 m-auto justify-content-center">
          <div className="col-6">
            <img
              src={book8}
              alt="Coming to find you Book cover"
              className="m-2 mx-auto d-block d-lg-none displaybookimage"
            />
            <div className="p-3 displaybackground displaybackgoundCTFY">
              <img
                src={book8}
                alt="Coming to find you Book cover"
                className="m-2 float-start d-none d-lg-block  displaybookimage"
              />
              <h2>Coming to find you </h2>
              <p className="displaybooktext">
                <p>
                  When her family tragedy is splashed across the newspapers,
                  Nancy decides to disappear. Her grandmother's beautiful
                  Regency house in a quiet seaside village seems like the safest
                  place to hide. But the old house has its own secrets and a
                  chilling wartime legacy . . .
                </p>
                <p>
                  Now someone knows the truth about the night Nancy's mother and
                  stepfather were murdered. Someone knows where to find her. And
                  they have nothing to lose . . .
                </p>
                <p>
                  So what really happened that night? And how far will she go to
                  keep it hidden?
                </p>
                <div className="stars">
                  <MdOutlineStar /> <MdOutlineStar /> <MdOutlineStar />
                  <MdOutlineStar /> <MdOutlineStar />
                </div>
                <p>
                  <i>
                    Deftly peeling back layers of family secrets, Coming to Find
                    You is a compelling read
                  </i>
                  - Shari Lapena, author of Not a Happy Family
                </p>
                <p>
                  <i>A must-read thriller</i> - B.A. Paris, author of Behind
                  Closed Doors
                </p>
                <p>
                  <i>
                    Yet another twisty, exciting book that I couldn't put down
                  </i>
                  - Heidi Perks, author of The Whispers
                </p>
                <p>
                  <i>Combines the heart-warming with the thrilling</i> - Emma
                  Curtis, author of Invite Me In
                </p>

                <p className="m-3 text-center newbooklinks">
                  <a
                    href="https://www.amazon.co.uk/Coming-Find-You-heart-wrenching-suspenseful/dp/0241996104"
                    alt="buy Coming to find you on amazon"
                    rel="noreferrer"
                    target="_blank"
                    className="btnNoneLight  px-3 mx-2 mx-lg-3"
                  >
                    Amazon
                  </a>
                  <a
                    href="https://www.penguin.co.uk/books/451069/coming-to-find-you-by-corry-jane/9780241996102"
                    alt="buy Coming to find you on Penguin"
                    rel="noreferrer"
                    target="_blank"
                    className="btnNoneLight px-3 mx-2 mx-lg-3"
                  >
                    Penguin
                  </a>
                  <a
                    href="  https://www.goodreads.com/book/show/64645772-coming-to-find-you"
                    alt="learn about Coming to find you on Goodreads"
                    rel="noreferrer"
                    target="_blank"
                    className="btnNoneLight px-3 mx-2 mx-lg-3"
                  >
                    Goodreads
                  </a>
                </p>
              </p>
            </div>
          </div>
          <div className="col-6 ">
            <img
              src={book7}
              alt="We all have our Secrets Book cover"
              className="m-2 mx-auto d-block d-lg-none displaybookimage"
            />

            <div className="p-3 displaybackground displaybackgoundWAHOS">
              <img
                src={book7}
                alt="We all have our Secrets Book cover"
                className="m-2 float-start d-none d-lg-block img-fluid displaybookimage"
              />
              <h2>We all have our Secrets</h2>
              <p className="displaybooktext">
                <p>You know she's lying... But so are you.</p>
                <p>
                  Emily made one bad decision, and now her career could be over.
                  Her family home on the Cornish coast is the only place where
                  she feels safe. But when she arrives, there's a stranger
                  living with her father.
                </p>
                <p>
                  Emily doesn't trust the beautiful young woman, convinced that
                  she's telling one lie after another. Soon, Emily becomes
                  obsessed with finding out the truth...
                </p>
                <p> But should some secrets stay buried forever?</p>
                <div className="stars">
                  <MdOutlineStar /> <MdOutlineStar /> <MdOutlineStar />
                  <MdOutlineStar /> <MdOutlineStar />
                </div>
                <p>
                  <i>I devoured We All Have Our Secrets in one sitting</i> -
                  Teresa Driscoll, I Am Watching You
                </p>
                <p>
                  <i>An unputdownable read</i> - Emma Curtis, Invite Me In
                </p>
                <p>
                  <i>
                    An utterly compelling story of female competition, with
                    wonderfully drawn characters and plenty of twists
                  </i>
                  - Heidi Perks, The Whispers
                </p>
                <p>
                  <i>
                    Jane Corry writes consistently enthralling stories about the
                    dark side of family life
                  </i>
                  - Peter James, Picture You Dead
                </p>
                <p className="m-3 text-center newbooklinks">
                  <a
                    href="https://www.amazon.co.uk/We-All-Have-Our-Secrets-ebook/dp/B09H2Q5SHD"
                    alt="buy We all have our secrets on amazon"
                    rel="noreferrer"
                    target="_blank"
                    className="btnNoneLight px-3 mx-2 mx-lg-3"
                  >
                    Amazon
                  </a>
                  <a
                    href="https://www.penguin.co.uk/books/317041/we-all-have-our-secrets-by-corry-jane/9780241989029"
                    alt="buy We all have our secrets on penguin"
                    rel="noreferrer"
                    target="_blank"
                    className="btnNoneLight px-3 mx-2 mx-lg-3"
                  >
                    Penguin
                  </a>
                  <a
                    href="https://www.goodreads.com/book/show/59063637-we-all-have-our-secrets"
                    alt="learn about  We all have our secrets on Goodreads"
                    rel="noreferrer"
                    target="_blank"
                    className="btnNoneLight px-3 mx-2 mx-lg-3"
                  >
                    Goodreads
                  </a>
                </p>
              </p>
            </div>
          </div>
        </div>

        {/* 
 
 
 
 
 old books
 
 
 
 */}
        <div className="row g-5 m-auto mb-5 pb-5 justify-content-center">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3  p-1 p-xl-3">
            <div className="p-2 oldbackground oldbackgound6">
              <img
                src={book6}
                alt="The lies we tell Book cover"
                className="m-2 float-start oldbookimage"
              />
              <h3>The Lies We Tell</h3>
              <p className="oldbooktext">
                <p> Save your son, or save yourself?</p>
                <p>
                  Sarah always thought of herself and her husband, Tom, as good
                  people. But that was before their son Freddy came home saying
                  he'd done something terrible. Begging them not to tell the
                  police. Soon Sarah and Tom must find out just how far they are
                  willing to push themselves, and their marriage, to protect
                  their only child.
                </p>
                As the lies build up and Sarah is presented with the perfect
                opportunity to get Freddy off the hook, she is faced with a
                terrifying decision.
              </p>
            </div>
            <p className="m-2  text-center oldbooklinks">
              <a
                href="https://www.amazon.co.uk/Lies-We-Tell-Jane-Corry/dp/0241989000"
                alt="buy The lies we tellon amazon"
                rel="noreferrer"
                target="_blank"
                className="btnDarkLight px-2 mx-1 mx-xxl-2"
              >
                Amazon
              </a>
              <a
                href="https://www.penguin.co.uk/books/317040/the-lies-we-tell-by-corry-jane/9780241989005"
                alt="buy The lies we tell on Penguin"
                rel="noreferrer"
                target="_blank"
                className="btnDarkLight px-2 mx-1 mx-xxl-2"
              >
                Penguin
              </a>
              <a
                href="https://www.goodreads.com/book/show/54139124-the-lies-we-tell"
                alt="learn about The lies we tell on Goodreads"
                rel="noreferrer"
                target="_blank"
                className="btnDarkLight px-2 mx-1 mx-xxl-2"
              >
                Goodreads
              </a>
            </p>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-1 p-xl-3">
            <div className="p-2 oldbackground oldbackgound5">
              <img
                src={book5}
                alt="I made a mistake Book cover"
                className=" float-start m-2 img-fluid oldbookimage"
              />
              <h3>I Made a Mistake</h3>
              <p className="oldbooktext">
                <p>It started wirh a kiss and ended with murder. . .</p>
                <p>
                  In Poppy Page's mind, there are two types of women in this
                  world: those who are faithful to their husbands, and those who
                  are not. Until now, Poppy has never questioned which she was.
                  But when handsome, charming Matthew Gordon walks back into her
                  life after almost two decades, that changes.
                </p>
                <p>
                  Poppy makes a single mistake - and that mistake will be far
                  more dangerous than she could imagine. Someone is going to pay
                  for it with their life.
                </p>
              </p>
            </div>
            <p className="m-2  text-center oldbooklinks">
              <a
                href="https://www.amazon.co.uk/I-Made-Mistake-Jane-Corry/dp/0241984653"
                alt="buy I Made a Mistake on amazon"
                rel="noreferrer"
                target="_blank"
                className="btnDarkLight px-2 mx-1 mx-xxl-2"
              >
                Amazon
              </a>
              <a
                href="https://www.penguin.co.uk/books/309670/i-made-a-mistake-by-corry-jane/9780241984659"
                alt="buy I Made a Mistake on penguin"
                rel="noreferrer"
                target="_blank"
                className="btnDarkLight px-2 mx-1 mx-xxl-2"
              >
                Penguin
              </a>
              <a
                href="https://www.goodreads.com/book/show/52706064-i-made-a-mistake"
                alt="learn about I Made a Mistake on Goodreads"
                rel="noreferrer"
                target="_blank"
                className="btnDarkLight px-2 mx-1 mx-xxl-2"
              >
                Goodreads
              </a>
            </p>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-1 p-xl-3">
            <div className="p-2 oldbackground oldbackgound4">
              <img
                src={book4}
                alt="I Looked Away Book cover"
                className=" float-start m-2 img-fluid oldbookimage"
              />
              <h3>I Looked Away</h3>
              <p className="oldbooktext">
                <p>
                  Every Monday, 49-year-old Ellie looks after her grandson Josh.
                  She loves him more than anyone else in the world.
                </p>
                <p>
                  The only thing that can mar her happiness is her husband's
                  affair. But he swears it's over now, and Ellie has decided to
                  be thankful for what she's got. Then one day, while she's
                  looking after Josh, her husband gets a call from that woman.
                </p>
                <p>
                  And just for a moment, Ellie takes her eyes off her grandson.
                  What happens next will change her life forever. .
                </p>
              </p>
            </div>
            <p className="m-2  text-center oldbooklinks">
              <a
                href="https://www.amazon.co.uk/Looked-Away-page-turning-Sunday-bestseller/dp/0241984637"
                alt="buy I Looked Away on amazon"
                rel="noreferrer"
                target="_blank"
                className="btnDarkLight px-2 mx-1 mx-xxl-2"
              >
                Amazon
              </a>
              <a
                href="https://www.penguin.co.uk/books/309669/i-looked-away-by-corry-jane/9780241984635"
                alt="buy I Looked Away on penguin"
                rel="noreferrer"
                target="_blank"
                className="btnDarkLight px-2 mx-1 mx-xxl-2"
              >
                Penguin
              </a>
              <a
                href="https://www.goodreads.com/book/show/40667415-i-looked-away"
                alt="learn aboutI Looked Away on Goodreads"
                rel="noreferrer"
                target="_blank"
                className="btnDarkLight px-2 mx-1 mx-xxl-2"
              >
                Goodreads
              </a>
            </p>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-1 p-xl-3">
            <div className="p-2 oldbackground oldbackgound3">
              <img
                src={book3}
                alt="The Dead Ex Book cover"
                className=" float-start m-2 img-fluid oldbookimage"
              />
              <h3>The Dead Ex </h3>
              <p className="oldbooktext">
                <p>
                  {" "}
                  Vicki's husband David once promised to love her in sickness
                  and in health. But after a brutal attack left her suffering
                  with epilepsy, he ran away with his mistress.{" "}
                </p>
                <p>
                  {" "}
                  So when Vicki gets a call one day to say that he's missing,
                  her first thought is 'good riddance'. But then the police find
                  evidence suggesting that David is dead. And they think Vicki
                  had something to do with it.
                </p>
                <p>
                  {" "}
                  What really happened on the night of David's disappearance?
                  And how can Vicki prove her innocence, when she's not even
                  sure of it herself?
                </p>
              </p>
            </div>
            <p className="m-2  text-center oldbooklinks">
              <a
                href="https://www.amazon.co.uk/Dead-Ex-unputdownable-bestselling-thriller/dp/0241981743"
                alt="buy The Dead Ex on amazon"
                rel="noreferrer"
                target="_blank"
                className="btnDarkLight px-2 mx-1 mx-xxl-2"
              >
                Amazon
              </a>
              <a
                href="https://www.penguin.co.uk/books/305994/the-dead-ex-by-corry-jane/9780241981740"
                alt="buy The Dead Ex on penguin"
                rel="noreferrer"
                target="_blank"
                className="btnDarkLight px-2 mx-1 mx-xxl-2"
              >
                Penguin
              </a>
              <a
                href="https://www.goodreads.com/book/show/40391960-the-dead-ex"
                alt="learn about The Dead Ex on Goodreads"
                rel="noreferrer"
                target="_blank"
                className="btnDarkLight px-2 mx-1 mx-xxl-2"
              >
                Goodreads
              </a>
            </p>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-1 p-xl-3">
            <div className="p-2 oldbackground oldbackgound2">
              <img
                src={book2}
                alt="The Killing Type cover"
                className=" float-start m-2 img-fluid oldbookimage"
              />
              <h3>The Killing Type</h3>
              <p className="oldbooktext">
                <p>
                  {" "}
                  Susie and her sister have never been close. These days they
                  barely speak. So when Danielle messages her out of the blue
                  and begs to meet, Susie knows something must be wrong.{" "}
                </p>
                <p>
                  But what Danielle tells her seems crazy. Her husband, Simon,
                  may be a bully, but surely he wouldn't hurt her? Then the
                  accident happens. And Susie is forced to rethink everything.{" "}
                </p>
                <p>
                  {" "}
                  Who is lying? Who is telling the truth? And who, really, is
                  the killing type?
                </p>
              </p>
            </div>
            <p className="m-2  text-center oldbooklinks">
              <a
                href="https://www.amazon.co.uk/Killing-Type-bestselling-author-Husbands-ebook/dp/B079XX8CRR"
                alt="buy The Killing Type on amazon"
                rel="noreferrer"
                target="_blank"
                className="btnDarkLight px-2 mx-1 mx-xxl-2"
              >
                Amazon
              </a>
              <a
                href="https://www.penguin.co.uk/books/309860/the-killing-type-by-corry-jane/9780241984581"
                alt="buy The Killing Type on penguin"
                rel="noreferrer"
                target="_blank"
                className="btnDarkLight px-2 mx-1 mx-xxl-2"
              >
                Penguin
              </a>
              <a
                href="https://www.goodreads.com/book/show/38719858-the-killing-type"
                alt="learn about The Killing Type on Goodreads"
                rel="noreferrer"
                target="_blank"
                className="btnDarkLight px-2 mx-1 mx-xxl-2"
              >
                Goodreads
              </a>
            </p>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-1 p-xl-3">
            <div className="p-2 oldbackground oldbackgound1">
              <img
                src={book1}
                alt="The Blood Sisters cover"
                className=" float-start m-2 img-fluid oldbookimage"
              />
              <h3>Blood Sisters</h3>
              <p className="oldbooktext">
                <p>
                  Kitty lives in a care home. She can't speak properly, and she
                  has no memory of the accident that put her here. At least
                  that's the story she's sticking to.
                </p>
                <p>
                  {" "}
                  Art teacher Alison looks fine on the surface. But the surface
                  is a lie. When a job in a prison comes up she decides to take
                  it - this is her chance to finally make things right.
                </p>
                <p>
                  {" "}
                  But someone is watching Kitty and Alison. Someone who wants
                  revenge for what happened that sunny morning in May. And only
                  another life will do . . .
                </p>
              </p>
            </div>
            <p className="m-2  text-center oldbooklinks">
              <a
                href="https://www.amazon.co.uk/Blood-Sisters-Jane-Corry/dp/0525522182"
                alt="buy Blood Sisters on amazon"
                rel="noreferrer"
                target="_blank"
                className="btnDarkLight px-2 mx-1 mx-xxl-2"
              >
                Amazon
              </a>
              <a
                href="https://www.penguin.co.uk/books/294513/blood-sisters-by-corry-jane/9780241976722"
                alt="buy Blood Sisters on penguin"
                rel="noreferrer"
                target="_blank"
                className="btnDarkLight px-2 mx-1 mx-xxl-2"
              >
                Penguin
              </a>
              <a
                href="https://www.goodreads.com/book/show/35580277-blood-sisters"
                alt="learn about Blood Sisters on Goodreads"
                rel="noreferrer"
                target="_blank"
                className="btnDarkLight px-2 mx-1 mx-xxl-2"
              >
                Goodreads
              </a>
            </p>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-1 p-xl-3">
            <div className="p-2 oldbackground oldbackgound0">
              <img
                src={book0}
                alt="My Husbands Wife cover"
                className=" float-start m-2 img-fluid oldbookimage"
              />
              <h3>My Husbands Wife</h3>
              <p className="oldbooktext">
                <p> What if your life was built on a lie? </p>
                <p>
                  {" "}
                  When lawyer Lily marries Ed, she's determined to make a fresh
                  start. To leave the secrets of the past behind.
                </p>
                <p>
                  {" "}
                  But when she takes on her first criminal case, she starts to
                  find herself strangely drawn to her client. A man who's
                  accused of murder. A man she will soon be willing to risk
                  everything for. But is he really innocent? And who is she to
                  judge?
                </p>

                <p>
                  First comes love, then comes marriage, then comes murder . . .
                </p>
              </p>
            </div>
            <p className="m-2  text-center oldbooklinks">
              <a
                href="https://www.amazon.co.uk/My-Husbands-Wife-Jane-Corry/dp/0241256488"
                alt="buy My Husbands Wife  on amazon"
                rel="noreferrer"
                target="_blank"
                className="btnDarkLight px-2 mx-1 mx-xxl-2"
              >
                Amazon
              </a>
              <a
                href="https://www.penguin.co.uk/books/294457/my-husbands-wife-by-corry-jane/9780241256480"
                alt="buy My Husbands Wife on penguin"
                rel="noreferrer"
                target="_blank"
                className="btnDarkLight px-2 mx-1 mx-xxl-2"
              >
                Penguin
              </a>
              <a
                href="https://www.goodreads.com/book/show/31227076-my-husband-s-wife"
                alt="learn about My Husbands Wife  on Goodreads"
                rel="noreferrer"
                target="_blank"
                className="btnDarkLight px-2 mx-1 mx-xxl-2"
              >
                Goodreads
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Books;
