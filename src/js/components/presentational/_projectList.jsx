/*
    File: _projectList.jsx
    Author: Patrick Galicia
    Desc: Hold all the components that are seen in the 'Project' page
    Path: /project
*/

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toggleNameSize } from "@reducer";

import Name from "@presentational/_name.jsx";
import Footer from "@presentational/_footer.jsx";

// Redux
const mapStateToProps = state => ({
  isProjectListInView: state.isProjectListInView
});

const mapDispatchToProps = dispatch => ({
  toggleNameSize: bool => dispatch(toggleNameSize(bool))
});

class ProjectList extends Component {
  constructor(props) {
    super(props);

    this.container = React.createRef();

    this.onScoll = this.onScoll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScoll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScoll() {
    // console.log(window.pageYOffset);

    // This is the buffer given with the container position
    // to allow smoother transition
    const OFFSET = 250;

    // When the scroll position reach the top of the container,
    // do the following
    if (window.pageYOffset >= (this.container.current.offsetTop - OFFSET)) {
      console.log('scrolling');
      this.props.toggleNameSize(true);
    } else {
      this.props.toggleNameSize(false);
    }

  }

  render() {
    return (
      <section
        id="test"
        ref={this.container}
        className="project-list"
      >
        {/* <Name /> */}
        <p className="project-list__label">
          I am a <mark>user experience designer</mark> from southern california
        </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
