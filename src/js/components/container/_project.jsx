/*
    File: _project.jsx
    Author: Patrick Galicia
    Desc: Hold all the components that are seen in the specific 'Project' page
    Path: /project/:id
*/

import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleNameSize } from "@reducer";

import Name from "@presentational/_name.jsx";

const mapDispatchToProps = dispatch => ({
  toggleNameSize: bool => dispatch(toggleNameSize(bool))
});

class Project extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.toggleNameSize(true);
    // this.props.history.push('/foo');
  }

  render() {
    return (
      <React.Fragment>
        <Name />
        <h1>Project</h1>
      </React.Fragment>
    );
  }
}

export default connect(null, mapDispatchToProps)(Project);
