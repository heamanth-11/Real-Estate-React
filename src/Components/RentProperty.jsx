import  "../Css/rentproperty.css"

function RentProperty(props){


    return <div className="rentproperty col-lg-4 col-md-6 col-sm-12-col-12">
        <div className="col-lg-10 rent-col">
            <img src={props.img} alt={props.alt} />
            <div className="no-img">
                <p>For Rent</p>
            <h6 className="address">{props.address}</h6>
            <p>  <i class="fas fa-map-marker-alt">  {props.door}  </i></p>
            <h3>${props.price} <span>/{props.period}</span></h3>
             <div className="row">
                <div className=" specs col-4">
                <i class="fas fa-bed"><span>{props.bed}</span></i>
                </div>
                <div className=" specs col-4">
                <i class="fas fa-bath"><span>{props.bath}</span></i>
                    </div>
                    <div className="specs col-4">
                    <i class="fas fa-location-arrow"><span>{props.area}</span> </i>
                    </div>
             </div>
        </div>
        </div>
    </div>
}

export default RentProperty;