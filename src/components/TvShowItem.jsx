import React from 'react'

const TvShowItem = ( {show, parent} ) => {

    const myList = () => {
        return (
            <div className='searchResultContainer' onClick={() => console.log('JUST CLICKED THIS', show)}>
                <div className='left'>
                    <div className='imgContainer'>
                        <img src={show.image?.original} alt=""/> 
                    </div>
                    <p className='title'>{show.name}</p>
                </div>
                <div className="right">
                    <img src="https://icon-library.com/images/play-icon-transparent-background/play-icon-transparent-background-22.jpg" className='playButton pointer'/>
                </div>
            </div>
        ) 
    }

    const category = () => {
        return (
            <div className='searchResultContainer' onClick={() => console.log('JUST CLICKED THIS', show.show)}>
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

    return parent === "myList" ? myList() : category()
}

export default TvShowItem
