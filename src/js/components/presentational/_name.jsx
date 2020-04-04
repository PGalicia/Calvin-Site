/*
    File: _name.jsx
    Author: Patrick Galicia
    Desc: Name header
*/

import React from "react";
import { Link } from "react-router-dom";

// Images
import nameImg from "@assets/name.svg";

const Name = props => {
  let link = props.link || "/";
  let extraClassImage = props.extraClassImage || "";
  return (
    <img
      className={"name " + extraClassImage}
      src={nameImg}
    />
  );
};

export default Name;
