import React from "react"
import './Form.css'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault();
    for (let param of ['name', 'date', 'time', 'number']) {
      if (!this.state[param]) {
        return
      }
    }
    const { name, date, time, number } = this.state
    const newReservation = {
      name: name,
      date: date,
      time: time,
      number: number
    }
    this.props.submitRes(newReservation)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          value={this.state.name}
          placeholder="Name"
          onChange={this.handleChange}
        />
        <input
          type="text"
          id="date"
          name="date"
          value={this.state.date}
          placeholder="Date (mm/dd)"
          onChange={this.handleChange}
        />
        <input
          type="text"
          id="time"
          name="time"
          value={this.state.time}
          placeholder="Time"
          onChange={this.handleChange}
        />
        <input
          type="text"
          id="number"
          name="number"
          value={this.state.number}
          placeholder="Number of guests"
          onChange={this.handleChange}
        />
        <button id="submitBtn" onClick={this.handleSubmit}>Make Reservation</button>
      </form>
    )
  }
}

export default Form
