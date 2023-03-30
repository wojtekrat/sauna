'use client'
import React from 'react'
import dynamic from "next/dynamic"

const DynamicMap = dynamic(() => import("../../components/map/Map"), {
  ssr: false
})
const MapsSection = ({ sauny }) => {
  return (
    <div className='flex justify-center items-center'><DynamicMap sauny={sauny}/></div>
  )
}

export default MapsSection