import React, { Component } from 'react';

import './App.css';
import key from './APIKey';
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
      usState: '',
      usCity: '',
    }
    this.resetLocation = this.resetLocation.bind(this);
  }

  componentDidMount() {
    fetch(`http://api.wunderground.com/api/881631f063e09bd3/conditions/forecast10day/hourly10day/q/autoip.json`)
      .then(response => response.json())
      .then(weather => clean(weather))
      .then(cleanData => this.setState({ weatherData: cleanData }))
      .catch(error => {
        console.log(error);
      })
  }

  resetLocation(state) {
    this.setState({
      usCity: state.usCity,
      usState: state.usState,
    })
      fetch(`http://api.wunderground.com/api/881631f063e09bd3/conditions/forecast10day/hourly10day/q/${state.usState}/${state.usCity}.json`)
      .then(response => response.json())
      .then(weather => clean(weather))
      .then(cleanData => this.setState({ weatherData: cleanData }))
      .catch(error => {
        console.log(error);
      })
  }


  render() {
    return (
      <div className="App">
        <Search 
          className='reset'
          resetLocation={this.resetLocation}
            />
        <h1 className='Title'>Weatherly</h1>
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
