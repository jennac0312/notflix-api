import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";
import profiles from '../models/profiles'

// create context
export const AppContext = createContext()


// function to access
const AppContextProvider = (props) => {
    // models
    const [ currentProfile, setCurrentProfile ] = useState(null)

    // API
    const URL = `https://api.tvmaze.com/shows`
    console.log(URL)

    const [ showList, setShowList ] = useState(null)
    const [ count, setCount ] = useState(0) // track show clicked
    const [ currentShow, setCurrentShow ] = useState(null)

    // fetch data
    const fetchData = async () => {
        const response = await axios.get(URL)
        console.log(response.data)
        setShowList( response )
    }

    useEffect(() => {
        fetchData()
    }, []) //get data off rip

    // container/show clicked
    const clickedShow = (clicked) => {
        setCount((prev) => prev + 1) // incremment click count
        setCurrentShow(clicked)
    }



    return(
        <AppContext.Provider value={{
            profiles, currentProfile, setCurrentProfile, 
            showList, setShowList, 
            count, setCount, 
            currentShow, setCurrentShow, clickedShow
        }}>
            {props.children}
        </AppContext.Provider>
    )
}


export default AppContextProvider