import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/view-3d-cinema-theatre-room.jpg'
import SearchBar from '../../components/SearchBar/SearchBar'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <>
    <Navbar />
    <div className='home'>
      <div className="hero">
        <img src={hero_banner} alt="" />
        <div className="hero__caption">
          <h1 className='hero__title'>Your one stop source for movie information</h1>
        </div>             
        <SearchBar />   
      </div>
      <TitleCards />
      <Footer />
    </div>
    </>
  )
}

export default Home