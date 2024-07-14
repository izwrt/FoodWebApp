import foodLogo from '../../images/food-logo.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
function Header(){

  const [loginText, setLoginText] = useState("Login")
  const onlineStatus = useOnlineStatus();
  
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={foodLogo} alt="Food Logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Online Status : { onlineStatus ? "🟢" : "🟤" }</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/Grocery">Grocery</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>Cart</li>
            <button className="login-btn" onClick ={()=>{loginText === "Login" ? setLoginText("Logout") : setLoginText("Login")}}>{loginText}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;