import { useState, createContext, useContext } from "react";

// create context
export const AppContext = createContext()


// function to access
const AppContextProvider = (props) => {
    const URL = `https://api.tvmaze.com/shows`
    console.log(URL)


    return(
        <AppContext.Provider value={{

        }}>
            {props.children}
        </AppContext.Provider>
    )
}


export default AppContextProvider