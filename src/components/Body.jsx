import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { FOOD_API } from "../utils/contant";
import { useState, useEffect } from 'react';

const Body = () => {
const [cardList, setCardList] = useState([]);

useEffect(()=>{
  fetchData()
},[]);

const fetchData = async () =>{
  const realData = await fetch(FOOD_API);
  const json = await realData.json();
  setCardList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  console.log(json);
};



// console.log(cardList);
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
        <button className="filter-btn" 
        
        onClick={() =>{
          setCardList(cardList.filter(card => card.info.avgRating > 4.4))
        }}>Top Rated Restaurant</button>

        
          <div className="res-container">
          
          {cardList.map((data, index) => 
          <RestaurantCard key={data.info.id} data={data.info} />
          
          )
          }
          
          </div>
      </div>
    )
  }


  export default Body;