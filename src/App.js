import React, { Component } from 'react';
// import logo from './logo.svg';

import './App.css';
import key from './APIKey';
import data from './APIPracticeData';
import CurrentWeather from './CurrentWeather';
import HourlyWeather from './HourlyWeather';
import WeatherDisplayWrapper from './WeatherDisplayWrapper';

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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }

}
