'use client'
import React, { useEffect, useState } from 'react'
import dynamic from "next/dynamic"
import Map from '../../components/map/Map'
import { client } from '@/lib/client'

const DynamicMap = dynamic(() => import("../../components/map/Map"), {
  ssr: false
})

async function getSaunas() {
  const res = await client.fetch('*[_type == "saunas"]{name, address, coordinates}')
  return res
}

export default function SaunaMaps() {
  const [saunas, setSaunas] = useState([])

  useEffect(() => {
    async function fetchData() {
      const data = await getSaunas()
      setSaunas(data)
    }

    fetchData()
  }, [])

  return (
    <DynamicMap sauny={saunas}/>
  )
}
