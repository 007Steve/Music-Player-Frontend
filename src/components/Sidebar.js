import React from "react";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AlbumIcon from "@material-ui/icons/Album";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import { useHistory } from "react-router-dom";
import "../styles/Sidebar.css";
import axios from "axios";
axios.defaults.withCredentials = true;
function Sidebar() {
  let history = useHistory();

  // SignOut Data
  const signout = async (e) => {
    e.preventDefault();

    try {
      await axios.get("http://localhost:5000/api/logout", {
        withCredentials: true,
      });
    } catch (error) {
      if (error.response) {
        if (error.response.data) {
          console.log(error.response.data);
        }
      }
      return;
    }

    history.push("/login");
  };
  return (
    <div className="sidebar">
      <div className="sidebar__imageContainer">
        <img className="sidebar__image" src="/Music (1).png" alt="" />
        <h1>Music</h1>
      </div>
      <div className="sidebar__container">
        <h3>Menu</h3>
        <div className="sidebar__options">
          <HomeOutlinedIcon />
          <h4>Home</h4>
        </div>
        <div className="sidebar__options">
          <PermIdentityIcon />
          <h4>Artist</h4>
        </div>
        <div className="sidebar__options">
          <AlbumIcon />
          <h4>Album</h4>
        </div>
      </div>
      <div className="sidebar__container">
        <h3>Playlist</h3>
        <div className="sidebar__options">
          <PlaylistAddIcon />
          <h4>Add Playlist</h4>
        </div>
        <div className="sidebar__options">
          <PlaylistAddIcon />
          <h4>Add Playlist</h4>
        </div>
      </div>
      <div className="sidebar__container">
        <h3>Settings</h3>
        <div className="sidebar__options">
          <SettingsIcon />
          <h4>Settings</h4>
        </div>
        <div className="sidebar__options">
          <ExitToAppIcon />
          <h4 onClick={signout}>Log Out</h4>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
