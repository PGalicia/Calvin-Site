/*
    File: _home.jsx
    Author: Patrick Galicia
    Desc: Hold all the components that are seen in the homepage
    Path: /
*/

// Imports
import React, { Component } from "react";
import { connect } from "react-redux";
import { printText } from "@reducer";

import Banner from "@presentational/_banner.jsx";

// Redux
const mapStateToProps = state => ({
  printedText: state.printedText
});

const mapDispatchToProps = dispatch => ({
  printText: text => dispatch(printText(text))
});

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: ""
    };

    // Bindings
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.printText(this.state.inputText);
  }

  handleInputChange(event) {
    event.preventDefault();
    this.setState({ inputText: event.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <Banner />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          provident aut architecto odit ut, enim laudantium debitis doloremque
          suscipit distinctio, saepe illum velit fugiat adipisci ducimus quam
          fugit, laborum non! Consequuntur repudiandae incidunt eligendi harum
          soluta autem doloremque nam, corrupti, amet illum doloribus eius
          eveniet et suscipit recusandae ex unde officia non totam placeat
          labore. Inventore explicabo veritatis saepe quod. Pariatur dolor rem
          dolorum, explicabo nihil eveniet, aliquam dolore sunt maiores hic,
          veritatis dolorem iure molestias vel. Reiciendis consequuntur,
          voluptates animi quos illo, cumque corrupti accusamus, consequatur
          distinctio dolorum nemo?
        </p>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;
