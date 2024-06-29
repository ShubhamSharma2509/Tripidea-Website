import React from 'react'
import SearchItemData from '../SearchResultComponents/SearchItemData'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useLocation } from 'react-router-dom'

export default function ResultItemData() {
  const data = useLocation();
  console.log(data.state);
  return (
    <>
    <Navbar/>
    <SearchItemData title={data.state.title} description={data.state.description} title2={data.state.title2} description2={data.state.description2} imageurl1={data.state.imageurl1} imageurl2={data.state.imageurl2} imageurl3={data.state.imageurl3} imageurl4={data.state.imageurl4} location={data.state.location} city={data.state.city}/>
    <Footer/>
    </>
  )
}
