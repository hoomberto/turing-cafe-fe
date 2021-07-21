import React from "react"
import Card from "../Card/Card"
import './CardsContainer.css'

const CardsContainer = ({ cardsData }) => {
  return (
    <div className="container">
      {cardsData.map((card, index) => <Card key={card.id || cardsData.length + index} date={card.date} id={card.id} name={card.name} number={card.number} time={card.time} />)}
    </div>
  )
}

export default CardsContainer
