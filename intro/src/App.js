import React from "react";
import Navbar from "./Navbar";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";

import { Container, Row, Col } from "reactstrap";

function App() {

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
            <CategoryList categoryTitle={productInfo} />
          </Col>
          <Col xs="9">
            <ProductList productTitle={categoryInfo} />
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
