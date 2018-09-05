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
          <p>
            //Date and Time
          </p>
          <h1>
            //Current City
          </h1>
          <img />
          <p>
            //CurrentTemp
          </p>
          <p>
            //description of CurrentWeather
          </p>
        </li>
      )
  }

}