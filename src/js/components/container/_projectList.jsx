/*
    File: _projectList.jsx
    Author: Patrick Galicia
    Desc: Hold all the components that are seen in the 'Project' page
    Path: /project
*/

import React, { Component } from "react";

import nameImg from "@assets/name.png";

class ProjectList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <img
          className="name name--project-list center-content--x"
          src={nameImg}
        />
        <h1>Project List page</h1>
        <ul>
          <li>Project1</li>
        </ul>
      </React.Fragment>
    );
  }
}

export default ProjectList;
