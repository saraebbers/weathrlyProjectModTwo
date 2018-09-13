import React, { Component } from 'react';

import './App.css';
import key from './APIKey';
import data from './APIPracticeData';
import clean from './Helper';
import CurrentWeather from './CurrentWeather';
import Search from './Search';
import { TenDayWeather } from './TenDayWeather';
import { Hourly } from './Hourly';
import locationData from './largest1000Cities';
import Trie from '@slebbers/boilerplate';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      weatherData: {},
      usLocation: '',
      trie: new Trie(),
    }
    this.resetLocation = this.resetLocation.bind(this);
  }

  componentDidMount() {
    let storedLocation = localStorage.getItem('usLocation');
    var initialSearchLocation;

    this.state.trie.populate(locationData);
    if (storedLocation === null){
      initialSearchLocation =  `http://api.wunderground.com/api/${key}/conditions/forecast10day/hourly10day/q/autoip.json`
    } else {
      initialSearchLocation = `http://api.wunderground.com/api/${key}/conditions/forecast10day/hourly10day/q/${storedLocation}.json`
    }
    fetch(initialSearchLocation)
      .then(response => response.json())
      .then(weather => clean(weather))
      .then(cleanData => this.setState({ weatherData: cleanData }))
      .catch(error => {
        console.log(error);
      })
  }

  resetLocation(state) {
    this.setState({
      usLocation: state.usLocation,
    })
      fetch(`http://api.wunderground.com/api/${key}/conditions/forecast10day/hourly10day/q/${state.usLocation}.json`)
      .then(response => response.json())
      .then(weather => clean(weather))
      .then(cleanData => {
        this.setState({ weatherData: cleanData })
        localStorage.setItem('usLocation', this.state.usLocation)
      })
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
          trie={this.state.trie}
            />
        {
        this.state.weatherData.currentWeather &&
        <CurrentWeather className='left'
          currentWeather={this.state.weatherData.currentWeather} 
          tenDay={this.state.weatherData.tenDay} />
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
