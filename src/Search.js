import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      usState: '',
      usCity: '',
    }
  }

  submitLocation() {
     this.props.resetLocation(this.state);;
  }

  render() {
    return (
      <form 
        className='Search'>
        <input 
          placeholder='Enter US City Here'
          type='text'
          value={this.state.usCity}
          onChange={(event) => {
            this.setState({
              usCity: event.target.value
            })
          }}
         />
        <input 
          placeholder='Enter US State Here'
          type='text'
          value={this.state.usState}
          onChange={(event) => {
            this.setState({
              usState: event.target.value
            })
          }}
         /> 
        <button
          onClick={(event) => {
            event.preventDefault();
            this.submitLocation();
          }}
        > Submit Location
        </button>
      </form>

      );
  }
}


