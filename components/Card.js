import Tilt from 'react-tilt'

function Card({title, desc, image, color}) {
    return (
        <Tilt>
            <div className={`border-2 border-gray-800 p-5 flex rounded-md`} >
                <div>
                    <h1 className='text-white text-3xl mb-5' >{title}</h1>
                    <h1 className='text-white text-xl mr-[30vw]' >{desc}</h1>
                </div>
                <img className='h-48' src={image}></img>
            </div>
        </Tilt>
    )
}

export default Card
