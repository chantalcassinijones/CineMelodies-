import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Header;
