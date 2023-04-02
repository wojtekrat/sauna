import React from 'react'
import { client } from '@/lib/client'
import MapsSection from '../../components/map/MapsSection'

async function getSaunas() {
  const res = await client.fetch('*[_type == "saunas"]')
  return res
}

export default async function SaunaMaps() {
  const saunas = await getSaunas()


  return (
    <MapsSection sauny={saunas}/>
  )
}
