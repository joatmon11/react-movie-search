import React from 'react'
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Search from './pages/Search/Search'
import MovieInfo from './pages/MovieInfo/MovieInfo'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/movieInfo' element={<MovieInfo />} />
      </Routes>
    </div>
  )
}

export default App