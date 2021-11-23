import React, { useEffect }  from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { useState } from 'react';
import { useHistory } from 'react-router';
import { createProduct } from '../../store/product';
import './CreateProductForm.css'


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
    const [errors, setErrors] = useState([]);

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
        // if (product) {
        //   setErrors(product);
        // } else {
        //   history.push(`/products/${product.id}`)
        // }
      };
    


    return (
      <form onSubmit={handleSubmit} >
        <div className='createProductContainer'>
        <div >
        <label >
          Name of your product
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        
        </div>
        <div >
        <label >
          Image
          </label>
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
       </div>
       <div >
        <label >
          location
          </label>
          <select value={location} onChange={(e)=>setLocation(e.target.value)}>
            <option  value='' > -- select a city -- </option>
            <option value="Los Angels">Los Angels</option>
            <option value="New York City">New York City</option>
          </select>
       </div>
       <div >
        <label >
          description
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
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
            <option  value=''> -- select a category -- </option>
            <option value="Electronics & Media" >Electronics & Media</option>
            <option value="Home & Garden"  >Home & Garden</option>
            <option value="Clothing,Shoes,& Accessories"  >Clothing,Shoes,& Accessories</option>
        </select>
        </label>
         
        <button type="submit" >Create your product listing</button>
      </div>
      </form>
    )
}

export default CreateProductForm