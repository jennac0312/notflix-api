import React from 'react'

const TvShowItem = ( {show} ) => {

    return (
        <div className='searchResultContainer' onClick={() => console.log(show.show)}>
            <div className='left'>
                <div className='imgContainer'>
                    <img src={show.show.image?.original} alt=""/> 
                </div>
                <p className='title'>{show.show.name}</p>
            </div>
            <div className="right">
                <img src="https://icon-library.com/images/play-icon-transparent-background/play-icon-transparent-background-22.jpg" className='playButton pointer'/>
            </div>
        </div>
    ) 
}

export default TvShowItem
