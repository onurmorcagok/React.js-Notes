import React, { Component } from "react";

import Search from "./Search";
import MovieList from "./MovieList";
import axios from "axios";

// App.js = Class Component

class App extends Component {
  state = {
    movies: [],
    searchMovie: "",
  };

  // FETCH API

  // async componentDidMount() {
  //   const baseURL = "http://localhost:3001/movies";
  //   const response = await fetch(baseURL);
  //   // console.log(response);
  //   const data = await response.json();
  //   // console.log(data);

  //   this.setState({
  //     movies: data,
  //   });
  // }

  // deleteMovie = async (movie) => {
  //   const baseURL = `http://localhost:3001/movies/${movie.id}`;

  //   await fetch(baseURL, {
  //     method: "DELETE",
  //   });

  //   const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

  //   this.setState(() => ({
  //     movies: newMovieList,
  //   }));

  //   console.log("Movie is removed!");
  // };

  // AXIOS

  async componentDidMount() {
    const response = await axios.get("http://localhost:3001/movies");

    this.setState({
      movies: response.data,
    });
  }

  // AXIOS
  deleteMovie = async (movie) => {
    axios.delete(`http://localhost:3001/movies/${movie.id}`);

    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

    this.setState(() => ({
      movies: newMovieList,
    }));

    console.log("Movie is removed!");
  };

  searcMovieFunc = (e) => {
    // console.log(e.target.value);

    this.setState({
      searchMovie: e.target.value,
    });
  };

  render() {
    let filterMovies = this.state.movies.filter((movie) => {
      return (
        movie.name
          .toLowerCase()
          .indexOf(this.state.searchMovie.toLowerCase()) !== -1
      );
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Search searchMovieProps={this.searcMovieFunc} />
          </div>
        </div>
        <MovieList movies={filterMovies} deleteMovieProps={this.deleteMovie} />
      </div>
    );
  }
}

export default App;
