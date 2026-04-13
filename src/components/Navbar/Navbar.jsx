import React from 'react'
import './Navbar.css'
import logo from '../../assets/Movie Search logo design.png'
import search from '../../assets/search_icon.svg'


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar__left">
            <img src={logo} alt="" />
        </div>
        <div className="navbar__right">
            <ul>
                <li>Home</li>
                <li className='search__icon'><img src={search} alt="" />Search</li>
                <li> Contact</li>
            </ul>
        </div>
    
    
    </div>
  )
}

export default Navbar