import React from 'react'

const PlaceCard = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="" />
      <h2>{props.title}</h2>
      <p>{props.location}</p>
    </div>
  )
}

export default PlaceCard
