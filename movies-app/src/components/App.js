import React, { Component } from "react";

import Search from "./Search";
import MovieList from "./MovieList";
import axios from "axios";

class App extends Component {
  state = {
    movies: [],
    searchMovie: "",
  };

  async componentDidMount() {
    const response = await axios.get("http://localhost:3001/movies");

    this.setState({
      movies: response.data,
    });
  }

  deleteMovie = async (movie) => {
    axios.delete(`http://localhost:3001/movies/${movie.id}`);

    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

    this.setState(() => ({
      movies: newMovieList,
    }));

    console.log("Movie is removed!");
  };

  searcMovieFunc = (e) => {
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
