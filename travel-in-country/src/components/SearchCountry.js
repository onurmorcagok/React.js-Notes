import React, { Component } from "react";

// Class Component

class SearchCountry extends Component {
  handleFormSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-row my-4">
          <div className="col-lg-12">
            <input
              onChange={this.props.searchCountryProps}
              type="text"
              className="form-control"
              placeholder="Search for a country!"
            ></input>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchCountry;
