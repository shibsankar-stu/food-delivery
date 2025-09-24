import React, { useState } from 'react'
import {assets} from '../../food-del-assets/assets/frontend_assets/assets'
import './navbar.css'
const Navbar = () => {
  const [ menu, setMenu ] = useState("home")
  return (
    <div>
      <div className="navbar">
        <img src={assets.logo} alt="logo" />
       
        <ul className="navbar-menu">
            <li onClick={ () => setMenu("home")} className={menu==="home"?"active":""}>Home</li>
            <li onClick={ () => setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
            <li onClick={ () => setMenu("about")} className={menu === "about"? "active" : ""}>About Us</li>
            <li onClick={ ()=> setMenu("mobile")} className={menu === "mobile"? "active" : ""}>Mobile App</li>
        </ul>

        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt="" />
                <div className="dot"></div>
            </div>
            <button>Sign in</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar