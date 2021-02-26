import React from "react";
import "../styles/Options.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {
  selectcurrentSong,
 
} from "../features/currentSongSlice";
import { useSelector } from "react-redux";
function Options() {
  const newCurrentSong = useSelector(selectcurrentSong);
  
  return (
    <div className="options">
      <button
        className={`options__btn ${newCurrentSong.setCurrentSong.artist}`}
      >
        Lyrics
      </button>
      <MoreHorizIcon className="options__icon" />
    </div>
  );
}

export default Options;
