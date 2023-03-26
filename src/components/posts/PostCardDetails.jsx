import React from 'react'
import Image from 'next/image';
import { urlFor } from '@/lib/client';


  const PostCardDetails = ({ posts: { image, title, header, text, hashtags, _createdAt, category }}) => {
    const slicedText = text.split('@');
    const tags = hashtags.split(',')
    const dateArray = _createdAt.substring(0, 10).split('-'); 
    const data = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;
  return (
    <div className='w-[90%] m-auto flex justify-center items-center mt-[10px]'>
        <div className='flex flex-col md:flex-row md:w-[1000px]'>
            <div className='flex flex-col justify-center items-center md:justify-start md:items-start'>
                <Image className='w-[400px] h-[300px]' src={urlFor(image).url()} alt='image' width={500} height={300}></Image>
                <p className='pt-[10px]'>Kategoria: {category}</p>
                <p className='pt-[10px]'>{tags}</p>
                <p className='pt-[10px]'>Data: {data}</p>
            </div>
            <div className='md:w-[60%] md:pl-[50px] pt-[20px] md:pt-[0px]'>
                <p className='text-[30px]'>{title}</p>
                <p className='pt-[10px]'>{header}</p>
                <div>{slicedText.map((a) => <p className='pt-[10px]' key={a}>{a}</p>)}</div>
            </div>
        </div>
    </div>
  )
}

export default PostCardDetails