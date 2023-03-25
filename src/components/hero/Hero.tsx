import React from 'react'
import Navbar from '../navbar/Navbar'
import Searchbar from '../searchbar/Searchbar'
import { urlFor } from '@/lib/client'
import Image from 'next/image'
import { BackgroundImages } from '@/app/layout'

interface Props {
  background: {
    _id: string;
    image: string;
  }[];
}

const Hero = ({ background }: Props) => {
  if (!Array.isArray(background)) {
    // Handle case where background is not an array
    return null;
  }

  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex' }}>
        {background.map((b) => (
          <div key={b._id}>
            <Image
              src={urlFor(b.image).url()}
              alt="bg"
              width={200}
              height={200}
              priority
            />
          </div>
        ))}
      </div>
      <Searchbar />
    </div>
  );
}

export default Hero;
