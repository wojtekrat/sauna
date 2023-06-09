'use client'
import React from 'react'
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'

const Map = ({ sauny }) => {
  const markers = sauny.map(sauna => {
    let position = [0, 0]
    if (sauna.coordinates) {
      const coordinates = sauna.coordinates.split(',')
      position = [parseFloat(coordinates[0]), parseFloat(coordinates[1])]
    }
    return (
      <Marker position={position} key={sauna._id}>
        <Popup>
          <div>
            <h2>{sauna.name}</h2>
            <p>{sauna.address}</p>
          </div>
        </Popup>
      </Marker>
    )
  })

  return (
    <MapContainer center={[51.7432003, 19.4799112]} zoom={6} scrollWheelZoom={true} className='w-[350px] h-[350px] md:w-[600px] md:h-[600px] m-[10px] shadow-md '>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers}
    </MapContainer>
  )
}

export default Map
