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
      <div className='relative w-[100%] h-[400px] sm:h-[100vh]'>
        <div className='absolute, top-0, left-0'>
          <Image
            src={urlFor(background[currentIndex].image).url()}
            alt="bg"
            fill
            priority
          />
        </div>
    </div>
    <Searchbar />
    <Navbar />
    </div>
  );
};

export default Hero;
