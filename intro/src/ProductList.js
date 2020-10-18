import React, { Component } from "react";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.productTitle.title}</h3>
      </div>
    );
  }
}
