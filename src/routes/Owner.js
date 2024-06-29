import React from 'react'
import Navbar from '../Components/Navbar'
import FooterHeroComponent from '../Components/FooterHeroComponent'
import Footer from '../Components/Footer'

export default function Owner() {
  return (
    <>
      <Navbar/>
      <FooterHeroComponent maintitle="Owner Page" sectiontitle1="Developed and handle by Shubham Sharma" sectiondisc1="Here are the terms under which our product/service is provided."/>
      <Footer/>
    </>
  )
}
