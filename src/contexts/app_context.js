import { useState, createContext, useContext, useEffect } from "react";
import axios, { all } from "axios";
import profiles from '../models/profiles'

// create context
export const AppContext = createContext()


// function to access
const AppContextProvider = (props) => {
    console.log('%cNOTFLIX', 'color: crimson; font-size: 40px;')
    console.log('%cdah duh dum', 'color: crimson; font-size: 20px;')
    // models
    const [ currentProfile, setCurrentProfile ] = useState(null)
    
    // API 
    const [ showList, setShowList ] = useState([])
    const [ count, setCount ] = useState(0) // track show clicked
    const [ currentShow, setCurrentShow ] = useState({})
    const [ searchInput, setSearchInput ] = useState("")
    const [ filteredShows, setFilteredShows ] = useState(showList) //based on genre
    const [ topShow, setTopShow ] = useState(showList[getRandomInt(0,showList.length)]) // for main pic at top
    const [ currentGenre, setCurrentGenre ] = useState(null)
    const [ categoryShows, setCategoryShows ] = useState(null)

    const [ seasons, setSeasons ] = useState({})
    const [ episodes, setEpisodes ] = useState({})

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
    
    const fetchFilteredData = async() => {
        console.log('%cFILTERING....', 'color: red;')
        const response = await axios.get(SEARCH_URL)
        console.log(response.data)
        setFilteredShows( response.data )
        console.log(filteredShows)
    }
    
    const fetchShowDetails = async(showID, deets) => {
        const response = await axios.get(`https://api.tvmaze.com/shows/${showID}/${deets}`)

        console.log(`https://api.tvmaze.com/shows/${showID}/${deets}`)

        console.log('DETAILS DATA:', response.data)
        deets === "seasons" ? setSeasons(response.data) : setEpisodes(response.data)

        console.log('SEASONS',seasons)
        console.log('EPISODES',episodes)
    }

    useEffect(() => {
        fetchData()
        setTopShow(showList[getRandomInt(0,showList.length)])
    }, []) //get data off rip

    useEffect(() => {
        fetchFilteredData()
    }, [searchInput]) 

    useEffect(() => {
        setCategoryShows(() => sortShows())
    }, [currentGenre])

    useEffect(() => {
        // fetchShowDetails(currentShow.id, 'seasons' )
        // fetchShowDetails(currentShow.id, 'episodes' )

        console.log('SEASONS', seasons)
        console.log('EPISODES', episodes)
    }, [seasons, episodes])

    const logAndSet = (show, id) => {
        fetchShowDetails(id, 'seasons' )
        fetchShowDetails(id, 'episodes' )
        
        console.log('clicked show is:', show)
        // console.log(show.id)
        setCurrentShow(show)
        console.log('JUST CLICKED appcontext', currentShow) //one behind from show ...
        console.log('SEASONS',seasons)
        console.log('EPISODES',episodes)
    }
    
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

    // add to myList
    const addToMyList = (show) => {
        console.log('ADDING TO MY LIST', show)

        if(myList.includes(show)){
            console.log('SHOW ALREADY ADDED')
        } else {
            setMyList([...myList, show])
        }
        console.log('MY LIST:', myList)
    }


    // random num
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }


    // sorting shows by genre
    const sortShows = () => {
        let sorted = []
        showList.forEach((show) => {
            show.genres.includes(currentGenre) && sorted.push(show)
        })
        console.log('SORTED',sorted)
        return sorted
    }

    // -------------------------------------------------------------------
    // -------------------------------------------------------------------


    const sortByGenre = (show, genres) => {
        console.log(show)
        console.log(genres)

        console.log(typeof allGenres)


    }

    // sortByGenre()

    // -------------------------------------------------------------------
    // -------------------------------------------------------------------
    
    return(
        <AppContext.Provider value={{
            profiles, currentProfile, setCurrentProfile, 
            list, showList, setShowList, fetchData,
            count, setCount, 
            currentShow, setCurrentShow, clickedShow,
            searchInput, setSearchInput,
            filteredShows, setFilteredShows,
            topShow, setTopShow,
            allGenres, currentGenre, setCurrentGenre,
            getRandomInt,
            categoryShows, setCategoryShows,
            sortByGenre,
            seasons, episodes, logAndSet,
            addToMyList, myList, setMyList
        }}>

            {props.children}
        </AppContext.Provider>
    )
}


export default AppContextProvider