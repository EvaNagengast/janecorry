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
        duration={4000}
        transitionDuration={700}
   
      >
        <div className="each-slide-effect" defaultIndex={1}>
          <img src={book7} className="book" />
        </div>
        <div className="each-slide-effect">
          <img src={book6} className="book" />
        </div>
        <div className="each-slide-effect">
          <img src={book5} className="book" />
        </div>
        <div className="each-slide-effect">
          <img src={book4} className="book" />
        </div>
        <div className="each-slide-effect">
          <img src={book3} className="book" />
        </div>
        <div className="each-slide-effect">
          <img src={book2} className="book" />
        </div>
        <div className="each-slide-effect">
          <img src={book1} className="book" />
        </div>
        <div className="each-slide-effect">
          <img src={book0} className="book" />
        </div>
      </Slide>
    </div>
  );
}

export default Slideshow;
