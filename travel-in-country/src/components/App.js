import React, { Component } from "react";

import CountryList from "./CountryList";
import SearchCountry from "./SearchCountry";
import Navbar from "./Navbar";

import axios from "axios";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Country from "./Country";

class App extends Component {
  state = {
    countries: [],
    searchCountry: "",
  };

  componentDidMount() {
    this.getCountryList();
  }

  async getCountryList() {
    const response = await axios.get(`https://restcountries.com/v2/all`);

    this.setState({
      countries: response.data,
    });
  }

  searchCountry = (e) => {
    this.setState({
      searchCountry: e.target.value,
    });
  };

  render() {
    let filterCountries = this.state.countries.filter((country) => {
      return (
        country.name
          .toLowerCase()
          .indexOf(this.state.searchCountry.toLowerCase()) !== -1
      );
    });

    return (
      <Router>
        <div className="container">
          <Navbar />
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <React.Fragment>
                  <div className="row">
                    <div className="col-lg-12">
                      <SearchCountry searchCountryProps={this.searchCountry} />
                    </div>
                  </div>
                  <CountryList countries={filterCountries} />
                </React.Fragment>
              )}
            ></Route>
            <Route path="/countries/:name" children={<Country />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
