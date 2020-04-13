/*
    File: _name.jsx
    Author: Patrick Galicia
    Desc: Name header
*/

import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// Images
import nameImg from "@assets/name.svg";

// Redux
const mapStateToProps = state => ({
  isProjectListInView: state.isProjectListInView
});

const Name = props => {
  let link = props.link || "/";
  let extraClass = props.extraClass || "";
  let isNameSmall = props.isProjectListInView ? "name name--small" : "name";
  return (
    <img
      className={isNameSmall + " " + extraClass}
      src={nameImg}
    />
  );
};

export default connect(mapStateToProps)(Name);
