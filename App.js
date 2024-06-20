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

  const styleCard = {
    
  };

  const RestaurantCard = () => {
    return(
      <div className="res-card">
        <img className="res-card-img" src="https://cloudfront.frive.co.uk/media/5452/opt_upload.png"/>
        <h3>Blueberry Pancakes</h3>
        <h4>South Indian, Beverages Malad Kan East</h4>
        <h4>38 min <span>4.8 star</span></h4>
      </div>
    )
  }

  const Body = () => {
    return(
      <div className="body">
        <div className="search">Serach</div>
          <div className="res-container">
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
          </div>
      </div>
    )
  }

  
const AppLoyout = () => {
    return(
        <div className="app">
            <Header />
            <Body/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLoyout/>);