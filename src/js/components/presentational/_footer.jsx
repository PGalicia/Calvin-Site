/*
    File: _footer.jsx
    Author: Patrick Galicia
    Desc: The clouds and the thinking gent
*/

import React from "react";
import { Link } from "react-router-dom";

// Images
import cloudLeftImg from "@assets/clouds-left.png";
import cloudRightImg from "@assets/clouds-right.png";

const Footer = props => {
  let extraClassImage = props.extraClassImage || "";
  return (
    <footer className={"footer " + extraClassImage}>
      <div className="footer__cloud footer__cloud--left">
        <img src={cloudLeftImg} />
      </div>
      {/* <div className="footer__cloud footer__cloud--left">left</div> */}
      <div className="footer__cloud footer__cloud--right">
        <img src={cloudRightImg} />
      </div>
      {/* <div className="footer__cloud footer__cloud--right">right</div> */}
    </footer>
  );
};

export default Footer;
