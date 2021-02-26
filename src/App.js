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
  const dispatch = useDispatch();
  const currentSongS = useSelector(selectSongs);
  const newcurrentSong = currentSongS[0];
  // Add song data to redux
  const getSongs = async () => {
    await axios
      .get("http://localhost:5000/api/songs")
      .then((data) => dispatch(songs(data.data)));
  };
  // Add user data to redux
  const getUser = async () => {
    await axios
      .get("http://localhost:5000/api/user")
      .then((data) => dispatch(login(data.data)));
  };
  //UseEffect
  useEffect(() => {
    getSongs();
    getUser();
  }, []);
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
            {true ? <Redirect to="/login" /> : <Home />}
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
