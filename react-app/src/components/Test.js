import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    //console.log(this.props);

    this.state = {
      number: 10,
    };
    console.log("Constructor");
  }
  componentDidMount() {
    // Component Mount from after executing !

    // API Requests using
    console.log("componentDidMount");

    this.setState = {
      number: 20,
    };
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return false;
  }

  render() {
    console.log("Render");

    return <div></div>;
  }
}

export default Test;
