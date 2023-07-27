import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../contexts/app_context'

const Nav = ( {genre} ) => {
    
    let { currentGenre, setCurrentGenre } = useContext(AppContext)

    console.log('CURRENT', currentGenre)
    console.log('GENRE', genre)

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
                    <button className='pointer bold exitButton' onClick={() => setCurrentGenre(null)}>✖</button>
                </Link>
                <Link to="/categories">
                    <button className='pointer spaced category'>{currentGenre}<span className='arrow bold'>▾</span></button>
                </Link>
            </div>
        )
    }

    return currentGenre  && currentGenre !== "My List" ? isGenre() : noGenre()
}

export default Nav
