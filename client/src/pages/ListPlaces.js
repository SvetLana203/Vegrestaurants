import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import PlaceCard from '../components/PlaceCard'
const ListPlaces = () => {
  const [places, setPlaces] = useState([])

  useEffect(() => {
    getPlaces()
  }, [])

  const getPlaces = async () => {
    const res = await axios.get(`${BASE_URL}/places`)
    console.log(res)
    setPlaces(res.data.places)
  }
  return (
    <div>
      <h2>
        {places.map((place) => (
          <PlaceCard
            key={place.id}
            title={place.title}
            location={place.location}
            image={place.url}
          />
        ))}
      </h2>
    </div>
  )
}
export default ListPlaces