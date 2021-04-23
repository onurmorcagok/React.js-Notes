import React, { Component } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

class EditMovie extends Component {
  state = {
    name: "",
    rating: "",
    imageURL: "",
    overview: "",
  };

  async componentDidMount() {
    const id = this.props.match.params.id;

    // console.log(id);

    const response = await axios.get(`http://localhost:3001/movies/${id}`);

    // console.log(response.data);

    const movie = response.data;

    this.setState({
      name: movie.name,
      rating: movie.rating,
      imageURL: movie.imageURL,
      overview: movie.overview,
    });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    const { name, rating, imageURL, overview } = this.state;

    const id = this.props.match.params.id;

    const updatedMovie = {
      name,
      rating,
      imageURL,
      overview,
    };

    this.props.onEditMovie(id, updatedMovie);

    this.props.history.push("/");
  };

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="container">
        <form className="mt-5" onSubmit={this.handleFormSubmit}>
          <Link
            to="/"
            type="button"
            className="btn btn-md btn-danger"
            style={{ float: "right" }}
          >
            Return Home Page
          </Link>
          <h4>Edit Form To Update Selected Movie !</h4>
          <hr />
          <div className="form-row">
            <div className="form-group col-md-10">
              <label htmlFor="inputName">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.onInputChange}
              />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputRating">Rating</label>
              <input
                type="text"
                className="form-control"
                name="rating"
                value={this.state.rating}
                onChange={this.onInputChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="inputImage">Image URL</label>
              <input
                type="text"
                className="form-control"
                name="imageURL"
                value={this.state.imageURL}
                onChange={this.onInputChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="overviewTextarea">Overview</label>
              <textarea
                className="form-control"
                name="overview"
                rows="5"
                value={this.state.overview}
                onChange={this.onInputChange}
              ></textarea>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-success btn-block"
            value="Edit Movie"
          />
        </form>
      </div>
    );
  }
}

export default EditMovie;
