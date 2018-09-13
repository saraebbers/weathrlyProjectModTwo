import React from 'react';
import ReactDOM from 'react-dom';
import CurrentWeather from './CurrentWeather';
import { shallow, mount } from 'enzyme';
import data from './APIPracticeData';
import helper from './Helper';

describe('CurrentWeather', () => {

  let wrapper;

  const bob = helper(data);
  console.log(bob);

  beforeEach(() => {
    wrapper = shallow(<CurrentWeather className='left'
          currentWeather={bob.currentWeather} 
          tenDay={bob} />)

  // const dayOneInfo = wrapper.props.tenDay;


  })

  it('should exist', () => {
console.log(wrapper.props.currentWeather)
    expect(wrapper).toBeDefined();
  })

})

//clean data
//feed cleaned data to currentweather as props
//currentWeather = {cleanedData.currentWeather}
//tenDay = {cleanedData.tenDay}