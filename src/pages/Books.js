import React from "react";
import Footer from "./Footer";
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
        <h1 className="m-3">Books</h1>
        <div className="row g-5 m-auto justify-content-center">
          <div className="col-6  p-3">
            <div className="currentbook">
              <img
                src={book8}
                alt="Coming to find you Book cover"
                className=" float-start m-2 currentbookimage"
              />
              <h2>Coming to find you </h2>
              <p className="lastbooktext">
                When her family tragedy is splashed across the newspapers, Nancy
                decides to disappear. Her grandmother's beautiful Regency house
                in a quiet seaside village seems like the safest place to hide.
                But the old house has its own secrets and a chilling wartime
                legacy . . . <br /> <br /> Now someone knows the truth about the
                night Nancy's mother and stepfather were murdered. Someone knows
                where to find her. And they have nothing to lose . . .<br />{" "}
                <br /> So what really happened that night? And how far will she
                go to keep it hidden?
                <br />
                <br />
                'Deftly peeling back layers of family secrets, Coming to Find
                You is a compelling read' Shari Lapena, author of Not a Happy
                Family 'A must-read thriller' B.A. Paris, author of Behind
                Closed Doors 'Yet another twisty, exciting book that I couldn't
                put down' Heidi Perks, author of The Whispers 'Combines the
                heart-warming with the thrilling' Emma Curtis, author of Invite
                Me In
                <a
                  href="https://www.amazon.co.uk/Coming-Find-You-heart-wrenching-suspenseful/dp/0241996104"
                  alt="buy Coming to find you on amazon"
                  rel="noreferrer"
                  target="_blank"
                >
                  Amazon
                </a>
                <a
                  href="https://www.penguin.co.uk/books/451069/coming-to-find-you-by-corry-jane/9780241996102"
                  alt="buy Coming to find you on Penguin"
                  rel="noreferrer"
                  target="_blank"
                >
                  Penguin
                </a>
                <a
                  href="  https://www.goodreads.com/book/show/64645772-coming-to-find-you"
                  alt="learn about Coming to find you on Goodreads"
                  rel="noreferrer"
                  target="_blank"
                >
                  Goodreads
                </a>
              </p>
            </div>
          </div>
          <div className="col-6  p-3">
            <div className="lastbook">
              <img
                src={book7}
                alt="We all have our Secrets Book cover"
                className=" float-start m-2 img-fluid lastbookimage"
              />{" "}
              <h2>We all have our Secrets</h2>
              <p className="lastbooktext">
                Emily made one bad decision, and now her career could be over.
                Her family home on the Cornish coast is the only place where she
                feels safe. But when she arrives, there's a stranger living with
                her father. Emily doesn't trust the beautiful young woman,
                convinced that she's telling one lie after another. Soon, Emily
                becomes obsessed with finding out the truth... <br /> <br />
                But should some secrets stay buried forever?
                <br /> <br /> <br />
                'I devoured We All Have Our Secrets in one sitting' Teresa
                Driscoll, I Am Watching You <br />
                <br />
                'Full of intrigue and twists galore' BA Paris, The Therapist{" "}
                <br /> <br />
                'An unputdownable read' Emma Curtis, Invite Me in 'An utterly
                compelling story of female competition, with wonderfully drawn
                characters and plenty of twists' Heidi Perks, The Whispers 'Jane
                Corry writes consistently enthralling stories about the dark
                side of family life' Peter James, Picture You Dead
                <a
                  href="https://www.amazon.co.uk/We-All-Have-Our-Secrets-ebook/dp/B09H2Q5SHD/?_encoding=UTF8&pd_rd_w=AOAAU&content-id=amzn1.sym.3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_p=3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_r=257-6964746-9685606&pd_rd_wg=Abxx8&pd_rd_r=be567728-ce45-4347-8c12-9d9164d6d937&ref_=aufs_ap_sc_dsk"
                  alt="buy We all have our secrets on amazon"
                  rel="noreferrer"
                  target="_blank"
                >
                  Amazon
                </a>
                <a
                  href="https://www.penguin.co.uk/books/317041/we-all-have-our-secrets-by-corry-jane/9780241989029"
                  alt="buy We all have our secrets on penguin"
                  rel="noreferrer"
                  target="_blank"
                >
                  {" "}
                  Penguin
                </a>
                <a
                  href="https://www.goodreads.com/book/show/59063637-we-all-have-our-secrets"
                  alt="learn about  We all have our secrets on Goodreads"
                  rel="noreferrer"
                  target="_blank"
                >
                  Goodreads
                </a>
              </p>
            </div>
          </div>
        </div>
  
 {/* 
 
 
 
 
 
 
 
 
 */}
        <div className="row m-auto">
          <div className="col-3">
            <img
              src={book6}
              alt="The lies we tell Book cover"
              className="book"
            />
            <a
              href="https://www.amazon.co.uk/Lies-We-Tell-Jane-Corry-ebook/dp/B088YWF5BC/?_encoding=UTF8&pd_rd_w=AOAAU&content-id=amzn1.sym.3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_p=3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_r=257-6964746-9685606&pd_rd_wg=Abxx8&pd_rd_r=be567728-ce45-4347-8c12-9d9164d6d937&ref_=aufs_ap_sc_dsk"
              alt="buy The lies we tell  on amazon"
              rel="noreferrer"
              target="_blank"
            >
              Amazon
            </a>
          </div>
          <div className="col-3">
            {" "}
            <img
              src={book5}
              alt="I made a Mistake Book cover"
              className="book"
            />
            <a
              href="https://www.amazon.co.uk/I-Made-Mistake-Jane-Corry-ebook/dp/B07TMPXRT1/ref=sr_1_1?crid=1UX49VXT5EYJR&keywords=i+made+a+mistake+jane+corry&qid=1697125336&s=digital-text&sprefix=I+made+a+Mistake%2Cdigital-text%2C105&sr=1-1"
              alt="buy I made a Mistake  on amazon"
              rel="noreferrer"
              target="_blank"
            >
              Amazon
            </a>
          </div>
          <div className="col-3">
            <img src={book4} alt="I looked away Book cover" className="book" />
            <a
              href="https://www.amazon.co.uk/Looked-Away-page-turning-Sunday-bestseller-ebook/dp/B07DVQQ1F6/?_encoding=UTF8&pd_rd_w=AOAAU&content-id=amzn1.sym.3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_p=3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_r=257-6964746-9685606&pd_rd_wg=Abxx8&pd_rd_r=be567728-ce45-4347-8c12-9d9164d6d937&ref_=aufs_ap_sc_dsk"
              alt="buy I looked away  on amazon"
              rel="noreferrer"
              target="_blank"
            >
              amazon
            </a>
          </div>
          <div className="col-3">
            <a
              href="https://www.amazon.co.uk/Dead-Ex-unputdownable-bestselling-thriller-ebook/dp/B073H7PPYQ/?_encoding=UTF8&pd_rd_w=AOAAU&content-id=amzn1.sym.3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_p=3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_r=257-6964746-9685606&pd_rd_wg=Abxx8&pd_rd_r=be567728-ce45-4347-8c12-9d9164d6d937&ref_=aufs_ap_sc_dsk"
              alt="buy The dead ex  on amazon"
              rel="noreferrer"
              target="_blank"
            >
              Amazon
            </a>{" "}
            <img src={book3} alt="The dead ex Book cover" className="book" />
          </div>
          <div className="col-3">
            {" "}
            <img
              src={book2}
              alt="The killing type Book cover"
              className="book"
            />
            <a
              href="https://www.amazon.co.uk/Killing-Type-bestselling-author-Husbands-ebook/dp/B079XX8CRR/?_encoding=UTF8&pd_rd_w=AOAAU&content-id=amzn1.sym.3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_p=3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_r=257-6964746-9685606&pd_rd_wg=Abxx8&pd_rd_r=be567728-ce45-4347-8c12-9d9164d6d937&ref_=aufs_ap_sc_dsk"
              alt="buy The killing type  on amazon"
              rel="noreferrer"
              target="_blank"
            >
              Amazon
            </a>
          </div>
          <div className="col-3">
            {" "}
            <img src={book1} alt="Blood sisters Book cover" className="book" />
            <a
              href="https://www.amazon.co.uk/Blood-Sisters-bestselling-thriller-Husbands-ebook/dp/B01G3NW68G/?_encoding=UTF8&pd_rd_w=AOAAU&content-id=amzn1.sym.3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_p=3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_r=257-6964746-9685606&pd_rd_wg=Abxx8&pd_rd_r=be567728-ce45-4347-8c12-9d9164d6d937&ref_=aufs_ap_sc_dsk"
              alt="buy Blood sisters  on amazon"
              rel="noreferrer"
              target="_blank"
            >
              Amazon
            </a>
          </div>
          <div className="col-3">
            {" "}
            <img
              src={book0}
              alt="My husband's wife Book cover"
              className="book"
            />
            <a
              href="https://www.amazon.co.uk/My-Husbands-Wife-Bestselling-Thriller-ebook/dp/B018WWOEE0/?_encoding=UTF8&pd_rd_w=AOAAU&content-id=amzn1.sym.3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_p=3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_r=257-6964746-9685606&pd_rd_wg=Abxx8&pd_rd_r=be567728-ce45-4347-8c12-9d9164d6d937&ref_=aufs_ap_sc_dsk"
              alt="buy My husband's wife  on amazon"
              rel="noreferrer"
              target="_blank"
            >
              Amazon
            </a>
          </div>
        </div>
      </div>
      ;
      <Footer />{" "}
    </div>
  );
}

export default Books;
