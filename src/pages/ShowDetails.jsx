import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context'
import { Link } from 'react-router-dom'

const ShowDetails = () => {

    let { currentShow, getRandomInt, seasons, episodes } = useContext(AppContext)

  return (
    <div className='showDetailsContainer'>
      <div className="preview">
        <img src="https://i.pinimg.com/originals/fd/b8/99/fdb8999d0e792c17532fff9ac4425041.gif" alt="" className='temp'/>
        <div className='castContainer'>
          <img src="https://static.thenounproject.com/png/708976-200.png" alt="" className="cast invert" />
        </div>
        <Link to='/home'>
          <button className="exit2">x</button>
        </Link>
        </div>

        <div className="body">
          <h4 className='showTitle'>{currentShow.name}</h4>

          <div className="details">
            <div className="top">
              <span className="match">{getRandomInt(0,100)}% match</span>
              <span className="year">{currentShow.premiered.split('').splice(0,4)}</span>
              <img src="src/images/tv-ma.png" alt="tv-14" />
              <span className="seasons">{seasons.length} Seasons</span>
            </div>
            <div className="images">
              <img src="src/images/tv-hd.png" alt='tv-hd'/>
              <img src="src/images/tv-atmos.png" alt='tv-atmos'/>
            </div>
          </div>
          <div className="buttons">
            <button className="play">▶ Play</button>
            <button className="download"><span className='bold'>⬇</span>Download</button>
          </div>

          <div className="summary">
            <p>{currentShow.summary.replaceAll('<p>', '').replaceAll('</p>','').replaceAll('<b>', '').replaceAll('</b>', '')}</p>
          </div>
          <div className="credits">
            <p>Cast<span className='bold'>:</span> coming soon...</p>
            <p>Creator<span className='bold'>:</span> {currentShow.name.replaceAll(' ','')} LastName </p>
          </div>
          <div className="options">
            <div className="left">
              <img src="" alt="ADD symbols" />
              <p>My List</p>
            </div>
            <div className="mid">
              <img src="" alt="ADD symbols" />
              <p>Rate</p>
            </div>
            <div className="right">
              <img src="" alt="ADD symbols" />
              <p>Share</p>
            </div>

          </div>

        </div>
    </div>
  )
}

export default ShowDetails
