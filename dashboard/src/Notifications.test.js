import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications', () => {
  // Test if Notifications renders without crashing
  test('renders Notifications component', () => {
    render(<Notifications />);
    expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument();
  });

  // Test if Notifications renders three list items
  test('renders three list items', () => {
    render(<Notifications />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });

  // Test if Notifications renders the text 'Here is the list of notifications'
  test('renders correct text in component', () => {
    render(<Notifications />);
    expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument();
  });
});