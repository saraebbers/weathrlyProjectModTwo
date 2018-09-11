import React, { Component } from 'react';
import './Search.css';
import Trie from '@slebbers/boilerplate';
import locationData from './largest1000Cities';


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
        <p>Search By City/State or ZipCode </p>
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
            this.setState({
              usState: '',
              usCity: '', 
            })
          }}
        > Submit Location
        </button>

      </form>

      );
  }
}


