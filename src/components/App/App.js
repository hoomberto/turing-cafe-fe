import React, { Component } from 'react';
import { getRes, postNewRes, deleteRes } from '../../utilities/apiCalls'
import CardsContainer from '../CardsContainer/CardsContainer'
import Form from '../Form/Form'
import Menu from '../Menu/Menu'
import { Route, Link } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      cards: []
    }
  }

  componentDidMount() {
    getRes()
    .then(data => {
      this.setState({cards: data})
    })
    .catch(err => console.log(err))
  }

  addReservation = (reservation) => {
    postNewRes(reservation)
    .then(response => {
      this.setState((state) => ({
        cards: [...state.cards, reservation]
      }));
      return getRes();
    })
    .then(data => this.setState({ cards: data }))
  }

  removeReservation = (id) => {
    deleteRes(id)
    .then(response => {
      return getRes()
    })
    .then(data => this.setState({ cards: data }))
  }

  render() {
    return (
      <div className="App">
        <Link exact="true" to="/" style={{textDecoration: 'none'}}><h1 className='app-title'>Turing Cafe Reservations</h1></Link>
        <Route exact path ="/" render={() => {
          return <>
          <Form submitRes={this.addReservation} />
            <Link to="/menu"><button className="menu-btn">Our menu</button></Link>
            {!this.state.cards.length && <h2>No reservations yet - make one!</h2>}
            <CardsContainer cardsData={this.state.cards} removeRes={this.removeReservation}/>
          </>
          }}
        />
      <Route exact path ="/menu" component={Menu} />
      </div>
    )
  }
}

export default App;
