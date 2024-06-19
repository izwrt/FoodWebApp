import React from "react";
import ReactDOM from "react-dom/client";
import foodLogo from './images/food-logo.jpg';

/**
 * Header
 * -Logo
 * -Nav Items
 * Body
 *  -Serach Bar
 *  -Restaurant Container
 *      -Restaurant Cards
 * Footer
 *  -copyrights
 *  -Links
 *  -Address
 *  -Contact
 */

function Header(){
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
          </ul>
        </div>
      </div>
    );
  };

  const Body = () => {
    <div className="body">
        <div className="search">Serach</div>
        <div className="res-container">
            
        </div>
    </div>
}

  
const AppLoyout = () => {
    return(
        <div className="app">
            <Header />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLoyout/>);