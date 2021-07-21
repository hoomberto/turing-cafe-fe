import React from "react"
import MenuItem from '../MenuItem/MenuItem'
import { Link } from 'react-router-dom'
import { getMenu } from '../../utilities/apiCalls'
import './Menu.css'

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
        <Link exact="true" to="/"><button className="back-btn">Go Back</button></Link>
        <h2>Food</h2>
        {!!this.state.menu.food &&
          <div className="food-container">
          {this.state.menu.food.map(item => <MenuItem key={item.id} id={item.id} name={item.name} price={item.price} />)}
        </div>}
        <h2>Drinks</h2>
        {!!this.state.menu.drinks && <div className="drinks-container">
          {this.state.menu.drinks.map(item => <MenuItem key={item.id} id={item.id} name={item.name} price={item.price} />)}
        </div>}
      </div>
    )
  }
}

export default Menu
