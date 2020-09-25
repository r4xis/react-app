import React from "react";

const News = (props) => {
  const { title, url, urlToImage } = props;
  const defaultSrc = (ev) => {
    ev.target.src =
      "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg";
  };
  return (
    <div id="News">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="News-link"
      >
        <img onError={defaultSrc} src={urlToImage} alt=""></img>
        <p>{title}</p>
      </a>
    </div>
  );
};

export default News;
