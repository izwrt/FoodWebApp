import { IMG_URL } from "../utils/contant";
const ItemList = (data) =>{ 
    const itemList = data.data;
    // console.log("items list",itemList);
    return(
    <div>
       {
        itemList.map((item) => (
            <div key = {item?.card?.info?.id} className="bg-white flex border-b-[1px] border-gray-300 p-4 py-8 justify-between">
                <div className="flex flex-col text-left w-9/12 pr-3">
                    <span className="font-semibold opacity-70">{item?.card?.info?.name}</span>

                    {
                        item?.card?.info?.defaultPrice ? (
                            <span>₹{Math.ceil(item.card.info.defaultPrice / 100)}</span>
                          ) :(
                            <div>
                              {item?.card?.info?.finalPrice ? (
                                <div className="flex gap-2">
                                  <del>₹ {Math.ceil(item.card.info.price / 100)}</del>
                                  <span>₹ {Math.ceil(item.card.info.finalPrice / 100)}</span>
                                </div>
                              ) : (
                                (Math.ceil(item.card.info.price/100))
                              )}
                            </div>
                          )
                        
                    }
                   
              
                    <div className="text-sm opacity-50 mt-4">{item?.card?.info?.description}</div>
                </div>
                <div className="w-48 h-48 overflow-hidden rounded-md flex justify-center">
                <button className="absolute bg-white py-2 px-8 mt-40 border border-gray-300 shadow-sm rounded-lg ">Add +</button>
                  <img className="h-full w-full object-cover" src={IMG_URL+item?.card?.info?.imageId}></img>
                  
                </div>
            </div>
        ))
       }
        
    </div>
    )
}

export default ItemList;