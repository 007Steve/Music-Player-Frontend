import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import { setCurrentSong } from "./features/currentSongSlice";
import { songs, selectSongs } from "./features/songsSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function App() {

  const currentSongS = useSelector(selectSongs);
  useEffect(() => {
    fetch('https://api.lyrics.ovh/v1/logic/amen')
    .then(response => response.json())
    .then(data => console.log(data));
  }, [])

  //DISPATCH
  const dispatch = useDispatch();
// add song data and redux
  useEffect(() => {
    fetch("http://localhost:5000/api/songs")
      .then((response) => response.json())
      .then((data) => dispatch(songs(data)));
  }, []);
  //DISPATCH CURRENT SONG
  dispatch(
    setCurrentSong({
      setCurrentSong: currentSongS,
    })
  );
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
