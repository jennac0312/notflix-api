import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context'
import TvShowItem from '../components/TvShowItem'
import { Link } from 'react-router-dom'

const MyList = () => {

    let { myList } = useContext(AppContext)

  return (
    <div className='myList'>
        <div className='flex top'>
            <section>
                <Link to="/home">
                    <p className='arrow'>◃</p>
                </Link>
            </section>
            <h3>My List</h3>
            <p className='pencil'>✎</p>
        </div>
        <div className='buttons'>
            <button>TV Shows</button>
            <button>Movies</button>
            <button>Haven't Started</button>
            <button>Started</button>
        </div>
      {myList.map((show) => {
        return <TvShowItem show={show} parent='myList'/>
      })}
    </div>
  )
}

export default MyList
