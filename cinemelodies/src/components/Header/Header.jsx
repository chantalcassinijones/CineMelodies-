import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import "./Header.css";

const Header = ({ onSearchResults}) => {
  return (
    <div className="header-container">
      <Navbar />
      <Hero onSearchResults={onSearchResults} />
    </div>
  );
};

export default Header;
