import React from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={assets.logo} alt="logo" className="navbar-logo" />
      </div>

      <div className="navbar-right">
        <img src={assets.profile_image} alt="profile" className="navbar-profile" />
      </div>
    </div>
  )
}

export default Navbar
