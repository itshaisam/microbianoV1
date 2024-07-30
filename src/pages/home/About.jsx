import React from 'react'
import orangeimage from '../../assets/orangeimage.png'
import aboutimage from '../../assets/aboutimage.png'
const About = () => {
    return (
        <div className='bg-[#F5E9F0CC] h-auto mt-32'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                    <div className='flex justify-center md:justify-end'>
                        <img src={aboutimage} />
                    </div>
                    <div className='flex flex-col justify-center text-center md:text-left '>


                        <h1 className='text-4xl font-medium mb-4'>About Us</h1>
                        <div className='mb-4 flex justify-center flex-col'>
                            <img src={orangeimage} />
                        </div>
                        <p className='mb-4 text-xl'>
                            Safecare Industries located in KEZAD- Abu Dhabi with fully automated manufacturing facilities specialized in manufacturing and supplying an extensive range of Microbiological Pre-poured Culture Media (PPM), Pre-poured Tubed Media and Bottle Media. All operational functions adhere to the required industry compliance criteria.
                        </p>
                        <button className='bg-[#5F1654] py-3 w-40 px-4 text-white'>Enquire now</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About;


