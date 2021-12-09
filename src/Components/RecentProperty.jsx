import "../Css/recentpropert.css"
import data from "../data"
import RentProperty from "./RentProperty";

function recentproperty(){

    return <div className="recentproperty">
             <h1 className="rcp-h1">Recent Property for Rent</h1>
             <p className="rcp-p"> "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</p>
    <div className="row rp-row">
    {data.map((data)=> <RentProperty img={data.img} address={data.address} door={data.door} price={data.price} period={data.period} bed={data.bed} bath={data.bath}
        area={data.area}
        
        />)}
    </div>
       

    </div>
  
}

export default recentproperty;