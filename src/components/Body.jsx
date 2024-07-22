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
          {/* <button className="shimmer-filter-btn" ></button>
          <div className="shimmer-res-container">
            {[...Array(10)].map((_,i) => 
                <Shimmer key={i}/>
            )}
          </div> */}
    </div>
    ):(
      <div>
   
      <div className="flex justify-between px-10 py-5">
        <div className="flex gap-5">
            <input className="focus:outline-none px-4 p-1 border-2 border-solid border-gray-400 rounded-xl" type="text" value={searchInput} onChange = {(e) => {setSearchInput(e.target.value)}}></input>  

            <button className="px-6 py-1.5 rounded-xl bg-red-400" onClick={()=>{
            console.log("clicked")
            const searchList = cardList.filter(data =>{
            return data.info.name.toLowerCase().includes(searchInput.toLowerCase())
            })
            searchData && setSearchData(searchList);
            }}>Search</button>
        </div>                               

        <div>
            <button className="px-6 py-1.5 rounded-xl bg-red-400" 
              
              onClick={() =>{
                setSearchData(cardList.filter(card => card.info.avgRating > 4.4))
              }}>Top Rated Restaurant</button>
        </div>
      </div>
        
          <div className="flex flex-wrap justify-center gap-7">
                     
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