'use client'
import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import Searchbar from '../searchbar/Searchbar';
import { urlFor } from '@/lib/client';
import Image from 'next/image';

interface Props {
  background: {
    _id: string;
    image: string;
  }[];
}

const Hero = ({ background }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % background.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [background.length, currentIndex]);

  if (!Array.isArray(background)) {
    // Handle case where background is not an array
    return null;
  }

  return (
    <div>
      <div className="relative w-full h-[400px] sm:h-screen">
        <div className="absolute top-0 left-0 w-full h-full blur-sm border-[5px] border-orange-400">
          {background.map((item, index) => (
            <Image
              key={item._id}
              src={urlFor(item.image).url()}
              alt="bg"
              fill
              className={`absolute top-0 left-0 transition-opacity duration-1000 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className=" backdrop-blur-3xl p-[20px] sm:p-[50px] rounded-md ">
            <div className="text-white  font-bold flex justify-center items-center" style={{ backdropFilter: 'blur(10px)' }}>
              <div className='flex flex-col justify-center items-center'>
                <h1 className='text-[28px] sm:text-[40px]'>SAUNOWANIE.COM.PL</h1>
                <h3 className='text-[18px] sm:text-[26px]'>WSZYSTKO O SAUNACH</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Hero;
