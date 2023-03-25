import React from 'react'
import Image from 'next/image';
import { urlFor } from '@/lib/client';


  const PostCardDetails = ({ posts: { image, title, header, text, hashtags }}) => {
    const slicedText = text.split('@');
    const tags = hashtags.split(',')
  return (
    <div className='w-[90%] m-auto flex justify-center items-center'>
        <div className='flex flex-row w-[1000px]'>
            <div className='flex flex-col'>
                <Image className='w-[400px] h-[300px]' src={urlFor(image).url()} alt='image' width={500} height={300}></Image>
                <div className='pt-[5px]'>{tags}</div>
            </div>
            <div className='w-[60%] pl-[50px]'>
                <p className='text-[30px]'>{title}</p>
                <p className='pt-[10px]'>{header}</p>
                <div>{slicedText.map((a) => <p className='pt-[10px]' key={a}>{a}</p>)}</div>
            </div>
        </div>
    </div>
  )
}

export default PostCardDetails