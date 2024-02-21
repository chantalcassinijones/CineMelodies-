import React, { useState } from "react";
import SoundtrackInfo from "../SoundtrackInfo/SoundtrackInfo";
import "./MovieInfo.css";

const MovieInfo = (props) => {
  const [visible, setVisible] = useState(true); /* Set to 'false' to prevent popup on load! */
  return (
    <>
      <div
        className="movieInfo-container"
        style={{ display: visible ? "block" : "none" }}
        onClick={() => setVisible(false)}
      >
        <div
          className="movieInfo-container--header"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w780${props.backdropPath})`,
          }}
        >
          <div className="overlay"></div>
          <div className="movieInfo-header--data">
            <h3 className="text-center">{props.title || "Error"}</h3>
            <ul>
              <li>
                <strong>Released:</strong> {props.releaseDate}
              </li>

              <li>
                <strong>Summary:</strong> {props.overview}
              </li>
              <li>
                <strong>Average rating:</strong>{" "}
              {parseInt(props.voteAverage).toFixed(1)}
              </li>
                
            </ul>
          </div>
        </div>
        <SoundtrackInfo movie={props.title} />
      </div>
    </>
  );
};
export default MovieInfo;

