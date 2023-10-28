import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('App renders without crashing', () => {
  render(<App />);
});

test('App renders a div with the class App-header', () => {
  render(<App />);
  const appHeaderElement = screen.getByTestId('App-header');
  expect(appHeaderElement).toBeInTheDocument();
});

test('App renders a div with the class App-body', () => {
  render(<App />);
  const appBodyElement = screen.getByTestId('App-body');
  expect(appBodyElement).toBeInTheDocument();
});

test('App renders a div with the class App-footer', () => {
  render(<App />);
  const appFooterElement = screen.getByTestId('App-footer');
  expect(appFooterElement).toBeInTheDocument();
});

test('App contains the Notifications component', () => {
  render(<App />);
  const notificationsComponent = screen.getByTestId('Notifications');
  expect(notificationsComponent).toBeInTheDocument();
});

test('App contains the Header component', () => {
  render(<App />);
  const headerComponent = screen.getByTestId('Header');
  expect(headerComponent).toBeInTheDocument();
});

test('App contains the Login component', () => {
  render(<App />);
  const loginComponent = screen.getByTestId('Login');
  expect(loginComponent).toBeInTheDocument();
});

test('App contains the Footer component', () => {
  render(<App />);
  const footerComponent = screen.getByTestId('Footer');
  expect(footerComponent).toBeInTheDocument();
});

