import React, { Component } from 'react';
import { getCards, postNewRes, deleteRes } from '../../utilities/apiCalls'
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
    postNewRes(reservation)
    .then(response => {
      this.setState((state) => ({
        cards: [...state.cards, reservation]
      }));
      return getCards();
    })
    .then(data => this.setState({ cards: data }))
  }

  removeReservation = (id) => {
    deleteRes(id)
    .then(response => {
      return getCards()
    })
    .then(data => this.setState({ cards: data }))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form submitRes={this.addReservation} />
        <CardsContainer cardsData={this.state.cards} removeRes={this.removeReservation}/>
      </div>
    )
  }
}

export default App;
