import React, { Component } from "react";
import TodoConsumer from "../context";
import axios from "axios";

class UpdateTodo extends Component {
  state = {
    title: "",
    description: "",
    status: "",
    error: false,
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
  updateTodo = async (dispatch, e) => {
    e.preventDefault();

    const { id } = this.props.match.params;
    const { title, description, status } = this.state;

    const updateTodo = {
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

    const response = await axios.put(
      `http://localhost:3004/todos/${id}`,
      updateTodo
    );

    dispatch({ type: "UPDATE_TODO", payload: response.data });

    //Redirect Using
    this.props.history.push("/");
  };
  componentDidMount = async () => {
    const { id } = this.props.match.params;
    const response = await axios.get(`http://localhost:3004/todos/${id}`);
    const { title, description, status } = response.data;

    this.setState({
      title,
      description,
      status,
    });
  };

  render() {
    const { error } = this.state;
    return (
      <TodoConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="col-md-12 mb-4">
              <div className="card">
                <div className="card-header">
                  <h4>Update Todo</h4>
                </div>
                <div className="card-body">
                  {error ? (
                    <div className="alert alert-danger">
                      Please information check !
                    </div>
                  ) : null}
                  <form onSubmit={this.updateTodo.bind(this, dispatch)}>
                    <div className="form-group">
                      <label htmlFor="title">Title:</label>
                      <input
                        type="text"
                        value={this.state.title}
                        name="title"
                        id="id"
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
                    <button className="btn btn-danger btn-block" type="submit">
                      Update Todo
                    </button>
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </TodoConsumer>
    );
  }
}

export default UpdateTodo;
