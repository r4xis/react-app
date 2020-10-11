import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DataProcess from "./components/tables/DataProcess";

const App = () => {
  return (
    <div id="App">
      <Navbar />
      <DataProcess />
      <Footer />
    </div>
  );
};

export default App;
