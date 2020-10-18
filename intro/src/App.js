import React, { Component } from "react";
import Navbar from "./Navbar";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";

import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = {
    currenctCategory: "",
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  render() {
    let productInfo = { title: "ProductList" };
    let categoryInfo = { title: "CategoryList" };
    return (
      <div>
        <Container>
          <Row>
            <Navbar />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                categoryTitle={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <ProductList
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                productTitle={productInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
