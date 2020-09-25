import React from "react";
import fetchData from "../../hooks/FetchData";
import comma from "../../comma";
import Loading from "../Loading";

const topLeft = () => {
  const [data, isLoading] = fetchData("https://corona.lmao.ninja/v2/all");
  const cases = comma(data.cases);
  const deaths = comma(data.deaths);
  const recovered = comma(data.recovered);

  if (isLoading)
    return (
      <div className="loading-left">
        <Loading />
      </div>
    );
  return (
    <div id="World">
      <div className="cases">
        <p className="headers">Coronavirus Cases:</p>
        <p className="numbers">{cases}</p>
      </div>
      <div className="deaths">
        <p className="headers">Deaths:</p>
        <p className="numbers">{deaths}</p>
      </div>
      <div className="recovered">
        <p className="headers">Recovered:</p>
        <p className="numbers">{recovered}</p>
      </div>
    </div>
  );
};

export default topLeft;
