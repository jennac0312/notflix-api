import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context'
import { Link } from 'react-router-dom'

const Header = () => {
    let { currentProfile } = useContext(AppContext)

  return (
    <div className='header'>
      <div className="left">
        <p className='bold spaced'>For {currentProfile.name}</p>
      </div>
      <div className="right">
        <Link to="/cast">
          <img src='https://static.thenounproject.com/png/708976-200.png' alt='' className='pointer icon invert'/>
        </Link>

        <Link to="/search">
            <img src='https://icon-library.com/images/white-search-icon-transparent-background/white-search-icon-transparent-background-1.jpg' alt='' className='pointer icon search'/>
        </Link>

        <Link to="/signin">
          <img src={currentProfile.image} alt='' className='pointer icon '/>
        </Link>
      </div>
    </div>
  )
}

export default Header
