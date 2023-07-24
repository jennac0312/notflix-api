import React from 'react'

const Nav = () => {
  return (
    <div className='nav'>
        {/* if no category selected */}
      <button className='pointer bold spaced'>TV Shows</button>
      <button className='pointer bold spaced'>Movies</button>
      <button className='pointer bold spaced'>Categories <span className='arrow bold'>⌤</span></button>
    </div>
  )
}

export default Nav
