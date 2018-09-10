import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      usState = '',
      usCity = '',
    }
  }

  render() {
    return (
      <form className='Search'>
        <input 
          placeholder='Enter US City Here'
          type='text'
          value={this.state.usCity}
          onChange={(event) => {
            this.setState({
              usCity: 
            })
          }}
         />
        <button > CLICK HERE 
        </button>

      </form>


      )
  }
}


