import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';

describe('App', () => {
  
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it.skip('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  
  it.skip('should exist', () => {
    expect(wrapper).toBeDefined();
  })


})
