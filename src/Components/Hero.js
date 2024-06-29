import React from 'react'
import { Link } from "react-router-dom"
import "./HeroStyle.css";

export default function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img className='img' src={props.heroImg} alt="img1" />
        <div className="hero-text">
            <h1>{props.title}</h1>
            <p>{props.text}<br/>{props.text2}</p>
            <Link to={props.btnurl} className={props.btnClass} >{props.buttonText}</Link>
        </div>
      </div>
    </>
  )
}
