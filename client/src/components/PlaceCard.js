import React from 'react'
import { BASE_URL } from '../globals'
import axios from 'axios'

const PlaceCard = (props) => {
  const deletePlace = (id) => {
    axios
      .delete(`${BASE_URL}/places/${id}`)
      .then((res) => console.log(res.data))
    window.location.reload()
  }
  console.log(props)

  return (
    <div className="place-card">
      <img src={props.image} alt="" />
      <h2>{props.title}</h2>
      <p>{props.location}</p>
      <button className="delete" onClick={() => deletePlace(props.id)}>
        Delete
      </button>
    </div>
  )
}

export default PlaceCard
