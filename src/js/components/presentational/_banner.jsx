/*
    File: _header.jsx
    Author: Patrick Galicia
    Desc: Main home page header
*/

import React, { Component } from "react";
import { Link } from "react-router-dom";

import Name from "@presentational/_name.jsx";
import Footer from "@presentational/_footer.jsx";

// Images
// import profileImg from "@assets/handsome-devil.png";
// import lightImg from "@assets/hyper-light-bride-beam.png";
// import handImg from "@assets/hand.png";
// import telescopeImg from "@assets/telescope-man.png";

class Banner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="banner">
        <Name extraClassImage="name--home" />
        <Link className="banner__route center-content--x" to="/project">
          COME ON IN
        </Link>
        <Footer />
        {/* <img className="banner__hand" src={handImg} />
        <img className="banner__light" src={lightImg} />
        <img className="banner__telescope" src={telescopeImg} />
        <img className="banner__profile" src={profileImg} /> */}
      </header>
    );
  }
}

export default Banner;
