import React, { useContext, useEffect } from 'react'
import { AppContext } from '../contexts/app_context'

const MainShow = () => {

    let { showList, topShow, setTopShow, getRandomInt, filteredShows, categoryShows } = useContext(AppContext)
    console.log('top show is:', topShow)

    useEffect(() => {
        // categoryShows != null ? setTopShow(categoryShows[getRandomInt(0, categoryShows.length)]) : 
        setTopShow(showList[getRandomInt(0, showList.length)]) 
        
    }, [])

  return (
    <div className='mainShow pointer' onClick={() => console.log(topShow)}>
      <img src={topShow?.image.original}/> 

      <div className="adjectives">
        <p>Slick・Witty・Dramedy・Notable Soundtrack </p>
      </div>

      <div className="buttons">
        <button className='pointer bold play'><span className='symbol'>▶</span> Play</button>
        <button className='pointer bold list'><span className='symbol'>✓</span> My List</button>
      </div>
    </div>
  )
}

export default MainShow
