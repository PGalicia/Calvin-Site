/*
    File: _project.jsx
    Author: Patrick Galicia
    Desc: Hold all the components that are seen in the specific 'Project' page
    Path: /project/:id
*/

import React, { Component } from "react";

import Name from "@presentational/_name.jsx";

class Project extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Name extraClassImage="name--project" />
        <h1>Project</h1>
      </React.Fragment>
    );
  }
}

export default Project;
