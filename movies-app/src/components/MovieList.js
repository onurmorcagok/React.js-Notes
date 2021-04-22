import React from "react";

import { Link } from "react-router-dom";

const MovieList = (props) => {
  const truncateOverview = (string, maxLength) => {
    if (!string) return null;
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength)} ...`;
  };

  return (
    <div className="row">
      {props.movies.map((movie, i) => (
        <div className="col-lg-4" key={i}>
          <div className="card mb-4 shadow-sm">
            <img
              src={movie.imageURL}
              className="card-img-top"
              alt="sampleMovie"
            />
            <div className="card-body">
              <h5 className="card-title">{movie.name}</h5>
              <p className="card-description">
                {truncateOverview(movie.overview, 150)}
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <Link
                  to={`/edit/${movie.id}`}
                  type="button"
                  className="btn btn-md btn-outline-info"
                >
                  Edit Movie
                </Link>
                <button
                  onClick={(e) => props.deleteMovieProps(movie)}
                  type="button"
                  className="btn btn-md btn-outline-danger"
                >
                  Delete Movie
                </button>
                <h2>
                  <span className="badge badge-warning">{movie.rating}</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
