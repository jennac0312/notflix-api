import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context'

const Profile = ( {profile} ) => {

    let { setCurrentProfile } = useContext(AppContext) 
    
  return (
    <div className='profileContainer' onClick={() => setCurrentProfile(profile)}>
      <img src={profile.image} alt='profile avatar' className='avatar'/>
      <p className='profileName'>{profile.name}</p>
    </div>
  )
}

export default Profile
