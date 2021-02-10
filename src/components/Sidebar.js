import React from "react";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import '../styles/Sidebar.css'
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <HomeOutlinedIcon />
        <h3>Home</h3>
      </div>
      <div className="sidebar__container">
        <HomeOutlinedIcon />
        <h3>Home</h3>
      </div>
      <div className="sidebar__container">
        <HomeOutlinedIcon />
        <h3>Home</h3>
      </div>
      <div className="sidebar__container">
        <HomeOutlinedIcon />
        <h3>Home</h3>
      </div>
      <div className="sidebar__container">
        <HomeOutlinedIcon />
        <h3>Home</h3>
      </div>
    </div>
  );
}

export default Sidebar;
