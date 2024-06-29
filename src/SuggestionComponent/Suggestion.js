import React from 'react'
import "./SuggestionStyle.css";
import SuggestionData from './SuggestionData';

export default function Suggestion() {
  return (
    <div className='suggestion'>
      <h1>Suggestion for you plan</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum libero dolorem provident, consectetur possimus minima magnam minus odio facilis nam quod iusto laudantium et molestiae optio tempora commodi incidunt corporis.</p>
        <div className="suggestioncard">
            <SuggestionData
            image={"./images/suggestion/harihar.jpg"}
            heading="Harihar Fort"
            text="Harihar fort also known as Harshagad is a fort located 40 km from Nashik City, 48 km from Igatpuri, 40 km from Ghoti in Nashik district, of Maharashtra, India. It is an important fort in Nashik district, and was constructed to look upon the trade route through Gonda Ghat. It receives many visitors because of its peculiar rock-cut steps."/>
            <SuggestionData
            image={"./images/suggestion/varanasi.jpg"}
            heading="Varanasi"
            text="Ganga aarti is a magnificent evening ritual in Varanasi that one must not miss. The aarti, or worshipping River Ganga, takes place every day, at dusk. The ceremony is performed by a group of priests on the ghats. Amid blowing of conch shells, the ringing of several bells, the clanging of brass cymbals and the chanting chorus of mantras."/>
        
            <SuggestionData
            image={"./images/suggestion/cafe.jpg"}
            heading="Cafes"
            text="Cafes are the perfect spot for chilling out with friends and family. The relaxed atmosphere, cozy setting, and good food and drinks make it an ideal place to unwind and enjoy each other's company."/>
        </div>
    </div>
  )
}
