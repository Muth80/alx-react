import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';

test('renders Login component without crashing', () => {
  render(<Login />);
});

test('Login component contains 2 input tags and 2 label tags', () => {
  render(<Login />);

  // Check if there are 2 input elements
  const inputElements = screen.getAllByRole('textbox');
  expect(inputElements).toHaveLength(2);

  // Check if there are 2 label elements
  const labelElements = screen.getAllByRole('label');
  expect(labelElements).toHaveLength(2);
});

