import Navbar from "./components/Navbar/Navbar";
import React from "react";
import video from "./landing_section.mp4";
import "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="Hero">
        <video
          className="Hero--video"
          src={video}
          preload="auto"
          loop
          playsInline
          autoPlay
          muted
        />
        <h1 className="Hero--text">
          The best boutique fitness classes in the world,
        </h1>
        <div className="Hero--transition"></div>
      </section>
    </div>
  );
}

export default App;
