import React, { Component } from "react";

class Search extends Component {
  handleFormSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-row my-4">
          <div className="col-12">
            <input
              onChange={this.props.searchMovieProps}
              type="text"
              className="form-control"
              placeholder="Search a movie"
            ></input>
          </div>
        </div>
      </form>
    );
  }
}

export default Search;
