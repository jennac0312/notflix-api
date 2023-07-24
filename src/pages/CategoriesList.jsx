import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context'
import { Link } from 'react-router-dom'

const CategoriesList = () => {

    let { allGenres, setCurrentGenre } = useContext(AppContext)

  return (
    <div className='categoriesPage'>
      <ul>
        {allGenres.map((genre, index) => {
            return (
                <Link to={`/categories/${genre.toLowerCase().replaceAll(' ', '')}`}>
                    <li key={index} className='pointer' onClick={() => setCurrentGenre(genre)}> {genre} </li>
                </Link>
            )
        })}
      </ul>
      <Link to="/home">
        <img src="https://cdn.icon-icons.com/icons2/2717/PNG/512/x_circle_icon_173469.png" className='exit pointer'/>
      </Link>
      <div className='block'></div>
    </div>
  )
}

export default CategoriesList
