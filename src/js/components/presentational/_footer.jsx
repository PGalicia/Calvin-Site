/*
    File: _footer.jsx
    Author: Patrick Galicia
    Desc: The clouds and the thinking gent
*/

import React, { Component } from "react";
import { Link } from "react-router-dom";

// Images
import telescopeManImg from "@assets/telescope-man.png";
import contactBubbleImg from "@assets/contact-bubble.svg";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isContactListShowing: false
    }

    this.toggleContactList = this.toggleContactList.bind(this);
  }

  toggleContactList() {
    this.setState({ isContactListShowing : !this.state.isContactListShowing });
    // console.log('clikc');
  }

  render() {
    const footerListContainerStyles = {
      backgroundImage: `url(${contactBubbleImg})`
    }

    return (
      <footer className="footer">
        <ul className={`footer__list ${this.state.isContactListShowing ? "display-block" : "display-none"}`} style={footerListContainerStyles}>
          <li>
            <a href="https://www.facebook.com/rajredrobin" target="_blank">email</a>
          </li>
          <li>
            <a href="https://www.facebook.com/rajredrobin" target="_blank">instagram</a>  
          </li>
          <li>
          <a href="https://www.facebook.com/rajredrobin" target="_blank">linkedin</a>
          </li>
        </ul>
        <img className="footer__telescope" src={telescopeManImg} alt="Telescope Man" onClick={this.toggleContactList} />
        <p className={`footer__label ${this.state.isContactListShowing ? "footer__label--hide" : "footer__label"}`}>contact me</p>
      </footer>
    );
  }
};

export default Footer;
