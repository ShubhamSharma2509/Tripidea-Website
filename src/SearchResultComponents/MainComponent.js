import React from 'react'
import SearchItem from './SearchItem'
import searchitems from './SearchData.json'
import "./SearchItemStyle.css";
import { useNavigate } from 'react-router-dom';

export default function MainComponent(props) {
   
    const navigate = useNavigate();
    

    const placetype = props.placetype;
    const city = props.city;

    return ( 
        <>
        <div className="searchresult">
            <h2>Here are some of the result as per your search.</h2>
        <div className="row">
            {         
                searchitems &&  searchitems.filter((searchitems)=>{
                    return searchitems.placetype.toLowerCase().includes(placetype) && searchitems.city.toLowerCase().includes(city)}).map((searchitems)=>{
                    function handleClick(){
                        navigate("/resultitemdata", {
                            state : {
                                city: searchitems.city,
                                title: searchitems.title,
                                description: searchitems.description,
                                title2: searchitems.title2,
                                description2: searchitems.description2,
                                location : searchitems.location,
                                imageurl1: searchitems.imageurl1,
                                imageurl2: searchitems.imageurl2,
                                imageurl3: searchitems.imageurl3,
                                imageurl4: searchitems.imageurl4,
                            }})
                    }
                    return(
                        <div  className="col-md-4" id="searchresultcard" key={searchitems.imageurl}>
                            <a href="/resultitemdata" className='atag' onClick={handleClick}>
                                <SearchItem  title={searchitems.title} city={searchitems.city} description={searchitems.description.slice(0 ,100)} imageurl={searchitems.imageurl1}/>
                            </a>
                        </div>  
                    )
                })
            }
            </div>
        </div> 
      </>
  )
}
