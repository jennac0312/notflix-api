import React, { useContext, useEffect } from 'react'
import { AppContext } from '../contexts/app_context'
import { useNavigate } from 'react-router-dom'

const LoadingScreen = ( { parent } ) => {
    let { currentProfile } = useContext(AppContext)
    console.log(currentProfile)
    const navigate = useNavigate()

    // const redirect = () => {
    //     console.log('redirecting...')
    //     navigate('/signin')
    // }
    
    useEffect(() => {
        console.log('page mounted')
        setTimeout(() => {
            currentProfile ? navigate('/home') : navigate('/signin')
        }, currentProfile ? 1500 : 4000)
    }, [])

    const logo = () => {
        return(
            <div className='loading'>
                <img src="https://variety.com/wp-content/uploads/2019/02/netflix_newlogoanimation.gif" className='notflix'/>
                <div className='block'></div>
            </div>

        )
    }

    const avatar = () => {
        return(
            <div className='loading'>
                <img src={currentProfile.image} className='avatar'/>
                <img src='https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif' className='gif'/>
            </div>
           
        )
    }

    return currentProfile ? avatar() : logo()
}

export default LoadingScreen
