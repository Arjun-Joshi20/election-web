import Aos from 'aos';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {useEffect} from 'react'
import Card from './Card'

function Start() {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <div >
            <h1 data-aos="fade-up" className='mb-[8vw] text-white text-center text-6xl tube-text-yellow' >How does the process start?</h1>
            <div className="p-20" >
                <Card
                title='We need a new government'
                desc="Well, whether it be a country, state or even a village. Everyone at some point requires a new government. After a period of time according to the formalities, a new election needs to take place. Sometimes the leaders are hated, sometimes they are loved. Sometimes if the leader is dead or isn't doing their duties properly they are removed. Depends on the position, if there is a big position a new election takes place, if there is a small position, the deputy and the next worthy ones are chosen. For the prime minister position in India, the time period is 5 years."
                image='https://c.tenor.com/kQLTdqEfuzIAAAAd/voting-is-your-voice-voting-is-your-right.gif'
                color='yellow-300'
                />
                <br/>
                <Card
                title="Let's start"
                desc="Now when the new elections take place, there needs to be proper systems placed. For the country's government's election, the voting systems are placed and the proper arrangements are made in all the states for the election process to take place. There are separate election commities and the Governor and the CM of the state also ensure that the election camps are properly organised. There are a lot of election camps in landmark locations, so that everyone can come and vote. "
                image='https://res.cloudinary.com/codegowdacloud/image/upload/v1630562296/Screenshot_2021-09-01_at_3.31.04_PM_lgzhu5.png'
                color='yellow-300'
                />
                <br/>
                <Card
                title="Time to campaign"
                desc="Once the new elections are declared, parties' representatives campaign in their particular areas. They make promises, explain to people why they should vote for them. They tell what will happen if they vote for them, what changes will they make. This process is caleed campaigning. Politians go to different places, fix roads and help people. Even parties campaign. The more you campaig, the more likely it is that people will vote for you."
                image='https://c.tenor.com/rwwyGiNekKYAAAAM/politician-of-bd-obaidul-quader-talking.gif'
                color='yellow-300'
                />
            </div>
        </div>
    )
}

export default Start

