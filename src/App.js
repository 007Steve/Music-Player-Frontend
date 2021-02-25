import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import { setCurrentSong } from "./features/currentSongSlice";
import { songs, selectSongs } from "./features/songsSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { login, selectUser } from "./features/userSlice";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import axios from "axios";
axios.defaults.withCredentials = true;
function App() {
  const user = useSelector(selectUser);
  //DISPATCH
  const dispatch = useDispatch();
  const currentSongS = useSelector(selectSongs);
  const newcurrentSong = currentSongS[0];
  console.log(newcurrentSong)
  useEffect(() => {
    // add song data and redux
    fetch("http://localhost:5000/api/songs")
      .then((response) => response.json())
      .then((data) => dispatch(songs(data)));

    fetch("http://localhost:5000/api/user", {
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => dispatch(login(data)));
  },[dispatch] );
  //DISPATCH CURRENT SONG
  dispatch(
    setCurrentSong({
      setCurrentSong: newcurrentSong,
    })
  );
  return (
    <div className="App">
      <Router>
        <Switch>
          

          <Route exact path="/">
            {true? <Redirect to="/login" /> : <Redirect to="/home" />}

          </Route>
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
