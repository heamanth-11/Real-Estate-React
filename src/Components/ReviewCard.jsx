import "../Css/reviewCard.css"


function ReviewCard(props){

    return <div className="ReviewCard col-lg-4 col-md-5 col-sm-12 col-12  ">
        <div className="rev-card-wrap">
        <img src={props.img} alt="" />
        <p>{props.review}</p>
        <h6>{props.name}</h6>
        <p>{props.job}</p>
        </div>
       

        </div>
       
   
}

export default ReviewCard
