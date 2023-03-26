'use client'
import React, { FC, useState } from 'react';
import { urlFor } from '@/lib/client';
import Image from 'next/image';
import { PostInterface } from '../../app/page';

interface Props {
  post: PostInterface;
}

const PostCard: FC<Props> = ({ post: { image, title, header, text, hashtags } }) => {
  const tags = hashtags.split(',')

  return (
    <div>
      <div className='w-[380px] p-[30px] sm:w-[500px] h-fit sm:p-[50px]'>
        <Image src={urlFor(image).url()} width={400} height={200} alt='image' />
        <h1 className='text-[30px]'>{title}</h1>
        <p>{header}</p>
        <p className='mt-[10px]'>{tags}</p>
      </div>
    </div>
  );
};

export default PostCard;
