

import React, { useEffect }  from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useHistory} from 'react-router';
import { createReview } from '../../store/review';
import { editReview } from '../../store/review';



function EditReviewForm({reviewId}){
   
    const {productId}=useParams()
    const dispatch = useDispatch()
    const history=useHistory()
    const userId=useSelector(state=>state.session.user.id)
    const currentProduct=useSelector(state=>state.product[productId])
    const sellerId=currentProduct?.sellerId
    const currentReview=useSelector(state=>state.review[reviewId])
    const [rating, setRating]=useState(currentReview.rating)
    const [comment, setComment]=useState(currentReview.comment)

 


    const handleSubmit= async(e)=>{
        e.preventDefault();
     
        const payload={
          reviewerId:userId,
          revieweeId:sellerId,
          comment,
          rating,
        }
        const review=await dispatch(editReview(payload,reviewId));
        if(review) {
            history.push(`/products/${productId}`)
        }
    }
    return(
    <>
        <form onSubmit={handleSubmit}>
        <label>
        comment
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </label>
       <label>
       rating
       <input
         type="number"
         value={rating}
         onChange={(e) => setRating(e.target.value)}
         required
       />
     </label>
     <button type="submit" >update your review</button>
     </form>
    </>
   )
}

export default EditReviewForm