

import React, { useEffect }  from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useHistory} from 'react-router';
import { createReview } from '../../store/review';
import {Rating, RatingView} from 'react-simple-star-rating'



function CreateReviewForm(){
   
    const {productId}=useParams()
    const dispatch = useDispatch()
    const history=useHistory()
    const userId=useSelector(state=>state.session.user.id)
    const currentProduct=useSelector(state=>state.product[productId])
    const sellerId=currentProduct?.sellerId
    // const seller=useSelector(state=>state.user[sellerId])
    const [rating, setRating]=useState(0)
    const [comment, setComment]=useState()

   const handleRating=(rate)=>{
     setRating(rate)
   }

   console.log(userId)
   console.log(sellerId)
    const handleSubmit= async(e)=>{
        e.preventDefault();
     
        const payload={
          reviewerId:userId,
          revieweeId:sellerId,
          comment,
          rating,
        }
        const review=await dispatch(createReview(payload));
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
       {/* <input
         type="number"
         value={rating}
         onChange={(e) => setRating(e.target.value)}
         required
       /> */}
       <Rating onClick={handleRating} ratingValue={rating}/>
     </label>
     <button type="submit" >Submit your review</button>
     </form>
    </>
   )
}

export default CreateReviewForm