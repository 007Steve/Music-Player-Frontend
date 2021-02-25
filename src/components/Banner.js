import React from "react";
import "../styles/Banner.css";
import Nav from "./Nav";
import { selectcurrentSong } from "../features/currentSongSlice";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
function Banner() {
  const newCurrentSong = useSelector(selectcurrentSong);
  
  return (
    <div className={`banner ${newCurrentSong.setCurrentSong.artist}`}>
      <Nav />
      <div className="banner__container">
        <img
          className="banner__image shadow"
          src={newCurrentSong.setCurrentSong.cover}
          alt={newCurrentSong.setCurrentSong.artist}
        />
        <div className="banner__songInfo">
          <h1 className="banner__artist">
            {newCurrentSong.setCurrentSong.song}
          </h1>

          <h2 className="banner__song">
            {newCurrentSong.setCurrentSong.artist}
          </h2>
        </div>
      </div>
    </div>
    
  );
}

export default Banner;
