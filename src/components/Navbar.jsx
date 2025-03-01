import React, { useState } from "react";
import "../styles/Navbar.css"; // Import the navbar styles

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="futuristic-navbar">
      <div className="logo">Taha Faisal</div>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="/">Home</a>
        <a href="/skills">Skills</a>
        <a href="/contact">Contact Me</a>
      </div>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
