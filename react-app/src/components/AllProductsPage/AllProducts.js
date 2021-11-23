
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';


import { NavLink } from 'react-router-dom';

import { getProducts } from '../../store/product';
import SingleProduct from './SingleProduct';
import './AllProducts.css'

const AllProducts=()=>{


    const dispatch= useDispatch()
    const productsArr=useSelector(state=>Object.values(state.product))

    useEffect(()=>{
        dispatch(getProducts())
    }, [dispatch])

    return (
        <div >
        
          {!productsArr.length && <span>No products available right now.</span>}
          <div className='productsContainer' >
            {productsArr.map((product) => (
              <SingleProduct  product={product} key={product.id} />
            ))}
            </div>
        </div>
      );
}

export default AllProducts