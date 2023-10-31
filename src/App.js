import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Main from "./components/Main";
import React from "react";
import "react-bootstrap";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Banner />
      <Home />
    </div>
  );
}

export default App;
