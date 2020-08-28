import React from "react";

const SingleCountry= ({ country }) => (
 <div className="col s12s m7">
    <h2 className="header">{country.name}</h2>
    <div className="card horizontal">
      <div className="card-image">
        <img alt={country.name} className="materialboxed" width="20" src={country.flag} />
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <p>Capital: {country.capital}</p>
          <p>Population: {country.population}</p>
          <p>Region :{country.region}</p>
          <p>Subregion :{country.subregion}</p>
          <p>Native Name: {country.nativeName}</p>
        </div>
      </div>
    </div>
  </div>

);

export default SingleCountry;
