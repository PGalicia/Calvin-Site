/*
    File: _projectList.jsx
    Author: Patrick Galicia
    Desc: Hold all the components that are seen in the 'Project' page
    Path: /project
*/

import React, { Component } from "react";
import { Link } from "react-router-dom";

import Name from "@presentational/_name.jsx";
import Footer from "@presentational/_footer.jsx";

class ProjectList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="test" className="project-list">
        {/* <Name /> */}
        <p className="project-list__label">I am a user experience designer from southern california</p>
        <ul>
          <li>To project 1</li>
          <li>To project 2</li>
          <li>To project 3</li>
          <li>To project 4</li>
        </ul>
        {/* <Footer extraClassImage="footer--list" /> */}
      </section>
    );
  }
}

export default ProjectList;
