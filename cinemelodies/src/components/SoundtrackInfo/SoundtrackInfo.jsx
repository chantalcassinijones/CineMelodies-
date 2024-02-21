import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import "./SoundtrackInfo.css";

const URL = "https://api.spotify.com/v1/search"; // /Search endpoint (to find albums)
const clientId = "d8cbb49c40dd440a87057c10244e3f9d";
const clientSecret = "7cc879d953bf4044808360c5c26dd96f";

const SoundtrackInfo = (props) => {
  const [soundtrackData, setSoundtrackData] = useState("");
  const [token, setToken] = useState(null); // Prevent repeat token requests

  useEffect(() => {
    // Get Spotify access token
    const getToken = async () => {
      try {
        const response = await axios.post(
          "https://accounts.spotify.com/api/token",
          null,
          {
            params: {
              grant_type: "client_credentials",
            },
            headers: {
              Authorization: "Basic " + btoa(`${clientId}:${clientSecret}`),
            },
          }
        );
        // Assign the token from response
        const accessToken = response.data.access_token;

        return accessToken;
      } catch (error) {
        console.error("Error fetching access token:", error);
        throw error;
      }
    };
    // Search for an album and return data
    const fetchData = async () => {
      try {
        const token = await getToken();
        const response = await axios.get(URL, {
          params: {
            q: `${props.movie}`,
            type: "album",
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // Assign a shortcut for /DRY
        const firstAlbum = response.data.albums.items[0];
        // Get the album tracks
        const id = firstAlbum.id;
        const getTracks = await axios.get(
          `https://api.spotify.com/v1/albums/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

          // Set fetched data to state
          if (firstAlbum) {
          setSoundtrackData({
            title: firstAlbum.name,
            img: firstAlbum.images[1].url,
            artists: firstAlbum.artists[0].name,
            released: firstAlbum.release_date,
            tracks: firstAlbum.total_tracks,
            url: firstAlbum.external_urls.spotify,
             id: firstAlbum.id,
            trackInfo: getTracks.data.tracks.items,
          });
                  } else {
          console.log("No album found");
        }
      } catch (error) {
        console.error("Error fetching soundtrack data:", error);
      }
    };

    fetchData();
  }, [token]);



  return (
    <div className="soundtrack-container">
      <span className="title">{soundtrackData.title}</span>
      <div className="soundtrack-header">
        <div className="soundtrack-details">
          <img className="soundtrack-img" src={soundtrackData.img} />

          <ul>
            <li>
              <strong>Artists:</strong> {soundtrackData.artists}
            </li>
            <li>
              <strong>Released:</strong> {soundtrackData.released}
            </li>
            <li>
              <strong>Total tracks:</strong> {soundtrackData.tracks}
            </li>
            <li>{soundtrackData.popularity}</li>
            <li>
              <a href={soundtrackData.url} target="_blank">
               [icon] Spotify Page
              </a>
            </li>
            <li>
              <a
                href={`https://www.amazon.co.uk/s?k=${soundtrackData.title}`}
                target="_blank"
              >
               [icon] Buy on Amazon
              </a>
            </li>
          </ul>
              </div>
          </div>
          <h2>Track Previews</h2>
          <div className="previews-container">
          {soundtrackData.trackInfo && soundtrackData.trackInfo.map(track => (
              <div className="track-preview">{track.name} - <ReactPlayer url={track.preview_url} key={track.id} width="400px" height="40px" controls={true} /></div>
    ))}
      </div>
    </div>
  );
};

export default SoundtrackInfo;
