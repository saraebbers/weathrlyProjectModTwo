import React from 'react';
import ReactDOM from 'react-dom';
import CurrentWeather from './CurrentWeather';
import { shallow, mount } from 'enzyme';
import data from './APIPracticeData';

describe('CurrentWeather', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<CurrentWeather />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })






})