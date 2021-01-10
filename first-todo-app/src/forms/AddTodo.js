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
    visible: true,
    title: "",
    description: "",
    status: "",
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
  validateForm = () => {
    const { title, description, status } = this.state;

    if (title === "" || description === "" || status === "") {
      return false;
    } else {
      return true;
    }
  };
  addTodo = async (dispatch, e) => {
    e.preventDefault();
    const { title, description, status } = this.state;

    const newTodo = {
      title,
      description,
      status,
    };

    if (!this.validateForm()) {
      this.setState({
        error: true,
      });
      return;
    }

    const response = await axios.post("http://localhost:3004/todos", newTodo);

    dispatch({ type: "ADD_TODO", payload: response.data });

    //Redirect
    this.props.history.push("/");
  };
  render() {
    const { visible, error } = this.state;
    return (
      <TodoConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="col-md-12 mb-4">
              <button
                onClick={this.changeVisibilty}
                className="btn btn-danger btn-block mb-2"
              >
                {visible ? "Hide Form" : "Show Form"}
              </button>
              <Animation pose={visible ? "visible" : "hidden"}>
                <div className="card">
                  <div className="card-header">
                    <h4>Add Todo</h4>
                  </div>
                  <div className="card-body">
                    {error ? (
                      <div className="alert alert-danger">
                        Please information check !
                      </div>
                    ) : null}
                    <form onSubmit={this.addTodo.bind(this, dispatch)}>
                      <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input
                          type="text"
                          value={this.state.title}
                          name="title"
                          id="title"
                          placeholder="Enter Todo"
                          className="form-control"
                          onChange={this.inputChange}
                        ></input>
                      </div>
                      <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea
                          value={this.state.description}
                          name="description"
                          id="description"
                          placeholder="Enter Description"
                          className="form-control"
                          onChange={this.inputChange}
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <label htmlFor="status">Status:</label>
                        <input
                          type="text"
                          value={this.state.status}
                          name="status"
                          id="status"
                          placeholder="Enter Status"
                          className="form-control"
                          onChange={this.inputChange}
                        ></input>
                      </div>
                      <button
                        className="btn btn-success btn-block"
                        type="submit"
                      >
                        Add Todo
                      </button>
                    </form>
                  </div>
                </div>
              </Animation>
            </div>
          );
        }}
      </TodoConsumer>
    );
  }
}

export default AddTodo;
