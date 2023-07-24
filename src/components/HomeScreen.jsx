import { useContext, useEffect } from "react"
import { AppContext } from "../contexts/app_context"
import Header from "./Header"
import Nav from "./Nav"
import MainContent from './MainContent'
import Footer from "./Footer"

const HomeScreen = () => {

    let { currentProfile, fetchData, showList } = useContext(AppContext)

    // useEffect(() => {
    //     fetchData()
    //     console.log(showList)
    // }, [currentProfile])

  return (
    <div className='home'>
        <Header />
        <Nav />
        <MainContent />
        <Footer />
    </div>
  )
}

export default HomeScreen
