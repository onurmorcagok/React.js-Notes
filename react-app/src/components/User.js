import React, { Component } from "react";
import PropTypes from "prop-types";

class User extends Component {
  render() {
    const { name, age, department } = this.props;
    return (
      <div>
        <div className="col-md-8 mb-4">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <h4 className="d-inline">{name} </h4>{" "}
              <i className="fas fa-trash-alt" style={{cursor : "pointer"}}></i>
            </div>
            <div className="card-body">
              <p className="card-text">Age: {age}</p>
              <p className="card-text">Department: {department}</p>
            </div>
          </div>
        </div>
      </div>
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
