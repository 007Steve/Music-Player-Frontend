import React from "react";
import "../styles/Card.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useDispatch } from "react-redux";
import { setCurrentSong } from "../features/currentSongSlice";
function Card({ song }) {
  // add song
  const dispatch = useDispatch();
  const selectedSongHandler = () => {
    dispatch(
      setCurrentSong({
        setCurrentSong: song,
      })
    );
  };
  return (
    <div className="card" onClick={selectedSongHandler}>
      <img className="card-image" src={song.cover} alt="" />
      <div className="card-container">
        <h4 className="card-album">{song.artist}</h4>
        <p className="card-artist">{song.song} </p>
        <p className="card-time">{song.time}</p>
        <FavoriteIcon className="card-like" />
      </div>
    </div>
  );
}

export default Card;
