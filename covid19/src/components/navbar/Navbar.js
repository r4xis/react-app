import React from "react";
import image from "../../covid-logo.png";

const Navbar = () => {
  return (
    <div id="Navbar">
      <div className="items">
        <img src={image} alt="covid-19" />
        <ul>
          <li>
            <a className="home" href="/">
              Home
            </a>
          </li>
          <li>
            <a
              className="github"
              href="https://github.com/r4xis"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
