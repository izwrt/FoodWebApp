import foodLogo from '../../images/food-logo.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
function Header(){

  const [loginText, setLoginText] = useState("Login")
  const onlineStatus = useOnlineStatus();
  
    return (
      <div className="flex justify-between bg-white shadow-xl shadow-gray-100 px-16">
        <div className="p-2  w-18 overflow-hidden" >
          <img  className="w-16 scale-150" src='https://img.freepik.com/free-vector/hand-drawn-spicy-logo-design_23-2149667267.jpg?w=826&t=st=1723011411~exp=1723012011~hmac=fe37109409508ee860dbcda20e6b2fbfcfbe5d7a28ace8124f86fadab4735a06' alt="Food Logo" />
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