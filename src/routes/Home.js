import React from 'react'
import Navbar from "../Components/Navbar"
import Hero from '../Components/Hero'
import Destination from '../Components/Destination'
import Footer from '../Components/Footer'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero
      cName="hero" 
      heroImg="./images/home/homemain.jpg"
      title="Seacrch for a location for travel"
      text="Choose your location and idea"
      buttonText="Search plan"
      btnurl="/search"
      btnClass="Show"/>
      <Destination/>
      <Footer/>
    </>
  )
}
