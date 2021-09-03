
import Aos from 'aos';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {useEffect} from 'react'

function Landing() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
}, [])
    return (
        <div className="h-[50vw]" >
            <br/>
            <h1 data-aos="fade-down" className=' mb-5 tube-text-red text-center mt-[20%] text-9xl' >Election Process</h1>
        </div>
    )
}

export default Landing
