import React from "react";

// Functional Component

const CountryList = (props) => {
  return (
    <div className="row">
      {props.countries.map((country, id) => (
        <div className="col-lg-4" key={id}>
          <div className="card mb-4 shadow-sm">
            <img
              src={country.flag}
              className="card-img-top"
              alt="Country Flag"
            />
            <div className="card-body">
              <h3 className="card-title">
                {country.name} ({country.nativeName})
              </h3>
              <h6 className="card-code">Code: {country.alpha3Code}</h6>
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
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
