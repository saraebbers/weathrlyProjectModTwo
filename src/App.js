import React, { Component } from 'react';

import './App.css';
// import key from './APIKey';
import data from './APIPracticeData';
import clean from './Helper';
import { CurrentWeather } from './CurrentWeather';
// import { Search } from './Search';
import { TenDayWeather } from './TenDayWeather';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      weatherData: {},
    }
  }

  componentDidMount() {
    const cleanData = clean(data);
    //const something = what we are fetching 
    // fetch(enter https)
    //   .then(response => response.json())
      // .then(weather => {
      //   connect as appropriate
      // })
      // .catch(error => {
      //   console.log(error);
      // })
      this.setState({ weatherData: cleanData })

  }


  render() {
    return (
      <div className="App">
        <h1>Weather</h1>
        {
        this.state.weatherData.currentWeather &&
        <CurrentWeather 
          currentWeather={this.state.weatherData.currentWeather} />
        }

        {
        this.state.weatherData.tenDay &&
        <TenDayWeather
          tenDay={this.state.weatherData.tenDay} />
        }
      
      </div>
    );
  }

}
