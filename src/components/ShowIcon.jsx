import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context'
import { Link } from 'react-router-dom'

const ShowIcon = ( {show, index} ) => {

    let { logAndSet } = useContext(AppContext)
    return (
            <div className='imgContainer pointer' onClick={() => {logAndSet(show, show.id)}}>
        <Link to="/details">
                <img src={show.image.original} alt='tv show pic' key={index} className='small'/>
        </Link>
            </div>
    )
}

export default ShowIcon
