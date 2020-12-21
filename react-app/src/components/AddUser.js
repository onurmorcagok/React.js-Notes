import React, { Component } from "react";
import posed from "react-pose";
import UserConsumer from "../context";

var uniqid = require("uniqid"); // Random ID Creator

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

class AddUser extends Component {
  state = {
    visible: false,
    name: '',
    age: '',
    department: '',
  };
  changeVisibility = (e) => {
    this.setState({
      visible: !this.state.visible,
    });
  };
  inputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  addUser = (dispatch, e) => {
    e.preventDefault();
    const { name, age, department } = this.state;

    const newUser = {
      id: uniqid(),
      name,
      age,
      department,
    };
    dispatch({ type: "ADD_USER", payload: newUser });
  };
  render() {
    const { visible } = this.state;

    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="col-md-8 mb-4">
              <button
                onClick={this.changeVisibility}
                className="btn btn-danger btn-block mb-2"
              >
                {visible ? "Hide Form" : "Show Form"}
              </button>
              <Animation pose={visible ? "visible" : "hidden"}>
                <div className="card">
                  <div className="card-header">
                    <h4> Add User Form </h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit={this.addUser.bind(this, dispatch)}>
                      <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                          type="text"
                          value={this.state.name}
                          name="name"
                          id="id"
                          placeholder="Enter Name"
                          className="form-control"
                          onChange={this.inputChange}
                        ></input>
                      </div>
                      <div className="form-group">
                        <label htmlFor="age">Age:</label>
                        <input
                          type="text"
                          value={this.state.age}
                          name="age"
                          id="age"
                          placeholder="Enter Age"
                          className="form-control"
                          onChange={this.inputChange}
                        ></input>
                      </div>
                      <div className="form-group">
                        <label htmlFor="department">Department:</label>
                        <input
                          type="text"
                          value={this.state.department}
                          name="department"
                          id="department"
                          placeholder="Enter Department"
                          className="form-control"
                          onChange={this.inputChange}
                        ></input>
                      </div>
                      <button
                        className="btn btn-success btn-block"
                        type="submit"
                      >
                        Add User
                      </button>
                    </form>
                  </div>
                </div>
              </Animation>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default AddUser;
