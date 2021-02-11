import React from "react";
import "../styles/Nav.css";
import { Avatar } from "@material-ui/core";
function Nav() {
  return (
    <div className="nav">
      <div>
        <button className="nav__btn"> {"<"}</button>
        <button className="nav__btn"> {">"}</button>
      </div>
      <Avatar
        src="https://media-exp1.licdn.com/dms/image/C4D03AQHeZuu5PGQzYw/profile-displayphoto-shrink_200_200/0/1600449353015?e=1618444800&v=beta&t=85UrvhF2e3gN_l9zVcmLu2ZsccVYVXTkHE04wiDRZNo"
        className="nav__photo"
      />
    </div>
  );
}

export default Nav;
