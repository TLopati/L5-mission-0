import React from "react";
import Header from "./components/header";
import "./wireframe.css";
import MtEden from "./assets/Images/MtEden.jpg";
import FlowerClock from "./assets/Images/FlowerClock.jpg";
import Britomart from "./assets/Images/Britomart.jpg";

export default function Wireframe() {
  return (
    <div>
      <Header />

      <main className="hero">
        <div className="hero-text">
          <h1>Explore all New<br />Zealand has to offer.</h1>
          <div className="search-bar">
            <div className="search-wrapper">
              <input type="text" />
              <button>SEARCH</button>
            </div>
          </div>
        </div>
      </main>

      <section className="features">
        <div className="card">
          <img src={MtEden} alt="Mt Eden" className="card-image" />
          <div className="card-content">
            <h3>Mt Eden</h3>
            <p>A stunning view from the volcanic cone.</p>
          </div>
        </div>

        <div className="card">
          <img src={FlowerClock} alt="Flower Clock" className="card-image" />
          <div className="card-content">
            <h3>Flower Clock</h3>
            <p>A unique floral landmark in the city.</p>
          </div>
        </div>

        <div className="card">
          <img src={Britomart} alt="Britomart" className="card-image" />
          <div className="card-content">
            <h3>Britomart</h3>
            <p>The heart of Auckland's shopping and dining.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
