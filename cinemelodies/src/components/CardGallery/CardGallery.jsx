import React from "react";
import "./CardGallery.css";
import Card from "../Card/Card";

const CardGallery = (props) => {
  return (
    <>
     <div className="gallery-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default CardGallery;
