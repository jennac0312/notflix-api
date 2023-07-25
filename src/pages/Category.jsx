import React, { useContext } from 'react'
import MainContent from '../components/MainContent'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { AppContext } from '../contexts/app_context'

const Category = ( {genre} ) => {

  let { currentGenre } = useContext(AppContext)
  return (
    <div className='categoryPage'>
      <Header />
      {/* <Nav /> */}
      <MainContent genre={currentGenre}/>
      <Footer />
    </div>
  )
}

export default Category
