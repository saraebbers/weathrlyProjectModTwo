import React, { Component } from 'react';
// import './Search.css';

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      cityZip: 0
    }
  }

  render() {
    return (
      <form>
        <input
          type='number'



         />
        <button>
          onClick={(event) => {
            event.preventDefault();

          }}

        </button>


      </form>


      )
  }
}


