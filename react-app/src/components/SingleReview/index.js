import { useSelector } from "react-redux"
import { removeReview } from "../../store/review"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import {useEditReviewForm} from '../../context/EditReviewContext'
import EditReviewForm from "../EditReviewForm"
import { useState } from "react"
import {Rating, RatingView} from 'react-simple-star-rating'



function SingleReview({review, productId}){
    const [editreview, seteditReview]=useState(false)
   
   
    const dispatch = useDispatch()
    const history=useHistory()
    const currentUserId = useSelector(state => state.session.user.id)

    const onClickDelete=async(e)=>{
        e.preventDefault()
        const reviewId=review.id
        const response=await dispatch(removeReview(reviewId))
        if(response) {
            history.push(`/products/${productId}`)
        }

    }



return (
    <>
    <div>{review?.comment}</div>
    <RatingView ratingValue={review?.rating} />
    {review?.reviewerId==currentUserId&& (
        <div>
            <button onClick={()=>seteditReview(true)}>edit review</button>
            <button onClick={onClickDelete}>delete review</button>
            {editreview &&(
                <EditReviewForm reviewId={review.id} seteditReview={seteditReview} />
            )}
        </div>
    )}
    </>
)
}

export default SingleReview