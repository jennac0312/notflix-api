import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context'
import Profile from './Profile'
import { Link } from 'react-router-dom'

const ProfileList = ( {parent} ) => {

    let { profiles, setCount } = useContext(AppContext)

    //   /signin
    const edit = () => {
      return (
        <div className='' onClick={() => setCount((prev) => prev + 1)}>
            <h3 className='title'>Who's Watching?</h3>
            <Link to="/signin/edit">
              <p className='edit bold'>Edit</p>
            </Link>
            <div className='profileList'>
                { profiles.map((profile, index) => {
                    return <Profile profile={profile} key={index}/>
                })}
            </div>
        </div>
      )
    }

    //   /signin/edit
    const done = () => {
      return (
        <div className='' onClick={() => setCount((prev) => prev + 1)}>
            <h3 className='title'>Who's Watching?</h3>
              <Link to="/signin">
                <p className='edit bold'>Done</p> 
              </Link>
            <div className='profileList'>
                { profiles.map((profile, index) => {
                    return <Profile profile={profile} key={index} parent="edit"/>
                })}
            </div>
        </div>
      )
    }
    
    return parent === "edit" ? done() : edit()
}

export default ProfileList
