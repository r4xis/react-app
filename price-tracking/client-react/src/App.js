import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
