import React, { Component } from "react";

import Search from "./Search";
import MovieList from "./MovieList";

class App extends Component {
  state = {
    movies: [
      {
        id: 1,
        name: "Troy",
        rating: "7.2",
        summary:
          "While the Civil War rages between the Union and the Confederacy, three men – a quiet loner, a ruthless hit man and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
        imageURL:
          "https://image.tmdb.org/t/p/original//zda0VWRKHnUSX7B7NOPqVUlu9zK.jpg",
      },
      {
        id: 2,
        name: "The Godfather",
        rating: "9",
        summary:
          "While the Civil War rages between the Union and the Confederacy, three men – a quiet loner, a ruthless hit man and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
        imageURL:
          "https://image.tmdb.org/t/p/original//3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      },
      {
        id: 3,
        name: "The Good, the Bad and the Ugly",
        rating: "8.5",
        summary:
          "While the Civil War rages between the Union and the Confederacy, three men – a quiet loner, a ruthless hit man and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
        imageURL:
          "https://image.tmdb.org/t/p/original//eWivEg4ugIMAd7d4uWI37b17Cgj.jpg",
      },
      {
        id: 4,
        name: "The Mask of Zorro",
        rating: "6.5",
        summary:
          "While the Civil War rages between the Union and the Confederacy, three men – a quiet loner, a ruthless hit man and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
        imageURL:
          "https://image.tmdb.org/t/p/original//bdMufwGDDzqu4kTSQwrKc5WR4bu.jpg",
      },
      {
        id: 5,
        name: "The Shawshank Redemption",
        rating: "8.8",
        summary:
          "While the Civil War rages between the Union and the Confederacy, three men – a quiet loner, a ruthless hit man and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
        imageURL:
          "https://image.tmdb.org/t/p/original//q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      },
      {
        id: 6,
        name: "Pirates of the Caribbean: The Curse of the Black Pearl",
        rating: "7.7",
        summary:
          "While the Civil War rages between the Union and the Confederacy, three men – a quiet loner, a ruthless hit man and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
        imageURL:
          "https://image.tmdb.org/t/p/original//z8onk7LV9Mmw6zKz4hT6pzzvmvl.jpg",
      },
    ],

    searchMovie: "",
  };

  deleteMovie = (movie) => {
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

    // this.setState({
    //   movies: newMovieList,
    // });

    this.setState((state) => ({
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
