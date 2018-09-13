import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      usLocation: '',
      // usCity: '',
    }
  }

  submitLocation() {
     this.props.resetLocation(this.state);;
  }

  render() {
    return (
      <div className='Search'>
        <h1 className='title'>Weatherly</h1>
        <form>
          <input
            placeholder='City/State/Zip'
            type='text'
            value={this.state.usLocation}
            onChange={(event) => {
              this.setState({
                usLocation: event.target.value
              })
            }}
           /> 
          <button
            onClick={(event) => {
              event.preventDefault();
              this.submitLocation();
              this.setState({
                usLocation: '',
              })
            }}
          > Submit
          </button>
           <div>
            { (this.props.trie.wordCount > 0 && this.state.usLocation.length > 1) &&
              this.props.trie.suggest(this.state.usLocation).map(word => {
                return <input className='suggest' value={word} />
              })
            }
           </div>
        </form>
      </div>

      );
  }
}