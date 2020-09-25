import React from "react";
import comma from "../../comma";
const Table = (props) => {
  const country = comma(props.country);
  const cases = comma(props.cases);
  const deaths = comma(props.deaths);
  const recovered = comma(props.recovered);
  const todayCases = comma(props.todayCases);
  const todayDeaths = comma(props.todayDeaths);
  const todayRecovered = comma(props.todayRecovered);
  const active = comma(props.active);
  const critical = comma(props.critical);

  return (
    <tbody>
      <tr className="body">
        <td>{props.id}</td>
        <td>{country}</td>
        <td>{cases}</td>
        <td>{deaths}</td>
        <td>{recovered}</td>
        <td>{todayCases}</td>
        <td>{todayDeaths}</td>
        <td>{todayRecovered}</td>
        <td>{active}</td>
        <td>{critical}</td>
      </tr>
    </tbody>
  );
};

export default Table;
