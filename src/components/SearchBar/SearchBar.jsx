import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = ({ externalQuery, onSearch }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (externalQuery && externalQuery.trim() !== "") {
    setInput(externalQuery);
    navigate(`/search?q=${encodeURIComponent(externalQuery)}`);
    }
  }, [externalQuery]);

  function handleSearch() {
    const trimmed = input.trim();
    if (!trimmed) return;
    navigate(`/search?q=${encodeURIComponent(trimmed)}`);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  }

  return (
    <div className="search__bar">
      
      <div className="search__wrapper">
        <h1 className="main__title">Browse our movies</h1>
        <div className="search__input-wrapper">
          <input
            className="search__box"
            type="text"
            placeholder="Enter a keyword"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <div className="search__logo" onClick={handleSearch}>
            <a href="#">
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
