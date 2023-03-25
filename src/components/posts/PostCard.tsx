'use client'
import React, { FC, useState } from 'react';
import { urlFor } from '@/lib/client';
import Image from 'next/image';
import { PostInterface } from '../../app/page';

interface Props {
  post: PostInterface;
}

const PostCard: FC<Props> = ({ post: { image, title, header, text, hashtags } }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const slicedText = text.split('@');
  const tags = hashtags.split(',')

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div className='w-[500px] h-fit p-[50px]'>
        <Image src={urlFor(image).url()} width={400} height={200} alt='image' />
        <h1 className='text-[30px]'>{title}</h1>
        <p>{header}</p>
        {!isExpanded && (
          <button className='text-blue-500' onClick={toggleExpanded}>
            Pokaż więcej
          </button>
        )}
        
        {isExpanded && (
          <button className='text-blue-500' onClick={toggleExpanded}>
            Ukryj
          </button>
        )}
        {isExpanded && (
          <>{slicedText.map((s) => <p className='pt-[10px]'>{s}</p>)}</>
        )}
        <p>{tags}</p>
      </div>
    </div>
  );
};

export default PostCard;
