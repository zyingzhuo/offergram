import { useEffect, useState } from "react";

import { useDispatch, useSelector } from 'react-redux';



import { getQuery } from "../../store/search";
import SingleProduct from "../AllProductsPage/SingleProduct";






function SearchResults() {
   

    // useEffect(()=>{
    //     dispatch(getQuery())
    // },[dispatch])
    const products=useSelector(state=>state.search.products.products)
    // useEffect(()=>console.log('???????????????',products),[products])

    return(
        <>
        <div className='productsContainer' style={{marginTop:'5%'}}>
       {products.map((product)=>(
           <SingleProduct product={product}/>
       ))}
       </div>
       </>
    )
}

export default SearchResults