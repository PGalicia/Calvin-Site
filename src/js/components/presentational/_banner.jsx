/*
    File: _header.jsx
    Author: Patrick Galicia
    Desc: Main home page header
*/

import React from "react";

// Images
import profileImg from "@assets/handsome-devil.png";
import nameImg from "@assets/name.png";
import cloudLeftImg from "@assets/clouds-left.png";
import cloudRightImg from "@assets/clouds-right.png";
import lightImg from "@assets/hyper-light-bride-beam.png";
import handImg from "@assets/hand.png";
import telescopeImg from "@assets/telescope-man.png";

const Banner = props => {
  return (
    <header className="banner">
      <img className="banner__hand" src={handImg} />
      <img className="banner__light" src={lightImg} />
      <img className="banner__telescope" src={telescopeImg} />
      <img className="banner__profile" src={profileImg} />
      <img className="banner__name" src={nameImg} />
      <img className="banner__cloud--right" src={cloudRightImg} />
      <img className="banner__cloud--left" src={cloudLeftImg} />
    </header>
  );
};

export default Banner;
