/*
    File: _project.jsx
    Author: Patrick Galicia
    Desc: Hold all the components that are seen in the specific 'Project' page
    Path: /project/:id
*/

import React, { Component } from "react";

import nameImg from "@assets/name.png";

class Project extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img
        className="name name--project-list center-content--x"
        src={nameImg}
      />
      // <h1>Project List page</h1>
    );
  }
}

export default Project;
