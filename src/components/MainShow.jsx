import React, { useContext, useEffect } from 'react'
import { AppContext } from '../contexts/app_context'

const MainShow = () => {

    let { showList, topShow, setTopShow } = useContext(AppContext)
    console.log('top show is:', topShow)

    useEffect(() => {
        setTopShow(showList[18])
    }, [])

  return (
    <div className='mainShow'>
      <img src={topShow?.image.original}/>

      <div className="adjectives">
        <p>Slick Witty Dramedy Notable Soundtrack </p>
      </div>

      <div className="buttons">
        <button className='pointer bold play'><span className='symbol'>▶</span> Play</button>
        <button className='pointer bold list'><span className='symbol'>✓</span> My List</button>
      </div>
    </div>
  )
}

export default MainShow
