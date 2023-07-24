import { useContext, useEffect } from "react"
import { AppContext } from "../contexts/app_context"
import Header from "../components/Header"
import Nav from "../components/Nav"
import MainContent from '../components/MainContent'
import Footer from "../components/Footer"

const Home = () => {

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

export default Home
