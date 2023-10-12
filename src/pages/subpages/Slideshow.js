import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import book7 from "../../media/book7.png";
import book6 from "../../media/book6.png";
import book5 from "../../media/book5.png";
import book4 from "../../media/book4.png";
import book3 from "../../media/book3.png";
import book2 from "../../media/book2.png";
import book1 from "../../media/book1.png";
import book0 from "../../media/book0.png";
import "./Slideshow.css";
function Slideshow() {
  const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 100,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  return (
    <div className="Slideshow">
      <Slide
        slidesToScroll={2}
        slidesToShow={2}
        indicators={true}
        responsive={responsiveSettings}
        duration={3000}
        transitionDuration={700}
      >
        <div className="each-slide-effect" defaultIndex={1}>
          <a
            href="https://www.amazon.co.uk/We-All-Have-Our-Secrets-ebook/dp/B09H2Q5SHD/?_encoding=UTF8&pd_rd_w=AOAAU&content-id=amzn1.sym.3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_p=3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_r=257-6964746-9685606&pd_rd_wg=Abxx8&pd_rd_r=be567728-ce45-4347-8c12-9d9164d6d937&ref_=aufs_ap_sc_dsk"
            alt="buy We all have our secrets on amazon"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={book7}
              alt="We all have our Secrets Book cover"
              className="book"
            />
          </a>
        </div>
        <div className="each-slide-effect">
          <a
            href="https://www.amazon.co.uk/Lies-We-Tell-Jane-Corry-ebook/dp/B088YWF5BC/?_encoding=UTF8&pd_rd_w=AOAAU&content-id=amzn1.sym.3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_p=3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_r=257-6964746-9685606&pd_rd_wg=Abxx8&pd_rd_r=be567728-ce45-4347-8c12-9d9164d6d937&ref_=aufs_ap_sc_dsk"
            alt="buy The lies we tell  on amazon"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={book6}
              alt="The lies we tell Book cover"
              className="book"
            />
          </a>
        </div>
        <div className="each-slide-effect">
          {" "}
          <a
            href="https://www.amazon.co.uk/I-Made-Mistake-Jane-Corry-ebook/dp/B07TMPXRT1/ref=sr_1_1?crid=1UX49VXT5EYJR&keywords=i+made+a+mistake+jane+corry&qid=1697125336&s=digital-text&sprefix=I+made+a+Mistake%2Cdigital-text%2C105&sr=1-1"
            alt="buy I made a Mistake  on amazon"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            <img
              src={book5}
              alt="I made a Mistake Book cover"
              className="book"
            />
          </a>
        </div>
        <div className="each-slide-effect">
          {" "}
          <a
            href="https://www.amazon.co.uk/Looked-Away-page-turning-Sunday-bestseller-ebook/dp/B07DVQQ1F6/?_encoding=UTF8&pd_rd_w=AOAAU&content-id=amzn1.sym.3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_p=3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_r=257-6964746-9685606&pd_rd_wg=Abxx8&pd_rd_r=be567728-ce45-4347-8c12-9d9164d6d937&ref_=aufs_ap_sc_dsk"
            alt="buy I looked away  on amazon"
            rel="noreferrer"
            target="_blank"
          >
            <img src={book4} alt="I looked away Book cover" className="book" />
          </a>
        </div>
        <div className="each-slide-effect">
          {" "}
          <a
            href="https://www.amazon.co.uk/Dead-Ex-unputdownable-bestselling-thriller-ebook/dp/B073H7PPYQ/?_encoding=UTF8&pd_rd_w=AOAAU&content-id=amzn1.sym.3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_p=3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_r=257-6964746-9685606&pd_rd_wg=Abxx8&pd_rd_r=be567728-ce45-4347-8c12-9d9164d6d937&ref_=aufs_ap_sc_dsk"
            alt="buy The dead ex  on amazon"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            <img src={book3} alt="The dead ex Book cover" className="book" />
          </a>
        </div>
        <div className="each-slide-effect">
          {" "}
          <a
            href="https://www.amazon.co.uk/Killing-Type-bestselling-author-Husbands-ebook/dp/B079XX8CRR/?_encoding=UTF8&pd_rd_w=AOAAU&content-id=amzn1.sym.3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_p=3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_r=257-6964746-9685606&pd_rd_wg=Abxx8&pd_rd_r=be567728-ce45-4347-8c12-9d9164d6d937&ref_=aufs_ap_sc_dsk"
            alt="buy The killing type  on amazon"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={book2}
              alt="The killing type Book cover"
              className="book"
            />
          </a>
        </div>
        <div className="each-slide-effect">
          {" "}
          <a
            href="https://www.amazon.co.uk/Blood-Sisters-bestselling-thriller-Husbands-ebook/dp/B01G3NW68G/?_encoding=UTF8&pd_rd_w=AOAAU&content-id=amzn1.sym.3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_p=3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_r=257-6964746-9685606&pd_rd_wg=Abxx8&pd_rd_r=be567728-ce45-4347-8c12-9d9164d6d937&ref_=aufs_ap_sc_dsk"
            alt="buy Blood sisters  on amazon"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            <img src={book1} alt="Blood sisters Book cover" className="book" />
          </a>
        </div>
        <div className="each-slide-effect">
          {" "}
          <a
            href="https://www.amazon.co.uk/My-Husbands-Wife-Bestselling-Thriller-ebook/dp/B018WWOEE0/?_encoding=UTF8&pd_rd_w=AOAAU&content-id=amzn1.sym.3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_p=3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_r=257-6964746-9685606&pd_rd_wg=Abxx8&pd_rd_r=be567728-ce45-4347-8c12-9d9164d6d937&ref_=aufs_ap_sc_dsk"
            alt="buy My husband's wife  on amazon"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            <img
              src={book0}
              alt="My husband's wife Book cover"
              className="book"
            />
          </a>
        </div>
      </Slide>
    </div>
  );
}

export default Slideshow;
