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
                  speed: 150,
                  waitUntilVisible: true,
                  loop: true,
                }}
                getBeforeInit={(instance) => {
                  instance
                    .type("Once upon a time")
                    .pause(1000)
                    .empty(10)
                    .pause(1000)
                    .type("There was no possibility of taking a walk that day")
                    .pause(1000)
                    .empty(10)
                    .pause(1000)
                    .type("All this happened, more or less")
                    .pause(1000)
                    .empty(10)
                    .pause(1000)

                    .type("Call me Ishmael")
                    .pause(1000)
                    .empty(10)
                    .pause(1000)

                    .type("It was the best of times, it was the worst of times")
                    .pause(1000)
                    .empty(10)
                    .pause(1000)
                    .type("All children except one grow up")
                    .pause(1000)
                    .empty(10)
                    .pause(1000)
                    .type(
                      "The drought had lasted now for ten million years, and the reign of the terrible lizards had long since ended"
                    )
                    .pause(1000)
                    .empty(10)
                    .pause(1000)

                    .type(
                      "It was a bright cold day in April, and the clocks were striking thirteen"
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
            <ul>
              <li> Moving house</li>
              <li>Getting married</li>
              <li>Going on holiday</li>
              <li> Starting a new job</li>
              <li> Getting stuck in a lift</li>
              <li>Losing something important</li>
            </ul>
            Now ask yourself the question
            <i className="px-2">What if? </i> What if something different had
            happened during one of these experiences. For example, what if you
            went on holiday and ended up in a different destination from the one
            you thought you were going to? What if you were sacked on your first
            day of a new job? Could that lead to a different career?
            <i className="px-2">What if</i> is a great way to get the
            imagination working!
            <p className="m-5">
              <i>
                Try out this exercise yourself. You could be surprised at the
                ideas you come up with.
              </i>
            </p>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WritingTips;
