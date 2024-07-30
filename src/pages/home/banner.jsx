import React from 'react';

import orangeimage from '../../assets/orangeimage.png';
import palm from '../../assets/palm.png'
const Banner = () => {
  return (
    <div className='bg-[#F5E9F0CC] py-8'>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          <div>
            <h1 className='text-[32px] md:text-[40px] lg:text-[50px] text-[#5F1654]'>
              Advanced Microbiological Media Solutions by Safecare Industries in Abu Dhabi
            </h1>
            <div className='flex justify-end items-center mt-4'>
              <div className='hidden md:block'>
                <img src={orangeimage} />
              </div>
            </div>
            <div className='mt-4'>
              <h1 className='text-[#000000] text-base md:text-lg lg:text-md'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              </h1>
            </div>
            <div className='flex mt-6 space-x-4'>
              <button className='bg-[#5F1654] py-2 px-4 text-white'>Enquire now</button>
              <button className='border-2 border-[#5F1654] text-[#5F1654] py-2 px-4'>Learn more</button>
            </div>
          </div>
          <div className='mt-6 md:mt-0'>
            <img src={palm} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
