import RestaurantCard from "./RestaurantCard";
import infolist from "../utils/mockData";
import { useState } from 'react';

const Body = () => {
const [cardList, setCardList] = useState(infolist);

console.log(cardList);
    return(
      <div className="body">
        <button className="filter-btn" onClick={() =>{
          setCardList(cardList.filter(card => card.info.avgRating > 4.7))
        }}>Top Rated Restaurant</button>
          <div className="res-container">

          {cardList.map((data, index) => 
          <RestaurantCard key={data.info.id} data={data.info} />
          
          )
          };
          
          </div>
      </div>
    )
  }


  export default Body;