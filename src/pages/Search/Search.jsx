import React, { useEffect, useState } from "react";
import "./Search.css";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";

const apiKey = 'e3a5001'

function Search() {
 const [movies, setMovies] = useState([])


  async function fetchMovies() {
      const { data } = await axios.get("https://www.omdbapi.com/?apikey=e3a5001&s=fast")
      setMovies(data);
      console.log(movies);
    }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
    <Navbar />
      <div className="search">
        <SearchBar />
        <section id="search">
      <div class="progress-bar"></div>
      <div class="filter__wrapper">
        <div class="filter__title"><b>Search results:</b></div>
        <div class="price__filter--wrapper">
          <h2>Year range: <b id="min-value">1960</b> to <b id="max-value">2026</b></h2>
          <div class="slide__container">
            <div class="range__fill"></div>
            <input
              type="range"
              min="1960"
              max="2026"
              value="1960"
              class="min-value"
              id="myRange"
            />
            <input
              type="range"
              min="1960"
              max="2026"
              value="2026"
              class="max-value"
              id="myRange2"
            />
          </div>
        </div>
      </div>
    </section>
    <section id="results">
      <div class="container results__container">
        <div class="movie__wrapper">
          <div class="launcher">
            <h1 class="results__title">Search to launch results!</h1>
            <img class="launch__img" src="assets/rocket.svg" alt="">
          </div>
        </div>
      </div>
    </section>
      </div>
    </>
  );
};

export default Search;
{movies.length > 0 && movies[0]?.Title}