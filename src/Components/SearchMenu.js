import React, { useState } from 'react'
import "./SearchMenu.css"
import { useNavigate} from 'react-router-dom'

export default function Searchmenu() {

  const navigate = useNavigate();

  function handleClick(){
    if(city===""){
      alert("Please Select the City");
      return
    }
    else if(placetype===""){
      alert("Please Select the Type of place");
      return
    }
    navigate("/result", {state : {placetype :placetype, city : city}})
  }

  const [city, setcity] = useState('');
  const [placetype, setPlacetype] = useState('');

  return (
    <>
    <div className="background">
      <div className="search">
        <h1>Select your City and Search  places to visit</h1>
          <div>
            <select className='select'  onChange={(e)=>setcity(e.target.value) } >
            <option value="null" className='fro'>Select City</option>
            <option value="nashik">Nashik</option>
          </select>
          <select className='select' onChange={(e)=>setPlacetype(e.target.value)}>
            <option value="null">Select type of place</option>
            <option value="treak">Treak</option>
            <option value="religious">Religious</option>
            <option value="restorent">Restorent and Cafes</option>
          </select>
          </div>
          <button className='button' onClick={handleClick}  type='submit' value="Submit" >Submit</button>        
      </div>
    </div>
    </>
  )
}
//**<a  href='/result'> <input className='button' type="submit" value="Submit"/></a> */