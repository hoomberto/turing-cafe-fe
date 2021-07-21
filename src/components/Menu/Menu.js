import React from "react"
import { getMenu } from '../../utilities/apiCalls'

class Menu extends React.Component {
  constructor() {
    super()
    this.state = {
      menu: ''
    }
  }

  componentDidMount() {
    getMenu()
    .then(data => this.setState({menu: data}))
  }

  render() {
    return (
      <div className="menu">
        <h2>Food</h2>
        <div className="food-container">

        </div>
        <h2>Drinks</h2>
        <div className="drinks-container">

        </div>
      </div>
    )
  }
}

export default Menu
