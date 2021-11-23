import { getProducts } from "../../store/product"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { NavLink } from "react-router-dom"
import'./AllProducts.css'


function SingleProduct({product}) {
   
   
    return (
        <div className='singleProductContainer'>
            
            {product&&(
                <>
            
            {/* <NavLink to={`/spots/${spot.id}`}>{spot?.name}</NavLink> */}
           
            {/* //{spot?.url} */}
            <div >
                <NavLink to={`/products/${product.id}`}>
                <img src={(product?.image)} style={{height:"150px", width:'150px'}} />
                </NavLink>
                <div>{product?.name}</div>
                <div>${product?.price}</div>
                <div>{product?.location}</div>
               
                
            </div>
          
            {/* {(spot?.Images)[0].url}  */}
            </>)}
          
            
        </div>
    )
}

export default SingleProduct