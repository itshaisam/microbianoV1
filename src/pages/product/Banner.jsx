import React from 'react';
import bannerproduct from '../../assets/bannerproduct.png';

const Banner = () => {
    return (
        <div className='relative'>
            <div className='container mx-auto px-4'>
                <div className='flex justify-center md:justify-end'>
                    <img
                        src={bannerproduct}
                        className='w-full h-auto'
                        alt="Banner"
                    />
                </div>
            </div>
            <div className='absolute bottom-4 md:bottom-8 lg:bottom-12 left-4 md:left-8 lg:left-16 right-4 bg-opacity-50 text-white py-2 px-4'>
                <h1 className='text-lg md:text-2xl lg:text-3xl xl:text-4xl'>Product Page</h1>
            </div>
        </div>
    );
};

export default Banner;

