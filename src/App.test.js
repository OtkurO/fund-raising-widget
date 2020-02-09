import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders tooltip', () => {
  const { getByText } = render(<App />);
  const tooltipElement = getByText(/goal funded/i);
  expect(tooltipElement).toBeInTheDocument();
});

test('renders text content about fundraising status', () => {
  const { getByText } = render(<App />);
  const textContentElement = getByText(
    /has been raised towards the goal to raise/i
  );
  expect(textContentElement).toBeInTheDocument();
});
