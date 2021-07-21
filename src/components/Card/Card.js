import React from "react"

const Card = ({id, name, number, date, time}) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {number}</p>
    </div>
  )
}

export default Card
