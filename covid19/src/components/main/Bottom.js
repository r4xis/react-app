import React from "react";
import fetchData from "../../hooks/FetchData";
import Table from "./Table";
import Loading from "../Loading";

const Bottom = () => {
  const [data, isLoading] = fetchData("https://corona.lmao.ninja/v2/countries");

  if (isLoading) return <Loading />;
  return data.lenght !== 0 ? (
    <div id="Table">
      <table cellSpacing="0" cellPadding="0">
        <thead>
          <tr>
            <th>#</th>
            <th>Country</th>
            <th>Total Cases</th>
            <th>Total Deaths</th>
            <th>Total Recovered</th>
            <th>Today Cases</th>
            <th>Today Deaths</th>
            <th>Today Recovered</th>
            <th>Active Cases</th>
            <th>Critical</th>
          </tr>
        </thead>
        {data
          .sort((a, b) => (a.cases > b.cases ? -1 : 1))
          .map(
            (
              {
                country,
                cases,
                deaths,
                recovered,
                todayCases,
                todayDeaths,
                todayRecovered,
                active,
                critical,
              },
              index
            ) => (
              <Table
                key={index++}
                id={index}
                country={country}
                cases={cases}
                deaths={deaths}
                recovered={recovered}
                todayCases={todayCases}
                todayDeaths={todayDeaths}
                todayRecovered={todayRecovered}
                active={active}
                critical={critical}
              />
            )
          )}
      </table>
    </div>
  ) : (
    <div>
      <Loading />
    </div>
  );
};

export default Bottom;
