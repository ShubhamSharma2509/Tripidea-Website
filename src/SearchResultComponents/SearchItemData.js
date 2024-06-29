import React from 'react'
import { Link } from "react-router-dom"
import "./SearchItemData.css"

export default function SearchItemData(props) {
  return (
    <>
    <div className='container'>
      <div className="first-container">
          <div className="container-text">
              <h2>{props.title} - {props.city}</h2>
              <p>{props.description}</p>
              <Link to={props.location} target="_blank" rel='noreferrer' className='button'>Go to Location </Link>
            </div>
            <div className="image">
              <img src={props.imageurl1} alt="img" />
              <img src={props.imageurl2} alt="img" />
            </div>
        </div>
        <div className="first-container-reverse">
          <div className="container-text">
              <h2>{props.title2}</h2>
              <p>{props.description2}</p>
            </div>
            <div className="image">
              <img src={props.imageurl3} alt="img" />
              <img src={props.imageurl4} alt="img" />
            </div>
        </div>
    </div> 
    </>
  )
}
