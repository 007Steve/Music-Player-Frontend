import React, { useRef, useState } from "react";
import "../styles/Player.css";
import PlayCircleFilledOutlinedIcon from "@material-ui/icons/PlayCircleFilledOutlined";
// import PauseCircleFilledOutlinedIcon from "@material-ui/icons/PauseCircleFilledOutlined";
import SkipNextOutlinedIcon from "@material-ui/icons/SkipNextOutlined";
import SkipPreviousOutlinedIcon from "@material-ui/icons/SkipPreviousOutlined";
import VolumeUpOutlinedIcon from "@material-ui/icons/VolumeUpOutlined";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import { useDispatch } from "react-redux";
import {
  selectcurrentSong,
  setCurrentSong,
} from "../features/currentSongSlice";
import { useSelector } from "react-redux";
import { selectSongs } from "../features/songsSlice";
function Player() {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const songe = useSelector(selectSongs);
  const countPlusOne = () => {
    setCount(count + 1);
  };

  const countMinusOne = () => {
    setCount(count - 1);
  };
  // add current songs and redux
  const newCurrentSong = useSelector(selectcurrentSong);
  // console.log(newCurrentSong.setCurrentSong);
  const currentSong = newCurrentSong.setCurrentSong;
  // useREF
  const audioRef = useRef(null);
  // Set current time and duration
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  // Get time  of the song
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const [isPlaying, setIsPlaying] = useState(newCurrentSong);
  // Drag input slider
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  // play music and pause
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  // Time update
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration: duration });
  };
  // console.log(currentSong.artist);

  // skip song backwards
  const skipSongBack = () => {
    const num = currentSong.id;
    countMinusOne(num);
    const song = songe[count];
    dispatch(
      setCurrentSong({
        setCurrentSong: song,
      })
    );
  };
  // skip song forwards
  const skipSongForward = () => {
    const num = currentSong.id;
    countPlusOne(num);
    const song = songe[count];
    dispatch(
      setCurrentSong({
        setCurrentSong: song,
      })
    );
    console.log(song);
  };
  return (
    <div className="player">
      <div className="player__left">
        <img className="player__image" src={currentSong.cover} alt="" />
        <div className="player__songInfo">
          <h3>{currentSong.song}</h3>
          <p>{currentSong.artist}</p>
        </div>
      </div>
      <div className="player__center">
        <div className="player__playIcons">
          <SkipPreviousOutlinedIcon
            fontSize="large"
            className="player__playIcon"
            onClick={skipSongBack}
          />
          {isPlaying ? (
            <PauseCircleFilledIcon
              fontSize="large"
              className="player__playIcon"
              onClick={playSongHandler}
            />
          ) : (
            <PlayCircleFilledOutlinedIcon
              fontSize="large"
              className="player__playIcon"
              onClick={playSongHandler}
            />
          )}

          <SkipNextOutlinedIcon
            fontSize="large"
            className="player__playIcon"
            onClick={skipSongForward}
          />
        </div>
        <div className="player__control">
          <p className="player__time">{getTime(songInfo.currentTime)}</p>
          <input
            className={`songControl ${currentSong.artist}`}
            min={0}
            max={songInfo.duration}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type="range"
          />
          <p className="player__time">{getTime(songInfo.duration)}</p>
        </div>
      </div>
      <div className="player__right">
        <VolumeUpOutlinedIcon className="" />
        <input
          className={`player__volume ${currentSong.artist}`}
          min=""
          max=""
          value=""
          onChange=""
          type="range"
        />
        <audio
          autoPlay
          onTimeUpdate={timeUpdateHandler}
          ref={audioRef}
          src={currentSong.audio}
          onLoadedMetadata={timeUpdateHandler}
        ></audio>
      </div>
    </div>
  );
}

export default Player;
