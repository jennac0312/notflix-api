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

    // if(parent !== 'home'){
    //     showList.filter((show, index) => {
    //         console.log(show.genres.includes(currentGenre))
    //         return show.genres.includes(currentGenre) ? null : delete showList[index]
    //     })
    // }

    console.log('after FILTER', showList)

  return parent === "home" ? noGenre() : yesGenre()

    // return(
    //     <div className='main'>
    //     <MainShow />
    //     <div className="shows">
    //     { showList.map((show, index) => {
    //         return (
    //         <div className='imgContainer pointer' onClick={() => console.log(show)}>
    //             <img src={show.image.original} alt='tv show pic' key={index} className='small'/>
    //         </div>
    //         )
    //     }) }
    //     </div>
    // </div>
    // )
}

export default MainContent
