import React, { Component } from 'react';

import './App.css';
// import key from './APIKey';
// import data from './APIPracticeData';
import clean from './Helper';
import { CurrentWeather } from './CurrentWeather';
import Search from './Search';
import { TenDayWeather } from './TenDayWeather';
import { Hourly } from './Hourly'

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      weatherData: {},
    }
  }

  componentDidMount() {
    let cleanData;
    let usState;
    let usCity;

    fetch(`http://api.wunderground.com/api/881631f063e09bd3/forecast/q/{usState}/{usCity}.json`)
      .then(response => response.json())
      .then(weather => {
        cleanData = clean(weather);
      })
      .catch(error => {
        console.log(error);
      })
      this.setState({ weatherData: cleanData })

  }


  render() {
    return (
      <div className="App">
        <Search />
        <h1>Weather</h1>
        {
        this.state.weatherData.currentWeather &&
        <CurrentWeather className='left'
          currentWeather={this.state.weatherData.currentWeather} />
        }

        {
        this.state.weatherData.tenDay &&
        <TenDayWeather className='right'
          tenDay={this.state.weatherData.tenDay} />
        }
        {
        this.state.weatherData.hourlyWeather &&
        <Hourly className='bottom'
          hourlyWeather={this.state.weatherData.hourlyWeather} />
        }
      
      </div>
    );
  }

}
