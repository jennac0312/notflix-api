import React from 'react'
import { Link } from 'react-router-dom'

const New = () => {
  return (
    <div style={{textAlign:"center", backgroundColor: "black", height:"100%", paddingTop:"50px"}}>
      <h1 style={{margin:"50px"}}>New coming soon...</h1>
      <Link to="/home">
        <p style={{color:"red"}}>return</p>
      </Link>
    </div>
  )
}

export default New
