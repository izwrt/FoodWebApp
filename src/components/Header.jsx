import foodLogo from '../../images/food-logo.jpg';
import { useState, useEffect } from 'react';

function Header(){

  const [loginText, setLoginText] = useState("Login")

  useEffect(()=>{
    console.log("useEffect is triggered.")
  },[loginText]);
  
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={foodLogo} alt="Food Logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login-btn" onClick ={()=>{loginText === "Login" ? setLoginText("Logout") : setLoginText("Login")}}>{loginText}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;