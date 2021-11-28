const ADD_PRODUCT='product/addProduct'
const LOAD_PRODUCTS='product/loadProducts'
const DELETE_PRODUCT='product/deleteProduct'

const addProduct=(product)=>({
    type: ADD_PRODUCT,
    product
})

const loadProducts=(products)=>({
    type: LOAD_PRODUCTS,
    products
})



const deleteProduct=(productId)=>({
    type: DELETE_PRODUCT,
    productId
})



export const getProducts=()=>async(dispatch)=>{
    const response=await fetch('/api/products/')
    const products=await response.json()
    console.log('!!!!!!!!!!', products)
    dispatch(loadProducts(products.products))
    return products
}

export const createProduct=(payload)=>async(dispatch)=>{
    const response=await fetch(`/api/products/`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })

    if (response.ok) {
        const product=await response.json()
        dispatch(addProduct(product))
        return product
    }

  
}

export const editProduct=(payload,productId)=>async(dispatch)=>{
    const response= await fetch(`/api/products/${productId}/edit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    })
    const updatedProduct=await response.json()
    dispatch(addProduct(updatedProduct))
    return updatedProduct
}

export const removeProduct=(productId)=>async(dispatch)=>{
    let id= +productId
    const response=await fetch(`/api/products/${productId}`,{
        method: 'DELETE'
    })
    if(response.ok) {
        const product=await response.json()
        dispatch(deleteProduct(product.id))
    }
    return response
}

const initialState={}
const productReducer=(state=initialState, action)=>{
    switch(action.type) {
        case LOAD_PRODUCTS: {
            const newState={...state};
            (action.products).forEach(product=>{
                newState[product.id]=product
            })
            return newState
        }
        case ADD_PRODUCT: {
            const newState={...state}
            newState[action.product.id]=action.product
        }

        case DELETE_PRODUCT:{
            const newState={...state}
            delete newState[action.productId]
            return {...newState}
        }
      
        default:
            return state;
    }
}

export default productReducer