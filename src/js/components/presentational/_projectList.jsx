/*
    File: _projectList.jsx
    Author: Patrick Galicia
    Desc: Hold all the components that are seen in the 'Project' page
    Path: /project
*/

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toggleNameSize, toggleAboutSection } from "@reducer";

// Components
import Footer from "@presentational/_footer.jsx";
import About from "@presentational/_about.jsx";

// Images
import cocktailButtonImg from "@assets/project-list-button/cocktail.svg";
import craigslistButtonImg from "@assets/project-list-button/craigslist.svg";
import empethyButtonImg from "@assets/project-list-button/empethy.svg";
import hciButtonImg from "@assets/project-list-button/hci.svg";


// Redux
const mapStateToProps = state => ({
  isAboutSectionShowing: state.isAboutSectionShowing
});

const mapDispatchToProps = dispatch => ({
  toggleNameSize: bool => dispatch(toggleNameSize(bool)),
  toggleAboutSection: bool => dispatch(toggleAboutSection(bool))
});

class ProjectList extends Component {
  constructor(props) {
    super(props);

    this.container = React.createRef();

    this.onScoll = this.onScoll.bind(this);
    this.toggleAboutView = this.toggleAboutView.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScoll, false);
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

  toggleAboutView() {
    let isAboutSectionShowing = !this.props.isAboutSectionShowing

    if(isAboutSectionShowing) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    this.props.toggleAboutSection(!this.props.isAboutSectionShowing);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  render() {
    return (
      <section
        id="test"
        ref={this.container}
        className="project-list"
      >

        <div className="project-list__who" onClick={this.toggleAboutView}>who?</div>
        
        {this.props.isAboutSectionShowing === true &&
          <div className="project-list__button" onClick={this.toggleAboutView}>back</div>
        }

        {this.props.isAboutSectionShowing === false &&

          <React.Fragment>
            <div className="project-list__content">
              <p className="project-list__label">
                I am a <mark>user experience designer</mark> from southern california
              </p>
              <ul className="project-list__projects">

                {/* @TODO: Find a better way to load this -- make it dynamic */}
                <li className="project-list__project">
                  {/* <Link to="/project/1"> */}
                    <img src={hciButtonImg} alt="Healthy Campus Initiative"/>
                  {/* </Link> */}
                </li>

                <li className="project-list__project">
                  {/* <Link to="/project/2"> */}
                    <img src={cocktailButtonImg} alt="Cocktail Finder"/>
                  {/* </Link> */}
                </li>

                <li className="project-list__project">
                  {/* <Link to="/project/3"> */}
                    <img src={empethyButtonImg} alt="Empethy"/>
                  {/* </Link> */}
                </li>

                <li className="project-list__project">
                  {/* <Link to="/project/4"> */}
                    <img src={craigslistButtonImg} alt="Craigslist"/>
                  {/* </Link> */}
                </li>
              </ul>
            </div>

            <Footer />
          </React.Fragment>
        }

        {this.props.isAboutSectionShowing === true &&
          <About />
        }

      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
