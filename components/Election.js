import Aos from 'aos';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {useEffect} from 'react'

function Election() {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <div className='h-[40vw]' >
            <h1 data-aos="fade-up" className='mb-[8vw] text-white text-center text-6xl tube-text-blue' >What is Election??🤔</h1>
            <div className='flex p-20' >
                <div>
                    <h1 data-aos="fade-right" className='ml-10 text-xl text-white mr-48 text-justify' >When we first think of election we think of polititians trying to fix roads just to gain votes. What are the words that come to our mind: votes, polititians, new Government, new Prime Ministers, new Chief Miniseters and corruption. But when we seriously think of it election is basically an selection of a new Government in a particular area. It might be a country, city, state, village and there are even elections held in groups, cults and societies. Election takes part in a democracy where the people choose their own leader. Usually there is a person standing for a respective postition representing a particular party. The selection is done through a voting process and the person/party with the most votes takes the position.</h1>
                </div>
                <div>
                    <img  data-aos="fade-left" src='https://i.pinimg.com/originals/26/70/9f/26709f9f3a171a327c8bf15408703e1e.gif' ></img>
                </div>
            </div>
        </div>
    )
}

export default Election
