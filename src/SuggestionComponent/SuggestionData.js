import "./SuggestionStyle.css";
import React from 'react'

export default function SuggestionData(props) {
  return (
    <>
        <div className="s-card">
              <div className="s-image">
                <img src={props.image} alt="suggestion"/>
              </div>
              <h4>{props.heading}</h4>
              <p>{props.text}</p>
        </div>
    </>
  )
}
