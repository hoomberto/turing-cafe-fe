import React from "react"

const MenuItem = ({ id, name, price}) => {
  return (
    <div className="menu-item" id={id}>
      <h2>{name}</h2>
      <h3>{price}</h3>
    </div>
  )
}

export default MenuItem
