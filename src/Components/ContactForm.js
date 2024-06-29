import "./ContactFormStyle.css"

import React, { useEffect } from 'react'

export default function ContactForm() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <>
      <div className="form-container">
        <h3>Contact us here for pramotion of you places like restorent and cafes. Also You can Contact us regarding any feedback or issues or problems.</h3>
        <form >
            <input placeholder="Name"/>
            <input placeholder="Email"/>
            <input placeholder="Subject"/>
            <textarea placeholder="Message" rows="4"></textarea>
            <button>Send Message</button>
        </form>
      </div>
    </>
  )
}
