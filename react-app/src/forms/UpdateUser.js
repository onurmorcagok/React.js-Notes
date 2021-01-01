import React, { Component } from "react";
import UserConsumer from "../context";

import axios from "axios";

class UpdateUser extends Component {
  state = {
    name: "",
    age: "",
    department: "",
    error: false,
  };
  inputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  validateForm = () => {
    const { name, age, department } = this.state;

    if (name === "" || age === "" || department === "") {
      return false;
    }
    return true;
  };

  updateUser = async (dispatch, e) => {
    e.preventDefault();

    const { id } = this.props.match.params;
    const { name, age, department } = this.state;

    const updatedUser = {
      name,
      age,
      department,
    };

    if (!this.validateForm()) {
      this.setState({
        error: true,
      });
      return;
    }

    const response = await axios.put(
      `http://localhost:3004/users/${id}`,
      updatedUser
    );

    dispatch({ type: "UPDATE_USER", payload: response.data });

    //Redirect
    this.props.history.push("/");
  };
  componentDidMount = async () => {
    const { id } = this.props.match.params;
    const response = await axios.get(`http://localhost:3004/users/${id}`);

    const { name, age, department } = response.data;

    this.setState({
      name,
      age,
      department,
    });
  };

  render() {
    const { error } = this.state;
    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="col-md-8 mb-4">
              <div className="card">
                <div className="card-header">
                  <h4> Update User Form </h4>
                </div>
                <div className="card-body">
                  {error ? (
                    <div className="alert alert-danger">
                      Please informations check !
                    </div>
                  ) : null}
                  <form onSubmit={this.updateUser.bind(this, dispatch)}>
                    <div className="form-group">
                      <label htmlFor="name">Name:</label>
                      <input
                        type="text"
                        value={this.state.name}
                        name="name"
                        id="id"
                        placeholder="Update Name"
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
                        placeholder="Update Age"
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
                        placeholder="Update Department"
                        className="form-control"
                        onChange={this.inputChange}
                      ></input>
                    </div>
                    <button className="btn btn-danger btn-block" type="submit">
                      Update User
                    </button>
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default UpdateUser;
