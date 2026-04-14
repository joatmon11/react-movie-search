import React from 'react'
import './Search.css'
import Navbar from '../../components/Navbar/Navbar'
import SearchBar from '../../components/SearchBar/SearchBar'


const Search = () => {
  return (
    <>
    <Navbar />
    <div className="search">
      <SearchBar />
    </div>
    </>
  )
}

export default Search