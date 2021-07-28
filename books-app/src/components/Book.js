import React, { Component } from "react";

import "./Book.css";

class Book extends Component {
  render() {
    return (
      <div className="col-lg-4 col-sm-6 mb-4">
        <div className="portfolio-item">
          <a
            className="portfolio-link"
            data-toggle="modal"
            href="#portfolioModal1"
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img
              className="img-fluid"
              src={this.props.book.imageURL}
              alt=""
            ></img>
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">
              {this.props.book.title}
            </div>
            <div className="portfolio-caption-subheading">
              <b>{this.props.book.author}</b>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
