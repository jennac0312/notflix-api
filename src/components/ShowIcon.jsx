import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context'

const ShowIcon = ( {show, index} ) => {

    let { logAndSet } = useContext(AppContext)
    return (
        <div className='imgContainer pointer' onClick={() => {logAndSet(show, show.id)}}>
            <img src={show.image.original} alt='tv show pic' key={index} className='small'/>
        </div>
    )
}

export default ShowIcon
