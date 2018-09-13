import React from 'react';
import ReactDOM from 'react-dom';
import CurrentWeather from './CurrentWeather';
import { shallow, mount } from 'enzyme';
import data from './APIPracticeData';
import helper from './Helper';

describe('CurrentWeather', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CurrentWeather 
      currentWeather ={}/>)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

})

//clean data
//feed cleaned data to currentweather as props
//currentWeather = {cleanedData.currentWeather}
//tenDay = {cleanedData.tenDay}