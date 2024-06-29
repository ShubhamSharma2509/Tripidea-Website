import React from 'react'
import Navbar from "../Components/Navbar"
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import Services from '../Components/Services'

export default function Service() {
  return (
    <>
      <Navbar/>
      <Hero
      cName="hero-mid"
      heroImg="./images/service/service.jpg"
      title="Services"
      btnClass="hide"/>
      <Services/>
      <Footer/>
    </>
  )
}
