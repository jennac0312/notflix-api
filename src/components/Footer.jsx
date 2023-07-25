import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <Link to="/home" className='div'>
          <p className='icon'>⌂</p>
          <p className='option'>Home</p>
      </Link>
      <Link to="/new" className='div'>
        <p className='icon'>⌂</p>
        <p className='option'>New & Hot</p>
      </Link>
      <Link to="/downloads" className='div'>
        <p className='icon'>⇩</p>
        <p className='option'>Downloads</p>
      </Link>
    </div>
  )
}

export default Footer
