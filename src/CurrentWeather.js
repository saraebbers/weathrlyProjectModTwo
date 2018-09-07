import React, { Component } from 'react';

export default class CurrentWeather extends Component {
  constructor() {
    super();

    this.state = {
      //add state as needed
    }
  }

  render() {
    //add var here as needed

    return (
        <li>
          <h3>
            //Date and Time
          </h3>
          <h2>
            //Current City
          </h2>
          <img />
          <h1>
            //CurrentTemp
          </h1>
          <p>
            //description of CurrentWeather
          </p>
        </li>
      )
  }

}