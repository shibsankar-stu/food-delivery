import React, { useContext, useState } from 'react'
import axios from 'axios';
import './LoginPopUp.css'
import { assets } from '../../food-del-assets/assets/frontend_assets/assets'
import { StoreContext } from '../../context/storeContext'

const LoginPopUp = ({setShowLogin}) => {

  const {url, token, setToken} = useContext(StoreContext)
    const [currentState, setCurrentState] = useState("login");
    const [data, setData] = useState({
      name: "",
      email: "",
      password: ""
    })
    const onChangeHandler = (event) => {
      const name = event.target.name
      const value = event.target.value
      setData(data => ({...data, [name]:value}))
      console.log(data)
    }
    const onLogin = async (e) => {
       e.preventDefault();
      let newUrl = url
      if (currentState === "login") {
       newUrl += "/api/user/login" 
       console.log(newUrl)
      }else{
        newUrl += "/api/user/register"
      }
      const response = await axios.post(newUrl, data)
      console.log(response)
      console.log(response)
      if (response.data.success) {
        
        setToken(response.data.token)
        localStorage.setItem("token", response.data.token)
      }

      setShowLogin(false)
    }


  return (
    <div className='login-popup'>
      <div className="login-popup-container">
        <div className="login-header">
            <h2>{currentState}</h2>
            <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            <form onSubmit={onLogin} >
                {currentState==="login" ? <> </>:
                <input type='text' name="name" onChange={onChangeHandler} value={data.name} placeholder='Enter your Name'  /> }
                <input type='email' name="email" onChange={onChangeHandler} value={data.email}  placeholder='Enter your Email' />
                <input type='password' name="password" onChange={onChangeHandler} value={data.password}  placeholder='Enter your Password' />
            <button type='submit' > {currentState} </button>
            </form>
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
