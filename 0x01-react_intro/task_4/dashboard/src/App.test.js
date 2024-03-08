import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  test('App renders without crashing', () => {
    shallow(<App />); // Expect this not to throw an error
  });

  test('App renders a div with the class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-header').exists()).toBe(true);
  });

  test('App renders a div with the class App-body', () => {
    // ... similar structure as the previous test
  });

  test('App renders a div with the class App-footer', () => {
    // ... similar structure as the previous test
  });
});

