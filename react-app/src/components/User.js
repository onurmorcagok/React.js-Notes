import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import axios from "axios";

import UserConsumer from "../context";

class User extends Component {
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
  onDeleteUser = async (dispatch, e) => {
    const { id } = this.props;

    await axios.delete(`http://localhost:3004/users/${id}`);

    // Consumer, Dispatch Using
    dispatch({ type: "DELETE_USER", payload: id });
  };

  componentWillUnmount() {
    // console.log("componentWillUnmount Method Executing");
  }

  render() {
    // Destructing Using
    const { id, name, age, department } = this.props;
    const { isVisible } = this.state;

    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div>
              <div className="col-md-8 mb-4">
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
                      {name}
                    </h4>
                    <i
                      onClick={this.onDeleteUser.bind(this, dispatch)}
                      className="fas fa-trash-alt"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </div>
                  {isVisible ? (
                    <div className="card-body">
                      <p className="card-text">Age: {age}</p>
                      <p className="card-text">Department: {department}</p>
                      <Link
                        to={`updateUser/${id}`}
                        className="btn btn-dark btn-block"
                      >
                        Update User
                      </Link>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

User.defaultProps = {
  name: "Nothing Info",
  age: "Nothing Info",
  department: "Nothing Info",
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
};

export default User;
