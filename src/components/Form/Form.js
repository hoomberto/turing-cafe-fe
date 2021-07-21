import React from "react"

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
    for (let param of [name, date, time, number]) {
      if (!this.state[param]) {
        return
      }
    }
    console.log("Submitted")
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          placeholder="Name"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="date"
          value={this.state.date}
          placeholder="Date (mm/dd)"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="time"
          value={this.state.time}
          placeholder="Time"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="number"
          value={this.state.number}
          placeholder="Number of guests"
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Make Reservation</button>
      </form>
    )
  }
}

export default Form
