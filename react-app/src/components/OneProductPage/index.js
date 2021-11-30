
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
import DirectMessage from '../DirectMessage/DirectMessage'


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
    // let totalrating=0;
    // for (let i=0; i<reviews.length; i++) {
    //     totalrating+=reviews[i].rating
    // }
    // const averagerating=totalrating/(reviews.legnth)
    // console.log(averagerating)
    
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
            <div className='mainContainer' style={{marginTop:'5%'}}>
                <div className='productContainer'>
                    <div style={{color: '#121212', fontWeight:'900', lineHeight:'1.333333'}}>{currentProduct?.name}</div>
                    <div style={{lineHeight:'1.333', fontWeight:'900'}}>${currentProduct?.price}</div>
                    <div style={{fontWeight:'400', fontSize:'10px', lineHeight:'1.5'}}>{currentProduct?.location}</div>
                    <div style={{fontWeight:'400', fontSize:'10px', lineHeight:'1.5'}}>{currentProduct?.category}</div>
                    <div style={{gridTemplateColumns:'repeat 1fr'}}>
                    <img src={(currentProduct?.image)} style={{height:"200px",width:'150px'}} />
                    <img src={(currentProduct?.image)} style={{height:"200px",width:'150px'}} />
                    <img src={(currentProduct?.image)} style={{height:"200px",width:'150px'}} />
                    </div>
                    {/* <div>${currentProduct?.price}</div>
                    <div>{currentProduct?.location}</div> */}
                    {/* <div>{currentProduct?.name}</div> */}
                    <div style={{color:'#121212', fontSize:'1.5rem', fontWeight:'400', lineHeight:'1.5'}}>Description</div>
                    <div>{currentProduct?.description}</div>
                    {(sesseionUser?.id==productSeller?.id)&&(
                        <>
                            <div style={{display:'flex', marginTop:'3%'}}>
                            <button onClick={()=>setEditForm(true)} className='editButton'>edit</button>
                            <button onClick={onClickDelete} className='deleteButton'>delete</button>
                            </div>
                            {editForm &&(
                                <EditProductForm productId={productId}/>
                            
                            )}
                        </>
                    )
                    }
                </div>
                <div className='sellerContainer'>
                    {/* <div>{currentProduct?.name}</div>
                    <div>${currentProduct?.price}</div>
                    <div>{currentProduct?.location}</div>
                    <div>{currentProduct?.category}</div> */}
                    
                    {/* <div>sold by {productSeller?.username}  </div> */}
                    <button style={{fontWeight:'bold', color:'green', marginBottom:'30px'}} onClick={()=>setChatForm(true)} className='askContainer'><NavLink style={{textDecoration:'none'}} to={`/messages/sender/${sesseionUser?.id}/receiver/${productSeller?.id}`}>Ask</NavLink></button>
                    {/* {chatForm&& (
                        <ChatForm sellerName={sellerName} sellerId={sellerId}/>
                    )} */}
                    {/* {chatForm&& (
                        <DirectMessage senderId={sesseionUser.id} receiverId={productSeller}/>
                    ) */}

                    {/* } */}
                    <div className='sellerPortion'>
                        <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
                            <img src={(productSeller?.profilePic)} style={{height:"50px",width:'50px', borderRadius:'50%'}} />
                            <div style={{fontSize:'15px'}}>{productSeller?.username}</div>
                        </div>
                        <div>
                            <div style={{fontSize:'10px', fontWeight:'700'}}>Sold {productSeller?.sold}</div>
                            <div style={{fontSize:'10px', fontWeight:'700'}}>Bought {productSeller?.bought}</div>
                            <div style={{fontSize:'10px', fontWeight:'700'}}>reviews ({reviews.length})</div>
                        </div>
                    </div>
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