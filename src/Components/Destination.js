import "./Destination.css"
import DestinationData from "./DestinationData"
const Destination =()=>{
    return(
        <div className="destination" id="destination">
            <h1>Popular Destination</h1>
            <p>Bellow are the some of the populer destination ideas for traveling. The places are having a high positive reviews. The suggestions includes places of natural beauty such as beaches, , national parks, mountains, deserts and forests so you dont have to worey about the planning</p>
            <DestinationData className="first-des"
            heading="Mountains"
            text="Trekking in India history dates back to the early days of human habitation. There are possibly as many hiking paths in India as there are people. Trekking began to gain popularity as a recreational adventure activity in the 1970s and 1980s. It takes several days of mountain hiking to reach many of the nation's sacred sites, including Badrinath, Kedarnath, Amarnath, Gangotri, Joshimath, Vaishno Devi, Hemkund, and Yamunotri in the Garhwal region of Uttarakhand and Jammu and Kashmir. With thousands of Indians and visitors from other countries hitting the trails each year, mountaineering has quickly taken off in India, where the current trekking landscape is very promising. India has some of the most beautiful hiking trails in the world; there are mountain trek passes in Ladakh, and the Zanskar Himalayas are higher than 5000 meters. But there are many kinder, shorter paths in the mountains and the woods at various heights. In South India's Western Ghats and Maharashtra."
            image1={"./images/home/mountain/mountain1.jpg"}
            image2={"./images/home/mountain/mountain2.jpg"}/>
            <DestinationData className="first-des-reverse"
            heading="Religious places"
            text="Religious sightseeing can be motivated by any of several kinds of interest, such as religion, art, architecture, history, and personal ancestry. People can find holy places interesting and moving, whether they personally are religious or not. Some, such as the churches of Italy, offer fine architecture and major artworks. Portugal, for example, has as its main religious tourism attraction the Sanctuary of Our Lady of Fátima, internationally known by the phenomenon of Marian apparitions. Others are important to world religions: Jerusalem holds a central place in Judaism, Christianity, and Islam. Others again may be both scenic and important to one religion, like the Way of Saint James in Spain, but have been adopted by non-religious people as a personal challenge and indeed as a journey of self-discovery. Religious tourism in India can take many forms, including yoga tourism; the country has sites important to Buddhism, Islam, Sikhism and Hinduism, as well as magnificent architecture"
            image1={"./images/home/religious/homereligious1.jpg"}
            image2={"./images/home/religious/homereligious2.jpg"}/>
        </div>
    )
}

export default Destination