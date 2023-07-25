import React from 'react'
import { Link } from 'react-router-dom'

const Downloads = () => {
  return (
    <div style={{textAlign:"center", backgroundColor: "black", height:"100%", paddingTop:"50px"}}>
      <h1 style={{margin:"50px"}}>Downloads coming soon...</h1>
      <Link to="/home">
        <p style={{color:"red"}}>return</p>
      </Link>
    </div>
  )
}

export default Downloads
