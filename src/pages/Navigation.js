import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import Home from "./Home";
import AboutMe from "./AboutMe";
import Books from "./Books.js";
import Contact from "./Contact";
import Events from "./Events";
import News from "./News";
import Newsletter from "./Newsletter";
import Reviews from "./Reviews";
import WritingTips from "./WritingTips";
import Error from "./Error";
import "./Navigation.css";

export default function Navigation() {
  let routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/books" element={<Books />} />{" "}
      <Route path="/contact" element={<Contact />} />
      <Route path="/newsletter" element={<Newsletter />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/writingtips" element={<WritingTips />} />
      <Route path="/events" element={<Events />} />
      <Route path="/news" element={<News />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );

  return (
    <div className="Navigation">
      <Router>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <NavLink to="/" id="main" className="navbar-brand">
              LOGO
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/aboutme" className="nav-link">
                    ABOUT
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/books" className="nav-link">
                    BOOKS
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link">
                    CONTACT
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/writing tips"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    MORE
                  </a>

                  <ul className="dropdown-menu">
                    <li>
                      <NavLink to="/newsletter" className="dropdown-item">
                        NEWSLETTER
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/reviews" className="dropdown-item">
                        REVIEWS
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/writingtips" className="dropdown-item">
                        Writing Tips
                      </NavLink>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <NavLink to="/events" className="dropdown-item">
                        Events
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to="/news" className="dropdown-item">
                        News
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          {/* <NavLink to="/" id="main">
            LOGO
          </NavLink>
          <NavLink to="/" id="main">
            HOME
          </NavLink>
          <NavLink to="/aboutme">ABOUT</NavLink>
          <NavLink to="/books">BOOKS</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>{" "}
          <NavLink to="/newsletter">NEWSLETTER</NavLink>{" "}
          <NavLink to="/reviews">REVIEWS</NavLink>{" "}
          <NavLink to="/writingtips">Writing Tips</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/news">News</NavLink> */}
        </nav>
        {routes}
      </Router>
    </div>
  );
}
