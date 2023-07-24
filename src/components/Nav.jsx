import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../contexts/app_context'

const Nav = (  ) => {
    
    let { currentGenre } = useContext(AppContext)

    const noGenre = () => {
        return (
          <div className='nav'>
              {/* if no category selected */}
            <button className='pointer bold spaced'>TV Shows</button>
            <button className='pointer bold spaced'>Movies</button>
            <Link to="/categories">
              <button className='pointer bold spaced'>Categories <span className='arrow bold'>▾</span></button>
            </Link>
          </div>
        )
    }

    const isGenre = () => {
        return (
            <div className='nav cNav'>
                <Link to="/home">
                    <button className='pointer bold exitButton'>✖</button>
                </Link>
                <Link to="/categories">
                    <button className='pointer bold spaced category'>{currentGenre}<span className='arrow bold'>▾</span></button>
                </Link>
            </div>
        )
    }

    return currentGenre ? isGenre() : noGenre()
}

export default Nav
