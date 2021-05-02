import React, { Component } from "react";

import CountryList from "./CountryList";
import SearchCountry from "./SearchCountry";

import axios from "axios";

class App extends Component {
  state = {
    countries: [],
    searchCountry: "",
  };

  componentDidMount() {
    this.getCountryList();
  }

  async getCountryList() {
    const response = await axios.get(`https://restcountries.eu/rest/v2/all`);

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
      <div className="container">
        <SearchCountry searchCountryProps={this.searchCountry} />
        <CountryList countries={filterCountries} />
      </div>
    );
  }
}

export default App;
