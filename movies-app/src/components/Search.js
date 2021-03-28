import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="my-4">
        <input
          className="form-control"
          type="text"
          placeholder="Search Movie"
        ></input>
      </div>
    );
  }
}

export default Search;
