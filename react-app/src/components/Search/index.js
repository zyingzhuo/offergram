// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";


// // import { getQuery } from "../../store/search";
// // import { useSearchContext } from "../../context/SearchContext";

// function Search() {
//     const dispatch = useDispatch();
//     const history = useHistory();
//     const [searchInput, setSearchInput] = useState("");
//     const [city, setCity] = useState("City...");
    
//     const updateSearchInput = (e) => {
//         setSearchInput(e.target.value);
//       };
      
//     const updateCity=(e)=>{
//         setCity(e.target.value)
//     }

//     // const onSubmit=async(e)=>{
//     //     e.preventDefault()
//     //     await dispatch(getQuery())
//     // }

//     return (
//         <>
//         <form onSubmit>
//             <input
//             type='text'
//             value={searchInput}
//             placeholder='search here'
//             onChange={updateSearchInput}
//             />

//             <select
//             value={city}
//             onChange={updateCity}
//             >
//                 <option value='' > -- select a city -- </option>
//                 <option value='Los Angels'>Los Angels</option>
//                 <option value='New York City'>New York City</option>
//             </select>

//             <button>
//                 Search
//             </button>
           
//         </form>
//         </>
//     )
// }

// export default Search