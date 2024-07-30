
import React from 'react';
import orangeimage from '../../assets/orangeimage.png'
import vison from '../../assets/vison.png'

import mission from '../../assets/mission.png'

import ourvision from '../../assets/ourvision.png'

const OurVision = () => {
    return (
        <div className='container mx-auto  mt-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8'>
                <div className=''>
                    <h1 className='text-2xl md:text-4xl font-medium py-3 text-[#5F1654]'>Our Vision and Mission</h1>
                    <div className='flex justify-evenly '>
                        <img src={orangeimage} />
                    </div>

                    <div className=''>
                        <div className=' mt-3'>
                            <img src={vison} />
                            <p className='text-base md:text-sm px-14'>
                                Our vision is to provide high-quality, cost-effective, complete range of Microbiological Prepared Culture Media to UAE and GCC Market.
                            </p>
                        </div>

                        <div className=' mt-5'>
                            <img src={mission} />
                            <p className='text-base md:text-[15px] px-14'>
                                Our mission is to manufacture and supply high-quality readymade culture media and broth across UAE and GCC countries.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                    <img src={ourvision} />
                </div>
            </div>
        </div>
    );
}

export default OurVision;
