import React, { Component } from 'react';
import './Search.css';
// import Trie from '@slebbers/boilerplate';
// import locationData from './largest1000Cities';


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
         <div>
          <p>
            Possible Suggestions
          </p>
          { (this.props.trie.wordCount > 0 && this.state.usCity.length > 0) &&
            this.props.trie.suggest(this.state.usCity).map(word => {
            return <p>{word}</p>
          })
          }
         </div>
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


