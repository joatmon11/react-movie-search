import React from 'react'
import './MovieInfo.css'
import Navbar from '../../components/Navbar/Navbar'

const MovieInfo = () => {
  return (
    <>
    <Navbar />
    <div className='movieinfo'>
      <div className="movie__poster">
        <img src="https://m.media-amazon.com/images/M/MV5BZGRiMDE1NTMtMThmZS00YjE4LWI1ODQtNjRkZGZlOTg2MGE1XkEyXkFqcGc@._V1_SX300.jpg" alt="" className="movie__img" />
      </div>
      <div className="movie__card">
        <h1 className="movie__title">Title</h1>
        <ul className="movie__details">
          <li>Year</li>
          <li>Rated</li>
          <li>Released</li>
          <li>Runtime</li>
          <li>Director</li>
          <li>Actors</li>
        </ul>
        
      </div>
    </div>
    </>
    
  )
}

export default MovieInfo