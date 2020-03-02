/*
    File: _name.jsx
    Author: Patrick Galicia
    Desc: Name header
*/

import React from "react";
import { Link } from "react-router-dom";

// Images
import nameImg from "@assets/name.png";

const Name = props => {
  let link = props.link || "/";
  let extraClassImage = props.extraClassImage || "";
  return (
    <Link to={link}>
      <img
        className={"name center-content--x " + extraClassImage}
        src={nameImg}
      />
    </Link>
  );
};

export default Name;
