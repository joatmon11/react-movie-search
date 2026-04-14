import React from 'react'
import './Navbar.css'
import logo from '../../assets/Movie Search logo design.png'
import search from '../../assets/search_icon.svg'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

    let navigate = useNavigate();

  return (
    <div className='navbar'>
        <div className="navbar__left">
            <img src={logo} alt="" />
        </div>
        <div className="navbar__right">
            <ul>
                <li onClick={() => navigate('/')}>Home</li>
                <li className='search__icon' onClick={() => navigate('/search')}><img src={search} alt=""/>Search</li>
                <li className='contact'> Contact</li>
            </ul>
        </div>
    
    
    </div>
  )
}

export default Navbar