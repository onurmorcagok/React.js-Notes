import React, { Component } from "react";
import Todo from "./Todo";

import TodoConsumer from "../context";

class Todos extends Component {
  render() {
    return (
      <TodoConsumer>
        {(value) => {
          const { todos } = value;
          return (
            <div>
              {todos.map((todo) => {
                return (
                  <Todo
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    description={todo.description}
                    status={todo.status}
                  ></Todo>
                );
              })}
            </div>
          );
        }}
      </TodoConsumer>
    );
  }
}

export default Todos;