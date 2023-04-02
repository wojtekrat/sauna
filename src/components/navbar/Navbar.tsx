import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
      <div className='flex items-center justify-center bg-gradient-to-r from-orange-300 via-orange-500 to-orange-300 z-20 '>
          <Link className='p-[10px] font-semibold text-white hover:bg-orange-600 hover:text-orange-200' href='/'>HOME</Link>
          <Link className='p-[10px] font-semibold text-white hover:bg-orange-600 hover:text-orange-200' href='/mapa-saun'>MAPA SAUN</Link>
          <Link className='p-[10px] font-semibold text-white hover:bg-orange-600 hover:text-orange-200' href='/kontakt'>KONTAKT</Link>
      </div>
  )
}

export default Navbar