import React from "react";

import { Link } from "react-router-dom";

// Functional Component

const CountryList = (props) => {
  return (
    <div className="row">
      {props.countries.map((country, id) => (
        <div className="col-lg-4" key={id}>
          <div
            className="card mb-4 shadow-sm"
            style={{ height: "750px", textAlign: "center" }}
          >
            <img
              src={country.flag}
              className="card-img-top"
              alt="Country Flag"
              style={{ height: "230px" }}
            />
            <div className="card-body">
              <div
                className="my-3 d-flex justify-content-between align-items-center"
                style={{ height: "50px", textAlign: "center" }}
              >
                <h4
                  className="card-title mx-auto"
                  style={{ fontWeight: "bold" }}
                >
                  {country.name}
                </h4>
              </div>
              <hr />
              <span
                className="badge badge-warning"
                style={{ fontSize: "15px", float: "right" }}
              >
                {country.alpha3Code}
              </span>
              <h6 className="card-code">Native Name: {country.nativeName}</h6>
              <h6 className="card-population">
                Population: {country.population.toLocaleString("en-US")}
              </h6>
              <h6 className="card-capital">Capital: {country.capital}</h6>
              <h6 className="card-languages">
                Languages:{" "}
                {country.languages.map((l) => `${l.name}`).join(", ")}
              </h6>
              <h6 className="card-currencies">
                Currencies:{" "}
                {country.currencies.map((c) => `${c.name} (${c.code})`)}
              </h6>
              <h6 className="card-region">
                Region: {country.region} / {country.subregion}
              </h6>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <Link to="/add" type="button" className="btn btn-md btn-info">
                  <i className="fas fa-comment"></i>
                </Link>
                <Link
                  to={`/edit/${country.name}`}
                  type="button"
                  className="btn btn-md btn-success"
                >
                  <i className="fas fa-user-edit"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
