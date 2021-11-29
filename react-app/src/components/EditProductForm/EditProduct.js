import React, { useEffect }  from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { useState } from 'react';
import { useHistory } from 'react-router';
import { createProduct, getProducts } from '../../store/product';
import { useEditProductForm } from '../../context/EditProductContext';
import { editProduct } from '../../store/product';

function EditProductForm({productId}) {
    
    const dispatch= useDispatch();
    const history=useHistory()
    const {editForm, setEditForm}=useEditProductForm()
    const userId=useSelector(state=>state.session.user.id)
    const currentProduct=useSelector(state=>state.product[productId])
   
    const[name, setName]=useState(currentProduct.name)
    const[image, setImage]=useState(currentProduct.image)
    const[location, setLocation]=useState(currentProduct.location)
    const[description, setDescription]=useState(currentProduct.description)
    const[price, setPrice]=useState(currentProduct.price)
    const[category, setCategory]=useState(currentProduct.category)

   useEffect(()=>{
     dispatch(getProducts())
   },[dispatch])


    const handleSubmit= async(e)=>{
        e.preventDefault();
     
        const payload={
            sellerId: userId,
            name,
            image,
            location,
            description,
            price,
            category
        }
        const product=await dispatch(editProduct(payload, productId));
        if(product) {
            dispatch(getProducts())
            setEditForm(false)
            history.push(`/products/${product.id}`)
        }
       
    }
    return (
        <form onSubmit={handleSubmit} >
        <div  className='createProductContainer'>
          <label>
            Name of your product
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Image
            <input
              type="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </label>
          <label>
            location
            <select value={location} onChange={(e)=>setLocation(e.target.value)}>
              <option value="Los Angels">Los Angels</option>
              <option value="New York City">New York City</option>
            </select>
          </label>
          <label>
            description
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>
          <label>
            price
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </label>
          <label>
            category
            <select value={category} onChange={(e)=>setCategory(e.target.value)}>
              <option value="Electronics & Media" >Electronics & Media</option>
              <option value="Home & Garden"  >Home & Garden</option>
              <option value="Clothing,Shoes,& Accessories"  >Clothing,Shoes,& Accessories</option>
          </select>
          </label>
          <button type="submit" >Confirm edit</button>
        </div>
      </form>
    )
}

export default EditProductForm