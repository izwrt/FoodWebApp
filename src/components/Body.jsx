import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import useRestaurantCard from "../utils/useRestaurantCard";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
const [searchInput, setSearchInput] = useState("");
const [searchData, setSearchData] = useState([]);
 
const cardList = useRestaurantCard();

useEffect(()=>{
  setSearchData(cardList);
},[cardList]);


const onlineStatus = useOnlineStatus();

if ( onlineStatus === false ) {
  return (
    <h1>your not connected to internet ... </h1>
  )
}

    return searchData.length === 0  ?(
      <div className="body">
          <button className="shimmer-filter-btn" ></button>
          <div className="shimmer-res-container">
            {[...Array(10)].map((_,i) => 
                <Shimmer key={i}/>
            )}
          </div>
    </div>
    ):(
      <div className="body">
        <input type="text" value={searchInput} onChange = {(e) => {setSearchInput(e.target.value)}}></input>                                 
        <button onClick={()=>{
         console.log("clicked")
          const searchList = cardList.filter(data =>{
           return data.info.name.toLowerCase().includes(searchInput.toLowerCase())
        })
        
        

        searchData && setSearchData(searchList);
        }}>Search</button>
        <button className="filter-btn" 
        
        onClick={() =>{
          console.log("clicked top")
          setSearchData(cardList.filter(card => card.info.avgRating > 4.2))
        }}>Top Rated Restaurant</button>

        
          <div className="res-container">
                     
          {
            searchData.map((data, index) => (
              <Link key={data.info.id} to={`restaurantMenu/${data.info.id}`}><RestaurantCard key={data.info.id} data={data.info} /></Link>
             ))
          }

        
          </div>
      </div>
    )
  
  }


  export default Body;