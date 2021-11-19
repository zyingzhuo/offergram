const ADD_REVIEW='review/addReview'
const LOAD_REVIEWS='review/loadReviews'
const DELETE_REVIEW='review/deleteReview'

const addReview=(review)=>({
    type: ADD_REVIEW,
    review
})

const loadReviews=(reviews)=>({
    type: LOAD_REVIEWS,
    reviews
})

const deleteReview=(reviewId)=>({
    type: DELETE_REVIEW,
    reviewId
})


export const getReviews=(sellerId)=>async(dispatch)=>{
    const response=await fetch(`/api/reviews/${sellerId}/`)
    const reviews=await response.json()
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!',reviews)
    dispatch(loadReviews(reviews.reviews))
}
export const createReview=(payload)=>async(dispatch)=>{
    // console.log('!!!!!!!!',payload.revieweeId)
    const response=await fetch(`/api/reviews`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    } )

    if(response.ok) {
        const review=await response.json()
        dispatch(addReview(review))
        return review
    }
}


export const removeReview=(reviewId)=>async(dispatch)=>{
    const response=await fetch(`/api/reviews/product/${reviewId}`, {
        method: 'DELETE'
    })
    if(response.ok) {
        const review=await response.json()
        dispatch(deleteReview(review.id))
    }
    return response
}

export const editReview=(payload,reviewId)=>async(dispatch)=>{
    const response=await fetch(`/api/reviews/product/${reviewId}/edit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    })  
    
    const updatedReview=await response.json()
    dispatch(addReview(updatedReview))
    return updatedReview
}

const initialState={}
const reviewReducer=(state=initialState, action)=>{
    switch(action.type) {
        case LOAD_REVIEWS: {
            const newState={};
            
            (action.reviews).forEach(review=>{
                newState[review.id]=review
            })
            return newState
        }
        case ADD_REVIEW: {
            const newState={...state}
            console.log(action.review)
            newState[action.review.id]=action.review
            return newState
        }
        case DELETE_REVIEW: {
            const newState={...state}
            delete newState[action.reviewId]
            return {...newState}
        }
     

        default:
            return state;
    }
}

export default reviewReducer