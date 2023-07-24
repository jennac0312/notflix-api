import { useState, createContext, useContext, useEffect } from "react";
import axios, { all } from "axios";
import profiles from '../models/profiles'

// create context
export const AppContext = createContext()


// function to access
const AppContextProvider = (props) => {
    // models
    const [ currentProfile, setCurrentProfile ] = useState(null)
    
    // API 
    const [ showList, setShowList ] = useState([])
    const [ count, setCount ] = useState(0) // track show clicked
    const [ currentShow, setCurrentShow ] = useState({})
    const [ searchInput, setSearchInput ] = useState("")
    const [ filteredShows, setFilteredShows ] = useState(showList) //based on genre
    const [ topShow, setTopShow ] = useState(showList[getRandomInt(0,showList.length)]) // for main pic at top
    

    const [ myList, setMyList ] = useState([])
    let allGenres = [] // need to add myList

    //  URLs
    const URL = `https://api.tvmaze.com/shows`
    const  SEARCH_URL = `https://api.tvmaze.com/search/shows?q=${searchInput}` //not case sensitive, ignores special chars
    // console.log(URL)
    
    let list 
    // fetch data
    const fetchData = async () => {
        const response = await axios.get(URL)
        console.log(response.data)
        setShowList( response.data )

        list = response.data
    }
    
    useEffect(() => {
        fetchData()
    }, []) //get data off rip
    
    // get all genres
    const getAllGenres = () => {
        let genres = []
        showList.forEach((show) => {
            genres.push(...show.genres)
        })
        allGenres = Array.from( new Set(genres) )
        allGenres.sort() // alphabetize yay
        
        allGenres.unshift('My List')
        console.log(allGenres)
    }
    getAllGenres()

    // container/show clicked
    const clickedShow = (clicked) => {
        setCount((prev) => prev + 1) // incremment click count
        setCurrentShow(clicked)
    }



    // random num
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }

    return(
        <AppContext.Provider value={{
            profiles, currentProfile, setCurrentProfile, 
            list, showList, setShowList, fetchData,
            count, setCount, 
            currentShow, setCurrentShow, clickedShow,
            searchInput, setSearchInput,
            filteredShows, setFilteredShows,
            topShow, setTopShow,
            allGenres
        }}>

            {props.children}
        </AppContext.Provider>
    )
}


export default AppContextProvider