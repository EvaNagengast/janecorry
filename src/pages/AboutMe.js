import React from "react";
import Footer from "./Footer";
import jcfront from "../media/jcfront.png";

import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="Aboutme">
      <div className="aboutmepage pb-5">
        <h1 className="text-center">About Me</h1>
        <img
          src={jcfront}
          alt="Jane Corry in a white blouse from the front"
          className="profile d-block d-md-none "
        />
        <div className="m-4">
          <img
            src={jcfront}
            alt="Jane Corry in a white blouse from the front"
            className="float-start img-fluid profile d-none d-md-block m-md-3 me-3 me-md-4 me-lg-5"
          />
          <p className="p-md-3 text-center text-md-start aboutmetext">
            Sunday Times best-selling author; Washington Post best-seller; sold
            over a million copies world-wide in over 20 countries including the
            States; features writer for numerous magazines including Woman and
            Woman's Own; regular contributor to The Daily Telegraph; short story
            writer; columnist for My Weekly magazine; former creative writing
            tutor at Oxford University; former writer-in-residence at high
            security male prison; former Royal Literary Fund Fellow at Exeter
            University, past winner of the Elizabeth Goudge trophy for short
            stories and the Vera Brittain cup for short stories.
          </p>
        </div>{" "}
        <p className="text-center px-2 highlight quote">
          <i>
            'Jane Corry writes consistently enthralling stories about the dark
            side of family life.'
          </i>
          <br />
          Peter James
        </p>
        <br />
        <br />
        <h2 className="text-center"> How I started</h2>
        <p className="mt-1 mt-sm-3 m-3 m-lg-5 px-3 px-sm-4 px-md-5 bio">
          I can't remember NOT writing! In fact, it was all l could do! (Maths
          and science were not my thing!) I began with little stories and short
          poems. My first published piece was a letter in{" "}
          <i>June & Schoolfriend</i> (remember that?!). At 17, I was over the
          moon when I won a poetry competition in my then local paper The Harrow
          Observer. <br />
          <br />I read English at university and then got a job as a trainee
          magazine journalist for the Thomson Organisation which owned{" "}
          <i>The Times</i>. I went on to write for <i> Drapers Record </i> (a
          fashion trade magazine) ; <i>Parents magazine</i> (as features
          editor); and <i>Woman's Own</i> where I interviewed celebrities like
          Julie Walters, Abba, Zandra Rhodes and people who weren't famous but
          had extraordinary stories to tell. <br />
          <br />
          When my first child was born, I turned freelance and wrote for a
          variety of magazines and newspapers for twenty years. But all the
          time, I wanted to write a novel! Eventually I got published as a
          romance writer but my life changed when my first marriage ended. I
          took a job as a writer in residence of a high-security male prison for
          two days a week over three years. Until then, I'd led a fairly
          sheltered life. My experience opened my eyes and I saw, at first hand,
          how families can be destroyed (and also re-built) when someone commits
          a crime. <br />
          <br />
          An idea came into my head about a young fictional lawyer who returns
          from an unsatisfactory honeymoon and is sent by her boss into prison
          to defend a convicted criminal. And so{" "}
          <u>
            <i>My Husband's Wife</i>
          </u>{" "}
          was born. My agent sent it to Penguin and I received a two-book
          contract! To my delight, <i>My Husband's Wife</i> got into the top ten
          of <i>The Sunday Times</i> - as did my next five Penguin books. I
          still have to pinch myself! <br />
          <br />I am also a <i>Washington Post</i> best-seller. Meanwhile, I
          continue to write family pieces for <i>The Daily Telegraph</i> and a
          weekly digital column for <i>My Weekly</i> magazine as well as short
          stories for magazines.
          <br />
          <br /> When I'm not writing, I love swimming in the sea throughout the
          year, playing tennis, looking after my family and walking. My
          ambition? To have enough courage to drive on a motorway! And to have
          one of my books made into a film or tv series.
        </p>{" "}
        <span className="text-center highlight quote">
          <i> 'Psychological thriller writing at its very best'</i>
          <br /> SD Sykes, the Oswald de Lacy Books
        </span>
      </div>
      <Footer />
    </div>
  );
}

export default AboutMe;
