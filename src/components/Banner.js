import React from "react";
import "../styles/Banner.css";
import Nav from "./Nav";
function Banner() {
  return (
    <div className="banner">
           <Nav/>
      <div className="banner__container">
        <img className="banner__image shadow" src="https://upload.wikimedia.org/wikipedia/en/4/4c/Logic_No_Pressure_album_cover.jpeg" alt="" />
        <div className="banner__songInfo">
            <h1 className="banner__artist">Logic</h1>
            <h2 className="banner__song">Amen</h2>
        </div>
      </div>
    </div>
  );
}

export default Banner;
