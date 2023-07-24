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
        <img src='https://www.pngfind.com/pngs/m/70-702301_cast-icon-chromecast-logo-black-and-white-johns.png' alt='' className='pointer icon '/>
        <Link to="/search">
            <img src='https://icon-library.com/images/white-search-icon-transparent-background/white-search-icon-transparent-background-1.jpg' alt='' className='pointer icon search'/>
        </Link>
        <img src={currentProfile.image} alt='' className='pointer icon '/>
      </div>
    </div>
  )
}

export default Header
