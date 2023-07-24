import React, { useContext, useEffect } from 'react'
import { AppContext } from '../contexts/app_context'
import { Link } from 'react-router-dom'

const Search = () => {

    let { searchInput, setSearchInput, filteredShows } = useContext(AppContext)
    
    useEffect(() => {
        console.log(searchInput)
    }, [filteredShows]) // yay it works

  return (
    <div className='searchPage'>
        <div className="top">
            <Link to="/home" style={{textDecoration:"none", color:"white"}}>
                <p className='bold pointer'>◃</p>
            </Link>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/1200px-Vector_search_icon.svg.png' className='search'/>
            <input type='text' placeholder='Search for titles, genres or people' value={searchInput} onChange={(event) => {setSearchInput(event.target.value)}}/>
        </div>
        <p>results: {filteredShows.length}</p>
        {/* display shows */}
        { filteredShows.map((show) => {
            return (
                <div className='searchResultContainer'>
                    <div className='left'>
                        <div className='imgContainer'>
                            <img src={show.show.image?.original} alt=""/> 
                        </div>
                        <p className='title'>{show.show.name}</p>
                    </div>
                    <div className="right">
                        <img src="https://icon-library.com/images/play-icon-transparent-background/play-icon-transparent-background-22.jpg" className='playButton pointer'/>
                    </div>
                </div>
            ) 
        }) }

    </div>
  )
}

export default Search
