import React from "react";
import TypeIt from "typeit-react";
import Footer from "./Footer";
import "./WritingTips.css";
function WritingTips() {
  return (
    <div className="WritingTips">
      <div className="writingtipspage px-3">
        <h1>Writing Tips</h1>
        <div className="row m-auto mt-3 mt-sm-4">
          <div className="col-12 col-md-3 order-2 order-md-1">
            <div className="paper">
              {" "}
              <TypeIt
                options={{
                  speed: 100,
                  waitUntilVisible: true,
                  loop: true,
                }}
                getBeforeInit={(instance) => {
                  instance
                    .type(
                      "I unscrew the lid,  inhale the deep, heady smell - straight to the nostrils - and carefully measure out three drops into the glass measuring jug. Pure lavender. My favourite."
                    )

                    .pause(1000)
                    .empty(10)
                    .pause(1000)

                    .type(
                      "Careful. It's not the size that counts. It's the sharpness. And the angle. The blade must sing. Not scratch"
                    )
                    .pause(1000)
                    .empty(10)
                    .pause(1000)
                    .type("Flash of metal. Thunder in my ears.")
                    .pause(1000)
                    .empty(10)
                    .pause(1000)
                    .type(
                      "Sage, savin, rue, red thyme. People assume that aroma therapy oils are safe. But these little beauties can be highly toxic if used in the wrong way."
                    )
                    .pause(1000)
                    .empty(10)
                    .pause(1000)
                    .type(
                      "MIND THE GAP scream the yellow capital letters on the edge of the platform."
                    )
                    .pause(1000)
                    .empty(10)
                    .pause(1000)
                    .type(
                      "I shouldn't walk too fast. But if I go too slow, I will be a moving target."
                    )
                    .pause(1000)
                    .empty(10)
                    .pause(1000)

                    .type(
                      "The knife rack is on the side. I've always thought it was a dangerous thing to have in the house."
                    )
                    .pause(1000)
                    .empty(10)
                    .pause(1000)
                    .type(
                      "'Have you got somewhere safe to go?' asks the barrister after the verdict"
                    )
                    .pause(1000)
                    .empty(10)
                    .pause(1000)

                    .type(
                      "`Nervous?` Ed asks. He's pouring out his favourite breakfast cereal."
                    )
                    .pause(1000)
                    .empty(10)
                    .pause(1000)

                    .type(
                      "Black tights. That's what I need to buy on the way home."
                    )
                    .pause(1000)
                    .empty(10)
                    .pause(1000)
                    .type(
                      "Saturday, 17 August 2019. A date that will forever be engraved in my heart, although I don't know that at this precise minute in time."
                    )
                    .pause(1000)
                    .empty(10)
                    .pause(1000)

                    .type("It Was A Dark And Stormy Night");

                  return instance;
                }}
              />
            </div>
          </div>
          <div className="col-12 col-md-9 order-1 order-md-2">
            <p className="intro">
              {" "}
              People often ask me whether the plot should come first or the
              character. Personally, I think it is a mixture of both. But the
              glimmer of a plot always comes to me first of all. Then I will
              immediately start to
              <i> 'people' </i> it with at least two very different characters
              who will bring that plot to life. A convincing character will have
              personality traits and motives which then direct the way the story
              is going. For instance, in my new novel <i>Coming to find you</i>,
              Nancy keeps thinking about the past. What is she scared of? That
              is revealed at the end!
            </p>
          </div>
        </div>
        <div className="m-2 m-sm-3 m-md-5">
          <h2 className="mt-4  ">How to come up with an idea for a story</h2>
          <p className="text-start writingtext">
            Make a list of big things that have happened to you such as:
          </p>
          <ul className="text-start writingtext">
            <li> Moving house</li>
            <li>Getting married</li>
            <li>Going on holiday</li>
            <li> Starting a new job</li>
            <li> Getting stuck in a lift</li>
            <li>Losing something important</li>
          </ul>
          <p className="text-start writingtext">
            Now ask yourself the question
            <i className="px-2">What if? </i> What if something different had
            happened during one of these experiences. For example, what if you
            went on holiday and ended up in a different destination from the one
            you thought you were going to? What if you were sacked on your first
            day of a new job? Could that lead to a different career?
            <i className="px-2">What if</i> is a great way to get the
            imagination working!
          </p>{" "}
          <p className="text-start writingtext m-3 m-sm-5">
            <i>
              Try out this exercise yourself. You could be surprised at the
              ideas you come up with.
            </i>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WritingTips;
