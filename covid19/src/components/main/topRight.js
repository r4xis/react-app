import React from "react";
import fetchData from "../../hooks/FetchData";
import News from "./News";
import Loading from "../Loading";

const topRight = () => {
  const [data, isLoading] = fetchData(
    "http://newsapi.org/v2/top-headlines?language=en&q=covid&pageSize=10&apiKey=e334f01058704c9fae249b754dd31739"
  );

  if (isLoading)
    return (
      <div className="loading-right">
        <Loading />
      </div>
    );
  return data.status === "ok" ? (
    <div id="Sidebar">
      <p>Latest News</p>
      {data.articles
        .filter(
          (article) =>
            article.urlToImage !== null &&
            article.url !== null &&
            article.title !== null
        )
        .slice(0, 5)
        .map(({ title, url, urlToImage }, index) => (
          <News key={index} title={title} url={url} urlToImage={urlToImage} />
        ))}
    </div>
  ) : (
    <div>
      <Loading />
    </div>
  );
};

export default topRight;
