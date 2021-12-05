import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders question', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Who are you\?/i);
  expect(linkElement).toBeInTheDocument();
});
