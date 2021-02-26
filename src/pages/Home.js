import React from "react";
import Sidebar from "../components/Sidebar";
import Player from "../components/Player";
import Container from "../components/Container";
import "../styles/Home.css";

function Home() {

  return (
    <div className="home">
      <div className="home__container">
        <Sidebar />
        <Container />
      </div>
      <Player />
    </div>
  );
}

export default Home;
