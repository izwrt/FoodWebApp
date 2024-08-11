import ItemList from "./ItemList";


const RestuarantCategory = ({data ,showItems, setShowItems}) =>{
    // console.log(data.data.itemCards)


const handleClick = (e) =>{
    setShowItems();
    // const scrollObject = e.target.getBoundingClientRect();
    // console.log(scrollObject);
    // console.log(window.pageYOffset)
    window.scrollTo({top : 300})

   
}
    return (
        <div className="w-6/12 m-auto bg-gray-100 my-5 cursor-pointer  rounded-sm shadow-sm" onClick={handleClick}>
            <div className="flex justify-between p-2 px-4">
            <span className="font-extrabold">{data?.title} ({data?.itemCards.length})</span>
            <span>🔽</span>
            </div>
            <div>
                {showItems && <ItemList data={data.itemCards}/> }
            </div>
            
        </div>
    )
}

export default RestuarantCategory;