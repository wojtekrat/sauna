'use client'
import React, { FC, useState } from 'react';
import { urlFor } from '@/lib/client';
import Image from 'next/image';
import { PostInterface } from '../../app/page';

interface Props {
  post: PostInterface;
}

const PostCard: FC<Props> = ({ post: { image, title, header, text, hashtags, category, _createdAt } }) => {
  const tags = hashtags.split(',')
  const dateArray = _createdAt.substring(0, 10).split('-'); 
  const data = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;

  return (
    <div>
      <div className='w-[380px] p-[30px] sm:w-[500px] h-fit sm:p-[50px]'>
        <Image src={urlFor(image).url()} width={400} height={200} alt='image' />
        <h1 className='text-[30px]'>{title}</h1>
        <p>{header}</p>
        <p className='mt-[10px]'>Kategoria: {category}</p>
        <p className='mt-[10px] font-semibold'>{tags}</p>
        <p className='mt-[5px]'>Data: {data}</p>
      </div>
    </div>
  );
};

export default PostCard;
