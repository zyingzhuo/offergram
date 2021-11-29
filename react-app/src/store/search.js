const SET_SEARCH='search/setSearch'

const setSearch=(products)=>({
    type: SET_SEARCH,
    products,
})

export const getQuery=(queryString, city)=>async(dispatch)=>{
    const res= await fetch(`/api/search?query=${queryString}${city ? `&city= ${city}` : ""}` )
    const data=await res.json()
    const searchData={}

    searchData.products=data.products || []
    console.log('!!!!!!!!!!!!!!!!!',searchData)
    dispatch(setSearch(searchData))
    console.log('@@@@@@@@@@@@@@@@@@',data.products)
    return data.products
}


const initialState = {
    products:[]
  };

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_SEARCH:
          console.log("3333333333",action.products)
        return {products:action.products};
       
      default:
        return state;
    }
  };
  
  export default searchReducer;