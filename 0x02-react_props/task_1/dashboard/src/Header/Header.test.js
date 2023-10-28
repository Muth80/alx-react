import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders Header component without crashing', () => {
  render(<Header />);
});

test('Header component contains img and h1 tags', () => {
  render(<Header />);
  
  // Check if the img tag is present
  const imgElement = screen.getByRole('img', { name: /logo/i });
  expect(imgElement).toBeInTheDocument();

  // Check if the h1 tag is present
  const h1Element = screen.getByRole('heading', { name: /School dashboard/i });
  expect(h1Element).toBeInTheDocument();
});

