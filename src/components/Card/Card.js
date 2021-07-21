import React from "react"
import './Card.css'

const Card = ({id, name, number, date, time, removeRes}) => {
  const handleDelete = (event) => {
    removeRes(event.target.id)
  }
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of guests: {number}</p>
      <button id={id} onClick={handleDelete}>Cancel</button>
    </div>
  )
}

export default Card
