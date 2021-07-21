import React, { Component } from 'react';
import { getCards } from '../../utilities/apiCalls'
import CardsContainer from '../CardsContainer/CardsContainer'
import Form from '../Form/Form'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      cards: []
    }
  }

  componentDidMount() {
    getCards()
    .then(data => {
      this.setState({cards: data})
    })
    .catch(err => console.log(err))
  }

  addReservation = (reservation) => {
    this.setState((state) => ({
      cards: [...state.cards, reservation]
    }));
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form submitRes={this.addReservation} />
        <CardsContainer cardsData={this.state.cards} />
      </div>
    )
  }
}

export default App;
