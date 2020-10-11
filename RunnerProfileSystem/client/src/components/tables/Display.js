import React, { useState } from "react";
import Table from "react-bootstrap/Table";

const Display = (props) => {
  const { group } = props;
  const [sortCondition, setSortCondition] = useState("avg_pace");

  if (sortCondition === "avg_pace") {
    group.sort((a, b) => (Number(a.avg_pace) > Number(b.avg_pace) ? -1 : 1));
  } else if (sortCondition === "distance") {
    group.sort((a, b) => (Number(a.distance) > Number(b.distance) ? -1 : 1));
  } else if (sortCondition === "total_time") {
    group.sort((a, b) =>
      Number(a.total_time) > Number(b.total_time) ? -1 : 1
    );
  }

  return (
    <div className="wrap-table">
      <Table className="table" borderless>
        <thead>
          <tr>
            <th>Username</th>
            <th>Age</th>
            <th>
              Total Time
              <button
                onClick={() => {
                  setSortCondition("total_time");
                }}
              >
                <i
                  className={
                    sortCondition === "total_time"
                      ? "orange fas fa-arrow-down"
                      : "fas fa-arrow-down"
                  }
                ></i>
              </button>
            </th>
            <th>
              Distance
              <button
                onClick={() => {
                  setSortCondition("distance");
                }}
              >
                <i
                  className={
                    sortCondition === "distance"
                      ? "orange fas fa-arrow-down"
                      : "fas fa-arrow-down"
                  }
                ></i>
              </button>
            </th>
            <th>
              Avg. Pace
              <button onClick={() => setSortCondition("avg_pace")}>
                <i
                  className={
                    sortCondition === "avg_pace"
                      ? "orange fas fa-arrow-down"
                      : "fas fa-arrow-down"
                  }
                ></i>
              </button>
            </th>
          </tr>
        </thead>
        {group.map(
          ({ username, age, total_time, distance, avg_pace }, index) => (
            <tbody key={index}>
              <tr className="body">
                <td>{username}</td>
                <td>{age}</td>
                <td className={sortCondition === "total_time" ? "bold" : null}>
                  {total_time} min
                </td>
                <td className={sortCondition === "distance" ? "bold" : null}>
                  {distance} m
                </td>
                <td className={sortCondition === "avg_pace" ? "bold" : null}>
                  {avg_pace.toString().replace(".", ":")} per km
                </td>
              </tr>
            </tbody>
          )
        )}
      </Table>
    </div>
  );
};

export default Display;
