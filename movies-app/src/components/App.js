import React, { Component } from "react";

import Search from "./Search";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";

import axios from "axios";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

    console.log("Selected movie is removed!");
  };

  searcMovie = (e) => {
    this.setState({
      searchMovie: e.target.value,
    });
  };

  addMovie = async (movie) => {
    await axios.post(`http://localhost:3001/movies/`, movie);

    this.setState((state) => ({
      movies: state.movies.concat([movie]),
    }));
  };

  render() {
    let filterMovies = this.state.movies
      .filter((movie) => {
        return (
          movie.name
            .toLowerCase()
            .indexOf(this.state.searchMovie.toLowerCase()) !== -1
        );
      })
      .sort((a, b) => {
        return a.id < b.id ? 1 : b.id < a.id ? -1 : 0;
      });

    return (
      <Router>
        <div className="container">
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <React.Fragment>
                  <div className="row">
                    <div className="col-lg-12">
                      <Search searchMovieProps={this.searcMovie} />
                    </div>
                  </div>
                  <MovieList
                    movies={filterMovies}
                    deleteMovieProps={this.deleteMovie}
                  />
                </React.Fragment>
              )}
            ></Route>

            <Route
              path="/add"
              render={({ history }) => (
                <AddMovie
                  onAddMovie={(movie) => {
                    this.addMovie(movie);
                    history.push("/");
                  }}
                />
              )}
            ></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
