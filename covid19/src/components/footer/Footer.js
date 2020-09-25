import React from "react";

const Footer = () => {
  return (
    <div id="Footer">
      <div className="items">
        <ul>
          <li>
            <a
              className="api-1"
              href="https://corona.lmao.ninja"
              target="_blank"
              rel="noopener noreferrer"
            >
              COVID-19 API
            </a>
          </li>
          <li>
            <a
              className="api-2"
              href="https://newsapi.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NEWS API
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
