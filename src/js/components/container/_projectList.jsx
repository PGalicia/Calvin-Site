/*
    File: _projectList.jsx
    Author: Patrick Galicia
    Desc: Hold all the components that are seen in the 'Project' page
    Path: /project
*/

import React, { Component } from "react";
import { Link } from "react-router-dom";

import Name from "@presentational/_name.jsx";

class ProjectList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Name />
        <h1>Project List page</h1>
        <ul>
          <li>
            <Link className="banner__route center-content--x" to="/project/1">
              To project 1
            </Link>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default ProjectList;
