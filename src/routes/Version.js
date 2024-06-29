import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import FooterHeroComponent from '../Components/FooterHeroComponent'

export default function Version() {
  return (
    <>
      <Navbar/>
      <FooterHeroComponent maintitle="Version" sectiontitle1="Verstion 1.0" sectiondisc1="Here are the terms under which our product/service is provided." sectiontitle2="Upcoming version" sectiondisc2="Details about the licensing terms for our software." />
      <Footer/>
    </>
  )
}
