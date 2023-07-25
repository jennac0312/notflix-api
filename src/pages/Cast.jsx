import React from 'react'
import { Link } from 'react-router-dom'

const Cast = () => {
  return (
    <div className='casting'>

        <Link to="/home">
            <button>x</button>
        </Link>

        <div>
            <img src="https://media.tenor.com/qXzHf2tesO0AAAAC/loading-gif-steiness.gif"/>
        </div>
    </div>
  )
}

export default Cast
