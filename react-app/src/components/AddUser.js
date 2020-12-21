import React, { Component } from "react";
import posed from "react-pose";

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
  };
  changeVisibility = (e) => {
    this.setState({
      visible: !this.state.visible,
    });
  };
  render() {
    const { visible } = this.state;
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
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    name="name"
                    id="id"
                    placeholder="Enter Name"
                    className="form-control"
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age:</label>
                  <input
                    type="text"
                    name="age"
                    id="age"
                    placeholder="Enter Age"
                    className="form-control"
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="department">Department:</label>
                  <input
                    type="text"
                    name="department"
                    id="department"
                    placeholder="Enter Department"
                    className="form-control"
                  ></input>
                </div>
                <button className="btn btn-success btn-block" type="submit">
                  Add User
                </button>
              </form>
            </div>
          </div>
        </Animation>
      </div>
    );
  }
}

export default AddUser;
