import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context'

const MainContent = () => {

    let { showList } = useContext(AppContext) 
    console.log(showList)

  return (
    <div className='main'>
      {showList.map((show, index) => {
        return (
        <div className='imgContainer'>
            <img src={show.image.medium} alt='tv show pic' key={index} className='small'/>
        </div>
        )
      })}

    </div>
  )
}

export default MainContent
