import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import World from "./components/main/topLeft";
import News from "./components/main/topRight";
import Table from "./components/main/Bottom";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div id="App">
      <Navbar />
      <div id="main-top">
        <World />
        <News />
      </div>
      <div id="main-bottom">
        <Table />
      </div>
      <Footer />
    </div>
  );
};

export default App;
