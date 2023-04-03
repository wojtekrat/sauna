import React from 'react'
import { BsFacebook } from 'react-icons/bs'
const SaunaDetails = ({ sauna: { name, address, website, facebook } }) => {
  return (
    <div className='border-[1px] border-orange-300 flex flex-col p-2 m-1 w-[350px] sm:w-[500px] h-[120px] rounded-xl'>
        <p><span className='font-semibold'>Miejsce:</span> {name}</p>
        <p><span className='font-semibold'>Adres:</span> {address}</p>
        <div className='w-[100%] flex '>
            <a href={website} className='font-semibold hover:text-orange-500'>Strona WWW</a>
            <p> | </p>
            <a href={facebook} className='font-semibold hover:text-orange-500'>Facebook </a>
        </div>
    </div>
  )
}

export default SaunaDetails