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
      <div className='w-[340px] p-[10px] h-[580px] shadow-md m-3 flex flex-col items-center'>
        <Image src={urlFor(image).url()} width={400} height={200} alt='image' />
        <h1 className='text-[24px]'>{title}</h1>
        <p className='text-[14px]'>{header}</p>
        <p className='mt-[10px] text-[14px]'>Kategoria: {category}</p>
        <p className='mt-[10px] font-semibold text-[14px]'>{tags}</p>
        <p className='mt-[5px] text-[14px]'>Data: {data}</p>
      </div>
    </div>
  );
};

export default PostCard;
