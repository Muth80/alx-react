import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('App renders without crashing', () => {
  render(<App />);
});

test('App renders a div with the class App-header', () => {
  render(<App />);
  const appHeaderElement = screen.getByClass('App-header');
  expect(appHeaderElement).toBeInTheDocument();
});

test('App renders a div with the class App-body', () => {
  render(<App />);
  const appBodyElement = screen.getByClass('App-body');
  expect(appBodyElement).toBeInTheDocument();
});


test('App renders a div with the class App-footer', () => {
  render(<App />);
  const appFooterElement = screen.getByClass('App-footer');
  expect(appFooterElement).toBeInTheDocument();
});