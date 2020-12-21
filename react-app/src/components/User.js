import React, { Component } from "react";
import PropTypes from "prop-types";

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
  onDeleteUser = (dispatch, e) => {
    const { id } = this.props;
    // Consumer, Dispatch
    dispatch({ type: "DELETE_USER", payload: id });
  };
  render() {
    // Destructing Using
    const { name, age, department } = this.props;
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
                      ? { backgroundColor: "#000", color: "#FFF" }
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
  id: PropTypes.string.isRequired,
};

export default User;
