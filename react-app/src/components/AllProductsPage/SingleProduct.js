import { getProducts } from "../../store/product"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { NavLink } from "react-router-dom"


function SingleProduct({product}) {
 
    return (
        <div >
            
            {product&&(
                <>
            
            {/* <NavLink to={`/spots/${spot.id}`}>{spot?.name}</NavLink> */}
           
            {/* //{spot?.url} */}
            <div>
                <NavLink to={`/products/${product.id}`}>
                <img src={(product?.image)} style={{height:"200px"}} />
                </NavLink>
                <div>${product?.price}</div>
                <div>{product?.location}</div>
                <div>{product?.name}</div>
                
            </div>
          
            {/* {(spot?.Images)[0].url}  */}
            </>)}
          
            
        </div>
    )
}

export default SingleProduct