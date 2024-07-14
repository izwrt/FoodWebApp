import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import useOnlineStatus from '../utils/useOnlineStatus';

const RestaurantMenu = () => {
    const {resId} = useParams();
    
    const menuItems = useRestaurantMenu(resId);

  

    if(menuItems === null){ 
        return (
            <div className="shimmer-res-container">
            {[...Array(10)].map((_,i) => 
                <Shimmer key={i}/>
            )}
          </div>
        
        )
    }
 
     

        const {name , avgRating, costForTwoMessage ,sla,cuisines } = menuItems[2]?.card?.card.info;
  
        const { itemCards } = menuItems[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

        const itemName = menuItems[4].groupedCard.cardGroupMap.REGULAR.cards[2]?.card?.card?.categories;

        console.log(itemCards)

    return(
       <div>
            <h1>{name}</h1>
            <h2>{avgRating} - {costForTwoMessage} </h2>
            <h3>{cuisines.join(', ')}</h3>
            <h3> {sla.slaString}</h3>
            <h2>Menu</h2>
            <div>
                {itemCards.map((mainItems,index) =>{
                    const description = mainItems.card.info.description?.replace(/{/g, '|').replace(/}/g, '|') || 'No description available'
                    return(
                        <ul key={index}>
                            <li>
                                <div>
                                    <div>
                                        <img src=""></img>
                                        {mainItems.card.info.name} - Rs. {mainItems.card.info.defaultPrice/100 || mainItems.card.info.finalPrice/100 || mainItems.card.info.price/100}
                                    </div>
                                    <div>
                                        {description} 
                                    </div>
                                    <br></br>
                                    {mainItems.card.info.ratings.aggregatedRating.rating && (
                                    <div>
                                        {mainItems.card.info.ratings.aggregatedRating.rating} Rating
                                    </div>
                                    )}
                                    <br></br>
                                    <br></br>
                                </div>
                            </li>
                        </ul>
                    )
                })}
            </div>
       </div>
    )

}

export default RestaurantMenu;