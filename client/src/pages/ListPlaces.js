import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import PlaceCard from '../components/PlaceCard'
import './ListPlaces.css'
import SearchPlace from '../components/SearchPlace'

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
      <SearchPlace />

      <div className="list-places">
        {places.map((place) => (
          <PlaceCard
            key={place._id}
            id={place._id}
            title={place.title}
            location={place.location}
            image={place.url}
          />
        ))}
      </div>
    </div>
  )
}
export default ListPlaces
