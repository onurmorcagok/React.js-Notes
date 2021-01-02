import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import axios from "axios";

import TodoConsumer from "../context";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };
  }
  onClickEvent = (e) => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };
  onDeleteTodo = async (dispatch, e) => {
    const { id } = this.props;

    await axios.delete(`http://localhost:3004/todos/${id}`);

    dispatch({ type: "DELETE_USER", payload: id });
  };

  render() {
    const { id, title } = this.props;
    const { isVisible } = this.state;
    return (
      <TodoConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div>
              <div className="col-md-12 mb-4">
                <div
                  className="card"
                  style={
                    isVisible
                      ? { backgroundColor: "lightgray", color: "#000" }
                      : null
                  }
                >
                  <div className="card-header d-flex justify-content-between">
                    <h4 className="d-inline" onClick={this.onClickEvent}>
                      {title}
                    </h4>
                    <i
                      onClick={this.onDeleteTodo.bind(this, dispatch)}
                      className="fas fa-trash-alt my-auto"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </div>
                  {isVisible ? (
                    <div className="card-body">
                      <p className="card-text">ID: {id}</p>
                      <p className="card-text">Title: {title}</p>
                      <Link
                        to={`updateTodo/${id}`}
                        className="btn btn-dark btn-block"
                      >
                        Update Todo
                      </Link>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          );
        }}
      </TodoConsumer>
    );
  }
}

export default Todo;

// Todo.defaultProps = {
//   title: "Nothing Info",
//   completed: "Nothing Info",
// };

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
