import "../Css/review.css"
import {reviewData} from "../data"
import ReviewCard from "./ReviewCard"

function Review(){

    return <div className="review">
        <h3> Reviews By Customers </h3>
        <p className="rev-p"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book </p>
        <div className="row review-row">
           { reviewData.map((data)=> <ReviewCard img={data.img} review={data.review} name={data.name}
               job={data.job} />
           ) }
        </div>
    </div>
}
export default Review;