import React from "react"
import MenuItem from '../MenuItem/MenuItem'
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
        {!!this.state.menu.food &&
          <div className="food-container">
          {this.state.menu.food.map(item => <MenuItem id={item.id} name={item.name} price={item.price} />)}
        </div>}
        <h2>Drinks</h2>
        {!!this.state.menu.drinks && <div className="drinks-container">
          {this.state.menu.drinks.map(item => <MenuItem id={item.id} name={item.name} price={item.price} />)}
        </div>}
      </div>
    )
  }
}

export default Menu
