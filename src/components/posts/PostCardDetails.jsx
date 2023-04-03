import React from 'react'
import Image from 'next/image';
import { urlFor } from '@/lib/client';


  const PostCardDetails = ({ posts: { image, title, header, text, hashtags, _createdAt, category  }, author}) => {
    const slicedText = text.split('@');
    const tags = hashtags.split(',')
    const dateArray = _createdAt.substring(0, 10).split('-'); 
    const data = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;
  return (
    <div className='w-[90%] m-auto flex justify-center items-center mt-[50px]'>
        <div className='flex flex-col md:flex-row md:w-[1000px] p-4 shadow-md'>
            <div className='flex flex-col justify-center items-center md:justify-start md:items-start'>
                <Image className='w-[400px] h-[300px]' src={urlFor(image).url()} alt='image' width={500} height={300}></Image>
                <p className='pt-[10px] font-semibold'>Kategoria: {category}</p>
                <p className='pt-[10px]'>{tags}</p>
                <p className='pt-[10px] font-semibold'>Data: {data}</p>
                <p className='pt-[10px] font-semibold'>Autor:</p>
                <div className='flex flex-row pt-[10px]'>
                  <Image className='rounded-full' src={urlFor(author.image).url()} alt="author-image" width={70} height={70}></Image>
                  <p className='pl-[10px] font-semibold flex justify-center items-center'>{author.name}</p>
                </div>
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