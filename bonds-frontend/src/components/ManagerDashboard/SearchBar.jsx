import React from "react";

export const SearchBar = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="d-flex my-5 m-auto">
            <input
              className="form-control m-2 ml-5 w-50 text-center"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>

            <button className="btn btn-sm btn-primary w-25" style={{height: '75%', alignSelf: 'center'}} type="submit">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
