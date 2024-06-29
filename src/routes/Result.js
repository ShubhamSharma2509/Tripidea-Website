import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import MainComponent from '../SearchResultComponents/MainComponent'
import { useLocation } from 'react-router-dom'

export default function Result() {

  const value = useLocation();
  
  return (
    <>
      <Navbar/>
      <MainComponent placetype={value.state.placetype} city={value.state.city}/>
      <Footer/>

    </>
  )
}
