import React, { Component } from "react";
import Book from "./Book";

import BookContext from '../contexts/BookContext';

import "./BookList.css";
class BookList extends Component {

  static contextType = BookContext;

  render() {

    // console.log(this.context);

    const books = this.context;

    return (
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Books App</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit! Tenetur,
              quo?
          </h3>
          </div>
          <div className="row">
            {
              books.map((book, i) => {
                return <Book book={book} key={i} />;
              })
            }
          </div>
        </div>
      </section>
    );
  }
}

export default BookList;
