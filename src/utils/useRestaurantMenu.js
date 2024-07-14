import { useEffect , useState} from "react";
import { MENU_ITEMS } from "./contant";

const useRestaurantMenu = (resId) => {
    const [menuItems, setMenuItems] = useState(null);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch(MENU_ITEMS + resId);
        const json = await data.json();
        setMenuItems(json.data.cards);
    }

    return menuItems;
}

export default useRestaurantMenu;