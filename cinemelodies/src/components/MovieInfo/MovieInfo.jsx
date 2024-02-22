import React, { useState } from "react";
import SoundtrackInfo from "../SoundtrackInfo/SoundtrackInfo";
import { useLocation } from "react-router-dom";
import "./MovieInfo.css";

const MovieInfo = (props) => {
  
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  // params to values using useLocation
  const title = params.get('title');
  const overview = params.get('overview');
  const releaseDate = params.get('releaseDate');
  const backdropPath = params.get('backdropPath');
  const voteAverage = params.get('voteAverage');
  
  return (
    <>
      <div
        className="movieInfo-container"
      
      >
        <div
          className="movieInfo-container--header"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w780${backdropPath})`,
          }}
        >
          <div className="overlay"></div>
          <div className="movieInfo-header--data">
            <h3 className="text-center">{title || "Error"}</h3>
            <ul>
              <li>
                <strong>Released:</strong> {releaseDate ? releaseDate : "N/A"}
              </li>

              <li>
                <strong>Summary:</strong> {overview ? overview : "Not available"}
              </li>
              <li>
                <strong>Average rating:</strong>{" "}
              {parseInt(voteAverage).toFixed(1)}
              </li>
                
            </ul>
          </div>
        </div>
        <SoundtrackInfo movie={title} />
      </div>
    </>
  );
};
export default MovieInfo;

