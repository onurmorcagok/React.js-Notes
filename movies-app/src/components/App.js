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
    ],
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Search />
            <MovieList movies={this.state.movies} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
