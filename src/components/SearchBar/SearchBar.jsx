import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search__bar">
      
      <div className="search__wrapper">
        <h1 className="main__title">Browse our movies</h1>
        <input
          className="search__box"
          type="text"
          placeholder="Enter a keyword"
          id="keyword"
        />
        <div className="search__logo">
          <a href="#" id="search-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
