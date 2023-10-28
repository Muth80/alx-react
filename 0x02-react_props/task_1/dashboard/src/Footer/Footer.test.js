import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders Footer component without crashing', () => {
  render(<Footer />);
});

test('Footer component contains the text "Copyright"', () => {
  render(<Footer />);

  // Find the text element containing "Copyright"
  const copyrightText = screen.getByText('Copyright');
  expect(copyrightText).toBeInTheDocument();
});

