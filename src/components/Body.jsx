import RestaurantCard from "./RestaurantCard";
import infolist from "../utils/mockData";

const Body = () => {
    return(
      <div className="body">
        <button className="filter-btn">Top Rated Restaurant</button>
          <div className="res-container">
          {infolist.map((data, index) => 
          <RestaurantCard key={data.info.id} data={data.info} />
          
          )
          };
          
          </div>
      </div>
    )
  }


  export default Body;