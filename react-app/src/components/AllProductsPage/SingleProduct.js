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
                <div className='grow'><img src={(product?.image)} style={{height:"150px", width:'150px', objectFit:'cover', boxShadow:'2px 2px 2px 2px lightgrey'}} /></div>
                </NavLink>
                <div style={{fontSize:'1em', fontWeight:'700', lineHeight:'1.5'}}>{product?.name.slice(0,14)}</div>
                <div >${product?.price}</div>
                <div style={{color:'#8a8a8a',lineHeight:'1.7', fontSize:'0.875em'}}>{product?.location}</div>
               
                
            </div>
          
            {/* {(spot?.Images)[0].url}  */}
            </>)}
          
            
        </div>
    )
}

export default SingleProduct