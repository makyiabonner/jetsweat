import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Main from "./components/Main";
import React from "react";
import "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Banner />
      <section className="Home">
        <div className="Home--section">
          <h3 className="Home--section-subtitle">
            Access the most exclusive boutique fitness & wellness studios.
          </h3>
          <p className="Home--section-details">
            Our 30+ studio partners were handpicked for their excellence, proven
            methodologies, and expert instructors across Yoga, HIIT, Barre,
            Cardio, Pilates, Dance, Martial Arts, Strength Training & more. With
            new classes added monthly - never get bored!
          </p>
        </div>
        <img
          className="Home--section-img"
          src="https://jetsweatfitness.com/static/media/image1.0037c10c.png"
          alt=""
        />
      </section>
    </div>
  );
}

export default App;
