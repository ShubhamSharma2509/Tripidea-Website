import React, { useEffect } from 'react'
import './FooterHeroComponent.css';

function FooterHeroComponent(props) {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <>
    
    <div className="footer-pages-container">
      <div className="footer-page">
        <h1 className="footer-page-title">{props.maintitle}</h1>
        <div className="section">
          <h2 className="section-title">{props.sectiontitle1}</h2>
          <p>{props.sectiondisc1}</p>
        </div>
        <div className="section">
          <h2 className="section-title">{props.sectiontitle2}</h2>
          <p>{props.sectiondisc2}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default FooterHeroComponent

