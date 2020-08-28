import React from "react";

const Search = (props)=> {
    return (
        <div>
            <nav>
              <div className="nav-wrapper">
              {console.log(props)}
                <form>
                  <div className="input-field">
                    <input id="search" type="search" />
                    <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                    <i className="material-icons">close</i>
                  </div>
                </form>
              </div>
            </nav>
        </div>
    )
  }
  export default Search;




