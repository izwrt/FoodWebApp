import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import useOnlineStatus from '../utils/useOnlineStatus';
import RestuarantCategory from './RestaurantCategory';
import { useState } from "react"; 

const RestaurantMenu = () => {
    const {resId} = useParams();
    
    const menuItems = useRestaurantMenu(resId);

    const [showItems, setShowItems] =useState(0)
  

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

        // console.log(menuItems[4].groupedCardcardGroupMap.REGULAR.cards);

        const filteredCards = menuItems[4].groupedCard.cardGroupMap.REGULAR.cards.filter( (c) =>
            c.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )


        // console.log(filteredCards);

    return(
       <div className='text-center'>
            <h1 className='font-bold mt-6 pb-1 text-2xl'>{name}</h1>
            <h2>{avgRating} <span className='ml-4'>{costForTwoMessage} </span></h2>
            <h3 className='text-sm  font-extrabold text-red-400 underline'>{cuisines.join(', ')}</h3>
            <h3 className='p-2 font-medium text-sm'> {sla.slaString}</h3>
            <h2 className='font-bold text-3xl mt-8 text-red-400'>Menu</h2>

            {/* categories accordions*/}

            {filteredCards.map((categoryCard,index) => {
                // console.log(index)
                return <RestuarantCategory key={categoryCard?.card?.card.title} data= {categoryCard?.card?.card} showItems={index === showItems ? true : false} setShowItems = {() => setShowItems(index === showItems ? null : index)} />
            })}

       </div>
    )

}

export default RestaurantMenu;