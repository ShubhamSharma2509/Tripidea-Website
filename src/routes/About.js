import React from 'react'
import Navbar from "../Components/Navbar"
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import AboutUs from '../Components/AboutUs'

export default function About() {
  return (
    <>
      <Navbar/>
      <Hero
      cName="hero-mid" 
      heroImg="./images/about/about.jpg"
      title="About"
      btnClass="hide"/>
      <AboutUs/>
      <Footer/>
    </>
  )
}
