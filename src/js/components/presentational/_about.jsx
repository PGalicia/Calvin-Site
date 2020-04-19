/*
    File: _about.jsx
    Author: Patrick Galicia
    Desc: Hold all the components that are seen in the about page
    Path: /
*/

// Imports
import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleAboutSection } from "@reducer";

// Image Import
import sexyRaj from "@assets/nuke-raj.jpg";

// Redux
const mapStateToProps = state => ({
  isAboutSectionShowing: state.isAboutSectionShowing
});

const mapDispatchToProps = dispatch => ({
  toggleAboutSection: bool => dispatch(toggleAboutSection(bool))
});

class About extends Component {
  constructor(props) {
    super(props);

    this.toggleShowingSection = this.toggleShowingSection.bind(this);
  }

  toggleShowingSection() {
    this.setState({ isAboutShowing : !this.state.isAboutShowing }); 
  }

  render() {
    return (
      <div className="about">
        <p className="about__intro">
          Hi Calvin! I've been well and thank you, you're too kind. 
          I hope you and your family are doing fine and to cheer you 
          up in this dark times, here's a photo of a photo of a legend.
        </p>

        <div className="about__image">
          <img src={sexyRaj}/>
        </div>

        <div className="about__list">
          <p>Here are some more interestings things about me:</p>

          <ul>
            <li>I have completed Bastion</li>
            <li>I have a playlist called "That time of night" </li>
            <li>I have designed a couple of amazing web app</li>
            <li>I consider myself as an expert rock-paper-scissors champion</li>
          </ul>
        </div>
        
      </div>
    );

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
