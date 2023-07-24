import React from 'react'

const LoadingScreen = ( { parent } ) => {
    // if rendered by app load Logo
    //if rendered by profile then

    const logo = () => {
        return(
            <h1>netflix loading ...</h1>
        )
    }

    const avatar = () => {
        return(
           <h1>profile loading ...</h1>
        )
    }

    return parent === 'app' ? logo() : avatar()
}

export default LoadingScreen
