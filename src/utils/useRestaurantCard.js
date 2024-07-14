import { FOOD_API } from "./contant";
import { useState , useEffect } from "react";

const useRestaurantCard = () =>{

    const [cardList, setCardList] = useState([]);

    useEffect(() =>{
        fetchData();
    },[])    

    const fetchData = async () => {
        const data = await fetch(FOOD_API);
        const json = await data.json();
        setCardList(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    return cardList
}

export default useRestaurantCard;