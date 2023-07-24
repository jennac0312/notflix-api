import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context'

const Categories = () => {

    let { allGenres } = useContext(AppContext)

  return (
    <div className='categoriesPage'>
      <ul>
        {allGenres.map((genre, index) => {
            return <li key={index} className='pointer'> {genre} </li>
        })}
      </ul>
      <img src="https://cdn.icon-icons.com/icons2/2717/PNG/512/x_circle_icon_173469.png" className='exit'/>
    </div>
  )
}

export default Categories
