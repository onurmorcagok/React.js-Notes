import React, { Component } from "react";

import { Link } from "react-router-dom";

// Class Component
class Search extends Component {
  handleFormSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-row my-4">
          <div className="col-10">
            <input
              onChange={this.props.searchMovieProps}
              type="text"
              className="form-control"
              placeholder="Search a movie"
            ></input>
          </div>
          <div className="col-2">
            <Link
              to="/add"
              type="button"
              className="btn btn-md btn-warning"
              style={{ float: "right" }}
            >
              Add Movie
            </Link>
          </div>
        </div>
      </form>
    );
  }
}

export default Search;
