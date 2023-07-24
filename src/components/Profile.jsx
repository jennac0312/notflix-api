import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context'
import { Link } from 'react-router-dom'

const Profile = ( {profile} ) => {

    let { setCurrentProfile } = useContext(AppContext) 

  return (
    <Link to="/" style={ { textDecoration:"none" , color:"rgba(255, 255, 255, 0.897)"} }>
        <div className='profileContainer' onClick={() => setCurrentProfile(profile)}>
        <img src={profile.image} alt='profile avatar' className='avatar'/>
        <p className='profileName'>{profile.name}</p>
        </div>
    </Link>
  )
}

export default Profile
