import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
        {/* if no category selected */}
      <button className='pointer bold spaced'>TV Shows</button>
      <button className='pointer bold spaced'>Movies</button>
      <Link to="/categories">
      <button className='pointer bold spaced'>Categories <span className='arrow bold'>⌤</span></button>
      </Link>
    </div>
  )
}

export default Nav
