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
    <div className="relative w-full h-400 sm:h-screen">
      <div className="absolute top-0 left-0 w-full h-full">
        {background.map((item, index) => (
          <Image
            key={item._id}
            src={urlFor(item.image).url()}
            alt="bg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className={`absolute top-0 left-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      <Searchbar />
      <Navbar />
    </div>
  );
};

export default Hero;
