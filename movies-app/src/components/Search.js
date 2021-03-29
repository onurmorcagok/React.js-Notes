import React, { Component } from "react";

// Class Component
class Search extends Component {
  render() {
    return (
      <div className="my-4">
        <input
          className="form-control"
          type="text"
          placeholder="Search a Movie"
        ></input>
      </div>
    );
  }
}

export default Search;
