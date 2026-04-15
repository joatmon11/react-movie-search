import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./MovieInfo.css";

const MovieInfo = () => {
  const { state: movie } = useLocation();
  const navigate = useNavigate();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (!movie) return;
    async function fetchDetails() {
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=e3a5001&i=${movie.imdbID}`,
        );
        const data = await res.json();
        setDetails(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchDetails();
  }, [movie]);

  if (!movie) {
    return (
      <div className="MovieInfo">
        <p>No movie selected.</p>
        <button className="back__button" onClick={() => navigate("/search")}>
          Back to Search
        </button>
      </div>
    );
  }

  if (!details) {
    return (
      <div className="MovieInfo">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <button className="back__button" onClick={() => navigate("/search")}>
        Back to Search
      </button>
      <div className="MovieInfo">
        <div className="movie__details--wrapper">
          <img src={details.Poster} alt={details.Title} />
          <div className="movie__details">
            <h1>{details.Title}</h1>
            <p>{details.Year}</p>
            <p>{details.Rated}</p>
            <p>{details.Runtime}</p>
            <p>{details.Director}</p>
            <p>{details.Actors}</p>
            <p>{details.Ratings.map((rating, index) => (
              <span key={index}>{rating.Source} Rating: {rating.Value}</span>
            ))}</p>
          </div>
        </div>
        <div className="movie__plot">
          <p >{details.Plot}</p>
        </div>
        
      </div>
    </>
  );
};

export default MovieInfo;
