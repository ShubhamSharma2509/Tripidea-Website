import React from 'react'
import Navbar from '../Components/Navbar'
import FooterHeroComponent from '../Components/FooterHeroComponent'
import Footer from '../Components/Footer'
export default function Polacy() {
  return (
    <>
      <Navbar/>
      <FooterHeroComponent maintitle=" Privacy Polay" sectiontitle1="Information Collection. " sectiondisc1="We collect personal information such as your name, email address, and browsing behavior when you visit our website." sectiontitle2="Use of Information. " sectiondisc2="We use your information to provide personalized recommendations, improve our services, and communicate with you about promotions and updates." />
      <Footer/>
    </>
  )
}
