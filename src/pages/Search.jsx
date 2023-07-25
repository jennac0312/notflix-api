import React, { useContext, useEffect } from 'react'
import { AppContext } from '../contexts/app_context'
import { Link } from 'react-router-dom'
import TvShowItem from '../components/TvShowItem'
import SearchInput from '../components/SearchInput'

const Search = () => {

    let { filteredShows } = useContext(AppContext)
    
  return (
    <div className='searchPage'>
       <SearchInput />

        <p>results: {filteredShows.length}</p>

        {/* display shows */}
        { filteredShows.map((show) => { return <TvShowItem show={show}/>}) }

    </div>
  )
}

export default Search
