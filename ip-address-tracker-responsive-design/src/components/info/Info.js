import React from "react";

const Info = (props) => {
  return props.data.location !== undefined ? (
    <div id="Info">
      <div className="every-part part-first">
        <p className="header">IP ADDRESS</p>
        <p className="content">{props.data.ip}</p>
      </div>
      <div className="every-part">
        <p className="header">LOCATION</p>
        <p className="content">
          {props.data.location.city}, {props.data.location.region}{" "}
          {props.data.location.postalCode}
        </p>
      </div>
      <div className="every-part">
        <p className="header">TIMEZONE</p>
        <p className="content">UTC {props.data.location.timezone}</p>
      </div>
      <div className="every-part part-last">
        <p className="header">ISP</p>
        <p className="content">{props.data.isp}</p>
      </div>
    </div>
  ) : null;
};

export default Info;
