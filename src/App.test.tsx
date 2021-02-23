import React from 'react';
import { render, fireEvent, screen } from '../test-utils';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it('Renders the connected app with initialState', () => {
  render(<App />, { initialState: { projects: [], languages: [] } });

  expect(screen.getByText(/redux user/i)).toBeInTheDocument();
});
