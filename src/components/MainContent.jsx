import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context'
import MainShow from './MainShow'
import Nav from './Nav'
import ShowIcon from './ShowIcon'

const MainContent = ( {parent, genre} ) => {

    console.log('CURRENT GENRE',genre)
    let { showList, currentGenre, allGenres, logAndSet } = useContext(AppContext) 
    console.log(showList)
    console.log(currentGenre)

    const noGenre = () => {
        return (
            <div className='main'>
                <Nav genre={genre}/>
                <MainShow />

                <h5 className='title'>TV Shows</h5>

                <div className="shows">
                    {showList.map((show, index) => {
                        return <ShowIcon show={show} index={index}/>
                    })}
                </div>


            </div>
        )
    }
    
    const yesGenre = () => {
        return (
            <div className='main'>
                <Nav genre={genre}/>
                <MainShow />
                <div className="shows">
                {showList.map((show, index) => {
                    return (
                        show.genres.includes(currentGenre) ? 
                        <div className='imgContainer pointer' onClick={() => console.log('JUST CLICKED',show)}>
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
