import React from 'react'
import Navbar from '../Components/Navbar'
import FooterHeroComponent from '../Components/FooterHeroComponent'
import Footer from '../Components/Footer'

export default function TermsandServices() {
  return (
    <>
      <Navbar/>
      <FooterHeroComponent heroImg="./images/service/service.jpg" maintitle=" Terms and Condition" sectiontitle1="Use of Services. " sectiondisc1="TripIdea provides a platform for discovering travel ideas and recommendations. You agree to use the services responsibly and abide by all applicable laws and regulations." sectiontitle2="User Content. " sectiondisc2="Any content you submit to TripIdea, including reviews, comments, or suggestions, grants us a non-exclusive, royalty-free license to use, modify, and distribute that content." />
      <Footer/>
    </>
  )
}
