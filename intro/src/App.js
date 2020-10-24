import React, { Component } from "react";
import Navbar from "./Navbar";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import NotFound from "./NotFound";
import CartList from "./CartList";

import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";

import { Switch, Route } from "react-router-dom";

export default class App extends Component {
  state = {
    currenctCategory: "",
    products: [],
    cart: [],
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

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(
      (cartItem) => cartItem.product.id === product.id
    );
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });

    alertify.success(product.productName + " added to cart.", 2);
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(
      (cartItem) => cartItem.product.id !== product.id
    );
    this.setState({ cart: newCart });

    alertify.error(product.productName + " removed from cart.", 2);

  };

  render() {
    let productInfo = { title: "ProductList" };
    let categoryInfo = { title: "CategoryList" };
    return (
      <div>
        <Container>
          <Navbar removeFromCart={this.removeFromCart} cart={this.state.cart} />
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                categoryTitle={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <ProductList
                      {...props}
                      products={this.state.products}
                      addToCart={this.addToCart}
                      currentCategory={this.state.currentCategory}
                      changeCategory={this.changeCategory}
                      productTitle={productInfo}
                    />
                  )}
                ></Route>
                <Route exact path="/cart" render={(props) => (
                    <CartList
                      {...props}
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                    />
                  )}></Route>
                <Route component={NotFound}></Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
