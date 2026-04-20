import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./Search.css";
import Navbar from "../../components/Navbar/Navbar";
import Rocket from "../../assets/rocket.svg";

const MIN_YEAR = 1960;
const MAX_YEAR = 2026;

const Search = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [keyword, setKeyword] = useState("");
  const [allMovies, setAllMovies] = useState([]);
  const [minYear, setMinYear] = useState(MIN_YEAR);
  const [maxYear, setMaxYear] = useState(MAX_YEAR);
  const [searchedKeyword, setSearchedKeyword] = useState("");
  const rangeFillRef = useRef(null);
  const [rocketStyle, setRocketStyle] = useState(null);
  const [sortOrder, setSortOrder] = useState("yearOrder");

  useEffect(() => {
    const q = searchParams.get("q");
    if (q) {
      setKeyword(q);
      fetchMoviesForQuery(q);
    }
  }, [searchParams]);

  async function fetchMoviesForQuery(query) {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return;
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=e3a5001&s=${encodeURIComponent(trimmed)}`,
      );
      if (!response.ok) throw new Error("Could not find movies");
      const data = await response.json();
      setAllMovies(data.Search || []);
      setSearchedKeyword(trimmed);
    } catch (error) {
      console.error(error);
    }
  }

  function handleCardClick(movie, e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const startX = rect.left + rect.width / 2 - 50;
    const startY = rect.top;

    setRocketStyle({
      left: startX + "px",
      top: startY + "px",
      opacity: 1,
    });

    requestAnimationFrame(() => {
      setRocketStyle({
        left: startX + "px",
        top: "-300px",
        opacity: 1,
      });
    });

    setTimeout(() => {
      setRocketStyle(null);
      navigate("/movieInfo", { state: movie });
    }, 800);
  }

  // Compute the filtered movies from state
  const filteredMovies = allMovies
    .filter((movie) => {
      const year = parseInt(movie.Year);
      return year >= minYear && year <= maxYear;
    })
    .sort((a, b) => {
      if (sortOrder === "ascending") {
        return parseInt(a.Year) - parseInt(b.Year);
      } else if (sortOrder === "descending") {
        return parseInt(b.Year) - parseInt(a.Year);
      }
      return 0;
    });

  // Build the filter title from state
  const filterTitle = searchedKeyword
    ? `<b>Search results:</b> ${searchedKeyword} (years: ${minYear}-${maxYear})`
    : `<b>Search results:</b> (years: ${minYear}-${maxYear})`;

  // Update range fill bar style
  function getRangeFillStyle() {
    const range = MAX_YEAR - MIN_YEAR;
    const low = Math.min(minYear, maxYear);
    const high = Math.max(minYear, maxYear);
    const leftPct = ((low - MIN_YEAR) / range) * 100;
    const widthPct = ((high - MIN_YEAR) / range) * 100 - leftPct;
    return { left: leftPct + "%", width: widthPct + "%" };
  }

  // Handle min slider change
  function handleMinChange(e) {
    let val = parseInt(e.target.value);
    if (val > maxYear) val = maxYear;
    setMinYear(val);
  }

  // Handle max slider change
  function handleMaxChange(e) {
    let val = parseInt(e.target.value);
    if (val < minYear) val = minYear;
    setMaxYear(val);
  }

  // Fetch movies from OMDB API
  async function fetchMovies() {
    await fetchMoviesForQuery(keyword);
    if (!keyword.trim()) {
      alert("Please enter a search keyword.");
    }
  }

  // Handle search on Enter key
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      fetchMovies();
    }
  }

  // Handle search logo click
  function handleSearchClick(e) {
    e.preventDefault();
    fetchMovies();
  }

  return (
    <>
      <Navbar />
      <div className="search">
        <section className="hero">
          <h1 className="main__title">Browse our movies</h1>
          <div className="search__wrapper">
            <input
              className="search__box"
              type="text"
              placeholder="Enter a keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <div className="search__logo" onClick={handleSearchClick}>
              <a href="#">
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
            </div>
          </div>
        </section>
        <section id="search">
          {/* <div className="progress-bar"></div> */}
          <div className="filter__wrapper">
            <div
              className="filter__title"
              dangerouslySetInnerHTML={{ __html: filterTitle }}
            />
            <div className="price__filter--wrapper">
              <h2>
                Year range: <b>{minYear}</b> to <b>{maxYear}</b>
              </h2>
              <div className="slide__container">
                <div className="range__fill" style={getRangeFillStyle()} />
                <input
                  type="range"
                  min={MIN_YEAR}
                  max={MAX_YEAR}
                  value={minYear}
                  className="min-value"
                  onChange={handleMinChange}
                />
                <input
                  type="range"
                  min={MIN_YEAR}
                  max={MAX_YEAR}
                  value={maxYear}
                  className="max-value"
                  onChange={handleMaxChange}
                />
              </div>
            </div>
          </div>
        </section>
        <section id="results">
          <select
            name="year-order"
            id="yo-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="yearOrder">Sort by year?</option>
            <option value="ascending">Oldest to newest</option>
            <option value="descending">Newest to oldest</option>
          </select>
          <div className="container results__container">
            <div className="movie__wrapper">
              {filteredMovies.length > 0 ? (
                filteredMovies.map((movie) => (
                  <div
                    className="movie__card"
                    key={movie.imdbID}
                    onClick={(e) => handleCardClick(movie, e)}
                  >
                    <div className="movie__poster">
                      <img
                        className="poster__img"
                        src={movie.Poster}
                        alt="Movie Poster"
                      />
                    </div>
                    <div className="movie__info">
                      <h3 className="movie__title">{movie.Title}</h3>
                      <p className="movie__year">{movie.Year}</p>
                      <p> {movie.imdbRating}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="launcher">
                  <h1 className="results__title">Search to launch results!</h1>
                  <img
                    className="launch__img"
                    src={Rocket}
                    alt="Rocket Launch"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      {rocketStyle && (
        <img
          className="rocket--flying"
          src={Rocket}
          alt="Rocket"
          style={rocketStyle}
        />
      )}
    </>
  );
};

export default Search;
