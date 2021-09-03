import Card from './Card'

function VoteTime() {
    return (
        <div className=' p-5' >
            <h1 data-aos="fade-up" className='mb-[8vw] text-white text-center text-6xl tube-text-green mt-5' >VOTING TIME!!!</h1>
            <Card
                title='Let the voting begin!!'
                desc="This is the judgement day. People have to follow the Universal Adult Franchise to do voting, which basically states that all above 18 years old can vote. There are voting camps organised where there are voting booths. In the voting booths, there are voting machines, where there are party names and people can press the button to vote. Then they are given a mark on the finger."
                image='https://c.tenor.com/kh_cOjHuufEAAAAM/sponge-bob-sponge-bob-mail.gif'
                color='yellow-300'
                data-aos="fade-left"
            />
            <br/>
            <Card
                title='Every vote counts'
                desc="After the voting process, the votes are counted of each candidate and each party. The people who count votes are called tellers. The party votes change are shows in the news and media. When the vote counting is finalised, sometimes there are parties which join to become the ruling party. This is known as coalition party. The ruling party is the party with the most votes."
                image='https://c.tenor.com/9VRosM93WmUAAAAM/math-calculator.gif'
                color='yellow-300'
                data-aos="fade-right"
            />
            <br/>
            <Card
                title='Position Time!!!!'
                desc="The ruling party chooses it's Prime Minister and the ministers for the other departments. There is a proper oath ceremony planned where the Prime Minister takes the oath and officialy becomes the chief minister of our country."
                image='https://c.tenor.com/JKYHZQ8z5C8AAAAC/alvin-and-the-chipmunks-positions-everybody.gif'
                color='yellow-300'
                data-aos="fade-left"
            />
        </div>
    )
}

export default VoteTime
