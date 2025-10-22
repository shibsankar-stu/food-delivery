import React, { useState } from 'react'
import { assets } from '../../food-del-assets/assets/frontend_assets/assets'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="navbar">
      <Link to='/'><img src={assets.logo} alt="logo" className="navbar-logo" /></Link>
      {/* Hamburger icon for mobile */}
      <img
        src={assets.menu_icon}  // add a menu_icon in your assets folder (e.g., hamburger icon)
        alt="menu"
        className="menu-icon"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
        <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</li>
        <li onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>About Us</li>
        <li onClick={() => setMenu("mobile")} className={menu === "mobile" ? "active" : ""}>Mobile App</li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />
        <div className="navbar-search-icon">
         <Link to='/cart'> <img src={assets.basket_icon} alt="basket" /></Link>
          <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)} >Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
