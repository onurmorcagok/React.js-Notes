import React, { Component } from "react";
import axios from "axios";

const TodoContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => action.payload !== todo.id),
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
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