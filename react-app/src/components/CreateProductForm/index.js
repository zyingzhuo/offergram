import React, { useEffect }  from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { useState } from 'react';
import { useHistory } from 'react-router';
import { createProduct } from '../../store/product';


function CreateProductForm () {
    const dispatch= useDispatch();
    const history=useHistory()
    const userId=useSelector(state=>state.session.user.id)

   
    const[name, setName]=useState('')
    const[image, setImage]=useState('')
    const[location, setLocation]=useState('')
    const[description, setDescription]=useState('')
    const[price, setPrice]=useState('')
    const[category, setCategory]=useState('')

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
        const product=await dispatch(createProduct(payload));
        if(product) {
            history.push(`/products/${product.id}`)
        }
    }


    return (
        <form onSubmit={handleSubmit} >
        <div  >
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
          </div>
        <button type="submit" >Create your product listing</button>
      </form>
    )
}

export default CreateProductForm