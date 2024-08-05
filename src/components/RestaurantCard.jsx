import { IMG_URL } from "../utils/contant";

const RestaurantCard = (props) => {
    const {name,cuisines,cloudinaryImageId,avgRating} = props?.data;
    const {slaString} = props?.data?.sla;

    return(
      
      <div className="m-3 p-0 w-[250px] h-[360px] bg-red-300 rounded-xl overflow-hidden shadow-lg">
        <div className="bg-black h-[200px]">
        <img
        className="w-full h-full object-cover"
        src={`${IMG_URL}${cloudinaryImageId}`}
        alt="Image Description"
      />

        </div>
        <div className="p-4">
          <h3 className="font-bold pb-2 text-lg">{name}</h3>
          <h5 className="text-xs opacity-80">{cuisines.join(', ')}</h5>
          <h4 className="pt-4 text-sm font-medium opacity-80">{slaString}<span className="m-12">{avgRating} star</span></h4>
        </div>
      </div>
    )
  }

  export const modifiedCard = (RestaurantCard) =>{
    return (props) =>{
      return(
        <div className="hover:scale-105 duration-200">
          <label className="absolute bg-red-400 rounded-sm px-1">Top Selling</label>
          <RestaurantCard {...props}/>
        </div>
      )
    }
  }

  export default RestaurantCard;

