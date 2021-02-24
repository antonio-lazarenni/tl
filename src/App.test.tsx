import React from 'react';
import { render, screen } from '../testUtils/test-utils';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/collapse all/i);
  expect(linkElement).toBeInTheDocument();
});

it('Renders the connected app with initialState', () => {
  render(<App />, { initialState: { projects: [], languages: [] } });

  expect(screen.getByRole('button', { name: /🌚/i })).toBeInTheDocument();
});
