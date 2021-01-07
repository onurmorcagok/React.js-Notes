import React, { Component } from "react";
import posed from "react-pose";
import TodoConsumer from "../context";
import axios from "axios";

const Animation = posed.div({
  visible: {
    opacity: 1,
    applyAtStart: {
      display: "block",
    },
  },
  hidden: {
    opacity: 0,
    applyAtEnd: {
      display: "none",
    },
  },
});

class AddTodo extends Component {
  state = {
    visible: false,
    ID: "",
    Title: "",
    error: "",
  };
  changeVisibilty = (e) => {
    this.setState({
      visible: !this.state.visible,
    });
  };
  inputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return <div></div>;
  }
}

export default AddTodo;
