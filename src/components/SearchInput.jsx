import React from 'react'
import { useContext, useEffect } from 'react'
import { AppContext } from '../contexts/app_context'
import { Link } from 'react-router-dom'

const SearchInput = () => {
    let { searchInput, setSearchInput, filteredShows } = useContext(AppContext)
    
    useEffect(() => {
        console.log(searchInput)
        return () => {
            setSearchInput('') // clears prev input on unmount
        }
    }, []) // yay it works

  return (
    <div className="top">
        <Link to="/home" style={{textDecoration:"none", color:"white"}}>
            <p className='bold pointer'>◃</p>
        </Link>
        
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/1200px-Vector_search_icon.svg.png' className='search'/>

        <input type='text' 
            placeholder='Search for titles, genres or people'
            autoFocus
            value={searchInput} 
            onChange={(event) => {setSearchInput(event.target.value)}}
        />

    </div>
  )
}

export default SearchInput
