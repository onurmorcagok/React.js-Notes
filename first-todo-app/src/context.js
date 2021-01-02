import axios from "axios";
import React, { Component } from "react";

const TodoContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export class TodoProvider extends Component {
  state = {
    todos: [],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };
  componentDidMount = async () => {
    const response = await axios.get("http://localhost:3004/todos");
    this.setState({
      todos: response.data,
    });
  };

  render() {
    return (
      <TodoContext.Provider value={this.state}>
        {this.props.children}
      </TodoContext.Provider>
    );
  }
}

const TodoConsumer = TodoContext.Consumer;

export default TodoConsumer;
