import React, { useState } from "react";
import "./MovieInfo.css";

const MovieInfo = (props) => {
  const [visible, setVisible] = useState(true); /* Set to 'false' to prevent popup on load! */
  return (
    <div
      className="movieInfo-container"
      style={{ display: visible ? "block" : "none" }}
      onClick={() => setVisible(false)}
    >
      <h3>{props.title}</h3>
      <div className="movieInfo-container--header">
        <img src={props.poster_path} alt={props.title} width="150px" />
        <div className="movieInfo-header--data">
          <p>
            <strong>Released:</strong> {props.release_date}
          </p>
          <p>
            <strong>Genre:</strong> {props.genres}
          </p>
          <p>
            <strong>Summary:</strong> {props.overview}
          </p>
          <p>
            <strong>Similar:</strong> {props.similar}
          </p>
        </div>
          </div>
         <h5>Audio section will go here</h5>
      <h4>[Click me to close!]</h4>
    </div>
  );
};

export default MovieInfo;
