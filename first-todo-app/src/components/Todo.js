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

    dispatch({ type: "DELETE_TODO", payload: id });
  };

  render() {
    const { id, title, description, status } = this.props;
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
                      <p className="card-text">ID: {id} </p>
                      <p className="card-text">Title: {title} </p>
                      <p className="card-text">Description: {description} </p>
                      <p className="card-text">Status: {status} </p>
                      <Link
                        to={`updateTodo/${id}`}
                        className="btn btn-success btn-block"
                      >
                        <i class="fas fa-pencil-alt my-auto"></i> Update Todo
                        
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

// Todo.defaultProps = {
//   title: "Nothing Info",
//   completed: "Nothing Info",
// };

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  //completed: PropTypes.bool.isRequired,
};

export default Todo;
