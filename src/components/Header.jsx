import foodLogo from '../../images/food-logo.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
function Header(){

  const [loginText, setLoginText] = useState("Login")
  const onlineStatus = useOnlineStatus();
  
    return (
      <div className="flex justify-between bg-red-200 shadow-md">
        <div className="p-2">
          <img className="w-24" src={foodLogo} alt="Food Logo" />
        </div>
        <div className="flex items-center">
          <ul className='flex p-4'>
            <li className='px-5'>Online Status : { onlineStatus ? "🟢" : "🟤" }</li>
            <li className='px-5'><Link to="/">Home</Link></li>
            <li className='px-5'><Link to="/about">About Us</Link></li>
            <li className='px-5'><Link to="/Grocery">Grocery</Link></li>
            <li className='px-5'><Link to="/contact">Contact Us</Link></li>
            <li className='px-5'>Cart</li>
            <button className="login-btn" onClick ={()=>{loginText === "Login" ? setLoginText("Logout") : setLoginText("Login")}}>{loginText}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;