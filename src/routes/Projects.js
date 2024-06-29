import React from 'react'
import Navbar from '../Components/Navbar'
import FooterHeroComponent from '../Components/FooterHeroComponent'
import Footer from '../Components/Footer'

export default function Projects() {
  return (
    <>
      <Navbar/>
      <FooterHeroComponent maintitle=" All Projects" sectiontitle1="Electronic store management (Python Project). " sectiondisc1="It is a GUI application developed in Python language which can handle all the store's inventory, employees, and sales. It also has a customer billing system for billing" sectiontitle2="Tutorial Management System. (Python Project). " sectiondisc2="It is a GUI-based application which is developed in Python language in which the admission of students can be done and the batches and teachers can also be managed. It also Publishes the result of the students and stores them in the database" />
      <Footer/>
    </>
  )
}
