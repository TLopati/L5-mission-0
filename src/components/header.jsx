import React, { useState } from "react";
import "./header.css";
import logoIcon from "../assets/Images/newGreyLogo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <header className="header">
      <div className="logo">
      <img src={logoIcon} alt="Logo" className="logo-img" />
      <span>NZ MARKETING<br/> ASSOCIATION </span>
    </div>

    <div className="burger" onClick={() => setIsOpen(!isOpen)}>
      ☰
    </div>
    <nav className={`nav ${isOpen ? "open" : ""}`}>
      <a href="#">MENU 1</a>
      <a href="#">MENU 2</a>
      <a href="#">MENU 3</a>
      <button className="login-btn">LOGIN</button>
    </nav>
  </header>
  );
}
