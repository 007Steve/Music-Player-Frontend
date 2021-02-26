import React from "react";
import "../styles/Container.css";
import Banner from "./Banner";
import Card from "./Card";
import Options from "./Options";
import Lyrics from "./Lyrics";
import { selectSongs } from "../features/songsSlice";
import { useSelector } from "react-redux";
function Container() {
  //added songs and selector
  const songs = useSelector(selectSongs);
  return (
    <div className="container">
      <Banner />
      <Options />
      {0 ? (
        <Lyrics />
      ) : (
        <div className="container__songContainer">
          {songs.map((song) => (
            <Card key={song.id} song={song} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Container;
