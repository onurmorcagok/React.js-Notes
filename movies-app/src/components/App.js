import React, { Component } from "react";

import Search from "./Search";
import MovieList from "./MovieList";
import axios from "axios";

require("dotenv").config();

class App extends Component {
  state = {
    movies: [],
    searchMovie: "",
  };

  async componentDidMount() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/list/7092933?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    console.log(response.data.items);

    this.setState({
      movies: response.data.items,
    });
  }

  deleteMovie = async (movie) => {
    axios.post(
      `https://api.themoviedb.org/3/list/7092933/remove_item?media_id=${movie.id}&session_id=${process.env.REACT_APP_SESSION_ID}&api_key=${process.env.REACT_APP_API_KEY}`
    );

    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

    this.setState(() => ({
      movies: newMovieList,
    }));

    console.log("Selected movie is removed!");
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
        movie.title
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
