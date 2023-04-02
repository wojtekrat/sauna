'use client'
import React from 'react'
import dynamic from "next/dynamic"
import SaunaList from './SaunaList'

const DynamicMap = dynamic(() => import("../../components/map/Map"), {
  ssr: false
})
const MapsSection = ({ sauny }) => {
  return (
    <div className='flex mt-[20px] w-[95%] m-auto justify-center flex-col md:flex-row'>
      <SaunaList sauny={sauny}/>
      <DynamicMap sauny={sauny}/>
    </div>
  )
}

export default MapsSection