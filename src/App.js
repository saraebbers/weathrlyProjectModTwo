import React, { Component } from 'react';
// import logo from './logo.svg';

import './App.css';
import key from './APIKey';
import data from './APIPracticeData';
import CurrentWeather from './CurrentWeather';
import HourlyWeather from './HourlyWeather';
import WeatherDisplayWrapper from './WeatherDisplayWrapper';
import Form from './Form';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      //insert state here and initialize as needed
    }
  }

  componentDidMount() {
    // fetch(enter https)
      .then(response => response.json())
      // .then(weather => {
      //   connect as appropriate
      // })
      .catch(error => {
        console.log(error);
      })
  }


  render() {
    return (
      <div className="App">
        <Form />
        <WeatherDisplayWrapper />
      </div>
    );
  }

}
