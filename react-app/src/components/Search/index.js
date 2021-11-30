import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


import { getQuery } from "../../store/search";
// import { useSearchContext } from "../../context/SearchContext";

function Search() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [searchInput, setSearchInput] = useState("");
    const [location, setLocation] = useState("");
    
    const updateSearchInput = (e) => {
        setSearchInput(e.target.value);
      };
      
    const updateLocation=(e)=>{
        setLocation(e.target.value)
    }

    const onSubmit=async(e)=>{
        e.preventDefault()
        await dispatch(getQuery(searchInput,location))
        history.push(`/search?query=${searchInput}`)
    }

    return (
        <>
        <form onSubmit={onSubmit}>
            <input
            type='text'
            value={searchInput}
            placeholder='search here'
            onChange={updateSearchInput}
            />

            <select
            value={location}
            onChange={updateLocation}
            >
                <option value='' > -- select a city -- </option>
                <option value='Los Angels'>Los Angels</option>
                <option value='New York City'>New York City</option>
            </select>

            <button style={{border:'1px solid',borderColor:'#00a87e', backgroundColor:'#ffffff',borderRadius:'4px'}}>
                Search
            </button>
           
        </form>
        </>
    )
}

export default Search