import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Info from "./components/info/Info";
import Map from "./components/map/Map";

const App = () => {
  const staticIpUrl =
    "https://geo.ipify.org/api/v1?apiKey=at_35hGAZ5fnaqYSZcWsa7JOLweMIsos&ipAddress=";
  const staticDomainUrl =
    "https://geo.ipify.org/api/v1?apiKey=at_35hGAZ5fnaqYSZcWsa7JOLweMIsos&domain=";
  const [data, setData] = useState([]);
  const [ip, setIp] = useState(
    "https://geo.ipify.org/api/v1?apiKey=at_35hGAZ5fnaqYSZcWsa7JOLweMIsos&ipAddress="
  );
  const [domain, setDomain] = useState(
    "https://geo.ipify.org/api/v1?apiKey=at_35hGAZ5fnaqYSZcWsa7JOLweMIsos&domain="
  );
  const [ipOrDomain, setIpOrDomain] = useState("");

  useEffect(() => {
    fetchData(ip);
  }, [ip]);

  useEffect(() => {
    fetchData(domain);
  }, [domain]);

  const fetchData = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((e) => console.log("Connection error", e));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let string = ipOrDomain.replace(/./g, "");
    let isnum = /^\d+$/.test(string);
    if (isnum) {
      setIp(staticIpUrl + ipOrDomain);
    } else {
      setDomain(staticDomainUrl + ipOrDomain);
    }
  };

  const handleChange = (e) => {
    setIpOrDomain(e.target.value);
  };

  return (
    <div id="App">
      <Navbar handleChange={handleChange} handleSubmit={handleSubmit} />
      <Info data={data} />
      <Map data={data} />
    </div>
  );
};

export default App;
