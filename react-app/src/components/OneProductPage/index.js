
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
import ChatForm from '../ChatForm/ChatForm';
import './OneProductPage.css'
import CreateReviewForm from '../CreateReviewForm';


const OneProductPage=()=>{
    // const [editForm, setEditForm]=useState(false)
    const {editForm, setEditForm}=useEditProductForm()
    const [chatForm, setChatForm]=useState(false)
    const {productId}=useParams()
   
    const dispatch=useDispatch()
    const history=useHistory()
    const currentProduct=useSelector(state=>state.product[+productId])
    
   
    const sellerId=currentProduct?.sellerId
    
    

    useEffect(()=>{
      dispatch(getProducts())
     
      dispatch(getUsers())
        
    }, [dispatch])

    useEffect(()=>{
        if (currentProduct ){
        dispatch(getReviews(currentProduct.sellerId))}
    },[currentProduct]
    )



    const reviews=useSelector((state)=>Object.values(state.review))
    
    // const sellerId=useSelector(state=>state.product[productId])[sellerId]
    const productSeller=useSelector(state=>state.user[currentProduct?.sellerId])
    const sesseionUser=useSelector(state=>state.session.user)
    const sellerName=productSeller?.username
   
    
    const onClickDelete=async(e)=>{
        e.preventDefault()
       const response=await dispatch(removeProduct(productId))
        if(response) {history.push('/')}
    }

    return (
        <div >
            
        {currentProduct&&(
            <>
        
        {/* <NavLink to={`/spots/${spot.id}`}>{spot?.name}</NavLink> */}
       
        {/* //{spot?.url} */}
        <div>
            <div className='mainContainer'>
            <div className='productContainer'>
            <div style={{gridTemplateColumns:'repeat 1fr'}}>
            <img src={(currentProduct?.image)} style={{height:"200px",width:'150px'}} />
            <img src={(currentProduct?.image)} style={{height:"200px",width:'150px'}} />
            <img src={(currentProduct?.image)} style={{height:"200px",width:'150px'}} />
            </div>
            <div>${currentProduct?.price}</div>
            <div>{currentProduct?.location}</div>
            <div>{currentProduct?.name}</div>
            <div>{currentProduct?.description}</div>
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
            <div className='sellerContainer'>
            <div>sold by {productSeller?.username}  </div>
            <button style={{fontWeight:'bold'}} onClick={()=>setChatForm(true)}> contact seller</button>
            {chatForm&& (
                <ChatForm sellerName={sellerName} sellerId={sellerId}/>
            )}
            <img src={(productSeller?.profilePic)} style={{height:"50px", borderRadius:'88%'}} />
            <div>sellersReview</div>
            {reviews.map((review)=>(
                
                <SingleReview review={review} key={review.id} productId={productId}/>
                
            ))}
             <CreateReviewForm />
            </div>
            </div>
           
            
        </div>
      
        {/* {(spot?.Images)[0].url}  */}
        </>)}
      
        
    </div>
    )
}

export default OneProductPage