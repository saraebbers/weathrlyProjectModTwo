import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      cityZip: 0,
    }
  }

  render() {
    return (
      <form className='Search'>
        <input 
          type='number'
         />
        <button > CLICK HERE 
        </button>

      </form>


      )
  }
}


