import React from "react";
import "../styles/Player.css";
import PlayCircleFilledOutlinedIcon from "@material-ui/icons/PlayCircleFilledOutlined";
import PauseCircleFilledOutlinedIcon from "@material-ui/icons/PauseCircleFilledOutlined";
import SkipNextOutlinedIcon from "@material-ui/icons/SkipNextOutlined";
import SkipPreviousOutlinedIcon from "@material-ui/icons/SkipPreviousOutlined";
import VolumeUpOutlinedIcon from "@material-ui/icons/VolumeUpOutlined";
function Player() {
  return (
    <div className="player">
      <div className="player__left">
        <img
          className="player__image"
          src="https://upload.wikimedia.org/wikipedia/en/4/4c/Logic_No_Pressure_album_cover.jpeg"
          alt=""
        />
        <div className="player__songInfo">
          <h3>Amen</h3>
          <p>Logic</p>
        </div>
      </div>
      <div className="player__center">
        <div className="player__playIcons">
          <SkipPreviousOutlinedIcon
            fontSize="large"
            className="player__playIcon"
          />
          <PlayCircleFilledOutlinedIcon
            fontSize="large"
            className="player__playIcon"
          />
          <SkipNextOutlinedIcon fontSize="large" className="player__playIcon" />
        </div>
        <div className="player__control">
          <p className="player__time">1:32</p>
          <input className="songControl"min="" max="" value="" onChange="" type="range" />
          <p className="player__time">2:46</p>
        </div>
      </div>
      <div className="player__right">
        <VolumeUpOutlinedIcon className="" />
        <input
          className="player__volume"
          min=""
          max=""
          value=""
          onChange=""
          type="range"
        />
      </div>
    </div>
  );
}

export default Player;
