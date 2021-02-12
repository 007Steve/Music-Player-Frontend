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
          <Card
            artist="Amen"
            time="3:04"
            image="https://upload.wikimedia.org/wikipedia/en/4/4c/Logic_No_Pressure_album_cover.jpeg"
            album="Logic"
            song=""
          />

          {songs.map((song) => (
            <Card key={song.id} song={song} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Container;
