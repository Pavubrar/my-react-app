import React, { Component } from 'react';

class CreateCityForm extends Component {
  constructor() {
    super();
    this.state = {
      nameInput: "",
      latInput: "",
      longInput: "",
      popInput: ""
    }
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault(event);
    this.props.onSubmit(this.state)
    this.setState({
      nameInput: "",
      latInput: "",
      longInput: "",
      popInput: ""
    })
  }

  render() {
    return (
      <div className="form">
        <h3>Create New City</h3>
        <form onSubmit={this.handleSubmit}>
          <label>City Name:
            <input
              name="nameInput"
              type="text"
              value={this.state.nameInput}
              onChange={this.handleInputChange} />
          </label><br/>
          <label>Latitude:
            <input
              name="latInput"
              type="number"
              value={this.state.latInput}
              onChange={this.handleInputChange} />
          </label><br/>
          <label>Longitude:
            <input
              name="longInput"
              type="number"
              value={this.state.longInput}
              onChange={this.handleInputChange} />
          </label><br/>
          <label>Population:
            <input
              name="popInput"
              type="number"
              value={this.state.popInput}
              onChange={this.handleInputChange}
              min="0" />
          </label><br/>
          <button>Add City</button><br /><br />
          <p id="idCreateCityMessage">{this.props.message}</p>
        </form>
      </div>
    );
  }
}

export {CreateCityForm};