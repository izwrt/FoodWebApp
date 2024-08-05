import ItemList from "./ItemList";

const RestuarantCategory = (data) =>{
    return (
        <div className="w-6/12 m-auto bg-gray-100 my-5  p-3 rounded-sm shadow-sm">
            <div className="flex justify-between">
            <span className="font-extrabold">{data?.data?.title}</span>
            <spna>🔽</spna>
            </div>
            <div>
                <ItemList data = {data.data.ItemCards}/>
            </div>
            
        </div>
    )
}

export default RestuarantCategory;