import React, { Component } from "react";
import SingleCountry from "./SingleCountry";
import Search from "./Search";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/countries")
      .then((res) => res.json())
      .then((data) => this.setState({ countries: data }));
  }

  render() {
    return (
      <div>
        <Search countries={this.state.countries} />
        {this.state.countries.map((country) => (
          <SingleCountry key={country.alpha2Code} country={country} />
        ))}
      </div>
    );
  }
}
