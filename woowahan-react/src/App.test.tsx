import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';

import App from './App';

it('App', () => {
  render(<App />);

  const app = screen.getByText(/Hello, world/);

  expect(app).toHaveTextContent('Hello, world!');
});
