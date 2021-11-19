
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import {  useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getProducts, removeProduct } from '../../store/product';
import { getUsers } from '../../store/user';
import EditProductForm from '../EditProductForm/EditProduct';
import { useEditProductForm } from '../../context/EditProductContext';
import { getReviews } from '../../store/review';
import SingleReview from '../SingleReview';


const OneProductPage=()=>{
    // const [editForm, setEditForm]=useState(false)
    const {editForm, setEditForm}=useEditProductForm()
    const {productId}=useParams()
   
    const dispatch=useDispatch()
    const history=useHistory()
    const currentProduct=useSelector(state=>state.product[+productId])
    
   console.log(currentProduct)
    const sellerId=currentProduct?.sellerId
    
    

    useEffect(()=>{
      dispatch(getProducts())
      dispatch(getReviews(sellerId))
      dispatch(getUsers())
        
    }, [dispatch,sellerId])
    const reviews=useSelector((state)=>Object.values(state.review))
    
    // const sellerId=useSelector(state=>state.product[productId])[sellerId]
    const productSeller=useSelector(state=>state.user[currentProduct?.sellerId])
    const sesseionUser=useSelector(state=>state.session.user)
    
    const onClickDelete=async(e)=>{
        e.preventDefault()
       const response=await dispatch(removeProduct(productId))
        if(response) {history.push('/products')}
    }

    return (
        <div >
            
        {currentProduct&&(
            <>
        
        {/* <NavLink to={`/spots/${spot.id}`}>{spot?.name}</NavLink> */}
       
        {/* //{spot?.url} */}
        <div>
            
            <img src={(currentProduct?.image)} style={{height:"200px"}} />
           
            <div>${currentProduct?.price}</div>
            <div>{currentProduct?.location}</div>
            <div>{currentProduct?.name}</div>
            <div>{currentProduct?.description}</div>
            <div>sold by {productSeller?.username}  </div>
            <div>sellersReview</div>
            {reviews.map((review)=>(
                
                <SingleReview review={review} key={review.id} productId={productId}/>
                
            ))}
            {(sesseionUser?.id==productSeller?.id)&&(
                <>
                    <button onClick={()=>setEditForm(true)}>edit</button>
                    <button onClick={onClickDelete}>delete</button>
                    {editForm &&(
                        <EditProductForm productId={productId}/>
                       
                    )}
                </>
            )
            
            
            
            }
            
        </div>
      
        {/* {(spot?.Images)[0].url}  */}
        </>)}
      
        
    </div>
    )
}

export default OneProductPage