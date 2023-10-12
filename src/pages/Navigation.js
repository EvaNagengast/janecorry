import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
//
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
import Logo from "../media/logosmalll.png";

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
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <NavLink to="/" className="navbar-brand">
              <img
                src={Logo}
                alt="Jane Correy Home"
                className="smalllogo"
              ></img>
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
              <span className="navbar-toggler-icon">
                <RxHamburgerMenu />
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/aboutme" className="nav-link">
                    About Me
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/books" className="nav-link">
                    Books
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    to="/more"
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    More
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink to="/newsletter" className="dropdown-item">
                        Newsletter
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/reviews" className="dropdown-item">
                        Reviews
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/writingtips" className="dropdown-item">
                        Writing Tips
                      </NavLink>
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
        </nav>
        {routes}
      </Router>
    </div>
  );
}
