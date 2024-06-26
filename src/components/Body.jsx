import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { FOOD_API } from "../utils/contant";
import { useState, useEffect } from 'react';

const Body = () => {
const [cardList, setCardList] = useState([]);
const [searchInput, setSearchInput] = useState("");
const [searchData, setSearchData] = useState([]);
 
useEffect(()=>{
  fetchData()
},[]);

const fetchData = async () =>{
  const realData = await fetch(FOOD_API);
  const json = await realData.json();
  const restDetails = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  setCardList(restDetails);
  setSearchData(restDetails);
  // console.log(json.data.info);
};



// console.log(cardList[0].info.name);
    return cardList.length === 0 ? (
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
        setSearchData(searchList);
        }}>Search</button>
        <button className="filter-btn" 
        
        onClick={() =>{
          console.log("clicked top")
          setSearchData(cardList.filter(card => card.info.avgRating > 4.4))
        }}>Top Rated Restaurant</button>

        
          <div className="res-container">
                     
          {
            searchData.map((data, index) => (
              <RestaurantCard key={data.info.id} data={data.info} />
             ))
          }

          
          </div>
      </div>
    )
  }


  export default Body;