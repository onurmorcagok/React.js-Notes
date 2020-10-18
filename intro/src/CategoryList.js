import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: [
      { categoryId: 1, categoryName: "iPhone" },
      { categoryId: 2, categoryName: "Samsung" },
      { categoryId: 3, categoryName: "Huawei" },
      { categoryId: 4, categoryName: "Xiaomi" },
      { categoryId: 5, categoryName: "Oppo" },
    ],
    currenctCategory: "",
  };

  changeCategory = (category) => {
    this.setState({ currenctCategory : category.categoryName });
  };

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem onClick={() => {this.changeCategory(category)}} key={category.categoryId}>
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
          <h4>{this.state.currenctCategory}</h4>
      </div>
    );
  }
}
