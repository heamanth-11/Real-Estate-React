import "../Css/recentpropert.css"
import data from "../data"
import RentProperty from "./RentProperty";

function recentproperty(){

    return<>  
    <div className="container col-md-10">
     <div className="row">
    <div className="col text-center ml">
    <br/>
    <br/>
    <h1> <b className="h1 ">Recent Property for Rent</b></h1><br/>
  <span className="grey" style={{color:"var(--grey)"}}>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
</span>
</div>
</div></div>
    <div className="row rp-row ">
    {data.map((data)=> <RentProperty img={data.img} address={data.address} door={data.door} price={data.price} period={data.period} bed={data.bed} bath={data.bath}
        area={data.area}
        
        />)}
    </div>
       
  </> 
}

export default recentproperty;