import React from "react";
import Header from "./components/header";
import "./wireframe.css";
import Stocks from "./assets/Images/Stocks.jpg";
import MarketingPlans from "./assets/Images/MarketingPlans.jpg";
import Leadership from "./assets/Images/Leadership.jpg";

export default function Wireframe() {
  return (
    <div>
      <Header />

      <main className="hero">
        <div className="hero-text">
          <h1>HELPING MARKETERS</h1>
          <h2>BE BRILLIANT.</h2>
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
          <img src={Stocks} alt="Stocks" className="card-image" />
          <div className="card-content">
            <h3>Stakeholder Management</h3>
            <p>Leading marketing strategies.</p>
          </div>
        </div>

        <div className="card">
          <img src={MarketingPlans} alt="Marketing Plans" className="card-image" />
          <div className="card-content">
            <h3>Breakthrough Marketing Plans</h3>
            <p>A masterclass for all best sellers.</p>
          </div>
        </div>

        <div className="card">
          <img src={Leadership} alt="Leadership" className="card-image" />
          <div className="card-content">
            <h3>Leadership in Marketing</h3>
            <p>Find out how to make a difference.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
