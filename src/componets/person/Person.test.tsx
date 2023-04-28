import React from 'react';
import { render, screen } from '@testing-library/react';
import Person from './Person';

test('renders a name', () => {
  render(<Person name='jack'/>);
  const linkElement = screen.getByText(/Name is jack/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders a family', () => {
  render(<Person name='jack'/>);
  const linkElement = screen.getByRole("contentinfo");
  expect(linkElement).toHaveTextContent("family");
  expect(linkElement).toHaveAttribute("role","contentinfo");
});
