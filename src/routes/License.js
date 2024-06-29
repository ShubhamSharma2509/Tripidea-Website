import React from 'react'
import Navbar from '../Components/Navbar'
import FooterHeroComponent from '../Components/FooterHeroComponent'
import Footer from '../Components/Footer'

export default function License() {
  return (
    <>
      <Navbar/>
      <FooterHeroComponent maintitle="License Page" sectiontitle1="Terms of Use" sectiondisc1="Here are the terms under which our product/service is provided." sectiontitle2="License Information" sectiondisc2="Details about the licensing terms for our software." />
      <Footer/>
    </>
  )
}
