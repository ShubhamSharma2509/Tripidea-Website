import React, { Component } from 'react'
import "./SearchItemStyle.css";

export default class SearchItem extends Component {
  render() {
    
    let {imageurl ,title, description, city} = this.props;
    return (
      <>
        <div className='s-card'>  
              <div className='s-image'>
                <img src={imageurl} alt="img" />
              </div>
              <h4>{title} - {city}</h4>
              <p>{description}...</p>
        </div>
      </>
    )
  }
}
