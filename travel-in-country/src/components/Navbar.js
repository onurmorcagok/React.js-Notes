import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <b>Country in Travel</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
