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
    const [validationErrors, setValidationErrors]=useState([])

    const validate=()=>{
      const validationErrors=[]
      if(name.length>50) validationErrors.push('name must be less than 25 characters');
      if(price<0) validationErrors.push('price must be greater than 0')
      return validationErrors
    }

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

        const errors=validate();
        if(errors.length>0) {
          setValidationErrors(errors)
        } else {
          setValidationErrors([])
        const product=await dispatch(createProduct(payload));
        if(product) {
            history.push(`/products/${product.id}`)
        }
      }
        // if (!product) {
        //   setErrors(product);
        // } else {
        //   history.push(`/products/${product.id}`)
        // }
      };
    


    return (
      <>
      {validationErrors.length>0 && (
        <div>
          <ul>
            {validationErrors.map(error=><li>{error}</li>)}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit} style={{marginTop:'5%'}}>
        <div className='createProductContainer'>
          <div style={{ width:'350px', display:'flex', flexDirection:'column'}}>
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
         
        <button type="submit" style={{border:'1px solid',borderColor:'#00a87e', backgroundColor:'#ffffff',borderRadius:'4px',marginTop:'2%',width:'100px',marginLeft:'20%'}} >Create your product listing</button>
      </div>
      </div>
      </form>
      </>
    )
}

export default CreateProductForm