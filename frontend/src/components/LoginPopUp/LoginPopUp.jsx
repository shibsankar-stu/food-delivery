import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../food-del-assets/assets/frontend_assets/assets'

const LoginPopUp = ({setShowLogin}) => {

    const [currentState, setCurrentState] = useState("login");

  return (
    <div className='login-popup'>
      <div className="login-popup-container">
        <div className="login-header">
            <h2>{currentState}</h2>
            <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            <form >
                {currentState==="login" ? <></>:<input type='text' placeholder='Enter your Name'  />}
                <input type='email' placeholder='Enter your Email' />
                <input type='password' placeholder='Enter your Password' />
            </form>
            <button> {currentState} </button>
            <div className="login-popup-conditions">
                <input type="checkbox" />
                <p>By signing up, you agree to our Terms & Conditions and Privacy Policy.</p>
            </div>
        <div className="login-popup-switch">
            {currentState==="login" ? <p>Don't have an account? <span onClick={()=>setCurrentState("signup")}>Sign Up</span></p> 
            : <p>Already have an account? <span onClick={()=>setCurrentState("login")}>Log In</span></p>}
        </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPopUp
