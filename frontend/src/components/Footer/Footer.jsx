import React from 'react'
import './Footer.css'
import { assets } from '../../food-del-assets/assets/frontend_assets/assets'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>
            Fresh, fast, and delicious meals delivered right to your door.
            Experience the best taste in town with FoodieExpress!Fresh, fast, and delicious meals delivered right to your door.
            Experience the best taste in town with FoodieExpress!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="facebook" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.linkedin_icon} alt="linkedin" />
          </div>
        </div>
        <div className="footer-content-center">
          <h1>Company</h1>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privesy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+91 7384169731</li>
            <li>shibsankarrdas@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright © 2024 FoodieExpress. All rights reserved.</p>
    </div>
  )
}

export default Footer
