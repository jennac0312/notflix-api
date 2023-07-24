import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context'
import MainShow from './MainShow'

const MainContent = ( {parent} ) => {

    let { showList, currentGenre } = useContext(AppContext) 
    console.log(showList)
    console.log(currentGenre)

    const noGenre = () => {
        return (
            <div className='main'>
                <MainShow />
                <div className="shows">
                {showList.map((show, index) => {
                    return (
                    <div className='imgContainer pointer'>
                        <img src={show.image.original} alt='tv show pic' key={index} className='small'/>
                    </div>
                    )
                })}
                </div>
            </div>
        )
    }
    
    const yesGenre = () => {
        return (
            <div className='main'>
                <MainShow />
                <div className="shows">
                {showList.map((show, index) => {
                    return (
                        show.genres.includes(currentGenre) ? 
                        <div className='imgContainer pointer'>
                            <img src={show.image.original} alt='tv show pic' key={index} className='small'/>
                        </div> : null
                    )
                })}
                </div>
            </div>
        )
    }
    
  return parent === "home" ? noGenre() : yesGenre()

}

export default MainContent
