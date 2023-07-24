import React from 'react'
import MainContent from '../components/MainContent'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Category = ( {genre} ) => {
  return (
    <div className='categoryPage'>
      this is the {genre} category
      <Header />
      <Nav />
      <MainContent />
      <Footer />
    </div>
  )
}

export default Category
