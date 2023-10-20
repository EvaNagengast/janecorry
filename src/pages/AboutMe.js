import React from "react";
import Footer from "./Footer";
import jcfront from "../media/jcfront.png";

import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="Aboutme">
      <div className="aboutmepage">
        ABOUT ME Sunday Times best-selling author; Washington Post best-seller;
        sold over a million copies world-wide in over 20 countries including the
        States; features writer for numerous magazines including Woman and
        Woman’s Own; regular contributor to The Daily Telegraph; short story
        writer; columnist for My Weekly magazine; former creative writing tutor
        at Oxford University; former writer-in-residence at high security male
        prison; former Royal Literary Fund Fellow at Exeter University, past
        winner of the Elizabeth Goudge trophy for short stories and the Vera
        Brittain cup for short stories. (contact me link) <br />
        <br />
        <i>
          {" "}
          'Jane Corry writes consistently enthralling stories about the dark
          side of family life.’{" "}
        </i>
        Peter James
        <br />
        <img src={jcfront} alt="Jane Corry in a white blouse from the front"/>
        <br />
        HOW I STARTED <br />
        <br />I can’t remember NOT writing! In fact, it was all l could do!
        (Maths and science were not my thing!) I began with little stories and
        short poems. My first published piece was a letter in June &
        Schoolfriend (remember that?!). At 17, I was over the moon when I won a
        poetry competition in my then local paper The Harrow Observer. I read
        English at university and then got a job as a trainee magazine
        journalist for the Thomson Organisation which owned The Times. I went on
        to write for Drapers Record (a fashion trade magazine) ; Parents
        magazine (as features editor); and Woman’s Own where I interviewed
        celebrities like Julie Walters, Abba, Zandra Rhodes and people who
        weren’t famous but had extraordinary stories to tell. When my first
        child was born, I turned freelance and wrote for a variety of magazines
        and newspapers for twenty years. But all the time, I wanted to write a
        novel! Eventually I got published as a romance writer but my life
        changed when my first marriage ended. I took a job as a writer in
        residence of a high-security male prison for two days a week over three
        years. Until then, I’d led a fairly sheltered life. My experience opened
        my eyes and I saw, at first hand, how families can be destroyed (and
        also re-built) when someone commits a crime. An idea came into my head
        about a young fictional lawyer who returns from an unsatisfactory
        honeymoon and is sent by her boss into prison to defend a convicted
        criminal. And so MY HUSBAND’S WIFE was born. My agent sent it to Penguin
        and I received a two-book contract! To my delight, MY HUSBAND’S WIFE got
        into the top ten of The Sunday Times – as did my next five Penguin
        books. I still have to pinch myself! I am also a Washington Post
        best-seller. Meanwhile, I continue to write family pieces for The Daily
        Telegraph and a weekly digital column for My Weekly magazine as well as
        short stories for magazines. When I’m not writing, I love swimming in
        the sea throughout the year, playing tennis, looking after my family and
        walking. My ambition? To have enough courage to drive on a motorway! And
        to have one of my books made into a film or tv series. <br />
        <br />
        'Psychological thriller writing at its very best' <br />
        <br /> <br />
        <br /> SD Sykes, the Oswald de Lacy Books
      </div>
      <Footer />
    </div>
  );
}

export default AboutMe;
