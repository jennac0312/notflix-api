import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context'

const ShowDetails = () => {

    let { currentShow } = useContext(AppContext)

  return (
    <div className='showDetailsContainer'>
      
    </div>
  )
}

export default ShowDetails
