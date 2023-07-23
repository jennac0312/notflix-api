import { useContext } from "react"
import { AppContext } from "../contexts/app_context"
import Header from "./Header"

const HomeScreen = () => {

    let { currentProfile } = useContext(AppContext)

  return (
    <div className='home'>
        <Header />
    </div>
  )
}

export default HomeScreen
