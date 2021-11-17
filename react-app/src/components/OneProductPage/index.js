
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import {  useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getProducts, removeProduct } from '../../store/product';
import { getUsers } from '../../store/user';
import EditProductForm from '../EditProductForm/EditProduct';
import { useEditProductForm } from '../../context/EditProductContext';

const OneProductPage=()=>{
    // const [editForm, setEditForm]=useState(false)
    const {editForm, setEditForm}=useEditProductForm()
    const {productId}=useParams()
    const dispatch=useDispatch()
    const history=useHistory()
    useEffect(()=>{
        dispatch(getProducts())
        dispatch(getUsers())
    }, [dispatch,productId])

    const currentProduct=useSelector(state=>state.product[productId])
    const productSeller=useSelector(state=>state.user[currentProduct?.sellerId])
    const sesseionUser=useSelector(state=>state.session.user)
    // console.log('productSeller', productSeller)
    // console.log('sessionUser', sesseionUser)
    // console.log('boolean',productSeller?.id==sesseionUser?.id)
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
            <div>sold by {productSeller?.username}</div>
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