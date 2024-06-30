import { IMG_URL } from "../utils/contant";

const RestaurantCard = (props) => {
    const {name,cuisines,cloudinaryImageId,avgRating} = props?.data;
    const {slaString} = props?.data?.sla;
    return(
      
      <div className="res-card">
        <div className="card-img-container">
        <img className="res-card-img" src={IMG_URL+cloudinaryImageId}/>
        </div>
        <h3>{name}</h3>
        <h5>{cuisines.join(', ')}</h5>
        <h4>{slaString}<span>{avgRating} star</span></h4>
      </div>
    )
  }

  export default RestaurantCard;